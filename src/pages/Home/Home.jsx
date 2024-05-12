import Category from "./Category/Category";
import Hero from "./Hero";
import Pick from "./PickBy/Pick";
import Stats from "./Stats";
import Types from "./Types";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Types></Types>
      <Category></Category>
      <Pick></Pick>
      <Stats></Stats>
    </div>
  );
}

export default Home;
