/**
   * Create By Dika Ardnt.
   * Recode By Naze Dev
   * Contact Me on wa.me/254701309409
   * Follow https://github.com/Tela634
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['254701309409']
global.ownernomer = "254701309409"
global.premium = ['254701309409']
global.packname = 'Sticker By L E S T A'
global.author = 'L E S T A - P R O'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '9999999999999999'
global.jumhal = '9999999999999999'
global.jumlah = '100000000000000'
global.prefa = ['!','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done Join my group for much more ➜ https://chat.whatsapp.com/KJmsWPbJury9sE7lb67AOi',
    admin: 'Command for Group Admin !',
    botAdmin: 'Bot Must be made admin !',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa / Chat Owner',
    owner: ' Owner OF Bot COMMANDS ONLY👤',
    group: 'Command Only in Groups👥!',
    private: ' Text for Private Chat Only 🧖!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading🇰🇪🇰🇪🇰🇪🇰🇪,
    error: 'Error command!',
    errapi: 'Not Valid📵!',
    errmor: 'not Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 99999999999o
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/Tela634'
global.myyt = 'https://youtube.com/c/Nazedev'
global.myytv = 'https://youtu.be/FAsL-Jy4qLc'
global.mygc = "https://chat.whatsapp.com/KJmsWPbJury9sE7lb67AOi"

// Engak Ngaruh, Belum Kepasang
global.botname = 'LESTA-PRO'
global.akulaku = 'E L I U D'
global.ytname = 'YT LESTA' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
