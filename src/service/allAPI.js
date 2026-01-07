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

// get all each user pending report
export const getEachUserPendingReportAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVERURL}/get-pending-user-report`, "", reqHeader)
}

// approve reports
export const approveReportAPI = async (id, reqBody)=>{
    return await commonAPI("PUT", `${SERVERURL}/approve-report/${id}`, reqBody)
}

// assign org
export const assignOrgAPI = async (id, reqBody)=>{
    return await commonAPI("PUT", `${SERVERURL}/assign-org/${id}`, reqBody)
}

// get assigned report
export const getAssignedreportAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVERURL}/get-assigned-report`, "", reqHeader)
}

// accept report
export const acceptReportAPI = async (id, reqHeader)=>{
    return await commonAPI("POST", `${SERVERURL}/accept-assigned-report/${id}`, "", reqHeader)
}

// get-all-assigned-reports
export const getAllAssignedReportAPI = async (reqHeader)=>{
    return await commonAPI("GET", `${SERVERURL}/get-all-assigned-reports`, "", reqHeader)
}

// complete a report
export const completeReportAPI = async (id, reqHeader)=>{
    return await commonAPI("PUT", `${SERVERURL}/complete-report/${id}`, "", reqHeader)
}

// update org profile
export const updateOrgProfileAPI = async (reqBody, reqHeader)=>{
    return await commonAPI("PUT", `${SERVERURL}/update-org-profile`, reqBody, reqHeader)
}

// reject report
export const rejectReportAPI = async (id, reqBody)=>{
    return await commonAPI("PUT", `${SERVERURL}/reject-report/${id}`, reqBody)
}

// get rejected reports admin
export const getRejectedReportAdminAPI = async ()=>{
    return await commonAPI("GET", `${SERVERURL}/get-rejected-reports`)
}

// delete user
export const deleteUserAPI = async (id)=>{
    return await commonAPI("DELETE", `${SERVERURL}/delete-user/${id}`)
}

// delete org
export const deleteOrgAPI = async (id)=>{
    return await commonAPI("DELETE", `${SERVERURL}/delete-org/${id}`)
}

// report org issue
export const reportOrgissueAPI = async (id, reqBody, reqHeader)=>{
    return await commonAPI("PUT", `${SERVERURL}/report-org-issue/${id}`, reqBody, reqHeader)
}

// report user issue
export const reportUserissueAPI = async (id, reqBody, reqHeader)=>{
    return await commonAPI("PUT", `${SERVERURL}/report-user-issue/${id}`, reqBody, reqHeader)
}

// reply to user
export const replyToUserAPI = async (id, reqBody)=>{
    return await commonAPI("PUT", `${SERVERURL}/reply-to-user/${id}`, reqBody)
}

// reply to org
export const replyOrgAPI = async (id, reqBody)=>{
    return await commonAPI("PUT", `${SERVERURL}/reply-to-org/${id}`, reqBody)
}