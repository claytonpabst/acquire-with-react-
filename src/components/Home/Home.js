import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ]
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ]
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ]
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ]
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ]
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ]
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
        ],
        [
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
          [
            {color: 'clear'}
          ],
        ]
      ]
    }

    this.placeTile = this.placeTile.bind(this);

  }

  placeTile(row, col) {
    let location = this.state.board[row][col][0].color;
    console.log(location)
    this.setState({
       location: 'taken'
    })
    console.log(this.state.board[row][col][0].color)
  }

  render() {
    return (
      // <div className="home">

        <section className="mainView">
        <header className="mainViewHeader">    

        </header>
        <section className="gameGrid">
            <section className="gameGridInner">
            <div className="gameRow">
                <div onClick={ () => this.placeTile(0, 0)} className={'gameColumn' + this.state.board[0][0][0].color}>A1</div>
                {/*{console.log(this.state.board[0][0][0].color)}*/}
                <div className="gameColumn">A2</div>
                <div className="gameColumn">A3</div>
                <div className="gameColumn">A4</div>
                <div className="gameColumn">A5</div>
                <div className="gameColumn">A6</div>
                <div className="gameColumn">A7</div>
                <div className="gameColumn">A8</div>
                <div className="gameColumn">A9</div>
                <div className="gameColumn">A10</div>
                <div className="gameColumn">A11</div>
                <div className="gameColumn">A12</div>
            </div>
            <div className="gameRow">
                <div className="gameColumn">B1</div>
                <div className="gameColumn">B2</div>
                <div className="gameColumn">B3</div>
                <div className="gameColumn">B4</div>
                <div className="gameColumn">B5</div>
                <div className="gameColumn">B6</div>
                <div className="gameColumn">B7</div>
                <div className="gameColumn">B8</div>
                <div className="gameColumn">B9</div>
                <div className="gameColumn">B10</div>
                <div className="gameColumn">B11</div>
                <div className="gameColumn">B12</div>

            </div>
            <div className="gameRow">
                <div className="gameColumn">C1</div>
                <div className="gameColumn">C2</div>
                <div className="gameColumn">C3</div>
                <div className="gameColumn">C4</div>
                <div className="gameColumn">C5</div>
                <div className="gameColumn">C6</div>
                <div className="gameColumn">C7</div>
                <div className="gameColumn">C8</div>
                <div className="gameColumn">C9</div>
                <div className="gameColumn">C10</div>
                <div className="gameColumn">C11</div>
                <div className="gameColumn">C12</div>
            </div>
            <div className="gameRow">
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
            </div>
            <div className="gameRow">
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
            </div>
            <div className="gameRow">
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
            </div>
            <div className="gameRow">
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
            </div>
            <div className="gameRow">
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
            </div>
            <div className="gameRow">
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
                <div className="gameColumn"></div>
            </div>
            </section>
        </section>
        </section>

      // </div>
    );
  }
}


export default Home;