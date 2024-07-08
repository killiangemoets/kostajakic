import { FacebookIcon } from "@/assets/icons/facebook";
import { InstagramIcon } from "@/assets/icons/instagram";
import { YoutubeIcon } from "@/assets/icons/youtube";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, YOUTUBE_URL } from "@/constants/contact";

export default async function Contact() {
  return (
    <div className="w-[50%] pt-32">
      <Typography.h2>Kosta Jakic</Typography.h2>
      <div className="flex justify-between border-t border-b py-0.5">
        <Button variant="ghost" className="normal-case p-0 h-fit" href={`mailto:${CONTACT_EMAIL}`}>
          <Typography.body>{CONTACT_EMAIL}</Typography.body>
        </Button>
        <Button variant="ghost" className="normal-case p-0 h-fit" href={`tel:${CONTACT_PHONE_NUMBER}`}>
          <Typography.body>{CONTACT_PHONE_NUMBER}</Typography.body>
        </Button>
      </div>
      <div className="mt-12 flex items-center gap-2.5">
        <Button size="icon" className="h-8 w-8 rounded-lg" href={INSTAGRAM_URL} target="_blank">
          <InstagramIcon className="w-6 h-6 text-primary-600" />
        </Button>
        <Button size="icon" className="h-8 w-8 rounded-lg" href={FACEBOOK_URL} target="_blank">
          <FacebookIcon className="w-5 h-5 text-primary-600" />
        </Button>
        <Button size="icon" className="h-8 w-8 rounded-lg" href={YOUTUBE_URL} target="_blank">
          <YoutubeIcon className="w-6 h-6 text-primary-600" />
        </Button>
      </div>
    </div>
  );
}
