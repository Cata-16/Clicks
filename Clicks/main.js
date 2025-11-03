const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF66C4 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var n=0;
var a=1;
var b=10;
var c=0.0000001;

var Clicks=document.getElementById("Clicks")


function estudiantes(){
    n+=a*b;

}

function OpA(){
  a++;

}

function OpB(){
  b++;

}

function OpC(){
  c++;

}

addEventListener("click", (event) => {estudiantes()})

camera.position.z = 5;

function animate() {

  n+=c;

  Clicks.innerHTML=n;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );

}