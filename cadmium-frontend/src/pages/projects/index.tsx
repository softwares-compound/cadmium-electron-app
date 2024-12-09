import { ProjectCardProps } from "@/types/type";
import ProjectCard from "./project-card";
import AddProject from "./add-project";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";



const projects: ProjectCardProps[] = [
    {
        id: "fc8457j8-45ti78feh-4w598to-45wtg-45wtg",
        src: "/rosterly.png",
        alt: "project logo",
        title: "Rosterly.io",
        description: "AI-Powered Workforce & Financial Management for IT and Professional Firms",
        data: [
            {
                name: "New Error",
                value: "03",
                variant: "destructive",
            },
            {
                name: "Code Suggestion",
                value: "07",
                variant: "default",
            },
            {
                name: "Total Error Resolved",
                value: "281",
                variant: "outline",
            },
        ],
        onOpen: () => { },
    },
]

export default function Projects() {
    const { organization } = useAuthStore();
    const navigate = useNavigate();
    return (
        <div className="flex flex-col min-h-[calc(100vh-7vh)] w-full items-center justify-center px-4 ">
            <div className="flex flex-1 flex-col justify-center gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {projects.map((project, index) => (
                        <ProjectCard
                            id={project.id}
                            key={index}
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            alt={project.alt}
                            data={project.data}
                            onOpen={() => {
                                console.log(project.id);
                                navigate(`/${organization.toLowerCase()}/projects/${project.id}/log-analysis/explorer`)
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4 p-4 ">
                <AddProject />
            </div>
        </div>
    );
}

