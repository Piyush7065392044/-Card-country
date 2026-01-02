import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <h2>Loading...</h2>

      <style>{`
        .loader-container {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #000;
          color: white;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 6px solid #444;
          border-top: 6px solid #d4af37;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        h2 {
          font-weight: 500;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
};

export default Loader;
