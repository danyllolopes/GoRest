<template>
<section>        
        <b-modal  v-if="data.id" id="modal-1" title="BootstrapVue">          
          <p class="my-4"> {{data}}</p>
        </b-modal>    
</section>
</template>


<script>
export default {
  name: "Input",
  props: {
    data: Array
  }
}
</script>

<style scoped>
.btn {
  width: 15rem;
}

</style>