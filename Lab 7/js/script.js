function check() {

    if (document.getElementById('Id').value == '') {
        alert("Введіть відгук");
        document.getElementById('Id');
        document.getElementById('name');
        return false;
    } else if (document.getElementById('name').value == ''){
        alert("Введіть ім'я")
        document.getElementById('Id');
        document.getElementById('name');

        return false;

    } else {

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
}

    function News(){
    if (document.getElementById('title').value == '' ||  document.getElementById('news_text').value =='' || document.getElementById('picture').value == '') {
        alert("Перевірте чи всі дані введено");
        document.getElementById('title');
        document.getElementById('news_text');
        document.getElementById('picture');
        return false;
    } else {

        document.getElementById('Form2').reset();
        alert("Новина успішно опублікована!");
    }
 }