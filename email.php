<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Your email content
    $subject = "Welcome to Our Website";
    $message = "Dear $name,\n\nThank you for signing up on our website. We are thrilled to welcome you aboard!\n\nBest regards,\nThe Website Team";

    // Send the email
    $headers = "From: kaycontreras14@gmail.com"; // Replace with your own email address
    if (mail($email, $subject, $message, $headers)) {
        echo "Welcome email sent successfully!";
    } else {
        echo "Failed to send the welcome email.";
    }
}
