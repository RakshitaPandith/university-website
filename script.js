document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    const menuButton = document.querySelector("nav .fa-bars");
    const closeButton = document.querySelector(".nav-links .fa-times");

    function openMenu() {
        if (navLinks) {
            navLinks.style.right = "0";
            if (menuButton) menuButton.setAttribute("aria-expanded", "true");
        }
    }

    function closeMenu() {
        if (navLinks) {
            navLinks.style.right = "-200px";
            if (menuButton) menuButton.setAttribute("aria-expanded", "false");
        }
    }

    if (menuButton) {
        menuButton.setAttribute("role", "button");
        menuButton.setAttribute("tabindex", "0");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.addEventListener("click", openMenu);
        menuButton.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openMenu();
            }
        });
    }

    if (closeButton) {
        closeButton.setAttribute("role", "button");
        closeButton.setAttribute("tabindex", "0");
        closeButton.setAttribute("aria-label", "Close navigation menu");
        closeButton.addEventListener("click", closeMenu);
        closeButton.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                closeMenu();
            }
        });
    }

    if (navLinks) {
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMenu();
    });

    // These static demo forms have no server connected; show an honest local confirmation.
    document.querySelectorAll(".comment-form, .contact-col form").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!form.reportValidity()) return;

            let notice = form.querySelector(".form-notice");
            if (!notice) {
                notice = document.createElement("p");
                notice.className = "form-notice";
                notice.setAttribute("role", "status");
                form.appendChild(notice);
            }
            notice.textContent = form.classList.contains("comment-form")
                ? "Thanks! This demo does not publish comments because no backend is connected."
                : "Thanks! This demo form is validated, but messages are not sent because no backend is connected.";
            notice.style.color = "#237a3b";
            notice.style.padding = "8px 0";
        });
    });
});
