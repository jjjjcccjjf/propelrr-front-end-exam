const categoryUl = document.querySelector("ul.category");
const categoryLi = document.querySelector("li.category a");

categoryLi.addEventListener("focus", function () {
    toggleHidden()
});

categoryLi.addEventListener("focusout", function () {
    toggleHidden()
});

const toggleHidden = function () {
    setTimeout(function () {
        categoryUl.classList.toggle("hidden");
        categoryLi.parentElement.classList.toggle("bg-[#f3f3f3]")
    }, 20)
}