<?php
    if (!isset($_POST['submit'])) {
        echo "Please submit the form first.";
        exit();
    }

    function validate_form_inputs() {
        if (empty($_POST["f_name"])) { 
            echo "First name is required.";
            exit();
        }

        if (empty($_POST["l_name"])) {
            echo "Last name is required.";
            exit();
        }

        if (empty($_POST["address"])) {
            echo "Address is required.";
            exit();
        }

        if (empty($_POST["country"])) {
            echo "Country is required.";
            exit();
        }

        if (empty($_POST["gender"])) {
            echo "Gender is required.";
            exit();
        }

        if (empty($_POST["skills"])) {
            echo "Skills are required.";
            exit();
        }

        if (empty($_POST["username"])) {
            echo "Username is required.";
            exit();
        }

        if (empty($_POST["password"])) {
            echo "Password is required.";
            exit();
        }

        if(empty($_POST["submit"])){
            echo "Please submit the form first.";
            exit();
        }

    }

    function validate_code() {
        $user_code = $_POST["code"];
        $suffled_code = $_POST["original_code"];

        echo "User code : " . $user_code . "<br>";
        echo "original_code : " . $suffled_code . "<br>";

        if ($user_code != $suffled_code) {
            echo "Invalid code. Please try again.";
            exit();
        }
    }

    validate_form_inputs();

    

    validate_code();

    echo "<h2>Thanks ";
    if ($_POST["gender"] == "male") {
        echo "MR. ";
    } else {
        echo "MRS. ";
    }
    echo $_POST["f_name"] . " " . $_POST["l_name"] . "</h2>";

    echo "<p>Please Review Your applications : </p>";
    echo "<p>Name : ",$_POST["f_name"]." ".$_POST["l_name"]."</p>";
    echo "<p>Address : ",$_POST["address"]."</p>";

    echo "<p>Your Skills : </p>";
    echo "<ul>";
    foreach($_POST["skills"] as $skill){
        echo "<li>" . $skill . "</li>";
    }
    echo "</ul>";

    echo "<p>Department : ". $_POST["dept"] . "</p>";

    echo "<h2>Thanks ";
    
    function send_data_to_db() {
        $full_name = $_POST["f_name"] . " " . $_POST["l_name"];
        $address = $_POST["address"];
        $country = $_POST["country"];
        $gender = $_POST["gender"];
        $skills = "";
        foreach($_POST["skills"] as $skill){
            $skills .= $skill . ",";
        }
        $username = $_POST["username"];
        $password = $_POST["password"];
        $dept = $_POST["dept"];

        $filename = fopen("data.txt", "a");
        fwrite($filename, $full_name. "|");
        fwrite($filename, $address. "|");
        fwrite($filename, $country. "|");
        fwrite($filename, $gender. "|");
        fwrite($filename, $skills. "|");
        fwrite($filename, $username. "|");
        fwrite($filename, $password. "|");
        fwrite($filename, $dept. "\n");
        fclose($filename);
    }

    send_data_to_db();
?>