const button = document.getElementById('submitForm'); 
    button.addEventListener('click', (event) => {
        
        event.preventDefault()
        const uname_val =  document.getElementById('uname_val'); 
        const pass_val =  document.getElementById('pass_val'); 
        const data = {'uname_val': uname_val.value, 'pass_val': pass_val.value}
        const url = "/login.html"

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            console.log(`Done sending data and resp is ${data}`)
            document.getElementById('uname_val').value = ''
            document.getElementById('pass_val').value = ''
        })
        //  onclick=location.href='/hello.html'
    })