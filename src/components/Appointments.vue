<template>
    <div class="container">
        <div class="appointments">
            <div>
                <div class="appointments__header">
                    <div class="appointments__title">Verfügbare Termine</div>
                </div>
                <div class="appointments__body" v-for="(appointment, index) in allAppointments" :key="index">
                    <div class="appointments__body__header">
                        <div>
                            <div class="title">{{ appointment.date }}</div>
                            <div class="subtitle">{{ appointment.date_format }}</div>
                        </div>
                        <div class="appointments__counter">
                            <strong>{{ appointment.slots.length }}</strong> freie Termine
                        </div>
                    </div>
                    <div class="appointments__separator"></div>
                    <div>
                        <div class="appointments__slots" >
                            <div class="slot" v-for="(slot, index) in appointment.slots" :key="index" @click="selectSlot(slot.time)">
                                {{ slot.time }}
                            </div>
                        </div>
                    </div>

                    <div class="appointments__contact">
                         Die online verfügbaren Termine passen nicht? Unter <a href="tel:0800 1234567">0800 1234567</a> (Mo - So: 08:00 bis 20:00 Uhr) können wir Dir häufig noch weitere Termine anbieten. 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Appointments',
  computed: {
      ...mapGetters(['getAppointments']),

      allAppointments() {
        return this.getAppointments.items;
      }
  },
  methods: {
      ...mapActions(['loadAppointments', 'selectSlot']),
  },
  created() {
      this.loadAppointments();
  }
}
</script>

<style lang="scss" scoped>

.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    max-width: 900px;
}

.appointments {
    padding: 1rem;
    background-color: #F2F5F9;

    &__header{
        display: flex;
        justify-content: space-between;
    } 

    &__title {
        color: #152a49;
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 1;
        padding: 0.5rem 0;
    }

    &__separator {
        border-top: 1px solid #b4b9c1;
        margin-bottom: 0.5rem;
    }

    &__body{
            background: #fff;
            border-radius: 4px;
            color: #152a49;
            padding: 1rem;
            margin: 1rem;

        &__header{
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding-bottom: 1rem;

            .title{
                font-size: 1rem;
                font-weight: 600;
                line-height: 1;
                display: flex;
                justify-content: flex-start;
            }

            .subtitle {
                color: #6b778c;
                font-size: .9rem;
                line-height: 1;
                margin-top: 0.5rem;
            }
        }
    }

    &__counter {
        color: #59b94b;
        font-size: .9rem;
        text-align: right;
        
        img {
            margin-left: 10px;
        }
    }

    &__slots{
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(auto-fit,minmax(75px,1fr));
        padding-top: 1rem;

        .slot {
            background: #def1db;
            border-radius: 4px;
            color: #152a49;
            cursor: pointer;
            font-weight: 700;
            padding: 1rem;
            text-align: center;

            &:hover {
                background: #59b94b;
                color: #fff;
            }
        }
    }

    &__contact {
         padding: 0.5rem;
        color: #6b778c;
        font-size: .9rem;
        line-height: 1.4;
        margin-top: 1rem;
        text-align: center;

        a {
            color: #59b94b;
            font-weight: 700;
        }
    }
}
</style>