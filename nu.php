<?php

$name=$_POST['name'];
$username=$_POST['email'];
$password=$_POST['password'];
$mno=$_POST['Mno'];

echo "$name<br>";
echo "$username<br>"; 
echo "$password<br>";
echo "$mno";

$con=mysql_connect("localhost","root","");

if(!$con)
{
echo "Not Connected";
}

$c=mysql_select_db('login');

if(!$c)
{
echo "database not found";
}

$sql="INSERT INTO users (`Name`,`username`,`password`, `Mno`) VALUES ('$name','$username','$password',$mno)";

mysql_query($sql);
?>
