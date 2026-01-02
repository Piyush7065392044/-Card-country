import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>MyApp</h2>
          <p>Crafting exceptional digital experiences.</p>
        </div>

        <nav className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/country">Country</Link>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} MyApp. All rights reserved.</span>
      </div>
    </footer>

    <style>{`
      .footer {
        background: #000;
        color: #fff;
        font-family: "Helvetica Neue", Arial, sans-serif;
        padding: 60px 20px 30px;
        margin-top: auto;
      }
      .footer__top {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
      }
      .footer__brand h2 {
        font-size: 1.75rem;
        font-weight: 300;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
      }
      .footer__brand p {
        color: #aaa;
        font-size: 0.9rem;
      }
      .footer__nav {
        display: flex;
        gap: 2rem;
      }
      .footer__nav a {
        color: #fff;
        text-decoration: none;
        font-size: 0.9rem;
        letter-spacing: 1px;
        transition: opacity 0.3s;
      }
      .footer__nav a:hover {
        opacity: 0.6;
      }
      .footer__bottom {
        max-width: 1200px;
        margin: 3rem auto 0;
        border-top: 1px solid rgba(255, 255, 255, 0.15);
        padding-top: 1.5rem;
        text-align: center;
        font-size: 0.8rem;
        color: #777;
      }
      @media (max-width: 600px) {
        .footer__top {
          flex-direction: column;
          text-align: center;
        }
        .footer__nav {
          gap: 1.2rem;
        }
      }
    `}</style>
  </>
);

export default Footer;