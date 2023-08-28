num = Math.floor(Math.random() *100) + 1;

let content = document.getElementById("404");

if(num >=1 && num<=49){
    content.innerHTML = '<h1>404</h1><h3>存在しないページだｺﾝよ～～</h3><p>ホームにはここかメニューから戻れるｺﾝ!!<a href=\"index.html\">HOME</a></p><img src=\"/assets/img/fox1.jpg\"></img>';
}

else if(num >= 50 && num <=98){
    content.innerHTML = '<h1>404</h1><h3>残念ながらこのページは存在しないｺﾝよ～～</h3><p>ホームにはここかメニューから戻れるｺﾝ!!<a href=\"index.html\">HOME</a><br>ごめんね～～</p><img src=\"/assets/img/fox2.jpg\"></img>';
}

else{
    content.innerHTML = '<h1>404</h1><h3>キミはどうやってこのページにたどり着いたｺﾝかな？<br>残念だけどこのページは存在してないｺﾝ。</h3><p>ホームにはここかメニューから戻れるｺﾝ!!<a href=\"index.html\">HOME</a><br>ごめんね～～</p><img src=\"/assets/img/fox2.jpg\"></img>';
}