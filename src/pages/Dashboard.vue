<template>
  <q-page class="container">
    <div class="row q-pt-md justify-center">
      <div class="row col-11">
        <span class="text-weight-bold text-subtitle1"> Olá, Maria </span>
      </div>
    </div>
    <div class="row justify-center q-pt-sm">
      <q-card class="col-11 shadow-0" bordered>
        <q-card-section class="row">
          <div class="row col-11">
            <span class="text-grey-8 q-mb-xs text-caption"> Saldo da conta </span>
          </div>
          <div class="flex col-12 items-center">
          <q-input filled :label="!isHidden ? saldo : 'Mostrar saldo'" class="full-width" readonly prefix="R$" dense>
              <template v-slot:prepend>
                <span class="text-subtitle1">R$</span>
              </template>
             <template v-slot:append>
          <q-icon
            :name="isHidden ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            color="grey-10"
            @click="isHidden = !isHidden"
          />
        </template>
          </q-input>
          </div>
          <q-btn label="Ver extrato" color="secondary" size="sm" class="q-mt-sm"></q-btn>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-pt-lg q-gutter-xs no-wrap justify-center">
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/scan-barcode.svg" height="30"/>
          <span class="text-white text-center"> Pagar </span>
        </q-card-section>
      </q-card>
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/icone-transacao.svg" height="30"/>
          <span class="text-white text-center"> Transferir </span>
        </q-card-section>
      </q-card>
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/dinheiro.svg" height="30"/>
          <span class="text-white text-center"> Depositar </span>
        </q-card-section>
      </q-card>
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/recarga.svg" height="30"/>
          <span class="text-white text-center"> Recarga </span>
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center q-pt-lg">
    <q-card class="col-11 shadow-0" bordered>
        <q-list separator>
          <q-item>
            <q-item-section>Meu perfil de crédito</q-item-section>
               <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
            <q-item to="/ofertas">
              <q-item-section>Acompanhe as ofertas disponíveis</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
             <q-item>
              <q-item-section>Resgate seu cashback</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
        </q-list>
    </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      isHidden: true,
      saldo: '1500'
    }
  },
  created () {
    window.watsonAssistantChatOptions = {
      integrationID: '043cdc85-9cb6-4348-afe8-49dcd567aeac', // The ID of this integration.
      region: 'us-south', // The region your integration is hosted in.
      serviceInstanceID: 'd723d7dd-5e60-457a-a10f-6fa5d1fb919e', // The ID of your service instance.
      onLoad: function (instance) { instance.render() }
    }
    setTimeout(function () {
      const t = document.createElement('script')
      t.src = 'https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js'
      document.head.appendChild(t)
    })
  }
}
</script>
<style>
.border-card {
  border: 1px solid purple;
}
.card {
  width: 23%;
}

#WACContainer.WACContainer .WACLauncher__ButtonContainer {
  margin-bottom: 1rem;
}
.saldo-box {
  width: 150px;
  background-color: #dbdbdb;
  border-radius: 3px;
  min-height: 25px;
}
</style>
