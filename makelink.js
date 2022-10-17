function makelink(){
    if(document.formname.a003.value=='y'){
        document.getElementById('link').innerHTML = "'<a href='"+document.formname.a001.value+"'>'"+document.formname.a002.value+"'</a><br>'"
    }
    else if(document.formname.a003.value=='n'){
        document.getElementById('link').innerHTML = "'<a href='"+document.formname.a001.value+"'>'"+document.formname.a002.value+"'</a>'"
    }
}