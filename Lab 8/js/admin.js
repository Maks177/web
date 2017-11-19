var index = 0;

function isOnline() {
    return window.navigator.onLine;
}

function addNews(){
    if (document.getElementById('picture').value == '' || document.getElementById('title').value == ''
        || document.getElementById('news_text').value == '') {
        alert("Please Provide Details!");
        document.getElementById('picture');
        document.getElementById('title');
        document.getElementById('news_text');

        return false;

    }
    if (isOnline()) {


        
        document.getElementById('Form2').reset();
        
        
        alert("Новина успішно опублікована!");

    }else   {
        var picture = document.getElementById('picture').value;
        var caption = document.getElementById('title').value;
        var text = document.getElementById('news_text').value;
        index ++;
        var objects = [];
        objects.push({"caption":caption,"text":text,"picture":picture});
        localStorage.setItem(index , JSON.stringify(objects));
        document.getElementById('Form2').reset();
        
       
    }
}

function showImage(src, target) {
    var fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function (e) {
        target.src = this.result;
    ;
    };

    src.addEventListener("change", function () {
        // fill fr with image data
        fr.readAsDataURL(src.files[0]);
    });
}

var src = document.getElementById("picture");
var target = document.getElementById("target");
showImage(src, target);