import React, { useEffect, useState } from "react";
import Router from "next/router";

export default function nav() {
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (Router.router.asPath) {
            const item = Router.router.asPath;
            setQuery(item);
        }
    }, [Router]);

    const [menu, setMenu] = useState(false);
    return (
        <>
            {
                <div onClick={() => setMenu(!menu)} className="flex items-center justify-center rounded-r-md bg-gray-900 text-gray-300 ml-0 cursor-pointer absolute inset-0 mt-10 m-auto w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </div>
            }

            {menu && (
                <div className="overflow-y-scroll lg:overflow-y-auto fixed lg:sticky h-screen min-h-screen lg:h-auto z-40 top-0 bg-gray-900  pt-10 w-64 lg:w-72">
                    <div className="px-8">
                        <div className="flex items-center justify-between">
                            <div className="w-32">
                                <img className="w-full animate-pulse" src="/logo.png" alt="quicklist logo" />
                            </div>
                            <div onClick={() => setMenu(!menu)} className="text-gray-700 ml-8 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                            </div>
                        </div>
                        <ul className="my-10 flex flex-wrap">
                            <li className="w-1/2 flex justify-start mb-6">
                                <a href="/" className="bg-transparent rounded-md text-gray-600 hover:text-white hover:animate-bounce flex flex-col justify-center items-center w-20 h-20 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                                    </svg>
                                    <p className="mt-1 uppercase font-semibold text-xs">Dashboard</p>
                                </a>
                            </li>
                            <li className="w-1/2 flex justify-end mb-6">
                                <a href="/listcoins" className="bg-transparent rounded-md text-gray-600 hover:text-white hover:animate-bounce flex flex-col justify-center items-center w-20 h-20 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                    </svg>
                                    <p className="mt-1 uppercase font-semibold text-xs">Listing</p>
                                </a>
                            </li>
                            <li className="w-1/2 flex justify-start mb-6">
                                <a href="/settings" className="bg-transparent rounded-md text-gray-600 hover:text-white hover:animate-bounce flex flex-col justify-center items-center w-20 h-20 p-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                    <p className="mt-1 uppercase font-semibold text-xs">Settings</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}