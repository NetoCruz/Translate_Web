function myFunction() {
    var x = document.getElementById("myText").value.toString();
      
    

    if (document.getElementById("r1").checked) {
    
    dividir(x)
 }
 if (document.getElementById("r2").checked) {
    
    dividir2(x)
 }
 


}

function clearmi() {
 

  document.getElementById("demo").value =""
    odd_numbers = []
     

}

////////////////////////////////////////////////////////////
var odd = []

function dividir2(str){
 var array= str
 const res=array.split(" ")
 res.forEach(change)
document.getElementById("demo").value =odd.join(" ");
 console.log(`${odd}`)
 
}

function change(str){
 const word= str
  var odd_numbers = " "
 odd_numbers=word
 
  if (odd_numbers.includes("o")) {
    
    //const v=word.replace("o", "ofo")
    odd_numbers=odd_numbers.replace("o", "ofo");
    
    //console.log(`${v}`)
   }
   if (odd_numbers.includes("a")) {
    
  //const v=word.replace("o", "ofo")
    odd_numbers=odd_numbers.replace("a", "afa");
    
    //console.log(`${v}`)
   }
   if (odd_numbers.includes("i")) {
    
  //const v=word.replace("o", "ofo")
    odd_numbers=odd_numbers.replace("i", "ifi");
    
    //console.log(`${v}`)
   }
   if (odd_numbers.includes("e")) {
    
  //const v=word.replace("o", "ofo")
    odd_numbers=odd_numbers.replace("e", "efe");
    
    //console.log(`${v}`)
   }

odd.push(odd_numbers)

//console.log(`${odd_numbers}`)
}
//////////////////////////////////////////////////////////////





var odd_numbers = []


function dividir(j){
 var array= j
 const res=array.split(" ")
 res.forEach(translate)
 document.getElementById("demo").value =odd_numbers.join(" ");
console.log(`${odd_numbers}`)

}


function translate(str){
	const word= str
	
	odd_numbers.push(word.slice(0,-1)+"i")

}



$('input[value="1"]').on('change', function() {
    $('label[id="feedback"]').text("idioma");
    $(botones).css({ "background-color": "#533A71" });

});

$('input[value="2"]').on('change', function() {
    $('label[id="feedback"]').text("Idioma de la F");
    $(botones).css({ "background-color": "#6184D8" });
   
});

$('input[value="3"]').on('change', function() {
    $('label[id="feedback"]').text("idioma3");
    $(botones).css({ "background-color": "#51A3A3" });
});



  
    // bucle del 1 al 5
    // for(var i=0;i<=res.length;i++)
    // {
    	
    //


 //    document.getElementById("demo").innerHTML = element.toString()
 // res.forEach(function(element){
      
 //       element.slice(0,-1)+"i"
 //       })




    // //console.log(`${res[i]}`)

    
    // }

   
//res[i].slice(0,-1)+"i"
 
 //console.log(`${miArray[1]}`)
 
 //translate(res)
 


// function translate(str){
// 	var trans = str
// 	const tr= trans.slice(0,-1)+"i"
//    console.log(`${tr}`)
// }
// .slice(0,-1)+"i"