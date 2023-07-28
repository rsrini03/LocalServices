import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Login from './Components/login';
import { Routes, Route } from 'react-router-dom';
import Services from './Components/Services';
import About from './Components/About';
import Customer_support from './Components/customer_support';
import ProviderInfo from './Components/Provider';
import ProviderList from './Components/providerList';
import UserProfile from './Components/UserProfile';
import Legend from './Components/legend'
import { AnimatePresence, motion } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import Steps from './Components/Steps';
import Payment from './Components/Payment';
import Address from './Components/Address';
import OrderSummary from './Components/OrderSummary';
import AddService from './Components/AddService';
import Feedback from './Components/Feedback';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const location = useLocation();



  return (
    <>
      <Navbar />
      <AnimatePresence mode='wait'>

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/customer" element={<Customer_support />} />
          <Route path="/providerinfo" element={<ProviderInfo />} />
          <Route path="/providerlist/:category" element={<ProviderList />} />
          <Route path="/profile" element={<Legend />} />
          <Route path="/stepper" element={<Steps />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/address" element={<Address />} />
          <Route path="/order" element={<OrderSummary />} />
          <Route path="/addservice" element={<AddService/>} />
          <Route path="/feedback" element={<Feedback/>} />
        </Routes>

      </AnimatePresence>
    </>
  );
}

export default App;
