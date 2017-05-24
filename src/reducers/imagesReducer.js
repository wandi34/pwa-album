export const initialState = {
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_IMAGES':
          return Object.assign(state, {
                images: ["Eins", "Zwei", "Vier"]
              })
        default:
            return state
    }
};
