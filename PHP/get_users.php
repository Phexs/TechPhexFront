<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

getUsers();

function getUsers(){
    $conn = new mysqli(*root*,*127.0.0.1:3306*,*Sql97!*,*test*);
    $result = $conn->query("SELECT * FROM user");

    $user = array();

    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        array_push($user,array(
        'id'=>$rs["id"],
        'email'=>$rs["email"],
        'password'=>$rs["password"]));
    }
    $conn->close();

    $json = json_encode($user);
    if ($json === false) {
        // Avoid echo of empty string (which is invalid JSON), and
        // JSONify the error message instead:
        $json = json_encode(array("jsonError", json_last_error_msg()));
        if ($json === false) {
            // This should not happen, but we go all the way now:
            $json = '{"jsonError": "unknown"}';
        }
        // Set HTTP response status code to: 500 - Internal Server Error
        http_response_code(500);
    }
    echo $json;
}
?>
