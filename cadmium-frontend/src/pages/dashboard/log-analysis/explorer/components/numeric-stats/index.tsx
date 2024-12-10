import { Typography } from '@/components/ui/typography'

const NumericStats = () => {
    return (
        <div className="border-none ring-0 bg-transparent">
            <div className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-2 py-2">
                    <Typography variant="xl" className="">Log captured</Typography>
                    <Typography variant="sm" className="text-muted-foreground">Showing total visitors for the last 3 months</Typography>
                </div>
            </div>
            <div className="p-0 flex flex-1 flex-row flex-wrap justify-start items-center">
                <div className="flex flex-1 flex-col justify-center items-start gap-1 h-28 px-2 data-[active=true]:bg-muted">
                    <span className="text-xs text-muted-foreground">
                        Error Detected
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-3xl">
                        354
                    </span>
                </div>
                <div className="flex flex-1 flex-col justify-center items-start gap-1 h-28 px-2 data-[active=true]:bg-muted">
                    <span className="text-xs text-muted-foreground">
                        Resolved
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-3xl">
                        321
                    </span>
                </div>
                <div className="flex md:hidden xl:flex flex-1 flex-col justify-center items-start gap-1 h-28 px-2 data-[active=true]:bg-muted">
                    <span className="text-xs text-muted-foreground">
                        Suggestions
                    </span>
                    <span className="text-lg font-bold leading-none sm:text-3xl">
                        657
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NumericStats