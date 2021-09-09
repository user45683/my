function listFunction(){
  let table = document.querySelector('#myTable');
  let c = document.querySelector('#c');

  let arrList = [
	  //инструменты
{code: '417932', name: 'Шпатель резиновый 40 мм белый Мастер ЗУБР 1016-40 z01', pos: '', barcode: '000000000', img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
        //tile
            //b7
            //B6

{code: '396227', name: 'Панно Фристайл 5 20x20', pos: 'b6-08', price: '000', barcode: '000000000', img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
{code: '712527', name: 'Плитка настенная Madera GT 60x25 Тип 2 Бежевый', pos: 'B6-06', price: '000', barcode: '000000000', img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwbG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
{code: '712530', name: 'Плитка настенная Montblanc GT 60x25 Тип 1 Серый', pos: 'B6-06'},
{code: '712533', name: 'Бордюр Montblanc GT 60x6,5 Серый', pos: 'B6-06'},
{code: '404348' ,name: 'Керамогранит Сенат черный обрнзной 40.2x40.2 SG156000', pos: '', price: '', img: 'src/404348.jpg', barcode: ''},
{code: '585911' ,name: 'Плитка настенная Safari 40*:', pos: '', price: '', img: '', barcode: ''},

{code: '658341' ,name: 'Керамогранит Бромли темно-серый 40,2*40,2 SG150400N', pos: 'B6-L', price: '', img: 'src/658341.jpg', barcode: ''},
            //B5
{code: '779388', name: 'Керамогранит Alania Natural PG01 20*40 Бежевый', pos: 'B5-14'},
{code: '725421', name: 'Керамогранит Marmo Milano 60x60 серый 8M2510', pos: 'b5-09'},
{code: '732486', name: 'Плитка настенная Мартиника 30*60 верх', pos: ''},
{code: '732488', name: 'Плитка напольная Мартиника 40*40', pos: ''},
{code: '670132', name: 'Плитка напольная Sklad GT 40*40 3SK0022', pos: ''},

{code: '708157' ,name: 'Настенная плитка Surf 44x20 Многоцветный (1.05)', pos: 'B-5 R', price: '', img: '', barcode: ''},

{code: '704770' ,name: 'Плитка настенная "Мерида" 20x30 верх (1.44)', pos: 'butt-1', price: '', img: 'src/704770.jpg', barcode: ''},
{code: '603686' ,name: 'Керамогоанит Gres A100 30*30 бежевый', pos: '', price: '', img: 'src/603686.jpg', barcode: ''},

{code: '749213' ,name: 'Керамогранит 40x40 LAZURRO Бежевый 3L1870 (1.12)', pos: '', price: '', img: '', barcode: ''},

{code: '756165' ,name: 'Керамогранит 15x90 WOOD CHEVRON бежевый 9L1190 (1.08)', pos: '', price: '', img: 'src/756165.jpg', barcode: ''},

        //стройматериалы
{code: '493141', name: 'Затирка водоотталкивающая Ceresit CE 40, цвет антрацит, 2кг', pos: 'B5-13'},
{code: '141304', name: 'Затирка водоотталкивающая Ceresit CE 40, цвет белый, 2кг', pos: 'B5-13'},
{code: '527695', name: 'Клей для плитки Ceresit CM 14, 25кг', pos: 'B5-11'},
        //door
{code: '671588', name: 'Полотно дверное глухое 80x200, ламинация, цвет венге', pos: 'B3-20'},
{code: '671596' ,name: 'Полотно дверное глухое 80x200см, ламинация, цвет ми ', pos: '', price: '', img: '', barcode: ''},
{code: '764892', name: 'Наличник плоский, 3D покрытие 2150x70x8мм, светло-серый', pos: ''},
{code: '764893', name: 'Коробка прямая, 3D покрытие 2070x74x28мм, светло-серый', pos: ''},
{code: '764883', name: 'Полотно дверное остекленное Техно 642 2000x700мм, 3D покрытие, цвет светло-серый', pos: ''},
{code: '' ,name: '', pos: '', price: '', img: '', barcode: ''},
        //двери, фурнитура дверная
{code: '709442', name: 'Дверь входная металлическая Рубикон Царга 2050x960 Левая, Лиственница белая', pos: ''},
{code: '728473', name: 'Дверь входная Стройгост 5 РФ 2050x860 Левая, Рустикальный дуб', pos: ''},
{code: '733560', name: 'Дверь входная Dominanta 2050x860 Правая, Рустикальный дуб', pos: ''},
		//фурнитура
{code: '383836' ,name: 'Петля дверная универсальная Palladium N 500 C-S-4" MG(магма)', pos: '', price: '490', img: '', barcode: ''},

        //season products
{code: '096066', name: 'Пленка п/э ширина 6,0м 150мкм', pos: ''},
{code: '539285' ,name: 'Укрывной материал Агротекс30 шир 3,2м', pos: '', price: '', img: 'src/539285.jpg', barcode: ''},
{code: '161519', name: 'Канистра-бочка 40л с навесными ручками M680', pos: 'С14-10'},

        //paints
{code: '489884', name: 'Пена монтажная KRASS 890мл V69 ПРОФИ', pos: ''},
{code: '532168' ,name: 'Клей-Пена полиуретановая Soudal Профи 750мл для гипсокартона, панелей, минваты', pos: '', price: '', img: '', barcode: ''},
{code: '036129', name: 'Грунтовка ГФ-021 2,5кг красно-коричневая Л-С', pos: ''},
{code: '031078', name: 'Грунтовка ГФ-21 20кг красно-коричневая Л-С', pos: ''},
{code: '674992', name: 'Состав FAKTURA антисептический невымываемый ХМФ-БФ, 10л', pos: ''},


        //plumbing
{code: '762308', name: 'Зеркальный шкаф Итана Анкона 50 500x150x790 (Белый глянец)', pos: ''},
{code: '629816', name: 'Экран для ванны МетаКам 1,68м белый', pos: 'A15-17'},

{code: '574243' ,name: 'Пружина (кондуктор) 500 ммдля мет./пласт. труб наруж. 16 мм, MP-Y', pos: '1-L', price: '', img: 'src/574243.jpg', barcode: ''},

	  //напольные покрытия
	  	//плинтус
{code: '295331', name: 'Плинтус ПВХ 2500x66x2 мм. Дуб Белый - 622 ESQUERO', pos: ''},
	 	 //ламинат
{code: '759180', name: '', pos: 'Л4-10'},
{code: '787489', name: '', pos: 'L3-4'},
        //kitchen
{code: '755222', name: 'Фасад Аркадия 357x596 ясень анкор светлый', pos: ''},
{code: '755226', name: 'Фасад Аркадия 716x397 милк', pos: ''},
{code: '755222', name: 'Фасад Аркадия 357x596 милк', pos: ''},
{code: '676711', name: 'Корпус 72*40 навесной 400x720', pos: ''},
{code: '676712', name: 'Корпус 72*60 навесной 600x720', pos: ''},
{code: '676702', name: 'Корпус стола 1С 1Я 400 (Белый)', pos: ''},
	  //мебель для домашнего офиса
{code: '715699', name: 'Стул складной JACK BLACK (CH) V-CERATA', pos: 'AP-3'},
	//фурнитура мебельная
{code: '676762' ,name: 'Ручка скоба ', pos: '', price: '', img: '', barcode: ''},
{code: '' ,name: '', pos: '', price: '', img: '', barcode: ''},
{code: '' ,name: '', pos: '', price: '', img: '', barcode: ''},


{code: '529400' ,name: 'Кран шаровый водоразборный со штуцером 1/2" ручка, MP-Y', pos: '', price: '', img: 'src/529400.jpg', barcode: ''},
{code: '399860' ,name: 'Наконечник Вито Д25 CH-25-292-29', pos: 'L', price: '', img: 'src/399860.jpg', barcode: ''},
{code: '' ,name: '', pos: '', price: '', img: '', barcode: ''},

  ];



  for(let i = 0; i < arrList.length; i++){
    let td0 = document.createElement('td');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let tr = document.createElement('tr');

    table.appendChild(tr);
    td0.innerText = arrList[i].code;
    td1.innerText = arrList[i].name;
    td2.innerText = arrList[i].pos;
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
  }

  for(let i = 0; i < arrList.length; i++){
    let card = document.createElement('div');
    card.classList.add('card');	  
    let h3Code = document.createElement('h3');
    let pName = document.createElement('p');
    let imgImage = document.createElement('img');
    let pBarcode = document.createElement('p');
    let pPrice = document.createElement('p');
    h3Code.innerText = arrList[i].code;
    pName.innerText = arrList[i].name;
    imgImage.src = arrList[i].img;
    pPrice.innerText = 'цена: '+arrList[i].price;
    pBarcode.innerText = 'шк: '+arrList[i].barcode;

    c.appendChild(card);
    card.appendChild(imgImage);
    card.appendChild(h3Code);
    card.appendChild(pName);
    card.appendChild(pPrice);
    card.appendChild(pBarcode);
  }

}

listFunction();
