<template>
      <div>
        <b-button class="btn" @click="modalShow = !modalShow" variant="primary">Novo Usuário</b-button>
        <b-modal v-model="modalShow">Hello From Modal!    
        <b-form-input  placeholder="Buscar Usuário"></b-form-input>
        <b-form-input  placeholder="Buscar Usuário"></b-form-input>
        <b-form-input  placeholder="Buscar Usuário"></b-form-input>
     </b-modal>
    </div>
</template>

<script>
export default {
data() {
      return {
        modalShow: false
      }
    }
}
</script>

<style scoped>
.btn {
  width: 12rem;
}
</style>

