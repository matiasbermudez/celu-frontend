'use client'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type LoginFormData = {
    email: string;
    password: string;
};


export const LoginForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>();

    const LoginFetch = async (DataLogin : LoginFormData) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(DataLogin),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('token', result.token)
                router.push('/')
            } else {
                console.error('Error:', response.statusText);
            }
        }catch (error) {
        console.error("Error fetching products:", error);
    }
}

const onSubmit = async (data: LoginFormData) => {
    LoginFetch(data)
};

return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="
        w-full max-w-sm
        bg-[var(--color-card)]
        border border-white/10
        rounded-xl
        p-6
        flex flex-col gap-4
      "
    >
        <h1 className="text-xl font-semibold text-center">
            Iniciar sesión
        </h1>

        <div className="flex flex-col gap-1">
            <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none"
                {...register('email', { required: 'El email es obligatorio' })}
            />
            {errors.email?.message && (
                <span className="text-sm text-red-400">
                    {errors.email.message}
                </span>
            )}
        </div>

        <div className="flex flex-col gap-1">
            <input
                type="password"
                placeholder="Contraseña"
                className="bg-transparent border border-white/10 rounded-md px-3 py-2 outline-none"
                {...register('password', { required: 'La contraseña es obligatoria' })}
            />
            {errors.password?.message && (
                <span className="text-sm text-red-400">
                    {errors.password.message}
                </span>
            )}
        </div>

        <button
            type="submit"
            disabled={isSubmitting}
            className="
          mt-2
          bg-[var(--color-primary)]
          text-black
          font-medium
          py-2 rounded-md
          hover:opacity-90
          transition
          disabled:opacity-50
        "
        >
            {isSubmitting ? 'Entrando...' : 'Entrar'}
        </button>
    </form>
);
};
