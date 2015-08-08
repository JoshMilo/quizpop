/// <reference path="typings/tsd.d.ts" />

/**
 * Like JQuery's document ready.
 */

document.addEventListener("DOMContentLoaded", (event) => {
  
  let btn = document.querySelector(".c-microphone__btn");
  
  btn.addEventListener("click", () => {
	  console.log("fuck you");
  })
  
  
  
}); // end document