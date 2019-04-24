
//CLASSE CENARIO
function Cenario(escala){

	this.escala = escala;
	this.figure = imgCenario1;

	this.x1 = 0;
	this.x2 = this.escala.largura();

	this.y = 0;
	this.width = 10;
	this.height = 10;

	this.speed = 1;

	this.iniciar();
}

//MÉTODO DO CENARIO
Cenario.prototype = {
	iniciar: function(){
		this.width = this.escala.largura();
		this.height = this.escala.altura();		
	},

	desenhar: function(){
		this.escala.ctx.drawImage(this.figure, this.x1, this.y, this.width, this.height);

		this.escala.ctx.drawImage(this.figure, this.x2, this.y, this.width, this.height);			
	},

	atualizar: function(){
		
		this.x1 = this.x1 - this.speed;
		this.x2 = this.x2 - this.speed;

		if(this.x1 + this.width <= 0){
			this.x1 = this.escala.largura();
			this.x2 = 0;
		}
		if(this.x2 + this.width <= 0){
			this.x2 = this.escala.largura();
			this.x1 = 0;
		}
	},

}









/*



DSL APAGADA/MODEM LIGADO / POSSIVE MODEM COM DEFEITO/
RECUSOU A FAZER PROCEDIMENTOS INTERNOS
CONTATOS:  31999149470  / 31999149470 

 


*/


