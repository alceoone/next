import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <a className="text-white text-lg font-semibold">Brand Name</a>
                </Link>
                <div className="flex space-x-4">
                    <Link href="/home">
                        <a className="text-white">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-white">About</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-white">Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}