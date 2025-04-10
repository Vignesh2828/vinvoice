import { useMemo } from "react";

// ShadCn
import { Card } from "@/components/ui/card";

// Components
import { ThemeSwitcher } from "@/app/components";

const BaseNavbar = () => {
    const devEnv = useMemo(() => {
        return process.env.NODE_ENV === "development";
    }, []);

    return (
        <header className="w-full z-[99] shadow-sm border-b bg-white dark:bg-gray-900">
            <nav className="lg:container mx-auto px-4 py-3">
                <Card className="flex justify-between items-center px-5 py-3">
                    {/* Logo or Title */}
                    <div className="text-xl font-bold text-gray-800 dark:text-white tracking-wide">
                        V-INVOICE
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                       
                        <ThemeSwitcher />
                    </div>
                </Card>
            </nav>
        </header>
    );
};

export default BaseNavbar;
