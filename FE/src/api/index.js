import { Helpers } from "../utils";
import ApiScheme from "./scheme"

export const itemApi = {
    getStudent: Helpers.createApi(ApiScheme.STUDENT.GET_STUDENT),
    addStudent: Helpers.createApi(ApiScheme.STUDENT.ADD_STUDENT),
    deleteStudent: Helpers.createApi(ApiScheme.STUDENT.DELETE_STUDENT),
    updateStudent: Helpers.createApi(ApiScheme.STUDENT.UPDATE_STUDENT),
    paginateStudent : Helpers.createApi(ApiScheme.STUDENT.PAGINATION_STUDENT),
    searchStudent : Helpers.createApi(ApiScheme.STUDENT.SEARCH_STUDENT)

}