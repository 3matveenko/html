let n=0;
f()
function f(){
	n = 0;
	last.remove();
	let divdiv = document.createElement('div');
	divdiv.id="last";
	document.body.append(divdiv);
	 for(let f of JSON.parse(localStorage.fruits)){
	 	n++;
	  	let div = document.createElement('div');
        div.innerHTML = f.name+" "+f.price;
        div.className = "fruitDiv";
        div.id=n;
        last.append(div);
       	let bu = document.createElement('button');
		bu.innerHTML = "REMOVE";
		bu.addEventListener('click',remov);
		bu.id=n;
		div.append(bu);
    }
}
function remov(){

let d= document.getElementById(event.target.id);
d.remove();
let newFruits = JSON.parse(localStorage.fruits)
newFruits.splice(((event.target.id)-1),1);
localStorage.fruits = JSON.stringify(newFruits);
f()
}
