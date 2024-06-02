"use client";
import Link from "next/link";
import Header from "./Header";
import Offer from "./Offer";
import Category from "./Category";
import { useEffect, useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbPlugConnected } from "react-icons/tb";
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';

export default function App() {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products/categories?skip=0&limit=10');
                const data = await res.json();
                console.log(data);
                setCategory(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        if(tour){
            tour.cancel();
        }

        const newTour = new Shepherd.Tour({
            useModalOverlay: true,
            defaultStepOptions: {
                scrollTo: true
            }
        });

        newTour.addStep({
            id: 'header',
            text: 'Here you can search products of your need',
            attachTo: {
                element: '.header-section',
                on: 'bottom'
            },
            buttons: [
                {
                    classes:'shepherd-button-primary',
                    text: 'Next',
                    action: newTour.next
                }
            ]
        });

        newTour.addStep({
            id: 'offer',
            text: 'Here you can see the exciting offers available',
            attachTo: {
                element: '.main-section',
                on: 'bottom'
            },
            buttons: [
                {
                    classes:'shepherd-button-secondary',
                    text: 'Back',
                    action: newTour.back
                },
                {
                    text: 'Next',
                    action: newTour.next
                }
            ]
        });

        newTour.addStep({
            id: 'categories',
            text: 'Here you can see variety of Products',
            attachTo: {
                element: '.brand-section',
                on: 'bottom'
            },
            buttons: [
                {
                    classes:'shepherd-button-secondary',
                    text: 'Back',
                    action: newTour.back
                },
                {
                    text: 'Next',
                    action: newTour.next
                }
            ]
        });

        newTour.addStep({
            id: 'features',
            text: 'Check out the features we offer.',
            attachTo: {
                element: '.testimonial-section',
                on: 'bottom'
            },
            buttons: [
                {
                    classes:'shepherd-button-secondary',
                    text: 'Back',
                    action: newTour.back
                },
                {
                    text: 'Next',
                    action: newTour.next
                }
            ]
        });

        newTour.addStep({
            id: 'footer',
            text: 'Connect with us through our social media links in the footer.',
            attachTo: {
                element: '.footer-section',
                on: 'top'
            },
            buttons: [
                {
                    classes:'shepherd-button-secondary',
                    text: 'Back',
                    action: newTour.back
                },
                {
                    text: 'Finish',
                    action: newTour.complete
                }
            ]
        });
        setTour(newTour); // Save the new tour instance
    }, [category]);

    const startTour = ()=>{
       if(tour){
        tour.cancel();
        tour.start();
       }
    }

    return (
        <div className="">
            <div className="header-section sticky top-0 ">
                <Header 
                startTour={startTour}
                />
                
            </div>
            <div className="main-section">
                <Offer />
            </div>
            <div className="brand-section px-4 py-1 font-semibold">
                <p className="text-[2rem] underline underline-offset-4 my-8">Categories</p>
                {
                    loading ? 
                    <h1 className="text-center">Loading...</h1>
                    :
                    <Category category={category} />
                }
            </div>
            <div className="testimonial-section px-4 py-3 font-semibold my-5">
                <p className="text-[2rem] underline underline-offset-4">Features</p>
                <div className="flex lg:flex-row flex-col space-y-2 justify-evenly text-3xl items-center px-5 py-2 leading-loose">
                    <div className="flex flex-col text-center items-center px-6 py-3 bg-amber-500 rounded-md text-white">
                        <p>Best Offers</p>
                        <BiSolidOffer />
                    </div>
                    <div className="flex flex-col text-center items-center px-6 py-3 bg-amber-500 rounded-md text-white">
                        <p>Fast Delivery</p>
                        <BsLightningChargeFill />
                    </div>
                    <div className="flex flex-col text-center items-center px-6 py-3 bg-amber-500 rounded-md text-white">
                        <p>Exchange Offers</p>
                        <FaRecycle />
                    </div>
                </div>
            </div>
            <div className="footer-section font-semibold mt-[2rem] bg-amber-500">
                <div className="flex flex-col justify-center items-center px-8 py-5 text-white text-[1.5rem] my-7">
                    <p className="flex flex-row items-center my-5">Connect with me <TbPlugConnected className="ml-2" /></p>
                    <div className="flex flex-row justify-evenly w-1/4 text-right">
                        <Link href={"https://www.linkedin.com/in/pal-akash-jiledar-4b396022a/"}>
                            <FaLinkedin />
                        </Link>
                        <Link href={"https://x.com/PalAkash45151"}>
                            <FaXTwitter />
                        </Link>
                    </div>
                </div>
                <p className="text-[1.5rem] px-5 py-3 text-white text-left">© 2024 E-Commerce App</p>
            </div>
        </div>
    )
}
