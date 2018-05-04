var app = new Vue({
    el: '.vue',
    data: {
        acum: 0,
        xPos: 0,
        yPos: 0,
        params: ''
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
        }
    }
});