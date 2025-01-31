import Image from "next/image";
import profilePic from "@/assets/images/batmanCroped.jpg";
import Link from "next/link";
import BriefcaseIcon from "@/assets/icons/BriefcaseIcon";
import LocationIcon from "@/assets/icons/LocationIcon";

const data = {
  Name: "lucca falbo",
  Job: "Procurando oportunidades",
  Location: "Belo Horizonte, BR",
  JobTitle: "Desenvolvedor web",
  Description: [
    "Desenvolvedor em formação, sempre pronto para transformar café em código.",
    "Quero contribuir com soluções criativas e eficientes em busca de novos desafios e aprendizados",
  ],
  CV: "https://drive.google.com/uc?export=download&id=1fHjcp6SKFfzMBp2dVc4NgnK9wv776Kf6",
};

export default function Profile() {
  return (
    <div className="grid justify-items-center pt-6">
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
        <div className="px-4 flex space-x-2 py-2 items-center">
          <BriefcaseIcon className="text-[#eb6f92]" />
          <span className="whitespace-nowrap text-base">{data.Job}</span>
        </div>
        <div className="px-4 flex space-x-2 py-2 items-center">
          <LocationIcon className="text-[#eb6f92]" />
          <span className="whitespace-nowrap text-base">{data.Location}</span>
        </div>
      </div>
      <div className="italic py-2 text-base">{data.JobTitle}</div>
      <Link href={data.CV} className="link-style py-2 text-base">
        {"Meu currículo (PDF)"}
      </Link>
      <div className="text-center py-2">
        {data.Description.map((item, index) => (
          <div key={index} className="py-2 text-base">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
