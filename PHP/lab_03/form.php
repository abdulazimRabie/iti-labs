<html>
    <h1>Add User : </h1>
    <form action="done.php" method="post" enctype="multipart/form-data">
        <div>
            <label for="name">Name : </label>
            <input type="text" name="name" id="name">
        </div>
        
        <div>
            <label for="email">Email : </label>
            <input type="email" name="email" id="email">
        </div>
        
        <div>
            <label for="password">Password : </label>
            <input type="password" name="password" id="password">
        </div>
        
        <div>
            <label for="confirm-password">Confirm Password : </label>
            <input type="confirm-password" name="confirm-password" id="confirm-password">
        </div>

        <div>
            <label for="room-number">Room Number : </label>
            <select name="room-number" id="room-number">
                <option value="">Select Room Number</option>
                <option value="Application1">Application1</option>
                <option value="Application2">Application2</option>
                <option value="Cloud">Cloud</option>
            </select>
        </div>
        
        <div>
            <label for="profile-picture">Profile Picture : </label>
            <input type="file" name="profile-picture" id="profile-picture">
        </div>

        <div>
            <input type="submit" name="submit" value="Register">
            <input type="reset" value="Reset">
        </div>
    </form>
</html>