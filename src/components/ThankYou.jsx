import Image from "next/image";
import { StepHeading } from "./"

const ThankYou = () => {
  return (
    <div className="gap-8 flex flex-col items-center text-center justify-center h-full max-w-[27rem]">
      <Image src="/icon-thank-you.svg" width={`100`} height={`100`} alt={``} />
      <StepHeading
        title="Thank you!"
        description="Thanks for confirming you subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com"
      />
    </div>
  )
}

export default ThankYou;
