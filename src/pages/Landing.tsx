export default function Landing() {
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="landing-nav">
        <h1 className="logo">ᨒ Startup Explorer</h1>
        <div className="nav-links">
          <a href="/startups">Startups</a>
          <a href="/favourites">Favourites</a>
          <a href="/stats">Stats</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="landing-hero">
        <div className="hero-content">
          <h2>Discover the Next Big Thing</h2>
          <p>
            Stay ahead of the curve by exploring the most innovative startups
            from around the world.
          </p>
          <div className="hero-buttons">
            <a href="/startups" className="btn-primary">
              Explore Startups
            </a>
            <a href="/favourites" className="btn-secondary">
              View Favourites
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          {/* espaço pra colocar um gráfico, svg ou img futurista */}
        </div>
      </section>

      {/* Features */}
      <section className="landing-features">
        <div className="feature">
          <h3>⚡ Real Data</h3>
          <p>Fetch the latest startups directly from Product Hunt API.</p>
        </div>
        <div className="feature">
          <h3>⭐ Save Favourites</h3>
          <p>Keep track of the startups you love the most.</p>
        </div>
        <div className="feature">
          <h3>📊 Smart Insights</h3>
          <p>Analyse your favourites by category with live stats.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© 2025 Startup Explorer — Built with React + TS</p>
      </footer>
    </div>
  );
}
