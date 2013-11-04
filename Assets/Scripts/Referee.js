#pragma strict

@script RequireComponent(Scorekeeper)

var switchInterval : float;
var life : int;
private var zombilesKill : int;
private var soldiersKill : int;
private var soldiersHelp : int;

private var scorekeeper : Scorekeeper;
private var targetIsSoldier : boolean;
private var switchTimer : float;

private function GetTargetType() : String{
	return targetIsSoldier ? "soldiers" : "zombies";
}

function Start () {
	scorekeeper = GetComponent(Scorekeeper) as Scorekeeper;
	targetIsSoldier = true;
	switchTimer = switchInterval;
}

function Update () {
	switchTimer -= Time.deltaTime;
	if(switchTimer < 0.0){
		targetIsSoldier = !targetIsSoldier;
		switchTimer = switchInterval;
	}
}

function OnDestoroyHuman(TargetType : String){
	if( TargetType == GetTargetType()){
		soldiersKill++;
		scorekeeper.score = "zombile : " + zombilesKill + "   soldier : " + soldiersKill + "   Help : " + soldiersHelp;
	}else{
		zombilesKill++;
		scorekeeper.score = "zombile : " + zombilesKill + "   soldier : " + soldiersKill + "   Help : " + soldiersHelp;
	}
}

function OnHelpHuman(TargetType : String){
	if( TargetType == GetTargetType()){
		soldiersHelp++;
		scorekeeper.score = "zombile : " + zombilesKill + "   soldier : " + soldiersKill + "   Help : " + soldiersHelp;
	}
}

function OnDamage(damage:int){
	
	life = life - damage;
	if(life > -1){
		scorekeeper.life = "life : " + life;
	}
	
	if(life == 0){
		scorekeeper.zombilesKill = zombilesKill;
		scorekeeper.soldiersKill = soldiersKill;
		scorekeeper.soldiersHelp = soldiersHelp;
		
		BroadcastMessage("GameOver");
		GameObject.FindWithTag("MainCamera").SendMessage("GameOver");
		enabled = false;
	}
}

function GameOver(){
	enabled = false;
}
