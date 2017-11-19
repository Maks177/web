window.addEventListener('load', function() {
    function updateOnlineStatus(event) {
        if(isOnline()){
            newsOffline();
        }
    }
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

var index = 0;

function isOnline() {
    
    return window.navigator.onLine;
    
}

function newsOffline() {
    leng = localStorage.length+1;
    for (var index = 1; index < leng; index++){
        news = JSON.parse(localStorage.getItem(index));
        localStorage.clear();
    }
}


