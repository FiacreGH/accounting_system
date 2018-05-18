/**
 * Created by fsankara.
 */

$(document).ready( function (event) {

	//datatables implementation
	$('#table_id').DataTable({
		//loading french langage
		"language": {
			"url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
		}
	});

	//deletion confirmation
	$('.delete-confirm').click(function(){
		if (!confirm('Êtes-vous suûr de vouloir supprimer ?')){
		}
		else{
			event.preventDefault();
		}
		return false;
	});
});
