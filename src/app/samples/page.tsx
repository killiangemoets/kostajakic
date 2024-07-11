"use client";

import gallery1 from "@/assets/images/gallery/gallery_1.webp";
import gallery2 from "@/assets/images/gallery/gallery_2.webp";
import gallery3 from "@/assets/images/gallery/gallery_3.webp";
import gallery4 from "@/assets/images/gallery/gallery_4.webp";
import gallery5 from "@/assets/images/gallery/gallery_5.webp";
import gallery6 from "@/assets/images/gallery/gallery_6.webp";
import gallery7 from "@/assets/images/gallery/gallery_7.webp";
import gallery8 from "@/assets/images/gallery/gallery_8.webp";
import gallery9 from "@/assets/images/gallery/gallery_9.webp";
import { LabeledCheckboxInput } from "@/components/inputs/checkbox";
import { LabeledDatePickerInput } from "@/components/inputs/datepicker";
import { LabeledDropdownSelectInput } from "@/components/inputs/dropdown-select";
import { LabeledTextInput } from "@/components/inputs/text";
import { LabeledTextareaInput } from "@/components/inputs/textarea";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import Carousel from "@/components/ui/carousel";
import Spinner from "@/components/ui/spinner";
import Image from "next/image";
import { useState } from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col gap-8">
      <Typography.h2>Buttons</Typography.h2>
      <div className="flex gap-8">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Outline</Button>
      </div>
      <div className="flex gap-8">
        <Button size="lg">Default</Button>
        <Button size="lg" variant="destructive">
          Destructive
        </Button>
        <Button size="lg" variant="outline">
          Outline
        </Button>
        <Button size="lg" variant="ghost">
          Outline
        </Button>
      </div>
      <div className="flex gap-8">
        <Button disabled size="lg">
          Default
        </Button>
        <Button disabled size="lg" variant="destructive">
          Destructive
        </Button>
        <Button disabled size="lg" variant="outline">
          Outline
        </Button>
        <Button disabled size="lg" variant="ghost">
          Outline
        </Button>
      </div>
      <div className="flex gap-8">
        <Button size="sm">Default</Button>
        <Button size="sm" variant="destructive">
          Destructive
        </Button>
        <Button size="sm" variant="outline">
          Outline
        </Button>
        <Button size="sm" variant="ghost">
          Outline
        </Button>
      </div>
      <div className="flex gap-8">
        <Button size="icon">Def</Button>
        <Button size="icon" variant="destructive">
          Des
        </Button>
        <Button size="icon" variant="outline">
          Out
        </Button>
        <Button size="icon" variant="ghost">
          Out
        </Button>
      </div>
    </div>
  );
};

const Typographies = () => {
  return (
    <div className="flex flex-col gap-8">
      <Typography.h2>Typography</Typography.h2>
      <div className="flex flex-col gap-2">
        <Typography.h1>Title H1</Typography.h1>
        <Typography.h2>Title H2</Typography.h2>
        <Typography.h3>Title H3</Typography.h3>
        <Typography.h4>Title H4</Typography.h4>
        <Typography.body>Body content</Typography.body>
        <Typography.note>Note content</Typography.note>
        <Typography.error>Error message</Typography.error>
      </div>
    </div>
  );
};

const Inputs = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-8">
      <Typography.h2>Form</Typography.h2>
      <div className="flex flex-col gap-4">
        <LabeledTextInput readOnly name="email" label="Email" value="test 1212" placeholder="enter your email" required />
        <LabeledTextareaInput
          name="description"
          label="Description"
          placeholder="enter your description"
          required
          // error="Entrez un email valide!"
        />
        <LabeledDatePickerInput label="Concert date" value={date} onChange={setDate} />
        <LabeledDropdownSelectInput
          name="genre"
          label="Genre"
          placeholder="Select a genre"
          options={[
            { value: "pop", label: "Pop" },
            { value: "rock", label: "Rock" },
            { value: "jazz", label: "Jazz" },
          ]}
          required
        />
        <LabeledCheckboxInput name="soldout" label="Tickets" />
      </div>
    </div>
  );
};

const CarouselDemo = () => {
  return (
    <div className="w-[50%] scale-100">
      <Carousel
        prevButtonClassName="fixed top-[50%] -translate-y-[42px] left-0 translate-x-[-46px] z-[1]"
        nextButtonClassName="fixed top-[50%] -translate-y-[42px] right-0 translate-x-[46px] z-[1]"
        pagination={false}
        elements={[
          <div className="relative w-full pb-[100%]" key={1}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-full h-full object-cover object-center" src={gallery1} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery2} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery3} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery4} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery5} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery6} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery7} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center overflow-hidden w-full h-full pb-12">
              <Image className="w-fit h-full object-cover object-center" src={gallery8} alt="project" priority />
            </figure>
          </div>,
          <div className="relative w-full pb-[100%]" key={2}>
            <figure className="absolute top-0 left-0 flex justify-center items-center  overflow-hidden w-full h-full pb-12">
              <Image className="w-full h-fit object-cover object-center" src={gallery9} alt="project" priority />
            </figure>
          </div>,
        ]}
      />
    </div>
  );
};

export default function Samples() {
  return (
    <main className="flex flex-col gap-12">
      <Typography.h1 className="text-center">SAMPLES</Typography.h1>
      <Spinner />
      <Buttons />
      <Typographies />
      <Inputs />
      <CarouselDemo />
    </main>
  );
}
