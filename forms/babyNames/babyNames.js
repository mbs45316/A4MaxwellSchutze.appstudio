let favNames = []



btnSubmit.onclick=function(){
   if (favNames.length == 5)
        lblMessage3.value = 'You are only allowed 5 favorite names.'
    else
        favNames.push(selNames.text)
    console.log(favNames)
}

btnDone.onclick=function(){
  ChangeForm(favBabyNames)
}
