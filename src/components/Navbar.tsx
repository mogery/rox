import ListLinkItem from "./ListLinkItem"

export default function Navbar() {
    return (
        <nav className="flex gap-8 border-b items-center justify-between py-2 px-4 shrink-0">
            <h1 className="text-3xl font-bold leading-none">rox</h1>
            <ul className="flex gap-2 items-center">
                <ListLinkItem href="/new">+ post</ListLinkItem>
                <ListLinkItem>sign in</ListLinkItem>
            </ul>
        </nav>
    )
}
