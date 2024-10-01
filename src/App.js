import "./App.css";
import PringlesStyle from "./Components/OtherPageComponent";
import FirstPage from "./Pages/FirstPage";
import green from "../src/Images/green.png";
import blue from "../src/Images/blue.png";
import orange from "../src/Images/orange.png";

const pages = [
  {
    text: "Sour CREAM & ONION",
    bgColor: "#C6E4C3",
    textColor: "#60B85A",
    canImage: green,
    zIndex: 10,
  },
  {
    text: "Cheddar CREAM & ONION",
    bgColor: "#9ED9E5",
    textColor: "#2DBFE1",
    canImage: blue,
    zIndex: 11,
  },
  {
    text: "Cheddar Cheese",
    bgColor: "#EED0A8",
    textColor: "#E9982E",
    canImage: orange,
    zIndex: 12,
  },
];

function App() {
  return (
    <>
      <FirstPage></FirstPage>
      {pages.map((page) => {
        return (
          <PringlesStyle
            text={page.text}
            bgColor={page.bgColor}
            textColor={page.textColor}
            canImage={page.canImage}
            zIndex={page.zIndex}
          />
        );
      })}
    </>
  );
}

export default App;
