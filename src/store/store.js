import {defineStore} from "pinia";
import pastRes from '../past-research.json'
import findings from '../findings.json'
import publications from '../publications.json'
import researchers from '../researchers.json'
import us from '../us.json'

export const useStore = defineStore('Main', {
    state: () => ({
        currentRoute: "Home",
        Publications: publications,
        Researchers: researchers,
        PastResearch: pastRes,
        Findings: findings,
        Us: us,
    }),
    getters: {
        getRoute: (state) => {
            return state.currentRoute;
        },
        getPublications: (state) => {
            return state.Publications;
        },
        getResearchers: (state) => {
            return state.Researchers;
        },
        getPastResearch: (state) => {
            return state.PastResearch;
        },
        getFindings: (state) => {
            return state.Findings;
        },
        getUs: (state) => {
            return state.Us;
        }
    },
    actions: {
        setRoute(route) {
            this.currentRoute = route;
        }
    }
});