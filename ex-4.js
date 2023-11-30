// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC ", "MOMO PARADISE ", "Nabezo"];
let newRestaurants = [];
let i = 0;
// Start coding here

while (restaurants[i]) { 
    newRestaurants += restaurants[i] ;
    i++;
  }
console.log(`Restaurant Name: ${newRestaurants}` );