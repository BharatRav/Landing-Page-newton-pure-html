
const selectableButtons=document.querySelectorAll('.selectbtn');
const selectedCurrentContents=document.querySelectorAll(".content");
const bars=document.querySelector('.bars');



bars.addEventListener('click',()=>{
    const navLinks=document.querySelector('.nav-links');
    navLinks.classList.toggle('active-nav');
})

selectedCurrentContents[0].style.display= 'flex';
selectableButtons[0].focus();

selectableButtons.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        selectedCurrentContents.forEach((sccs,sccsIndex)=>{
         if(index===sccsIndex){
            sccs.style.display= 'flex';
            button.focus();
         }else{
            sccs.style.display='none';
         }
        })
    })
})

