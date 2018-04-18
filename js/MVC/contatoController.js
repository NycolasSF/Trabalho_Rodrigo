class contatoController{
	constructor(model){
		this.model = model;
	}
	createContato(descricao){
		let contato = new Contato(descricao);
		this.model.create(contato);
	}
	removeContato(code){
		this.model.delete(code);
	}
	/*Falta colocar o Já peguei*/

}
