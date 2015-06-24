// In the forked repo, go find some code that you did NOT work on.
// Add some comments that describe what that piece of code is doing. 
// Do this for the whole file.

// Jquery waitting for the document be ready to run
$(function(){
	
	// event listner waitting for user to click submit
	$("#new_drink").submit(function(event){
		// preventing the default auto resoponse inhareted 
		event.preventDefault();
		
		// the next three lines are getting the values fromt he input boxes and outting them in var's 
		var drink_name = $("#drink_name").val();

		var directions = $("#drink_directions").val();

		var picture = $("#drink_picture").val();

		drinkCreation(drink_name, directions, picture);

	});

	// declaring a function drinkCreation and passing arguments 
	function drinkCreation(drink_name, directions, picture){
		// using jquery to call an ajax method
		$.ajax({
			// type of request post to page
			type: "post",
			// post to /drinks page
			url: "/drinks",
			// data type jason
			dataType: "JSON",
			// the content of the data posted
			data: {
				drink: {
					name: drink_name,
					directions: directions,
					picture: picture
				}
			},
			
			// declaring an anonymous function
			success: function(data, textStatus, jqXHR){
				// return this data in such form 
				var html = "<li>"+drink_name+"</li>"+"<li>"+directions+"</li>"+"<li>"+picture+"</li>";
				// prepend the var html to the result area
				$("#results").prepend(html);

			},
			// if any error happends display an error depending on the type of the error
			error: function(jqXHR, textStatus, errorThrown){
				alert("ERROR");
			}

		});
	}
});

