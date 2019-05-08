        $("document").ready(() =>{
            const loggedIn = localStorage.getItem("status");
            if (loggedIn) {
                location.assign("index.html")
            } 
        
        })    


        $("#signup").click(signup);

        function signup(event) {
            event.preventDefault();

            const firstname = $("#firstname").val();
            const lastname = $("#lastname").val();
            const address = $("#address").val();
            const country = $("#country").val();
            const city = $("#city").val();
            const zip = $("#zip").val();
            const username = $("#username").val();
            const mail = $("#mail").val();
            const pass = $("#pass").val();
            const pass2 = $("#pass2").val();

           
            if (firstname === "") {
                $("#spn1").html("Input your first name")
                
                return;
            } else {
                $("#spn1").html("")
            }

            if (lastname === "") {
                $("#spn2").html("Input your last name")
                
                return;
            } else {
                $("#spn2").html("")
            }

            if (address === "") {
                $("#spn3").html("Input your address")
                
                return;
            } else {
                $("#spn3").html("")
            }


            if (country === "") {
                $("#spn4").html("Select a country")
                
                return;
            } else {
                $("#spn4").html("")
            }


            if (city === "") {
                $("#spn5").html("Input your city")
                
                return;
            } else {
                $("#spn5").html("")
            }

            
            if (zip === "") {
                $("#spn6").html("Input zip/postal code")
                
                return;
            } else {
                $("#spn6").html("")
            }

            
            if (username === "") {
                $("#spn7").html("Input your username")             
                return;
            } else if (username.length > 12){
                $("#spn7").html("Username is too long")
                return;
            } else {
                $("#spn7").html("")
            }

            if (mail === "") {
                $("#spn8").html("Input your mail")                
                return;
            } else {
                $("#spn8").html("")
            }
           
            if (pass === "") {
                $("#spn9").html("Input your password");
                return;
            } else if (pass.length < 4){
                $("#spn9").html("Password is too short");
                return;
            } else if (pass.length > 12) {
                $("#spn9").html("Password is too long");
                return;
            } else {
                $("#spn9").html("");
            }

            if (pass !== pass2) {
                $("#spn10").html("Passwords must match");
                return ;
            } else {
                $("#spn10").html("");
            }






            save(firstname, lastname, address, country, city, zip, username, mail, pass);
        }

        function save(firstname, lastname, address, country, city, zip, username, mail, pass) {
            let users = [];
            const newUser = {
                    firstname: firstname,
                    lastname: lastname,
                    address: address,
                    country: country,
                    city: city,
                    zip: zip,
                    username: username,
                    mail: mail,
                    pass: pass
                };

                if (localStorage.getItem("users")) {
                users = JSON.parse(localStorage.getItem("users"));
                
                if (!users.find(user => user.username === newUser.username)) {
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));
                    alert(`Singup succsessful`);
                    $("#spn7").html(``);
                    location.assign("login.html");
                } else {
                    $("#spn7").html(`Username ${username} is already taken`);
                }
            } else { 
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                alert(`Singup succsessful`);
                location.assign("login.html");
            }
        }

