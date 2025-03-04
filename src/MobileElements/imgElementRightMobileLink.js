import React from "react";
import "../css/ImgTextElementRight.css";

const ImgElementRightMobileLink = ({ imgSrcUp, textUp, imgSrcDown, textDown, onRightImageClick }) => {
  return (
    <div>
      <div className="img-text-container">
        {/* Image */}
        <div className="img-container" onClick={() => window.location.href = "https://www.complex-farben.at/"}>
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
          <img src={imgSrcDown} alt="Image" onClick={onRightImageClick} style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>

    
  );
};

export default ImgElementRightMobileLink;
