import IconUpload from "../../assets/images/icon-upload.svg"

const ImageUpload = () => {
  return (
    <>
      <div className="bg-Neutral-700 w-10 h-10 flex justify-center items-center rounded-xl">
        <img src={IconUpload} alt="icon-upload" />

      </div>
      <p className="text-Neutral-500 font-semibold">Drag and drop or click to upload</p>
    </>
  )
};

export { ImageUpload };
