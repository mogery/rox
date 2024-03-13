import { ReactNode } from "react";

export default function ListLinkItem({ children }: { children: ReactNode }) {
    return (
        <li className="dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white cursor-pointer px-1">
            {children}
        </li>
    )
}