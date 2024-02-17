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
  logo,
  Url
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
        }
      });
      break;
    }
    case "playstore": {
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
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
          type: "dots",
        },
        cornersDotOptions: {
          color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
          type: "dots",
        },
        image: logo,
      }).then((res) => {
        if (res.status === "success") {
          return res.data;
        } else {
          return res;
        }
      });
      break;
    }
  }
};
