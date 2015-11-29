// this code convert arabic ك and ي to persian ک and ی in a given text string
// Author: Mahdi Aryayi (mahdiaryayi@gmail.com)
// published under license: GNU Public License (GPL v3)

$(document).ready(function () {
    $('#convertButton').on('click', function () {
        var regex1 = /ي/g;
        var regex2 = /ك/g;
        var inText = $('#inputText').val();
        var matchYa = inText.match(regex1);
        var outYa = inText.replace(regex1, 'ی');
        var matchKa = inText.match(regex2);
        var outKa = outYa.replace(regex2, 'ک');
        var outText = outKa;
        $('#inputText').val(outText);
        $('#inputText').select();
        if (inText.match(regex1) === null) {
            var numYa = 'صفر';
        } else {
            var numYa = matchYa.length;
        }
        if (inText.match(regex2) === null) {
            var numKa = 'صفر';
        } else {
            var numKa = matchKa.length;
        }
        if (inText.match(regex1) === null && inText.match(regex2) === null) {
            var msg = 'در متن داده شده هیچ موردی از «ك» یا «ي» یافت نشد';
        } else {
            var msg = "تعداد " + numYa + " «ی» و " + numKa + " «کاف» جایگزین شدند. اکنون می‌توانید متن زیر را copy کرده و در محل مورد نظر paste نمایید.";
        }
        $('#msgPlaceHolder').append('<div class="alert alert-success alert-dismissible" id="finalMsg" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+msg+'</div>');
    });
    $('#resetButton').on('click', function() {
       $('#inputText').val('');
    });
});
