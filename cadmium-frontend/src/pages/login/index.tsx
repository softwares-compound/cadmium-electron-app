// src/pages/login/index.tsx
import React from "react";
import { LoginForm } from "./login-form";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (

        <div className="flex flex-col h-screen w-full items-center justify-center px-4">
            <LoginForm />
            <div className="my-4 flex items-center justify-between gap-2 w-full max-w-sm">
                <div className="bg-muted h-[1px] w-full"></div>
                <span>or</span>
                <div className="bg-muted h-[1px] w-full"></div>
            </div>

            <Card className="mx-auto max-w-sm w-full">
                <CardHeader>
                    <CardDescription>
                        Choose saved organization.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <Link to={`/rosterly/projects`}>Rosterly</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
