import { createContext } from "react";

export const ObserverContext = createContext([[], ()=>{}]);

export const initState = {
    observed: [],
    captionOff: "Obserwuj!",
    captionOn: "Obserwujesz! :)"
}

export const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case "TOGGLE": {
                if(!state.observed.includes(payload)){
                    state = {...state, observed: state.observed.concat(payload)}
                }
                else{
                    state = {...state, observed: state.observed.filter(item => item !== payload)}
                }
                console.log(state.observed);
            }
            break;
        default: console.error(`Incorrect action type: ${type}`);
            break;
    }
    return state;
}