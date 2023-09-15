document.querySelector('.show-certif').addEventListener('click',()=>{
    let delHidden=document.querySelector('.certificates_container_main_content');
   delHidden.style.overflow='auto';
   delHidden.style.maxHeight='1500px';
   document.querySelector('.sticky').style.display='block';
   document.querySelector('.show-certif').style.display='none';


})
document.querySelector('.sticky').addEventListener('click',()=>{
    let delHidden=document.querySelector('.certificates_container_main_content');
   delHidden.style.overflow='hidden';
   delHidden.style.maxHeight='150px';
   document.querySelector('.sticky').style.display='none';
   document.querySelector('.show-certif').style.display='block';

})