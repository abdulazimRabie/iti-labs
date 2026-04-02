<?php

    $code = "azim123";
    $suffled_code = str_shuffle($code);

?>



<html>
    <form action="done.php" method="post">
        <div>
            <label for="f_name">First Name : </label>
            <input type="text" name="f_name" id="f_name">
        </div>

        <div>
            <label for="l_name">Last Name : </label>
            <input type="text" name="l_name" id="l_name">
        </div>

        <div>
            <label for="address">Address : </label>
            <textarea name="address" id="address"></textarea>
        </div>


        <div>
            <label for="country">Country : </label>
            <select name="country" id="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
            </select>
        </div>


        <div>
            <label for="gender">Gender : </label>
            <div>
                <input type="radio" name="gender" id="male" value="male">
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
            </div>
        </div>

        <div>
            <label for="skills">Skills : </label>
            <div>
                <input type="checkbox" name="skills[]" id="php" value="php">
                <label for="php">PHP</label>
                <input type="checkbox" name="skills[]" id="js" value="js">
                <label for="js">JavaScript</label>
                <input type="checkbox" name="skills[]" id="html" value="html">
                <label for="html">HTML</label>
            </div>
        </div>


        <div>
            <label for="username">Username : </label>
            <input type="text" name="username" id="username">
        </div>

        <div>
            <label for="password">Password : </label>
            <input type="password" name="password" id="password">
        </div>

        <div>
            <label for="dept">Department : </label>
            <input type="text" name="dept" id="dept">
        </div>


        <div>
            <p><?php echo "Please enter the following code : " . $suffled_code; ?></p>

            <label for="code">Code : </label>
            <input type="text"   name="code"        id="code" placeholder="Enter the code here">
            <input type="hidden" name="original_code" value="<?php echo $suffled_code; ?>">
        </div>


        <div>
            <input type="submit" value="Register" name="submit">
            <input type="reset" value="reset" name="reset">
        </div>
    </form>
</html>