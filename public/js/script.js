var updatePrice = function() {
    
   country_value = document.getElementById("country_select").value;
   bedscount_value = document.getElementById("bedscount_select").value;

   console.log("country_select: " + country_value);
   console.log("bedscount_select: " + bedscount_value);
   console.log(typeof country_value); 
   console.log(typeof bedscount_value);
   
   b_price = calculateSubscriptionPrice(bedscount_value);
   document.getElementById("big-price").innerText = b_price + "$";
}
   
var calculateSubscriptionPrice = function(bedscount_value)
{
   b_price = 0;
   b_price = getBedFactor(bedscount_value); 
   b_price = getCountryFactor(country_value, b_price);
   return b_price;
}

var getBedFactor = function(bedscount_value)
{
   b_price = 0;
   if(bedscount_value > 0 && bedscount_value <= 10){
      b_price = 20;
   }else if(bedscount_value >= 11 && bedscount_value <= 18){
      b_price = 50;
   }else if(bedscount_value >= 19 && bedscount_value <= 26){
      b_price = 100;
   }else if(bedscount_value > 26){
      b_price = 120;
   }
   return b_price;
}

var getCountryFactor = function(country_value, b_price) {

   switch (country_value)
   {
      case "1":
         country = "Ukraine";
         b_price *= 1;
         break;
      case "2":
         country = "Poland";
         b_price *= 1.25;
         break;
      case "3":
         country = "Another country";
         b_price *= 1.5;
   }
   return b_price;
}

window.onload = function () {
   updatePrice();

   let menu = document.querySelector("#menu-icon");
   let navbar = document.querySelector(".navbar");

   menu.addEventListener("click", function () {
      navbar.classList.toggle("active");
   });

   window.onscroll = () => {
      navbar.classList.remove("active");
   };

};
