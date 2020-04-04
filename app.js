document.getElementById('cargar').addEventListener('click', loadData)

function loadData() {
    const xhr = new XMLHttpRequest() 

    //connection
    xhr.open('GET', 'datos.txt', true)

    xhr.onload = () => {
        //200 success | 403 forbidden | 404 not found
        if (this.status === 200) {
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`
        } 
    }

    //send request
    xhr.send()
}