import Image from "next/image";

const PlanCard = ({ src, plan, price }) => {
  return (
    <div
      className="flex flex-col justify-between rounded-lg border h-full max-h-[10rem] w-full max-w-[8.5rem] p-4"
    >
      <Image src={src} width={`40`} height={`40`} alt={``} />
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{plan}</p>
        <p className="text-sm">{`$${price}/`}</p>
      </div>
    </div>
  )
}

export default PlanCard;
