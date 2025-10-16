//import logo from "./logo.svg";
import "./App.css";
//import StateExample from "./StateExample";
//import ReducerExample from "./ReducerExample";
//import ContextExample from "./ContextExample";
//import MemoExample from "./MemoExample";
//
function App() {
  return (
    <div className="//App">
      <MemoExample />
    </div>
  );
}import Navbar from "./Components/Navbar";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RouteLayout from "./Layouts/RouteLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
    <Route index element={<Home />} />
    <Route path="About" element={<About />} />
    <Route path="Contact" element={<Contact />} />
    <Route path="service" element={<Service />} />
    </Route>
  )
)


export default App

