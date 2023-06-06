<?php

namespace Src;

class Product {
  private $requestMethod;
  private $productId;

  public function __construct($requestMethod, $productId)
  {
    $this->requestMethod = $requestMethod;
    $this->productId = $productId;
  }

  public function processRequest()
  {
    switch ($this->requestMethod) {
      case 'GET':
        if ($this->productId) {
          $response = $this->getProduct($this->productId);
        } else {
          $response = $this->getAllProducts();
        };
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
        echo $response['body'];
    }
  }

  private function getAllProducts()
  {
    $json = file_get_contents('../data/products.json');
    $response['status_code_header'] = 'HTTP/1.1 200 OK';
    $response['body'] = $json;
    return $response;
  }

  private function getProduct()
  {
    $response['status_code_header'] = 'HTTP/1.1 200 OK';
    $response['body'] = json_encode(array("name" => "Product X", "id" => "product_that_does_not_exist"));
    return $response;
  }
}