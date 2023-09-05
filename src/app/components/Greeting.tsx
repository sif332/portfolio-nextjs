import Image from "next/image";
import Link from "next/link";
import LinkedinIcon from "../../assets/icons/LinkedinIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import styles from "../styles.module.css";

export default function Greeting() {
  return (
    // scaffold for this component
    <div className="flex w-full justify-center bg-[#1b1e25] text-white">
      {/* contral div to have max width 1400 when on full desktop mode*/}
      <div className="mx-5 my-8 flex w-full flex-col items-center gap-5 lg:max-w-[1400px] lg:flex-row lg:justify-between">
        {/* control text content */}
        <div className="flex max-w-xl flex-col gap-4">
          <p className={`${styles.slideinblurredleft}`}>👋 Greeting</p>
          <h1
            className={`font-bold leading-tight lg:text-4xl ${styles.slideinblurredright}`}
          >
            I’m Settawut K. <br /> a Full-Stack Developer
          </h1>
          <p className={`font-light ${styles.fadein}`}>
            I enjoy staying up-to-date with the latest industry trends and
            exploring new technologies and frameworks to enhance my projects.
          </p>
        </div>
        {/* control image */}
        <div
          className={`flex max-w-[400px] flex-col gap-4 lg:max-w-[550px] ${styles.slideinfwdcenter}`}
        >
          <Image
            className="rounded-md"
            src="https://i.imgur.com/KZxrzX6.png"
            width={600}
            height={600}
            alt="ProfilePic"
          />
          <div className="flex items-center gap-2">
            <p className="font-light">Check my profile: </p>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/settawut-kaewtima-aa2541125"
            >
              <LinkedinIcon color="white" size={32} />
            </Link>
            <Link target="_blank" href="https://github.com/sif332">
              <GithubIcon size={34} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
