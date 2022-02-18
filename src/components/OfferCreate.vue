<script>
export default {
  name: "OfferCreate",
};
</script>

<template>
  <v-card elevation="2" class="mt-5">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="2">
            <span> Категогрия </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <v-select dense class="select-input" outlined></v-select>
          </v-col>
          <v-col cols="2">
            <span> Марка техники </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <div class="d-flex justify-space-between">
              <v-select dense class="select-input mr-12" outlined></v-select>
              <v-text-field label="Свое значение" dense outlined></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" class="py-1">
            <span class="font-weight-bold">Характеристики </span>
          </v-col>
          <v-col cols="2" class="py-1">
            <span> Марка техники </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <div class="d-flex justify-space-between">
              <v-select
                dense
                class="select-input-big mr-12"
                outlined
              ></v-select>
              <v-text-field label="Свое значение" dense outlined></v-text-field>
            </div>
          </v-col>
          <v-col cols="2" class="py-1">
            <span> Марка техники </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <div class="d-flex justify-space-between">
              <v-select
                dense
                class="select-input-big mr-12"
                outlined
              ></v-select>
              <v-text-field label="Свое значение" dense outlined></v-text-field>
            </div>
          </v-col>
          <v-col cols="2" class="py-1">
            <span> Марка техники </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <div class="d-flex justify-space-between">
              <v-select
                dense
                class="select-input-big mr-12"
                outlined
              ></v-select>
              <v-text-field label="Свое значение" dense outlined></v-text-field>
            </div>
          </v-col>
          <v-col cols="2" class="py-1">
            <span> Марка техники </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <div class="d-flex justify-space-between">
              <v-select
                dense
                class="select-input-big mr-12"
                outlined
              ></v-select>
              <v-text-field label="Свое значение" dense outlined></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" class="py-1">
            <span class="font-weight-bold">Место базирования </span>
          </v-col>
          <v-col cols="2">
            <span> Регион </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <div class="d-flex align-self-center">
              <v-select dense class="select-input mr-12" outlined></v-select>
              <v-checkbox
                class="mt-0"
                label="Возможна работа по всей Украине"
                color="success"
                value="success"
                hide-details
              ></v-checkbox>
            </div>
          </v-col>
          <v-col cols="2" class="py-1">
            <span> Город </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <v-select dense class="select-input" outlined></v-select>
          </v-col>
          <v-col cols="2" >
            <span> Улица </span>
          </v-col>
          <v-col class="py-1" cols="10">
            <v-text-field
              class="select-input"
              label="Свое значение"
              dense
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="2 ">
            <v-spacer />
            <span>Цена за смену </span>
          </v-col>
          <v-col cols="2" class="py-1">
            <v-text-field label="Свое значение" dense outlined></v-text-field>
          </v-col>
          <v-col cols="2" align="right" class="py-1">
            <span>Цена за час </span>
          </v-col>
          <v-col cols="2" class="py-1">
            <v-text-field label="Свое значение" dense outlined></v-text-field>
          </v-col>
          <v-col cols="2" class="py-1">
            <span>Минимальное время заказа, ч. </span>
          </v-col>
          <v-col cols="2" class="py-1">
            <v-select dense outlined></v-select>
          </v-col>
          <v-col cols="8" class="py-1">
            <v-textarea
              class="fill-height"
              hide-details
              outlined
              label="Опишите вашу задачу..."
            ></v-textarea>
          </v-col>
          <v-col cols="4" class="py-1">
            <v-card
              flat
              outlined
              class="card-border d-flex justify-center py-5 fill-height"
            >
              <svg
                width="48"
                height="37"
                viewBox="0 0 48 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4999 5.84212H34.5L33.4102 3.29511C32.554 1.29508 30.5599 0 28.3341 0H19.4722C17.376 0 15.4918 1.13533 14.554 2.95993L13.0741 5.84212H5.50012C2.46606 5.84212 0 8.2433 0 11.1975V31.645C0 34.5992 2.46606 37 5.50012 37H42C44.8381 37 48 34.8014 48 31.645V11.1975C48 8.2433 45.5339 5.84212 42.4999 5.84212ZM24 30.1844C18.486 30.1844 13.9999 25.8164 13.9999 20.4474C13.9999 15.0785 18.486 10.7104 24 10.7104C29.514 10.7104 34.0001 15.0785 34.0001 20.4474C34.0001 25.8164 29.514 30.1844 24 30.1844ZM39.9979 15.5809C38.896 15.5809 37.998 14.7066 37.998 13.6336C37.998 12.5607 38.896 11.686 39.9979 11.686C41.0999 11.686 41.9982 12.5607 41.9982 13.6336C41.9982 14.7066 41.0999 15.5809 39.9979 15.5809Z"
                  fill="#E6E6E6"
                />
              </svg>
              <v-card-text class="text-center load-photo-text"
                >Нажмите на поле либо перетащите на него файлы</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="6" class="mt-10">
            <v-row class="align-space-between justify-space-between align-content-space-between fill-height">
              <v-col cols="12" >
                <v-progress-linear
                  color="white"
                  height="50"
                  class="progress-line"
                >
                  <template #default="{ value }">
                    <strong
                      >{{ Math.ceil(value) }}% заполненности объявления;</strong
                    >
                  </template>
                </v-progress-linear>
              </v-col>
              <v-col cols="6" class="pb-0">
                <v-btn class="py-6" text depressed outlined>
                  Предварительный просмотр
                </v-btn>
              </v-col>
              <v-col cols="6" class="pb-0">
                <v-btn depressed color="primary" class="py-6"> Сохранить изменения </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" class="mt-10">
            <v-card elevation="6">
              <v-card-title>Справка:</v-card-title>
              <v-card-text>
                Ранжирование выдачи происходит по формуле: 60% заполняемость, 20% аккредитация +5% FB +15% обновление каждой позиции раз в сутки (начало отчета 7-00)
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.select-input {
  max-width: 408px;
}
.select-input-big {
  max-width: 530px;
}
.card-border {
  align-items: center;
  border: 1px solid green;
}
.load-photo-text {
  max-width: 240px;
}
.progress-line {
  border: 1px solid black;
  border-radius: 5px;
  max-width: 400px;
}
.fill-height {
  height: 100% !important;
}
</style>
