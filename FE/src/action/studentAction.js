import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../container";

export const StudentAction = {
    getRequest: createAction(actionTypes.studentType.GET_REQUEST),
    getSuccess: createAction(actionTypes.studentType.GET_SUCCESS),
    getFailure: createAction(actionTypes.studentType.GET_FAILURE),

    addRequest: createAction(actionTypes.studentType.ADD_REQUEST),
    addSuccess: createAction(actionTypes.studentType.ADD_SUCCESS),
    addFailure: createAction(actionTypes.studentType.ADD_FAILURE),

    deleteRequest: createAction(actionTypes.studentType.DELETE_REQUEST),
    deleteSuccess: createAction(actionTypes.studentType.DELETE_SUCCESS),
    deleteFailure: createAction(actionTypes.studentType.DELETE_FAILURE),

    updateRequest: createAction(actionTypes.studentType.UPDATE_REQUEST),
    updateSuccess: createAction(actionTypes.studentType.UPDATE_SUCCESS),
    updateFailure: createAction(actionTypes.studentType.UPDATE_FAILURE),

    paginateRequest: createAction(actionTypes.studentType.PAGINATE_REQUEST),
    paginateSuccess: createAction(actionTypes.studentType.PAGINATE_SUCCESS),
    paginateFailure: createAction(actionTypes.studentType.PAGINATE_FAILURE),

    searchRequest: createAction(actionTypes.studentType.SEARCH_REQUEST),
    searchSuccess: createAction(actionTypes.studentType.SEARCH_SUCCESS),
    searchFailure: createAction(actionTypes.studentType.SEARCH_FAILURE),

}