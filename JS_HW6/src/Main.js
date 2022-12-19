function Robot(){
	this.work = function(){
		console.log('Я Robot - я просто працюю');
	};	
}
function CoffeRobot(){
	Robot.call(this);
	
	this.work = function(){
		console.log('Я CoffeRobot - я варю каву');
	}
}
function RobotDancer(){
	Robot.call(this);
	
	this.work = function(){
		console.log('Я RobotDancer - я просто танцюю');
	}
}
function RobotCooker(){
	Robot.call(this);
	
	this.work = function(){
		console.log('Я RobotCooker - я просто готуюю');
	}
}

var robot = new Robot();
var coffeRobot = new CoffeRobot();
var robotDancer = new RobotDancer();
var robotCooker = new RobotCooker();
robot.work();
coffeRobot.work();
robotDancer.work();
robotCooker.work();

console.log('=====================================');

let robotArray = [new Robot(), new CoffeRobot(), new RobotDancer(), new RobotCooker()];
robotArray.forEach(function(robot){
	robot.work();
});





