function MyCopy(id) {
    var copyText = document.getElementById(id);
    copyText.select();
    document.execCommand("copy");

}

window.MyCopy = MyCopy;