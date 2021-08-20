function listFunction(){
  let table = document.querySelector('#myTable');



  let arrList = [
        //tile
    {code: '000', name: 'Classico', pos: 'B7-17'},
    {code: '000', name: 'Lazurro', pos: 'B7-17'},
    {code: '0000003', name: 'Bella', pos: 'b7-04'},
    {code: '732486', name: 'Плитка настенная Мартиника 30*60 верх', pos: ''},
    {code: '732488', name: 'Плитка напольная Мартиника 40*40', pos: ''},
        //door
    {code: '764892', name: 'Наличник плоский, 3D покрытие 2150x70x8мм, светло-серый', pos: ''},
    {code: '764893', name: 'Коробка прямая, 3D покрытие 2070x74x28мм, светло-серый', pos: ''},
    {code: '764883', name: 'Полотно дверное остекленное Техно 642 2000x700мм, 3D покрытие, цвет светло-серый', pos: ''},
        //steel door
    {code: '709442', name: 'Дверь входная металлическая Рубикон Царга 2050x960 Левая, Лиственница белая', pos: ''},
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
}

listFunction();
