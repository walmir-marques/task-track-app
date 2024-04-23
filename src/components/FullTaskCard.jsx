import TaskCard from "./TaskCard";

const FullTaskCard = ({ cardName, cardIcon }) => {
  return (
    <section className="w-2/6 m-5 ">
      <h2 className="flex items-center font-bold gap-2 text-2xl">
        <img src={cardIcon} alt="" className="w-8" />
        {cardName}
      </h2>
      <TaskCard />
    </section>
  );
};
export default FullTaskCard;
