const body = document.getElementById('body');
const app = document.getElementById('app');
const parrafo = document.getElementById('onload__p');


const applicados = document.getElementById("applicados")
setTimeout(()=>{
	parrafo.innerHTML ="JAJAJAJAJA ERA TROL NO HAY BARRA CARGA DAME CLICK";

}, 37000);
parrafo.addEventListener("click", ()=>{
	app.classList.add("app__active")
})

applicados.addEventListener("click",()=>{
	alert("APPlicados 2018 5to 2da, mati descubri el hover, dia mas feliz de su vida")
})



const popou = document.getElementById("popou")
const popouButton = document.getElementById("popou__button");
const popouExit = document.getElementById("popou__exit");
popouButton.addEventListener("click", ()=>{
	popou.style.display = "flex";
});
popouExit.addEventListener("click", ()=>{
	popou.style.display = "none";
})


const fin = document.getElementById("fin");
const canon = document.getElementById("canon")
fin.addEventListener("click", ()=>{
	canon.play()
	alert("Feliz cumpleaños maty, espero que la allas pasado muy bien, la verdad no me alcanzando el dia para lo mucho que queria hacer pero espero que te guste, te dejo una cancion que bueno es una cancion, esto va en honor a todas las paginas que hizimos y espero que le metas mucho a la fisica asi me enseñas mate para cuando yo este ingresando")
})