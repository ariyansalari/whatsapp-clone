import { useRef, useState } from "react";

export const PictureInput = ({
  readablePicture,
  setReadablePicture,
  setPicture,
}) => {
  const inputRef = useRef();
  const [error, setError] = useState("");
  const handlePicture = (e) => {
    let pic = e.target.files[0];

    if (
      pic.type !== "image/jpeg" &&
      pic.type !== "image/png" &&
      pic.type !== "image/webp"
    ) {
      setError(`${pic.name} format is not supported.`);
      return;
    } else if (pic.size > 1024 * 1024 * 5) {
      setError(`${pic.name} is too large, maximum 5mb allowed.`);
      return;
    } else {
        setError('')
      setPicture(pic);
      //reading the image
      const reader = new FileReader();
      reader.readAsDataURL(pic);
      reader.onload=(e)=>{
        setReadablePicture(e.target.result)
      }
    }
  };
  const handleChangePic=()=>{
    setPicture('')
    setReadablePicture('')

  }
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
      <label htmlFor="picture" className="text-sm font-bold tracking-wide">
        Picture (optional)
      </label>
      {readablePicture ? (
        <div>
          <img className="w-20 h-20 object-cover rounded-full" src={readablePicture} alt="uploadImage" />
          <div className="w-20 dark:bg-dark_bg_3 rounded-md text-xs flex items-center justify-center cursor-pointer mt-2 py-1">
          <button onClick={()=>handleChangePic()}>
            Rempve
          </button>

            </div>
        </div>
      ) : (
        <div
          onClick={() => inputRef.current.click()}
          className="w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer"
        >
          Upload picture
        </div>
      )}
      <input
        onChange={handlePicture}
        type="file"
        name="picture"
        id="picture"
        hidden
        ref={inputRef}
        accept="image/png,image/jpeg,image/webp"
      />
      <div className="mt-2 ">
        <p className="text-red-400 text-wrap ">{error}</p>
      </div>
    </div>
  );
};
