
import { useContext } from "react";
import IconInfo from "../../assets/images/icon-info.svg"
import { ImagePrevious } from "./ImagePrevious";
import { ImageUpload } from "./ImageUpload";
import { Context } from "../../context/MyContext";
import { IconErrorInfo } from "./IconErrorInfo";

const DragAndDrop = () => {

  const { imagePrevious, handleAddImage, errorDrag } = useContext(Context)

  return (
    <section className="mt-10">

      <p className="text-Neutral-0">Upload Avatar</p>
      <div className="w-full bg-bacground h-36 border-2 border-dashed border-Neutral-500 rounded-2xl mt-2 flex flex-col justify-center items-center gap-5 relative">
        <input type="file"
          required
          className={`${imagePrevious ? 'hidden' : 'block opacity-0 absolute inset-0 w-full h-full'}`}
          accept="image/*"
          onChange={handleAddImage}
        />
        {
          imagePrevious ?
            <ImagePrevious />
            :
            <ImageUpload />
        }
      </div>
      {
        !errorDrag ? <div className="flex mt-2 gap-2">
          <img src={IconInfo} alt="Icon-info" />
          <p className="text-Neutral-500 text-xs">Upload your photo (JPG or PNG, max size: 500KB) </p>
        </div>
          :
          <div className="flex mt-2 gap-2">
            <IconErrorInfo />
            <p className="text-Orange-700 text-xs">File too large. Please upload a photo under 500KB</p>
          </div>
      }


    </section>
  )

}

export { DragAndDrop };




// const DragAndDrop = () => {
//   const [imagePrevious, setimagesPrevious] = useState<string | null>(null);

//   const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const reader = new FileReader();
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     reader.readAsDataURL(files[0]);
//     reader.onload = (event) => {
//       if (!event.target) return;
//       setimagesPrevious(event.target.result as string);
//     };
//   };

//   return (
//     <section className="mt-10">
//       <div className="relative w-full bg-bacground h-36 border-2 border-dashed border-Neutral-500 rounded-2xl flex flex-col justify-center items-center gap-5 cursor-pointer">
//         {/* Input escondido pero funcional */}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleAddImage}
//           className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//         />
//         <div className="bg-Neutral-700 w-10 h-10 flex justify-center items-center rounded-xl">
//           <img src={IconUpload} alt="icon-upload" />
//         </div>
//         <p className="text-Neutral-500 font-semibold">Drag and drop or click to upload</p>
//       </div>
//       {imagePrevious && <img src={imagePrevious} alt="Preview" className="w-20 h-20 mt-4" />}
//       <div className="flex mt-2 gap-2">
//         <img src={IconInfo} alt="Icon-info" />
//         <p className="text-Neutral-500 text-xs">Upload your photo (JPG or PNG, max size: 500KB) </p>
//       </div>
//     </section>
//   );
// };

// export { DragAndDrop };


// ¿Qué cambia aquí?
// El <input type="file"> tiene opacity: 0 y absolute positioning → Esto hace que ocupe todo el espacio del div, permitiendo que los estilos del div se apliquen, pero sin necesidad de una capa separada.

// El cursor-pointer en el <div> → Hace que el área parezca interactiva y funcional para el usuario.

// El input sigue siendo funcional y captura la selección de archivos → Pero ahora está visualmente integrado.

// Con este enfoque, puedes lograr que el <input> tenga los estilos del div, dándole una experiencia más intuitiva y moderna al usuario. 🚀 ¡Pruébalo y dime qué te parece!