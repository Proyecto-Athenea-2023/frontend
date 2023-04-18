function printResponse(items){
	let table = "<table style='border: 1px solid'>";
	for(let i = 0; i < items.length; i++){
		table += "<tr>"

		table += "<td>" + items[i].id_costume + "</td>";
		table += "<td>" + items[i].name + "</td>";
		table += "<td>" + items[i].id_category + "</td>";
		table += "<td>" + items[i].brand + "</td>";
		table += "<td>" + items[i].year + "</td>";
		table += "<td><button onclick='deleteCostume(" + items[i].id_costume + ")'>Eliminar</button></td>";

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
			$("#result").empty();
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
	let data = {
		id: $("#costume_id").val(),
		name: $("#costume_name").val(),
		brand: $("#costume_brand").val(),
		model: $("#costume_year").val(),
		category: $("#costume_category").val()
	}
	
	data = JSON.stringify(data);
	$.ajax({
		url: "https://g05efb35d3eef7e-customesdb.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costume",
		type: "POST",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El disfraz se ha guardado correctamente.");
			$("#costume_id").val("");
			$("#costume_name").val("");
			$("#costume_brand").val("");
			$("#costume_year").val("");
			$("#costume_category").val("");

			getCostumes();
		},
		error: function(xhr, status){
			alert("Hubo un problema agregando el nuevo disfraz. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function updateCostume(){
	let data = {
		id: $("#costume_id").val(),
		name: $("#costume_name").val(),
		description: "Actualizado"
	}
	
	data = JSON.stringify(data);
	$.ajax({
		url: "https://g05efb35d3eef7e-customesdb.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costume",
		type: "PUT",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El disfraz se ha actualizado correctamente.");
			$("#costume_id").val("");
			$("#costume_name").val("");
			$("#costume_brand").val("");
			$("#costume_year").val("");
			$("#costume_category").val("");

			getCostumes();
		},
		error: function(xhr, status){
			alert("Hubo un problema actualizando el nuevo disfraz. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function deleteCostume(costume_id){
	$.ajax({
		url: "https://g05efb35d3eef7e-customesdb.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/costume?id="+costume_id,
		type: "DELETE", 
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El disfraz se ha eliminado correctamente.");
		
			getCostumes();
		},
		error: function(xhr, status){
			alert("Hubo un problema eliminando el nuevo disfraz. Intente de nuevo mas tarde.");
			console.log(xhr)
		}		
	});
}