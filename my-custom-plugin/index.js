const path = require('path');

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
    // message.type
    const jsonData = JSON.stringify(message.data);
    console.log(message.type);
    console.log(message.group);
    console.log(message.url);
    console.log(message.runIndex);
    // console.log(message);
    console.log(jsonData);
  },
  close(options, errors) {
    // When all URLs are finished all plugins close function is called once.
    // Options are the configuration options and errors a array of errors
    // from the run.
  }
};
