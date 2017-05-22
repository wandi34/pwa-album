


const images = (state = {}, action) => {
    switch (action.type) {
        case 'GET_IMAGES':
            return {
                images: ["Eins", "Zwei", "Drei"]
            };
        default:
            return state
    }
};

export default images