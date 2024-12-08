import { FileCode2, Plus } from "lucide-react";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { useTerminalDrawerStore } from "@/stores/useTerminalDrawerStore";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";


export default function AddProject() {
    const { openDrawer, setOpenDrawer } = useTerminalDrawerStore();

    return (
        <div className="text-center">
            <FileCode2 className="mx-auto h-12 w-12 text-gray-400" />
            <Typography variant="sm" className="mt-2 font-semibold">
                New projects
            </Typography>
            <Typography variant="sm" className="mt-1 text-muted-foreground">
                Get started by creating a new project.
            </Typography>
            <div className="mt-6">
                <Button onClick={() => setOpenDrawer(true)}>
                    <Plus aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
                    New Project
                </Button>
            </div>
            <Drawer open={openDrawer} onOpenChange={setOpenDrawer} >
                <DrawerContent className="h-[580px]">
                    <DrawerHeader>
                        <DrawerTitle>Cadmium terminal</DrawerTitle>
                        <DrawerDescription>Clone your project.</DrawerDescription>
                    </DrawerHeader>
                    <div className="px-4">
                        {/* <XTermComponent /> */}
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}
