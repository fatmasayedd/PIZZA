import Image from "next/image";
import Link from "next/link";
import MainImage from '../../../public/images/main4.jpg'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
export default function MainSection() {
  return (
    <div className="  max-w-screen-xl flex flex-col-reverse  md:flex-row   justify-between md:mt-10">
      <div className="  md:w-[45%]  my-10 md:mt-36">
        <h1 className="text-5xl md:text-6xl font-bold">  Everything ixs better with a <span className="text-orange-600"> Pizza </span> </h1>
        <p className="text-gray-500 text-xl my-5"> pizza is the missing piece  that makes every day complet, a simple yet delicious joy in life</p>

        <button  className=" bg-orange-600 mr-8 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg  px-4 py-2 text-center">
          <Link href="#"  className="text-white"> ORDER NOW </Link>
          <FaRegArrowAltCircleRight  className="inline text-white text-xl ml-2 -mt-1"/>
        </button>

        <Link href="#">
         Learn more 
         <FaRegArrowAltCircleRight  className="inline  text-xl ml-2"/>
         </Link>
      </div>

      <div className=" w-[100%] md:h[50vh]  md:w-[50%] "> 
       <Image src={MainImage} className=" w-[90%] mx-auto md:w-[95%] h-[100%]"/>
      </div>

    </div>
  );
}
