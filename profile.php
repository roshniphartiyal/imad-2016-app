<html>
<head>
<title>
Hello
</title>
</head>

<body>
Hello
<?php
session_start();
$a=$_SESSION["user"];
echo "$a";

echo "hello";
mysql_connect("localhost","root","");
mysql_select_db('login');
$d="DELETE from users where username=$a";
mysql_query($d);


?>

</body>
</html>
