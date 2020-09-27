import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: { name: 'catalog', params: {} } };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  render() {
    return (
      <>
        <Header />
        {this.state.view.name === 'catalog'
          ? <ProductList setView={this.setView} />
          : <ProductDetails setView={this.setView} params={this.state.view.params} />
        }
      </>
    );
  }
}

export default App;
