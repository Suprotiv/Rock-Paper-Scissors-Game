let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let x=0;
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let display=document.querySelector("#display");

rock.addEventListener("click",()=>{
   x = Math.floor((Math.random() * 3) + 1);
   if(x===3)
   {
    user.innerText=parseInt(user.innerText,10)+1;
    display.style.color="green";
    display.innerText="You have won ! ";

   }
   else if(x==2)
   {
    comp.innerText=parseInt(comp.innerText,10)+1;
    display.style.color="red";
    display.innerText="Computer has won";
   }
   else
    {
      display.style.color="black";
      display.innerText="It's a draw";
    }

});
paper.addEventListener("click",()=>{
  x = Math.floor((Math.random() * 3) + 1);
  if(x===1)
   {
    user.innerText=parseInt(user.innerText,10)+1;
    display.style.color="green";
    display.innerText="You have won ! ";

   }
   else if(x==3)
   {
    comp.innerText=parseInt(comp.innerText,10)+1;
    display.style.color="red";
    display.innerText="Computer has won";
   }
   else
    {
      display.style.color="black";
      display.innerText="It's a draw";
    }
  
});
scissors.addEventListener("click",()=>{
  x = Math.floor((Math.random() * 3) + 1);
  if(x===2)
  {
   user.innerText=parseInt(user.innerText,10)+1;
   display.style.color="green";
   display.innerText="You have won ! ";

  }
  else if(x==3)
  {
   comp.innerText=parseInt(comp.innerText,10)+1;
   display.style.color="red";
   display.innerText="Computer has won";
  }
  else
   {
    display.style.color="black";
     display.innerText="It's a draw";
   }
  
});

