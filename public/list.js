function listFunction(){
  let table = document.querySelector('#myTable');



  let arrList = [
    {code: '000', name: 'l', pos: 'B7-20'},
    {code: '000', name: 'l', pos: 'B7-19'},
    {code: '000', name: 'l', pos: 'B7-18'},
    {code: '000', name: 'Classico', pos: 'B7-17'},
    {code: '000', name: 'Lazurro', pos: 'B7-17'},

    {code: '0000003', name: 'Bella', pos: 'b7-04'},
    {code: '000', name: '2', pos: 'c56'},
    {code: '000', name: '2', pos: 'c56'},
    {code: '000', name: '2', pos: 'c56'},
    {code: '000', name: '2', pos: 'c56'},
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
