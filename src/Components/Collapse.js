import React from "react";
//State temel örnek
/* class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
  }
  render() {
    return (
      <div>
        <a className="btn btn-primary w-100">TIKLA</a>
        {this.state.showContent ? (
          <div className="collapse show"> {this.props.children}</div>
        ) : null}
      </div>
    );
  }
} */
//-----------------------------------------------------------------------------------
//state in tıklandığında değişmesi (showMore fonksiyonu arrow function olmadığı sürece yorum satırındaki gibi kullanılır.)
//arrow function kullanılırsa aşağıdaki hali yeterlidir. Çünkü arrow üst scope a çıkıp kapsadığını alabiliyor.
/* class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
    // this.showMore = this.showMore.bind(this); 
  }*/

/* showMore() {
    console.log(this);
    this.setState({ showContent: true });
  } */
/*
  showMore = () => {
    // this.setState({ showContent: true }); 
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          TIKLA
        </button>
        {this.state.showContent ? (
          <div className="collapse show"> {this.props.children}</div>
        ) : null}
      </div>
    );
  }
} */
//_----------------------------------------------------------------------------------------------
class Collapse extends React.Component {
  state = {
    showContent: false,
  };

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  componentDidMount() {
    console.log("component oluşturuldu");
  }

  componentDidUpdate() {
    console.log("component Güncellendi");
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
          {
            /* {this.props.children.props.cardTitle} */
            React.Children.map(
              this.props.children,
              (children) => children.props.cardTitle
            )
          }
        </button>
        {this.state.showContent ? (
          <div className="collapse show">
            {
              /*this.props.children*/
              React.Children.map(this.props.children, (children) => children)
            }
          </div>
        ) : null}
      </div>
    );
  }
}
export default Collapse;
