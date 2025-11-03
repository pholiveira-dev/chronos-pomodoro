import { HomeIcon, Settings, Sun, TimerIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Icons } from "./components/Icons";
import { ButtonPlay } from "./components/ButtonPlay";
import { CountDown } from "./components/CountDown";
import { Footer } from "./components/Footer";
import { DefaultInput } from "./components/DefaultInput";

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
              placeholder="Digite algo"
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow"></div>

          <div className="formRow">
            <ButtonPlay />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
