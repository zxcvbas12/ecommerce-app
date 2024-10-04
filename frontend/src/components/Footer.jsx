import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-auto h-28" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel,
            inventore harum veritatis, neque velit quidem aspernatur earum
            tempore totam autem eaque voluptate ullam at eveniet aliquid
            voluptates vitae amet modi.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-4">COMPANY</p>
          <ul className="flex flex-col gap-4 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-4 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
