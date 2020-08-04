import React from 'react';
import axios from 'axios';
import Course from '../components/Course';

class Home extends React.Component {
    state = {
        isLoading : true,
        courses : []
    };

    getCourses = async () => {
        const {data: {data:{courses}}} = await axios.get("https://ubc-courses-api.herokuapp.com/2020W");
        this.setState({courses: courses, isLoading:false})
    }

    componentDidMount() {
        this.getCourses();
    }

    render() {
        const {isLoading, courses} = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading</span>
                    </div>
                ) : (
                    <div className="courses">
                        {courses.map(course => (
                            <Course 
                                key= {course.id}
                                id= {course.id}
                                title={course.title}
                                courses = {course.courses}
                            />
                        ))}
                    </div>
                )}
            </section>
        )
    }
}
export default Home;