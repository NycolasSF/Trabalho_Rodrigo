var myText = document.getElementById("descricao");
var wordCount = document.getElementById("mostrarCaractere");
myText.addEventListener("keyup",function(){
	var characters = myText.value.split('');
  wordCount.innerText = characters.length;
  if(characters.length > 50){
  	myText.value = myText.value.substring(0,50);
    wordCount.innerText =  50;
    if (wordCount = 50) {
      alert('Chegou no limite');
    }
  }
});
