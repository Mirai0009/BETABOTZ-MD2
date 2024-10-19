global.owner = ['6281944303681']  
global.mods = ['6281944303681'] 
global.prems = ['6281944303681']
global.nameowner = 'Mirai'
global.numberowner = '6281944303681'
global.mail = 'sagirisagiriizumi@gmail.com' 
global.gc = 'https://chat.whatsapp.com/G4f1fTpzfuckkH3FyIcaPR'
global.instagram = 'https://instagram.com/miraiwangy'
global.wm = 'Mirai Bot MD'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Created by'
global.author = 'Mirai Bot MD'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = '5xHuxUNk' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'rc7U7qAF'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': '5xHuxUNk', 
  'https://api.botcahx.eu.org': 'rc7U7qAF'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
