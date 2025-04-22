"use client"
import  grasshopper  from './assets/grasshopper.gif';

export default function Home() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show')
      }
    })
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
  return (
    <div className="container">
      <h1 className="text">Welcome to my home...</h1>
        <div>
          <img className="gif"src={grasshopper}/>
        </div>
        <p className="openText">Open 24/7</p>
        <p className="pText" >I have no idea what I am doing but here is a link to my <a href ="https://github.com/kidkorste">GIT HUB</a></p>        
    </div>
);
}
