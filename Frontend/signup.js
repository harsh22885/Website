const button = document.getElementById('signup'); 
// if(button){
    
    button.addEventListener('click', (event) => {
        event.preventDefault()
        const name =  document.getElementById('name');
        const email =  document.getElementById('email'); 
        const password =  document.getElementById('password'); 
        const data = {'name': name.value,'email': email.value, 'password': password.value}
        const url = "http://localhost:8080/signup.html"

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            console.log(`Done sending data and resp is ${data}`)
            console.log(name.value)
        
        })
        //onclick=location.href='/login.html'
       
        
        
    })

// }