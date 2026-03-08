<?php
require 'vendor/autoload.php';

// Твоя строка подключения
$uri = '';

try {
    $client = new MongoDB\Client($uri);

    $dbName = 'entities'; 
    $collectionName = 'cars';

    $collection = $client->selectCollection($dbName, $collectionName);

    // Твой ID (возьми его из Атласа или Компаса)
    $carId= '69a36fdebb4614640986dd3c'; 

    // ВАЖНО: строку нужно обернуть в объект ObjectId
    $car = $collection->findOne([
        '_id' => new MongoDB\BSON\ObjectId($carId)
    ]);

    if ($car) {

    libxml_use_internal_errors(true);

    $imp = new DOMImplementation();
    $dtd = $imp->createDocumentType('cars', '', 'cars.dtd');

    // 2. Создаем документ, передавая ему этот Doctype
    $dom = $imp->createDocument(null, 'cars', $dtd);
    $dom->encoding = 'UTF-8';
    $dom->formatOutput = true;

    // 3. Работаем с корневым элементом (он уже создан в createDocument)
    $elCars = $dom->documentElement;

    $elCar = $dom->createElement('car');
    $elCarBrand = $dom->createElement('brand', $car['brand']);
    $elCarPrice = $dom->createElement('price', $car['price']);

    $elCar->setAttribute('status', 'running');

    $elCars->appendChild($elCar);
    $elCar->appendChild($elCarBrand);
    $elCar->appendChild($elCarPrice);

    if ($dom->validate()) {
        header('Content-Type: text/xml');
        echo $dom->saveXML();	
    } else {
        // Список ошибок, если XML «кривой» относительно схемы
        $errors = libxml_get_errors();
        print_r($errors);
    }

    } else {
        echo "Автомобиль с таким ID не обнаружен.";
    }

} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage();
}

?>
