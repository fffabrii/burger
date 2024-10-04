var arr = JSON.parse(localStorage.getItem('lista')) || [];

function register_products() {
  const random = Math.random().toString(36).substring(2,12)
  let ID = document.getElementById('id').value = random
  let provee = document.getElementById('provee').value
  let product = document.getElementById('product').value
  let cant = document.getElementById('cant').value
  let prec = document.getElementById('prec').value

  let res = document.getElementById('res')

  if (provee == "" | product == "" | cant == "" | prec == "") {
    alert("complete todos los campos")
    return;
  }

  const productos = {
    id: ID,
    proveedor: provee,
    producto: product,
    cantidad: cant,
    precio: prec
  }

  arr.push(productos)

  localStorage.setItem('lista', JSON.stringify(arr))
  console.log(arr)

  location.reload()
}

function view_data() {
  let get_data = JSON.parse(localStorage.getItem('lista')) || [];
  let res = document.getElementById('res')
  get_data.reverse()

  if (get_data.length > 0) {
    get_data.forEach(product => {
      let div = document.createElement('div')
      div.innerHTML = `
			<table>
        <tr>
          <td><b>ID:</b> ${product.id}</td>
          <td><b>Proveedor:</b> ${product.proveedor}</td>
          <td><b>Producto:</b> ${product.producto}</td>
          <td><b>Cantidad:</b> ${product.cantidad}</td>
          <td><b>Precio:</b> ${product.precio}</td>
        </tr>
			</table>
      `
      res.appendChild(div)
    })
  } else {
    res.innerHTML = `<b>No hay productos registrados</b>`
  }
}

window.onload = function() {
  view_data()
}
