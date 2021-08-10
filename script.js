var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 0;

setInterval(() => {
   if(count < 1000){
    count++;
    counter.innerHTML = count;
   }
},10)
setTimeout( () => {
    followers.innerHTML = "Followers on Instagram!"
}, 12000)