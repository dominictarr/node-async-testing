var running = require('./running');
exports.run = running.run;
exports.registerRunner = running.registerRunner;

var testing = require('./testing');
exports.runSuite = testing.runSuite;
exports.runFile = testing.runFile;
exports.expandFiles = testing.expandFiles;
exports.registerAssertion = testing.registerAssertion;

var wrap = require('./wrap');
exports.wrap = wrap.wrap;
<<<<<<< HEAD

// deprecated
exports.wrapTests = function(obj, wrapper) {
  console.log('`wrapTests` is deprecated, use `wrap` instead');
  for(var key in obj) {
    obj[key] = wrapper(obj[key]);
  }
}


=======
>>>>>>> 2295251ccf52f6c31777e73e3663128d006facd9
