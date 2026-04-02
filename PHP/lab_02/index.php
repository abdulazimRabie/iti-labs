<?php
    $arr = ["PHP", "Open Source", "ITI", "Day2", "Arrays"];

    for($i = 0; $i < count($arr); $i++){
        echo $arr[$i] . " -- ";
    }
    echo "<br>";

    foreach($arr as $value){
        echo $value . " -- ";
    }
    echo "<br>";

    print_r($arr);
    echo "<br>";
    echo "=======================<br>"; 


    $info = [
        "name" => "Abdelazim",
        "age" => 30,
        "email" => "abdelazim_rabie@gmail.com",
        "college" => "ITI"
    ];
    print_r($info); 

    echo "<br>Associative array sorted <br>"; 
    // sort($info);
    // print_r($info); // 30, Abdelazim, ITI, abdelazim_ra

    echo "<br>";
    ksort($info); // age, college, email, name
    print_r($info);


    echo "<br>=======================<br>"; 
    echo "array_keys() function <br>";

    $animal = [
        "fly" => true,
        "dog" => true,
        "aggressive" => false
    ];

    print_r(array_keys($animal));


?>