import axios from 'axios'

const STUDENTS_API_URL = 'http://localhost:8080/students'


class StudentData {

    getAllStudents() {
        return axios.get(STUDENTS_API_URL);
    }

    getStudent(id) {
        return axios.get(`${STUDENTS_API_URL}/${id}`);
    }

    addStudent(name, email) {
        return axios.post(STUDENTS_API_URL, name, email);
    }

    updateStudent(id, student) {
        return axios.put(`${STUDENTS_API_URL}/${id}`, student);
    }

    deleteStudent(id) {
        return axios.delete(`${STUDENTS_API_URL}/${id}`);
    }

}

export default new StudentData()