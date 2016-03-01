//Variables for storing objects, never got linked to actual data.
//var members;
//var user;


window.onload = function()
{
    $("#splash").fadeOut("slow", function() {window.location.href = "login.html"});
    
    //Get members from Json parsing method passing path to Json File
//    members = parseJsonFile("../data/members.json");
}


function GTRegistration()
{
    window.location.href = "registration.html";
}


function validateForm()
{
    
    var validated = false;
    
    //Loop through each member object in members array to check against entered username and password
    //Basic Login System, doesn't work as was unable to get JSON parse functioning correctly
//    for (user in members)
//        {
//            if (document.getElementById("uName").value.toLowerCase() == members[user].username.toLowerCase() && document.getElementById("uPassword").value == members[user].password)
//                {
//                    validated = true;
//                    user = members[user];
//                    window.location.href = "homepage.html";
//                }
//        }
    
    //If the entered username and password are the hardcoded login details
    if (document.getElementById("uName").value.toLowerCase() == "user" && document.getElementById("uPassword").value == "password")
        {
            validated = true;
            window.location.href = "homepage.html";
        }
    
    //Alert to invalid login
    if (!validated)
        {
            alert("Invalid Username or Password");
            document.getElementById("uName").style.backgroundColor = "red";
            document.getElementById("uPassword").style.backgroundColor = "red";
        }
}

//Method for clubs and socs page
function clubsSocs()
{
    //Long if statment to see which are selected. Easier and more efficient methods to do this but ran out of time.
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

//Method for sports clubs page
function SportsClub()
{
    //Long if statment to see which are selected. Easier and more efficient methods to do this but ran out of time.
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

//Randomly stopped working...
//
//Method for parsing json file that stopped working randomly. No time to debug
//##################################################
//
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

//function parseJsonFile(file)
//{
//    var jsonString = getJsonString(file);
//    var objectArray = JSON.parse(jsonString);
//    objectArray = objectArray.users;
//    return objectArray;
//}