import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import style from './main.scss';

import Overview from './Components/Overview.jsx';
import Description from './Components/Description.jsx';
import SizeChart from './Components/SizeChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      usWomens: ['5', '5.5', '5.5+', '6', '6.5', '7', '7.5', '7.5+', '8', '8.5', '9', '9.5', '9.5+', '10', '10.5', '11', '11.5', '11.5+', '12', '12.5', '13', '13.5', '13.5+', '14'],
      usMens: ['4', '4.5', '4.5+', '5', '5.5', '6', '6.5', '6.5+', '7', '7.5', '8', '8.5', '8.5+', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '12.5+', '13', '14'],
    };
  }

  componentDidMount() {
    this.getDesciption();
  }

  getDesciption() {
    $.ajax({
      method: 'GET',
      url: '/descriptions',
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

  render() {
    const { data } = this.state;
    const { usWomens } = this.state;
    const { usMens } = this.state;
    return (
      <div className="descriptionWrapper">
        <Overview {...data} />
        <Description {...data} />
        <SizeChart mensSizes={usMens} womensSizes={usWomens} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('Description'));
