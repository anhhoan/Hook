// import { PhotoSizeSelectLargeTwoTone } from "@mui/icons-material";
import React, { useEffect, useState, useRef } from "react";
import { UseStudent } from "../hooks"
import { Table } from "@mui/material";
// import io from 'socket.io-client'
export default function StudentComponent() {
    const {
        listStudentss,
        activePage,
        totalPage,
        textSearch,
        handleAddStudents,
        handleDeleteStudents,
        handleUpdateStudents,
        handlePagination,
        handleSearch
    } = UseStudent();
    const lesson = [
        {
            id: 1,
            content: 'comment 1'
        },
        {
            id: 2,
            content: 'comment 2'
        },
        {
            id: 3,
            content: 'comment 3'
        },
    ]
    // const socket=io();
    // const loaclHost = 'http://localhost:3001'

    const [lessonId,setLessonId]= useState(1)   
    useEffect(() => {
    //     const handleComment =({detail})=>{
    //         console.log(detail);
    //     }
    //     window.addEventListener(`lesson-${lessonId}`,handleComment)
    //     return ()=>{
    //         window.removeEventListener(`lesson-${lessonId}`,handleComment)
    //     }

        handlePagination({ activePage: 1 })

    }, []);
    
 
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [nameUpdate, setNameUpdate] = useState('')
    const [nameSearch, setNameSearch] = useState('')
    let arrBtn = []
    for (let i = 1; i <= totalPage; i++) {
        arrBtn.push(i)
    }
    return (
        <div>
            <div>
            
                    <ul>
                        {lesson.map((item)=>(
                            <li 
                            style={{color: item.id===lessonId
                                ? 'red'
                                :null
                            }}
                            key={item.id}
                            onClick={()=> setLessonId(item.id)}
                            >{item.content}</li>
                        ))}
                    </ul>
            </div>
            <div>

                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <button onClick={() => handleAddStudents({ name: name })}>ADD</button>
                <input onChange={(e) => setNameUpdate(e.target.value)}
                    value={nameUpdate} />
                <button onClick={() => handleUpdateStudents({ id: id, name: nameUpdate })}>Update</button>
                <input placeholder="textSearch" onChange={(e) => setNameSearch(e.target.value)}></input>
                <button onClick={() => handleSearch({ nameSearch: nameSearch, activePage: 1 })}>Search</button>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>ID </th>
                        <th> NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listStudentss.map((item, index) => {
                            return (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td><button onClick={() => handleDeleteStudents({ id: item._id })}>Delete</button></td>
                                    <td><button onClick={() => {
                                        setId(item._id)
                                        setNameUpdate(item.name)
                                    }}>Select</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {arrBtn.map((item, key) => {
                return (
                    <button key={key}
                        style={{ backgroundColor: activePage === item ? 'blue' : 'white' }}
                        onClick={() => {
                            textSearch
                                ? handleSearch({ activePage: item, nameSearch: textSearch })
                                : handlePagination({ activePage: item })
                        }}
                    >{item}</button>
                )
            })}

        </div>
    )
}
