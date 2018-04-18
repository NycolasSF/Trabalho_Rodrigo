class contatoController{
	constructor(model){
		this.model = model;
	}
	createContato(nome, telefone, descricao, ft_perfil){
		let contato = new Contato(nome, telefone, descricao, ft_perfil);
		this.model.create(contato);
	}
	removeContato(code){
		this.model.delete(code);
	}
	/*Falta colocar o Já peguei*/

}
