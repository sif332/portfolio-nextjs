import Image from "next/image";
import FullstackImage from "../../assets/fullstack.jpg";

export default function About() {
  return (
    <div className="flex w-full items-center justify-center" id="about">
      {/* contral div to have max width 1400 when on full desktop mode*/}
      <div className="my-12 flex h-fit w-full flex-col-reverse justify-between gap-8 px-4 lg:max-w-[1200px] lg:flex-row">
        <div className="relative flex h-[500px] w-full justify-center lg:h-auto">
          <Image
            className="rounded-md"
            src={FullstackImage}
            fill={true}
            alt="fullstack"
            objectFit="contain"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <h1>About Me</h1>
          <p className="font-light">
            As a full-stack developer, I need to understand how a website works
            behind the scenes. This includes everything from how the website is
            displayed, to how the frontend interacts with the backend, and how
            the backend retrieves data from the database. <br />
            After completing a project, I also need to know how to deploy it to
            the cloud or on-premise so that it can be accessed by anyone on the
            internet.
          </p>
          <p>To practice these skills, I have created 4 personal projects.</p>
          <ul className="list-inside list-disc font-light">
            <li>
              The first two projects, a React Calculator and a Portfolio
              website, helped me to better understand frontend development.
            </li>
            <li>
              The third project, WebChat, trained me in backend database
              management, REST API, and WebSocket usage.
            </li>
            <li>
              My latest project is a personal home server that has taught me
              about CI/CD, Dockerization, and connecting a local network to a
              public network using Cloudflare Tunneling. These projects have
              been the stepping stones for me in starting my full-stack career.
            </li>
          </ul>
          <p>
            These projects have been the stepping stones for me in starting my
            full-stack career.
          </p>
          <p className="font-light">
            I&apos;m always open to new challenges and opportunities to work on
            exciting web projects. If you are interested in collaborating with
            me or hiring me for your next project, please feel free to contact
            me via email, Line or LinkedIn. I look forward to hearing from you soon!😊
          </p>
        </div>
      </div>
    </div>
  );
}
