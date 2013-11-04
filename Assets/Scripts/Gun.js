#pragma strict

var bulletPrefab : GameObject;
var initialVelocity : float;
var gunSe : AudioClip;

function Update () {
	if(Input.GetButtonDown("Fire1")){
		audio.clip = gunSe;
		audio.Play();
		
		var bullet : GameObject = Instantiate(bulletPrefab, transform.position, transform.rotation);
		var screenPoint = Input.mousePosition;
		screenPoint.z = 10.0;
		var worldPoint = camera.ScreenToWorldPoint(screenPoint);
		var direction  = (worldPoint - transform.position).normalized;
		bullet.rigidbody.velocity = direction * initialVelocity;
	}
}

function GameOver(){
	enabled = false;
}
