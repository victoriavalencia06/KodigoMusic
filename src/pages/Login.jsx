import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { user, login, logout } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const onSubmit = (data) => {
        login(data.email);
        navigate("/");
    };

    if (user) {
        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <h2>Bienvenido, {user.email}</h2>
                    <button onClick={logout}>Cerrar sesión</button>
                </div>
            </div>
        );
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2>Inicio de sesión</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Introduce tu correo"
                        {...register('email', {
                            required: 'El correo es obligatorio',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Ingresa un correo válido'
                            }
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <label htmlFor="password">Contraseña</label>
                    <div className="password-wrapper">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Introduce tu contraseña"
                            {...register("password", {
                                required: "La contraseña es obligatoria",
                                minLength: {
                                    value: 6,
                                    message: "La contraseña debe tener mínimo 6 caracteres"
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[@$!%*?&]).{6,}$/,
                                    message:
                                        "Debe incluir al menos una letra mayúscula y un carácter especial (@$!%*?&)"
                                }
                            })}
                        />

                        <button
                            type="button"
                            className="toggle-password"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                    {errors.password && <p className="error">{errors.password.message}</p>}

                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;