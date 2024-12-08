// src/pages/login/index.tsx
import React from "react";
import { LoginForm } from "./login-form";
import ChooseOrg from "./choose-org";

const Login: React.FC = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-7vh)] w-full items-center justify-center px-4 ">
            <LoginForm />
            <div className="my-4 flex items-center justify-between gap-2 w-full max-w-sm">
                <div className="bg-muted h-[1px] w-full"></div>
                <span>or</span>
                <div className="bg-muted h-[1px] w-full"></div>
            </div>
            <ChooseOrg />
        </div>
    );
};

export default Login;
