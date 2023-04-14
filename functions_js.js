function getCostumes(){
	$.ajax({
		url: "https://g05efb35d3eef7e-customesdb.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costume",
		type: "GET",
		datatype: "JSON",
		success: function(response){
			console.log(response);
		},
		error: function(){
			alert("Estamos presentando problemas en la plataforma. Intente de nuevo mas tarde.");
		}
	});
}