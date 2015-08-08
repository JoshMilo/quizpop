/// <reference path="typings/tsd.d.ts" />
/**
 * Like JQuery's document ready.
 */
document.addEventListener("DOMContentLoaded", function (event) {
    var btn = document.querySelector(".c-microphone__btn");
    btn.addEventListener("click", function () {
        console.log("fuck you");
    });
}); // end document
