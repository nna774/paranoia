$(function(){
    var regs = [];
    regs[0] = new RegExp(".*\.wikipedia\.org$");
    regs[1] = new RegExp(".*\.youtube\.com$");
    regs[2] = new RegExp("^ideone\.com$");
    regs[3] = new RegExp("^www\.flickr\.com$");
    
    var flg = false;
    
    for(var i = 0; i < regs.length; ++i ){
        if(location.hostname.match(regs[i])) {
            flg = true;
            break;
        }
    }
    
    if (flg){
        location.protocol = "https";
    }
});
