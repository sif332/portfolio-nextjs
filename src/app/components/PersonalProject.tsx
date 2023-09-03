import Image from "next/image";
import { projects } from "../../data/personalProjects";
import Link from "next/link";

export default function PersonalProject() {
  return (
    <div className="flex w-full justify-center">
      <div className="mx-4 my-12 flex w-full flex-col justify-center gap-8 lg:max-w-[1200px]">
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between">
          <h2 className="font-bold lg:text-4xl">Personal Project</h2>
          <Link
            className="w-full rounded-md border border-gray-700 py-3 text-center transition-colors hover:bg-gray-700 hover:text-white md:w-32"
            href={"project"}
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => {
            const { src, alt, title, name, mdName } = project;
            return (
              <Link key={index} href={`project/${mdName}`}>
                <div className="group cursor-pointer overflow-hidden rounded-md">
                  <div className="relative h-[300px]">
                    <Image
                      className="transition-transform duration-500 ease-out group-hover:scale-110"
                      src={src}
                      alt={alt}
                      fill={true}
                      objectFit="cover"
                    />
                  </div>
                  <div className="relative bottom-0 z-10 flex flex-col justify-center gap-4 bg-gray-800 p-6 text-white md:min-h-[200px]">
                    <h2 className="font-bold">{title}</h2>
                    <p>{name}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
