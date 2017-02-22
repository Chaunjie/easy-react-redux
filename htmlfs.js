/**
 * Created by xudao on 17/2/22.
 */
var fs = require('fs');

function HtmlFs(options) {
    // Configure your plugin with options...
    this.options = options;
}

HtmlFs.prototype.apply = function(compiler) {
    var self = this;
    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
            var files = [];
            if( fs.existsSync(self.options.options.path) ) {
                var path = self.options.options.path;
                files = fs.readdirSync(path);
                files.forEach(function(file,index){
                    var curPath = path + "/" + file;
                    if(file.indexOf('index') > -1 || file.indexOf('manifest') > -1){
                        fs.unlink(curPath,function(){
                            console.log('删除'+file+'文件成功!');
                        });
                    }
                })
            }

            htmlPluginData.html = htmlPluginData.html.replace(/<script(.*)script>/g, '');
            callback(null, htmlPluginData);
        });
    });

};

module.exports = HtmlFs;
