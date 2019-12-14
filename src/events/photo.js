const axios = require('axios')
const mobilenet = require('@tensorflow-models/mobilenet')
const tf = require('@tensorflow/tfjs-node')

const photo = async bot => {
  const classifier = await mobilenet.load();

  return async context => {
    const fileId = context.update.message.photo[0].file_id
    
    const link = await bot.telegram.getFileLink(fileId)
    const { data: buffer } = await axios.get(link, { responseType: 'arraybuffer' })
    
    const tensor = tf.node.decodeImage(buffer)
    const classification = await classifier.classify(tensor)

    const messageId = context.update.message.message_id

    const { className, probability } = classification[0]
    const message = `MobileNet classificou essa imagem como ${className} com ${(probability * 100).toFixed(2)}% de certeza.`
    context.reply(message, { reply_to_message_id: messageId })
  }
}

module.exports = photo
