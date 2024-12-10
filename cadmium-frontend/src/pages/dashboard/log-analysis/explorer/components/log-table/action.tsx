import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CheckCircle, MoreVerticalIcon, Trash, View } from 'lucide-react'

const ActionButton: React.FC = () => {
    return (
        <div className='flex justify-end '>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <MoreVerticalIcon className='text-foreground w-5' />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                >
                    <DropdownMenuItem>
                        <CheckCircle className="text-muted-foreground" />
                        <span>Mark resolved</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <View className="text-muted-foreground" />
                        <span>Open</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Trash className="text-muted-foreground" />
                        <span>Remove</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default ActionButton