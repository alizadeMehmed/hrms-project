import axios from 'axios'


export default class JobPostingService {
    getJobPostings(){
    return axios.get("http://localhost:8080/api/jobposting/getall")}
    getActiveJobPostings(){
        return axios.get("http://localhost:8080/api/jobposting/getAllIsActive")}
    getJobPostingsWithDetails(){
        return axios.get("http://localhost:8080/api/jobposting/getJobAdvertisementWithDetails")
    }
    getByPostingDateAsc(){
        return axios.get("http://localhost:8080/api/jobposting/getByPostingDateAscending")
    }
    getByPostingDateDesc(){
        return axios.get("http://localhost:8080/api/jobposting/getByPostingDateDescending")
    } 
    getByCompanyName(){
        return axios.get("http://localhost:8080/api/jobposting/getByCompanyName")
    }   
}
