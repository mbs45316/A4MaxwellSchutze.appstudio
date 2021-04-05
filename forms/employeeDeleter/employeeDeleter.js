rbtnDelete.onchange = function() {
        
            let userChoice = $("input[name=rbtnDelete]:checked").prop("value")
            let found = false

            query = "SELECT name FROM customer"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

            if (req.status == 200)
                results = JSON.parse(req.responseText)

            for (i = 0; i < results.length; i++) {
                if (userChoice == results[i]) {
                    found = true
                    break
                }
            }
            console.log(found)
            if (found == false)
                lblMessage2.value = "That pet name is not in the database."
            else {
                query = `DELETE FROM customer WHERE name = '${userChoice}'`
                console.log(query)
                req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

                if (req.status == 200) //transit worked.
                    if (req.responseText == 500)
                        lblMessage2.textContent = `You have successfully deleted the employee named ${userChoice}`
                    else
                        lblMessage2.textContent = `There was a problem deleting ${userChoice} from the database.`
                else
                    lblMessage2.textContent = `Error: ${req.status}`
            }
}

btnDisplay.onclick = function() {
    rbtnDelete.clear()
    lblMessage2.value = ''
    rbtnDelete.items = ''
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblMessage2.value = "There are no employees in the database."
        else {
            for (i = 0; i < results.length; i++)
                rbtnDelete.addItem(results[i])
        }

    } 
    else // the transit didn't work - bad wifi? server turned off?
        lblMessage2.value = "Error code: " + req.status
}