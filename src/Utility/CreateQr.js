import {
  CreateAudioQr,
  CreateDocumentQr,
  CreateImageQr,
  CreateMapQr,
  CreatePlayStoreQr,
  CreateSocialQr,
  CreateVideoQr,
  CreateWebsiteQr,
} from "../Api/QR";

export const CreateQr = (
  type,
  dotColor,
  dottype,
  cornersDotColor,
  cornersColor,
  cornerdottype,
  cornertype,
  logo,
  Url,
  navigate
) => {
  switch (type) {
    case "Website": {
      CreateWebsiteQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          alert("qr Created Success");
          navigate("/profile");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "playstore": {
      console.log("loading");
      CreatePlayStoreQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        console.log(res);
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "Audio": {
      CreateAudioQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "Video": {
      CreateVideoQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "Image": {
      CreateImageQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "Pdf": {
      CreateDocumentQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "Map": {
      CreateMapQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
    case "Social": {
      CreateSocialQr({
        Url: Url,
        dotoption: {
          color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
          type: dottype,
        },
        backgroundOption: {
          type: "",
        },
        cornersOptions: {
          color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
          type: cornertype,
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: cornerdottype,
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          navigate("/profile");
          alert("qr Created Success");
        } else {
          alert(res);
        }
      });
      break;
    }
  }
};
