import mockedData from '../../data.js'
import { STATUS_CHANGE } from '../../constants'

export default function candidatesReducer(state = mockedData, action) {

    if (action.type === STATUS_CHANGE) {
        return state.map((candidate) => {
            if (candidate.id !== action.payload.id) {
                return candidate
            }

            return {
                ...candidate,
                status: action.payload.newStatus,
            }
        })
    }

    return state
}