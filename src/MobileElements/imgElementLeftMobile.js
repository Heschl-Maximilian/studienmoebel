import React from "react";
import "../css/ImgTextElementRight.css";

const ImgElementLeftMobile = ({ imgSrcUp, textUp, imgSrcDown, textDown }) => {
  return (
    <div>
      <div className="img-text-container">
        {/* Image */}
        <div className="img-container">
          <img src={imgSrcUp} alt="Image" />
        </div>

        {/* Vertical Text */}
        <div className="text-container">
          <p className="text-fancy-mobile">{textUp}</p>
        </div>
      </div>
      <div className="img-text-container">
        {/* Vertical Text */}
        <div className="text-container">
          <p className="text-minimal-mobile">{textDown}</p>
        </div>
        {/* Image */}
        <div className="img-container">
          <img src={imgSrcDown} alt="Image" />
        </div>
      </div>
    </div>

    
  );
};

export default ImgElementLeftMobile;
