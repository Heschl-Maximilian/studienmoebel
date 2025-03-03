import React from 'react';
import './css/imgText.css';

const ImgText = ({ imgSrc, title, description }) => {
  return (
    <div className="img-text-container-popup">
      {/* Left Image */}
      <div className="half-div-popup image-div-popup left">
        <img className="text-img-popup" src={imgSrc} alt="Bild 1" />
        <p className="image-text-popup white bottom">{title}</p>
      </div>

      {/* Right Text */}
      <div className="text-content-popup">
        <p>
          {description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ImgText;
