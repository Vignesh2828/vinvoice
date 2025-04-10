"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

// Variables
import { AUTHOR_GITHUB } from "@/lib/variables";

// Icons (Optional: Install lucide-react or use any other icon lib)
import { Github, Mail, Globe } from "lucide-react";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-10 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    <div className="text-center md:text-left space-y-2">
                        {/* <p className="text-sm text-gray-600">
                            {_t("footer.developedBy")}{" "}
                            <a
                                href={AUTHOR_GITHUB}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Vignesh M
                            </a>
                        </p> */}
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} V-INVOICE. All rights reserved.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <a
                            href={AUTHOR_GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="mailto:mrtnvicky2020@gmail.com"
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://vigneshdev.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            <Globe size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BaseFooter;
