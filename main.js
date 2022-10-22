joan=prompt("Hey Baby, Enter Your Name ")

function boddy(){
    if (joan=="Aurora"){
        document.getElementById("abc").style.display="block"
        alert("Welcome My one and only girlfriend, Please notice all the javascript i used(crying emoji), it wasnt easy. I sha used like 3 nights to do it and test it to be sure i didnt make mistakes")
    }
    else{
        document.write("invalid girlfriend😂😂...... Reload to try again")
        return false
    }
}
function holly(){
    document.getElementById("holla").innerHTML=joan
}
function bg(){
    document.getElementById("bg").style.backgroundImage="url(bg1.jpg)"

}
function bh(){
    document.getElementById("bg").style.backgroundImage="url(bg2.jpg)"

}
function bj(){
    document.getElementById("bg").style.backgroundImage="url(bg3.jpg)"

}
function bk(){
    document.getElementById("bg").style.backgroundImage="url(bg4.jpg)"

}
function bo(){
    document.getElementById("bg").style.backgroundImage="url()"

}
function gallery(){
    document.getElementById("display").style.display="block"
    document.getElementById("bg").style.backgroundImage="url()"
    document.getElementById("video").style.display="none"
    document.getElementById("homepage").style.display="none"
    document.getElementById("important").style.display="none"
}
function videos(){
    document.getElementById("video").style.display="block"
    document.getElementById("bg").style.backgroundImage="url()"
    document.getElementById("display").style.display="none"
    document.getElementById("homepage").style.display="none"
    document.getElementById("important").style.display="none"
}
function home(){
    document.getElementById("display").style.display="none"
    document.getElementById("bg").style.backgroundImage="url()"
    document.getElementById("video").style.display="none"
    document.getElementById("homepage").style.display="block"
    document.getElementById("important").style.display="none"
}
function impo(){
    document.getElementById("display").style.display="none"
    document.getElementById("bg").style.backgroundImage="url()"
    document.getElementById("video").style.display="none"
    document.getElementById("homepage").style.display="none"
    document.getElementById("important").style.display="block"
}

function preview(pic){
    document.getElementById("pars").style.backgroundImage= "url("+pic.src+")"
    document.getElementById("pars").innerHTML = pic.alt;
}
function undo(){
    document.getElementById("pars").style.backgroundImage = "url("+ +")";
    document.getElementById("pars").innerHTML = "LG-Life's Good" ;
}

