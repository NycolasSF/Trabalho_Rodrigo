class Contato{
	constructor(nome, telefone, descricao, ft_perfil){
		this.nome = nome;
		this.telefone = telefone;
		this.descricao = descricao;
		this.ft_perfil = ft_perfil;
		this.test_peguei = false;
		this.code = 0;
	}
	mostrar_nome(){
	  if (this.test_peguei) {
		return this.nome + ' - PEGO';

	  } else {
	    return this.nome + ' - Não PEGUEI'
	  }
	}
	mostrar_telefone(){
		return 'TELEFONE: ' +this.telefone ;
	}
	mostrar_desc(){
		return this.descricao;
	}
	mostrar_ft(){
		return this.ft_perfil;
	}
}
