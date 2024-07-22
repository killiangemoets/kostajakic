import facebookIcon from "@/assets/icons/facebook.png";
import instagramIcon from "@/assets/icons/instagram.png";
import youtubeIcon from "@/assets/icons/youtube.png";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from "@/constants/contact";
import Image from "next/image";

export default async function Contact() {
  return (
    <div className="w-full sm:w-[50%] sm:min-w-[500px] pt-32">
      <Typography.h2 className="mb-1.5">Kosta Jakic</Typography.h2>
      <div className="flex justify-between border-t border-b py-0.5">
        <Button variant="ghost" className="normal-case font-medium p-0 h-fit" href={`mailto:${CONTACT_EMAIL}`}>
          <Typography.body>{CONTACT_EMAIL}</Typography.body>
        </Button>
        <Button variant="ghost" className="normal-case font-medium p-0 h-fit" href={`tel:${CONTACT_PHONE_NUMBER}`}>
          <Typography.body>{CONTACT_PHONE_NUMBER}</Typography.body>
        </Button>
      </div>
      <div className="mt-8 md:12 flex items-center gap-1 md:gap-1.5">
        <Button size="icon" variant="ghost" className="w-9 h-9 md:h-11 md:w-11 p-0" href={INSTAGRAM_URL} target="_blank">
          <Image
            className="w-8 h-8 hover:w-[34px] hover:h-[34px] md:w-10 md:h-10 md:hover:w-[42px] md:hover:h-[42px] duration-300 ease-in-out"
            src={instagramIcon}
            alt="Instagram"
          />
        </Button>
        <Button size="icon" variant="ghost" className="w-9 h-9 md:h-11 md:w-11 p-0" href={FACEBOOK_URL} target="_blank">
          <Image
            className="w-8 h-8 hover:w-[34px] hover:h-[34px] md:w-10 md:h-10 md:hover:w-[42px] md:hover:h-[42px] duration-300 ease-in-out"
            src={facebookIcon}
            alt="Facebook"
          />
        </Button>
        <Button size="icon" variant="ghost" className="w-9 h-9 md:h-11 md:w-11 p-0" href={YOUTUBE_URL} target="_blank">
          <Image
            className="w-8 h-8 hover:w-[34px] hover:h-[34px] md:w-10 md:h-10 md:hover:w-[42px] md:hover:h-[42px] duration-300 ease-in-out"
            src={youtubeIcon}
            alt="Youtube"
          />
        </Button>
      </div>
    </div>
  );
}
