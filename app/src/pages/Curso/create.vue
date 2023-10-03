<template>
  <card>
    <h4 slot="header" class="card-title">Cadastrar Curso</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Nome"
                    placeholder="Digite o Nome do Curso"
                    v-model="CreateCurso.nome">
          </base-input>
        </div>

        <div class="col-md-2">
          <base-input type="cpf"
                    label="CPF"
                    placeholder="Digite o CPF"
                    v-model="CreateCurso.cpf">
          </base-input>
        </div>

        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="CreateCurso.email">
          </base-input>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input type="date"
                    label="Data Nascimento"
                    placeholder="Light dashboard"
                    v-model="CreateCurso.dt_nascimento">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Contato"
                    placeholder="Digite Telefone"
                    v-model="CreateCurso.telefone">
          </base-input>
        </div>
        
      </div>

      

      <div class="row">
        <div class="col-md-10">
          <base-input type="text"
                    label="Endereço"
                    placeholder="Digite endereço do Cliente"
                    v-model="CreateCurso.endereco">
          </base-input>
        </div>

      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input type="text"
                    label="Numero"
                    placeholder=""
                    v-model="CreateCurso.numero">
          </base-input>
        </div>

        <div class="col-md-4">
          <base-input type="text"
                    label="Bairro"
                    placeholder=""
                    v-model="CreateCurso.bairro">
          </base-input>
        </div>

      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="CreateCurso.cidade">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="CreateCurso.pais">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="number"
                    label="Cep"
                    placeholder="ZIP Code"
                    v-model="CreateCurso.cep">
          </base-input>
        </div>
      </div>

     
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-center" @click.prevent="createCursoProfile">
          Salvar
        </button>
            &nbsp;
        <router-link to="/admin/curso" class="btn btn-info btn-fill float-center">
          Voltar
        </router-link>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        CreateCurso: {
          nome: '',
          cpf: '',
          email: '',
          dt_nascimento: '',
          telefone: '',
          endereco: '',
          numero:'',
          Bairro: '',
          cidade: '',
          pais: '',
          cep: ''
          
        }
      }
    },
    methods: {
      createCursoProfile () {
        alert('Your data: ' + JSON.stringify(this.CreateCurso))
      }
    }
  }

</script>
<style>

</style>
