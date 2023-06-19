import { useForm } from "react-hook-form";

export default function LoginForm() {
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
            <p>Email:</p>
            <input placeholder="email" className="w-full" {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="flex gap-4 p-2">
            <p>Contraseña:</p>
            <input placeholder="password" className="w-full" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
          </div>

          <div className="w-full">
            <div className="flex justify-center items-center">
              <button type="submit" className="flex border bg-blue-500 font-medium w-fit items-center justify-center">
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
