let svg_box = document.querySelector('.svg');
let svgs = document.querySelectorAll('svg');
let button = document.querySelector('button');
let login1 = document.querySelector('#input_text');
let pass1 = document.querySelector('#input_password');

const checkLogin = ()=>{  //arrow function
    if(login1.value == "talyp" && pass1.value == "talyp"){
        window.location.href = 'student_page.html'
    }
    else if(login1.value == "admin" && pass1.value == "admin"){
        window.location.href = 'admin_page.html'
    }
    else{
        alert("Nadogry girizme!");
    }
}

button.addEventListener('click', checkLogin)

// press enter key
pass1.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        checkLogin();
    }
})

let icon = false;

svg_box.addEventListener("click", function(){
    if(icon===true){
        icon=false;
        svgs[0].style.display = 'none'
        svgs[1].style.display = 'block'
        pass1.type = 'password';
    }
    else{
        svgs[1].style.display = 'none'
        svgs[0].style.display = 'block'
        icon=true;
        pass1.type ='text';
    }
})