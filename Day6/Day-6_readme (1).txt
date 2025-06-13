# Web_Development_Crash_Course_Day_6_Assignment
For this project, I implemented various features to enhance the functionality of the LaunchDarkly Employee Feedback Form.
I created the `submitFeedback()` function to handle form submission, ensuring that user input is validated before allowing submission. 
I also used loops to display an array of feedback scores in the console and dynamically validate form fields, making sure all required inputs are filled. 

To improve user interaction, I added event listeners for different actions. The form submission is handled by `submitFeedback`, the reset button clears the form using `resetForm`, and the rating system updates dynamically with `handleRatingChange`. For validation, I ensured the name field isn’t empty, checked that the email format is valid, and required a selection for satisfaction. 

One of the challenges I faced was preventing the default form submission while validating inputs.
I solved this by using `event.preventDefault()`.
Another issue was ensuring event listeners were properly attached, which I fixed by using `DOMContentLoaded` to guarantee that elements existed before adding event listeners. 
Overall, this project helped me strengthen my understanding of JavaScript conditionals, loops, and event handling.