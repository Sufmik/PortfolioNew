const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)

    const body = {}

    formData.forEach((value, field) => {
        body[field] = value
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status)
            }
        })
        .then(data => {
            alert('Данные отправленны успешно!')
        })
        .catch(error => {
            alert('Данные отправленны с ошибкой ' + error.message)
            console.log(error.message);
        })
        .finally(() => {
            form.reset()
        })
})