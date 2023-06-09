let beginData = [
    {
        img:'./images/student.png',
        name:'Aymuhammet',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Dowran Dowranow Dowranowic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    },
    {
        img:'./images/student.png',
        name:'Aymuhammet Hydyrberdiyew Nurberdiyevic',
        faculty:'Maglumat Tehnologiyasy',
        major:'Software',
        year:'IV',
        temmiCare:'Dusundiris',
        date:'13.12.2023'
    }
]

let data = localStorage.getItem('data');
data = JSON.parse(data);
if(!data){
    localStorage.setItem('data',JSON.stringify(beginData));
}


let globalData = data;

const allPages = document.querySelector('.footer span');
const nextButton = document.querySelectorAll('.transfers_icons .transfer_icon')[1];
const prevButton = document.querySelectorAll('.transfer_icon')[0];
    
const tableCon = document.querySelector('.table_container');
const page_num = document.querySelector('.page_num');

function setData(data){
    const pages = Math.ceil(data.length/5);
    allPages.textContent = pages;
    page_num.textContent = 1;

    if(data.length){
        tableCon.innerHTML = `
        <div id="border" class="table_head left">Suraty</div>
        <div class="table_head">Ady, Familyasy we Atasynyn ady</div>
        <div class="table_head">Fakulteti</div>
        <div class="table_head">Hunari</div>
        <div class="table_head">Okuw yyly</div>
        <div class="table_head">Temmi caresi</div>
        <div class="table_head">Temmi alan senesi</div>
        <div id="border" class="table_head right">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#DA1B20"/>
            </svg>
        </div>
        `
        for(let i = 0; i < 5; i++){
            tableCon.innerHTML = tableCon.innerHTML +  `
                <div class="table_data left">
                    <img src="${data[i].img}" alt="">
                </div>
                <div class="table_data">${data[i].name}</div>
                <div class="table_data">${data[i].faculty}</div>
                <div class="table_data">${data[i].major}</div>
                <div class="table_data">${data[i].year}</div>
                <div class="table_data">${data[i].temmiCare}</div>
                <div class="table_data">${data[i].date}</div>
                <div class="table_data right">
                    <svg onclick='deleted(${i})' width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#DA1B20"/>
                    </svg>
                </div>
                
            `
            if(i === data.length-1){
                break
            }
        }
    }

    // eger pageimiz 1-a den bolsa next ocik bolmaly
    if(data.length<=5){
        nextButton.classList.add('passive')
    }else{
        nextButton.classList.remove('passive')
    }
}

setData(data);

function next(){
    const page_num = document.querySelector('.page_num')
    const tableCon = document.querySelector('.table_container');
    const prev = document.querySelectorAll('.transfers_icons .transfer_icon')[0];
    const next = document.querySelectorAll('.transfers_icons .transfer_icon')[1];
    if(Number(page_num.textContent) * 5 < globalData.length){
        //table number change
        page_num.textContent = Number(page_num.textContent) + 1
    
        //change table data
        const page = Number(page_num.textContent);
        tableCon.innerHTML = `
        <div id="border" class="table_head left">Suraty</div>
        <div class="table_head">Ady, Familyasy we Atasynyn ady</div>
        <div class="table_head">Fakulteti</div>
        <div class="table_head">Hunari</div>
        <div class="table_head">Okuw yyly</div>
        <div class="table_head">Temmi caresi</div>
        <div class="table_head">Temmi alan senesi</div>
        <div id="border" class="table_head right">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#DA1B20"/>
            </svg>
        </div>
        `
        for(let i = ((page-1)*5); i<page*5; i++){
            tableCon.innerHTML = tableCon.innerHTML +  `
            <div class="table_data left">
                <img src="${globalData[i].img}" alt="">
            </div>
            <div class="table_data">${globalData[i].name}</div>
            <div class="table_data">${globalData[i].faculty}</div>
            <div class="table_data">${globalData[i].major}</div>
            <div class="table_data">${globalData[i].year}</div>
            <div class="table_data">${globalData[i].temmiCare}</div>
            <div class="table_data">${globalData[i].date}</div>
            <div class="table_data right">
                <svg onclick='deleted(${i})' width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#DA1B20"/>
                </svg>
            </div>
        `
            if(i === globalData.length-1){
                break
            }
        }
    
    
        //prev button open
        prev.classList.remove('passive');
    
        //check next button last or not
        if(page*5 >= globalData.length){
            next.classList.add('passive')
        }
    }
}

function prev(){
    const page_num = document.querySelector('.page_num')
    const tableCon = document.querySelector('.table_container');
    const prev = document.querySelectorAll('.transfers_icons .transfer_icon')[0];
    const next = document.querySelectorAll('.transfers_icons .transfer_icon')[1];
    let page = Number(page_num.textContent)

    if(page > 1){
        //activate next button
        next.classList.remove('passive')

        //change table num
        page-=1;
        page_num.textContent = page;

        //change table data
        tableCon.innerHTML = `
        <div id="border" class="table_head left">Suraty</div>
        <div class="table_head">Ady, Familyasy we Atasynyn ady</div>
        <div class="table_head">Fakulteti</div>
        <div class="table_head">Hunari</div>
        <div class="table_head">Okuw yyly</div>
        <div class="table_head">Temmi caresi</div>
        <div class="table_head">Temmi alan senesi</div>
        <div id="border" class="table_head right">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#DA1B20"/>
            </svg>
        </div>
        `
        for(let i = ((page-1)*5); i<page*5; i++){
            tableCon.innerHTML = tableCon.innerHTML +  `
            <div class="table_data left">
                <img src="${globalData[i].img}" alt="">
            </div>
            <div class="table_data">${globalData[i].name}</div>
            <div class="table_data">${globalData[i].faculty}</div>
            <div class="table_data">${globalData[i].major}</div>
            <div class="table_data">${globalData[i].year}</div>
            <div class="table_data">${globalData[i].temmiCare}</div>
            <div class="table_data">${globalData[i].date}</div>
            <div class="table_data right">
                <svg onclick='deleted(${i})' width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z" fill="#DA1B20"/>
                </svg>
            </div>
        `
            if(i === globalData.length-1){
                break
            }
        }

        //check prev button is active
        if(page === 1){
            prev.classList.add('passive')
        }
    }
}





function search(e){
    if(e.keyCode === 13){
        const searchEl = document.querySelector('.search input');
        const searchValue = searchEl.value.toUpperCase();
        const newData = [];
        for(let i = 0; i<data.length; i++){
            data[i].upper = data[i].name.toUpperCase();
            if(data[i].upper.includes(searchValue)){
                newData.push(data[i])
            }
        }

        setData(newData)
        globalData = newData;
    }
}

function deleted(i) {
    globalData.splice(i,1);

    localStorage.setItem('data',JSON.stringify(globalData));

    const page_num = document.querySelector('.page_num')
    page_num.textContent = Number(page_num.textContent)-1
    
    const allPages = document.querySelector('.footer span');
    const pages = Math.ceil(globalData.length/5)
    allPages.textContent = pages;
    next();

    if(page_num.textContent == 1) {
        prevButton.classList.add("passive");
    }
}