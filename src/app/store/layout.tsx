export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <main>
            <nav>Listado de categorias</nav>
            {children}
        </main>
    )
}