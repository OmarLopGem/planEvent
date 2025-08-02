"use strict";

const $ = selector => document.querySelector(selector);

// Function that changes the error messages when user changes input
function changeInputCheck() {
    document.querySelectorAll("input, textarea, select").forEach((element) => {
        element.addEventListener("input", () => {
            element.classList.remove("input-error");

            element.nextElementSibling.textContent = "*";
        })
    })
}

// Function that resets form values and error-messages
function resetForm() {
    $("#reset-register-button").addEventListener("click", e => {
        e.preventDefault();

        document.querySelectorAll("input[type='text'], input[type='number'], input[type='email'], textarea").forEach((element) => {
            element.value = "";
            element.classList.remove("input-error");
            if (element.nextElementSibling && element.nextElementSibling.classList.contains("error-message")) {
                element.nextElementSibling.textContent = "*";
            }
        });

        document.querySelectorAll('input[name="extra-food"]').forEach(radio => radio.checked = false);

        $("#food-radio-group").nextElementSibling.textContent = "*";
    });
}

function formValidation(event) {
    const name = $("#name").value.trim();
    const lastName = $("#last-name").value.trim();
    const email = $("#email").value.trim();
    const numberTickets = $("#number-tickets").value;
    const extraFood = $('input[name="extra-food"]:checked');
    let isValid = true;

    if (name === "") {
        $("#name").nextElementSibling.textContent = "Name is required";
        $("#name").classList.add("input-error");
        isValid = false;
    }
    if (lastName === "") {
        $("#last-name").nextElementSibling.textContent = "Last Name is required";
        $("#last-name").classList.add("input-error");
        isValid = false;
    }
    if (email === "") {
        $("#email").nextElementSibling.textContent = "Email is required";
        $("#email").classList.add("input-error");
        isValid = false;
    }
    if (parseInt(numberTickets) < 1 || parseInt(numberTickets) > 6 || numberTickets === "") {
        $("#number-tickets").nextElementSibling.textContent = "Number of tickets is required between 1 and 6";
        $("#number-tickets").classList.add("input-error");
        isValid = false;
    }
    if (!extraFood) {
        $("#food-radio-group").nextElementSibling.textContent = "Must select if you desire extra food or not";
        isValid = false;
    }

    if (!isValid){
        event.preventDefault();
    } else {
        alert("Successfully submitted your registration!")
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    changeInputCheck();
    resetForm();
    $("form").addEventListener("submit", formValidation);
});