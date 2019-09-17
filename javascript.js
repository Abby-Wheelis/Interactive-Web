var sayHi =function ()
{
    var node = document.createElement("p");
    console.log("node",node);
    node.innerText = "does this work?";
    
    var body = document.querySelector("body");
        body.appendChild(node);

    
    var button = document.querySelector("#1door1");
}