const yargs = require('yargs');
const data = require('./data')

yargs.command({
    command: 'search',
    describe: 'search city or place to get weather condition',
    builder: {
        location: {
            describe: 'City or place name',
            demandOption: false,
            type: 'string'
        },
    },
    handler(argv)  {
        data.searchSpecificPlace(argv.location)
    }
});
yargs.parse()
data.getUserLocation()