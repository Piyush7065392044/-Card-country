import { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #000;
          color: #fff;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .container {
          width: 100%;
          height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .simple-text {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 600;
          color: #ffffff;
        }

        .datacontainer {
          min-height: 100vh;
          background: #111;
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          padding: 48px 24px;
          justify-content: center;
        }

        .card {
          background: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          width: 260px;
          padding: 20px;
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7);
        }

        .card img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .card h3 {
          color: #d4af37;
          margin-bottom: 8px;
        }

        .card p {
          color: #ccc;
        }
      `}</style>

      <div className="container">
        <h1 className="simple-text">Welcome to World Tour and Company</h1>
      </div>

      <div className="datacontainer">
        {data.length === 0 ? (
          <p style={{ color: "#ccc" }}>Loading data...</p>
        ) : (
          data.map((item) => (
            <div className="card" key={item.id}>
              <img
                src={`https://source.unsplash.com/400x300/?luxury,${item.id}`}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>{item.email}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
