function SIGNIN(){
	let neww = JSON.parse(localStorage.fruits);
for(let f of neww){
if(email1.value==f.email&&password1.value==f.password){
	localStorage.email=f.email;
	localStorage.password=f.password;
	localStorage.fullname=f.fullname;
	localStorage.select=f.select;
	localStorage.date=f.date;
	window.open('twitter3.html', '_blank');

}
}
}