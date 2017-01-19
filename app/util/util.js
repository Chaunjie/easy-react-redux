/**
 * Created by xudao on 16/12/30.
 */

const Util = {
    returnPromiseResponse: function(res){
        return new Promise(function (resolve, reject) {
            return res.then(function (response) {
                return response['json']().then(function (json) {
                    resolve(json);
                }, function(err){
                    reject(err);
                });
            })
        });
    }
}

module.exports = Util;
