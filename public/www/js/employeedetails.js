$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON('/interviews/'+id+".json", displayEmployee);
});

function displayEmployee(data) {
	var employee = data;
	console.log(employee);
	$('#fullName').text(employee.interview.resource_name);
	console.log(employee.interview.contact_number);
	
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Recieved From</h3>' +'<p>' + employee.interview.recieved_from + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Location</h3>' +'<p>' + employee.interview.for_location + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Skills</h3>' +'<p>' + employee.interview.skills + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Total Exp</h3>' +'<p>' + employee.interview.total_experience + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Contact No.</h3>' +'<p>' + employee.interview.contact_number + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Reference</h3>' +'<p>' + employee.interview.source + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Status</h3>' +'<p>' + employee.interview.status + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Remarks</h3>' +'<p>' + employee.interview.remarks + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Date of Interview</h3>' +'<p>' + employee.interview.date_of_interview + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Date of Joining</h3>' +'<p>' + employee.interview.date_of_joining + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>First Round</h3>' +'<p>' + employee.interview.first_round + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Second Round</h3>' +'<p>' + employee.interview.second_round + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>MR Round</h3>' +'<p>' + employee.interview.mr_round + '</p></a></li>');}
	if (employee.interview.email) {	$('#actionList').append('<li><h3>Email</h3>' +'<p>' + employee.interview.email + '</p></a></li>');}
	$('#actionList').listview('refresh');
	
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
