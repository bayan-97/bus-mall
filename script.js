'use strict';
var itemsSection = document.getElementById('allitems');
var allitems=[];
var firItemsindex; 
var midItemsindex;
var secItemsindex;
var  totalClicks=0;
var userClicks=[];

var itemsUniq=[];


var itemofItemShown=[];
function Items(path,name){
    this.path=path
    this.name=name
    this.uniq=true;
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
    var itemsindex=[];
   
//    for (let i = 0; i < itemsindex.length; i++) {
//     itemsindex.pop(itemsindex[i]);
//     }
   
    var firItems = document.getElementById('itemfir');
    var midItems = document.getElementById('itemmid');
    var secItems = document.getElementById('itemsec');
    firItemsindex= generateRandomnumber();
    midItemsindex=generateRandomnumber();
    secItemsindex=generateRandomnumber();
   
    console.log(itemsUniq.includes(firItemsindex) , itemsUniq.includes(secItemsindex),itemsUniq.includes(midItemsindex));
    // if(itemsUniq.includes(firItemsindex) || itemsUniq.includes(secItemsindex)||itemsUniq.includes(midItemsindex)) {

       
    //     generateRandomImg();
    //     console.log("10");
       
    //      }
    // checker(firItemsindex,secItemsindex,midItemsindex)
    
    
    
    while(firItemsindex===midItemsindex  ||firItemsindex===secItemsindex ||midItemsindex===secItemsindex  ) {
         console.log(itemsUniq.includes(firItemsindex) , itemsUniq.includes(secItemsindex),itemsUniq.includes(midItemsindex));
        
         firItemsindex= generateRandomnumber();
         midItemsindex=generateRandomnumber();
         secItemsindex=generateRandomnumber();
        //   checker(firItemsindex,secItemsindex,midItemsindex);
    }
    // checker(firItemsindex,secItemsindex,midItemsindex);
    console.log(itemsUniq.includes(firItemsindex) , itemsUniq.includes(secItemsindex),itemsUniq.includes(midItemsindex));

//  if ( !allitems[ firItemsindex]) {
     
//  }


  
    // while(itemsUniq.includes(firItemsindex) || itemsUniq.includes(secItemsindex)||itemsUniq.includes(midItemsindex)) {

       
    //     firItemsindex= generateRandomnumber();
    //     midItemsindex=generateRandomnumber();
    //     secItemsindex=generateRandomnumber();
       
    //      }
         

     console.table( itemsindex);
    allitems[firItemsindex].itemofItemShown += 1;
    
    allitems[midItemsindex].itemofItemShown += 1;

    allitems[secItemsindex].itemofItemShown += 1;
    
   

   
    var firPath = allitems[firItemsindex].path;
    var midPath = allitems[midItemsindex].path;
    var secPath = allitems[secItemsindex].path;
    firItems.setAttribute('src',firPath);
    midItems.setAttribute('src', midPath);
   secItems.setAttribute('src', secPath);
   itemsindex.push(firItemsindex);
   itemsindex.push(midItemsindex);
   itemsindex.push(secItemsindex);
   
   itemsUniq=[];
   for (let i = 0; i < 3; i++) {
       
    itemsUniq.push(itemsindex[i]);
    }
    // console.table(itemsUniq);
// allitems[firItemsindex].uniq=false;   
// allitems[midItemsindex].uniq=false;
// allitems[secItemsindex].uniq=false;

  
  
  
    
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
        arryClick() 
        generateUserMessage();
        generateMyChart()
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
    function arryClick() {
        for (let i3 = 0; i3 < allitems.length; i3++) {
            userClicks.push(allitems[i3].userClicks);
            itemofItemShown.push(allitems[i3].itemofItemShown)
        }
        
    }

    function generateMyChart(){

        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(ctx, {
          type: 'bar',
          data: {
            labels:namesitems ,
            datasets: [{
              label: '# of views',
              data:itemofItemShown,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 177, 64, 0.2)',
                'rgba(255, 180, 64, 0.2)',
                'rgba(255, 175, 64, 0.2)',
                'rgba(255, 165, 64, 0.2)',
                'rgba(255, 160, 64, 0.2)',
                'rgba(255, 170, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels:namesitems ,
            datasets: [{
              label: '# of Clicks',
              data: userClicks,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 177, 64, 0.2)',
                'rgba(255, 180, 64, 0.2)',
                'rgba(255, 175, 64, 0.2)',
                'rgba(255, 165, 64, 0.2)',
                'rgba(255, 160, 64, 0.2)',
                'rgba(255, 170, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
    }

// var exam=[1,2,3];
    function checker(it1,it2,it3) {
        while(itemsUniq.includes(it1) || itemsUniq.includes(it2)||itemsUniq.includes(it3)) {
            // firItemsindex+=1
            // midItemsindex+=1
            // secItemsindex+=1
            generateRandomImg();
       console.log("10");
            
        }
        
    }