import { useStartups } from "../context/StartupContext";
import { useNavigate } from "react-router-dom";

export default function Favourites() {
  const { state, dispatch } = useStartups();
  const nav = useNavigate();

  if (state.favourites.length === 0) {
    return (
      <div className="favourites-empty">
        <h1>Your Favourite Startups</h1>
        <p>Startups you saved for later</p><br />
        <p>No favourites yet. Go to Startups and add some ⭐</p>

        <button className="nav-button" onClick={() => nav("/startups")} >Startups</button>
      </div>
    );
  }

  return (
    <div className="favourites-page">
      <header className="favourites-header">
        <h1>Your Favourite Startups</h1>
        <p>Startups you saved for later</p>
      </header>

      <div className="favourites-list">
        {state.favourites.map((s) => (
          <div key={s.id} className="favourites-card">
            <h2>{s.name}</h2>
            <p className="tagline">{s.tagline}</p>
            <p className="category">Category: {s.category}</p>
            <div className="favourites-actions">
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-link"
              >
                Visit →
              </a>
              <button
                className="remove-button"
                onClick={() =>
                  dispatch({ type: "REMOVE_FAV", payload: s.id })
                }
              >
               Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
