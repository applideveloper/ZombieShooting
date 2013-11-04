#pragma strict

var explosionPrefab : GameObject;
var life : int;
var velocity : float;
var EnemySe : AudioClip;
var DagekiSe : AudioClip;
var targettype : String;
 
private var time : long;

private var controller: CharacterController;
private var animator: Animator;
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
			audio.clip = EnemySe;
			audio.Play();
			animator.SetBool("Dying",true);
	//		Destroy(gameObject,4);

			gameController.SendMessage("OnDestoroyHuman", targettype);
		}
	}
}

function Update () {

	if(transform.position.z > -6.0 && animator.GetBool("Dying") == false){
		transform.position.z -= velocity;
	}else{
		animator.SetBool("Attacking",true);
	}
	
	if(animator.GetBool("Attacking")== true && animator.GetBool("Dying") == false){
		time++;
		if(time  == 50){
			audio.clip = DagekiSe;
			audio.Play();
			gameController.SendMessage("OnDamage", 1);
		}else if(time == 80 ){
			// Nothing
		}else if(time == 150 ){
			audio.clip = DagekiSe;
			audio.Play();
			gameController.SendMessage("OnDamage", 1);
		}else if(time == 160 ){
			// Nothing
		}else if(time % 80 == 0){
			audio.clip = DagekiSe;
			audio.Play();
			gameController.SendMessage("OnDamage", 1);
		}
	}
}
