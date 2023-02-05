import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgb(0,0,0)] text-white relative">
      <div className="flex">
        <div className="mx-[144px] mt-10 mb-2">
          <span className="text-gray-500 font-bold">COMPANY</span>
          <ul className="mt-7 space-y-1">
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Swiggy Blog</li>
          </ul>
        </div>

        <div className="mx-[144px] mt-10 mb-2">
          <span className="text-gray-500  font-bold">CONTACT</span>
          <ul className="mt-7 space-y-1">
            <li>Help & Supprot</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        <div className="mx-[144px] mt-10 mb-2">
          <span className="text-gray-500 font-bold">LEGAL</span>
          <ul className="mt-7 space-y-1">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="px-[144px] flex">
        <span>FoodVilla</span>
        <div>
          <span>© 2023 FoodVilla</span>
        </div>
        <div>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
