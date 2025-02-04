import Link from "next/link";
import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import WhatsAppIcon from "@/assets/icons/WhatsAppIcon";
import GmailIcon from "@/assets/icons/GmailIcon";

type LinkData = [string, string, React.FC<{ className?: string }>];

const data: Record<string, LinkData> = {
  github: ["Github", "https://github.com/vicio-code/", GithubIcon],
  linkedIn: [
    "LinkedIn",
    "https://www.linkedin.com/in/lucca-falbo/",
    LinkedInIcon,
  ],
  whatsApp: ["WhatsApp", "https://wa.me/5531992214933?text=<Oi%20Lucca%20encontrei%20o%20seu%20numero%20no%20seu%20site>", WhatsAppIcon],
  gmail: ["Gmail", "mailto:luccafalbo@gmail.com", GmailIcon],
};

export default function Links() {
  return (
    <div className="grid justify-items-center">
      {Object.entries(data).map(([key, value]) => {
        const label = value[0];
        const url = value[1];
        const IconComponent = value[2];
        return (
          <div className="px-4 flex items-center space-x-2" key={key}>
            <IconComponent className="text-[#f6c177]" />
            <Link
              href={url}
              target="_blank" rel="noopener noreferrer"
              className="link-style py-2"
            >
              <span className="text-base">{label}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
