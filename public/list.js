function listFunction(){
  let table = document.getElementById('myTable');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let arrList = [
    {code: '000', name: 'l', pos: 'c56'},
    {code: '0000003', name: 'Bella', pos: 'b7-04'},
    {code: '000', name: 'l', pos: 'c56'},
  ];
    td.innerText = arrList[1].code;
    table.appendChild(tr).appendChild(td);
}
listFunction();
