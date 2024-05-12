import Category from "./Category/Category";
import Hero from "./Hero";
import Pick from "./PickBy/Pick";
import Stats from "./Stats";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <Pick></Pick>
      <Stats></Stats>
    </div>
  );
}

export default Home;
