<?php

    function read_data_from_db() {
        $filename = 'data.txt';
        $file_handle = fopen($filename, 'r');

        if ($file_handle) {
            $content = fread($file_handle, filesize($filename));
            fclose($file_handle);
            echo $content;
        } else {
            echo "Error opening file.";
        }
    }

    read_data_from_db();

?>