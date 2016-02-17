//var members;
//var user;

window.onload = function()
{
//    members = parseJsonFile("../data/members.json");
    $("#splash").fadeOut("slow", function() {window.location.href = "login.html"});
}

function GTRegistration()
{
    window.location.href = "registration.html";
}

function validateForm()
{
    
    var validated = false;
    
//    for (user in members)
        {
//            if (document.getElementById("uName").value.toLowerCase() == members[user].username.toLowerCase() && document.getElementById("uPassword").value == members[user].password)
//                {
//                    validated = true;
//                    user = members[user];
//                    window.location.href = "homepage.html";
//                }
        }
    
    if (document.getElementById("uName").value.toLowerCase() == "user" && document.getElementById("uPassword").value == "password")
        {
            validated = true;
            window.location.href = "homepage.html";
        }
    
    if (!validated)
        {
            alert("Invalid Username or Password");
            document.getElementById("uName").style.backgroundColor = "red";
            document.getElementById("uPassword").style.backgroundColor = "red";
        }
}

function clubsSocs()
{
    if (document.getElementById("AssGuild").checked)
        {
            document.getElementById("descAssGuild").className = "show";
        }
    else
        {
            document.getElementById("descAssGuild").className = "hide";
        }
    
    if (document.getElementById("Computer").checked)
        {
            document.getElementById("descComputer").className = "show";
        }
    else
        {
            document.getElementById("descComputer").className = "hide";
        }
    
    if (document.getElementById("Debate").checked)
        {
            document.getElementById("descDebate").className = "show";
        }
    else
        {
            document.getElementById("descDebate").className = "hide";
        }
    
    if (document.getElementById("LGBT").checked)
        {
            document.getElementById("descLGBT").className = "show";
        }
    else
        {
            document.getElementById("descLGBT").className = "hide";
        }
    
    if (document.getElementById("Rock").checked)
        {
            document.getElementById("descRock").className = "show";
        }
    else
        {
            document.getElementById("descRock").className = "hide";
        }
}

function SportsClub()
{
    if (document.getElementById("Badminton").checked)
        {
            document.getElementById("descBadminton").className = "show";
        }
    else
        {
            document.getElementById("descBadminton").className = "hide";
        }
    
    if (document.getElementById("Hockey").checked)
        {
            document.getElementById("descHockey").className = "show";
        }
    else
        {
            document.getElementById("descHockey").className = "hide";
        }
    
    if (document.getElementById("Swimming").checked)
        {
            document.getElementById("descSwimming").className = "show";
        }
    else
        {
            document.getElementById("descSwimming").className = "hide";
        }
    
    if (document.getElementById("Football").checked)
        {
            document.getElementById("descFootball").className = "show";
        }
    else
        {
            document.getElementById("descFootball").className = "hide";
        }
    
    if (document.getElementById("AmericanFootball").checked)
        {
            document.getElementById("descAmericanFootball").className = "show";
        }
    else
        {
            document.getElementById("descAmericanFootball").className = "hide";
        }
}

//Randomly stopped working... why? Only God knows...
//##################################################

//function getJsonString(file)
//{
//    var response;
//    var rawJson = new XMLHttpRequest();
//    rawJson.open("GET", file, false);
//    rawJson.onreadystatechange = function ()
//    {
//        if(rawJson.readyState === 4)
//        {
//            if(rawJson.status === 200 || rawFile.status == 0)
//            {
//                response = rawJson.responseText;
//            }
//        }
//    }
//    rawJson.send(null);
//    return response;
//}
//
//function parseJsonFile(file)
//{
//    var jsonString = getJsonString(file);
//    var objectArray = JSON.parse(jsonString);
//    objectArray = objectArray.users;
//    return objectArray;
//}