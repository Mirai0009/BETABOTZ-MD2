require("dotenv").config();

global.owner = ["6281944303681"]; // wajib di isi tidak boleh kosong
global.mods = ["6281944303681"]; // wajib di isi tidak boleh kosong
global.prems = ["6281944303681"]; // wajib di isi tidak boleh kosong
global.nameowner = "Mirai"; // wajib di isi tidak boleh kosong
global.numberowner = "6281944303681"; // wajib di isi tidak boleh kosong
global.mail = "sagirisagiriizumi@gmail.com"; // wajib di isi tidak boleh kosong
global.gc = "https://chat.whatsapp.com/I5Rsjsr"; // wajib di isi tidak boleh kosong
global.instagram = "https://www.instagram.com/kuriyamamirai"; // wajib di isi tidak boleh kosong
global.wm = "Mirai BOT"; // isi nama bot atau nama kalian
global.wait = "_*Tunggu sedang di proses...*_"; // ini pesan simulasi loading
global.eror = "_*Server Error*_"; // ini pesan saat terjadi kesalahan
global.stiker_wait = "*⫹⫺ Stiker sedang dibuat...*"; // ini pesan simulasi saat loading pembuatan sticker
global.qris = "https://i.ibb.co/20Xt4vVY/IMG-20250221-WA0000.jpg";
global.thumb = "https://telegra.ph/file/2968043b974e1eaebca88.jpg";
global.packname = "Made With"; // watermark stikcker packname
global.author = "Mirai BOT"; // watermark stikcker author
global.maxwarn = "3"; // Peringatan maksimum Warn
global.groupLapor = "120363216901617825@g.us"; // grub dimana bot mengirim laporan error dari user

global.autobio = false; // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false; // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false; // Set true/false untuk anti spam (default: false)
global.gcspam = false; // Set true/false untuk menutup grup ketika spam (default: false)


// Prefix dari bot
global.prefix = './#'

// APIKEY INI WAJIB DI ISI! //
global.lann = "Btz-sagiri07";
// global.lann = process.env.API_KEY_BETABOTZ;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.betabotz.eu.org

// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = "";
// global.aksesKey = process.env.API_KEY_BETABOTZ_AKSESKEY;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA
// fitur reminder dan kelola tugas, cek di youtube https://www.youtube.com/playlist?list=PLGv_-znSuMIwhZPH2y06HWisHZbn7dXL3
// global.taskToken = process.env.API_KEY_TOKEN;
global.taskToken = ""
//Daftar daftar di https://task.aniqu.biz.id


// Tidak boleh diganti atau di ubah
global.APIs = {
  lann: "https://api.betabotz.eu.org",
  taskToken: "https://task.aniqu.biz.id/", //OPSIONAL
};

//Tidak boleh diganti atau di ubah
global.APIKeys = {
  "https://api.betabotz.eu.org": global.lann,
  "https://task.aniqu.biz.id/": global.taskToken, //OPSIONAL
};

let fs = require("fs");
let chalk = require("chalk");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});
