const boton = document.getElementById("boton");

const music = document.getElementById("bgmusic");
const click = document.getElementById("clicksound");

/* BOTON PRINCIPAL */

boton.addEventListener("click", () => {

    click.play();

    music.volume = 0.3;

    music.play();

    document.querySelector("#about")
        .scrollIntoView({
            behavior: "smooth"
        });

});

/* CURSOR GLOW */

document.addEventListener("mousemove", (e) => {

    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");

});

/* APARICION */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
    ".card, .skill-box, .marvel-card, .mission, .course-card, .friend-card, .teacher-card"
).forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* GAMES BUTTON */

const gamesButton =
    document.getElementById("gamesButton");

const gamesContent =
    document.querySelector(".games-content");

gamesButton.addEventListener("click", () => {

    gamesContent.style.display = "block";

    gamesContent.scrollIntoView({
        behavior: "smooth"
    });

});