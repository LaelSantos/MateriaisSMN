function writeCookie(name, value, days) {
    // Por default não existe experação, ou seja o cookei é temporário

    var expires ="";
    // Espicifica o numero de dias para guardar o cookie
    if(days){
        var date = new Data();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }

    if(value != "" && value != null && value != "null"){
        document.cookie = name + "=" + value + expires + "; path=/";
    }

}

function readCookie(name){
    // Encontra o cookie especificado e retorna o seu valor
    var searchName = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
        var c = cookies[i];
        while (c.charAt == ' ')
            c = c.substring(1, c.length);
        if(c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
        return null    
    
}

function eraseCookie(name){
    //exclui o cookie
    writeCookie(name, "",-1);
}