import { useState } from "react";

 export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selected = event.target.files[0];
    if (selected) {
      setFile(selected);
    }
  };
  return (
    <div className="relative z-20">
      <h2 className="text-lg text-white font-semibold pt-[40px] ml-139">
        Upload File
      </h2>

      <label
        className="flex flex-col items-center justify-center w-full h-36 max-w-md p-6 border-2 border-dashed border-white/40 rounded-2xl cursor-pointer hover:bg-white/10 transition ml-136 mt-10 absolute z-10    "
        htmlFor="file-upload"
      >
        <p className="text-sm text-white/70">
          Drag and drop or click to upload
        </p>
        <input
          type="file"
          id="file-upload"
          accept="image/png, image/jpeg"
          alt=""
          className="hidden "
          onChange={handleFileChange}
        />
        {file && (
          <p className="mt-2 text-green-400 text-sm">selected:{file.name}</p>
        )}

        <p className="mt-2 text-xs text-white/50">
          Upload your photo (JPG or PNG, max size: 500KB).
        </p>
      </label>
    </div>
  );
}

