
const bars=document.querySelector('.bars');
bars.addEventListener('click',()=>{
    const nav=document.querySelector('.nav-links');
    nav.classList.toggle('active-nav');
})


const selectButtons=document.querySelectorAll('.selectbtn');
const contents=document.querySelectorAll(".content");

contents[0].style.display= 'flex';
selectButtons[0].focus();

selectButtons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        contents.forEach((ctx,ctxIndex)=>{
         if(index===ctxIndex){
            ctx.style.display= 'flex';
            button.focus();
         }else{
            ctx.style.display='none';
         }
        })
    })
})

