
const HeroSection = () => {

;
  return (
     <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:#000;color:#fff;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}

        /* ---- luxury hero ---- */
        .container{
          width:100%;
          height:60vh;
          background:#000;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 24px;
        }
        .hero{
          position:relative;
          width:100%;
          max-width:1200px;
          height:100%;
          display:flex;
          border-radius:12px;
          overflow:hidden;
          box-shadow:0 12px 40px rgba(0,0,0,.7);
        }
        .hero-left{
          flex:1;
          background:linear-gradient(180deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,.8) 100%);
          color:#fff;
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding:48px;
        }
        .hero-left h1{
          font-size:3rem;
          font-weight:800;
          letter-spacing:2px;
          margin-bottom:16px;
          color:#d4af37;
        }
        .hero-left p{
          font-size:1.1rem;
          color:#ccc;
          margin-bottom:24px;
        }
        .hero-left button{
          background:#d4af37;
          color:#000;
          border:none;
          padding:14px 40px;
          font-size:1rem;
          font-weight:700;
          border-radius:30px;
          cursor:pointer;
          transition:.3s;
        }
        .hero-left button:hover{
          background:#fff;
          color:#000;
        }

        .hero-right{
          flex:1;
          background:url("https://images.unsplash.com/photo-1600185361328-cf414c03f0b5?auto=format&fit=crop&w=800&q=80") center/cover no-repeat;
          border-left:1px solid rgba(255,255,255,.1);
        }

        /* ---- data cards ---- */
        .datacontainer{
          min-height:100vh;
          background:#111;
          display:flex;
          flex-wrap:wrap;
          gap:28px;
          padding:48px 24px;
          justify-content:center;
        }
        .card{
          background:#1a1a1a;
          border:1px solid rgba(255,255,255,.08);
          border-radius:12px;
          width:260px;
          padding:20px;
          box-shadow:0 6px 25px rgba(0,0,0,.5);
          transition:transform .3s, box-shadow .3s;
        }
        .card:hover{
          transform:translateY(-8px);
          box-shadow:0 12px 35px rgba(0,0,0,.7);
        }
        .card img{
          width:100%;
          border-radius:8px;
          margin-bottom:12px;
        }
        .card h3{
          color:#d4af37;
          margin-bottom:8px;
          font-size:1.2rem;
        }
        .card p{
          color:#ccc;
          font-size:.9rem;
          line-height:1.4;
        }

        @media(max-width:900px){
          .hero{flex-direction:column;}
          .hero-right{height:250px;border-left:none;}
        }
      `}</style>

      {/* Hero Section */}
      <div className="container">
        <div className="hero">
          <div className="hero-left">
            <h1>Timeless Luxury</h1>
            <p>Discover exclusivity crafted for the discerning few. Experience elegance in every detail.</p>
            <button>Explore More</button>
          </div>
          <div className="hero-right"></div>
        </div>
      </div>

      {/* Data Cards */}
     
    </>
  )
}

export default HeroSection