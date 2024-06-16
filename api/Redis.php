<?php 

$redis = new Redis();
$redis -> connect('localhost',6379);

echo "Connection to server successfully\n";
$redis->set('mykey','my value');

$value=$redis->get('mykey');
echo "Get the value from redis: ".$value;
?>
