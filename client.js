


clients = []

var addClient = function(){
  var client = {
    id: document.querySelector('#clientId').value,
    name: document.querySelector('#clientName').value
  } 
  clients.push(client) 
//   console.log(JSON.stringify(clients))

}