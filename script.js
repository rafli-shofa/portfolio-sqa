/* =========================
   AOS ANIMATION
========================= */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15,23,42,0.95)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background =
            "rgba(15,23,42,.85)";

        header.style.boxShadow =
            "none";
    }

});

/* =========================
   ACTIVE MENU
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

/* =========================
   FADE IN PROJECTS
========================= */

const cards =
document.querySelectorAll(
    ".project-card"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add(
                "show-card"
            );

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {
    observer.observe(card);
});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(
    ".stat-card h3"
);

const speed = 200;

const animateCounter = counter => {

    const target =
        parseInt(
            counter.innerText
            .replace("+", "")
        );

    let count = 0;

    const update = () => {

        const increment =
            target / speed * 10;

        if (count < target) {

            count += increment;

            counter.innerText =
                Math.floor(count);

            requestAnimationFrame(update);

        } else {

            if (
                counter.innerText.includes("+")
            ) {

                counter.innerText =
                    target + "+";

            } else {

                counter.innerText =
                    target;
            }
        }
    };

    update();

};

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(
                entry.target
            );

            counterObserver.unobserve(
                entry.target
            );
        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

/* =========================
   HERO TYPING EFFECT
========================= */

const typingElement =
document.querySelector(".hero h2");

if (typingElement) {

    const text =
    "Software Quality Assurance | Manual & Automation Testing";

    typingElement.innerHTML = "";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typingElement.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(
                typeText,
                40
            );

        }
    }

    typeText();
}

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }
    );

});

/* =========================
   CURRENT YEAR FOOTER
========================= */

const footerText =
document.querySelector(
    "footer p"
);

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} Muh Rafli Shofa. All Rights Reserved.`;

}