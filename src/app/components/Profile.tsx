import Image from "next/image";
import profilePic from "@/assets/images/batman.jpeg";
import Link from "next/link";
import BriefcaseIcon from "@/assets/icons/BriefcaseIcon";
import LocationIcon from "@/assets/icons/LocationIcon";

const data = {
  Name: "lucca falbo",
  Job: "Procurando oportunidades",
  Location: "Belo Horizonte, BR",
  JobTitle: "Desenvolvedor web",
  Description: [
    "I like building and breaking stuff to see how it works.",
    "I'm just starting out as a Junior Software Engineer!",
  ],
  CV: "https://drive.google.com/uc?export=download&id=1fHjcp6SKFfzMBp2dVc4NgnK9wv776Kf6",
};

export default function Profile() {
  return (
    <div className="grid justify-items-center py-6">
      <div className="py-2">
        <Image
          src={profilePic}
          width={160}
          height={160}
          alt="Picture of the author"
          className="rounded-full aspect-square object-cover"
        />
      </div>
      <div className="font-extrabold text-4xl">{data.Name}</div>
      <div className="sm:flex-none md:flex py-2">
        <div className="px-4 flex justify-center space-x-2 py-2">
          <BriefcaseIcon className="text-white" />
          <span className="whitespace-nowrap">{data.Job}</span>
        </div>
        <div className="px-4 flex justify-center space-x-2 py-2">
          <LocationIcon className="text-white" />
          <span className="whitespace-nowrap">{data.Location}</span>
        </div>
      </div>
      <div className="italic py-2">{data.JobTitle}</div>
      <Link href={data.CV} className="link-style py-2">
        {"Meu currículo (PDF)"}
      </Link>
      <div className="text-center py-2">
        {data.Description.map((item, index) => (
          <div key={index} className="py-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
