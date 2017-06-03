import { REQUEST_IMAGES, RECEIVE_IMAGES} from '../actions/index'

export const initialState = {
  isFetching: false,
  images: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_IMAGES:
          return Object.assign({}, state, {
            images: action.images,
            isFetching: false,
            error: false
            });
        case REQUEST_IMAGES:
          return Object.assign({}, state, {
            isFetching: true
          });
        default:
            return state
    }
};
