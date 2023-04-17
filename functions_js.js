function printResponse(items){
	let table = "<table style='border: 1px solid'>";
	for(let i = 0; i < items.length; i++){
		table += "<tr>"

		table += "<td>" + items[i].id_costume + "</td>";
		table += "<td>" + items[i].name + "</td>";
		table += "<td>" + items[i].id_category + "</td>";
		table += "<td>" + items[i].brand + "</td>";
		table += "<td>" + items[i].year + "</td>";

		table += "</tr>"
	}
	table += "</table>"
	$("#result").append(table);
}

function getCostumes(){
	$.ajax({
		url: "https://g05efb35d3eef7e-customesdb.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costume",
		type: "GET",
		datatype: "JSON",
		success: function(response){
			printResponse(response.items);
		},
		error: function(xhr, status){
			alert("Estamos presentando problemas en la plataforma. Intente de nuevo mas tarde.");
			console.log(status)
			console.log(xhr)
		}
	});
}

function saveCostume(){

}