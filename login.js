var arr_user = JSON.parse(localStorage.getItem('list_user')) || [];

function add() {
  let user = document.getElementById('user').value
  let gmail = document.getElementById('gmail').value
  let pass = document.getElementById('pass').value

  const users = {
    username: user,
    email: gmail,
    password: pass,
  }

  arr_user.push(users)
  localStorage.setItem('list_user', JSON.stringify(arr_user))

  location.reload()
}

function view_user() {
  let get_user = JSON.parse(localStorage.getItem('list_user')) || [];
  let res = document.getElementById('res')
  get_user.reverse()

  if (get_user.length > 0) {
    get_user.forEach(user => {
      let div = document.createElement('div')
      div.innerHTML = `
			<table>
        <tr>
          <td><b>Username:</b> ${user.username}</td>
          <td><b>Email:</b> ${user.email}</td>
          <td><b>Password:</b> ${user.password}</td>
        </tr>
			</table>
      `
      res.appendChild(div)
    })
  } else {
    res.innerHTML = "No hay usuarios registrados."
  }
}

window.onload = function() {
  view_user()
}
