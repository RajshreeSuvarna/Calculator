

const display=document.querySelector('.value');
const buttons=document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick=()=>{    //js code to execute when we click on the buttons
        try {
            if(item.dataset.button==='C')  //performs if we click the clear button
                {
                    display.value='';
                }   
                else if(item.dataset.button==='CE'){ //performs when we click on the CE(delete) button
                         let string=display.value;
                         display.value = string.substr(0 , string.length -1);
                }else if(item.dataset.button==='e'){ //performs when we click on the Equal button
                    if(display.value !== ''){
                        display.value = eval(display.value);
                    }
           }
                else
                {
                    display.value+=item.dataset.button;
                }  
        }catch(err){ //To display errors
            display.value = 'Invalid Entry';
            setTimeout(()=>(display.value = ''),1500) 
        } 
    }
  }
) 


