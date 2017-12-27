var useLocalStorage = true;

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

    if (document.getElementById('Id').value == '')
     {
        alert("Введіть відгук");
      
        
    }
     if (document.getElementById('name').value == '') 
    {
        alert("Введіть ім'я");
            
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
        if (useLocalStorage) {
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
        
        index++;
        var object = [];
        object.push({'author': author, 'text': text, 'date': day, month, year, hours, minutes})
        localStorage.setItem(index, JSON.stringify(object));

        }  
        else {
            var transaction = db.transaction(["reviews"], "readwrite");
            var store = transaction.objectStore("reviews");
            var review = {
                message: document.getElementById('Id').value,
                author: document.getElementById('name').value,
                time: new Date
            };
            store.add(review);
            }
        
    document.getElementById('Form').reset();
   }
}

   function reviewsOffline() {
    if (useLocalStorage) {
       leng= localStorage.length + 1;
       for (var index = 1; index < leng; index++) {
        review=JSON.parse(localStorage.getItem(index));
        var parentElem = document.getElementById('back');
        var out = document.createElement('div');
        out.id = 'reviews';
        out.innerHTML = 
         "<div class = container>" +
            "<div class='main-text'>" +
            "<br>" +
            "<span class='author'>" +" " + review[0].author + "</span>" +
            "<span class='date'>" + " " + review[0].day + '.' + review[0].month + '.' + review[0].year + ', ' + review[0].hours + ':' + review[0].minutes + "</span><p><br>" + review[0].text +
            "</p><br></div></div>";
            parentElem.appendChild(out);
            localStorage.removeItem(index);
       }
   }
   else {
        var transaction = db.transaction(["reviews"], "readonly");
        var store = transaction.objectStore("reviews");
        store.openCursor().onsuccess = function (e) {
            var cursor = e.target.result;
            if (cursor) {
                cursor.continue();
                var parentElem = document.getElementById('back');
                var out = document.createElement('div');
                out.id ='reviews'
                out.innerHTML = 
                    "<div class = container>" +
                    "<div class='main-text'>" +
                    "<br>" +
                    "<span class='author'>" +" " + cursor.value.author + "</span>" +
                    "<span class='date'>" + " " + cursor.value.time + "</span><p><br>" + cursor.value.message +
                    "</p><br></div></div>";
                parentElem.appendChild(out);
            }
        }
    }
}