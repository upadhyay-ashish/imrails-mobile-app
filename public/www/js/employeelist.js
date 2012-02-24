var serviceURL = "/interviews.json";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL, function(data) {
		$('#employeeList li').remove();
		employees = data;
		$.each(employees, function(key,employee) {
			
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.interview.id + '">' +
					'<h4>' + employee.interview.resource_name + '</h4>' +
					'<span class="ui-li-count">' + employee.interview.status + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
			
	});
}

