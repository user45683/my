function listFunction(){
  let table = document.querySelector('#myTable');



  let arrList = [
        //tile
            //b7
    {code: '', name: 'Classico', pos: 'B7-17', barcode: '000000000'},
    {code: '', name: 'Lazurro', pos: 'B7-17'},
    {code: '', name: 'Bella', pos: 'b7-04'},
            //B6

    {code: '', name: '', pos: 'b6-19'},
    {code: '396227', name: 'Панно Фристайл 5 20x20', pos: 'b6-08'},
    {code: '712527', name: 'Плитка настенная Madera GT 60x25 Тип 2 Бежевый', pos: 'B6-06'},
    {code: '712530', name: 'Плитка настенная Montblanc GT 60x25 Тип 1 Серый', pos: 'B6-06'},
    {code: '712533', name: 'Бордюр Montblanc GT 60x6,5 Серый', pos: 'B6-06'},
            //B5
    {code: '725421', name: 'Керамогранит Marmo Milano 60x60 серый 8M2510', pos: 'b5-09'},

    {code: '732486', name: 'Плитка настенная Мартиника 30*60 верх', pos: ''},
    {code: '732488', name: 'Плитка напольная Мартиника 40*40', pos: ''},

    {code: '670132', name: 'Плитка напольная Sklad GT 40*40 3SK0022', pos: ''},

        //стройматериалы
    {code: '493141', name: 'Затирка водоотталкивающая Ceresit CE 40, цвет антрацит, 2кг', pos: 'B5-13'},
    {code: '141304', name: 'Затирка водоотталкивающая Ceresit CE 40, цвет белый, 2кг', pos: 'B5-13'},
    {code: '527695', name: 'Клей для плитки Ceresit CM 14, 25кг', pos: 'B5-11'},
        //door
    {code: '671588', name: 'Полотно дверное глухое 80x200, ламинация, цвет венге', pos: 'B3-20'},
    {code: '764892', name: 'Наличник плоский, 3D покрытие 2150x70x8мм, светло-серый', pos: ''},
    {code: '764893', name: 'Коробка прямая, 3D покрытие 2070x74x28мм, светло-серый', pos: ''},
    {code: '764883', name: 'Полотно дверное остекленное Техно 642 2000x700мм, 3D покрытие, цвет светло-серый', pos: ''},
        //steel door
    {code: '709442', name: 'Дверь входная металлическая Рубикон Царга 2050x960 Левая, Лиственница белая', pos: ''},
    {code: '728473', name: 'Дверь входная Стройгост 5 РФ 2050x860 Левая, Рустикальный дуб', pos: ''},
    {code: '733560', name: 'Дверь входная Dominanta 2050x860 Правая, Рустикальный дуб', pos: ''},
        //season products
    {code: '096066', name: 'Пленка п/э ширина 6,0м 150мкм', pos: ''},
    {code: '161519', name: 'Канистра-бочка 40л с навесными ручками M680', pos: 'С14-10'},
        //paints
    {code: '489884', name: 'Пена монтажная KRASS 890мл V69 ПРОФИ', pos: ''},

    {code: '036129', name: 'Грунтовка ГФ-021 2,5кг красно-коричневая Л-С', pos: ''},
    {code: '031078', name: 'Грунтовка ГФ-21 20кг красно-коричневая Л-С', pos: ''},

    {code: '674992', name: 'Состав FAKTURA антисептический невымываемый ХМФ-БФ, 10л', pos: ''},

        //plumbing
    {code: '762308', name: 'Зеркальный шкаф Итана Анкона 50 500x150x790 (Белый глянец)', pos: ''},
    {code: '629816', name: 'Экран для ванны МетаКам 1,68м белый', pos: 'A15-17'},


        //kitchen
    {code: '755222', name: 'Фасад Аркадия 357x596 ясень анкор светлый', pos: ''},

    {code: '755226', name: 'Фасад Аркадия 716x397 милк', pos: ''},
    {code: '755222', name: 'Фасад Аркадия 357x596 милк', pos: ''},

    {code: '676711', name: 'Корпус 72*40 навесной 400x720', pos: ''},
    {code: '676712', name: 'Корпус 72*60 навесной 600x720', pos: ''},

    {code: '676702', name: 'Корпус стола 1С 1Я 400 (Белый)', pos: ''},
  ];



  for(let i = 0; i < arrList.length; i++){
    let td0 = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let tr = document.createElement('tr');
    table.appendChild(tr);
    td0.innerText = arrList[i].code;
    td1.innerText = arrList[i].name;
    td2.innerText = arrList[i].pos;
    td3.innerText = arrList[i].barcode;
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
  }
}

listFunction();
