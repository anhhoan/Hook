import { useDispatch, useSelector } from "react-redux"
import { StudentAction } from "../action/studentAction"

export const UseStudent = () => {
    const dispatch = useDispatch();
    const textSearch = useSelector((state)=> state.student.nameSearch)
    const listStudentss = useSelector((state) => state.student.listStudent)
    const totalPage = useSelector((state)=>state.student.totalPage)
    const activePage = useSelector((state)=>state.student.activePage)
    const handleGetStudents = () => dispatch(StudentAction.getRequest())
    const handleAddStudents = (data) => dispatch(StudentAction.addRequest(data))
    const handleDeleteStudents = (data)=> dispatch(StudentAction.deleteRequest(data))
    const handleUpdateStudents = (data)=>dispatch(StudentAction.updateRequest(data))
    const handlePagination = (data)=> dispatch(StudentAction.paginateRequest(data))
    const handleSearch = (data)=>dispatch(StudentAction.searchRequest(data))
    return {
        listStudentss,
        handleGetStudents,
        handleAddStudents,
        handleDeleteStudents,
        handleUpdateStudents,
        handlePagination,
        handleSearch,
        totalPage,
        activePage,
        textSearch
    }
}