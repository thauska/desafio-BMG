<template>
  <q-page class="container">
    <div class="row q-pt-md justify-center">
      <div class="col-11">
        <div class="text-weight-bold text-subtitle1"> Olá, Maria </div>
        <div class="text-caption">Cliente desde 05 de Agosto de 2020</div>
        <div class="text-caption">CPF: 123.456.789-00</div>
      </div>
    </div>
    <div class="row justify-center q-pt-sm">
      <q-card class="col-11 shadow-0" bordered>
        <q-card-section class="text-center q-pt-sm">
         <span class="text-secondary text-subtitle1 text-weight-bold"> Score ADA</span> <br>
            <q-avatar size="50px" font-size="25px" color="secondary" text-color="white">
                520
            </q-avatar>
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center q-pt-sm">
    <q-card class="col-11 shadow-0" bordered>
        <q-list separator>
          <q-item>
            <q-item-section>Microcrédito BMG</q-item-section>
               <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Empréstimo pessoal BMG de 1000</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
             <q-item>
              <q-item-section>Microcrédito empresas</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
             <q-item>
              <q-item-section>Opções com juros sociais</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right"></q-icon>
              </q-item-section>
            </q-item>
        </q-list>
    </q-card>
    </div>
      <div class="row justify-center q-pt-sm">
      <q-card class="col-11 shadow-0" bordered>
        <q-card-section class="text-center q-pt-sm">
         <span class="text-secondary text-subtitle1 text-weight-bold"> Clube ADA</span> <br>
           <q-btn to="clube-ada" label="Conheça os seus benefícios" color="secondary" class="full-width"></q-btn>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
