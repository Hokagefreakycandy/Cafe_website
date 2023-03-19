let menu = document.getElementById("navlinks")

function showMenu()
{
    menu.style.right = "0";
}

function hideMenu()
{
    menu.style.right = "-200px";
}

//hover effect

function on(){
    document.getElementById("overlayy").style.display="block";
    }
    
    function off(){
    document.getElementById("overlayy").style.display="none";
    }