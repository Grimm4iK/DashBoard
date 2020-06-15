function helloworlds(a){
	var res="";
	for (i = 0; i < a; i++){
		res+=CreateDBoard(i);
		}
	return res;
	
}
function ShowDashBoards(a)
{
	for (i = 0; i < a; i++){
		ShowDashBoard(i);		
	}

}
function showworld()
{
	document.getElementById("dboard").innerHTML=helloworlds(5);
	ShowDashBoards(5);
}

