import Image from "next/image";
import { toolStacks } from "../../data/toolStacks";

export default function ToolStack() {
  return (
    // scaffold for this component
    <div className="flex w-full items-center justify-center" id="toolstack">
      {/* contral div to have max width 1400 when on full desktop mode*/}
      <div className="mx-4 my-12 flex w-full flex-col items-center justify-between gap-8 lg:max-w-[1200px] lg:flex-row lg:gap-24">
        {/* control text */}
        <div className="flex w-full max-w-[550px] flex-col gap-4">
          <h2 className="font-bold lg:text-4xl">ToolStack</h2>
          <p className="font-light">
            Including a wide range of well-known technologies and frameworks,
            spanning from frontend development, backend integration, database
            management, to deployment.
          </p>
        </div>
        {/* control grid image  */}
        <div className="grid w-full max-w-[550px] grid-cols-2 gap-4 font-light md:grid-cols-3">
          {toolStacks.map((tool, index) => {
            const { src, alt, title } = tool;
            return (
              <div key={index} className="flex items-center gap-4">
                <Image
                  className="h-auto rounded-md"
                  src={src}
                  width={40}
                  height={40}
                  alt={alt}
                />
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
