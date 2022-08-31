// document.addEventListener('DOMContentLoaded',function () {
    function separate(Number)
    {
        Number+= '';
        Number= Number.replace(',', '');
        x = Number.split('.');
        y = x[0];
        z= x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(y))
            y= y.replace(rgx, '$1' + ',' + '$2');
        return y+ z;
    }
    function toFarsiNumber(Number) {
        const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

        return Number
            .toString()
            .replace(/\d/g, exportNumber => farsiDigits[exportNumber]);
    }
// })
