import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { account ,databases } from '../../appwrite/appwriteConfig';
import { v4 as uuidv4 } from 'uuid';
const Add_new = () => {
  const [level, setLevel] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [maxMarks, setMaxMarks] = useState('');
  const [numQuestions, setNumQuestions] = useState('');


  const  data ={ level , title , description , maxMarks , numQuestions
  }

 

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaxMarksChange = (event) => {
    setMaxMarks(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform actions with the form data

    
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
        toast.success('Quiz added Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          
      }, function (error) {
        toast.warn('Something went wrong please try again later', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          
      });
  
    // Reset the form after submission
    setLevel('');
    setTitle('');
    setDescription('');
    setMaxMarks('');
    setNumQuestions('');
  };

  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <form className="form-container" >
      <div className="form-group">
        <label htmlFor="level">Level:</label>
        <select id="level" value={level} onChange={handleLevelChange}>
          <option value="">Select Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="form-group">
        <label htmlFor="maxMarks">Maximum Marks:</label>
        <input type="number" id="maxMarks" value={maxMarks} onChange={handleMaxMarksChange} />
      </div>
      <div className="form-group">
        <label htmlFor="numQuestions">Number of Questions:</label>
        <input type="number" id="numQuestions" value={numQuestions} onChange={handleNumQuestionsChange} />
      </div> 
      {/* <Link to='/dashboard'> */}
      <button type='submit'

      onClick={handleSubmit}
      >
        <span>Add New Quiz</span>
        <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
        </svg>
      </button>
      {/* </Link>      */}
    </form>
    </>
  );
};

export default Add_new;
