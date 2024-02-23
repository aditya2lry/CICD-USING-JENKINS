$(document).ready(function() {
	// Add task functionality
	$("#add-task-form").submit(function(event) {
		event.preventDefault();
		var newTask = $("#new-task-input").val();
		if (newTask) {
			$("#task-list").append("<li><span>" + newTask + "</span><button type='button' class='delete-task-button'>Delete</button></li>");
			$("#new-task-input").val("");
		}
	});

	// Delete task functionality
	$(document).on("click", ".delete-task-button", function() {
		$(this).closest("li").remove();
	});
});