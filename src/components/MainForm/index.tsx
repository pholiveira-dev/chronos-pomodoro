import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Ex.: estudar para a prova"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <p>O próximo intervalo é de 25 min</p>
      </div>

      <div className="formRow"></div>
      <Cycles />
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
