                        let usersArray = [
                        {email: '1', password: '1', passwordr: '1'},
                        {email: '10', password: '1234567', passwordr: '1234567'},
                                        ];
                                        let emaField = email;
                                        let passField = password;
                                        let passrField = passwordr;
                                        function checkUser(){
                                            if(emaField.value == '')
                                            emailError.innerHTML = '  Please    enter Email';
                                            
                                            if(passField.value == '')
                                                passwordError.innerHTML = '  Please enter Password';

                                            if(passrField.value == '')
                                                passwordError1.innerHTML = 'Retype Password';
                                            if(passField.value!=passrField.value)
                                                passwordError1.innerHTML = 'Passwords are not same';
                                            for(let u of usersArray){
                                            if(emaField.value == u.email)
                                                emailError.innerHTML = 'Current email is aleady in use';
                                        }

                                         }
                                        function callOnFocusPassword() {  
                                          if (passField.value.length<6) {
                                                passwordError.innerHTML = 'Please enter right email.';
                                           } else { 
                                                passwordError.innerHTML = ''; 
                                           } 
                                        } 
                                         
                                        password.addEventListener('keyup', callOnFocusPassword); 


                                            
