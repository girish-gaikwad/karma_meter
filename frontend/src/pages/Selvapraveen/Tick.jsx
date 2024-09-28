import React, { useState } from "react";
import "./Karma.css";
import success from '../../assets/success.mp4';
import poster from '../../assets/poster.png';

function Tick() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  return (
    <div className="S_outline-tick">
      <div className="Sout">
      <div className="S_in">
        {!isVideoEnded ? (
          <video
            className="s-vidio"
            src={success}
            type="video/mp4"
            poster={poster}
            width="139"
            height="139"
            autoPlay
            muted
            onEnded={handleVideoEnd}   
          ></video>
        ) : (
          <img
            src={poster}
            alt="Poster"
            width="139"
            height="139"
            className="poster-image"
          />
        )}

        <div className="S_Form">Form Submitted successfully</div>
      </div>
      </div>
    </div>
  );
}

export default Tick;
