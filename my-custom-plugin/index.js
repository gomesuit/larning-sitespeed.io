const path = require('path');
const util = require('util');

function shouldIgnoreMessage(message) {
  return ['url', 'error', 'summarize','browsertime.screenshot', 'browsertime.har', 'webpagetest.har'].indexOf(message.type) >= 0;
}

module.exports = {
  name() {
    // This is ... shocking news: the name of the plugin
    return path.basename(__dirname);
  },

  open(context, options) {
    // when sitespeed.io start it calls the open function once for all plugins
    // the context holds information for this specific run that
    // generated at runtime, for example you can get hold of the storageManager
    // that stores files to disk.
    // The options is the configuration supplied for the run.
    console.log(`context: \n${util.inspect(context,false,null)}`);
    console.log(`options: \n${util.inspect(options,false,null)}`);
  },
  processMessage(message, queue) {
    if (shouldIgnoreMessage(message)) {
      return;
    }
    if (message.type != 'browsertime.summary') {
      return;
    }
    // The plugin will get all messages sent through the queue
    // and can act on specific messages by type:
    console.log(`message: \n${util.inspect(message,false,null)}`);
    // console.log(`queue: \n${util.inspect(queue,false,null)}`);
    const jsonData = JSON.stringify(message.data);
    // console.log(`message: ${message}`);
    // console.log(`message.type: ${message.type}`);
    // console.log(`message.group: ${message.group}`);
    // console.log(`message.url: ${message.url}`);
    // console.log(`message.runIndex: ${message.runIndex}`);
    // console.log(`message.data: ${message.data}`);
    // console.log(jsonData);
    // console.log(`jsonData: ${jsonData}`);
  },
  close(options, errors) {
    // When all URLs are finished all plugins close function is called once.
    // Options are the configuration options and errors a array of errors
    // from the run.
    console.log(`options: \n${util.inspect(options,false,null)}`);
    console.log(`errors: \n${util.inspect(errors,false,null)}`);
  }
};
