//C:\Users\BC649910\Documents\sonic\index.html

//CLASSE CARRO
function Carro(escala, colunas){
	this.escala = escala;
	this.figure = imgCarro1;
	

	this.srcX = 0;
	this.srcY = 0;
	this.srcWidth = 0; 		 // 157 / 3 = 52
	this.srcHeight = 0; 		 // 29; // 29
	
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;

	this.anima = 0;
	this.dx = -2;

	this.colunas = colunas;
	this.frame = 8;
	this.visible = true;

	this.iniciar();
}


//MÉTODO
Carro.prototype = {

	iniciar: function(){
		if(this.colunas == 3){
			this.figure = imgCarro1;
			this.srcWidth = Math.floor( 157 / this.colunas );
			this.srcHeight = Math.floor( 29 ); 
		}else
		if(this.colunas == 4){
			this.figure = imgCarro2;
			this.srcWidth = Math.floor( 225 / this.colunas );
			this.srcHeight = Math.floor( 27 );
		}
	
		this.width = this.srcWidth * 2;
		this.height = this.srcHeight * 2;
	
		this.x = this.escala.largura();
		this.y = this.escala.altura() - this.height;

		console.log("CARRO INICIADO: ", this.figure.width);
	},

	desenhar: function(){
		if(!this.visible){
			return;
		}

		this.escala.ctx.drawImage(this.figure,
					this.srcX, this.srcY, this.srcWidth, this.srcHeight, 
					this.x, this.y, this.width, this.height);

		this.animacao();
	},

	atualizar: function(){
		this.x = this.x + this.dx;
		
		if(this.x + this.width < 0){
			this.visible = false;
			//this.x = this.escala.largura();
		}
	},

	animacao: function(){
		this.anima++;

		if(this.anima % this.frame == 0){ // frame = 8
			this.srcX = this.srcX + this.srcWidth;
			//console.log("this.scrX: " + this.srcX);
		}
		if(this.anima >= this.frame*this.colunas){ //24
			this.anima = 0;
			this.srcX = 0;
		}
	}

}

//Carro.carro1 = imgCarro1;
//Carro.carro2 = imgCarro2;










/*

DSL APAGADA/MODEM LIGADO / ZTE-ZXHN H108N /
TESTES INTERNOS DE CABOS E FILTRO DE LINHA/
CONTATOS: 71996440221  / 71987086901




DSL APAGADA/MODEM LIGADO / ZTE-ZXHN H108N V2
TESTES INTERNOS DE CABOS E FILTRO DE LINHA/
CONTATOS: 92992352203/ 92981670073
92  36357015 
9289896563



Technicolor-TD5137-
ED527819302978
 (Online)
.
000000000000




DSL apagada/MODEM LIGADO 49999405260 / 49991205891 
RECUSOU A FAZER PROCEDIMENTOS INTERNOS




*/