
//CLASSE GAME
function Game(escala, teclado){
	this.escala = escala;
	this.teclado = teclado;

	this.ligado = false;
	this.fase = [];
	this.faseCorrente = 0;
	
	this.criarFase(this.faseCorrente);
}
//METODOS DO GAME
Game.prototype = {

	criarFase: function(atual){
		if(this.faseCorrente == atual){
			this.fase[0] = new Fase01(this.escala, this.teclado);
		}
	},
	
	ligar: function(){
		this.ligado = true;
		this.rodando();
	},

	desligar: function(){
		this.ligado = false;
	},

	rodando: function(){
		if(!this.ligado){
			return;
		}
		this.limpar();

		this.desenhar();
		this.atualizar();

		let roda = this;
		requestAnimationFrame(function(){
			roda.rodando();
		});
	},

	desenhar: function(){
		this.fase[0].desenhar();
	},

	atualizar: function(){
		this.fase[0].atualizar();
	},

	limpar: function(){
		this.escala.ctx.fillStyle = "#DDD";
		this.escala.ctx.fillRect(0, 0, this.escala.largura(), this.escala.altura() );
	}

}


