function klik(id) {
    var parent = id.parentElement;
    var grandparent = parent.parentsElement;
    var coba = document.getElementById("Bag")
    parent.parentNode.removeChild(parent);
    coba.appendChild(parent);
    console.log(coba)
}

