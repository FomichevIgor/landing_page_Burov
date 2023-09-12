 // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map2", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.06344546388396,82.91238808348061],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
let center=[55.06344546388396,82.91238808348061];
        let placemark=new ymaps.Placemark(center,{},{
           // iconLayout:'default#image',
            //iconImageHref:'../images/location.png',
            //iconImageSize:[32,32],
            //iconImageOffset:[-10,-20]
        })

        myMap.controls.remove('geolocationControl'); // удаляем геолокацию
        myMap.controls.remove('searchControl'); // удаляем поиск
        myMap.controls.remove('trafficControl'); // удаляем контроль трафика
        myMap.controls.remove('typeSelector'); // удаляем тип
        myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
       // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
       myMap.controls.remove('rulerControl'); // удаляем контрол правил
       // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

       myMap.geoObjects.add(placemark);
    }