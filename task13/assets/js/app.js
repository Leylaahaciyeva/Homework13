let start =document.getElementById('start')
let margin=2;
let end=document.getElementById('end')
document.body.onkeyup=function(e){

    if(e.keyCode===40){

        margin+=2;

        start.style.marginTop =`${margin}rem`
    }
    else if(e.keyCode===39){
        
        margin+=2

        start.style.marginLeft=`${margin}rem`

    }
}
function End(){
    
    start.style.top='50%'

     end.style.backgroundColor='green';
    
}
End()
