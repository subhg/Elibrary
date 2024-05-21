


import React, { useState } from "react";
import { Link,NavLink} from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../Auth0/Login";
import LogoutButton from "../Auth0/Logout";
import Profile from "../Auth0/Profile";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const [isMobileMenuOpen, setIsMobileMenuOpen] =useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
    
    <nav className="bg-gray-800  p-4 fixed w-full top-0 z-10 mb-3 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link to="/">
          <div className="text-white font-bold text-xl flex flex-wrap justify-between ">
            <img
              className=" h-8 w-10 rounded-xl  pr-1 "
              src="https://images.pexels.com/photos/7661331/pexels-photo-7661331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            ></img>
            Bookzz
          </div>
        </Link>
        {/* Navigation Links */}
        <div className="lg:flex space-x-4 font-medium ">
          <NavLink
            to="/"
            className={({isActive})=>
            ` ${isActive?"text-orange-500":"text-white"} font-bold px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
             Home
          </NavLink>
          <NavLink
            to="/books"
            className={({isActive})=>
             `${isActive?"text-orange-500":"text-white"} font-bold px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
             Books
          </NavLink>
          <NavLink
            to="/blogs"
            className={({isActive})=>
            ` ${isActive?"text-orange-500":" text-white"}  font-bold px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
             Blogs
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=>
              ` ${isActive? "text-orange-500" :"text-white"} font-bold px-3 py-2  hover:bg-slate-100 hover:text-slate-900`
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/contact"
            className={({isActive})=>
          ` ${isActive?"text-orange-500":"text-white "}  font-bold px-3 py-2  rounded-lg hover:bg-slate-100 hover:text-slate-900`
          }
          >
             Contact us
          </NavLink>
          
        </div>
        
        {/* Mobile menu button */}
        
        {/* Search Bar */}
        <div className="lg:flex items-center  ">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-md"
          />
          <button className="ml-2 bg-blue-500 text-white p-2 rounded-md">
            Search
          </button>
        </div>

        {/* Login/Sign Up Buttons */}
       {/* Conditional rendering based on authentication status */}
      {isAuthenticated ? (
        // If user is authenticated, show the profile and logout button
        <div className="profile-container">
          <Profile />
          <LogoutButton className="logout-button" />
        </div>
      ) : (
        // If user is not authenticated, show the login button
        <LoginButton />
      )}
      </div>
      
    </nav>
    {/* <div className=" w-36 h-1 broder-b-4 border-yellow-400 m-4">
      
       </div> */}
    </>
  );
};


export default Navbar;
