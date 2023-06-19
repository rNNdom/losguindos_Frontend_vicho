import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input defaultValue="firstName" {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div>
        <input defaultValue="username" {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
      </div>
      <div>
        <input defaultValue="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <input defaultValue="password" {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <div>
        <input defaultValue="confirmPassword" {...register("confirmPassword", { required: true })} />
        {errors.confirmPassword && <span>This field is required</span>}
      </div>

      <input type="submit" />
    </form>
  );
}
