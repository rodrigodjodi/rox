import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    innerHeight: 0,
    apartamentos: [
      {
        id: "final1",
        route: "/apartamentos/final1",
        text: "Apto. Final 1",
        aba: "Final 1",
        tipologia: "3 quartos (1 suíte)",
        area: "86,54 m²",
        vagas: "1 vaga dupla"
      },
      {
        id: "final2",
        route: "/apartamentos/final2",
        text: "Apto. Final 2",
        aba: "Final 2",
        tipologia: "3 quartos (1 suíte)",
        area: "85,19 m²",
        vagas: "1 vaga dupla"
      },
      {
        id: "final3",
        route: "/apartamentos/final3",
        text: "Apto. Final 3",
        aba: "Final 3",
        tipologia: "2 quartos (1 suíte)",
        area: "68,58 m²",
        vagas: "1 vaga simples ou 1 vaga dupla"
      },
      {
        id: "final4",
        route: "/apartamentos/final4",
        text: "Apto. Final 4",
        aba: "Final 4",
        tipologia: "3 quartos (1 suíte)",
        area: "85,19 m²",
        vagas: "1 vaga dupla"
      },
      {
        id: "final5",
        route: "/apartamentos/final5",
        text: "Apto. Final 5",
        aba: "Final 5",
        tipologia: "3 quartos (1 suíte)",
        area: "85,93 m²",
        vagas: "1 vaga dupla"
      },
      {
        id: "final6",
        route: "/apartamentos/final6",
        text: "Apto. Final 6",
        aba: "Final 6",
        tipologia: "2 quartos (1 suíte)",
        area: "69,86 m²",
        vagas: "1 vaga simples ou 1 vaga dupla"
      },
      {
        id: "coberturafinal1",
        route: "/apartamentos/coberturafinal1",
        text: "Cobertura Final 1",
        aba: "Cob. Final 1",
        tipologia: "4 quartos (2 suítes)",
        area: "148,14 m²",
        areaterraco: "45,27 m²",
        vagas: "1 vaga dupla e 1 vaga simples"
      },
      {
        id: "coberturafinal2",
        route: "/apartamentos/coberturafinal2",
        text: "Cobertura Final 2",
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
    },
    ON_RESIZE(state, size) {
      state.innerHeight = size;
    }
  },
  actions: {}
});
