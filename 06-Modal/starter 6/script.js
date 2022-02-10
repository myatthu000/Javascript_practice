'use strict';


const modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".close-modal");


let btnOpenModal = document.querySelectorAll(".show-modal");

function closeModal() { 
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 }

 
function addModal() { 
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
 }


for(let i = 0; btnOpenModal.length>i;i++){
    btnOpenModal[i].addEventListener("click",addModal)
}

btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);

document.addEventListener("keydown",function (e) { 
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
}
)