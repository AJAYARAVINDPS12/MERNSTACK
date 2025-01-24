import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './FunctionComponent/Navbar';
import Home from './FunctionComponent/Home';
import About from './FunctionComponent/About';
import Contact from './FunctionComponent/Contact';
import Signup from './FunctionComponent/Signup';
import Gallery from './FunctionComponent/Gallery';
import Login from './FunctionComponent/Login';
import UseState from './FunctionComponent/Hooks/UseState';
import UseEffect from './FunctionComponent/Hooks/UseEffect';
import UseEffectAPI from './FunctionComponent/Hooks/UseEffectAPI';  
import UseReducer from './FunctionComponent/Hooks/UseReducer';
import UseEffectAPIimage from './FunctionComponent/Hooks/UseEffectAPIimage';
import UseRef from './FunctionComponent/Hooks/UseRef';
import UseMemo from './FunctionComponent/Hooks/UseMemo';
import UseCallback from './FunctionComponent/Hooks/UseCallback';
import ListItem from './FunctionComponent/Hooks/List';
import ReactLifecycleMethods from './component/ReactLifecycleMethods';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useeffectapi" element={<UseEffectAPI />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/useeffectapiimage" element={<UseEffectAPIimage />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} />
        <Route path="/list" element={<ListItem />} />
        <Route path="/  " element={<ReactLifecycleMethods />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;