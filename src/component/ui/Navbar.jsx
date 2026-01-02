import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>{`
        /* ---------- Luxury Black-Shine Theme ---------- */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 48px;
          background: radial-gradient(circle at 50% 50%, #111 0%, #000 100%);
          box-shadow: 0 4px 20px rgba(0,0,0,.7), inset 0 0 0 1px rgba(255,255,255,.08);
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .logo {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #fff;
          text-transform: uppercase;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
          padding: 8px 0;
          transition: color .3s ease;
        }

        .nav-links a:hover {
          color: #d4af37; /* subtle gold accent on hover */
        }

        

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #d4af37;
          transition: width .3s ease;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            padding: 20px 24px;
          }

          .nav-links {
            margin-top: 12px;
            gap: 24px;
          }
        }
      `}</style>

      <nav className="navbar">
        <h2 className="logo">WorildTour</h2>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/country">Country</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;