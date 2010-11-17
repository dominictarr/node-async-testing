
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


exports['test-all_passing'] = function(test){
  var expect = 
      { tests: [
          {name: 'test A'
          //, status: 'success'
          }
        , {name: 'test B'
          //, status: 'success'
          }
        , {name: 'test C'
          //, status: 'success'
          }
        , {name: 'test D'
          //, status: 'success'
          }
        ]
      }
  
  runTest(test,__dirname + '/.async_testing_tests/test-all_passing',expect)
}

exports['test-async_assertions'] = function(test){
  var expect = 
      { tests: [
          { name: 'test success'
          //, status: 'success'
          }
        , { name: 'test fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , { name: 'test success -- numAssertions expected'
          //, status: 'success'
          }
        , { name: 'test fail -- numAssertions expected'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , { name: 'test fail - not enough -- numAssertions expected'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , { name: 'test fail - too many -- numAssertions expected'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-async_assertions',expect)
}

exports['test-custom_assertions'] = function(test){
  var expect = 
      { tests: [
          {name: 'test custom assertion pass'
          //, status: 'success'
          }
        , {name: 'test custom assertion fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        ]
      }
   
  runTest(test,__dirname + '/.async_testing_tests/test-custom_assertions',expect)
}

exports['test-custom_assertions'] = function(test){
  var expect = 
      { tests: [
          {name: 'test custom assertion pass'
          //, status: 'success'
          }
        , {name: 'test custom assertion fail'
          //, status: 'failure'
          , failureType: 'assertion'
          }
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-custom_assertions',expect)
}

exports['test-errors'] = function(test){
  var expect = 
      { tests: [
          {name: 'test sync error'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test async error'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-errors',expect)
}

exports['test-multiple_errors'] = function(test){
  var expect = 
      { tests: [
          {name: 'test async error 1'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test sync error'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test async error 2'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test async error 3'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-multiple_errors',expect)
}
exports['test-sync_assertions'] = function(test){
  var expect = 
      { tests: [
          {name: 'test success'
          //, status: 'success'
          }
        , {name: 'test fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , {name: 'test success -- numAssertions expected'
          //, status: 'success'
          }
        , {name: 'test fail -- numAssertions expected'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , {name: 'test fail - not enough -- numAssertions expected'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , {name: 'test fail - too many -- numAssertions expected'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-sync_assertions',expect)
}

exports['test-uncaught_exception_handlers'] = function(test){
  var expect = 
      { tests: [
          {name: 'test catch sync error'
          //, status: 'success'
          }
        , {name: 'test catch async error'
          //, status: 'success'
          }
        , {name: 'test sync error fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , {name: 'test async error fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , {name: 'test sync error async fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
        , {name: 'test async error async fail'
          //, status: 'failure'
          , failure: {}
          , failureType: 'assertion'
          }
/*        , {name: 'test sync error error again'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test async error error again'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test sync error error again async'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }
        , {name: 'test async error error again async'
          //, status: 'error'
          , failure: {}
          , failureType: 'error'
          }*/
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-uncaught_exception_handlers',expect)
}

exports['test-wrap_tests'] = function(test){
  var expect = 
      { tests: [
          {name: 'sync wrap → test'
          //, status: 'success'
          }
        , {name: 'async setup → test'
          //, status: 'success'
          }
        , {name: 'async teardown → test'
          //, status: 'error'
          }
  /*      , {name: 'test teardown → test'
          //, status: 'success'
          }
        , {name: 'test teardown async → test'
          //, status: 'success'
          }*/
        ]
      }
    
  runTest(test,__dirname + '/.async_testing_tests/test-wrap_tests',expect)
}


