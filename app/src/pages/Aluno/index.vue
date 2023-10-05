<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Lista de Aluno</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="/">Home</router-link> </li>
                  <li class="breadcrumb-item active" aria-current="page">Lista de Alunos</li>
                </ol>
              </nav>  
            
            </template>
            
            <router-link to="/admin/create-aluno" class="btn btn-info btn-fill float-left"> Cadastrar Aluno</router-link>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>

  

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['Id', 'Matricula', 'Nome', 'Turma', 'Ações']
  const tableData = [{
    id: 1,
    matricula: '0123456',
    nome: 'Rice',
    turma: 'G5',
    ações: 'Exibir | Edit | Excluir',
  }]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
