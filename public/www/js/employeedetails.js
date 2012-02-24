$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	
	$.getJSON('int-rails.heroku.com/interviews/'+id+".json", displayEmployee);
});

function displayEmployee(data) {
	var employee = data;
	console.log(employee);
	$('#fullName').text(employee.interview.resource_name);
	$('#employeeTitle').text(employee.interview.email);
	$('#city').text(employee.interview.for_location);
	console.log(employee.interview.contact_number);
	if (employee.interview.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.interview.email + '"><h3>Email</h3>' +
				'<p>' + employee.interview.email + '</p></a></li>');
	}
	if (employee.interview.contact_number) {
		$('#actionList').append('<li><a href="tel:' + employee.interview.contact_number + '"><h3>Call Office</h3>' +
				'<p>' + employee.interview.contact_number + '</p></a></li>');
	}

//	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
