
// Resources
// Importing JavaScript: http://stackoverflow.com/questions/1947263/ddg#1947531

let isDarkModeOn = false;

function doDarkModeOn() {
    if ( isDarkModeOn === true )
    {
        // Replace theme CSS with /css/darkMode.css
        // document.getElementById( "wrap-content").className = "darkMode";

        // Change   background  >   black
        //          text        >   white
        document.getElementById( "wrap-content").setAttribute("background-color","black");
        document.getElementById( "wrap-content").setAttribute("color","white");
    }
    else
    {
        // Replace theme CSS with /css/(default).css

        // Change   background  >   white
        //          text        >   black
        document.getElementById( "wrap-content").setAttribute("background-color","white");
        document.getElementById( "wrap-content").setAttribute("color","black");
    }
}

function doSwitchDarkMode() {

    ////// For Debug
    // Replace theme CSS with /css/darkMode.css
    // document.getElementById( "wrap-content").className = "darkMode";

    // Change   background  >   black
    //          text        >   white
    document.getElementById( "wrap-content").setAttribute("style", "background-color: black; color: white;");

    // // if ( darkMode == false ) { isDarkMode = true } else { isDarkMode = false }
    // // but simplified
    // isDarkModeOn === false ? isDarkModeOn = true : isDarkModeOn = false;
    //
    // doDarkModeOn ( isDarkModeOn ) ;
}

document.getElementById("clickMe").onclick = doSwitchDarkMode;
