import React, { useState, useEffect } from 'react';

const FormSubmission = () => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(true);

  useEffect(() => {
    // Set timeout for 2 seconds, then switch to normal screen
    const timer = setTimeout(() => {
      setIsAnimationVisible(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, []);

  return (
    <div className="submission-screen">
      {isAnimationVisible ? (
        <div className="confetti-container">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <p className="text">Form submitted successfully</p>
        </div>
      ) : (
        <div className="normal-checkmark">
          <div className="checkmark">&#10003;</div> {/* Unicode checkmark */}
          <p className="text">Form submitted successfully</p>
        </div>
      )}
    </div>
  );
};

export default FormSubmission;
