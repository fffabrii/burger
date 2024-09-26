const size = document.getElementById('size');
const tipo = document.getElementById('tipo');
const cremas = document.getElementById('cremas');
const pago = document.getElementById('pago');

size.addEventListener('change', function() {
  const select_size = size.options[size.selectedIndex].text;
  localStorage.setItem('tamaño', select_size)
  console.log(select_size)
});

tipo.addEventListener('change', function() {
  const select_tipo = tipo.options[tipo.selectedIndex].text;
  localStorage.setItem('tipo', select_tipo)
  console.log(select_tipo)
});

cremas.addEventListener('change', function() {
  const select_cremas = cremas.options[cremas.selectedIndex].text;
  localStorage.setItem('cremas', select_cremas)
  console.log(select_cremas)
});

pago.addEventListener('change', function() {
  const select_pago = pago.options[pago.selectedIndex].text;
  localStorage.setItem('pago', select_pago)
  console.log(select_pago)
});


const date = new Date();
var d = date.getDate()
var m = date.getMonth() + 1
var y = date.getFullYear()

var dat = `${d} / ${m} / ${y}`
console.log(dat);

var f_pedido = document.getElementById('f_pedido').value = dat
localStorage.setItem('fecha', f_pedido)

function register() {

  let pedido = document.getElementById('pedido').value
  let cliente = document.getElementById('cliente').value
  let celular = document.getElementById('celular').value
  let cantidad = document.getElementById('cantidad').value

  localStorage.setItem('ped', pedido)
  localStorage.setItem('client', cliente)
  localStorage.setItem('cel', celular)
  localStorage.setItem('cant', cantidad)

  if (pedido == "" | cliente == "" | celular == "" | f_pedido == "" | cantidad == "") {
    alert("complete los campos")
    return 0;
  } else {
    link.innerHTML = `<a target="_blank" href="boleta.html">BOLETA</a>`
  }
}
