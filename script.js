// =========================
// CURRENT YEAR
// =========================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close mobile menu after clicking a link

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


// =========================
// MENU FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.filter;

        // Update active filter button

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Filter menu cards

        menuCards.forEach(function (card) {

            const cardCategory = card.dataset.category;

            const shouldShow =
                selectedCategory === "all" ||
                selectedCategory === cardCategory;

            card.classList.toggle("hidden", !shouldShow);

        });

    });

});


// =========================
// SHOPPING CART DEMO
// =========================

let cartCount = 0;
let cartTotal = 0;

const addButtons = document.querySelectorAll(".add-btn");
const toast = document.getElementById("toast");

let toastTimer;


function showToast(message) {

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}


addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = button.dataset.name;
        const productPrice = Number(button.dataset.price);

        if (!productName || !Number.isFinite(productPrice)) {
            return;
        }

        cartCount++;
        cartTotal += productPrice;

        showToast(
            productName +
            " added! Cart: " +
            cartCount +
            " item(s) | Total: ₹" +
            cartTotal
        );

    });

});


// =========================
// CONTACT FORM DEMO
// =========================

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            if (formNote) {
                formNote.textContent = "Please fill in all the fields.";
            }

            return;
        }

        if (formNote) {

            formNote.textContent =
                "Thank you, " + name +
                "! This demo form does not send messages to a server.";

        }

        contactForm.reset();

    });

}