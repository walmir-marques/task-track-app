import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = () => {
  return (
    <article className="min-h-24 border border-gray-100 rounded-sm p-3 mx-3">
      <p className="font-bold text-xl mb-4">Testo de amostra</p>
      <div className="flex items-center justify-between">
        <div>
          <Tag tagName="Tag 1" />
          <Tag tagName="Tag 2" />
          <Tag tagName="Tag 3" />
        </div>
        <div className="flex justify-center items-center w-8 h-8 rounded-full cursor-pointer transition-all ease-in-out">
          <img src={deleteIcon} alt="" className="w-5 opacity-50" />
        </div>
      </div>
    </article>
  );
};
export default TaskCard;
