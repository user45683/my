document.getElementById('search').addEventListener('keyup', myFunction);

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  var h3, div, c; //card filter
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName("tr");
  c = document.getElementById('c');
  div = c.getElementsByTagName('div');



for (i = 0; i < tr.length; i++) {
  if(isNaN(filter)){
    td = tr[i].getElementsByTagName("td")[1];}
  else{td = tr[i].getElementsByTagName("td")[0];}
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) { tr[i].style.display = ""; }
      else { tr[i].style.display = "none"; }
	}
  }


for(i = 0; i < div.length; i++){
h3 = div[i].getElementsByTagName('h3')[0];
if(h3){
txtValue = h3.textContent || h3.innerText;
if(txtValue.toUpperCase().indexOf(filter) > -1){ 
	div[i].style.display = '';}
else{ div[i].style.display = 'none';}
  	}
  }


}


let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let searchContainer = document.querySelector('.searchContainer');
let table = document.querySelector('#myTable');
let c = document.querySelector('#c');
let logo = document.querySelector('#logo');
let body = document.querySelector('body');

btn0.onclick = () => { 
	searchContainer.style.display = 'none'; 
	logo.style.display = 'block';
	body.style.background = '#000';}
btn1.onclick = () => { 
	searchContainer.style.display = ''; 
	table.style.display = ''; 
	c.style.display= ''; 
	logo.style.display = 'none';
	body.style.background = '';}
btn2.onclick = () => { 
	searchContainer.style.display = ''; table.
	style.display = 'none'; 
	c.style.display= 'block';
	logo.style.display = 'none';
	body.style.background = '';
}
