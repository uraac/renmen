// javascript:
(function(global){
    var displayToolArea = function(){
        global.alert("hoge");
    }
    if(typeof jQuery === "undefined"){
        // load
        var stag = global.document.createElement("script");
        stag.type = "text/javascript";
        stag.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
        global.document.body.appendChild(stag);
        stag.onload = displayToolArea;
    } else {
        displayToolArea();
    }


})(this);
