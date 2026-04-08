<?php
    include_once("connectDB.php");

    $error_message = ""; 
    $success_message = "";

    function validate_password() {
        global $error_message;
        $password = $_POST['password'];
        $confirm_password = $_POST['confirm-password'];

        if ($password !== $confirm_password) {
            $error_message = "Password doesn't match Confirm Password";
        }
    }

    function validate_profile_image() {
        global $error_message;

        $type = $_FILES["profile-picture"]["type"];
        $size = $_FILES["profile-picture"]["size"];
        $ext  = end(explode('/', $type));

        $valid_extensions = ['png', 'jpg', 'jpeg', 'webp', 'svg'];

        if (!in_array($ext, $valid_extensions)) {
            $error_message = "Profile picture only supports PNG, JPG, WEBP, SVG";
        } elseif ($size >= 5 * 1024 * 1024) {
            $error_message = "Image size mustn't exceed 5 MB";
        }
    }

    function validate_email() {
        global $error_message;
        $email = $_POST["email"];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $error_message = "Invalid Email";
        }
    }

    function create_user($pdo) {
        global $error_message;

        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $room = $_POST['room-number'];

        $type = $_FILES["profile-picture"]["type"];
        $ext = end(explode('/', $type));
        $tmp_path = $_FILES["profile-picture"]["tmp_name"];
        $file_name = $_FILES["profile-picture"]["name"];
        $dest = "images/" . time() . "_" . $file_name;
        $full_path = __DIR__ . "/" . $dest;

        if (!move_uploaded_file($tmp_path, $full_path)) {   
            $error_message = "Failed to upload image";
            return null;
        }

        $sql = "
            INSERT INTO User (name, email, password, room, img_path) 
            VALUES (:name, :email, :password, :room, :img_path)";

        $pdo->prepare($sql)->execute([
            ":name"     => $name,
            ":email"    => $email,
            ":password" => $password,
            ":room"     => $room,
            ":img_path" => $dest
        ]);

        return (int) $pdo->lastInsertId();
    }


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        validate_password();

        if (empty($error_message)) {
            validate_email();
        }

        if (empty($error_message)) {
            validate_profile_image();
        }

        if (empty($error_message)) {
            $db = connect();

            if ($db === false) {
                $error_message = "Cannot connect to DB";
            } else {
                $uid = create_user($db);

                if ($uid) {
                    $success_message = "User created successfully with ID: $uid";
                } else {
                    $error_message = "Failed creating user";
                }
            }
        }
    }
?>

<html>
<h1>Add User:</h1>
<form method="post" enctype="multipart/form-data">
    <div>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required>
    </div>
    <div>
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" required>
    </div>
    <div>
        <label for="room-number">Room Number:</label>
        <select name="room-number" id="room-number" required>
            <option value="">Select Room Number</option>
            <option value="Application1">Application1</option>
            <option value="Application2">Application2</option>
            <option value="Cloud">Cloud</option>
        </select>
    </div>
    <div>
        <label for="profile-picture">Profile Picture:</label>
        <input type="file" name="profile-picture" id="profile-picture" required>
    </div>
    <div>
        <input type="submit" name="submit" value="Register">
        <input type="reset" value="Reset">
        <a href="allUsers.php">All Users</a>
    </div>
    <div>
        <p style="color: red;"><?php echo $error_message; ?></p>
        <p style="color: green;"><?php echo $success_message; ?></p>
    </div>
</form>
</html>