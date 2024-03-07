const dia = document.querySelector('.dia .adormecido')
const hora = document.querySelector('.hora .adormecido')
const minuto = document.querySelector('.minuto .adormecido')
const segundo = document.querySelector('.segundo .adormecido')

const textoFinal = document.querySelector('.contagem_regressiva')
const titulo = document.querySelector('.titulo')
const footer = document.querySelector('.footer')

function formatarDigitos(tempo) {
  return `0${tempo}`.slice(-2) //! - (menos) corta da direita para esquerda
}

var tempo = setInterval(() => {
  var dataAtual = new Date().getTime()
  var dataDeLançamento = new Date('mar 06, 2024 22:20:00').getTime()
  var duracao = dataDeLançamento - dataAtual

  var dias = Math.floor(duracao / (1000 * 60 * 60 * 24))
  var horas = Math.floor((duracao % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((duracao % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((duracao % (1000 * 60)) / 1000)

  dia.innerHTML = formatarDigitos(dias)
  hora.innerHTML = formatarDigitos(horas)
  minuto.innerHTML = formatarDigitos(minutes)
  segundo.innerHTML = formatarDigitos(seconds)

  if (duracao < 0) {
    clearInterval(tempo)
    textoFinal.innerHTML = 'O tempo foi finalizado!'
    titulo.innerHTML = ''
    footer.classList.add('remove') // remove descricao, formulario e social
  }
}, 1000)