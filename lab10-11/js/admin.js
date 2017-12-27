var i = 0;

function isOnline() {
    return window.navigator.onLine;
}

function AddNews() {
    if (($('#longdescription').val()==="") || ($('#shortdescription').val()==="") || ($('#title').val()==="")) {
        alert('Заповніть всі дані');
        return false;
    }

    if (isOnline()) {
         var data = {
            title:  $('#title').val(),
            shortdescription: $('#shortdescription').val(),
            longdescription: $('#longdescription').val()
          }
          $.ajax({
              url: 'http://localhost:8080/api/bears',
              type: "post",
              dataType: "json",
              data: data
          });
        }


    else {
        if (useLocalStorage){
            i++;
            var list = [];
            list.push({
                "name": $('#title').val(),
                "shortdescription": $('#shortdescription').val(),
                "longdescription": $('#longdescription').val()
            });
            localStorage.setItem(i, JSON.stringify(list));
        }
        else {
            var transaction = db.transaction(["news"], "readwrite");
            var store = transaction.objectStore("news");
            var news1 = {
                name: $('#title').val(),
                shortdescription: $('#shortdescription').val(),
                longdescription: $('#longdescription').val()
            };
            store.add(news1);
        }
    }
    $('#longdescription').val('');
    $('#shortdescription').val('');
    $('#title').val('');
}
