//Created an 'Object' Show that has a day, starthours, startMinutes and the (band)name
//To String formats so that the hours/minutes are properly shown
function Show(day, startHours, startMinutes, name){
	this.startHours = startHours;
	this.startMinutes = startMinutes;
	this.name = name;
	this.day = day;
	
	
	 this.toString= function() {
	 	var minutes = startMinutes+'';
	 	if(minutes.length == 1){
	 		minutes = minutes+'0';
	 	}
	 	var hours = startHours+'';
	 	if(hours.length == 1){
	 		hours = '0'+hours;
	 	}
        return hours+'.'+minutes+': '+ name;
    };
}


//you can add or remove stages as you need
var mainStage = new Array();
var djStage = new Array();


//UPDATE TO ACTUAL HOURS AND DAY
//Add in chronological order 
mainStage[0] = new Show(29, 15, 15, "The First Band");
mainStage[1] = new Show(29, 16, 0, "The Second Band");
mainStage[2] = new Show(29, 24, 0, "The Third Band");
mainStage[3] = new Show(30, 0, 9, "The Fourth Band");
mainStage[4] = new Show(30, 0, 10, "The Fith Band");
mainStage[5] = new Show(30, 0, 11, "The Sixt Band");
mainStage[6] = new Show(30, 0, 12, "The Seventh Band");

djStage[0] = new Show(29, 15, 0, "First DJ");
djStage[1] = new Show (29, 15, 30, "Second DJ");
djStage[1] = new Show (29, 16, 0, "Third DJ");

function updateFooter(){

	//get the current date and time
	var date = new Date();
	var days = date.getDate();
	var hours = date.getHours();
	var minutes = date.getMinutes(); 
	var nextDJStage = "";
	var nextMainstage = "";
	var next = "";
	
	//set next for mainstage
	for (var i = 0; i < mainStage.length; i++){
		if(days == mainStage[i].day && (hours < mainStage[i].startHours  || (hours == mainStage[i].startHours  && minutes < mainStage[i].startMinutes))){
			console.log("setting next" + mainStage[i].toString());
			nextMainstage = mainStage[i].toString();
			i = mainStage.length;
		}
	}
	
	//set next for djstage 
	for (var i = 0; i < djStage.length; i++){
		if(days == djStage[i].day && (hours < djStage[i].startHours  || (hours == djStage[i].startHours  && minutes < djStage[i].startMinutes))){
			console.log("setting next" + djStage[i].toString());
			nextDJStage = djStage[i].toString();
			i = djStage.length;
		}
	}
	
	if (nextDJStage.length > 0){
		next = "DJ Stage - " + nextDJStage ;
	}
	if (nextMainstage.length > 0){
		next = next + "<br/>Main Stage - " + nextMainstage;
	}

	$(".next_up").html(next);

}