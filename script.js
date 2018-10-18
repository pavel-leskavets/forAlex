function DOT(obj, prop) {
	if(typeof obj !== "object" ||  typeof prop !== "string" || typeof obj === null) {
		console.log("Error");
	}
	else {
		return obj[prop]
	}
}
var petrSidorov = {
	name: "petr",
	sex: "male",
	age: 20,
	currentMoney: 77.25,
	listExam: {
			physics: 7,
				geography: 8,
					mathematics: 8
		}
	
}
var vanyaIvanov = {
	name: "vanya",
	sex: "male",
	age: 19,
	currentMoney: 25.89,
	listExam: {
			physics: 6,
				geography: 5,
					mathematics: 5
		}
	
}
	

	var annPetrova = {
	name: "ann",
	sex: "female",
	age: 19,
	currentMoney: 15.89,
		listExam: {
			physics: 9,
				geography: 10,
					mathematics: 9
		}
		
}
	var minAgeForArmy = 18;
  var maxAgeForArmy = 27;
  var GENDER = "male"
	function checkValidForService (obj) {
		
		if (obj.age >= minAgeForArmy && obj.age < maxAgeForArmy && obj.sex === GENDER)			{ 
			console.log(obj.name + " welcomeToHell");
			return true;
			} 
		else if(obj.sex === "female") {
			
			console.log(obj.name + " You are a woman");
			return false;
		}
		else {
			console.log("Who are you");
			return false;
		}
		
	}

	function checkMediumMark(obj) {
	var studentMark =	(obj.listExam.physics + obj.listExam.geography + obj.listExam.mathematics) / 3;
		return studentMark;
	}
var annPetrovaMediumMark = checkMediumMark(annPetrova); 
var vanyaIvanovMediumMark = checkMediumMark(vanyaIvanov);
var petrSidorovMediumMark = checkMediumMark(petrSidorov);
 

function checkToNextCourse(obj) {
	if(checkMediumMark(obj) >= 7) {
		console.log(obj.name + " Congratulations, welcome to next course" );
		var newCurrentMoney = obj.currentMoney + 3.864;
		console.log(obj.name + " Your new current money " + newCurrentMoney.toFixed(2))
	}
	else {
		if(checkValidForService (obj) === true) {
			console.log(obj.name + " Welcome to army");
		}
		else {
			console.log(obj.name + " You are a woman, see you  retake exam");
		}
	}
}
var annPetrovaCheckToNextCourse = checkToNextCourse(annPetrova); 
var vanyaIvanovCheckToNextCourse = checkToNextCourse(vanyaIvanov);
var petrSidorovCheckToNextCourse = checkToNextCourse(petrSidorov);
