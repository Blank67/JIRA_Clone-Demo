import { Inter } from "next/font/google";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import ReduxProvider from "@/utils/ReduxProvider/ReduxProvider";
import BootstrapProvider from "@/utils/BootstrapProvider/BootstrapProvider";
import PageLoader from "@/components/PageLoader/PageLoader";
import { AxiosInterceptor } from "@/utils/AxiosInterceptor/AxiosInterceptor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Vira",
    description: "Work Management",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <BootstrapProvider>
                    <ReduxProvider>
                        <AxiosInterceptor>
                            <PageLoader />
                            {children}
                        </AxiosInterceptor>
                    </ReduxProvider>
                </BootstrapProvider>
            </body>
        </html>
    );
}
