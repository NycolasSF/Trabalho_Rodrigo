class Contato{
	constructor(nome, telefone, descricao, ft_perfil){
		this.nome = nome;
		this.telefone = telefone;
		this.descricao = descricao;
		this.ft_perfil = ft_perfil;
		this.jaPeguei = false;
		this.code = 0;
	}
	mostrar_nome(){
	  if (this.jaPeguei) {
	    return this.nome + ' - JÁ PEGUEI'
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
	Ja_peguei(){
		this.jaPeguei = true;
	}
}
