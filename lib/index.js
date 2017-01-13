'use strict';

/**
 * Create a new Source and add it to the
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
exports.export = function(mod) {
  const logger = new Logger({module: mod.name});

  mod._logger = logger;
};

class Logger {
  constructor(metadata) {
    this.metadata = Object.assign({}, metadata);
  }
}
