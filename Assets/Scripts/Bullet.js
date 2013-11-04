#pragma strict

function OnCollisionEnter(collisionInfo: Collision){
	if(collisionInfo.gameObject.tag == "soldiers" || collisionInfo.gameObject.tag == "zombies" ){
		collisionInfo.gameObject.SendMessage("ApplyDamege");
	}
	Destroy(gameObject);
}
