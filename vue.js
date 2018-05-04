var app = new Vue({
    el: '.vue',
    data: {
        acum: 0
    },
    methods: {
        sumar: function () {
            this.acum++;
        },
        restar: function () {
            this.acum--;
        },
    }
});