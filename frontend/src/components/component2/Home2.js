import React from "react";
import "./Home2.css";
import Img1 from "../../assets/images/img_1 (1).jpeg";
import Img2 from "../../assets/images/img_1 (2).jpeg";

const Component2 = () => {
  return (
    <>
      <div className="d-flex p-2 image_two">
        <img className="w-50 rounded-4 p-2" src={Img1} alt="loading" />
        <img className="w-50 rounded-4 p-2" src={Img2} alt="loading" />
      </div>
    </>
  );
};

export default Component2;
