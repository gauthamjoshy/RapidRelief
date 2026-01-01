import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// user register
export const userRegisterAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/user-register`, reqBody)
}

// org register
export const orgRegisterAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/org-register`, reqBody)
}

// admin Login
export const adminLoginAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/admin-login`, reqBody)
}

// user Login
export const userLoginAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/user-login`, reqBody)
}

// org Login
export const orgLoginAPI = async (reqBody)=>{
    return await commonAPI("POST", `${SERVERURL}/org-login`, reqBody)
}

// user submits report
export const userSubmitReportAPI = async (reqBody, reqHeader)=>{
    return await commonAPI("POST", `${SERVERURL}/user-report`, reqBody, reqHeader)
}

// get all reports at admin
export const getAllReportsAdminAPI = async ()=>{
    return await commonAPI("GET", `${SERVERURL}/get-all-reports-admin`)
}

// get all users at admin
export const getAllUsersAdminAPI = async ()=>{
    return await commonAPI("GET", `${SERVERURL}/get-all-users`)
}

// get all org at admin
export const getAllOrgAdminAPI = async ()=>{
    return await commonAPI("GET", `${SERVERURL}/get-all-org`)
}

// get all each users own reports
export const getEachUserReportAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVERURL}/get-eachUser-report`, "", reqHeader)
}
