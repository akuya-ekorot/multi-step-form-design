import { Input } from "./"

const YourInfo = () => {
  return (
    <div className="pt-10 w-full flex justify-center">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Personal info</h1>
          <p className="text-gray-500">Please provide your name, email address and phone number</p>
        </div>
        <form className="flex flex-col gap-4 h-full pb-2">
          <Input label={`Name`} placeholder={`e.g. Stephen King`} type={`text`} name={`name`} />
          <Input label={`Email Address`} placeholder={`e.g. stephenking@lorem.com`} type={`email`} name={`email`} />
          <Input label={`Phone Number`} placeholder={`e.g. +1 234 567 890`} type={`text`} name={`phone`} />
          <div className="h-full"></div>
          <button type={`submit`} className="rounded-lg bg-[#03295A] text-white p-3 w-[8rem] self-end">Next Step</button>
        </form>
      </div>
    </div>
  )
}

export default YourInfo;
