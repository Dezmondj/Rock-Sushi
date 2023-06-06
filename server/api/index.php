<?php

require "../start.php";
use Src\Product;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );

if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
  return false;    // serve the requested resource as-is.
}

if ($uri[1] !== 'products') {
  header("HTTP/1.1 404 Not Found");
  exit();
}

$productId = null;
if (isset($uri[2])) {
    $productId = (int) $uri[2];
}

$requestMethod = $_SERVER["REQUEST_METHOD"];

$controller = new Product($requestMethod, $productId);
$controller->processRequest();
