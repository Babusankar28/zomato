import Wallpaper from "../components/Wallpaper";
import QuickSearch from "../components/QuickSearch";

const Home = ({location}) => {
 
  return (
    <div>
      <Wallpaper location={location}/>
      <QuickSearch />
    </div>
  );
};

export default Home;
