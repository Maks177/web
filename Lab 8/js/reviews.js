window.addEventListener('load', function() {
    function updateOnlineStatus(event) {
        if(isOnline()){
            reviewsOffline();
        }
    }
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

var index = 0;

function isOnline() {
    return window.navigator.onLine;
}


function check() {

    if (document.getElementById('Id').value == '') {
        alert("Введіть відгук");
        document.getElementById('Id');
        document.getElementById('name');
        return false;
    } else  (document.getElementById('name').value == ''){
        alert("Введіть ім'я")
        document.getElementById('Id');
        document.getElementById('name');

        return false;
    }
}
    if(isOnline())
    {
         var date = new Date;
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hours = date.getHours();

        var minutes=date.getMinutes();
         if (minutes < 10){
            minutes = '0' + minutes;
        }
        var author = document.getElementById('name').value;
        var text = document.getElementById('Id').value;
        var parElem = document.getElementById('back');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML =
            "<div class = container>" +
            "<div class='main-text'>" +
            "<br>" +
            "<span class='author'>" +" " + author + "</span>" +
            "<span class='date'>" + " " + day + '.' + month + '.' + year + ', ' + hours + ':' + minutes + "</span><p><br>" + text +
            "</p><br></div></div>";

        parElem.appendChild(out);
        document.getElementById('Form').reset();
    }

     else {

         var date = new Date;
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hours = date.getHours();

        var minutes=date.getMinutes();
         if (minutes < 10){
            minutes = '0' + minutes;
        }
        var author = document.getElementById('name').value;
        var text = document.getElementById('Id').value;
        index ++;
        var objects = [];
        objects.push({'author':author,'text':text1,'date':date});
        localStorage.setItem(index , JSON.stringify(objects));
    }


function reviewsOffline() {
    leng = localStorage.length+1;
    for (var i = 1; i < leng; i++){
        review = JSON.parse(localStorage.getItem(i));
        var parentElem = document.getElementById('back');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML =
              "<div class = container>" +
            "<div class='main-text'>" +
            "<br>" +
            "<span class='author'>" +" " + author[0] + "</span>" +
            "<span class='date'>" + " " + day[0] + '.' + month[0] + '.' + year[0] + ', ' + hours[0] + ':' + minutes[0] + "</span><p><br>" + text +
            "</p><br></div></div>";

        parentElem.appendChild(out);
        localStorage.clear();
    }   
}