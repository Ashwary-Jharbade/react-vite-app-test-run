import Sidebar from "../Sidebar";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeSidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="homeContent">Home content</div>
      </div>
    </>
  );
};

export default Home;
