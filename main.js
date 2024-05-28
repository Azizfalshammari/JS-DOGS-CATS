let isDogs = false;



const logo = document.querySelector('.logo');
const imgs = document.querySelector('#firstHeroImg');
const imgs2 = document.querySelector('#secondImg');


function renderCats(){
    imgs.style.backgroundImage = 'url(https://www.allfelinehospital.com/sites/site-2284/images/Charlie/IMG_2652.JPG)'
    imgs2.style.backgroundImage = 'url(https://www.omlet.co.uk/images/originals/Cat-Cat_Guide-A_little_girl_holding_a_cat.jpg)'
    document.querySelectorAll('*').forEach(element => {
        element.innerHTML = element.innerHTML.replace('dog', 'cat');
    });
    }

 function renderDog(){

      }  
logo.addEventListener('click', ()=>{
    isDogs = !isDogs;
    if (isDogs){
        renderDog()
    }else 
    renderCats()
});



