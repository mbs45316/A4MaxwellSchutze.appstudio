drpFavs.onshow = function() {
    drpFavs.clear()
    for (i = 0; i < favNames.length; i++)
        drpFavs.addItem(favNames[i])
}

drpFavs.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } 
    else {
        drpFavs.value = s // make dropdown show choice the user made
        lblMessage4.value = `Your favorite baby name is ${s}.`
        imgRandom.show()
    } 
}
}
