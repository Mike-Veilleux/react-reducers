
import { useReducer } from "react";

const usePerson = () => {

    const initialState = { name: "Mike", age: 47, isTyping: false };

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case "changePersonAge": {
                return {
                    ...state,
                    age: action.newAge,
                };
            }
            case "changePersonName": {
                return {
                    ...state,
                    name: action.newName,
                    isTyping: true
                };
            }
        }
        throw Error("Unknown action: " + action.type);
    }

    function changePersonAge(e) {
        dispatch({
            type: "changePersonAge",
            newAge: e.target.value,
        });
    }

    function changePersonName(e, prefix) {
        dispatch({
            type: "changePersonName",
            newName: `${prefix}${e.target.value}`,
        });
    }
    return {
        state,
        changePersonAge,
        changePersonName
    }

}

export default usePerson



