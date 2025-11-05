import {
  HomeIcon,
  PlayCircleIcon,
  Settings,
  Sun,
  TimerIcon,
} from "lucide-react";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Icons } from "./components/Icons";
import { DefaultButton } from "./components/DefaultButton";
import { CountDown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Icons>
          <HomeIcon />
          <TimerIcon />
          <Settings />
          <Sun />
        </Icons>
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText="tesk"
              id="meuInput"
              type="text"
              placeholder="Ex.: estudar para a prova"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow"></div>
          <Cycles />
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
