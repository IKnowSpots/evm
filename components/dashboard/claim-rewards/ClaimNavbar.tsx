"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
// import { useWallet } from "@solana/wallet-adapter-react";

const Navbar = () => {
    // const { wallets } = useWallet();

    // console.log("check", wallets);

    return (
        <nav className=" flex justify-between items-center mx-auto pt-6 pb-4">
            <Link href="/">
                <Image
                    src="/iks-logo.png"
                    width="252"
                    height="300"
                    className=""
                    alt="I know spots logo"
                />
            </Link>

            <button className="bg-white px-4 py-2 rounded-2xl text-black font-semibold">Select Wallet</button>

            {/* <p className=" text-center w-[12%] text-black   rounded-[1.5rem] ">
                Connect Wallet
                <WalletsProvider />
            </p> */}
        </nav>
    );
};
export default Navbar;
