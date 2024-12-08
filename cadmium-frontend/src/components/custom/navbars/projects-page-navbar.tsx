import React from 'react'
import { Button } from "@/components/ui/button"
import { Image, LogOut } from "lucide-react"
import { ThemeToggle } from '../theme/theme-toggle'

const ProjectPageNavbar: React.FC = () => {

    const handleLogout = () => {
        localStorage.clear()
        window.location.href = "/login"
    }
    return (
        // <nav className="fixed top-0 z-10 w-full h-[7vh] px-4 flex items-center justify-between bg-background ">
        <nav className=" h-[7vh] px-4 flex items-center justify-between bg-background ">
            <div>
                <Image width={20} height={20} />
            </div>
            <div className='flex items-center gap-2'>
                <Button variant={"ghost"} className="" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Button>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default ProjectPageNavbar