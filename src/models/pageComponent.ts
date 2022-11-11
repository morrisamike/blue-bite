
import OptionImg from "./optionImg";
import OptionWeather from "./optionWeather";

type ComponentType = "image" | "weather"| "button";

interface PageComponent {
  id:number,
  type:ComponentType
  options: OptionImg | OptionWeather
}

export default PageComponent;