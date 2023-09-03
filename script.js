let checkboxes=document.querySelectorAll('input[type="checkbox"]');
let ischecked=false;
let lastCheck;

function handleClick(e){
    if(e.shiftKey===true && this.checked){//we are writing this.checked because to ensure that user is checking the checkbox
        checkboxes.forEach(checkbox=>{
            if(checkbox===lastCheck || checkbox===this){
                ischecked=!ischecked;
            }
            if(ischecked)
            checkbox.checked=true;
        })
    }
    lastCheck=this;
}


checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('click',handleClick);
})