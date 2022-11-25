let title01 = '最近のでんげき'
let year01 = '2022'
let month01 = '11'
let day1 = '25'
let writer01 = 'ベレト'
let tag01 = 'きつねの日常'

let t01 = document.getElementById('No01').innerHTML;
document.getElementById('No01').innerHTML = '<a href="https://dengeki-tdu.github.io/DENGEKI/article/fox/'+year01+'/'+month01+'/'+month01+day1+'.html" target="_parent"><h1>'+title01+'</h1></a>';
let t01_1 = document.getElementById('No01-1').innerHTML;
document.getElementById('No01-1').innerHTML = '<a href="https://dengeki-tdu.github.io/DENGEKI/article/fox/'+year01+'/'+month01+'/'+month01+day1+'.html" target="_parent"><h1>'+title01+'</h1></a>';
let y01 = document.getElementById('year1').innerHTML;
document.getElementById('year1').innerHTML = '<a href="https://dengeki-tdu.github.io/DENGEKI/article/fox/'+year01+'/'+year01+'.html" target="_parent">'+year01+'</a>';
let m01 = document.getElementById('month1').innerHTML;
document.getElementById('month1').innerHTML = '<a href="https://dengeki-tdu.github.io/DENGEKI/article/fox/'+year01+'/'+month01+'/'+month01+'.html" target="_parent">'+month01+'</a>';
let d01 = document.getElementById('day1').innerHTML;
document.getElementById('day1').innerHTML = day1;
let w01 = document.getElementById('writer1').innerHTML;
document.getElementById('writer1').innerHTML = '<a href="https://dengeki-tdu.github.io/DENGEKI/article/fox/writer/'+writersearch(writer01)+'/home.html" target="_parent">'+writer01+'</a>';
let ta01 = document.getElementById('tag1').innerHTML;
document.getElementById('tag1').innerHTML = '<a href="https://dengeki-tdu.github.io/DENGEKI/article/fox/tag/'+tagsearch(tag01)+'/'+tagsearch(tag01)+'.html" target="_parent">'+tag01+'</a>';

function writersearch(x){
    switch(x){
        case 'ｲﾑﾙﾀ':
            x='imu';
            break;
        case 'ると':
            x='root';
            break;
        case 'レイ':
            x='ray';
            break;
        case 'トリキ':
            x='toriki';
            break;
        case 'りつ':
            x='ritsu';
            break
        case 'ロマ':
            x='roma';
            break;
        case 'ベレト':
            x='beleth';
            break;
        case 'そら':
            x='sora';
            break;
        case 'プルフ':
            x='proof'
            break;
        case 'フロート':
            x='float';
            break;
    }
    return x;
}

function tagsearch(y){
    switch(y){
        case 'きつねの日常':
            y='nichijou'
            break;
        case 'きつねからのお知らせ':
            y='news'
            break;
        case 'きつねの思い出':
            y='memory'
            break;
        case '突撃！今日のでんげき！':
            y='totsugeki'
            break;
    }
    return y;
}
