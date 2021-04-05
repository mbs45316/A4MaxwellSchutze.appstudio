netID = 'mbs45316'
pw = 'UCTRMX'

drpEmployee.onshow = function() {
    drpEmployee.clear()
    query = "SELECT state FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblMessage1.value = "There are no employees from this state in the database."
        else {
            for (i = 0; i < results.length; i++)
                drpEmployee.addItem(results[i])
        }
    } 
    else // the transit didn't work - bad wifi? server turned off?
        lblMessage1.value = "Error code: " + req.status
}

drpEmployee.onclick = function(s) {
    if (typeof(s) == "object") {
        return
    } 
    else {
        drpEmployee.value = s // make dropdown show choice the user made
        query = `SELECT name FROM customer WHERE state = '${s}'`
        console.log(query)
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

        if (req.status == 200) { //transit trip worked. 
            results = JSON.parse(req.responseText)
            if (results.length == 0)
                lblMessage1.value = "There are no employees from this state in the database."
            else {
                for (i = 0; i < results.length; i++)
                    lstEmployee.addItem(results[i])
            }
        } else // the transit didn't work - bad wifi? server turned off?
            lblMessage1.value = "Error code: " + req.status
    }
}