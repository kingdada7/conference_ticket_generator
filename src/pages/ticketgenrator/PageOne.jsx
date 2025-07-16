import BackgroundDesign from "../../Components/BackgroundDesign";
import Form from "../../Components/Form";
import Heading from "../../Components/Heading";
import UploadFile from "../../Components/UploadFile";

export default function PageOne() {
  return (
    <>
      <BackgroundDesign>
        <Heading />
        <UploadFile />
        <Form />
      </BackgroundDesign>
    </>
  );
}
