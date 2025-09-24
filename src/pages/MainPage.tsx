import { useState, useEffect } from "react";
import { useStartups } from "../context/StartupContext";
import type { Startup } from "../context/StartupContext";
import { useNavigate } from "react-router-dom";

export default function Startups() {
  const { dispatch } = useStartups();

  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [startups, setStartups] = useState<Startup[]>([]); 

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch("/mockStartups.json");
      const data = await res.json();
      setStartups(data); 
    } catch (err) {
      console.error(`Something went wrong... ${err}`);
      setError("Failed to load startups.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="startups-page">
      <header className="startups-header">
        <h1>Trending Startups 🚀</h1>
        <p>Discover the most innovative startups shaping the future</p>
      </header>

      {loading && (
        <div className="startups-loading">
          <p>Loading startups...</p>
        </div>
      )}

      {error && (
        <div className="startups-error">
          <p>{error}</p>
        </div>
      )}

      {/* List */}
      <div className="startups-list">
        {startups.map((s) => (
          <div key={s.id} className="startup-card">
            <h2>{s.name}</h2>
            <p className="tagline">{s.tagline}</p>
            <p className="category">Category: {s.category}</p>
            <div className="startup-actions">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Visit →
              </a>
              <button
                className="fav-button"
                onClick={() => dispatch({ type: "ADD_FAV", payload: s })}
              >
                ⭐ Favourite
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button" onClick={() => nav("/favourites")} >Favourites</button>
    </div>
  );
}
