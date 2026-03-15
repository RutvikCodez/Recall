import { Link } from "@tanstack/react-router"
import { buttonVariants } from "../ui/button"
import { ThemeToggle } from "./theme-toggle"

const Navbar = () => {
  return <nav className="sticky z-50 top-0 border-b bg-background/95 backdrop-blur supports-backdrop-filterbg-background/60:">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <img src="https://tanstack.com/images/logos/logo-color-banner-600.png" alt="Ransatck Start Logo" className="size-8" />
            <h1 className="text-lg font-semibold">Tanstack Start</h1>
        </div>
        <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login" className={buttonVariants({variant: "secondary"})}>Login</Link>
            <Link to="/signup" className={buttonVariants()}>Get Started</Link>
        </div>
    </div>
  </nav>
}

export default Navbar
