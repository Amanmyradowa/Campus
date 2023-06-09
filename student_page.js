const data = [
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '24.09.2023',
        sebabi: 'Nyzama gija galmak',
        temmiCharesi: 'Berk kayinc',
        asylNusgasy: 'berk kayinc.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Duydurus',
        asylNusgasy: 'duydurus.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Nyzama gija galmak',
        temmiCharesi: 'Berk kayinc',
        asylNusgasy: 'berk kayinc.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Nyzama gija galmak',
        temmiCharesi: 'Berk kayinc',
        asylNusgasy: 'berk kayinc.png'
    },
    {       
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Nyzama gija galmak',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    },
    {        
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Kayinc',
        asylNusgasy: 'kayinc.png'
    },
    {
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    },
    {
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    },
    {
        name: 'Dowran Dowranow Dowranowic',
        date: '13.12.2023',
        sebabi: 'Telefon',
        temmiCharesi: 'Dusundiris',
        asylNusgasy: 'dusunsiris.png'
    }
]



const allPages = document.querySelector(".footer_main span");
let pageNum = document.querySelector('.page_num');
const pages = Math.ceil(data.length / 10);
allPages.textContent = pages;
const currentPage = Number(pageNum.textContent);
let next_button = document.querySelectorAll(".transfer_icon")[1];
let prev_button = document.querySelectorAll(".transfer_icon")[0];

let tableCon = document.querySelector('.table_container');

if(data.length <= 10) {
    next_button.classList.add("passive");
}
if(data.length){
    for(let i=0; i<10; i++) {
        let id = (currentPage - 1) * 10 + 1 + i;

        if(data[i].temmiCharesi === 'Berk kayinc'){
            tableCon.innerHTML = tableCon.innerHTML + `
    
                <div class="table_data left">${id}</div>
                <div class="table_data">${data[i].name}</div>
                <div class="table_data">${data[i].date}</div>
                <div class="table_data">${data[i].sebabi}</div>
                <div class="table_data red">${data[i].temmiCharesi}</div>
                <div class="table_data right">${data[i].asylNusgasy}</div>
            `
        }
        else if(data[i].temmiCharesi === 'Duydurus') {
            tableCon.innerHTML = tableCon.innerHTML + `
    
                <div class="table_data left">${id}</div>
                <div class="table_data">${data[i].name}</div>
                <div class="table_data">${data[i].date}</div>
                <div class="table_data">${data[i].sebabi}</div>
                <div class="table_data blue">${data[i].temmiCharesi}</div>
                <div class="table_data right">${data[i].asylNusgasy}</div>
            `
        }
        else if(data[i].temmiCharesi === 'Kayinc') {
            tableCon.innerHTML = tableCon.innerHTML + `
    
                <div class="table_data left">${id}</div>
                <div class="table_data">${data[i].name}</div>
                <div class="table_data">${data[i].date}</div>
                <div class="table_data">${data[i].sebabi}</div>
                <div class="table_data yellow">${data[i].temmiCharesi}</div>
                <div class="table_data right">${data[i].asylNusgasy}</div>
            `
        }
        else{
            tableCon.innerHTML = tableCon.innerHTML + `
    
                <div class="table_data left">${id}</div>
                <div class="table_data">${data[i].name}</div>
                <div class="table_data">${data[i].date}</div>
                <div class="table_data">${data[i].sebabi}</div>
                <div class="table_data green">${data[i].temmiCharesi}</div>
                <div class="table_data right">${data[i].asylNusgasy}</div>
            `
        }
        if(data.length-1 === i){
            break
        }
    }
}



function next() {
    const page_num = document.querySelector('.page_num')
    const tableCon = document.querySelector('.table_container');
    const prev = document.querySelectorAll('.transfers_icons .transfer_icon')[0];
    const next = document.querySelectorAll('.transfers_icons .transfer_icon')[1];
    let page = Number(page_num.textContent)

    
    if(Number(page_num.textContent) * 10 < data.length){
        next.classList.remove('passive')
        
        page+=1;
        if(data.length <= page * 10) {
            next.classList.add("passive");
        }
        if(pageNum.textContent) {
            prev_button.classList.remove("passive");
        }
        page_num.textContent = page;

        tableCon.innerHTML = '';

        tableCon.innerHTML = `
            <div id="border" class="table_head left">#</div>
            <div class="table_head">Ady, Familiyasy we Atasynyn ady</div>
            <div class="table_head">Temmi alan senesi</div>
            <div class="table_head">Sebabi</div>
            <div class="table_head">Temmi caresi</div>
            <div id="border" class="table_head right">Asyl nusgasy</div>
        `
        for(let i = ((page-1)*10); i<page*10; i++){
            let id = i+1;
            if(data[i].temmiCharesi === 'Berk kayinc'){
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data red">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }
            else if(data[i].temmiCharesi === 'Duydurus') {
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data blue">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }
            else if(data[i].temmiCharesi === 'Kayinc') {
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data yellow">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }
            else{
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data green">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }

            if(i === data.length-1){
                break
            }
        }
        if(page === 1){
            prev.classList.add('passive')
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

        tableCon.innerHTML = ''
        //change table data
        tableCon.innerHTML = `
            <div id="border" class="table_head left">#</div>
            <div class="table_head">Ady, Familiyasy we Atasynyn ady</div>
            <div class="table_head">Temmi alan senesi</div>
            <div class="table_head">Sebabi</div>
            <div class="table_head">Temmi caresi</div>
            <div id="border" class="table_head right">Asyl nusgasy</div>
        `
        for(let i = ((page-1)*10); i<page*10; i++){
            let id = i+1;
            if(data[i].temmiCharesi === 'Berk kayinc'){
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data red">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }
            else if(data[i].temmiCharesi === 'Duydurus') {
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data blue">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }
            else if(data[i].temmiCharesi === 'Kayinc') {
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data yellow">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }
            else{
                tableCon.innerHTML = tableCon.innerHTML + `
        
                    <div class="table_data left">${id}</div>
                    <div class="table_data">${data[i].name}</div>
                    <div class="table_data">${data[i].date}</div>
                    <div class="table_data">${data[i].sebabi}</div>
                    <div class="table_data green">${data[i].temmiCharesi}</div>
                    <div class="table_data right">${data[i].asylNusgasy}</div>
                `
            }

            if(i === data.length-1){
                break
            }
        }

        //check prev button is active
        if(page === 1){
            prev.classList.add('passive')
        }
    }
}