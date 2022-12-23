import Card from "react-bootstrap/Card";
import "../css/HomePortfolioCard.css";

const HomePortfolioCard2 = () => {
    return (
      <>
        <br />
        <Card className="homeportfoliocard-card-main">
          <Card.Img src={require("../img/dasoleMain.JPG")} />
          <Card.ImgOverlay>
            <Card.Title className='Card-Title1'>Agio</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  };

export default HomePortfolioCard2;
