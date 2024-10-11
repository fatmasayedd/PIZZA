import Image from "next/image";
import Link from "next/link";
// import image1 from '../../../public/images/main5-removebg-preview.png'
export default function OurBestSellersProps({image,title,paragraph,price}) {
    return (
            <div className="bg-gray-200  hover:bg-white hover:shadow-2xl md:w-[380px] p-7 mt-10 rounded-xl">
               <Image src={image}  className="mx-auto w-[250px] h-[250px]" />
                <h2 className="font-bold text-2xl mt-7">{title} </h2>
                <p  className="text-sm text-gray-600 my-4"> {paragraph}</p>
                 <button className="bg-orange-600 hover:bg-orange-500 rounded-xl w-[100%] py-3">
                    <Link href="#" className="text-white font-semibold">   Add to cart {price}</Link>
                </button> 





























            </div>
    );
}