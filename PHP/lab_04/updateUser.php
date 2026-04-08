<?php
    include_once("connectDB.php");
    $error_message = "";
    $success_message = "";

    $user_id = $_GET["id"];
    $pdo = connect();

    $rooms = ["Application1", "Application2", "Cloud"];

    // get user
    $sql = "SELECT * FROM User WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$user_id]);
    $user = $stmt->fetch();

    echo "<pre>";
    var_dump($user);
    echo "</pre>";

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $room = $_POST['room-number'];
        $img = $user['img_path'];

        if ($_FILES['profile-picture']['error'] == 0 ) { // uploaded new image
            $file_name = $_FILES['profile-picture']['name'];
            $tmp_path = $_FILES['profile-picture']['tmp_name'];
            $relative_path = "images/" . time() . "_" .$file_name;
            $absolute_path = __DIR__ . "/" . $relative_path;

            echo "New image uploaded";

            move_uploaded_file($tmp_path, $absolute_path);

            $img = $relative_path;
        }


        $sql = "
            UPDATE User
            SET name = :name
            ,   email = :email
            ,   room = :room
            ,   img_path = :img_path
            WHERE id = :user_id
        ";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":name" => $name,
            ":email" => $email,
            ":room" => $room,
            ":img_path" => $img,
            ":user_id" => $user_id
        ]);

        if ($stmt->rowCount() > 0) {
            $success_message = "User update Succesffully";
        } else {
            $error_message = "Failed to update user";
        }
    }

?>


<html>
<h1>Update User with ID : <?php echo $user_id?></h1>

<form method="post" enctype="multipart/form-data">
    <div>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required value="<?php echo $user['name']?>">
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required value="<?php echo $user['email']?>">
    </div>

    <div>
        <label for="room-number">Room Number:</label>
        <select name="room-number" id="room-number" required>
            <?php
                foreach($rooms as $room) {
                    $selected = $user['room'] == $room ? 'selected' : '';
                    echo "<option value='$room' $selected>$room</option>";
                }
            ?>
        </select>
    </div>
    <div>
        <img 
            src="<?php echo $user['img_path']?>" 
            style="width: 200px; height: 200px"
            alt="">
        <label for="profile-picture">Profile Picture:</label>
        <input type="file" name="profile-picture" id="profile-picture">
    </div>
    <div>
        <input type="submit" name="update" value="Update">
        <input type="reset" value="Reset">
        <br>
        <a href="allUsers.php">All Users</a>
    </div>
    <div>
        <p style="color: red;"><?php echo $error_message; ?></p>
        <p style="color: green;"><?php echo $success_message; ?></p>
    </div>
</form>
</html>