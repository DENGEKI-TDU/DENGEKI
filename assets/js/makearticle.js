function dispText() {
    var text = 
        "<!DOCTYPE html>\n"+
        "<html>\n"+
            "\t<head>\n"+
                "\t\t<meta charset=\"utf-8\">\n"+
                "\t\t<meta http-equiv=\"X-UA-Comatible\"content=\"IE=edge\">\n"+
                "\t\t<!--これはWindowsで開く際に、古い奴だと正しく処理されないため、それを防ぐコード-->\n"+
                "\t\t<meta name=\"viewport\"content=\"width=device-width,user-scalable=yes,initial-scalable=1.0\">\n"+
                "\t\t<link rel = \"stylesheet\" href = \"../../../../assets/css/stylesheet.css\" type=\"text/css\">\n"+
                "\t\t<link rel = \"stylesheet\" href = \"../../../../assets/css/yamada.css\" type = \"text/css\">\n"+
                "\t\t<link rel = \"stylesheet\" href = \"../../../../assets/css/blog.css\" type = \"text/css\">\n"+
                "\t\t<title id=\"head-title\">\n"+
                    "\t\t\tはじめまして！ - きつねのお部屋 - でんげき\n"+
                "\t\t</title>\n"+
                "\t\t<link rel=\"shortcut icon\" href=\"../../../../assets/img/icon.ico\" type=\"image/vnd.microsoft.icon\">\n"+
                "\t\t<link rel=\"apple-touch-icon\" src=\"../../../../assets/img/apple-touch-icon.jpeg\">\n"+
            "\t</head>\n"+
            "\t<body>\n"+
                "\t\t<header>\n"+
                    "\t\t\t<h1 class =\"logo\">\n"+
                        "\t\t\t\t<img src = \"../../../../assets/img/home.jpg\">\n"+
                    "\t\t\t</h1>\n"+
                "\t\t</header>\n"+
                "\t\t<main>\n"+
                    "\t\t\t<iframe class=\"menu\" frameborder=\"0\" width=\"100%\" height=\"auto\" src=\"../../../../assets/menu/mainmenu.html\"></iframe>\n"+
                    "\t\t\t<div class=\"dengeki\">\n"+
                        "\t\t\t\t<iframe class=\"search\" frameborder=\"0\" src=\"../../search.html\"></iframe>\n"+
                        "\t\t\t\t<div class = \"m1\">\n"+
                            "\t\t\t\t\t<div class=\"search-mobile\">\n"+
                                "\t\t\t\t\t\t<details>\n"+
                                    "\t\t\t\t\t\t\t<summary>記事絞り込み</summary>\n"+
                                    "\t\t\t\t\t\t\t<p>最新記事はこちら↓\n"+
                                    "\t\t\t\t\t\t\t</p>\n"+
                                    "\t\t\t\t\t\t\t<span id=\"No01\"><a href=\"../fox/2022/10/1014.html\"  class=\"title\"><h1>はじめまして！</h1></a></span>\n"+
                                    "\t\t\t\t\t\t\t<script src=\"../../assets/js/latest.js\"></script>\n"+
                                    "\t\t\t\t\t\t\t<details class=\"c1\">\n"+
                                        "\t\t\t\t\t\t\t\t<summary>投稿日時で絞り込み</summary>\n"+
                                        "\t\t\t\t\t\t\t\t<details class=\"c2\">\n"+
                                            "\t\t\t\t\t\t\t\t\t<summary>2022年</summary>\n"+
                                                "\t\t\t\t\t\t\t\t\t\t<ul class=\"2022\">\n"+
                                                "\t\t\t\t\t\t\t\t\t\t<li><a href=\"../../2022/2022.html\" target=\"_parent\">2022年全て</a></li>\n"+
                                                "\t\t\t\t\t\t\t\t\t\t<li><a href=\"../../2022/10/10.html\" target=\"_parent\">10月</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t</ul>\n"+
                                        "\t\t\t\t\t\t\t\t</details>\n"+
                                    "\t\t\t\t\t\t\t</details>\n"+
                                    "\t\t\t\t\t\t\t<details class=\"c1\">\n"+
                                        "\t\t\t\t\t\t\t\t<summary>ライターで検索</summary>\n"+
                                        "\t\t\t\t\t\t\t\t<ul class=\"writer\">\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/tsuyu/home.html\" target=\"_parent\">つゆ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/teo/home.html\" target=\"_parent\">テオ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/mano/home.html\" target=\"_parent\">まの</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/aki/home.html\" target=\"_parent\">あきのすけ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/yoru/home.html\" target=\"_parent\">ヨルノ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/imu/imu.html\" target=\"_parent\">ｲﾑﾙﾀ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/root/root.html\" target=\"_parent\">ルト</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/ray/ray.html\" target=\"_parent\">レイ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/toriki/toriki.html\" target=\"_parent\">トリキ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/ritsu/ritsu.html\" target=\"_parent\">りつ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/roma/roma.html\" target=\"_parent\">ロマ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/beleth/beleth.html\" target=\"_parent\">ベレト</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/sora/sora.html\" target=\"_parent\">そら</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/proof/proof.html\" target=\"_parent\">プルフ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../writer/float/float.html\" target=\"_parent\">フロート</a></li>\n"+
                                        "\t\t\t\t\t\t\t\t</ul>\n"+
                                    "\t\t\t\t\t\t\t</details>\n"+
                                    "\t\t\t\t\t\t\t<details class=\"c1\">\n"+
                                        "\t\t\t\t\t\t\t\t<summary>タグで検索</summary>\n"+
                                        "\t\t\t\t\t\t\t\t<ul class=\"tag\">\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../tag/nichijou/nichijou.html\" target=\"_parent\">きつねの日常</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../tag/news/news.html\" target=\"_parent\">きつねからのお知らせ</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../tag/memory/memory.html\" target=\"_parent\">きつねの思い出</a></li>\n"+
                                            "\t\t\t\t\t\t\t\t\t<li><a href=\"../../tag/totsugeki/totsugeki.html\" target=\"_parent\">突撃！今日のでんげき！</a></li>\n"+
                                        "\t\t\t\t\t\t\t\t</ul>\n"+
                                    "\t\t\t\t\t\t\t</details>\n"+
                                "\t\t\t\t\t\t</details>\n"+
                            "\t\t\t\t\t</div>\n"+
                            "\t\t\t\t\t<h1 class=\"title\" id=\"body-title\">\n"+
                                "\t\t\t\t\t\t"+document.formname.a001.value +"\n"+
                            "\t\t\t\t\t</h1>\n"+
                            "\t\t\t\t\t<div class=\"blog-bar\">\n"+
                                "\t\t\t\t\t\t<p><a href=\"../../home.html\">きつねのお部屋</a>><a href=\"../"+document.formname.a002.value+".html\">"+document.formname.a002.value+"年</a>><a href=\""+document.formname.a003.value+".html\">"+document.formname.a003.value+"</a></p>\n"+
                            "\t\t\t\t\t</div>\n"+
                            "\t\t\t\t\t<div class=\"information\">\n"+
                                "\t\t\t\t\t\t<p><a href=\"../"+document.formname.a002.value+".html\">"+document.formname.a002.value+"</a>/<a href=\""+document.formname.a002.value+".html\">"+document.formname.a003.value+"</a>/"+document.formname.a004.value+"<br>\n"+
                                "\t\t\t\t\t\twriter:<a href=\"../../writer/"+document.formname.a005.value+"/home.html\">"+writersearch(document.formname.a005.value)+"</a><br>\n"+
                                "\t\t\t\t\t\ttag:<a href=\"../../tag/"+document.formname.a006.value+"/"+document.formname.a006.value+".html\">"+tagsearch(document.formname.a006.value)+"</a></p>\n"+
                            "\t\t\t\t\t</div>\n"+
                            "\t\t\t\t\t<p class=\"blog-honbun\">\n"+
                                document.formname.a007.value+
                            "\t\t\t\t\t</p>\n"+
                            "\t\t\t\t\t<div class =\"t1-mobile\">\n"+
                                "\t\t\t\t\t\t<div class = \"twitter\">\n"+
                                    "\t\t\t\t\t\t\t<div class=\"dengeki\">\n"+
                                        "\t\t\t\t\t\t\t\t<a class=\"twitter-timeline\" height=\"900\" href=\"https://twitter.com/TDUdramaclub?ref_src=twsrc%5Etfw\">\n"+
                                            "\t\t\t\t\t\t\t\t\tTweets by TDUdramaclub\n"+
                                        "\t\t\t\t\t\t\t\t</a> \n"+
                                        "\t\t\t\t\t\t\t\t<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\">\n"+
                                        "\t\t\t\t\t\t\t\t</script>\n"+
                                    "\t\t\t\t\t\t\t</div>\n"+
                                "\t\t\t\t\t\t</div>\n"+
                            "\t\t\t\t\t</div>\n"+
                        "\t\t\t\t</div>\n"+
                        "\t\t\t\t<div class =\"t1\">\n"+
                            "\t\t\t\t\t<div class = \"twitter\">\n"+
                                "\t\t\t\t\t\t<div class=\"dengeki\">\n"+
                                    "\t\t\t\t\t\t\t<a class=\"twitter-timeline\" height=\"900\" href=\"https://twitter.com/TDUdramaclub?ref_src=twsrc%5Etfw\">\n"+
                                        "\t\t\t\t\t\t\t\tTweets by TDUdramaclub\n"+
                                    "\t\t\t\t\t\t\t</a>\n"+ 
                                    "\t\t\t\t\t\t\t<script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n"+
                                "\t\t\t\t\t\t</div>\n"+
                            "\t\t\t\t\t</div>\n"+
                        "\t\t\t\t</div>\n"+
                    "\t\t\t</div>\n"+
                "\t\t</main>\n"+
            "\t</body>\n"+
            "\t<footer class = \"footer\">\n"+
                "\t\t<p class = \"copy\">\n"+
                    "\t\t\t<small>\n"+
                        "\t\t\t\t&copy;2代目みんなの便利屋 ベレト工務店\n"+
                    "\t\t\t</small>\n"+
                "\t\t</p>\n"+
            "\t</footer>\n"+
            "\t<script src=\"../../../../assets/js/blog.js\"></script>\n"+
        "</html>"
    var blob = new Blob([text], { "type": "text/plain" });

    const a = document.createElement('a');
    a.href = 'data:text/plain,' + encodeURIComponent(text);
    a.download = document.formname.a003.value+document.formname.a004.value+'.html';

    a.style.display = 'none';
    document.body.appendChild(a); // ※ DOM が構築されてからでないとエラーになる
    a.click();
    document.body.removeChild(a);

    
    let t02 = document.formname.a002.value
    let t03 = document.formname.a003.value
    document.getElementById('fileupload').innerHTML = '<a href="https://github.com/DENGEKI-TDU/DENGEKI/tree/main/article/fox/'+t02+'/'+t03+'">ダウンロードされたファイルをここにアップロードしてください</a>';
}

function writersearch(x){
    switch(x){
        case 'tsuyu':
            x='つゆ';
            break;
        case 'teo':
            x='テオ';
            break;
        case 'mano':
            x='まの';
            break;
        case 'aki':
            x='あきのすけ';
            break;
        case 'yoru':
            x='ヨルノ';
            break;
        case 'imu':
            x='ｲﾑﾙﾀ';
            break;
        case 'root':
            x='ると';
            break;
        case 'ray':
            x='レイ';
            break;
        case 'toriki':
            x='トリキ';
            break;
        case 'ritsu':
            x='りつ';
            break
        case 'roma':
            x='ロマ';
            break;
        case 'beleth':
            x='ベレト';
            break;
        case 'sora':
            x='そら';
            break;
        case 'proof':
            x='プルフ'
            break;
        case 'float':
            x='フロート';
            break;
    }
    return x;
}

function tagsearch(y){
    switch(y){
        case 'nichijou':
            y='きつねの日常'
            break;
        case 'news':
            y='きつねからのお知らせ'
            break;
        case 'memory':
            y='きつねの思い出'
            break;
        case 'totsugeki':
            y='突撃！今日のでんげき！'
            break;
    }
    return y;
}