<?php
    
    $db_file = "userinfo.txt";

    $content = file_get_contents($db_file);

    echo $content;

?>