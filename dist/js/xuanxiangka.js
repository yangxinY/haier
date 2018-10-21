function $(selector){
    var all = document.querySelectorAll(selector);
    if(all.length > 1) return all;
    return !all[0] ? null : all[0];
}
var details=$("#box").children;
var buttons=$("#btn span");
//绑定事件；
for(var i=0;i<buttons.length;i++){
buttons[i].index=i;
buttons[i].onmouseover=function(){
for(var i = 0 ; i < buttons.length ; i ++){
buttons[i].className="";
details[i].className="";
}
this.className="active";
var index=this.index;
details[index].className="active";
}
}