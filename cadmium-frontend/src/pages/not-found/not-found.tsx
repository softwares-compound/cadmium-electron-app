import CustomLink from '@/components/ui/link'
import React from 'react'

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full space-y-6 text-center">
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl animate-bounce">404</h1>
                    <p className="text-muted-foreground">Looks like you've ventured into the unknown digital realm.</p>
                </div>
                <CustomLink
                    to="/login"
                    className="inline-flex h-10 items-center bg-secondary text-primary no-underline rounded-md px-8 text-sm font-medium shadow transition-colors"
                >
                    Return to website
                </CustomLink>
            </div>
        </div>
    )
}

export default NotFound