const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');

const imageList = ['captain_america','iron_man','loki','spiderman','thor'];
let index = 0;

setInterval(increaseIndex,2500);

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('btn-left')) {
            index--;
            if(index<0) {
                index = imageList.length-1;
            }
            container.style.background = `url(image/${imageList[index]}.jpg) center/cover no-repeat`;
        }else {
            index++;
            if(index === imageList.length) {
                index = 0;
            }
            container.style.background = `url(image/${imageList[index]}.jpg) center/cover no-repeat`;
        }
    });
});

function increaseIndex() {
    index++;
    if (index === imageList.length) {
        index = 0;
    }
    container.style.background = `url(image/${imageList[index]}.jpg) center/cover no-repeat`;
}

