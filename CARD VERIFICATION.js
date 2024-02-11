// Regular expression pattern for credit card validation
const Cardvalidator = /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;

// Function to validate credit card number and identify the type
function validateCreditCard(card_number) {
    if (Cardvalidator.test(card_number)) {
        // Check if the card number starts with '4' (Visa)
        if (/^4/.test(card_number)) {
            return "Visa";
        }
        // Check if the card number starts with '5' and the second digit is between '1' and '5' (Mastercard)
        else if (/^5[1-5]/.test(card_number)) {
            return "Mastercard";
        }
        // Check if the card number starts with '34' or '37' (American Express)
        else if (/^3[47]/.test(card_number)) {
            return "American Express";
        }
        // Check if the card number starts with '6011' or '65' (Discover)
        else if (/^6(?:011|5[0-9]{2})/.test(card_number)) {
            return "Discover";
        } else {
            return "Unknown card type";
        }
    } else {
        return "Invalid credit card number";
    }
}

// Example usage
const card_instance = 4111111111111111;
const cardType = validateCreditCard(card_instance);

// Display the result
console.log("Credit Card Type:$",{cardType});