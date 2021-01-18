const empty = '[Aguardando você]'

const generateQuizPodium = (podium = {}) => {
  return `
Pódio:

🥇 1º - ${(podium.first && podium.first.first_name) || empty}
🥈 2º - ${(podium.second && podium.second.first_name) || empty}
🥉 3º - ${(podium.third && podium.third.third_name) || empty}
`
}

module.exports = generateQuizPodium
