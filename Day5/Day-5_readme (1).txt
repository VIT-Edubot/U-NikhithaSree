# JavaScript Feedback Form - LaunchDarkly  

## Overview  
I worked on enhancing the LaunchDarkly employee portal feedback form by adding JavaScript interactivity. This included implementing user input validation, performing basic calculations, and debugging to ensure a smooth user experience.  

## Features Implemented  
To improve functionality, I used "var, let, and const" to store user data efficiently. 
I also implemented score calculations using arithmetic operators to compute an average score. The form now includes validation to check if the name field is empty, ensure the email contains "@", and verify that a satisfaction option is selected.  

For debugging, I used "console.log()" to track errors and troubleshoot issues, logged validation errors in the console, and utilized browser DevTools for further debugging.
 Additionally, I handled form submission by preventing default behavior and triggering validation before processing user input.  

## Challenges & Solutions  
One of the challenges I faced was handling unselected radio buttons. To solve this, I used "document.querySelector()" to check if an option was selected before proceeding. 
Another issue was debugging undefined values, which I resolved by strategically placing "console.log()" statements to trace variable assignments and identify missing values.  

## How to Run  
To test the feedback form, I open `feedback_form.html` in a browser, fill out the form, and submit it. I then check the console (`F12 > Console`) to view logs and validation messages, ensuring that everything functions as expected.  

This project allowed me to explore JavaScript interactivity and improve my debugging skills while making the feedback form more user-friendly and efficient.