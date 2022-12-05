let axtaris = document.querySelector('#axtaris');
let search=document.querySelector('#search')
let close=document.querySelector('#close')
let dil=document.querySelector('#dil')
let language=document.querySelector('#language')


axtaris.addEventListener('click',()=>{

     search.classList.toggle('active')
})

close.addEventListener('click',()=>{

    search.classList.remove('active')
})

dil.addEventListener('click',()=>{
    language.classList.toggle('active')
    if(dil.style.transform='rotate(0deg)'){
        dil.style.transform='rotate(180deg)'
    }
    else if( dil.style.transform='rotate(180deg)'){
        dil.style.transform='rotate(0deg)'
    }
})
