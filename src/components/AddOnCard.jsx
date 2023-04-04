const AddOnCard = ({ name, description }) => {
  return (
    <div className="rounded-lg p-4 border flex flex-row items-center gap-6">
      <input type="checkbox" />
      <div className="flex flex-col gap-1 grow">
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <p>+$2/mo</p>
    </div>
  );
}

export default AddOnCard;
