import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.tsx";
import App from "./App.tsx";
import About from "./pages/about_page/About.tsx";
import Story from "./pages/story_page/Story.tsx";
import Locations from "./pages/locations_page/Locations.tsx";
import PhotoGallery from "./pages/photo_gallery/PhotoGallery.tsx";
import Events from "./pages/events_page/events.tsx";
import Contact from "./pages/contact_page/Contact.tsx";
import Menu from "./pages/menu_page/Menu.tsx";
import SignLogin from "./pages/sign-login_page/Sign-Login.tsx";
import EmptyCart from "./pages/cart_page/Cart.tsx";
import { CartProvider } from "./pages/cart_page/useCart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Signup" element={<SignLogin />} />
          <Route path="/Cart" element={<EmptyCart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
);

