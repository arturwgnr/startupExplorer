🚀 Startup Explorer

A React application to explore startups and save favourites.  
Project focused on practicing React + Context + Reducer + Router.

✨ Features
- List startups (mock data for now)
- Add ⭐ to favourites
- Remove ❌ from favourites
- Navigation between pages (Landing, Startups, Favourites)

🛠️ Tech Stack
- React + Vite + TypeScript
- React Router v6
- Context API + useReducer
- Basic CSS

📂 Structure
/pages → Landing, Startups, Favourites  
/context → StartupContext (Provider + Hook)  
/public → mockStartups.json  

▶️ How to run
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

📌 Notes
- Using mock data in `public/mockStartups.json`
- Next step: integrate real Product Hunt API
