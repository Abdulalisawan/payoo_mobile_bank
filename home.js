let addmoney= document.querySelector(`#Addmoney`);
let cashout= document.querySelector(`#cashout`);
let transfermoney= document.querySelector(`#transfermoney`);
let getbonus= document.querySelector(`#getbonus`);
let paybill= document.querySelector(`#paybill`);
let transaction= document.querySelector(`#Addmoney`);
let allsection= document.querySelectorAll(`#allsection`);

let addmoneysection = document.querySelector(`#addmoneysection`);
let Cashoutsection = document.querySelector(`#Cashoutsection`);
let transfermoneysection = document.querySelector(`#transfermoneysection`);
let Getbonussection = document.querySelector(`#Getbonussection`);
let Paybillsection = document.querySelector(`#Paybillsection`);
let totalsection =[addmoneysection,Cashoutsection,transfermoneysection,Getbonussection,Paybillsection]

let addmoney_btn= document.querySelector(`#addmoney_btn`);
let mainhead = document.querySelector(`#mainhead`);


let mainvalue = mainhead.textContent;


 function showAlert() {
      alert("ajse tera paisa mera");
    }


addmoney.addEventListener(`click`, function(){
   for( let sections of totalsection){
      if( sections === addmoneysection){
         sections.style.display=`block`
      }else{
         sections.style.display=`none`

      }
   }



})
cashout.addEventListener(`click`, function(){
   for( let sections of totalsection){
      if( sections === Cashoutsection ){
         sections.style.display=`block`
      }else{
         sections.style.display=`none`

      }
   }



})
transfermoney.addEventListener(`click`, function(){
   for( let sections of totalsection){
      if( sections === transfermoneysection){
         sections.style.display=`block`
      }else{
         sections.style.display=`none`

      }
   }



})
getbonus.addEventListener(`click`, function(){
   for( let sections of totalsection){
      if( sections === Getbonussection){
         sections.style.display=`block`
      }else{
         sections.style.display=`none`

      }
   }



})
paybill.addEventListener(`click`, function(){
   for( let sections of totalsection){
      if( sections === Paybillsection){
         sections.style.display=`block`
      }else{
         sections.style.display=`none`

      }
   }



})

addmoney_btn.addEventListener(`click`, function(e){
   e.preventDefault();
   showAlert()
   
   let ammount = document.querySelector(`#ammount`);
   let options = document.querySelector(`#options`);
   let hidenmsg= document.querySelector(`#hidenmsg`)
   let pin= document.querySelector(`#Pin`)
   let numhidenmsg= document.querySelector(`#numhidenmsg`)
   let pinhidenmsg= document.querySelector(`#pinhidenmsg`)
   let accountnumber = document.querySelector(`#accountnumber`);
   if( options.value === `Pick a Bank`  ){
      hidenmsg.classList.remove(`hidden`)
   }else{}
    if( accountnumber.value.length !== 11){
      numhidenmsg.classList.remove(`hidden`)
     

   }else{}
   let po= pin.value.toString().length;
   if( po !== 4){
      pinhidenmsg.classList.remove(`hidden`)

   }
   else{
      let totalpaissa= Number( mainhead.textContent ) + Number(ammount.value);
      mainhead.textContent=totalpaissa;

      


       

   }
 
   
   
   

})

    
    

 






 



 