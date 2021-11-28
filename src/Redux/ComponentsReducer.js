import DefaultComponents from "../Data/ComponentsData";


let initialState = DefaultComponents;


const componentsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export default componentsReducer;