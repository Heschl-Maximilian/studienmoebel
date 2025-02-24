import React from 'react';
import './css/imgText.css';
const ImgText = ({ imgSrc, title, description }) => {
  return (
    <div className="img-text-container">
      {/* Linkes Bild */}
      <div className="half-div image-div left">
        <img className="text-img" src={imgSrc} alt="Bild 1" />
        <p className="image-text white bottom">{title}</p>
      </div>
      {/* Rechter Text */}
      <div className="text-content">
        <p>{description.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}</p>
      </div>
    </div>
  );
};

export default ImgText;
