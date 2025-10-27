import { HomeIcon, Settings, Sun, TimerIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Tasks } from "./components/Tasks";
import { Logo } from "./components/Logo";
import { Icons } from "./components/Icons";

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
        <Tasks />
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}
