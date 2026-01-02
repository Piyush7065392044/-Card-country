import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>

        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>

      <style>{`
        .error-page {
          min-height: 100vh;
          background: #000;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .error-page h1 {
          font-size: 100px;
          margin: 0;
          color: #38bdf8;
        }

        .error-page h2 {
          font-size: 28px;
          margin: 10px 0;
        }

        .error-page p {
          color: #aaa;
          margin-bottom: 25px;
        }

        .home-btn {
          padding: 12px 25px;
          background: #38bdf8;
          color: black;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          transition: 0.3s;
        }

        .home-btn:hover {
          background: white;
          color: black;
        }

        @media (max-width: 600px) {
          .error-page h1 {
            font-size: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default ErrorPage;
