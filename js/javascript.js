function newElement() {
    let textDOM = document.querySelector('#task').value;
    let liOlustur = document.createElement('li');
    liOlustur.appendChild(document.createTextNode(textDOM));
    if(textDOM === ""){
        livetoastClass = document.getElementById('liveToast')
        livetoastClass.className = "toast success show"
        console.log(livetoastClass.className)
    }
    else if (textDOM === " "){
        livetoastClass = document.getElementById('liveToast')
        livetoastClass.className = "toast success show"
        console.log(livetoastClass.className)
    }
    else{
        document.querySelector("#list").appendChild(liOlustur)
        livetoastClass = document.getElementById('liveToastSuccess')
        livetoastClass.className = "toast success show"
        console.log(livetoastClass.className)
    }
}

function toastCloser() {
    livetoastClass = document.getElementById('liveToast')
    livetoastClass2 = document.getElementById('liveToastSuccess')
    livetoastClass.className = "toast success hide"
    livetoastClass2.className = "toast success hide"
}

function missonComplite(e) {
    e.target.classList.toggle("checked")

}