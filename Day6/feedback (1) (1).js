document.addEventListener("DOMContentLoaded", function () { 
    // Select form and elements
    const feedbackForm = document.getElementById("feedback-form");
    const ratingMessage = document.getElementById("rating-message");

    // Event listener for form submission
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        submitFeedback();
    });

    // Event listener for form reset
    feedbackForm.addEventListener("reset", function () {
        ratingMessage.textContent = "";
    });

    // Event listener for rating selection
    document.querySelectorAll("input[name='satisfaction']").forEach(radio => {
        radio.addEventListener("change", function () {
            handleRatingChange(this.value);
        });
    });

    function submitFeedback() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const satisfaction = document.querySelector("input[name='satisfaction']:checked");
        const feature = document.getElementById("feature").value;
        const comments = document.getElementById("comments").value.trim();
        
        // Validate input fields using conditionals
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!satisfaction) {
            alert("Please select your satisfaction level.");
            return;
        }
        if (!feature) {
            alert("Please select a preferred feature.");
            return;
        }
        
        // Log the selected satisfaction rating
        if (satisfaction) {
            console.log(`User selected rating: ${satisfaction.value}`);
        } else {
            console.log("No rating selected");
        }

        // Display success message
        alert("Thank you for your feedback!");
        feedbackForm.reset();
        ratingMessage.textContent = "";
    }

    function handleRatingChange(rating) {
        ratingMessage.textContent = `Thank you for rating us: ${rating}`;
    }

    // Example array of feedback scores
    const feedbackScores = [5, 4, 3, 5, 2];
    console.log("User feedback scores:");
    feedbackScores.forEach(score => console.log(score));
});
