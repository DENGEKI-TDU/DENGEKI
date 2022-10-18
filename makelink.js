function makelink(){
    if(document.formname.a003.value=="y"){
        let text = document.getElementById('lin').innerHTML; 
        /*document.getElementById('link').innerHTML = '<a href="'+document.formname.a001.value+'">'+document.formname.a002.value+'</a><br>';*/
        document.getElementById('link').innerHTML = 'aaa';
    }
    else if(document.formname.a003.value=="n"){
        let text = document.getElementById('link').innerHTML; 
        /*document.getElementById('link').innerHTML = '<a href="'+document.formname.a001.value+'">'+document.formname.a002.value+'</a>';*/
        document.getElementById('link').innerHTML = 'aaa';
    }
}