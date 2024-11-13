import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

export default function FullStack () {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
      fetch('http://localhost:5173/courses.json')
      .then((response)=>response.json())
      .then((result)=> {setCourses(result['Full Stack'])})
      .catch((err)=>console.log(err))
    },[])
    

    return <>
    <div className='row justify-content-center'>
    <div>
      <h3 className='m-3'>Full Stack Development</h3>
    </div>
      {courses.map((course, index)=>{
            return (
            <div key={`${course.title}-${index}`} className="card col-lg-3 col-md-5 col-sm-8 col-12 m-3" style={{'width': '18rem'}}>
            <img src={course.imageSrc} className="card-img-top" alt={course.title}/>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <a href="#" className="btn btn-success">Know More</a>
            </div>
          </div>
            )
      })}
    </div>
    </>
}