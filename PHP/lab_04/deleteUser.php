<?php

    include_once("connectDB.php");

    $user_id = $_GET['id'];

    $sql = "DELETE FROM User WHERE id = ?";

    try {
        $pdo = connect();
        $pdo->prepare($sql)->execute([$user_id]);

        echo "User with id $user_id has been deleted";
    } catch (error) {
        echo "Couldn't delete User with id $user_id";
    }

?>