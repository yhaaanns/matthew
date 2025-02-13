const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  const para = document.createElement("p");
  const node = document.createTextNode("Hi Ches!!! Yes, this isn’t a test. Yes, this isn’t for someone else. It’s been a while since I’ve felt like this😃. But here I am again… i’m not expecting anything po😁. But I just wanted to say… Cheska, nothing can describe how I feel about you but here’s my attempt!… Everything… It just clicks in place you know? I feel happy when I talk to you! I love how you’re so locked in on your goal! It just makes me want to support you and be there for you! I love the way you talk, you laugh, and even how you get annoyed😁. It’s so cute😔. I love how passionate you are! The way you always set everything aside for your goals! But of course you still get distracted naman, you’re a human den! Pero the important thing is that you wanna achieve and reach those goals! When I told myself na “She’s worth it”. I meant it. You probably already know how I feel based sa mga chats natin 😅 about sa crush ko and sa crush mo! And sa lahat ng parinig and mga indirect confession ko sayo. UWHAHAHAH. I’m not that stupid naman to not know what I’m doing hehe 😜. About sa crush mo… ako ba yon? 🙁 ayoko maging assuming… pero kasi ehh😭 overthinker ako teh😞 kung hinde edi gusto ko na mamatay sa kahihiyan😭😭😭. Eme!! HEHEHAHAHAHA! If mali ako I’m sorry!!! 😞 tao lang! Well that’s all I can word out! Time check! It’s 11:02 pm rn on a monday.  U went to bed kanina pa! Probably scrolling on tiktok rn or already sleeping! I should wrap this letter up na! It’s pass my bed time naden! The website already asked pero I want to ask you again since nasa call tayo! If gusto mona ko ipaundefean type: “Water” Sa chat natin!!! Hehe😁 Can I be your Valentine?💌 ");
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