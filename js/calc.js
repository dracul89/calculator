

$( document ).ready(function(){

 $( "button" ).click(function(){
 	var number = this.attributes.name.value;
 	var previous = $("#first").val();
 	var lastChar = previous[previous.length-1];
 	if(number == 'c'){
 		$('#first').val("");
 	}else{
	 	if(number == '='){
	 		$('#first').val(previous+number+eval((previous)));
	 	}else if((number == '+'||number == '-' || number == '*' || number == '/' || number == '.') && (lastChar == '+'||lastChar == '-' || lastChar == '*' || lastChar == '/' || lastChar == '.')){
	 		
	 	}else{
		 $('#first').val(previous+number);
		}	
 	}
 	
 });

});