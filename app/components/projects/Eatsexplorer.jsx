import Link from "next/link";

export default function Eatsexplorer() {
  return (
    <div className=" grid lg:grid-cols-8 gap-2">
       <div className="rounded-xl  border-2 border-gray-700 col-span-5 flex items-center justify-center">
       <img src="Eatsexplorer.png" className="h-full rounded-xl hover:scale-125  border-2 border-white hover:border-deep-orange-700 transition-all duration-300" />
      </div>
       
      
    
     <div className=" col-span-3 lg:row-span-2 border-2 border-gray-700 rounded-xl">
        <img
          src="eatsexplorer5.png"
          className="h-full rounded-xl hover:scale-125  border-2 border-white hover:border-deep-orange-700 transition-all duration-300"
        />
      </div>
     
      <div className="lg:border-4 border-white hover:border-deep-orange-700 rounded-xl lg:flex lg:items-center lg:bg-black transition-all duration-300">
        <img
          src="javascript-1.svg"
          className="hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className=" lg:border-4 border-white hover:border-deep-orange-700 rounded-xl lg:flex lg:items-center lg:bg-teal-500 transition-all duration-300 ">
        <img
          src="contentful.svg"
          className="hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className=" lg:border-4 border-white hover:border-deep-orange-700 rounded-xl lg:flex items-center lg:bg-gray-800 transition-all duration-300">
        <img
          src="bootstrap-5-1.svg"
          className="hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="  col-span-2  rounded-xl flex items-center justify-center  transition-all duration-300 bg-blue-gray-200">
        <Link href="https://eatsplorer.vercel.app/" target="blank">
        <button className="bg-gray-200 py-2 px-4 text-xl rounded-xl font-medium hover:scale-90 hover:bg-opacity-85 transition-all duration-300 hover:border-4 border-white">To Eatsplorer</button>
        </Link>
      </div>
      
    </div>
  );
}
