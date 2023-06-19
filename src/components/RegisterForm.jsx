import { useForm } from "react-hook-form";
import { errorStyle, inputStyle, pTagStyle } from "../styles/labelStyles";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data); // aquí se debe hacer la petición al servidor

  return (
    <div className="flex-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Nombre:</p>
            <input placeholder="firstName" className={inputStyle} {...register("firstName", { required: true })} />
            {errors.firstName && <span className={errorStyle}>This field is required</span>}
          </div>

          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Usuario:</p>
            <input className={inputStyle} placeholder="username" {...register("username", { required: true })} />
            {errors.username && <span className={errorStyle}>This field is required</span>}
          </div>
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Email:</p>
            <input className={inputStyle} placeholder="email" {...register("email", { required: true })} />
            {errors.email && <span className={errorStyle}>This field is required</span>}
          </div>
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Contraseña:</p>
            <input className={inputStyle} placeholder="password" {...register("password", { required: true })} />
            {errors.password && <span className={errorStyle}>This field is required</span>}
          </div>
          <div className="flex gap-4 p-2  ">
            <p className={pTagStyle}>Confirme contraseña:</p>
            <label className="flex flex-col w-full">
              <input className={inputStyle} placeholder="confirmPassword" {...register("confirmPassword", { required: true })} />
              {errors.confirmPassword && <span>This field is required</span>}
            </label>
          </div>

          <div className="w-full">
            <div className="flex justify-center items-center">
              <button type="submit" className="flex border bg-blue-500 font-medium w-fit items-center justify-center">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
