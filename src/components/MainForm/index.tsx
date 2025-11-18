import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { Cycles } from "../Cycles";
import { PlayCircleIcon } from "lucide-react";
import { type HomeProps } from "../../pages/Home";

export function MainForm({ state, setState }: HomeProps) {
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: "23:34",
      };
    });
  }
  return (
    <form className="form" action="">
      <div>
        <button type="button" onClick={handleClick}>
          Clicar
        </button>
      </div>
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Ex.: estudar para a prova"
        />
      </div>

      <div className="formRow">
        <p>O próximo intervalo é de {state.config.workTime} min</p>
      </div>

      <div className="formRow"></div>
      <Cycles />
      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color="green" />
      </div>
    </form>
  );
}
