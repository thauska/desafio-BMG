<template>
  <q-page class="container">
    <div class="row q-pt-md justify-center">
      <div class="row col-11">
        <span> Olá, Maria </span>
      </div>
    </div>
    <div class="row q-pt-lg justify-center">
      <q-card class="border-card col-11">
        <q-card-section class="row">
          <div class="row col-11">
            <span> Saldo da conta </span>
          </div>
          <div class="row col-11">
            <span> R$ 100,00 </span>
          </div>
          <div class="row col-11 q-py-md">
            <span> Toque para esconder </span>
          </div>
          <q-separator color="secondary"/>
          <div class="row col-11 q-pt-md">
            <span> Ver extrato </span>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-pt-lg q-gutter-xs no-wrap justify-center">
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/scan-barcode.svg" height="30"/>
          <span class="col-12 text-white text-center"> Pagar conta </span>
        </q-card-section>
      </q-card>
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/icone-transacao.svg" height="30"/>
          <span class="col-12 text-white text-center"> Pagar conta </span>
        </q-card-section>
      </q-card>
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/dinheiro.svg" height="30"/>
          <span class="col-12 text-white text-center"> Fazer depósito </span>
        </q-card-section>
      </q-card>
      <q-card class="card bg-secondary">
        <q-card-section class="row justify-center">
          <img class="q-mb-sm" src="../../public/recarga.svg" height="30"/>
          <span class="col-12 text-white text-center"> Recarga </span>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      actionsCard: []
    }
  }
}
</script>

<script>
  window.watsonAssistantChatOptions = {
      integrationID: "043cdc85-9cb6-4348-afe8-49dcd567aeac", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "d723d7dd-5e60-457a-a10f-6fa5d1fb919e", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
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
</style>
