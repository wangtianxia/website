/*设置cookie*/
export function setCookie(name,value,time){
    document.cookie = name + '=' + value + ';expires=' + time + ';max-age=' + time + ';';
}

export function getCookie(name){
    var arr = document.cookie.split("; ");
    let value = '';
    for(let i in arr){
        var arr2 = arr[i].split("=");
        if(arr2[0] == name){
            value = arr2[1];
            break;
        }
    }
    return value;
}