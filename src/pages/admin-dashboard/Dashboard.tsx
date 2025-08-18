import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

// ---------------------------------------------
// Types
// ---------------------------------------------
export type SpecialCategory = "student" | "cafe";

export type Special = {
  id: string;
  title: string;
  description?: string;
  priceCents: number; // store as cents to avoid float issues
  category: SpecialCategory;
  imageUrl?: string;
  isActive: boolean;
  startAt: string; // ISO
  endAt?: string; // ISO or undefined
  createdAt: string; // ISO
  updatedAt: string; // ISO
};

// ---------------------------------------------
// Local storage helpers (swap out for API later)
// ---------------------------------------------
const STORAGE_KEY = "cafespecial.specials";

function loadSpecials(): Special[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Special[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveSpecials(data: Special[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ---------------------------------------------
// Utilities
// ---------------------------------------------
function toCents(input: string | number) {
  const n = typeof input === "string" ? parseFloat(input) : input;
  if (!isFinite(n) || n < 0) return 0;
  return Math.round(n * 100);
}

function fromCents(cents: number) {
  return (cents / 100).toFixed(2);
}

function nowIso() {
  return new Date().toISOString();
}

function computeStatus(s: Special, now = new Date()) {
  const start = new Date(s.startAt);
  const end = s.endAt ? new Date(s.endAt) : undefined;
  if (!s.isActive) return "Inactive" as const;
  if (start > now) return "Scheduled" as const;
  if (end && end < now) return "Expired" as const;
  return "Active" as const;
}

// ---------------------------------------------
// Form state
// ---------------------------------------------
const emptyForm = (category: SpecialCategory): FormState => ({
  id: "",
  title: "",
  description: "",
  price: "",
  category,
  imageUrl: "",
  isActive: true,
  startAt: new Date().toISOString().slice(0, 16), // yyyy-MM-ddTHH:mm
  endAt: "",
});

type FormState = {
  id: string;
  title: string;
  description: string;
  price: string; // dollars string
  category: SpecialCategory;
  imageUrl: string;
  isActive: boolean;
  startAt: string; // yyyy-MM-ddTHH:mm
  endAt: string; // yyyy-MM-ddTHH:mm
};

// ---------------------------------------------
// Dashboard Component
// ---------------------------------------------
const Dashboard: React.FC = () => {
  // Tabs & data
  const [tab, setTab] = useState<SpecialCategory>("student");
  const [specials, setSpecials] = useState<Special[]>([]);

  // Filters
  const [statusFilter, setStatusFilter] = useState<
    "all" | "Active" | "Scheduled" | "Expired" | "Inactive"
  >("all");

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm(tab));
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setSpecials(loadSpecials());
  }, []);

  // When changing tabs, reset form category
  useEffect(() => {
    setForm((f) => ({ ...f, category: tab }));
  }, [tab]);

  const filtered = useMemo(() => {
    const now = new Date();
    return specials
      .filter((s) => s.category === tab)
      .filter((s) =>
        statusFilter === "all" ? true : computeStatus(s, now) === statusFilter
      )
      .sort(
        (a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime()
      );
  }, [specials, tab, statusFilter]);

  // CRUD ops
  const upsert = (data: FormState) => {
    const id = data.id || `${Date.now()}`;
    const item: Special = {
      id,
      title: data.title.trim(),
      description: data.description.trim() || undefined,
      priceCents: toCents(data.price),
      category: data.category,
      imageUrl: data.imageUrl.trim() || undefined,
      isActive: data.isActive,
      startAt: new Date(data.startAt).toISOString(),
      endAt: data.endAt ? new Date(data.endAt).toISOString() : undefined,
      createdAt: data.id
        ? specials.find((s) => s.id === id)?.createdAt ?? nowIso()
        : nowIso(),
      updatedAt: nowIso(),
    };

    setSpecials((prev) => {
      const exists = prev.some((s) => s.id === id);
      const next = exists
        ? prev.map((s) => (s.id === id ? item : s))
        : [item, ...prev];
      saveSpecials(next);
      return next;
    });
    toast.success(`Special ${data.id ? "updated" : "created"}`);
  };

  const onEdit = (s: Special) => {
    setIsEditing(true);
    setForm({
      id: s.id,
      title: s.title,
      description: s.description ?? "",
      price: fromCents(s.priceCents),
      category: s.category,
      imageUrl: s.imageUrl ?? "",
      isActive: s.isActive,
      startAt: s.startAt.slice(0, 16),
      endAt: s.endAt ? s.endAt.slice(0, 16) : "",
    });
    setIsOpen(true);
  };

  const onDelete = (id: string) => {
    setSpecials((prev) => {
      const next = prev.filter((s) => s.id !== id);
      saveSpecials(next);
      return next;
    });
    toast.info("Special deleted");
  };

  const onDuplicate = (s: Special) => {
    const copy: FormState = {
      id: "",
      title: `${s.title} (Copy)`,
      description: s.description ?? "",
      price: fromCents(s.priceCents),
      category: s.category,
      imageUrl: s.imageUrl ?? "",
      isActive: s.isActive,
      startAt: new Date().toISOString().slice(0, 16),
      endAt: "",
    };
    setIsEditing(false);
    setForm(copy);
    setIsOpen(true);
  };

  const resetForm = () => {
    setIsEditing(false);
    setForm(emptyForm(tab));
  };

  // Validation
  const canSave = form.title.trim().length > 0 && toCents(form.price) >= 0;

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2E3F59]">
          Chef Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTab("student")}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              tab === "student"
                ? "bg-[#4D79A9] text-white"
                : "bg-[#D1D3D4] text-[#2E3F59] hover:bg-[#c9ccd0]"
            }`}
          >
            Student Specials
          </button>
          <button
            onClick={() => setTab("cafe")}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
              tab === "cafe"
                ? "bg-[#4D79A9] text-white"
                : "bg-[#D1D3D4] text-[#2E3F59] hover:bg-[#c9ccd0]"
            }`}
          >
            Cafe Specials
          </button>
        </div>
      </div>

      {/* Actions row */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#636466]">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="h-10 rounded-md border border-[#D1D3D4] bg-white px-3 text-sm text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
          >
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Expired">Expired</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex-1" />
        <button
          onClick={() => {
            resetForm();
            setIsOpen(true);
          }}
          className="self-start sm:self-auto px-4 py-2 rounded-md bg-[#4D79A9] text-white text-sm font-semibold hover:bg-[#2E3F59]"
        >
          + New Special
        </button>
      </div>

      {/* List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => {
          const status = computeStatus(s);
          return (
            <div
              key={s.id}
              className="rounded-xl overflow-hidden border border-[#D1D3D4] bg-white shadow-sm"
            >
              {s.imageUrl ? (
                <img
                  src={s.imageUrl}
                  alt={s.title}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-[#D1D3D4] flex items-center justify-center text-[#2E3F59]">
                  No Image
                </div>
              )}
              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-[#2E3F59]">
                    {s.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      status === "Active"
                        ? "bg-green-100 text-green-700"
                        : status === "Scheduled"
                        ? "bg-yellow-100 text-yellow-800"
                        : status === "Expired"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status}
                  </span>
                </div>
                {s.description && (
                  <p className="text-sm text-[#636466] line-clamp-2">
                    {s.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-[#2E3F59] font-semibold">
                    ${fromCents(s.priceCents)}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(s)}
                      className="text-sm px-3 py-1 rounded-md border border-[#D1D3D4] text-[#2E3F59] hover:bg-[#e6edf5]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDuplicate(s)}
                      className="text-sm px-3 py-1 rounded-md border border-[#D1D3D4] text-[#2E3F59] hover:bg-[#e6edf5]"
                    >
                      Duplicate
                    </button>
                    <button
                      onClick={() => onDelete(s.id)}
                      className="text-sm px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="text-xs text-[#636466] flex flex-wrap gap-3">
                  <span>Start: {new Date(s.startAt).toLocaleString()}</span>
                  {s.endAt && (
                    <span>End: {new Date(s.endAt).toLocaleString()}</span>
                  )}
                </div>
                <div className="text-xs text-[#636466]">
                  Active: {s.isActive ? "Yes" : "No"}
                </div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-[#636466] py-16 border border-dashed border-[#D1D3D4] rounded-xl">
            No specials yet. Click{" "}
            <span className="text-[#2E3F59] font-semibold">+ New Special</span>{" "}
            to add one.
          </div>
        )}
      </div>

      {/* Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 sm:left-auto sm:w-[520px] bg-white rounded-t-2xl sm:rounded-none sm:rounded-l-2xl shadow-xl p-5 sm:p-6 overflow-y-auto">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#2E3F59]">
                {isEditing ? "Edit Special" : "New Special"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-[#f3f4f6]"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
              <label className="block">
                <span className="text-sm text-[#2E3F59] font-semibold">
                  Title *
                </span>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                  placeholder="e.g., $5 Burrito Bowl"
                />
              </label>

              <label className="block">
                <span className="text-sm text-[#2E3F59] font-semibold">
                  Description
                </span>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="mt-1 w-full min-h-[90px] rounded-md border border-[#D1D3D4] px-3 py-2 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                  placeholder="Short details, ingredients, etc."
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-[#2E3F59] font-semibold">
                    Price (USD) *
                  </span>
                  <input
                    type="number"
                    inputMode="decimal"
                    step="0.01"
                    min="0"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                    placeholder="e.g., 7.99"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#2E3F59] font-semibold">
                    Category *
                  </span>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: e.target.value as SpecialCategory,
                      })
                    }
                    className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                  >
                    <option value="student">Student</option>
                    <option value="cafe">Cafe</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-sm text-[#2E3F59] font-semibold">
                  Image URL
                </span>
                <input
                  value={form.imageUrl}
                  onChange={(e) =>
                    setForm({ ...form, imageUrl: e.target.value })
                  }
                  className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                  placeholder="https://…"
                />
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-[#2E3F59] font-semibold">
                    Start Date/Time *
                  </span>
                  <input
                    type="datetime-local"
                    value={form.startAt}
                    onChange={(e) =>
                      setForm({ ...form, startAt: e.target.value })
                    }
                    className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                  />
                </label>
                <label className="block">
                  <span className="text-sm text-[#2E3F59] font-semibold">
                    End Date/Time
                  </span>
                  <input
                    type="datetime-local"
                    value={form.endAt}
                    onChange={(e) =>
                      setForm({ ...form, endAt: e.target.value })
                    }
                    className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
                  />
                </label>
              </div>

              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isActive}
                  onChange={(e) =>
                    setForm({ ...form, isActive: e.target.checked })
                  }
                />
                <span className="text-sm text-[#2E3F59]">Active</span>
              </label>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    resetForm();
                  }}
                  className="px-4 py-2 rounded-md border border-[#D1D3D4] text-[#2E3F59] hover:bg-[#e6edf5]"
                >
                  Cancel
                </button>
                <button
                  disabled={!canSave}
                  onClick={() => {
                    upsert(form);
                    setIsOpen(false);
                    resetForm();
                  }}
                  className="px-4 py-2 rounded-md bg-[#4D79A9] text-white font-semibold disabled:opacity-50 hover:bg-[#2E3F59]"
                >
                  {isEditing ? "Save changes" : "Create special"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
