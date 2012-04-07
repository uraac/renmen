// javascript:
(function(global){
    if(!typeof jQuery){
        // load
        var stag = document.createElement("script");
        stag.scr = "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
        global.document.appendChild(stag);
    }

})(this);
