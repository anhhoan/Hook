import { actionTypes } from "../../container";

const { studentType } = actionTypes;
const INITIAL_STATE = {
    listStudent: [],
    isFetching: false,
    isError: false,
    message: ""
}
export default function HrReducer(
    state = INITIAL_STATE,
    { type, payload }

) {
    switch (type) {
        case studentType.GET_REQUEST:
        case studentType.ADD_REQUEST:
        case studentType.DELETE_REQUEST:
        case studentType.UPDATE_REQUEST:
        case studentType.PAGINATE_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ""
            }
        case studentType.GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listStudent: payload.listStudents
            }
        case studentType.ADD_SUCCESS:
        case studentType.DELETE_SUCCESS:
        case studentType.UPDATE_SUCCESS:

            return {
                ...state,
                isFetching: false,
            }
        case studentType.GET_FAILURE:
        case studentType.ADD_FAILURE:
        case studentType.DELETE_FAILURE:
        case studentType.UPDATE_FAILURE:
        case studentType.PAGINATE_FAILURE:
        case studentType.SEARCH_FAILURE:

            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        case studentType.PAGINATE_SUCCESS:
            console.log(payload,'hihi');
            return {
                ...state,
                isFetchng: false,
                listStudent: payload.data,
                activePage: payload.activePage,
                totalPage: payload.totalPage,
                isError:false
            }

            case studentType.SEARCH_SUCCESS:
            console.log(payload,'hihi');
            return {
                ...state,
                isFetchng: false,
                listStudent: payload.data,
                activePage: payload.activePage,
                totalPage: payload.totalPage,
                nameSearch:payload.nameSearch,
                isError:false
            }

        default:
            return state
    }
}