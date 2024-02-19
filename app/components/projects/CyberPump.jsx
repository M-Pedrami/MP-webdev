import Link from "next/link";

export default function CyberPump() {
  return (
    <div className="BentoBox   grid gap-2 lg:grid-cols-8">
      <div className=" col-span-5 lg:col-span-6  ">
        <img
          src="cyberpump.png"
          className="h-full rounded-xl hover:scale-95  border-4 border-white hover:border-deep-orange-700 transition-all duration-300"
        />
      </div>
      <div className="col-span-2">
        <img
          src="cyberpump1.png"
          className="h-full rounded-xl border-4 border-white hover:border-deep-orange-800 hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className=" col-span-3 lg:row-span-2">
        <img
          src="cyberpump2.png"
          className="h-full rounded-xl hover:scale-125  border-2 border-white hover:border-deep-orange-700 transition-all duration-300"
        />
      </div>
      <div className=" col-span-2">
        <img
          src="cyberpump4.png"
          className="h-full rounded-xl hover:scale-[200%]  border-2 border-white hover:border-deep-orange-700 transition-all duration-300"
        />
      </div>
      <div className=" col-start-5 row-start-3">
        <img
          src="cyberpump6.png"
          className="h-full rounded-xl hover:scale-[200%]  border-[1px] border-white hover:border-deep-orange-700 transition-all duration-300"
        />
      </div>
      <div className=" col-start-4 row-start-3">
        <img
          src="cyberpump3.png"
          className="h-full rounded-xl hover:scale-[200%]  border-[1px] border-white hover:border-deep-orange-700 transition-all duration-300"
        />
      </div>
      <div className="lg:border-4 border-white hover:border-deep-orange-700 rounded-xl flex items-center lg:bg-black transition-all duration-300">
        <img
          src="react-2.svg"
          className="hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className=" lg:border-4 border-white hover:border-deep-orange-700 rounded-xl flex items-center lg:bg-teal-500 transition-all duration-300 ">
        <img
          src="vitejs.svg"
          className="hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className=" lg:border-4 border-white hover:border-deep-orange-700 rounded-xl flex items-center lg:bg-gray-800 transition-all duration-300">
        <img
          src="tailwind-css-2.svg"
          className="hover:scale-125 transition-all duration-300"
        />
      </div>
      <div className="rounded-xl  lg:border-2 border-black col-span-3 flex items-center justify-center bg-gradient-to-tr from-gray-900 to-deep-orange-700">
        <Link href="https://cyberpump.onrender.com/" target="blank">
        <button className="bg-deep-orange-500 bg-opacity-85 py-2 px-4 rounded-3xl font-bold text-white hover:bg-black hover:bg-opacity-65 hover:text-deep-orange-700 border-2 border-gray-100 hover:border-2 hover:border-deep-orange-700 transition-all duration-300">
          To CyberPump
        </button>
        </Link>
      </div>
    </div>
  );
}
