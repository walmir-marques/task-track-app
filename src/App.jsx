import TaskForm from "./components/TaskForm";
import done from "./assets/check-mark-button.png";
import doing from "./assets/glowing-star.png";
import todo from "./assets/direct-hit.png";
import FullTaskCard from "./components/FullTaskCard";

const App = () => {
  return (
    <div className="grid grid-rows-3">
      <TaskForm />
      <main className="flex justify-evenly p-5 ">
        <FullTaskCard cardName="Para Fazer" cardIcon={todo} />
        <FullTaskCard cardName="Fazendo" cardIcon={doing} />
        <FullTaskCard cardName="Feito" cardIcon={done} />
      </main>
    </div>
  );
};
export default App;
