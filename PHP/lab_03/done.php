<?php
    if (!isset($_POST["submit"])) {
        echo "Please submit the form first !!";
        exit();
    }

    function validate_email() {
        $mail = $_POST["email"];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "invalid email !";
            exit();
        };
    }

    function validate_email_1() {
        $email = $_POST["email"];
        if (!preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email)) {
            echo "invalid email !";
            exit();
        }
    }

    // validate_email();

    function validate_password() {
        $password = $_POST["password"];
        $confirmed = $_POST["confirm-password"];

        if (strcmp($password, $confirmed) !== 0) {
            echo "Password and comfirmed are not matched !!";
            exit();
        }

        if (strlen($password) != 8) {
            echo "Password must be 8 characters ... no more... no less";
            exit();
        }

        if (!preg_match("/^[a-z0-9_]+$/", $password)) {
            echo "Only accept lowrcase character, numbers and _";
            exit();
        }
    }

    validate_password();


    var_dump($_FILES["profile-picture"]["error"]);

    function save_profile_picture() {

        $error = $_FILES["profile-picture"]["error"];
        $ext = end(explode(".", $_FILES["profile-picture"]["name"]));
        $size = $_FILES["profile-picture"]["size"];
        $path = $_FILES["profile-picture"]["tmp_name"];
        $file_name = explode(".", $_FILES["profile-picture"]["name"])[0];

        $avaialbe_extensions = ["png", "jpg", "jpeg"];

        echo "<pre>";
        var_dump($_FILES["profile-picture"]);
        echo "</pre>";

        if ($error == 4) {
            echo "Upload profile picutre";
            exit();
        }
            
        if (!in_array($ext, $avaialbe_extensions)) {
            echo "Please Uplaod IMAGE ONLY 'png', 'jpg', 'jpeg' ";
            exit();
        };

        // 2 MB is maximum 2 * 1024 * 1024
        if ($size > (2*1024*1024)) {
            echo "Max Size is 2 MB";
            exit();
        }

        $dest = __DIR__."/images/".$file_name.time().$ext;
        move_uploaded_file($path, $dest);

        return $dest;
    }

    function save_user_info() {
        $db_file = "userinfo.txt";

        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = md5($_POST["password"]);
        $room_number = $_POST["room-number"];
        $image = save_profile_picture();

        $data = "$name|$email|$password|$room_number|$image\n";

        echo "Data: ", $data, "<br>";

        file_put_contents($db_file, $data);
    }

    save_user_info();
?>

<html>

    <h1>Welcome <?php echo $_POST["name"]?></h1>
    <h2>Go to db.php</h2>
    <a href="db.php">Click Here</a>
</html>