import Image from "next/image";
import React from "react";
import USERIMG from "@/assets/dd28514c9a8cfba334e05f21703be28e.png";
import Stars from "@/Components/Stars/Stars";
import { RatingsComp } from "@/Components/Stars/RatingsComp";
import ProductCard from "@/Components/Product/ProductCard";
type Props = {};

function Reviews({ }: Props) {
    return (
        <div>
            <h1 className="text-[16px]">
                1 review for Apple 10.9-inch iPad Air Wi-Fi Cellular 64GB
            </h1>
            <div className="flex items-center gap-5 my-3">
                <div>
                    <Image
                        className="rounded-full"
                        src={USERIMG}
                        alt="user image"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="space-y-2">
                    <Stars number={5} />
                    <div>
                        <h6 className="text-xs font-semibold">
                            admin – <span className="font-light"> September 10, 2021</span>
                        </h6>
                        <p className="text-xs">
                            Sed perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.
                        </p>
                    </div>
                </div>
            </div>
            <h1 className="text-[16px] mt-3">Add a review</h1>
            <div className="my-3 border-t py-3">
                <p className="text-xs">
                    Your email address will not be published. Required fields are marked *
                </p>
                <div className="my-2">
                    <RatingsComp />
                </div>
                <form action="" className="text-xs space-y-3">
                    <div className="space-y-3">
                        <label htmlFor="review" className="my-2">Your review *</label>
                        <textarea className="border w-full  focus:outline-[0.2px] rounded-md" name="" id="" cols={30} rows={10}></textarea>
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="review" className="my-2">Name *</label>
                        <input type="text" className="w-full border p-2 py-3 rounded-md" />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="review" className="my-2">Email *</label>
                        <input type="text" className="w-full border p-2 py-3 rounded-md" />
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" id='save' />
                        <label className='text-xs' htmlFor="save">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <div>
                        <button className='px-8 py-3  bg-blue-1000 rounded-md  text-white font-medium text-sm'>Submit</button>
                    </div>
                </form>
            </div>
            <h1 className="text-[16px] mt-3">Related products</h1>
            <div className="my-3 border-t py-3">
                <div className="flex flex-wrap">
                    <div className={`w-full lg:w-[50%] xl:w-[20%]`}><ProductCard /></div>
                    <div className={`w-full lg:w-[50%] xl:w-[20%]`}><ProductCard /></div>
                    <div className={`w-full lg:w-[50%] xl:w-[20%]`}><ProductCard /></div>
                    <div className={`w-full lg:w-[50%] xl:w-[20%]`}><ProductCard /></div>
                    <div className={`w-full lg:w-[50%] xl:w-[20%]`}><ProductCard /></div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
