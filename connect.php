<?php


$firstName = $_POST['firstName'];
$lastName = $_POST['firstName'];
$email = $_POST['firstName'];
$password = $_POST['firstName'];
$age = $_POST['firstName'];


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $servername = "localhost"; 
    $username = "root";        
    $password = "";            
    $dbname = "my_database";   

    
    $conn = new mysqli($servername, $username, $password, $dbname);

    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

  
    

    
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

   
    $stmt = $conn->prepare("INSERT INTO users (first_name, last_name, email, password, age) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssi", $firstName, $lastName, $email, $hashedPassword, $age);

    
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>


