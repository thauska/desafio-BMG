<template>
  <div class="row">
    <q-dialog :full-width="false" content-class="row" seamless v-model="showDialog" position="bottom">
      <div class="no-shadow row justify-end">
        <q-card class="no-shadow col-12 bg-deep-purple-1">
          <q-toolbar class="bg-accent text-white">
            <q-toolbar-title> Assistente </q-toolbar-title>
          </q-toolbar>
          <q-card-section class="row items-end dialog-box">
            <div class="col-12">
              <q-chat-message
                v-for="(message, index) in messages"
                :key="index"
                :text="[message.text]"
                size="6"
                :bg-color="!!(message.isSent) ? 'purple-2' : 'purple-4' "
                :sent="!!(message.isSent)"
              />
            </div>
            <q-input ref="InputQuery" v-model="query" color="accent" class="col-12" outlined dense label="Tire sua dúvida">
              <template v-slot:append>
                <q-icon @click="sendQuery()" color="accent" name="send"/>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false,
      query: '',
      messages: [{
        text: 'Bem-vinda'
      }]
    }
  },
  methods: {
    openDialog () {
      this.showDialog = true
    },
    closeDialog () {
      this.showDialog = false
    },
    sendQuery () {
      this.messages.push({
        text: this.query,
        isSent: true
      })
      this.query = ''
    }
  }
}
</script>

<style>
.borda {
  border: 2px solid red;
}
.dialog-box {
  height: 50vh;
}
</style>
