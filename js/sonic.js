// \\btsg3200\r1_platinum_on$\st\SUPER RENATA\AGENTES\DENI\CoolNovo


//CLASSE DO SONIC
function Sonic(escala, teclado){
	this.escala = escala;
	this.teclado = teclado;

	this.color = "#00F";
	this.figure = imgSonic;

	this.left = false;
	this.right = false;
	this.speed = 5;
	this.direcao = 2;

	//291 x 104 -----------36 72 108 144 180 216 252 288
	//34 x 36
	this.srcX = 0;
	this.srcY = 34;
	this.srcWidth = 36;
	this.srcHeight = 34;

	this.x = 50;
	this.y = 0;
	this.width = 36+20;
	this.height = 34+20;

	this.anima = 0;
	this.forcaPulo = 20;
	this.forcaQueda = 1;
	this.queda = 0;
	this.podePular = true;
	this.ativarPulo = true;

}

//MÉTODOS DO SONIC
Sonic.prototype = {
	desenhar: function(){
		//this.escala.ctx.fillStyle = this.color;
		//this.escala.ctx.fillRect(400, 0, 10, 10);

		this.escala.ctx.drawImage(this.figure,
					this.srcX, this.srcY, this.srcWidth, this.srcHeight,
					this.x, this.y, this.width, this.height);

		this.animacao();
	},

	atualizar: function(){
		this.gravidade();

		if(this.y + this.height > this.escala.ctx.canvas.height){
			this.y = this.escala.ctx.canvas.height - this.height;
			this.queda = 0;
			this.ativarPulo = true;
		}

		if(this.teclado.pulo && this.podePular && this.ativarPulo){
			this.podePular = false;
			this.ativarPulo = false;
			console.log("this.forcaPulo", this.forcaPulo + " this.queda: "+this.queda);
			this.pular();
		}
		if(this.teclado.pulo == false){
			this.podePular = true;
		}

		this.movimentar();
	},
	movimentar: function(){
		if(this.teclado.left){
			this.x = this.x - this.speed;
			this.srcY = 34 * 2;
			this.direcao = 1;
		}
		if(this.teclado.right){
			this.x = this.x + this.speed;
			this.srcY = 34;
			this.direcao = 2;
		}

		if(this.direcao == 1 && !this.teclado.left){
			this.srcY = 34 * 3;
			this.x = this.x - this.speed / this.speed;
		}else
		if(this.direcao == 2 && !this.teclado.right){
			this.srcY = 0;
			this.x = this.x - this.speed / this.speed;
		}

		this.x = Math.max(0, Math.min(this.x, this.escala.largura() - this.width) );
	},

	animacao: function(){
		this.anima++;
		if(this.anima >= 35){
			this.anima = 0;
			this.srcX = 0;
		}

		if(this.anima%5 == 0){
			this.srcX = this.srcX + this.srcWidth; 
		}
	},

	gravidade: function(){
		this.queda = this.queda + this.forcaQueda;
		this.y = this.y + this.queda;
	},

	pular: function(){
		this.queda = -this.forcaPulo;
	},

	
}












/*

\\btsg3200\r1_baby_care$\agentes\PM




CPF: 07392743929 
41 34724788 
SAGEMCOM-F@ST2705- 917451277765 (Online)
444444444




DSL APAGADA/MODEM LIGADO / 
RECUSOU A FAZER PROCEDIMENTOS INTERNOS
CONTATOS:  68999872493 / 68992099567



















\\btsg3200\r1_platinum_on$\st\SUPER RENATA\AGENTES\DENI\CoolNovo
\\btsg3200\r1_platinum_on$\st\SUPER RENATA\AGENTES
\\btsg3200\r1_baby_care$\agentes\PM
\\btsg3200\r1_baby_care$\agentes\PM\fire2\CoolNovo
\\btsg3200\r1_baby_care$\agentes\PM\fire2


atual - http://proxy.telemar:8350/web.pac

http://proxy2.telemar/oi.pac
http://proxy.telemar.corp.net:8350/wsw5.pac

http://proxy2.telemar/convidado.pac

contwebprd02.telemar:82

\\btsg3200\r1_platinum_on$\st\SUPER RENATA\AGENTES\DENI\CoolNovo

contwebprd11.telemar :82


*/