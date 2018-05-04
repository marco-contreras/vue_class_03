var app = new Vue({
    el: '.vue',
    data: {
        acum: 0,
        xPos: 0,
        yPos: 0,
        params: '',
        clicks: 0
    },
    methods: {
        sumar: function () {
            this.acum++;
        },
        restar: function () {
            this.acum--;
        },
        alert: function (message) {
            alert(message);
        },
        coordenates: function (event) {
            this.xPos = event.clientX;
            this.yPos = event.clientY;
        },
        coordenatesValue: function (event, value) {
            this.xPos = event.clientX * value;
            this.yPos = event.clientY * value;
        },
        countClicks(){
            this.clicks++;
        }
    }
});