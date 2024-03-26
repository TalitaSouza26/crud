

var loadOrdersPage = function(){
    var clientSelect = document.querySelector('#clientList') 
    debugger
    for (let index = 0; index < clients.length; index++) {
        // const element = array[index];


        clientSelect.options[clientSelect.options.length] = new Option(clients[index].name, clients[id].id)
        console.log(JSON.stringify(clients))
        
    }
}


