import React from "react";
import "../css/ImgTextElementRight.css";

const ImgElementRightMobileLink = ({ imgSrcUp, textUp, imgSrcDown, textDown, onRightImageClick }) => {
  return (
    <div>
      <div className="img-text-container">
        {/* First Image */}
        <div className="img-container first" onClick={() => window.location.href = "https://www.complex-farben.at/"}>
          <img src={imgSrcUp} alt="Image" />
          {/* Text inside the first image */}
          <div className="text-inside">{"HARTWACHS ÖL"}</div>
        </div>

        {/* Vertical Text */}
        <div className="text-container">
          <p className="text-fancy-mobile link">{textUp}</p>
        </div>
      </div>

      <div className="img-text-container">
        {/* Vertical Text */}
        <div className="text-container">
          <p className="text-minimal-mobile link">{textDown}</p>
        </div>

        {/* Second Image */}
        <div className="img-container second">
          <img src={imgSrcDown} onClick={onRightImageClick} style={{ cursor: "pointer" }} />
          {/* Text inside the second image */}
          <div className="text-inside">{"KIEFER"}</div>
        </div>
      </div>
    </div>
  );
};

export default ImgElementRightMobileLink;
