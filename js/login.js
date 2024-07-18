document.getElementById("login").addEventListener("click", login);

function login() {
    var user = document.getElementById('user').value;
    var pass = document.getElementById('mdp').value;
    if (user == "biat" && pass == "HGNM") 
    {
        document.getElementById("param").style.display="inline";
        document.getElementById("lo").style.display="none";
    } 
    else 
    {
       document.getElementById("alert").style.display="flex";

    }
}
