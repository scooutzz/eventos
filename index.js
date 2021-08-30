var idade = 18;
const participantes = ['Gabriel', 'Fabio', 'Samuel', 'Yasmin', 'João', 'Marcos'];
const palestrantes = ['João', 'Gabriel', 'Pedro'];
const dataAtual = new Date();
const dataEvento = new Date('2021-10-10 14:00:00');

//Verificando se a data do evento é posterior a hoje
if (dataEvento > dataAtual) {
    console.log("Evento permitido!");

    //Verificando se a pessoa possui 18+ anos
    if (idade >= 18) {
        console.log("Cadastro permitido!");

        //Listar participantes
        console.log("\nParticipantes: ")
        for (let i = 0; i < participantes.length; i++) {
            const listaParticipantes = participantes[i];
            console.log(listaParticipantes);
        }

        console.log("\nPalestrantes: ")
        for(let x = 0; x < palestrantes.length; x++) {
            const listaPalestrantes = palestrantes[x];
            console.log(listaPalestrantes);
        }
        
        if (participantes.length < 100) {
            console.log("Cadastro permitido! Aproveite o evento!");
        } else {
            console.log("Cadastro negado. Limite de participantes excedido");
        }


    } else {
        console.log("Cadastro negado. Idade não permitida");
    }
} else {
    console.log("Evento já ocorreu!");
}

