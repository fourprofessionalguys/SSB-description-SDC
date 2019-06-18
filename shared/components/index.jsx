import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import style from './main.scss';

import Overview from './Components/Overview';
import Description from './Components/Description';
import SizeChart from './Components/SizeChart';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      mensSizes: {},
      womensSizes: {},
      euSizes: {},
    };
  }

  componentDidMount() {
    this.getDesciption();
    this.getMensSizes();
    this.getWomensSizes();
    this.getEuSizes();
  }

  getDesciption() {
    $.ajax({
      method: 'GET',
      url: `http://${window.location.hostname}:3003/descriptions`,
      success: (data) => {
        this.setState({
          data,
        });
      },
      error: () => {
        console.error('err');
      },
    });
  }

  getMensSizes() {
    $.ajax({
      method: 'GET',
      url: `http://${window.location.hostname}:3003/mensSizes`,
      success: (mens) => {
        this.setState({
          mensSizes: {
            mens,
          },
        });
      },
      error: () => {
        console.error('Mens err');
      },
    });
  }

  getWomensSizes() {
    $.ajax({
      method: 'GET',
      url: `http://${window.location.hostname}:3003/womensSizes`,
      success: (womens) => {
        this.setState({
          womensSizes: {
            womens,
          },
        });
      },
      error: () => {
        console.error('Womens err');
      },
    });
  }

  getEuSizes() {
    $.ajax({
      method: 'GET',
      url: `http://${window.location.hostname}:3003/euSizes`,
      success: (eu) => {
        this.setState({
          euSizes: {
            eu,
          },
        });
      },
      error: () => {
        console.error('EU err');
      },
    });
  }

  render() {
    const { data } = this.state;
    const { mensSizes } = this.state;
    const { womensSizes } = this.state;
    const { euSizes } = this.state;
    const { mens } = mensSizes;
    const { womens } = womensSizes;
    const { eu } = euSizes;

    return (
      <div className="descriptionWrapper">
        <Overview {...data} />
        <Description {...data} />
        <h2 className="size-chart-title">Size Chart</h2>
        <SizeChart mensSizes={mens} womensSizes={womens} euSizes={eu} />
      </div>
    );
  }
}

export default App;
