import React from 'react'
import Link from 'next/link'
import Image from "next/image"
function Navbar() {
    return (
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="dispaly flex">
                <Link href="/">
                    <Image
                        width={176}
                        height={32}
                        src={"/images/logo/logo.png"}
                        alt="Logo"
                        priority
                    />
                </Link>
                {/* Logo */}
                {/* Menu Options */}
                <nav className="space-x-6 ms-6">
                    <Link href="/">Home</Link>
                    <Link href="/features">Features</Link>
                    <Link href="/how-it-works">How It Works</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </nav>

                {/* Call-to-Action Buttons */}
            </div>
        </div>
    )
}

export default Navbar
