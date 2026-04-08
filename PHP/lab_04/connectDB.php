<?php
    $host         = "127.0.0.1";
    $port         = "3306";
    $username     = "root";
    $password     = "azim11";
    $databaseName = "azimstore";

    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    function create_user_table($pdo) {
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS User (
                id       INT AUTO_INCREMENT PRIMARY KEY,
                name     VARCHAR(50)  NOT NULL,
                email    VARCHAR(50)  NOT NULL,
                password VARCHAR(255) NOT NULL,
                room     VARCHAR(50)  NOT NULL,
                img_path VARCHAR(255) NOT NULL
            );
        ");
    }

    function connect() {
        global $host, $port, $username, $password, $databaseName, $options;

        try {
            $dsn  = "mysql:host=$host;port=$port;dbname=$databaseName";
            $conn = new PDO($dsn, $username, $password, $options);

            create_user_table($conn);

            return $conn;
        } catch (PDOException $e) {
            return false;
        }
    }
?>