import { useForm } from "react-hook-form";
import {
  buttonStyle,
  errorStyle,
  inputStyle,
  pTagStyle,
} from "../styles/labelStyles";
import { loginApi } from "../constants/consultasApi";
import React from "react";
import PropTypes from "prop-types";

export default function LoginForm({ setToken }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await loginApi(data);
    console.log(response);
    setToken(response);
  }; // aquí se debe hacer la petición al servidor

  return (
    <div className="flex-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Email:</p>
            <input
              placeholder="email"
              className={inputStyle}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className={errorStyle}>This field is required</span>
            )}
          </div>
          <div className="flex gap-4 p-2">
            <p className={pTagStyle}>Contraseña:</p>
            <input
              placeholder="password"
              className={inputStyle}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className={errorStyle}>This field is required</span>
            )}
          </div>

          <div className="w-full">
            <div className="flex justify-center items-center">
              <button type="submit" className={buttonStyle}>
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </form>

      <a href="/register">Registrarse</a>
    </div>
  );
}

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
