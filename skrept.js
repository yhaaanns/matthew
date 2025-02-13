const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  const para = document.createElement("p");
  const node = document.createTextNode("It's valentines soon my baby! and I want to ask you more and more how I really want to still ask to be my valentine kahit your already mine hihihi ♥   Spending valentines  with you and expressing my heart for you is the greatest gift I can ever have! I want to let you know that I love you and you can be my valentine forever and everrrr, because your the only I can ever tell that too, valentines with you appreciating your love that you gave me is a special moment that provides me with a lot of the most special gifts, happy valentines baby, I am really glad and blessed to be your valentine mwaaaa ");
  para.appendChild(node);
  const element = document.getElementById("div1"); 
  element.appendChild(para);
       
       document.getElementById("no-btn").style.display = "none";
       document.getElementById("yes-btn").style.display = "none";
       document.getElementById("h2").style.display = "none";
       document.getElementById("doggoname").style.display = "none";
       document.getElementById("aso").style.display = "none";
       document.getElementById("arrow").style.display = "none";
      
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});