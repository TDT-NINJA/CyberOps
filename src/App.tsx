import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import {Affectations, Agents, Dashboard, Equipements, Implants, MarcheNoire, Missions, Parametre, Rapports} from "./pages/indexPages.ts";
import './App.css'

function App() {

  return (
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/agents">Agents</Link></li>
              <li><Link to="/missions">Missions</Link></li>
              <li><Link to="/affectations">Affectations</Link></li>
              <li><Link to="/equipements">Equipements</Link></li>
              <li><Link to="/implants">Implants</Link></li>
              <li><Link to="/marcheNoire">Marché Noire</Link></li>
              <li><Link to="/rapports">Rapports</Link></li>
              <li><Link to="/parametre">Paramètre</Link></li>
            </ul>
          </nav>

          <div className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/affectations" element={<Affectations />} />
              <Route path="/equipements" element={<Equipements />} />
              <Route path="/implants" element={<Implants />} />
              <Route path="/marcheNoire" element={<MarcheNoire />} />
              <Route path="/rapports" element={<Rapports />} />
              <Route path="/parametre" element={<Parametre />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App
