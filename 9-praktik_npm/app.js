const validator = require('validator');
(async() => {
    const chalk = await import('chalk')
    // console.log(chalk.default.italic.bgBlue.black('Hello dunia'))
    const pesan = chalk.default`lorem,cksdmc  {bgBlue aack dsmd} msdmcs csmos`;

    // console.log(chalk.default.bgRed.black(pesan))
    console.log(pesan)
})();
// console.log(validator.isEmail('ujang@gmail.com'));
// console.log(validator.isMobilePhone('085455456789','id-ID'));
// console.log(validator.isNumeric('085455456789'));


