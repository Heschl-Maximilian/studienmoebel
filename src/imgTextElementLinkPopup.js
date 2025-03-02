import React from "react";
import "./css/ImgTextElementRight.css";

const ImgTextElementLinkPopup = ({ 
  textLeft, 
  imgSrcLeft, 
  textMiddleLeft, 
  textMiddleRight, 
  textRight, 
  imgSrcRight, 
  onRightImageClick // Event-Handler für das rechte Bild 
}) => {
  return (
    <div className="txt-img-container">
      {/* Linkes Bild mit Text unten */}
      <div className="half-div image-div left" onClick={() => window.location.href = "https://www.complex-farben.at/"}>
        <img 
          src={imgSrcLeft} 
          alt="Bild 1" 
        />        
        <p className="image-text white bottom">{textLeft}</p>
      </div>

      {/* Text in der Mitte */}
      <div className="text-div text-left-high">
        <p>{textMiddleLeft}</p>
      </div>
      <div className="text-div text-right-low">
        <p>{textMiddleRight}</p>
      </div>

      {/* Rechtes Bild mit Text oben */}
      <div className="half-div image-div right" onClick={onRightImageClick} style={{ cursor: "pointer" }}>
        <img src={imgSrcRight} alt="Bild 2" />
        <p className="image-text black top">{textRight}</p>
      </div>
    </div>
  );
};

export default ImgTextElementLinkPopup;
