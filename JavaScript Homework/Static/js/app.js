// from data.js
var tableData = data;
var inputElement = "";
//YOUR CODE HERE

function myFunction(item) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");

    if (inputDate === item.datetime || inputDate =="") {
        if (inputCity === item.city || inputCity =="") {
            if (inputState === item.state || inputState =="") {
                if (inputCountry === item.country || inputCountry =="") {
                    if (inputShape === item.shape || inputShape =="") {
                        row.append('td').text(item.datetime);
                        row.append('td').text(item.city);
                        row.append('td').text(item.state);
                        row.append('td').text(item.country);
                        row.append('td').text(item.shape);
                        row.append('td').text(item.durationMinutes);
                        row.append('td').text(item.comments);
                    }
                }
            }
        }
    }

}

