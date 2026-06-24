// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Cartview from './pages/Cartview.tsx';
//import { products } from './product.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-rose-600 mb-6">
        Super Fake Store
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cartview" element={<Cartview cart={cart} />} />
      </Routes>
    </div>
  );
}
