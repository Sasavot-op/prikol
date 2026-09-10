const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {
    heart.classList.add("clicked");

    setTimeout(() => {
        heart.classList.remove("clicked");
    }, 500);
});