import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider,createRoutesFromElements, createBrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import EditYear from './components/EditYear.jsx';
import Topics from './components/Topics.jsx';
import Sector from './components/Sector.jsx';
import Region from './components/Region.jsx';
import Pest from './components/Pest.jsx';
import Source from './components/Source.jsx';
import Swort from './components/Swort.jsx';
import Country from './components/Country.jsx';
import City from './components/City.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<App/>}>
      <Route 
        path=""
        element={<EditYear/>}
      />
      <Route 
        path="/topic"
        element={<Topics/>}
      />
      <Route 
        path="/sector"
        element={<Sector/>}
      />
      <Route 
        path="/region"
        element={<Region/>}
      />
      <Route 
        path="/pest"
        element={<Pest/>}
      />
      <Route 
        path="/source"
        element={<Source/>}
      />
      <Route 
        path="/swort"
        element={<Swort/>}
      />
      <Route 
        path="/country"
        element={<Country/>}
      />
      <Route 
        path="/city"
        element={<City/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
