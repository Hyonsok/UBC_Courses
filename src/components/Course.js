import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Course(id, courses, code, title) {
    return (
        <Link
            to={{
                pathname: `/course/${id}`,
                state : {
                    title,
                    code,
                    courses
                }
            }}
        >
        <div className="course">
            <div className="course_data">
                <ul className="course_list">
                    {courses.map ((course, index) => (
                        <li key={index} className="course_element">
                            {course}
                        </li>
                    ))}
                </ul>
                <h3 className="course_code">{code}</h3>
                <h3 className="course_title">{title}</h3>
            </div>
        </div>
        </Link>
    );
}

Course.propTypes = {
    id: PropTypes.number.isRequired,
    courses: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
};

export default Course;