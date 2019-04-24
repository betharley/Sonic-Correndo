
function Escala(contexto){
	this.ctx = contexto;

}
Escala.prototype = {
	largura: function(){
		return this.ctx.canvas.width;
	},

	altura: function(){
		return this.ctx.canvas.height;
	},

	dez: function(){
		return 10;
	},

	vinte: function(){
		return 20;
	},

	trinta: function(){
		return 30;
	},

	quarenta: function(){
		return 40;
	},

	cinquenta: function(){
		return 50;
	}

}