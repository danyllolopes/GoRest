 <template>
 <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn width="12rem" color="primary" dark v-bind="attrs" v-on="on">
          + Adicionar Usuário
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adicionar Usuário</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Insira o nome*" required v-model="data.name"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Email*" required v-model="data.email"></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-select :items="items" item-text="label" item-value="id" v-model="data.gender" label="Genêro*"
                  required></v-select>
              </v-col>
              <v-col cols="6">
                <v-select :items="status" item-text="label" item-value="id" v-model="data.status" label="Status*"
                  required></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>* Indica campo obrigatório</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cancelar
          </v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </template>

  <script>
import { api } from '@/services/api'
export default {
  props: ['getUsers'],
  data: () => ({   
      data: {
      name: "",
      email: "",
      gender: "",
      status: "",
    },
    dialog: false,

    items: [
      {
        id: "male",
        label: "Masculino"
      },
      {
        id: "female",
        label: "Feminino"
      }
    ],
    status: [
      {
        id: "active",
        label: "Ativo"
      },
      {
        id: "inactive",
        label: "Inativo"
      }
    ]
  }),

  methods: {
    async save(){      
      this.dialog = false
      await api.post('/users', {
        name: this.data.name,
        email: this.data.email,
        gender: this.data.gender,
        status: this.data.status,          
      })      
      await this.getUsers()
      this.clearForm()
   
    },
    clearForm(){
      for(let field in this.data) this.data[field] = "" 
    }
  }

}
</script>

<style scoped>
.btn {
  width: 12rem;
}
</style>

