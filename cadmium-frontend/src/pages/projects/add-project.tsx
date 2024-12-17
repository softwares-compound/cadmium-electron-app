import { FileCode2, Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useProjectCreateStore } from "@/stores/useProjectCreateStore";


export default function AddProject() {
    const { setName, setDescription, setOpenModal } = useProjectCreateStore();

    return (
        <div className="text-center">
            <FileCode2 className="mx-auto h-12 w-12 text-gray-400" />
            <Typography variant="sm" className="mt-2 font-semibold">
                New projects
            </Typography>
            <Typography variant="sm" className="mt-1 text-muted-foreground">
                Get started by creating a new project.
            </Typography>


            <Dialog>
                <DialogTrigger asChild>
                    <div className="mt-6">
                        <Button onClick={() => setOpenModal(true)}>
                            <Plus aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
                            New Project
                        </Button>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>New project</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="project-name" className="text-right">
                                Project name <span>*</span>
                            </Label>
                            <Input
                                id="project-name"
                                className="col-span-3"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                className="col-span-3"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
