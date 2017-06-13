var page;
var closeCallback;

exports.onShowingModally = function(args) {
    page = args.object;
    page.bindingContext = args.context;
    closeCallback = args.closeCallback;
}

exports.tapClose = function() {
    closeCallback();
}