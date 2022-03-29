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

//1,9 -> 1,2,3,4,6,7,8,9 -> return 8
//4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> return 12

function test(a, b) {
    let count = 0;

    for (let i = a; i < b; i++) {
        if (i == 5) {
            count--
        } else {
            count++
            console.log(count);
        }
    }
}

test(1, 9)