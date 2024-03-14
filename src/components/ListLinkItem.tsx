import Link from "next/link";
import { ReactNode } from "react";

export default function ListLinkItem({ children, href = "#" }: { children: ReactNode, href?: string }) {
    return (
        <li className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white px-1">
            <Link href={href}>
                {children}
            </Link>
        </li>
    )
}