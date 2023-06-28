// import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
// import Rentals, { loader as rentalsLoader } from "./pages/Rentals/Rentals"
// import Error from "./components/Error"
import HostLayout from "./pages/Host/HostLayout"
import Dashboard from "./pages/Host/Dashboard"

import NotFound from "./pages/NotFound"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    
    <Route path="host" element={<HostLayout />}>
      <Route
        index element={<Dashboard />} 
      />
    </Route>

    <Route path="*" element={<NotFound />} />
    </Route>
))

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);