$(document).ready(()=>{
	$('.some').click(function(){
		$('#input').val($('#input').val()+$(this).val());
	})
	$('.som').click(()=>{
		 $('#input').val(myFunction());
	})
})
myFunction=()=>{
let result=eval($('#input').val());
return result;
}