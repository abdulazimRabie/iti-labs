<?php

    if(isset($_COOKIE["name"])) {
        echo "<h1> Hello ", $_COOKIE['name'] , "</h1>";
        setcookie("name", "",time() - 60);
    } else {
        echo "Please enter Your name", "<br>";
    }

    if (isset($_COOKIE["name"])) {
        echo "<h1> Your age : ", $_COOKIE['age'] , "</h1>";
        setcookie("age", "", time() - 50);
    } else {
        echo "So, Your age is empty", "<br>";
    }

?>