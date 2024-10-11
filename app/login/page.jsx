import Image from 'next/image';
import GoogleIcon from '../../public/images/GoogleIcons.webp'

export default function Login() {
  return (
    <>
      <div className=' my-7 w-[100%] pb-7   md:mx-auto md:w-[80%] md:px-7'>
        <div className='flex flex-col  justify-center  mt-16'>
          <h2 className='text-4xl font-bold text-center px-2 md:text-5xl text-orange-600'>Login </h2>
          <div className=' mx-auto mt-14 px-2  w-[100%] md:w-[400px] signin-form'>
            <form>
              <input type="email" id="email" name="email" placeholder="Email" className=' focus:ring-blue-500  border-0 rounded-md bg-gray-200  p-3 w-[100%] text-gray-700' />
              <input type="password" id="password" name="password" placeholder="Password" className=' focus:ring-blue-500  rounded-md bg-gray-200 mt-2 p-3 w-[100%] text-gray-700' />

              <button type="submit" className={`bg-orange-600 hover:bg-orange-500 text-white text-xl font-semibold rounded-lg  px-4 py-3  w-[100%] mt-4`}>
                 Login
              </button>

              <p className="text-center mt-4 text-gray-600"> or Login with provider </p>
              <button type="submit" className={`flex justify-center hover:bg-grag-500  border-2 border-gray-300 font-medium rounded-lg  px-4 py-2  w-[100%] mt-2`}>
                  <Image src={GoogleIcon} width={30} height={30}/>
                   <span className='text-gray-600 font-semibold mt-1 ml-3'> Login with google </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}