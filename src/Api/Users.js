import { BaseUrl } from "./BaseUrl";

//---------------Sign Up-------------------//
export const SignUp = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/Users/Signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//----------------Sign In---------------------//
export const SignIn = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/Users/Signin`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------Otp Send-------------------//
export const OtpSend = async (data) => {
  try {
    let result = await fetch(`${BaseUrl}/Users/otp`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------Forget Password-------------------//
export const ForgetPassword = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Users/ResetPassword`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//------------------Forget Password-------------------//
export const GetProfile = async () => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Users/profile`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//---------------------Update Profile------------------//
export const UpdateProfile = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Users/UpdateUser`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};

//-------------------Get Analytices--------------------//

export const GetAnalytices = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Scan/Scan/getanalytices`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
        token: token,
      },
    });
    result = await result.json();
    return result;
  } catch (error) {
    return error.message;
  }
};
