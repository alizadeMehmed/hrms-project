import axios from 'axios'


export default class CvService {
    getCvs() {
        return axios.get("http://localhost:8080/api/cvsforcandidate/getall")
    }

    getCvsByGraduateYear() {
        return axios.get("http://localhost:8080/api/cvsforcandidate/getCvOrderByGraduateYear")
    }

    getCvsByExperienceYear() {
        return axios.get("http://localhost:8080/api/cvsforcandidate/getCvOrderByExperienceYear")
    }

    getCvsByIdentityNumber() {
        return axios.get("http://localhost:8080/api/cvsforcandidate/getByIdentityNumber")
    }

}
