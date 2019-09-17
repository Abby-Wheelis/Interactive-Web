var sayHi =function ()
{
    
    var node = document.createElement("h1");
    console.log("node",node);
    node.innerText = "Game over";
    
    var body = document.querySelector("body");
        body.appendChild(node);

    
    var button = document.querySelector("#doorone");
}


function Function5 ()
{
    document.getElementById("doortwo").href="pagetwo.html";
    window.location = "pagetwo.html";
}