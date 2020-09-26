//この404ファイルはウェブサーバー直下で全ての４０４を受けている。
    //即ち、https://..../gitWeb/404.html
    //宛先であるhtml(svelte)の404(component)に404を飛ばす。
    //クエリを調べ、&html=で始まる情報から、宛先htmlへのパスを取得。
    //例えば、https://..../page1?html=gitWeb/math/index.html&
    var url = location.href ;
    var host = location.hostname ;
    var protocol = location.protocol ;
    var path = location.pathname ;
    var query = location.search ;
    var v404=0
    alert(123)
    for (var i=0;i<path.length;i++){v404+=charCode(path[i]);}
    query=query.replace("?"+v404,"")
    var html=query.split("&html=")[1].split("&")[0]
    if ((query.includes("?"+v404))==false){
      //htmlの前にスラッシュ不要
      //pathの前にスラッシュはついている。
    window.location.href = html + path + query+"?"+v404;    
    }
    else{//４０４の無限ループになってしまうので何もしない
    //x.innerHTML= protocol +"\n" +host+"\n"+path+"\n"+query+"\n"+protocol+"\n"+ "/content" + path + query+"?404";
    }

    export {path,query,v04}