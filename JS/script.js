const url = "https://jsonplaceholder.typicode.com/users";

const btn = document.getElementById('btn');


btn.addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const date = document.getElementById('date').value;

    datos.name = name;
    datos.lastName = lastName;
    datos.date = date;
});

const datos = {
    name: "",
    lastName: "",
    date: ""
};

const promise = {
    method: "POST",
    Headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
}

fetch(url, promise)
    .then(Response => {
        if (!Response.ok) {
            throw new Error('fallo el envio');
        }
        return Response.json();
    })

    .then(datos => {
        console.log('Respuesta del servidor:', datos)
    })

    .catch(error => {
        console.error('Error', error)
    })