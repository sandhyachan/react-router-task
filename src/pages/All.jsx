import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../App.css'
import { courseData } from '../components/CourseData';

export default function All () {
  const [courses] = useState(courseData.All)

    return <>
    <div className='row justify-content-center'>
    <div>
      <h3 className='m-3 text-decoration-underline'> All</h3>
    </div>
      {courses.map((course, index)=>{
            return <>
            <div key={`${course.title}-${index}`} className="card col-lg-3 col-md-5 col-sm-8 col-12 m-3" style={{'width': '18rem'}}>
            <img src={course.imageSrc} className="card-img-top card-img-top-custom" alt={course.title}/>
            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <a href="#" className="btn btn-success">Know More</a>
            </div>
          </div>
            </>
      })}
    </div>
    </>
}