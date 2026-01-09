'use client'
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const { isAuthenticated, isCheckingAuth } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (!isAuthenticated && !isCheckingAuth) {
            router.push('/login');
        }
    }, [isAuthenticated, isCheckingAuth, router]);


    if (!isAuthenticated && isCheckingAuth) {
        return null;
    }

    return (
        <div className="p-6 bg-[var(--color-card)] rounded-xl border border-white/10 max-w-4xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Bienvenido al Dashboard</h1>
            <p className="text-[var(--color-muted)]">
                Aquí puedes gestionar tu cuenta y ver información exclusiva.
            </p>
        </div>
    )
}
