new Vue({
    el: "#desafio",
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor == 35 ? 'Valor Igual' : 'Valor Diferete'
        }
    },
    watch: {
        valor(){
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    }
})