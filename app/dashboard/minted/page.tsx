"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import CardsMinted from "@/components/cardsMinted";
import DashNav from "@/components/dashboard/Navbar";
import { useEffect, useState } from "react";
import { fetchMintedCollection } from "../../../utils";
import LoadingModal from "@/components/LoadingModal";

const MintedCollections = () => {
    const [mintedCollection, setMintedCollection] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMintedCollectionData();
    }, []);

    async function fetchMintedCollectionData() {
        try {
            setLoading(true);
            let data: any = await fetchMintedCollection();
            setMintedCollection(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (loading == true)
        return (
            <Layout>
                {/* <div className="text-white">Fetching..</div> */}
                <LoadingModal visible={true}/>
            </Layout>
        );

    if (loading == false && mintedCollection.length == 0)
        return (
            <Layout>
                <div className="text-white p-4">No Events</div>
            </Layout>
        );

    return (
        <Layout>
            <div className="flex gap-x-6 gap-y-5 flex-wrap pt-4 px-6">
                {mintedCollection.map((nft: any, i: any) => {
                    return (
                        <CardsMinted
                            setMintedCollection={setMintedCollection}
                            key={i}
                            image={nft.cover}
                            name={nft.name}
                            tokenId={nft.tokenId}
                            supply={nft.supply}
                        />
                    );
                })}
                {/* <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" />
                        <CardsMinted tokenId="01" image={"3.png"} name="Lorem Ipsum" /> */}

                {/* <div className="">
                        <Calender className="rounded-xl py-8 px-2 items-center bg-black text-center justify-around " />
                    </div> */}
            </div>
        </Layout>
    );

    function Layout({ children }: { children: React.ReactNode }) {
        return (
            <div className="flex w-full">
                <Sidebar />
                <div className="bg-[#25143a] w-[80%] min-h-screen overflow-y-auto">
                    <DashNav />
                    <div className="px-12 ">
                        <div className="bg-createEvent blur-[220px] absolute w-[70%] h-[75vh] z-[-1]" />
                        <p className="text-white font-semibold pl-4 pt-2">
                            MINTED COLLECTIONS
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
};

export default MintedCollections;
