#pragma strict

@script RequireComponent(Scorekeeper)
var skin : GUISkin;

private var scorekeeper : Scorekeeper;
private var state : String;

function Start () {
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
}

function GameOver(){
	state = "Game Over" ;
	yield WaitForSeconds(3.0);
	state = "";
	yield WaitForSeconds(0.5);
	state = "Show Score";
	while (!Input.GetButtonDown("Fire1")) yield;
	Application.LoadLevel("MainScene");
}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.skin = skin;
	
	if(state == "Game Over"){
		GUI.Label(Rect(0, 0, sw, sh), "Game Over ! !");

		}else if(state == "Show Score"){
		var scoreText : String = "Your Score is" + "\nzombile : " + scorekeeper.zombilesKill + "\nsoldier : " + scorekeeper.soldiersKill + "\nHelp : " + scorekeeper.soldiersHelp;
//		GUI.Label(Rect(sw/3, sh/5, sw, sh), scoreText + "\nClick To Title");
		GUI.Label(Rect(0, 0, sw, sh), scoreText + "\nClick To Retry");
	}
}