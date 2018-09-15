"use strict"

let vm = new Vue({
  el: "#app",
  data: {
    // for debug
    testData: "test data",

    // for general text
    engulfingCandle: {
      long: "BUEB",
      short: "BEEB"
    },
    longWickPA: {
      long: "Hammer",
      short: "Shooting Star"
    },

    // for system
    // page: "step-1", 
    page: "step-3", // todo :: change back

    // for step 1
    instrument: "",

    // for step 2
    // tradeAction: "",
    tradeAction: "long", // todo :: change back

    // for step 3
    skipBB: false,
    bbTimeframe: "",
    bbTrend: "",
    bbTrendRemark: "",
    bbPro: {
      engulfing: false,
      engulfingComment: "",
      longWickPA: false,
      longWickPAComment: "",

    },

  },
  methods: {
    toSecondStep: (event) => {
      console.log('current event', event);
      vm.page = "step-2";
    },
    toThirdStep: (event) => {
      console.log('current event', event);
      vm.page = "step-3";
    },
    toForthStep: (event) => {
      console.log('current event', event);
      vm.skipBB = false;
      vm.page = "step-4";
    },
  }
});

window.vm = vm;