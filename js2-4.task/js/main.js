function Click(){
    var groupName='';
    groupName=document.getElementById('input').value;
    var span=document.getElementById('span');
    var num=groupName.charAt(1);
    if(num==='1'){
        span.style.color='yellow';
    }
    if(num==='2'){
        span.style.color='red';
    }
    if(num=='3'){
        span.style.color='black';
    }
    span.innerHTML=groupName;
}
