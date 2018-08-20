var exec = require('child_process').exec;
var INTERVAL_TIMER = 3600 * 1000;


function Syncron(arg) {
  var date = new Date();
  console.log('Date: ' + date);

  exec('/bin/dnsUpdater.sh', function callback(error, stdout, stderr) {
    if (error != undefined) {
      console.error(stderr);
    } else {
      console.info(stdout);
    }

    setTimeout(Syncron, INTERVAL_TIMER, 'Sync');
  });
}

setTimeout(Syncron, INTERVAL_TIMER, 'Sync');
