<template>
  <section>
    <h1>Usuários</h1> 
    <div class="pesquisa">
      <button> <span class="material-icons"> search </span></button>
      <b-form-input class="pesquisa-input" v-model="text" placeholder="Buscar Usuário"></b-form-input>  
      <Teste />      
    </div>
     
      <b-table class="table" striped hover :items="items" :fields="fields">
        <template v-slot:cell(edit)="data">
          <b-button  class="button" v-b-modal.modal-1>
          <span class="material-icons">edit</span>
           <Input :data="data.item"/>      
        </b-button>         
        </template>

        <template v-slot:cell(delete)="data">
          <button @click="deleteUser(data.item)">
            <span class="material-icons"> delete_outline </span>
          </button>
        </template>
      </b-table>
  </section>
</template>

<script>
import { api } from "../services/api";
import Input from "./Input.vue";
import Teste from "./Teste.vue";

export default {
  name: "Users",
  components: {
    Input,
    Teste
},
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "Id",
        },
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "email",
          label: "Email",
        },
        {
          key: "gender",
          label: "Sexo",
        },
        {
          key: "status",
          label: "Status",
        },
        {
          key: "Edit",
          label: "Editar",
        },
        {
          key: "Delete",
          label: "Deletar",
        },
      ],
      items: [],
      text: "",
    };
  },

  methods: {
    async getUsers() {
      try {
        const { data } = await api.get("/users");

        if (data) {
          this.items = data;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async deleteUser(item) {
      try {
         await api.delete(`/users/${item.id}`);
        this.getUsers()
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 40px;
}

.pesquisa {
  position: relative;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.pesquisa button {
  position: absolute;
  top: 8px;
  left: 8px;
  transition: 0.3s ease-out;
}
.pesquisa button:hover {
  transform: scale(1.1);
}
.pesquisa-input {
  padding-left: 40px;
}
.button {
  background: transparent;
  border: none;
  
}
.button span {
  color: #000;
} 
.btn:hover {
  background: none;
}
</style>
