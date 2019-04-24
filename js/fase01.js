
//CLASSE DA FASE 01
function Fase01(escala, teclado){
	this.escala = escala;
	this.teclado = teclado;

	this.sonic = new Sonic(this.escala, this.teclado);
	this.cenario = new Cenario(this.escala);

	//this.carro = new Carro(this.escala, 3);

	this.carros = [];
	this.criarCarros();
}

//MÉTODOS DA FASE 01
Fase01.prototype = {

	criarCarros: function(){
		let sorteio = Math.floor( Math.random() * 2 );
		if(sorteio == 0){
			this.carros.push(new Carro(this.escala, 3) );
		}else
		if(sorteio == 1){
			this.carros.push(new Carro(this.escala, 4) );
		}
	},

	desenhar: function(){

		//DESENHA O CENARIO
		this.cenario.desenhar();

		//DESENHA OS CARROS
		for(let i in this.carros){
			let carro = this.carros[i];
			carro.desenhar();
		}

		//DESENHA O SONIC
		this.sonic.desenhar();

		//this.escala.ctx.fillStyle = "black";
		//this.escala.ctx.fillRect(200, 0, 10, 10);
	},

	atualizar: function(){
		//ATUALIZA O CENARIO
		this.cenario.atualizar();

		//ATUALIZA OS CARROS
		for(let i = 0; i < this.carros.length; i++){
			let carro = this.carros[i];
			carro.atualizar();
			if(!carro.visible){
				this.remover(this.carros, i);
				i--;
			}
		}

		//DESENHA  O SONIC
		this.sonic.atualizar();
	},
	remover: function(vetor, indice){
		let objeto = vetor[indice];
		vetor.splice(indice, 1);
		this.criarCarros();
	}
}



/*




DSL APAGADA/MODEM LIGADO / ZTE-ZXHN H108N V2
TESTES INTERNOS DE CABOS E FILTRO DE LINHA/
CONTATOS: 62993936972 / 62994984920





*/