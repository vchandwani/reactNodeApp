if(process.env === 'production') {
    module.export = require('./prod');
} else {
    module.export = require('./dev');
}