$("document").ready(() =>{
    const loggedIn = localStorage.getItem("status");
    if (loggedIn) {
        location.assign("index.html")
    } 

})    


$("#login").click(login);

function login(event) {
    event.preventDefault();

    const username = $("#username").val();
    const pass = $("#pass").val();

    const users = JSON.parse(localStorage.getItem("users"));
    

    let registeredUser; 
    if (users) {
        registeredUser = users.find(user => user.username === username && user.pass === pass);
    } else {
        registeredUser = null;
    }

    if (registeredUser) { 

        alert("Login successful")
        $("document").ready(() => {
            const firstname = registeredUser.firstname;
            const lastname = registeredUser.lastname;
            const address = registeredUser.address;
            const country = registeredUser.country;
            const zip = registeredUser.zip;
            const usrname = registeredUser.username;
            const mail = registeredUser.mail;

            localStorage.setItem('status','loggedin'); 
            localStorage.setItem('userfn', JSON.stringify(firstname));
            localStorage.setItem('userln', JSON.stringify(lastname));
            localStorage.setItem('userad', JSON.stringify(address));
            localStorage.setItem('usercu', JSON.stringify(country));
            localStorage.setItem('userzi', JSON.stringify(zip));
            localStorage.setItem('usernm', JSON.stringify(usrname));
            localStorage.setItem('userml', JSON.stringify(mail));

          });
          location.assign("index.html");
    } else {
        alert(`Wrong username/password!`);
    }
}
