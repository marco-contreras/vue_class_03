var app = new Vue({
    el: '.vue',
    data: {
        acum: 0,
        xPos: 0,
        yPos: 0,
        params: '',
        clicks: 0,
        keyPress: 0,
        enters: 0,
        deletes: 0
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
        },
        addPress: function () {
            this.keyPress++;
        },
        addEnter: function () {
            this.enters++;
        },
        addDelete: function (event) {
             if(event.keyCode == 8) {
                this.deletes++;
            }
        }
    }
});