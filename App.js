import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Hero from './Components/Hero/Hero'; 
import Programs from'./Components/Programs/Programs';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';


 


const App = ()=> {
 
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Programs/> 
    <About/>
    <Campus/>
    <Testimonials/>
    </div >
    
  )
}

export default App
