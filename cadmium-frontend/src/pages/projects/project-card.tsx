import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProjectCardProps } from '@/types/type'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <Card className="w-[320px]">
            <CardHeader className="bg-muted rounded-t-md">
                <div className="flex items-center gap-x-4 border-b">
                    <Avatar className="h-10 w-10 rounded-lg font-bold text-base">
                        <AvatarFallback className="rounded-lg bg-muted-foreground">{props.title.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <CardHeader className="p-0">
                        <CardTitle>{props.title}</CardTitle>
                        <CardDescription className="text-xs">{props.description}</CardDescription>
                    </CardHeader>
                </div>
            </CardHeader>
            <CardContent>
                <dl className="-my-3 divide-y py-4 text-sm/6">
                    {props.data.map(data => (
                        <div key={data.name} className="flex justify-between gap-x-4 py-3">
                            <dt className="">{data.name}</dt>
                            <dd className="">
                                <Badge variant={data.variant}>{data.value}</Badge>
                            </dd>
                        </div>
                    ))}
                </dl>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button onClick={props.onOpen}>
                    Open
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
