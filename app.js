"use strict"

let vm = new Vue({
  el: "#app",
  data: {
    // for debug
    testData: "test data",

    // for system
    page: "step-1",

    // for step 1
    instrument: "",

    // for step 2
    tradeAction: "",

    // for step 3
    
  },
  methods: {
    toSecondStep: (event) => {
      console.log('current event', event);
      vm.page = "step-2";
    },
    toThirdStep: (event) => {
      console.log('current event', event);
      if (!this.tradeAction) {
        // prompt error
      }
    },
  }
});

window.vm = vm;