import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

const DownloadButtons = () => {
  return (
    <div className="space-x-2.5">
      <Button className="normal-case w-[102px]" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - en
      </Button>
      <Button className="normal-case w-[102px]" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - fr
      </Button>
      <Button className="normal-case w-[102px]" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - nl
      </Button>
      <Button className="normal-case w-[102px]" variant="outline" size="sm">
        <ArrowDownToLine className="h-3.5 w-3.5 mr-2" />
        PDF - sr
      </Button>
    </div>
  );
};

export default async function Concerts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 w-[50%] min-w-[500px]">
        <Typography.body>
          <span className="font-semibold">Kosta Jakic</span> lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur
          officiis provident maiores repellendus id iusto doloremque accusamus animi culpa est, quibusdam natus adipisci saepe rem amet
          perspiciatis fugit eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem ad numquam possimus quasi culpa
          sit non libero quo maiores eius qui, cumque harum fugit dolor labore voluptas repellat velit.
        </Typography.body>
        <Typography.body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero laboriosam excepturi minus delectus voluptate, quo quos, ab
          aperiam repellendus culpa illo laborum nisi, corrupti in quod sunt vitae aliquid.
        </Typography.body>
        <Typography.body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero laboriosam excepturi minus delectus voluptate, quo quos, ab
          aperiam repellendus culpa illo laborum nisi, corrupti in quod sunt vitae aliquid. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quo est nisi odit quasi autem veritatis nulla, minima quae ipsam placeat assumenda eius, consectetur illum neque
          architecto odio aspernatur consequatur cupiditate.
        </Typography.body>
        <Typography.body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero laboriosam excepturi minus delectus voluptate, quo quos, ab
          aperiam repellendus culpa illo laborum nisi, corrupti in quod sunt vitae aliquid. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quo est nisi odit quasi autem veritatis nulla, minima quae ipsam placeat assumenda eius, consectetur illum neque
          architecto odio aspernatur consequatur cupiditate.
        </Typography.body>
        <Typography.body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vero laboriosam excepturi minus delectus voluptate, quo quos, ab
          aperiam repellendus culpa illo laborum nisi, corrupti in quod sunt vitae aliquid. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quo est nisi odit quasi autem veritatis nulla, minima quae ipsam placeat assumenda eius, consectetur illum neque
          architecto odio aspernatur consequatur cupiditate.
        </Typography.body>
      </div>
      <DownloadButtons />
    </div>
  );
}
