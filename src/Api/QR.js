import { BaseUrl } from "./BaseUrl";

//--------------------WEBSITE------------------------------//

//----------------Create Qr-----------------------//

export const CreateWebsiteQr = async () => {
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/Create`, {
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

//----------------Update Qr----------------------//

export const UpdateWebsiteQr = async () => {
  try {
    let result = await fetch(`${BaseUrl}/Qr/Websiteurl/update`, {
      method: "PUT",
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
