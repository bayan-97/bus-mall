'use strict';
var itemsSection = document.getElementById('allitems');
var allitems=[];
var firItemsindex; 
var midItemsindex;
var secItemsindex;
var  totalClicks=0;
function Items(path,name){
    this.path=path
    this.name=name
  
    this.userClicks=0;
    this.itemofItemShown=0;
    allitems.push(this);

}
var names=["./imges/bag.jpg","./imges/banana.jpg ","./imges/bathroom.jpg",
"./imges/boots.jpg ","./imges/breakfast.jpg ","./imges/bubblegum.jpg ",
"./imges/chair.jpg ","./imges/cthulhu.jpg ","./imges/dog-duck.jpg ",
"./imges/dragon.jpg ",'./imges/pen.jpg ','./imges/pet-sweep.jpg ',
"./imges/scissors.jpg ","./imges/shark.jpg ","./imges/sweep.png",
"./imges/tauntaun.jpg","./imges/unicorn.jpg","./imges/usb.gif",
"./imges/water-can.jpg","./imges/wine-glass.jpg"
];
var namesitems=["bag","banana","bathroom","boots","breakfas","bubblegum",
"chair","cthulhu","dog-duck","dragon","pen","pet-sweep","scissors","shark",
"tauntaun","banana","unicorn","usb","water-can","wine-glass"

];

for (let i = 0; i < names.length; i++) {
    new Items(names[i],namesitems[i])

}
generateRandomImg();

itemsSection.addEventListener('click', itemClickHandler);


function generateRandomImg() {
    var firItems = document.getElementById('itemfir');
    var midItems = document.getElementById('itemmid');
    var secItems = document.getElementById('itemsec');
    firItemsindex= generateRandomnumber();
    midItemsindex=generateRandomnumber();
    secItemsindex=generateRandomnumber();
    while(firItemsindex===midItemsindex  ||firItemsindex===secItemsindex ||midItemsindex===secItemsindex  ) {
     
        firItemsindex= generateRandomnumber();
        midItemsindex=generateRandomnumber();
        secItemsindex=generateRandomnumber();

    }
    var firPath = allitems[firItemsindex].path;
    var midPath = allitems[midItemsindex].path;
    var secPath = allitems[secItemsindex].path;

    allitems[firItemsindex].itemofItemShown += 1;
    allitems[midItemsindex].itemofItemShown += 1;
    allitems[secItemsindex].itemofItemShown += 1;


    firItems.setAttribute('src',firPath);
   midItems.setAttribute('src', midPath);
   secItems.setAttribute('src', secPath);
    
}

function  generateRandomnumber(){
    return Math.floor(Math.random() * allitems.length );
}

function  itemClickHandler() {
    if (totalClicks < 25 ){
        var clickedElement = event.target;
        var clickedElementId = clickedElement.id;

        if(clickedElementId === 'itemfir' || clickedElementId === 'itemmid'||clickedElementId === 'itemsec' ){
            totalClicks +=1;

            if(clickedElementId === 'itemfir'){
                allitems[firItemsindex].userClicks +=1;
            }

            if(clickedElementId === 'itemmid'){
               allitems[secItemsindex].userClicks +=1;
            }
            if(clickedElementId === 'itemsec'){
               allitems[secItemsindex].userClicks +=1;
            }

           

        }
        generateRandomImg();
      
    }else{
        generateUserMessage();
       itemsSection.removeEventListener('click', itemClickHandler);

    }

}
   
    
    function generateUserMessage(){
        var ulElement = document.getElementById('result-to-user');    
        
        for (let index = 0; index <allitems.length; index++) {
            var listItem = document.createElement('li');
            listItem.textContent = allitems[index].name +":"+"  Slicer had  "+allitems[index].userClicks+ "  votes "+" and was shown " +allitems[index].itemofItemShown +"."
            ulElement.appendChild(listItem);
        }
    
    }