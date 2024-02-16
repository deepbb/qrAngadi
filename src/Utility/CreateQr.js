import { CreateWebsiteQr } from "../Api/QR";

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
        console.log(res.data.QrImage);
      });
      break;
    }
    case "playstore": {
      break;
    }
    case "Audio": {
      break;
    }
    case "Video": {
      break;
    }
    case "Image": {
      break;
    }
    case "Pdf": {
      break;
    }
    case "Map": {
      break;
    }
    case "Social": {
      break;
    }
  }
};
