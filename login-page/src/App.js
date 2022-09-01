import React from 'react';
import './index.css';
import LogInCard from './components/login';
import Navbar from './components/navbar';

export default function App() {
  return (
    <div className="container">
    <Navbar />
    <LogInCard />
    </div>
  )
}