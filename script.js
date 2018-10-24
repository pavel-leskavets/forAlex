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
	listExam: [
		{examStudents: 7},
		{examStudents: 8},
		{examStudents: 8}
		],
	getAverageGrade: petrSidorovMediumMark,
	checkIfValidForArmy: petrSidorovCheckToArmy

}
var vanyaIvanov = {
	name: "vanya",
	sex: "male",
	age: 19,
	currentMoney: 25.89,
	listExam:[ 
	{examStudents: 6},
	{examStudents: 5},
	{examStudents: 5}
		],
	getAverageGrade: vanyaIvanovMediumMark,
	checkIfValidForArmy: vanyaIvanovCheckToArmy
}
	var annPetrova = {
	name: "ann",
	sex: "female",
	age: 19,
	currentMoney: 15.89,
		listExam: [
			{examStudents: 9},
			 {examStudents: 10},
			 {examStudents: 9}
		],
	getAverageGrade: annPetrovaMediumMark,
	checkIfValidForArmy: annPetrovaCheckToArmy
		
}
	var firstGradeStudents = [];
firstGradeStudents.push(annPetrova, petrSidorov, vanyaIvanov);
console.log(firstGradeStudents);
	var minAgeForArmy = 18;
  var maxAgeForArmy = 27;
  var GENDER = "male"
	function checkValidForService (firstGradeStudents) {
		
		if (firstGradeStudents.age >= minAgeForArmy && firstGradeStudents.age < maxAgeForArmy && firstGradeStudents.sex === GENDER)			{ 
			console.log(firstGradeStudents.name + " welcomeToHell");
			return true;
			} 
		else if(firstGradeStudents.sex === "female") {
			
			console.log(firstGradeStudents.name + " You are a woman");
			return false;
		}
		else {
			console.log("Who are you");
			return false;
		}
		
	}
var annPetrovaCheckToArmy = checkValidForService(annPetrova); 
var vanyaIvanovCheckToArmy = checkValidForService(vanyaIvanov);
var petrSidorovCheckToArmy = checkValidForService(petrSidorov);

	function checkMediumMark(listExam) {
	var checkMediumMarkStudents = [];
		for(var i = 0; i < listExam.length; i++){
			checkMediumMarkStudents.push(listExam[i].examStudents);
			
			
		}
			var averageMark = 0;
for(var i = 0; i < checkMediumMarkStudents.length; i++){
	
	averageMark += checkMediumMarkStudents[i];
}
	var averageMarkStudent = averageMark / checkMediumMarkStudents.length;
		var averageMarkFix = averageMarkStudent.toFixed(2);
console.log(averageMarkFix);
		return parseFloat(averageMarkFix)
		}
		
	
		
	
	
var annPetrovaMediumMark = checkMediumMark(annPetrova.listExam); 
var vanyaIvanovMediumMark = checkMediumMark(vanyaIvanov.listExam);
var petrSidorovMediumMark = checkMediumMark(petrSidorov.listExam);
 



function checkToNextCourse(firstGradeStudents) {
	if(checkMediumMark(firstGradeStudents.listExam) >= 7) {
		console.log(firstGradeStudents.name + " Congratulations, welcome to next course" );
		var newCurrentMoney = firstGradeStudents.currentMoney + 3;
		console.log(firstGradeStudents.name + " Your new current money " + newCurrentMoney.toFixed(2))
	}
	else {
		if(checkValidForService (firstGradeStudents) === true) {
			console.log(firstGradeStudents.name + " Welcome to army");
		}
		else {
			console.log(firstGradeStudents.name + " You are a woman, see you  retake exam");
		}
	}
	

}
function filterStudentsForArmy(firstGradeStudents) {
	
 
	if(checkMediumMark(firstGradeStudents.name) < 7 && checkValidForService(firstGradeStudents.name) === true ) {
		return true
	} else {
		return false
	}
	
	
}
	