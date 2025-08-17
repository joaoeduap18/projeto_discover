function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
       if(html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light    
      img.setAttribute("src", "./imagens/4b3c7a47e23f0b89db9007c3927130e4.png")
     } else {
    //se tiver dark mode, manter a imagem atual
     img.setAttribute("src", "./imagens/avatar.png")
    }

}