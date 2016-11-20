
<?php
//header("Content-Type: application/xml; charset=utf-8");
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';


echo '<response>';



$angle = $_GET['angle'];
if(isset($_GET['angle'])) {
        $angle = (int)$_GET['angle'];
//'system("sudo python /var/www/html/hi.py $angle")';
        echo 'At least I work';
}

//$angle = $_GET['angle'];
echo 'i got your angle right here buddy';



echo '</response>';
?>




