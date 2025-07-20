import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { DoctorContext } from '../context/DoctorContext';
import { AdminContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext);
  const { aToken, setAToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    if (dToken) {
      setDToken('');
      localStorage.removeItem('dToken');
    }
    if (aToken) {
      setAToken('');
      localStorage.removeItem('aToken');
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-white border-b shadow-sm">
      <div className="flex justify-between items-center min-w-[380px] px-4 sm:px-10 py-3 whitespace-nowrap">
        {/* Logo & Role */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <img
            onClick={() => navigate('/')}
            src={assets.admin_logo}
            alt="App Logo"
            className="w-32 sm:w-40 cursor-pointer object-contain"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/150x50?text=Logo')}
          />
          <span className="border px-3 py-1 rounded-full border-gray-400 text-gray-600">
            {aToken ? 'Admin' : 'Doctor'}
          </span>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="bg-primary hover:bg-blue-600 text-white text-sm px-6 sm:px-10 py-2 rounded-full transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
