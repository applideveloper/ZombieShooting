#pragma strict

@HideInInspector
var score : String;
@HideInInspector
var life : String;
@HideInInspector
var zombilesKill : int;
@HideInInspector
var soldiersKill : int;
@HideInInspector
var soldiersHelp : int;

var skin : GUISkin;

function Start(){
	score = "zombile : 0   soldier : 0   Help : 0";
	life = "life : 5";
	zombilesKill = 0;
	soldiersKill = 0;
	soldiersHelp = 0;
}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	GUI.skin = skin;
	var scoreText : String = score;
	GUI.Label(Rect(20, 0, sw, sh /4), scoreText);

	var lifeText : String = life;
	GUI.Label(Rect(sw-110, 0, sw/2, sh /4), lifeText);
}