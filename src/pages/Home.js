import Row from "../Components/Row";
import requests from "../Requiest";

const Home = () => {
  return (
    <div>
      <div className="mb-3 p-7"></div>
      <Row rowID="1" title="Upcoming" fetchUrl={requests.requestUpcoming}></Row>
      <Row rowID="2" title="Horror" fetchUrl={requests.requestHorror}></Row>
      <Row rowID="3" title="Popular" fetchUrl={requests.requestPopular}></Row>
      <Row rowID="4" title="TopRated" fetchUrl={requests.requestTopRated}></Row>
      <Row rowID="5" title="Trending" fetchUrl={requests.requestTrending}></Row>
    </div>
  );
};

export default Home;
