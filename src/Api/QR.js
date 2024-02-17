import { BaseUrl } from "./BaseUrl";

//--------------------WEBSITE------------------------------//
//----------------Create Qr-----------------------//

export const CreateWebsiteQr = async (data) => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWZlNDAwZjg2ZWE4YjZiOWJhN2JjNSIsImlhdCI6MTcwNjUwODg2OCwiZXhwIjoxNzA4NTgyNDY4fQ.qxSNCC3icxA3r13KMegX6YpyOAmZNC-2_9Z_-LPdz7w";
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateWebsiteQr = async (data) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/update`, {
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

//----------------GetAll Qr----------------------//

export const GetWebsiteQr = async () => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/GetAll`, {
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

//--------------------Delete Qr----------------//

export const DeleteWebsiteQr = async (id) => {
  let token = localStorage.getItem("token");
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/DeleteQr/${id}`, {
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

//--------------------------------PLAYSTORE----------------------------------------------//
