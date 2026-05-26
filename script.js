/* CONTACT BUTTON */

const contactBtn =
    document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {

    window.open(
        "https://www.linkedin.com/in/favio-mendigure-2560223b9/",
        "_blank"
    );

});

/* SCROLL ANIMATION */

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                entry.target.classList.remove("show");

            }

        });

    }, {

        threshold: 0.15

    });

document.querySelectorAll(".hidden")
    .forEach((el) => {

        observer.observe(el);

    });