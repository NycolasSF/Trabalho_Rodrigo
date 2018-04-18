class contatoModel{
	constructor(){
		this.name = 'contato';
		this.data = [];
	}
	create(contato){
		contato.code = this.data.length;
		this.data.push(contato);
		return this;
	}
	find(code){
		return this.data.find(function (contato) {
			return contato.code == code;
		});
	}
	delete(code){
		var index = this.data.findIndex(function(contato){
			return contato.code == code;
		});
		this.data.splice(index, 1);
		return this;
	}


}
