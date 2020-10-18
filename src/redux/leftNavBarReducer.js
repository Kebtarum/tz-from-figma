let initialState = {

    isToggle:false,

}

const leftNavBarReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ON-TOGGLE":
            return {
                ...state,
                isToggle: !state.isToggle,
            };

        default:
            return state;
    }


}

export const onToggle = () => {
    return {
        type: 'ON-TOGGLE',
    }
}

export default leftNavBarReducer;