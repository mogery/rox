import ListLinkItem from "./ListLinkItem";

export default function Post() {
    return (
        <article className="2xl:w-1/3 xl:w-1/2 lg:w-2/3 w-full border rounded-xl">
            <div className="border-b w-full items-center flex gap-2 px-2 py-2">
                <div className="w-5 h-5 rounded-full dark:bg-white bg-black"></div>
                <h2 className="leading-none font-bold">John Doe</h2>
                <time className="leading-none opacity-75">2m ago</time>
            </div>
            <div className="p-2">
                here's my post lol. what's up nerds!
            </div>
            <ul className="border-t px-2 flex gap-2 py-2 leading-none">
                <ListLinkItem>reply</ListLinkItem>
                <ListLinkItem>share</ListLinkItem>
            </ul>
        </article>
    )
}
