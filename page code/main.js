function bring_arr(){
    var items = [];
    items = JSON.parse(localStorage.getItem("items") || "[]");
    return items;
}
function printTostack(items,name){
    var i;
    var text="";
    for (i = 0; i < items.length-1; i++) {
        item = "<img src='"+items[i]+"' class='instack'>";
        text +=item;
    }
    if(name != "")
        if(name=="pushing")
            item = "<img src='"+items[items.length-1]+"' class='pushing'>";
        else
            item = "<img src='"+items[items.length-1]+"' class='popping'>";
    else
    {
        item="";
    }
    text +=item;
    document.getElementById("stack").innerHTML = text;
}
function store(items){
    localStorage.setItem("items", JSON.stringify(items));
}
function push(){
    var items=[];
    items= bring_arr();
    let num = Math.floor(Math.random() * 5) + 1;
    let item = "images/book_"+num+".png" ;
    items.push(item);
    printTostack(items,"pushing");
    console.log(items);
    store(items);
}
function Pop(){
    var items=[];
    items= bring_arr();
    printTostack(items,"popping");
    console.log(items);
    items.pop();
    store(items);
}
function newStack(){
    var items=[];
    items= bring_arr();
    items = [];
    printTostack("","");
    store(items);
}
window.onbeforeunload = closingCode;
function closingCode(){
   newStack();
}
function sizeOfStack(){
    var items=[];
    items= bring_arr();
    size=items.length;
    document.getElementById("size").innerHTML= "The size of<br>the stack is:<br>" +size;

    setTimeout(function(){
        document.getElementById("size").innerHTML="";
    }, 5000);
}
function isEmpty(){
    var items=[];
    items= bring_arr();
    size=items.length;

    if(size>0)
        document.getElementById("empty").innerHTML= "The stack<br> is not empty";
    else
        document.getElementById("empty").innerHTML= "<img src='images/empty.gif' class='empty'>";

    setTimeout(function(){
        document.getElementById("empty").innerHTML="";
    }, 5000);
}
function swapElements(){
    var items=[];
    items= bring_arr();
    let temper=items[items.length-1];
    

}