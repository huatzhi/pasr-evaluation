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
  },
  methods: {
    toSecondStep: (event) => {
      console.log('current event', event);
    }
  }
});

window.vm = vm;