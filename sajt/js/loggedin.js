$("document").ready(() => {
    const loggedIn = localStorage.getItem("status");
    
    if (loggedIn) {
        $("#logspan").html(`<a class="nav-link" href="profile.html">Profile</a>`)
        $("#singspan").html(`<button class="btn btn-secondary" id="signout">Sign out</button>`)
    } else {
        $("#logspan").html(`<a href="login.html" class="nav-link">Login</a>`)
        $("#singspan").html(`<a href="signup.html" class="nav-link">Sign up</a>`)
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


});

