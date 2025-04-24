import IconUpload from "../../assets/images/icon-upload.svg"
import IconInfo from "../../assets/images/icon-info.svg"

const DragAndDrop = () => {
  return (
    <section className="mt-10">
      <p className="text-Neutral-0">Upload Avatar</p>
      <div className="w-full bg-bacground h-36 border-2 border-dashed border-Neutral-500 rounded-2xl mt-2 flex flex-col justify-center items-center gap-5">
        <div className="bg-Neutral-700 w-10 h-10 flex justify-center items-center rounded-xl">
          <img src={IconUpload} alt="icon-upload" />
        </div>
        <p className="text-Neutral-500 font-semibold">Drag and drop or click to upload</p>
      </div>
      <div className="flex mt-2 gap-2">
        <img src={IconInfo} alt="Icon-info" />
        <p className="text-Neutral-500 text-xs">Upload your photo (JPG or PNG, max size: 500KB) </p>
      </div>
    </section>
  )
}

export { DragAndDrop };