import React, { useState } from 'react';
import './style.css';
import { databases } from '../../appwrite/appwriteConfig';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';







const Quiz_dashboard = () => {
    const [data, setdata] = useState([]);
  useEffect(() => {
    const promise = databases.listDocuments(process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_API, process.env.REACT_APP_APPWRITE_VSTUDY_DATABASE_QUIZ_COLLECTION_ID);

    promise.then(function (response) {
      //  console.log("This is the response",response); // Success
      setdata(response.documents)
      console.log(data)
    }, function (error) {
      console.log(error); // Failure

    });

  }, [])


  const styles = {
    img: {
      maxWidth: '50px',
    },
  };
  return (
    <>
      <div className="testimonials-container">
        <Link to={'add_quiz'}>
          <button><span>Add New Quiz</span>
            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
            </svg>
          </button> </Link>
        <div className='subjects'>
          {/* ====================================== */}
          { data && data.map((data) => {
            return <>
              <div className="testimonial-tile">
                <div className='marks'><h5>max marks: {data.maxMarks	}</h5></div>

                <div class="card-body">
                  <small class="card-meta">{data.title}</small>
                  <h4 className="card-title mt-0 "><a class="text-white" herf="#">{data.title}</a></h4>
                  <div className='time'>
                    <small><img width="34" height="34" src="https://img.icons8.com/arcade/64/property-time.png" alt="property-time" />    9:05 PM, October 15, 2020</small>
                    <br></br>

                    <small><img width="34" height="34" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-stop-watch-productivity-flaticons-lineal-color-flat-icons.png" alt="external-stop-watch-productivity-flaticons-lineal-color-flat-icons" />  Time Duration : 30 mins</small>
                  </div>
                  <p className="testimonial-text">{data.Desc}</p>
                </div>
                <hr></hr>
                <div className="card-footer">
                  <div className="media">
                    <div className='middle'>
                      <h6 class="my-0 text-white d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                      <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/contract.png" alt="contract" />

                    </div>
                    <a className='result'><img width="40" height="40" src="https://img.icons8.com/external-beshi-glyph-kerismaker/48/000000/external-Checking-business-beshi-glyph-kerismaker.png" alt="external-Checking-business-beshi-glyph-kerismaker" /></a>

                    <div>
                      <a class="bin">
                        <img width="50" height="52" src="https://img.icons8.com/arcade/64/000000/filled-trash.png" alt="filled-trash" />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </>
          })}





          {/* ================================================================== */}

        </div>

      </div>
    </>

  );
};



export default Quiz_dashboard




