import CyberPump from "../components/projects/CyberPump";
import Eatsexplorer from "../components/projects/Eatsexplorer";

export default function ProjectPage() {
  return (
    <section className="flex flex-col gap-20 px-10 py-10 lg:p-32">
      <h1 className="text-7xl pl-5 font-bold border-l-8 border-black">
        Projects
      </h1>
      <div className="lg:border-r-4 border-black lg:pr-5">
        <h1 className="text-left lg:text-end text-3xl font-bold">
          Cyberpump
        </h1>
        <p className="italic text-left lg:text-end">
          Fullstack MERN Fitness App
        </p>
      </div>
      <CyberPump />
      <div className="lg:border-l-4 border-black lg:pl-5">
        <h1 className="text-left lg:text-start text-3xl font-bold">
          Eatsplorer
        </h1>
        <p className="italic text-left lg:text-start">
          React App Powered by Contentful and Rapid API
        </p>
      </div>
      <Eatsexplorer />
    </section>
  );
}
