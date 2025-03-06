import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useEffect,useState } from 'react';


export default function Courses() {

  const[course_list,setCourse_list]=useState([]);
  const fetchcourse=async()=>{
    try{
      const courses=await axios.get("http://localhost:5000/courses");
      if(courses){
        setCourse_list(courses.data);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{fetchcourse()},[]);


  return (
    <>

      <div className="container ">
        <h1 className="text-center mt-4">
          AVAILABLE COURSES
        </h1>
          <div className="row justify-content-center">
            {
              course_list.map((item) => (
                <div className='col-12 col-md-4  mt-4 d-flex justify-content-center'>
                  <Card className='h-100 rounded-4 course-card' key={item.id} style={{maxWidth:"250px",placeItems: "center"}}>
                    <div className="text-center">
                    <Card.Img variant="top" src={item.url} style={{height:"150px",width:"150px",margin: "0 auto"}} />
                    </div>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.description}
                      </Card.Text>
                      <Link to={`/eachcourse/${item.id}`}>
                        <Button variant="primary">View Course</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  </div>
            ))
          }
        </div>
      </div>
    </>
  );
}