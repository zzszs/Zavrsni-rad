
$("document").ready(() => {
    const loggedIn = localStorage.getItem("status");
    
    if (loggedIn) {
        $("#logspan").html(`<a class="nav-link" href="profile.html">Profile</a>`)
        $("#singspan").html(`<button class="btn btn-secondary" id="signout">Sign out</button>`)
    } else {
        $("#logspan").html(`<a href="login.html" class="nav-link">Login</a>`)
        $("#singspan").html(`<a href="signup.html" class="nav-link">Sign up</a>`)
        location.assign("index.html")
    }

    $("#signout").click(function()  {
       
        localStorage.removeItem("status");

        localStorage.removeItem("userfn");
        localStorage.removeItem("userln");
        localStorage.removeItem("userad");
        localStorage.removeItem("usercu");
        localStorage.removeItem("userzi");
        localStorage.removeItem("usernm");
        localStorage.removeItem("userml");

        location.reload();
    });



    const lastname = JSON.parse(localStorage.getItem("userln"));
    const firstname = JSON.parse(localStorage.getItem("userfn"));
    const address = JSON.parse(localStorage.getItem("userad"));
    const country =  JSON.parse(localStorage.getItem("usercu"));
    const zip = JSON.parse(localStorage.getItem("userzi"));
    const mail = JSON.parse(localStorage.getItem("userml"));
    const usersname = JSON.parse(localStorage.getItem("usernm"));


$("#firstlastname").html(`<h4 class="profback">${firstname} ${lastname}</h4>`);
$("#info").html(`Address: ${address}<br>
                 Country: ${country} <br>
                 zip: ${zip}<br><br>
                 
                 username: ${usersname}<br>
                 mail: ${mail}`);

})

