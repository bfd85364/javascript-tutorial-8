// NAME: junhyung-kim
// DATE: 2024-04-08
// WEEK:6
// EXERCISE/ASSIGNMENT: common patterns



function Exercise1() {
 function subtract(num1,num2){
	 let answer = num1 - num2;
	 return answer;
 }
	print(subtract(20,12));
}
	
function Exercise2() {
	function sum(a,b,c,d,e){
		let answer = a + b + c + d + e;
		return answer;
	}
	print(sum(1,2,3,4,5));
}
	
function Exercise3(){
	let x= parseInt(prompt("Enter your number"));
	function isEvan(num){
	if(num%2==0){
		print( x + "is the odd");
	}
	let isEvan;
	if(num%2==1){
	isEvan = print( x +" is the evan");
	}
	return isEvan;
}
 print(isEvan(x));
}

function Exercise4() { 
	let x= parseInt(prompt("Enter your fibo"));
	let low="";
	function getFactors(num){
		for(num=0; num<=x; num++){
			if(x%num==0 && num<x){
			low= low + num + ",";
			}
			else if(num==x){
			low= low + "and " + num;
			}
		}
		return low;
		}
print(getFactors(x));
}
			
function Exercise5() {
	let row =" ";
	let width= parseInt(prompt("Enter your width"));
	let height= parseInt(prompt("Enter your height"));
	function drawRectangle(i){
		if(i<width){
		for(i=0; i<width; i++){
				row = row + "*";
		}
		}
		else{
			row = row + " ";
		}
		return row;
	}
		for(let j=1; j<height; j++){
		print(drawRectangle(row));
}
}




function Exercise6(){
	let x = 7;
	let y = 10;
	let z = 20;
	let temp;

	temp =x;
	x = y;
	y = temp;
	y=z;
	z = temp;
	
  print(x,y,z);
  
}

function Exercise7(){
	let i;
	for(i=1; i<1000; i++){
	if(1000%i==0){
	print(i +"+");
}
}
	if(i=1000){
	print("="+ i);
}
}

function Exercise8() {

}

function Exercise9(){

}

function Exercise10() {

}

//Clear working space
function clearPrintSpace() {
	clearAll();
}
