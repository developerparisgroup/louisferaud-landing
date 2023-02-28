import 'semantic-ui-css/semantic.min.css';
import '@fontsource/roboto';
import './App.css';
import bgImage from './assets/images/bg.jpg';
import logoImage from './assets/images/logo.svg';

import { Grid, GridColumn, Image, Header, Container } from 'semantic-ui-react';
import { useTimer } from 'react-timer-hook';
import SubscribeForm from './components/SubscriptionForm';

const LAUNCHING_DATE = "04/10/2023";


const App = () => {
  const { container, logoStyle, content, formStyle, text1Style, text2Style, text3Style } = styles;
  const { days } = useTimer({ expiryTimestamp: new Date(LAUNCHING_DATE).getTime(), onExpire: () => { } });

  return (
    <div style={container}>
      <div style={logoStyle}>
        <Image src={logoImage} size="small" />
      </div>

      <div style={content}>
        <Container style={{ width: '90vw' }}>
          <Grid stackable columns={2}>
            <GridColumn width={8} textAlign='left'>
              <Header style={text1Style}>
                We are coming
              </Header>
            </GridColumn>

            <GridColumn width={8} textAlign='right'>
              <Header style={text2Style} className="borderdText">
                {`-${days} days`}
              </Header>
              <Header style={text3Style}>Obtain POINTS to get rewards</Header>
              <Header style={text3Style}>Unique discounts on your favorite items</Header>
            </GridColumn>
          </Grid>
        </Container>
      </div>

      <div style={formStyle}>
        <SubscribeForm />
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  logoStyle: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexGrow: 2
  },
  formStyle: {
    display: 'flex',
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1Style: {
    fontFamily: 'Mansory',
    fontWeight: "500",
    fontSize: '6rem',
    letterSpacing: "0.05em",
    color: "black",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    wordSpacing: "100vw"
  },
  text2Style: {
    fontFamily: 'Mansory',
    fontWeight: "500",
    fontSize: "6.5rem",
    textAlign: "right",
    letterSpacing: "0.05em",
    // textShadow: "0px 4.29394px 4.29394px rgba(0, 0, 0, 0.25)",
    wordSpacing: "100vw"
  },
  text3Style: {
    fontFamily: 'Roboto',
    fontWeight: "400",
    fontSize: '1.5rem',
    textAlign: "right",
    textTransform: "uppercase",
    color: "black",
  }
};


export default App;