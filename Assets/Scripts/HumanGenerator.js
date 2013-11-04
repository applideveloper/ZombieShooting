#pragma strict

var interval : float;
var zombiePrefab : GameObject;
var soldierPrefab : GameObject;
var nextIsHuman : boolean;

private var timer : float;

function Start () {
	nextIsHuman = true;
	timer = 0.0;
}

function Update () {
	timer -= Time.deltaTime;
	if(timer < 0.0){
		var offsx : float = Random.Range(-4.0, 4.0);
		var offsz : float = Random.Range(-4.0, 4.0);
		var position : Vector3 = transform.position + Vector3(offsx, 0, offsz);
		var prefab : GameObject = nextIsHuman? zombiePrefab : soldierPrefab;
		Instantiate(prefab, position, transform.rotation);
		timer = interval;
		nextIsHuman = !nextIsHuman;
	}
}

function GameOver(){
	enabled = false;
}
