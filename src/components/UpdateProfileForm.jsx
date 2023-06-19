import { useForm } from "react-hook-form";
import { errorStyle, inputStyle, pTagStyle } from "../styles/labelStyles";

export default function UpdateProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data); // aquí se debe hacer la petición al servidor
  /*   {
  "usrName": "lucas",
    "usrFristName": "pollo",
  "usrEmail": ""
    }
    */
  return (
    <div className="flex-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Nombre:</p>
            <input placeholder="Nombre" className={inputStyle} {...register("name", { required: true })} />
            {errors.name && <span className={errorStyle}>This field is required</span>}
          </div>
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Usuario:</p>
            <input placeholder="Usuario" className={inputStyle} {...register("user", { required: true })} />
            {errors.user && <span className={errorStyle}>This field is required</span>}
          </div>
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Email:</p>
            <input placeholder="example@example.com" className={inputStyle} {...register("email", { required: true })} />
            {errors.email && <span className={errorStyle}>This field is required</span>}
          </div>

          <div className={"w-full"}>
            <div className="flex justify-center items-center">
              <button type="submit" className="flex border bg-blue-500 font-medium w-fit items-center justify-center">
                Actualizar Perfil
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
