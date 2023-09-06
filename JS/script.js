const url = "https://jsonplaceholder.typicode.com/users";
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const date = document.getElementById('date').value;

    const datos = {
        name: name,
        lastName: lastName,
        date: date
    };

    const promise = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    };

    fetch(url, promise)
        .then(response => {
            if (!response.ok) {
                throw new Error('Fallo el envío');
            }
            return response.json();
        })
        .then(datos => {
            console.log('Respuesta del servidor:', datos);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
