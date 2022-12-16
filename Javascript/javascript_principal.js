
let count=1;
document.getElementById('slide1').checked = true;

setInterval(function(){
    nextImage();
},4000)


function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

    document.getElementById('slide'+count).checked =true;
}




const mudartema = document.querySelector('#mudar_tema')



    //Não altere o nome 'change'
    //toggle = alterna

    //Toggle dark mode

function toggleDarkMode(){
    document.body.classList.toggle('light')
}

    //Load light or dark mode

    function CarregarTema(){
        const darkmode =localStorage.getItem('light')
        if(darkmode){
            toggleDarkMode()
        }
    }

CarregarTema()



mudartema.addEventListener('change',function(){
    toggleDarkMode()
    //Save or remove Dark mode
    localStorage.removeItem('light')

    if(document.body.classList.contains('light')){
        localStorage.setItem('light',1)
    }
})
    


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type ==='touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    //toggle significa "adicione caso não tenha" "remove caso não tenha"
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);