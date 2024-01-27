import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Coins from './pages/Coins';
import Profile from './pages/Profile';
import { Cart } from './pages/Cart/cart';
import { Shop } from './pages/shop/shop';
import WasteDetails from './pages/WasteDetails/WasteDetails';
import MyWaste from './pages/MyWaste';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import About from './authentication/About';
import ContactUs from './authentication/ContactUs';
import CheckOut from './pages/Cart/CheckOut';
import { ShopContextProvider } from './pages/shop-context';
import { ConfirmProvider } from './ConfirmContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Sidebar.css';
import Sidebar from './components/Sidebar';

// Wrapper component to conditionally render Sidebar
const AppWithSidebar = ({ children }) => {
  const navigate = useNavigate();

  // Conditionally render Sidebar based on route
  const shouldRenderSidebar = !['/', '/signup', '/contactus', '/about'].includes(window.location.pathname);

  // Redirect to '/' if the user tries to visit a route without the Sidebar
  if (!shouldRenderSidebar) {
    navigate('/');
  }

  return shouldRenderSidebar ? <Sidebar>{children}</Sidebar> : children;
};

const App = () => {
  return (
    <ConfirmProvider>
      <BrowserRouter>
        <ShopContextProvider>
          <AppWithSidebar>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/coins" element={<Coins />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/wastedetails/*" element={<WasteDetails />} />
              <Route path="/mywaste" element={<MyWaste />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Shop />} />
              <Route path="/check" element={<CheckOut />} />
            </Routes>
          </AppWithSidebar>
        </ShopContextProvider>
      </BrowserRouter>
    </ConfirmProvider>
  );
};

export default App;
