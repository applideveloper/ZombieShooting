#pragma strict

var explosionPrefab : GameObject;
var life : int;
var velocity : float;
var targettype : String;

private var controller: CharacterController;
private var animator: Animator;
var SoldierSe : AudioClip;
var gameController : GameObject;

function Start(){
	animator = GetComponent(Animator);
	controller = GetComponent(CharacterController);
	gameController = GameObject.FindWithTag("GameController");
}

function ApplyDamege(){
	if(animator.GetBool("Dying")==false){
		life--;
		var position = new Vector3(transform.position.x + 0, transform.position.y + 3, transform.position.z +0);
		Instantiate(explosionPrefab, position, transform.rotation);
	
		if(life < 1){
			audio.clip = SoldierSe;
			audio.Play();
			animator.SetBool("Dying",true);
	//		Destroy(gameObject,4);
			gameController.SendMessage("OnDestoroyHuman", targettype);	
		}
	}
}

function Update () {
	if(animator.GetBool("Dying") == false){
		transform.position.z -= velocity;
	}
	if(transform.position.z < -10.0 ){
		Destroy(gameObject);	
		gameController.SendMessage("OnHelpHuman", targettype);	
	}
}
