var imagens = [ "TheSimpsons.jpg",
                "homer.png",
               "bart.png",
               "lisa.png",
               "marge.png",
                "maggie.png"
                 ];
var legenda  =  ["Familia Simpsons",
                "Homer",
                 "Bart",
                 "Lisa",
                 "Marge",
                 "Maggie"
                ];  
   var i = 1             
function proximo(){
var proximaimagen = imagens [i]
var proximalegenda = legenda [i]       

document.getElementById("TheSimpsons").src=proximaimagen;
document.getElementById("legenda").innerHTML=proximalegenda;

i++;
if(i>5){
 i=0;
}
}