import data from "./data.json";
import { Album } from "./components/Album";
import { Header } from "./components/Header/Header";

console.log(data);
export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album items={data} />
    </div>
  );
};