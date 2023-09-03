import About from "./components/About";
import Greeting from "./components/Greeting";
import PersonalProject from "./components/PersonalProject";
import ToolStack from "./components/ToolStack";

export default function Home() {
  return (
    <main>
      <Greeting />
      <ToolStack />
      <PersonalProject />
      <About />
    </main>
  );
}
