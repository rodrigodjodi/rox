import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    apartamentos: [
      {
        url: "final1",
        txt: "Apto. Final 1",
        aba: "Final 1",
        tipologia: "3 quartos (1 suíte)",
        area: "86,54 m²",
        vagas: "1 vaga dupla"
      },
      {
        url: "final2",
        txt: "Apto. Final 2",
        aba: "Final 2",
        tipologia: "3 quartos (1 suíte)",
        area: "85,19 m²",
        vagas: "1 vaga dupla"
      },
      {
        url: "final3",
        txt: "Apto. Final 3",
        aba: "Final 3",
        tipologia: "2 quartos (1 suíte)",
        area: "68,58 m²",
        vagas: "1 vaga simples ou 1 vaga dupla"
      },
      {
        url: "final4",
        txt: "Apto. Final 4",
        aba: "Final 4",
        tipologia: "3 quartos (1 suíte)",
        area: "85,19 m²",
        vagas: "1 vaga dupla"
      },
      {
        url: "final5",
        txt: "Apto. Final 5",
        aba: "Final 5",
        tipologia: "3 quartos (1 suíte)",
        area: "85,93 m²",
        vagas: "1 vaga dupla"
      },
      {
        url: "final6",
        txt: "Apto. Final 6",
        aba: "Final 6",
        tipologia: "2 quartos (1 suíte)",
        area: "69,86 m²",
        vagas: "1 vaga simples ou 1 vaga dupla"
      },
      {
        url: "coberturafinal1",
        txt: "Cobertura Final 1",
        aba: "Cob. Final 1",
        tipologia: "4 quartos (2 suítes)",
        area: "148,14 m²",
        areaterraco: "45,27 m²",
        vagas: "1 vaga dupla e 1 vaga simples"
      },
      {
        url: "coberturafinal2",
        txt: "Cobertura Final 2",
        aba: "Cob. Final 2",
        tipologia: "4 quartos (2 suítes)",
        area: "146,43 m²",
        areaterraco: "36,20 m²",
        vagas: "1 vaga dupla e 1 vaga simples"
      }
    ]
  },
  mutations: {
    SET_TITLE(state, title) {
      state.title = title;
    }
  },
  actions: {}
});
