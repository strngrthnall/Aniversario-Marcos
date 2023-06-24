
const dataDoAniversario = new Date('Jun 28, 2023 21:00:00')
const timestampDoAniversario = dataDoAniversario.getTime()

function calcula(distanciaTimestamp) {

  const segundoEmMs = 1000
  const minutosEmMs = segundoEmMs * 60
  const horasEmMs = minutosEmMs * 60
  const diaEmMs = horasEmMs * 24

  const diasAteAniversario = Math.floor(distanciaTimestamp / diaEmMs)
  const horasAteAniversario = Math.floor(Math.floor(distanciaTimestamp % diaEmMs) / horasEmMs)
  const minutosAteAniversario = Math.floor(Math.floor(distanciaTimestamp % horasEmMs) / minutosEmMs)
  const segundoAteAniversario = Math.floor(Math.floor(distanciaTimestamp % minutosEmMs) / segundoEmMs)

  const listaData = [diasAteAniversario, horasAteAniversario, minutosAteAniversario, segundoAteAniversario]

  for(var i in listaData) {
    if(i < 0) {
      if(listaData[i] <= 9) {
        listaData[i] = listaData[i].toString().padStart(2, '0')
      }
    }
  }
  return listaData
}

const contaAsHoras = setInterval(() => {
  const agora = new Date()
  const timeStampAtual = agora.getTime()

  const distanciaAteAniversario = timestampDoAniversario - timeStampAtual

  
  if(distanciaAteAniversario < 0) {
    const dataDoAniversario = new Date('Jun 28, 2024 21:00:00')
    const timestampDoAniversario = dataDoAniversario.getTime()
    const mesAniversario = dataDoAniversario.getMonth() + 1
    const anoAniversario = dataDoAniversario.getFullYear()
    const diaAniversario = dataDoAniversario.getDate()

    const distanciaAteAniversario = timestampDoAniversario - timeStampAtual

    const listaData = calcula(distanciaAteAniversario)

    console.log(listaData)

    document.getElementById('data').innerHTML = `${diaAniversario}/${mesAniversario}/${anoAniversario}`
    document.getElementById("hero--show--after").classList.add("container--show")
    document.getElementById('contador-depois').innerHTML = `${listaData[0]} Dias, ${listaData[1]}:${listaData[2]}:${listaData[3]}`

  } else {
    const mesAniversario = dataDoAniversario.getMonth()
    const anoAniversario = dataDoAniversario.getFullYear()
    const diaAniversario = dataDoAniversario.getDate()

    const listaData = calcula(distanciaAteAniversario)

    document.getElementById('data').innerHTML = `${diaAniversario}/${mesAniversario}/${anoAniversario}`
    document.getElementById("hero--show--before").classList.add("container--show")
    document.getElementById('contador-antes').innerHTML = `${listaData[0]} Dias, ${listaData[1]}:${listaData[2]}:${listaData[3]}`
  }

}, 1000)