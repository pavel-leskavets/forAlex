

var firstCourseStudents = [];
firstCourseStudents.push(student1, student2, student3, student4, student5, student6, student7)

var genders = {
	MALE: 'male',
	FEMALE: 'female'
};
var MIN_VALID_YEAR_FOR_ARMY = 18; 
var MAX_VALID_YEAR_FOR_ARMY = 27; 

var MIN_AVERAGE_GRADE = 6; 

var BENEFIT = 3.1415;
var student1 = { 
id: 1, 
name: "petr", 
gender: genders.MALE, 
age: 20, 
course: 1,
cashAmount: 77.25, 
grades: [ 
 {subject: 'russian', grade: 6},
 {subject: 'history', grade: 9},
 {subject: 'mathematics', grade: 8},
 {subject: 'physics', grade: 5}
], 
getAverageGrade: getAverageGrade , 
checkIfValidForArmy:  checkIfValidForArmy,
changeCashAmount: changeCashAmount

} 
var student2 = { 
id: 2, 
name: "vanya", 
gender: genders.MALE, 
age: 19,
course: 1,	
cashAmount: 25.89, 
grades:[ 
{subject: 'russian', grade: 6},
 {subject: 'history', grade: 6},
 {subject: 'mathematics', grade: 8},
 {subject: 'physics', grade: 7}
], 
getAverageGrade: getAverageGrade , 
checkIfValidForArmy: checkIfValidForArmy,
changeCashAmount: changeCashAmount
} 
var student3 = { 
id: 3, 
name: "ann", 
gender: genders.FEMALE, 
age: 19,
course: 1,	
cashAmount: 15.89, 
grades: [ 
{subject: 'russian', grade: 6},
 {subject: 'history', grade: 3},
 {subject: 'mathematics', grade: 5},
 {subject: 'physics', grade: 6}
], 
getAverageGrade: getAverageGrade , 
checkIfValidForArmy: checkIfValidForArmy,
changeCashAmount: changeCashAmount

} 
var student4 = { 
id: 4, 
name: "lev", 
gender: genders.MALE,
age: 17,
course: 1,	
cashAmount: 35.89, 
grades:[ 
{subject: 'russian', grade: 4},
 {subject: 'history', grade: 9},
 {subject: 'mathematics', grade: 8},
 {subject: 'physics', grade: 7}
], 
getAverageGrade: getAverageGrade , 
checkIfValidForArmy: checkIfValidForArmy,
changeCashAmount: changeCashAmount 
} 
var student5 = { 
id: 5, 
name: "nikolai", 
gender: genders.MALE, 
age: 19,
course: 1,
cashAmount: 44.45, 
grades:[ 
{subject: 'russian', grade: 9},
 {subject: 'history', grade: 9},
 {subject: 'mathematics', grade: 9},
 {subject: 'physics', grade: 8} 
], 
getAverageGrade: getAverageGrade , 
checkIfValidForArmy: checkIfValidForArmy,
changeCashAmount: changeCashAmount
} 
var student6 = { 
id: 6, 
name: "mishka_duelyant", 
gender: genders.MALE, 
age: 25, 
course: 1,
cashAmount: 85.36, 
grades:[ 
{subject: 'russian', grade: 4},
 {subject: 'history', grade: 2},
 {subject: 'mathematics', grade: 3},
 {subject: 'physics', grade: 3}
], 
getAverageGrade: getAverageGrade , 
checkIfValidForArmy: checkIfValidForArmy,
changeCashAmount: changeCashAmount
} 
var student7 = { 
id: 7, 
name: "stiven", 
gender: genders.MALE, 
age: 20,
course: 1,
cashAmount: 58.7, 
grades:[ 
{subject: 'russian', grade: 6},
 {subject: 'history', grade: 9},
 {subject: 'mathematics', grade: 8},
 {subject: 'physics', grade: 5}],
getAverageGrade: getAverageGrade , 
checkIfValidForArmy: checkIfValidForArmy,
changeCashAmount: changeCashAmount
} 
function StudentFactory () {
	 var counter = 0;
	return function (name, age, gender, course, cashAmount, grades){
		return Student()	
		counter++
	}
 function Student (name){
this.name = name;
	this.age = age;
	this.gender = gender;
	this.course = course;
	this.cashAmount = cashAmount;
	this.grades = grades;
var _name = name;
var _age = age;
var _gender = gender;
var _course = course;
var _cashAmount = cashAmount;
var _grades = grades;
var _id = counter;
}	

}



  
 


var studentFactory = FactoryName();
var student1 = studentFactory('Grigory');








var studentsPassedExams = getStudentsPassedExams(firstCourseStudents, MIN_AVERAGE_GRADE);

var goodStudentsIds = studentsPassedExams.map(function(array) { 
  return array.id 
	});

var excludedStudents = getExcludedStudents(firstCourseStudents, goodStudentsIds);
var studentsForArmy = getStudentsForArmy(excludedStudents);
var secondGradeStudents = getStudentsForNextCourse(getStudentsPassedExams);
function getAverageGrade(firstCourseStudents) {
	var sum = 0;
	for(var i = 0; i < this.grades.length; i++) {
		sum += this.grades[i].subject
	}
	return sum / this.grades.length
}

function checkIfValidForArmy(firstCourseStudents) {
	if(this.gender === 'female' ){
		return false
	} else if(this.age >= MIN_VALID_YEAR_FOR_ARMY && this.age < MAX_VALID_YEAR_FOR_ARMY){
		return true
	} else{
		return false
	}
}
function changeCashAmount () {
return parseFloat((this.cashAmount + BENEFIT).toFixed(2)) 
}

function getStudentsPassedExams(firstCourseStudents, MIN_AVERAGE_GRADE) {
	return firstCourseStudents.filter(function(student) {
		return (student.getAverageGrade() >= MIN_AVERAGE_GRADE);
	})
}

function getExcludedStudents(students, goodStudentsIds) {
	 var exludedStudents = [];
    for (var i = 0; i < firstCourseStudents.length; i++) {
        if (goodStudentsIds.indexOf(firstCourseStudents[i].id) === -1) {
            exludedStudents.push(firstCourseStudents[i]);
        }
    }
    return exludedStudents;
}
function getStudentsForArmy(firstCourseStudents) {
	var studentsForArmy = []
	firstCourseStudents.filter(function(arrayArmy) {
		if(arrayArmy.checkIfValidForArmy() === true){
			studentsForArmy.push(arrayArmy)
		}
	})
	return studentsForArmy
}
function getStudentsForNextCourse(getStudentsPassedExams) {
  return firstCourseStudents.map(function(arrayItem) {
        arrayItem.course += 1;
        arrayItem.cashAmount = arrayItem.changeCashAmount();
        return arrayItem;
    });
}