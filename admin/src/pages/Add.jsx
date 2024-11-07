import React from "react";
import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form action="">
      <div>
        <p>Upload Image</p>
        <div>
          <label htmlFor="">
            <img src={assets.upload_area} alt="" />
          </label>
        </div>
      </div>
    </form>
  );
};

export default Add;
