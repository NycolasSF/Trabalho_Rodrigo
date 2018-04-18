class contatoView {
  constructor (controller, model) {

    /*FORM*/
    this.nome = document.querySelector('#inputNome');
    this.telefone = document.querySelector('#inputTelefone');
    this.descricao = document.querySelector('#descricao');
    this.ft_perfil = document.querySelector('#File_ft');
    /*LISTA*/
    this.list = document.querySelector('#lista_contato');
    /*Controller e Model*/
    this.controller = controller;
    this.model = model;
    /*button criar*/
    this.button = document.querySelector('#btn_salvar');
    this.button.onclick = this.createContato.bind(this);
  }

  createContato () {
    try{
      if (!this.nome.value) throw 'O campo nome está vazio';
      if (!this.telefone.value) throw 'O campo telefone está vazio';
      if (!this.descricao.value) throw 'O campo descricao está vazio';
      if (!this.ft_perfil.value) throw 'Coloque uma Fotinha da pessoinha';

      this.controller.createContato(this.nome.value, this.telefone.value, this.descricao.value, this.ft_perfil.value);
      this.addContato();
    }
    catch(err){
      alert('ERRO: ' +err);
    }
  }
  
  removeContato (code) {
    this.controller.removeContato(code);
    this.addContato();
  }
  addContato () {
    this.list.innerHTML = '';
    for (var i = 0; i < this.model.data.length; i++ ) {
      var contato = this.model.data[i];
      this.list.innerHTML +=
     ' <div class="col-md-4">'+
              '<div class="card mb-4 box-shadow">'+
                '<img id="Perfil" class="card-img-top" src="'+contato.mostrar_ft()+'" alt="Sem Foto de Perfil">'+
               ' <div class="card-body">'+
                '<div class="text-block">'+
                  '<h4>'+contato.mostrar_nome()+'</h4>'+
                  '<p>'+contato.mostrar_telefone()+'</p>'+
                '</div>'+
                 ' <p class="card-text">'+contato.mostrar_desc()+'</p>'+
                 ' <div class="d-flex justify-content-between align-items-center">'+
                    '<div class="btn-group">'+
                      '<button type="button" data-id="'+contato.code+'" onclick="view.Japeguei('+contato.code+')" class="btn btn-sm btn-outline-secondary">Já Peguei</button>'+
                      '<button type="button" data-id="'+contato.code+'"  onclick="view.removeContato('+contato.code+')" class="btn btn-sm btn-outline-secondary">Remover Contato</button>'+
                   ' </div>'+
                 ' </div>'+
                '</div>'+
              '</div>'+
           ' </div>';
    }
  }
}//fim-class
