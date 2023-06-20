var sayings = $(".saying");

//template for sayings
for(let i = 0; i < sayings.length; i++){
    if(i != 12){
        sayings[i].innerHTML = 'testing';
    }
}

//SELECTING BOXES
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
//sets background color and isSelected property when selected
function selected(box, isSelected, obj){
    if(isSelected == "false"){
        box.css("backgroundColor", "red");
        obj.isSelected = "true"
    }else{
        box.css("backgroundColor", "transparent");
        obj.isSelected = "false"
    }
}

//5 IN A ROW