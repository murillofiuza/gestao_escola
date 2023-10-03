<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/home">
        <i class="nc-icon nc-stre-up"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/admin/aluno">
        <i class="nc-icon nc-satisfied"></i>
        <p>Alunos</p>
      </sidebar-link>
      <sidebar-link to="/admin/professor">
        <i class="nc-icon nc-single-02"></i>
        <p>Professor</p>
      </sidebar-link>
      <sidebar-link to="/admin/matricula">
        <i class="nc-icon nc-badge"></i>
        <p>Matricula</p>
      </sidebar-link>
      <sidebar-link to="/admin/turma">
        <i class="nc-icon nc-grid-45"></i>
        <p>Turma</p>
      </sidebar-link>
      <sidebar-link to="/admin/historico">
        <i class="nc-icon nc-paper-2"></i>
        <p>Histórico</p>
      </sidebar-link>
      <sidebar-link to="/admin/curso">
        <i class="nc-icon nc-ruler-pencil"></i>
        <p>Cursos</p>
      </sidebar-link>

      <sidebar-link to="/admin/colaborador">
        <i class="nc-icon nc-circle-09"></i>
        <p>Colaborador</p>
      </sidebar-link>
      
      <sidebar-link to="/admin/financeiro">
        <i class="nc-icon nc-circle-09"></i>
        <p>Financeiro</p>
      </sidebar-link>

      <sidebar-link to="/admin/funcao">
        <i class="nc-icon nc-circle-09"></i>
        <p>Função</p>
      </sidebar-link>

      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>

      
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
