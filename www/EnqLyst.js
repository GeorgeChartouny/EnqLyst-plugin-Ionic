var exec = require('cordova/exec');

module.exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'EnqLyst', 'coolMethod', [arg0]);
};

module.exports.hello = function (arg0, success, error){
    exec(success, error, 'EnqLyst', 'hello', [arg0]);
}
