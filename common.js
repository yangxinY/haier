function $(selector){
    var all = document.querySelectorAll(selector);
    if(all.length > 1) return all;
    return !all[0] ? null : all[0];
}