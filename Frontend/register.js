const button = document.getElementById('submitForm'); 
    button.addEventListener('click', (event) => {
        if (!check.checked) {
            alert("Please tick the box")}
        else{
        event.preventDefault()
         
        const firstname =  document.getElementById('firstname'); 
        const surname =  document.getElementById('surname');
        const birthday = document.getElementById("birthday");
        const nationality =  document.getElementById('nationality');
        var ele = document.getElementsByName('gender'); 
        var gender  = ''
            var ele = document.getElementsByName('gender'); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                gender +=  ele[i].value + '';
            }
        const age =  document.getElementById('age');
        const address =  document.getElementById('address');
        const  mobile=  document.getElementById('mobile');
        const  email =  document.getElementById('email');
        var disability  = ''
            var ele = document.getElementsByName('disability'); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                disability +=  ele[i].value + '';
            }        
        var intake  = ''
        var ele = document.getElementsByName('intake'); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                intake +=  ele[i].value + '';
            } 
        var sel = document.getElementById('courses');
        var courses ;
        for ( var i = 0, len = sel.options.length; i < len; i++ ) {
            courses = sel.options[i];
            if ( courses.selected === true ) {
                break;
            }
        }  
        var university  = ''
        var ele = document.getElementsByName('university'); 
            for(i = 0; i < ele.length; i++) { 
                if(ele[i].checked) 
                university +=  ele[i].value + '';
            }
        var fund  = ''
        var ele = document.getElementsByName('fund'); 
            for( i = 0; i < ele.length; i++ ) { 
                if(ele[i].checked) 
                fund +=  ele[i].value + '';
            } 

        const  college =  document.getElementById('college');
        const  country =  document.getElementById('country');
        const  title  =  document.getElementById('title');
        const  grade=  document.getElementById('grade');
        const startday = document.getElementById("startday");
        const endday = document.getElementById("endday");
        var test  = ''
        var ele = document.getElementsByName('test'); 
            for( i = 0; i < ele.length; i++ ) { 
                if(ele[i].checked) 
                test +=  ele[i].value + '';
            }
        var work  = '' 
        var ele = document.getElementsByName('work'); 
            for( i = 0; i < ele.length; i++ ) { 
                if(ele[i].checked) 
                work +=  ele[i].value + '';
            } 
        
        const  company=  document.getElementById('company');
        const  job =  document.getElementById('job');
        const duties =  document.getElementById('duties');
        
        const data = {
                      'firstname': firstname.value,
                      'surname': surname.value ,
                      'birthday' : birthday.value,
                      'age': age.value,
                      'nationality': nationality.value,
                      'gender': gender ,
                      'address': address.value,
                      'mobile': mobile.value,
                      'email': email.value,
                      'disability':disability,
                      'intake': intake,
                      'courses': courses.value,
                      'university':university,
                      'fund': fund ,
                      'college': college.value,
                      'country': country.value,
                      'title': title.value,
                      'grade': grade.value,
                      'startday' : startday.value,
                      'endday' : endday.value,
                      'test': test ,
                      'work':work ,
                      'company': company.value,
                      'job': job.value,
                      'duties': duties .value
                     }
        const url = "http://localhost:8080/register"

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((data) => {
            console.log(`Done sending data and resp is ${data}`)
            console.log(courses.value)
        })
    } 
    })