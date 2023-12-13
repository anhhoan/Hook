import { put, takeLatest } from "@redux-saga/core/effects";
import { StudentAction } from "../action/studentAction"
import { actionTypes, LIMIT } from "../container";
import { itemApi } from "../api"
// import { teal } from "@mui/material/colors";

function* handleGetStudent() {
    try {
        const res = yield itemApi.getStudent(null, null, null)
        yield put(StudentAction.getSuccess({
            listStudents: res.getData
        }))
    } catch (error) {
        yield put(StudentAction.getFailure({
            message: error.message
        }))
    }
}

function* handleAddStudent({ payload }) {
    console.log(payload)
    try {
        yield itemApi.addStudent(null, null, payload)
        yield put(StudentAction.addSuccess())
        yield put(StudentAction.getRequest())
    } catch (error) {
        yield put(StudentAction.addFailure(error))
    }
}
function* handleDeleteStudent({payload}){
    console.log(payload,'hoan');
    try {
        yield itemApi.deleteStudent(payload,null,null)
        yield put(StudentAction.deleteSuccess())
        yield put(StudentAction.getRequest())
    } catch (error) {
        yield put(StudentAction.deleteFailure())
    }
}
function* handleUpdateStudent({payload}){
    console.log(payload.id,payload.name,'hihi');
    try {
        yield itemApi.updateStudent(payload,null,payload)
        yield put(StudentAction.updateSuccess())
        yield put(StudentAction.getRequest())
    } catch (error) {
        yield put(StudentAction.updateFailure())
    }
}
function* handlePagination({payload}){
    try {
        console.log(payload,'--->pagination data');
       const res = yield itemApi.paginateStudent(null,{activePage :`${payload.activePage}&`, limit:LIMIT},null)
        yield put(StudentAction.paginateSuccess({
            activePage:payload.activePage,
            totalPage:res.totalPage,
            data:res.getData

        }))
    } catch (error) {
        yield put(StudentAction.paginateFailure())
    }
}

function* handleSearch({payload}){
    try {
       const res = yield itemApi.searchStudent(null,{activePage :`${payload.activePage}&`, limit:`${LIMIT}&`,nameSearch:payload.nameSearch},null)
       console.log(res,'hoaann');
        yield put(StudentAction.searchSuccess({
            activePage:payload.activePage,
            totalPage:res.totalPage,
            data:res.getData,
            nameSearch:payload.nameSearch

        }))
    } catch (error) {
        yield put(StudentAction.searchFailure())
    }
}
const studentSaga = [
    takeLatest(actionTypes.studentType.GET_REQUEST, handleGetStudent),
    takeLatest(actionTypes.studentType.ADD_REQUEST, handleAddStudent),
    takeLatest(actionTypes.studentType.DELETE_REQUEST,handleDeleteStudent),
    takeLatest(actionTypes.studentType.UPDATE_REQUEST,handleUpdateStudent),
    takeLatest(actionTypes.studentType.PAGINATE_REQUEST,handlePagination),
    takeLatest(actionTypes.studentType.SEARCH_REQUEST,handleSearch)

]
export default studentSaga