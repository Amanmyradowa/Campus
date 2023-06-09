const faculties = [
    {
        faculty: 'Maglumat tehnologiyasy',
        majors:['Maglumat tehnologiyasy1','Maglumat tehnologiyasy2','Maglumat tehnologiyasy3']
    },
    {
        faculty: 'Halkara gatnasyklary we halkara hukugy',
        majors:['Halkara gatnasyklary we halkara hukugy1','Halkara gatnasyklary we halkara hukugy2','Halkara gatnasyklary we halkara hukugy3']
    },
    {
        faculty: 'Halkara ynsanperwer bilimleri',
        majors:['Halkara ynsanperwer bilimleri1','Halkara ynsanperwer bilimleri2','Halkara ynsanperwer bilimleri3']
    },
    {
        faculty: 'Tajircilik',
        majors:['Tajircilik1','Tajircilik2','Tajircilik3']
    },
]


let dropdown = document.querySelectorAll(".icon_title");
let dropdown_btn = document.querySelectorAll(".dropdown_btn");
let dropdown_svg = document.querySelectorAll(".dropdown svg");



for(let i = 0; i<dropdown.length; i++){
    dropdown[i].addEventListener("click", function(){
        dropdown_btn[i].classList.toggle("show");
        dropdown_svg[i].classList.toggle('show');
    })
}

const chooseImageFunc = function() {
    document.querySelector("#chooseImage").click();
}

const chooseFileFunc = ()=> {
    document.querySelector("#chooseFile").click();
}

//change dropdown content
const changeDropdown = (i,j)=>{
    const dropdown_divs = dropdown_btn[i].querySelectorAll('div');
    for(let i = 0; i<dropdown_divs.length; i++){
        dropdown_divs[i].classList.remove('active');
    }
    const div = dropdown_divs[j];
    div.classList.add('active')
    dropdown[i].querySelector('p').textContent = div.textContent;

    //after chose close dropdown
    dropdown_btn[i].classList.remove('show');
    dropdown_svg[i].classList.remove('show');

    //change major data
    if(i === 0){
        dropdown[1].querySelector('p').textContent = faculties[j].majors[0];
        dropdown_btn[1].innerHTML = '';
        
        for(let k = 0; k<faculties[j].majors.length; k++){
            dropdown_btn[1].innerHTML = dropdown_btn[1].innerHTML + `<div onclick="changeDropdown(1,${k})" >${faculties[j].majors[k]}</div>`
        }
    }
}

//select image
const img = document.querySelector('.surat_gosh img')
const selectImage = (event)=>{
    if(event.files && event.files[0]){
        var reader = new FileReader();

        reader.onload = function (e) {
            img.setAttribute('src',e.target.result);
        }

        reader.readAsDataURL(event.files[0])
    }
}

//where click close dropdown
document.addEventListener('click',function(e){
    const dropdown = document.querySelectorAll('.dropdown');
    let result1 = dropdown[0].contains(e.target)
    let result2 = dropdown[1].contains(e.target)
    let result3 = dropdown[2].contains(e.target)
    if(!result1 && !result2 && !result3){
        for(let i = 0; i<dropdown_btn.length; i++){
            dropdown_btn[i].classList.remove('show');
            dropdown_svg[i].classList.remove('show');
        }
    }
})

function sendData(){
    const name = document.querySelector('#name').value;
    const dataFacul = document.querySelectorAll("#title")[0].textContent;
    const dataHunar = document.querySelectorAll("#title")[1].textContent;
    const year = document.querySelectorAll("#title")[2].textContent;
    const temmiCare = document.querySelectorAll(".input")[1].value;
    const date = document.querySelectorAll(".input")[2].value;

    const data = {
        img: './images/student.png',
        name,
        faculty: dataFacul,
        major: dataHunar,
        year,
        temmiCare,
        date
    }
    let globalData = localStorage.getItem('data');
    globalData = JSON.parse(globalData);

    globalData.unshift(data);

    localStorage.setItem('data',JSON.stringify(globalData));

    window.location.href = 'admin_page.html';
}