import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appointments: []
  },

  mutations: {
    setAppointments(state, payload) {
      state.appointments = payload;
    },
  },

  actions: {
    async loadAppointments(context) {
      try{
        const response = await fetch('https://api-staging.felmo.de/v1/scheduling/availabilities?zip=10117'); 

        const responseData = await response.json();

        if (!response.ok) {
          const error = new Error(responseData.message || 'Failed to fetch appointments data!');
          throw error;
        }

        context.commit('setAppointments', responseData);
      } catch (error) {
        console.log(error);
      }
    },
    
    async selectSlot(_, payload) {
      try {
        const response = await fetch('https://api-staging.felmo.de/coding-challenge', {
            method: 'POST',
            body: JSON.stringify(payload)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send data!');
            throw error;
        }

        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  },

  getters: {
    getAppointments(state) {
      return state.appointments;
    }
  }
})
