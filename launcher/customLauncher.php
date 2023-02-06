<?php
// Here we expected parse the launcher url and redirect to commonLauncher.php
// Code ...

class ParsedData {
    public string $id;
    public string $operator;
    public string $language;
    public string $currency;
    public string $token;
    public function __construct(string $id, string $operator, string $language, string $currency, string $token)
    {
        $this->id = $id;
        $this->operator = $operator;
        $this->language = $language;
        $this->currency = $currency;
        $this->token = $token;
    }
    public function redirect() {
        header("Location: commonLauncher.php?id=$this->id&operator=$this->operator&language=$this->language&currency=$this->currency&token=$this->token");
    }
}

$id = isset($_GET['userid']) ? $_GET['userid'] : "";
$operator = isset($_GET['establishment']) ? $_GET['establishment'] : "";
$language = isset($_GET['locale']) ? $_GET['locale'] : "";
$currency = isset($_GET['coin']) ? $_GET['coin'] : "";
$token = isset($_GET['securecode']) ? $_GET['securecode'] : "";

$parsedData = new ParsedData($id, $operator, $language, $currency, $token);
$parsedData->redirect();
?>