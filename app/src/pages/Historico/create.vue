<template>
  <card>
    <h4 slot="header" class="card-title">Cadastrar Historico</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Nome"
                    placeholder="Digite o Nome do Historico"
                    v-model="CreateHistorico.nome">
          </base-input>
        </div>

        <div class="col-md-2">
          <base-input type="cpf"
                    label="CPF"
                    placeholder="Digite o CPF"
                    v-model="CreateHistorico.cpf">
          </base-input>
        </div>

        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="CreateHistorico.email">
          </base-input>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input type="date"
                    label="Data Nascimento"
                    placeholder="Light dashboard"
                    v-model="CreateHistorico.dt_nascimento">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Contato"
                    placeholder="Digite Telefone"
                    v-model="CreateHistorico.telefone">
          </base-input>
        </div>
        
      </div>

      

      <div class="row">
        <div class="col-md-10">
          <base-input type="text"
                    label="Endereço"
                    placeholder="Digite endereço do Cliente"
                    v-model="CreateHistorico.endereco">
          </base-input>
        </div>

      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input type="text"
                    label="Numero"
                    placeholder=""
                    v-model="CreateHistorico.numero">
          </base-input>
        </div>

        <div class="col-md-4">
          <base-input type="text"
                    label="Bairro"
                    placeholder=""
                    v-model="CreateHistorico.bairro">
          </base-input>
        </div>

      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="CreateHistorico.cidade">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="CreateHistorico.pais">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="number"
                    label="Cep"
                    placeholder="ZIP Code"
                    v-model="CreateHistorico.cep">
          </base-input>
        </div>
      </div>

     
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-center" @click.prevent="createHistoricoProfile">
          Salvar
        </button>
            &nbsp;
        <router-link to="/admin/historico" class="btn btn-info btn-fill float-center">
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
        CreateHistorico: {
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
      createHistoricoProfile () {
        alert('Your data: ' + JSON.stringify(this.CreateHistorico))
      }
    }
  }

</script>
<style>

</style>
