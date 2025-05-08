// src/App.tsx
import React from "react";
import Layout from "./layout/Layout";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./redux/store";
import "./App.css";
import { fetchProducts } from "./redux/slices/productSlics";
import Home from "./pages/Home";
import { Route, Routes} from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Cart from "./pages/components/Cart";
import Profile from './pages/components/Profile'
import Categories from './pages/components/Category';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Toaster position="bottom-left" toastOptions={{ duration: 5000 }} />

      </Layout>
  );
};

export default App;
