let usersArray = [];
function REGISTER() {
let newUser = {};
newUser.email = email.value;
newUser.password = password.value;
newUser.fullname = fullname.value;
newUser.select = select.value;
newUser.date = date.value;
usersArray.push(newUser);
localStorage.fruits = JSON.stringify(usersArray);
window.open('twitter2.html', '_blank');
}
                                            
