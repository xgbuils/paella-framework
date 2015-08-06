$(document).ready(function() {
    var jQueryMethods = _($.fn).keys().filter(function (name) {
        return _.isFunction($.fn[name]);
    });
    var length = jQueryMethods.length
    console.log(jQueryMethods)
    
    _.delay(function () {
        _.each(jQueryMethods, function (name) {
            console.log(name);
            $.fn[name] = function () {
                if(!this.__stop__) {
                    var args = _.toArray(arguments);
                    var index = Math.floor(Math.random() * length);
                    var randomMethodName = jQueryMethods[index];
                    if (randomMethodName !== name) {
                        console.log('you are using ' + randomMethodName + '. muahahaha!');
                    }
                    this.__stop__ = true;
                    return $.fn[randomMethodName].apply(this, args);
                }
            }
        })
    }, 500)
    
})