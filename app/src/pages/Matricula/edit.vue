<template>
  <card>
    <h4 slot="header" class="card-title">Alterar Matricula</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Nome"
                    placeholder="Digite o Nome do Matricula"
                    v-model="CreateMatricula.nome">
          </base-input>
        </div>

        <div class="col-md-2">
          <base-input type="cpf"
                    label="CPF"
                    placeholder="Digite o CPF"
                    v-model="CreateMatricula.cpf">
          </base-input>
        </div>

        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="CreateMatricula.email">
          </base-input>
        </div>
        
      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input type="date"
                    label="Data Nascimento"
                    placeholder="Light dashboard"
                    v-model="CreateMatricula.dt_nascimento">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Contato"
                    placeholder="Digite Telefone"
                    v-model="CreateMatricula.telefone">
          </base-input>
        </div>
        
      </div>

      

      <div class="row">
        <div class="col-md-10">
          <base-input type="text"
                    label="Endereço"
                    placeholder="Digite endereço do Cliente"
                    v-model="CreateMatricula.endereco">
          </base-input>
        </div>

      </div>

      <div class="row">
        <div class="col-md-2">
          <base-input type="text"
                    label="Numero"
                    placeholder=""
                    v-model="CreateMatricula.numero">
          </base-input>
        </div>

        <div class="col-md-4">
          <base-input type="text"
                    label="Bairro"
                    placeholder=""
                    v-model="CreateMatricula.bairro">
          </base-input>
        </div>

      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Cidade"
                    placeholder="Cidade"
                    v-model="CreateMatricula.cidade">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Pais"
                    placeholder="Pais"
                    v-model="CreateMatricula.pais">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="number"
                    label="Cep"
                    placeholder="ZIP Code"
                    v-model="CreateMatricula.cep">
          </base-input>
        </div>
      </div>

     
      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-center" @click.prevent="createMatriculaProfile">
          Salvar
        </button>
            &nbsp;
        <router-link to="/admin/matricula" class="btn btn-info btn-fill float-center">
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
        user: {
          company: 'Light dashboard',
          username: 'michael23',
          email: '',
          firstName: 'Mike',
          lastName: 'Andrew',
          address: 'Melbourne, Australia',
          city: 'melbourne',
          country: 'Australia',
          postalCode: '',
          aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
        }
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
