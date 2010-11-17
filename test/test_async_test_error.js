
if (module == require.main) {
  require('async_testing').run(__filename, process.ARGV);
}

var MetaTest = require('meta_test')
, subtree = require('meta_test/subtree')
, inspect = require('util').inspect

function runTest (test,filename,expected){
  var m = MetaTest()
  
  m.run(filename,{onSuiteDone: suiteDone})
  
  function suiteDone(status,report){
//      console.log("test : " + inspect(test))
      console.log("expected: ")
      console.log(inspect(expected))
      console.log("report: ")
      console.log(inspect(report))
      subtree.assert_subtree(expected,report)
      test.finish();
  } 
}

exports['test-error_test_already_finished'] = function(test){
  var expect = 
      { error: 
        {name: 'TestAlreadyFinishedError'}
      , tests: ['test sync already finished']
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-error_test_already_finished',expect,'error')
}

exports['test-error_test_already_finished_async'] = function(test){
  var expect = 
      { error: 
        {name: 'TestAlreadyFinishedError'}
      , tests: ['test async already finished']
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-error_test_already_finished_async',expect,'error')
}
exports['test-error_test_already_finished_then_assertion'] = function(test){
  var expect = 
      { error: 
        {name: 'TestAlreadyFinishedError'}
      , tests: ['test sync already finished then assertion']
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-error_test_already_finished_then_assertion',expect,'error')
}


