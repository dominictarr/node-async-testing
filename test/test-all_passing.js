<<<<<<< HEAD
var sys = require('sys')
=======
if (module == require.main) {
  return require('../lib/async_testing').run(process.ARGV);
}
>>>>>>> 2295251ccf52f6c31777e73e3663128d006facd9

module.exports = {
  'test A': function(test) {
    test.ok(true);
    test.finish();
  },

  'test B': function(test) {
    test.ok(true);
    test.finish();
  },

  'test C': function(test) {
    test.ok(true);
    test.finish();
  },

  'test D': function(test) {
    test.ok(true);
    test.finish();
  }
};
<<<<<<< HEAD

if (module == require.main) {
   //require('../lib/async_testing').run(__filename, process.ARGV);
   require('../lib/async_testing').runSuite(require(__filename),{
   	onSuiteDone:
   		function(report){sys.puts(sys.inspect(report));}
   });
}
=======
>>>>>>> 2295251ccf52f6c31777e73e3663128d006facd9
