<?php
class ConnectDB {
    private $servername = "localhost";
    private $username = "root";
    private $passcode = "";
    public $dbname = "cadcel";
    public $conn;
    // Create connection
    public function Connect(){
    	$this->conn = mysqli_connect($this->servername, $this->username, $this->passcode, $this->dbname);
      mysqli_set_charset($this ->conn, 'utf8');
	    // Check connection
	    if (!$this->conn) {
	        die("Connection failed: " . mysqli_connect_error());
	    }
	}
}
