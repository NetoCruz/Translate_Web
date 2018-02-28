function myFunction() {
    var x = document.getElementById("myText").value.toString();
      
    dividir(x)

    
 


}

function clearmi() {
 

  document.getElementById("demo").value =""
    odd_numbers = []
     

}


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
    $('label[id="feedback"]').text("idioma2");
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