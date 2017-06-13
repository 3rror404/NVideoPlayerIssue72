
var page;

function onNavigatingTo(args) {
    page = args.object;
}
exports.onNavigatingTo = onNavigatingTo;

exports.tapOpenVideo = function(args) {
    page.showModal('video-player-modal', {}, function closeCallback(){
        console.log('modal closed');    
    }, false);
}