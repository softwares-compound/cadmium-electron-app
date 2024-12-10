export default function ComingSoon() {
    return (
        <div className="flex flex-col min-h-[80dvh]">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-6 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter">Coming Soon</h1>
                                <p className="max-w-[600px] text-muted-foreground text-tiny">
                                    We're working hard to bring you an amazing new feature. Stay tuned for updates!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}