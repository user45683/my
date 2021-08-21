document.getElementById('search').addEventListener('keyup', myFunction);

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
	if(isNaN(filter)){
		td = tr[i].getElementsByTagName("td")[1];}
	  else{td = tr[i].getElementsByTagName("td")[0];}
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

let btn = document.querySelector('button');
let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let searchContainer = document.querySelector('.searchContainer');
btn0.onclick = () => { searchContainer.style.display = 'none';}
btn1.onclick = () => { searchContainer.style.display = '';}
btn2.onclick = () => { searchContainer.style.display = 'none';}
