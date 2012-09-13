$(document).ready(function (){
	$("#home").click(function () {
		home();
		return false;
	});
	$("#reset_button").click(function () {
		clearError();
	})
});

function home()
{
	
	$.get('pages/home.tpl', function(response) {
	               console.log(response);
				$("#content").html(response);
            });
}

function clearError()
{
	$("#error").html('');
}