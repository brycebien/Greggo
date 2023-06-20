var sayings = $(".saying");

//template for sayings
for(let i = 0; i < sayings.length; i++){
    if(i != 12){
        sayings[i].innerHTML = 'testing';
    }
}

//clicking a square activates it
var boxes = $(".tablestyle");

//adds isSelected property to each box
for(let i = 0; i < boxes.length; i++){
    Object.defineProperty(boxes[i], "isSelected", {value : 'false',
    writable : true,
    enumerable : true,
    configurable : true});
}

boxes.on('click',function(index){
    selected($(this), index.target.isSelected, index.target);
    console.log(index.target.isSelected);
})

function selected(box, isSelected, obj){
    if(isSelected == "false"){
        box.css("backgroundColor", "red");
        obj.isSelected = "true"
    }else{
        box.css("backgroundColor", "transparent");
        obj.isSelected = "false"
    }
}