class Contato{
	constructor(descricao){
		this.descricao = descricao;
		this.jaPeguei = false;
		this.code = 0;
	}
	mostrar(){
		 if (this.jaPeguei) {
	      return this.descricao + ' - JÁ PEGUEI'
	    } else {
	      return this.descricao + ' - Não PEGUEI'
	    }
	}
	Ja_peguei(){
		this.jaPeguei = true;
	}
}
