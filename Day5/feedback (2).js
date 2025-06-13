// Declare global variables
var userName = "";
let userEmail = "";
let isSatisfied = false;

// Function to calculate the average score (Dummy data used)
function calculateAverageScore(feature1, feature2, feature3) {
    let totalScore = feature1 + feature2 + feature3;
    let averageScore = totalScore / 3;

    console.log("Total Score:", totalScore);
    console.log("Average Score:", averageScore.toFixed(2));

    return averageScore;
}

// Function to display error messages in the UI
function displayError(message) {
    const errorDiv = document.getElementById("error-message");
    if (errorDiv) {
        errorDiv.innerText = message;
        errorDiv.style.color = "red";
    }
}

// Function to validate the form before submission
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Fetch input values
    userName = document.getElementById("name").value.trim();
    userEmail = document.getElementById("email").value.trim();
    const satisfaction = document.querySelector("input[name='satisfaction']:checked");
    const preferredFeature = document.getElementById("feature").value;
    const comments = document.getElementById("comments").value.trim();

    // Clear previous error messages
    displayError("");

    // Validation checks
    if (userName === "") {
        displayError("Error: Name field cannot be empty.");
        console.error("Error: Name field cannot be empty.");
        return;
    }

    if (!userEmail.includes("@")) {
        displayError("Error: Invalid email format.");
        console.error("Error: Invalid email format.");
        return;
    }

    if (!satisfaction) {
        displayError("Error: Please select a satisfaction option.");
        console.error("Error: Please select a satisfaction option.");
        return;
    }

    // Assign satisfaction value
    isSatisfied = satisfaction.value === "yes";

    // Debugging output
    console.log("User Name:", userName);
    console.log("User Email:", userEmail);
    console.log("User Satisfaction:", isSatisfied);
    console.log("Preferred Feature:", preferredFeature);
    console.log("Additional Comments:", comments || "No comments provided");

    // Example score calculation (replace with actual input values if needed)
    let avgScore = calculateAverageScore(4, 3, 5);

    console.log("Form successfully validated.");
    alert("Thank you for your feedback! Your response has been recorded.");
}

// Attach event listener to form
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", validateForm);
    }
});
