
/*Congratulations Prepsters, you've been selected for a top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

This repo will self-destruct in five seconds. Good luck!*/

/*Mission 1: 
Team Member: Sean

Create a function that will sum three number values.*/

/*Mission 2: 
Team Member: Yao

Create a function that will concatenate two string values*/

/*Mission 3:
Team Member: Tyler

Create a function that will add a new element into an array.*/

/*Mission 4:
Team Member: Reese

Create a function that will verify entry for a club. Patrons must be 22 and over to be admitted into the club.*/

/*Mission 5:
Team Member: Jace

Create a function that will convert dollars to yen based on today's foreign exchange rate.*/

/*Mission 6:
Team Member: Cyrus

Create a function that will convert miles to kilometers.*/

/*Mission 7:
Team Member: Ben

Create a function that will check integers and return true for even and false for odd.*/

/*Mission 8:
Team Member: May

Create a function that will check your budget. Create the following return statements based on the budget amount: 

<20 => "Need to hustle"
<50 => "Keep coding"
>50 => "Donut King!"*/

function checkBudget(num){
	if(num<20)
		return "Need to hustle";
	else if(num<50)
		return "Keep coding";
	else if(num>50)
		return "Donut King!";
}

var sen = checkBudget(24);
console.log(sen);
