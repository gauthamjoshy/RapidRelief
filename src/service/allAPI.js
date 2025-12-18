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