/**
 * Created by xudao on 17/2/22.
 */
var fs = require('fs');

function Config(options) {
    this.options = options;
    this._init();
}

Config.prototype._init = function() {
    var self = this;
    if( fs.existsSync(self.options.path) ) {
        var path = self.options.path;
        var originalConfigurationService = fs.readFileSync(path);

        fs.writeFileSync(self.options.path, originalConfigurationService.toString()
            .replace(/\{hashHistory\}/, '{browserHistory}'), 'utf-8');
    }
};


module.exports = Config;
