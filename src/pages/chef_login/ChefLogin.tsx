import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login, setToken, getToken, getMe, clearToken } from "../../services/auth";
import { toast } from "react-toastify";

const ChefLogin: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = getToken();
    if (t) {
      // Attempt a quick validation; if valid, go to dashboard
      getMe(t)
        .then(() => navigate("/Dashboard", { replace: true }))
        .catch(() => {
          clearToken();
        });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setLoading(true);
    try {
      const token = await login(username, password);
      setToken(token.access_token);
      toast.success("Logged in successfully");
      navigate("/Dashboard", { replace: true });
    } catch (err) {
      console.error(err);
      toast.error("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-[#2E3F59] mb-1">Chef Login</h1>
        <p className="text-sm text-[#636466] mb-6">Sign in to access the dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#2E3F59]">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
              placeholder="chef"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2E3F59]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full h-11 rounded-md border border-[#D1D3D4] px-3 text-[#2E3F59] focus:outline-none focus:ring-2 focus:ring-[#4D79A9]"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !username || !password}
            className="w-full h-11 rounded-md bg-[#4D79A9] text-white font-semibold disabled:opacity-50 hover:bg-[#2E3F59]"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/Menu" className="text-sm text-[#2E3F59] hover:underline">
            ← Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefLogin;

