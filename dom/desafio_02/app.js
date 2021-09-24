new Vue({
    el: "#desafio",
    data: {
        valor: 0,
        valor2: 0
    },
    methods: {
        ExibirAlerta() {
            alert('Executado com sucesso!')
        },
        Armazenar(){
            this.valor = event.target.value;
        },
        Armazenar2(){
            this.valor2 = event.target.value;
        }
    }
})