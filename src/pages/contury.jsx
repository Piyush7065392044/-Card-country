import { useEffect, useState } from "react";
import { getCountryData } from "../services/PostApi";
import Loader from "../component/ui/LOader";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc / desc
  const [filterRegion, setFilterRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;

  // Filter + Search + Sort
  let filtered = countries
    .filter((c) => 
      c.capital?.[0]?.toLowerCase().includes(search.toLowerCase()) ||
      Object.values(c.languages || {}).join(", ").toLowerCase().includes(search.toLowerCase())
    )
    .filter((c) => filterRegion === "All" || c.region === filterRegion)
    .sort((a, b) => {
      const nameA = a.capital?.[0] || "";
      const nameB = b.capital?.[0] || "";
      if (sortOrder === "asc") return nameA.localeCompare(nameB);
      return nameB.localeCompare(nameA);
    });

  if (selectedCountry) {
    // Country Details View
    const c = selectedCountry;
    return (
      <div style={{ padding: "20px", background: "#111", color: "#fff", minHeight: "100vh" }}>
        <button
          onClick={() => setSelectedCountry(null)}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            background: "#d4af37",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            color: "#000"
          }}
        >
          Back
        </button>
        <h1>{c.capital?.[0]}</h1>
        <p><b>Languages:</b> {Object.values(c.languages || {}).join(", ")}</p>
        <p><b>Region:</b> {c.region}</p>
        <p><b>Subregion:</b> {c.subregion}</p>
        <p><b>Population:</b> {c.population?.toLocaleString()}</p>
        <img src={c.flags?.png} alt={c.capital?.[0]} style={{ width: "300px", marginTop: "20px", borderRadius: "8px" }} />
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", background: "#111", minHeight: "100vh", color: "#fff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Country List</h1>

      {/* Search + Sort + Filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by capital or language..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "none", width: "250px" }}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "none" }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <select
          value={filterRegion}
          onChange={(e) => setFilterRegion(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "none" }}
        >
          <option value="All">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      {/* Country Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filtered.map((c, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedCountry(c)}
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              width: "220px",
              textAlign: "center",
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-8px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={c.flags?.png}
              alt={c.capital?.[0]}
              style={{ width: "100%", borderRadius: "5px", marginBottom: "10px" }}
            />
            <h3>{c.capital?.[0]}</h3>
            <p>{Object.values(c.languages || {}).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
