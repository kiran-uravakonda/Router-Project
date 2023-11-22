
import Header from './Components/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact'




function Routers() {
  return (
    <>
    
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default Routers;
