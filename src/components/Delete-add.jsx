import { useState } from "react";

function Add() {
    let [pro, setpro] = useState([
        {
            id: 1,
            name: "food",
            price: 200,
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Ffast-food&psig=AOvVaw2EtvHrMl5lu32mgyDc9_R3&ust=1718964707778000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCFq-L46YYDFQAAAAAdAAAAABAE"

        },
        {
            id: 2,
            name: "fruit",
            price: 300,
            img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fruitsmith.com%2Fblog%2Fpost%2Fone-seed-fruits-to-include-in-diet&psig=AOvVaw1vTnCwZ_Q1q9FCx72by0Iq&ust=1718964821009000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODhgpb56YYDFQAAAAAdAAAAABAE"

        },])
    {

    }

    return (
        <>
            <div className="row">
                {pro.map((val) => {
                    return (

                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={val.img} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{val.id}</h5>

                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val.name}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{val.price}</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}