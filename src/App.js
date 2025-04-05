"use client"
import { useState } from "react";
import  grasshopper  from './assets/grasshopper.gif';

export default function Home() {

  
  return (
    <div className="container">
      <h1 className="text">Welcome to my home...</h1>
        <div className="centerBlock">
          <img src={grasshopper}/>
        </div>
        <p className="openText">Open 24/7</p>
        <p className="pText">I have no idea what I am doing</p>
        <p>test text</p>
        
    </div>
);
}
