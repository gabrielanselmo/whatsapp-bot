const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))


exports.textTnC = () => {
    return `
O Biel BOT é open-source (código aberto), isso o torna 100% gratuito e livre para você criar seu próprio bot de whatsapp

Ao usar este código-fonte/bot, você concorda com os seguintes Termos e Condições:
- O bot não armazena seus dados em nossos servidores.
- O bot não é responsável por seus pedidos para este bot.
- Você pode ver o código-fonte/bot em https://github.com/gabrielanselmo/whatsapp-bot

Instagram: https://instagram.com/biell_anselmo/

Best regards, Biel Anselmo.`
}


exports.textMenu = (pushname) => {
    return `
Olá, ${pushname}! 👋️
Aqui estão alguns dos recursos deste bot!✨

Criador:

-❥ *${prefix}cooltext*
-❥ *${prefix}logopornhub*
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif*
-❥ *${prefix}stickergiphy*
-❥ *${prefix}meme*
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

Download:
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*
-❥ *${prefix}facebook*

Pesquise:
-❥ *${prefix}dewabatch*
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}movie*
-❥ *${prefix}whatanime*

Imagens aleatórias:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Etc...:
-❥ *${prefix}grouplink*
-❥ *${prefix}revoke*

Sobre o bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot*
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-❥ *${prefix}ban* 
-❥ *${prefix}bc* 
-❥ *${prefix}leaveall* p
-❥ *${prefix}clearall* 

Espero que você tenha um ótimo dia!✨`
}


exports.textAdmin = () => {
    return `
⚠ [ *Apenas para admin do grupo* ] ⚠ 
aqui estão os recursos de administração de grupo disponíveis neste bot!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Apenas para dono do grupo* ] ⚠
A seguir está o recurso de proprietário do grupo neste bot!

-❥ *${prefix}kickall*
`
}


exports.textDonasi = () => {
    return `
O Biel BOT é open-source (código aberto), isso o torna 100% gratuito para uso (ou para criar seu prórpio bot), mas se mesmo assim você deseja ajudar, pode efetuar um donate com qualquer valor no link abaixo:

https://embreve.com/

A doação será usada para o desenvolvimento e operação deste bot.

Obrigado. -Biel Anselmo`
}
