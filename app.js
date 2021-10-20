var buttons = document.getElementsByClassName('button');
var display =document.getElementById('input');
display.innerText+=0;
var count = 0;
display.addEventListener('mouseover' , function(){
    display.style.outline ="blue";
});
display.addEventListener('pointerout' , function(){
    display.innerText+="";
})

for(var i = 0 ;buttons.length ; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');  // ask
        if(value == '+'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value == '='){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                var result = eval(display.textContent);
                display.innerText =result;
            }
        }else if(value == '-'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value == '*'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value == '/'){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value =="%"){
            if(display.textContent ==""){
                display.innerText +="Invalid Input !!"
            }else{
                display.innerText+=value;
            }
        }else if(value =='Ac'){
            display.innerText="";
        }else if(value =="+/-"){
            count++;
            if(count ==1){
                display.innerText+="+";
            }else{
                display.innerText+="-";
                count =0;
            }
            
        }else{
            display.innerText+=value;
        }    
    });
}