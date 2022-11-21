
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>  {
     
      setTimeout(() =>{
          elemento.innerHTML +=letra;
      }, 75 * i)
    });
    //console.log(textoArray);
  }
  const titulo = document.querySelector(".dev");
  
  typeWrite(titulo);

  
console.log("Teste");


  $(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll < 1) {
        $('.menu-nav').css('background-color','s');
    } else if (scroll > 500) {
        $('.menu-nav').css('background-color','yellow');
    } else {
        $('.menu-nav').css('background-color','blue');
        
    }

    
});

