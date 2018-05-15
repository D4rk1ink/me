import * as action from '../actions/app'

const initialState = {
    isLoading: true
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case action.ISLOADING:
            return {
                ...state,
                isLoading: payload
            }
        default :
            return state
    }
}