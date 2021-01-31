function start(){
    //$("body").css("background-color", "pink");
}


$(window).on("load", start); //tells the browser to load the "start" function

function loadpage(e){ //trigger an event
    e.preventDefault(); //stop whatever the default functionality is (in this case loading a link)
    $("#menu a.active").removeClass("active") //select whatever items have the "active" class and remove it
    $(this).addClass("active"); //add the "active" class when the button is clicked
    
    $("#content").load("about.html");

}

$(document).on("click", "#menu a", loadpage); //tells the document to listen for a "click" on the menu links and run the "loadpage" function

