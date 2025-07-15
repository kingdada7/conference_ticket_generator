import Form from "../../Components/Form";
import Heading from "../../Components/Heading";
import UploadFile from "../../Components/UploadFile";

function PageOne() {
  return (
    <div className="bg-[url('/background-desktop.png')] w-full h-full object-fit relative ">
      <Heading />
      <UploadFile />
      <Form />

      <img className="absolute top-[-75px] " src="/pattern-circle.svg" alt="" />
      <img
        className="absolute  top-10 left-279"
        src="/pattern-squiggly-line-top.svg"
        alt=""
      />
      <img className="absolute top-140 left-270 " src="/pattern-circle.svg" alt="" />

      <img className="absolute bottom-200 " src="/pattern-lines.svg" alt="" />
      <img src="/pattern-squiggly-line-bottom-desktop.svg" alt="" />
    </div>
  );
}
export default PageOne;
