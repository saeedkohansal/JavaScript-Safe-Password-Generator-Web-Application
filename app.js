// Getting result and generate button elements
const result = document.getElementById("result")
const generate_password = document.getElementById("generate-btn")

// Getting options checkboxes elements
const uppercase_checkbox = document.getElementById("uppercase-option")
const lowercase_checkbox = document.getElementById("lowercase-option")
const numbers_checkbox = document.getElementById("numbers-option")
const symbols_checkbox = document.getElementById("symbols-option")

// Password generator
function password_generator(password_length) {
    // Password length validation
    if (password_length > 0 && password_length <= 100) {
        // Creating a pattern
        let pattern = ""
        // When all options are off
        if (!uppercase_checkbox.checked && !lowercase_checkbox.checked &&
            !numbers_checkbox.checked && !symbols_checkbox.checked) {
            // Display an error
            alert("🔴 Please choose an option")
        } else {
            // Adding uppercase
            if (uppercase_checkbox.checked) { pattern += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
            // Adding lowercase
            if (lowercase_checkbox.checked) { pattern += "abcdefghijklmnopqrstuvwxyz" }
            // Adding numbers
            if (numbers_checkbox.checked) { pattern += "0123456789" }
            // Adding symbols
            if (symbols_checkbox.checked) { pattern += "~!@-#$_" }

            // Generating a fully random password with length and options
            const password_maker = (
                length = password_length,
                chars = pattern
            ) => Array
                .from(crypto.getRandomValues(new Uint32Array(length)))
                .map((x) => chars[x % chars.length])
                .join('')

            // Display new generated password in the field
            result.value = password_maker()

            // Auto adding new password to clipboard
            navigator.clipboard.writeText(result.value);

            // Display a successful notification
            alert("🟢 A new password has been generated and auto copied")
        }
    } else {
        // Display an error
        alert("🔴 Invalid password length")
    }
}

// When the "GENERATE" button clicked
generate_password.onclick = function () {
    // Getting password length from the field
    const password_length = Number(document.getElementById("password-length").value)

    // Call password generator with a length
    password_generator(password_length)
}