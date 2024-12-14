import { Bell, Rocket, SquareTerminal } from "lucide-react"

export default function Footer() {
    return (
        <footer className="flex w-full shrink-0 flex-row items-center justify-end gap-2 h-[4vh] pr-10">
            <nav className="flex justify-center ">
                <span
                    className="inline-flex gap-1 items-center justify-center rounded-md px-4 text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer transition-colors "

                >
                    <Rocket className="w-4 h-4 fill-github" />
                    Updates
                </span>
                <span
                    className="inline-flex gap-1 items-center justify-center rounded-md px-4 text-sm font-medium hover:text-primary/70 cursor-pointer transition-colors "

                >
                    <SquareTerminal className="w-4 h-4 fill-github" />
                    Terminal
                </span>
            </nav>
            <div className="flex   justify-center">
                <span
                    className="inline-flex  items-center  hover:scale-125 hover:rotate-12 transition-transform"

                >
                    <span className="sr-only">YouTube</span>
                    <Bell className="w-4 h-4" />
                </span>
            </div>
        </footer>
    )
}