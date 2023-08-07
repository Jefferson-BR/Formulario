function lines (){
    let sizeW = Math.random() * 12
    let duration = Math.random() * 3
    let animacao = document.createElement('div')
    animacao.setAttribute('class', 'circle')
    document.body.appendChild(animacao)
    animacao.style.width = 2+sizeW+'px'
    animacao.style.left = Math.random() * + innerWidth + 'px'
    animacao.style.animationDuration = 2 + duration+'s'

    setTimeout(function(){
        document.body.removeChild(animacao)
    }, 5000)
}
setInterval(function(){
    lines()
}, 1600)