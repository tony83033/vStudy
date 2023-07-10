"use client"
import React from "react";
import { useState } from "react";
import AppContext from "./appwriteContext";
import { account, databases } from "../appwrite/appwriteConfig";
import { v4 as uuidv4 } from 'uuid';

const Appstate = (props) => {


  
    const addQuiz = (data) => {
        console.log("Inside addQuiz")
        const promise = databases.createDocument(process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_API, 
            process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_QUIZ_COLLECTION_ID, uuidv4(), {
                level: data.level,
                title: data.title,
                Desc: data.description,
                maxMarks: data.maxMarks,
                numQuestions: data.numQuestions,
                teacherId: uuidv4()
            });

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }





    return (
        <AppContext.Provider value={{addQuiz   }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Appstate;