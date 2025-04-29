import { useContext } from "react"
import { Context } from "../../context/MyContext"

const ImagePrevious = () => {

  const { imagePrevious, handleRemoveImage, handleAddImage } = useContext(Context);

  return (
    <>
      <img src={imagePrevious ?? undefined} alt="image-previous"
        className={`${imagePrevious ? 'w-16 h-16 rounded-xl border-2 border-Neutral-300' : ''}`} />
      <div className="flex gap-4">
        <button onClick={handleRemoveImage}
          className="bg-Neutral-700 text-Neutral-300 text-xs rounded-lg px-2 py-1 underline">
          Remove image
        </button>
        <div className="relative bg-Neutral-700 text-Neutral-300 text-xs rounded-lg px-2 py-1">
          <input type="file"
            className="absolute opacity-0 inset-0 w-full h-full"
            accept="image/*"
            onChange={handleAddImage}
          />
          <p>Change image</p>
        </div>
      </div>
    </>
  )
}

export { ImagePrevious };


// {`${imagePrevious ? 'hidden' :'block opacity-0 absolute inset-0 w-full h-full'}`}