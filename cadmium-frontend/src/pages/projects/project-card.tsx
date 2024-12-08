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

const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <Card className="w-[320px]">
            <CardHeader className="bg-muted rounded-t-md">
                <div className="flex items-center gap-x-4 border-b">
                    <img
                        src={props.src}
                        alt="Product"
                        width={400}
                        height={500}
                        className="size-12 flex-none rounded-lg object-cover ring-1 ring-ring"
                        style={{ aspectRatio: "400/500", objectFit: "cover" }}
                    />
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
