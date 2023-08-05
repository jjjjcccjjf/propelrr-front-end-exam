const currencyUl = document.querySelector("ul.currency");
const currencyLi = document.querySelector("li.currency a");

currencyLi.addEventListener("focus", function () {
    setTimeout(function () {
        currencyUl.classList.toggle("hidden");
    }, 20)

});

currencyLi.addEventListener("focusout", function () {
    setTimeout(function () {
        currencyUl.classList.toggle("hidden");
    }, 20)

});

