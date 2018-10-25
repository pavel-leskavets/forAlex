function DOT(obj, prop) {
	if(typeof obj !== "object" ||  typeof prop !== "string" || typeof obj === null) {
		console.log("Error");
	}
	else {
		return obj[prop]
	}
}
var BENEFIT = 3.1415;
var minAverageGrade = 7;
var petrSidorov = {
	id: 1,
	name: "petr",
	sex: "male",
	age: 20,
	currentMoney: 77.25,
	listExam: [
		{examStudents: 5},
		{examStudents: 4},
		{examStudents: 4}
		],
	getAverageGrade: petrSidorovMediumMark,
	checkIfValidForArmy: petrSidorovCheckToArmy

}
var vanyaIvanov = {
	id: 2,
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
		id: 3,
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
var levTolstoi = {
	id: 4,
	name: "lev",
	sex: "male",
	age: 17,
	currentMoney: 35.89,
	listExam:[ 
	{examStudents: 7},
	{examStudents: 4},
	{examStudents: 2}
		],
	getAverageGrade: levTolstoiMediumMark,
	checkIfValidForArmy: levTolstoiCheckToArmy
}
var kolyaGogol = {
	id: 5,
	name: "nikolai",
	sex: "male",
	age: 19,
	currentMoney: 44.45,
	listExam:[ 
	{examStudents: 6},
	{examStudents: 8},
	{examStudents: 6}
		],
	getAverageGrade: kolyaGogolMediumMark,
	checkIfValidForArmy: kolyaGogolCheckToArmy
}
var mishanyaLermontov = {
	id: 6,
	name: "mishka_duelyant",
	sex: "male",
	age: 25,
	currentMoney: 85.36,
	listExam:[ 
	{examStudents: 7},
	{examStudents: 8},
	{examStudents: 6}
		],
	getAverageGrade: mishanyaLermontovMediumMark,
	checkIfValidForArmy: mishanyaLermontovCheckToArmy
}
var stivenKing = {
	id: 7,
	name: "stiven",
	sex: "male",
	age: 20,
	currentMoney: 58.7,
	listExam:[ 
	{examStudents: 9},
	{examStudents: 7},
	{examStudents: 8}
		],
	getAverageGrade: stivenKingMediumMark,
	checkIfValidForArmy: stivenKingCheckToArmy
}
	var firstGradeStudents = [];
firstGradeStudents.push(annPetrova, petrSidorov, vanyaIvanov, levTolstoi, kolyaGogol, mishanyaLermontov, stivenKing);
console.log(firstGradeStudents);
	var minAgeForArmy = 18;
  var maxAgeForArmy = 26;
  var GENDER = "male"
	function checkValidForService (firstGradeStudents) {
		
		if (firstGradeStudents.age >= minAgeForArmy && firstGradeStudents.age < maxAgeForArmy && firstGradeStudents.sex === GENDER )			{ 
			
			return true;
			} 
		else if(firstGradeStudents.sex === "female") {
			
			
			return false;
		}
		else {
			return false;
		}
		
	}
var annPetrovaCheckToArmy = checkValidForService(annPetrova); 
var vanyaIvanovCheckToArmy = checkValidForService(vanyaIvanov);
var petrSidorovCheckToArmy = checkValidForService(petrSidorov);
var levTolstoiCheckToArmy = checkValidForService(levTolstoi);
var kolyaGogolCheckToArmy = checkValidForService(kolyaGogol);
var mishanyaLermontovCheckToArmy = checkValidForService(mishanyaLermontov);
var stivenKingCheckToArmy = checkValidForService(stivenKing);

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

		return parseFloat(averageMarkFix)	}
			
var annPetrovaMediumMark = checkMediumMark(annPetrova.listExam); 
var vanyaIvanovMediumMark = checkMediumMark(vanyaIvanov.listExam);
var petrSidorovMediumMark = checkMediumMark(petrSidorov.listExam);
var levTolstoiMediumMark = checkMediumMark(levTolstoi.listExam);
var kolyaGogolMediumMark = checkMediumMark(kolyaGogol.listExam);
var mishanyaLermontovMediumMark = checkMediumMark(mishanyaLermontov.listExam);
var stivenKingMediumMark = checkMediumMark(stivenKing.listExam);

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
function checkingToNextCourse (firstGradeStudents) {
    return firstGradeStudents.filter((item) => checkMediumMark(item.listExam) >= 6);
}

var secondGradeStudents = checkingToNextCourse(firstGradeStudents);
secondGradeStudents.map(function(arrayItem) {
    delete arrayItem.listExam;
    arrayItem.currentMoney += parseFloat(BENEFIT.toFixed(2));
    return arrayItem;
});
	console.log(secondGradeStudents);
var goodStudentsIds = secondGradeStudents.map(function(arrayId) {
		return arrayId.id
})
 
console.log(goodStudentsIds);

function getExcludedStudents(firstGradeStudents, goodStudentsIds) {
var excludedStudents = (firstGradeStudents.this.id).filter(n => goodStudentsIds.indexOf(n) === -1);

	console.log(excludedStudents);
	return excludedStudents
}