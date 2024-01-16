"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const siteRoutes = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Posts",
        href: "/posts"
    },
    {
        label: "About",
        href: "/about"
    },
];

export default function SiteNav() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className="flex gap-x-5 text-[14px]">
                {siteRoutes.map((siteRoute) => (
                    <li key={siteRoute.href}>
                        <Link
                            href={siteRoute.href}
                            className={`text-zinc-400
                        transition ${
                            pathname === siteRoute.href ?
                            "text-sinc-900" : ""
                        }`}
                        >
                        {siteRoute.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}