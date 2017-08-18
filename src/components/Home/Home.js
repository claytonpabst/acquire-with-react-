import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
        [
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
          [
            {color: 'clear', isCompany: false}
          ],
        ],
      ],
      availableTiles: [
        [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [0,10], [0,11],
        [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [1,10], [1,11],
        [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [2,10], [2,11],
        [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [3,10], [3,11],
        [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9], [4,10], [4,11],
        [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9], [5,10], [5,11],
        [6,0], [6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9], [6,10], [6,11],
        [7,0], [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8], [7,9], [7,10], [7,11],
        [8,0], [8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8], [8,9], [8,10], [8,11]
        ],
      playerTiles: [],
      tileOneName: '',
      tileTwoName: '',
      tileThreeName: '',
      tileFourName: '',
      tileFiveName: '',
      tileSixName: '',
      colorInput: '',
      selectedCompany: '',
      taken: false,
      col: null,
      row: null,
      newCol: null,
      newRow: null,
      companySelectZIndex: 1,
      mergerStips: [],
      sizeBlue: 0,
      sizeRed: 0,
      sizeYellow: 0,
      sizeOrange: 0,
      sizeGreen: 0,
      sizeTeal: 0,
      sizePurple: 0,
      companiesToMerge: [],
      timeToMerge: false,
      mergeZIndex: 1
    }

    this.placeTile = this.placeTile.bind(this);
    this.createCompany = this.createCompany.bind(this);
    this.addToCompany = this.addToCompany.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.updateSelectedCompany = this.updateSelectedCompany.bind(this);
    this.checkForLooseTiles = this.checkForLooseTiles.bind(this);
    this.checkForMerger = this.checkForMerger.bind(this);
    this.updateCompanySize = this.updateCompanySize.bind(this);
    this.resetCompanySize = this.resetCompanySize.bind(this);
    this.merge = this.merge.bind(this);
    this.merge2 = this.merge2.bind(this);
    this.merge3 = this.merge3.bind(this);
    this.merge4 = this.merge4.bind(this);
    this.getRandomTile = this.getRandomTile.bind(this);
  }

  
  getRandomTile() {
    let availableTiles = this.state.availableTiles
    let playerTiles = this.state.playerTiles
    for (let i = playerTiles.length; i < 6; i++) {
      const min = 0
      const max = this.state.availableTiles.length
      let randomIndex = Math.floor(Math.random() * (max - min)) + min;
      playerTiles.push(availableTiles[randomIndex])
      availableTiles.splice(randomIndex, 1)
    }
    let letters = ['A','B','C','D','E','F','G','H','I']
    let tileOneName = letters[playerTiles[0][0]] + (playerTiles[0][1] + 1)
    let tileTwoName = letters[playerTiles[1][0]] + (playerTiles[1][1] +1)
    let tileThreeName = letters[playerTiles[2][0]] + (playerTiles[2][1] +1)
    let tileFourName = letters[playerTiles[3][0]] + (playerTiles[3][1] +1)
    let tileFiveName = letters[playerTiles[4][0]] + (playerTiles[4][1] +1)
    let tileSixName = letters[playerTiles[5][0]] + (playerTiles[5][1] +1)
    this.setState({
      availableTiles: availableTiles,
      playerTiles: playerTiles,
      tileOneName: tileOneName,
      tileTwoName: tileTwoName,
      tileThreeName: tileThreeName,
      tileFourName: tileFourName,
      tileFiveName: tileFiveName,
      tileSixName: tileSixName
    })
  }

  placeTile(col, row) {
    let rowPlus = row + 1;
    let rowMinus = row - 1;
    let colPlus = col + 1;
    let colMinus = col - 1;
    let gameBoard = this.state.board;
    let location = this.state.board;
    if (this.state.board[col][row][0].color === 'clear') {
      location[col][row][0].color = 'Taken'
      this.setState({
        board: location,
        col: col,
        row: row
      })
    } else {
      alert('Click an available location where you have the corresponding tile to place your tile.')
    }
    if (this.checkForMerger(col, row)) {
      return
    } else {
      if (col < 8 && gameBoard[col+1][row][0].isCompany === true) {
        this.addToCompany(col, row, colPlus, row)
        return
      }
      if (col > 0 && gameBoard[col-1][row][0].isCompany === true) {
        this.addToCompany(col, row, colMinus, row)
        return
      }
      if (row < 11 && gameBoard[col][row+1][0].isCompany === true) {
        this.addToCompany(col, row, col, rowPlus)
        return
      }
      if (row > 0 && gameBoard[col][row-1][0].isCompany === true) {
        this.addToCompany(col, row, col, rowMinus)
        return
      }
      if (col < 8 && gameBoard[col+1][row][0].color === 'Taken') {
        this.setState({
          newCol: colPlus,
          newRow: row,
          taken: true,
          companySelectZIndex: 3
        })
      }
      if (col > 0 && gameBoard[col-1][row][0].color === 'Taken') {
        this.setState({
          newCol: colMinus,
          newRow: row,
          taken: true,
          companySelectZIndex: 3
        })
      }
      if (row < 11 && gameBoard[col][row+1][0].color === 'Taken') {
        this.setState({
          newCol: col,
          newRow: rowPlus,
          taken: true,
          companySelectZIndex: 3
        })
      }
      if (row > 0 && gameBoard[col][row-1][0].color === 'Taken') {
        this.setState({
          newCol: col,
          newRow: rowMinus,
          taken: true,
          companySelectZIndex: 3
        })
      }
    }  
  }

  handleColor(e) {
    this.setState({
      colorInput: e.target.value
    })
  }

  createCompany(col, row, newCol, newRow) {
    let gameBoard = this.state.board;
    let location = this.state.board;
    location[col][row][0].color = this.state.colorInput
    location[col][row][0].isCompany = true
    location[newCol][newRow][0].color = this.state.colorInput
    location[newCol][newRow][0].isCompany = true
    this.setState({
      board: location,
      taken: false,
      colorInput: '',
      selectedCompany: '',
      companySelectZIndex: 1
    })
    this.checkForLooseTiles(col, row, 2)
  }

  updateSelectedCompany(val) {
    this.setState({
      selectedCompany: val,
      colorInput: val
    })
    
  }

  updateCompanySize(currentCompany, num) {
    // console.log(currentCompany, num)
    if (currentCompany === 'Blue') {
      this.setState({
        sizeBlue: this.state.sizeBlue + num
      })
    }
    if (currentCompany === 'Red') {
      this.setState({
        sizeRed: this.state.sizeRed + num
      })
    }
    if (currentCompany === 'Yellow') {
      this.setState({
        sizeYellow: this.state.sizeYellow + num
      })
    }
    if (currentCompany === 'Green') {
      this.setState({
        sizeGreen: this.state.sizeGreen + num
      })
    }
    if (currentCompany === 'Orange') {
      this.setState({
        sizeOrange: this.state.sizeOrange + num
      })
    }
    if (currentCompany === 'Purple') {
      this.setState({
        sizePurple: this.state.sizePurple + num
      })
    }
    if (currentCompany === 'Teal') {
      this.setState({
        sizeTeal: this.state.sizeTeal + num
      })
    }
  }

  resetCompanySize(currentCompany, num) {
    // console.log(currentCompany, num)
    if (currentCompany === 'Blue') {
      this.setState({
        sizeBlue: this.state.sizeBlue + num
      })
    }
    if (currentCompany === 'Red') {
      this.setState({
        sizeRed: this.state.sizeRed + num
      })
    }
    if (currentCompany === 'Yellow') {
      this.setState({
        sizeYellow: this.state.sizeYellow + num
      })
    }
    if (currentCompany === 'Green') {
      this.setState({
        sizeGreen: this.state.sizeGreen + num
      })
    }
    if (currentCompany === 'Orange') {
      this.setState({
        sizeOrange: this.state.sizeOrange + num
      })
    }
    if (currentCompany === 'Purple') {
      this.setState({
        sizePurple: this.state.sizePurple + num
      })
    }
    if (currentCompany === 'Teal') {
      this.setState({
        sizeTeal: this.state.sizeTeal + num
      })
    }
  }

  addToCompany(col, row, newCol, newRow) {
    let gameBoard = this.state.board
    let currentCompany = gameBoard[newCol][newRow][0].color
    gameBoard[col][row][0].color = currentCompany
    gameBoard[col][row][0].isCompany = true
    this.setState({
      board: gameBoard
    })
    this.checkForLooseTiles(col, row, 1)
  }

  checkForLooseTiles(col, row, count) {
    let gameBoard = this.state.board
    if (col < 8 && gameBoard[col+1][row][0].color === 'Taken') {
      gameBoard[col+1][row][0].color = gameBoard[col][row][0].color
      gameBoard[col+1][row][0].isCompany = true
      this.setState({
        board: gameBoard
      })
      count ++
    }
    if (col > 0 && gameBoard[col-1][row][0].color === 'Taken') {
      gameBoard[col-1][row][0].color = gameBoard[col][row][0].color
      gameBoard[col-1][row][0].isCompany = true
      this.setState({
        board: gameBoard
      })
      count ++
    }
    if (row < 11 && gameBoard[col][row+1][0].color === 'Taken') {
      gameBoard[col][row+1][0].color = gameBoard[col][row][0].color
      gameBoard[col][row+1][0].isCompany = true
      this.setState({
        board: gameBoard
      })
      count ++
    }
    if (row > 0 && gameBoard[col][row-1][0].color === 'Taken') {
      gameBoard[col][row-1][0].color = gameBoard[col][row][0].color
      gameBoard[col][row-1][0].isCompany = true
      this.setState({
        board: gameBoard
      })
      count ++
    }
    this.updateCompanySize(gameBoard[col][row][0].color, count)
  }

  checkForMerger(col, row) {
    let unique = [];
    const mergerArr = []
    let gameBoard = this.state.board

    function isValidCell(color) {
      return color !== 'Taken' && color !== 'clear';
    }
    
    if (col < 8) {
      let color = gameBoard[col+1][row][0].color
      if (isValidCell(color)) {
        mergerArr.push(color)
      }
    }
    if (col > 0) {
      let color = gameBoard[col-1][row][0].color
      if (isValidCell(color)) {
        mergerArr.push(color)
      }
    }
    if (row < 11) {
      let color = gameBoard[col][row+1][0].color
      if (isValidCell(color)) {
        mergerArr.push(color)
      }
    }
    if (row > 0) {
      let color = gameBoard[col][row-1][0].color
      if (isValidCell(color)) {
        mergerArr.push(color)
      }
    }

    for (let i = 0; i < mergerArr.length; i++) {
      if (!unique.includes(mergerArr[i])) {
        unique.push(mergerArr[i])
      }
    }
    if (unique.length > 1){
      this.setState({
        companiesToMerge: unique,
        timeToMerge: true,
        mergeZIndex: 3
      })
    }
    return unique.length > 1
  }

  merge(col, row) {
    let companiesToMerge = []
    for (let i = 0; i < this.state.companiesToMerge.length; i++) {
      console.log()
      let color = this.state.companiesToMerge[i]
      let size = this.state[`size${color}`]
      companiesToMerge.push([color, size])
    }
    companiesToMerge.sort((a,b) => {
      return b[1] - a[1]
    })
    this.setState({
      mergeZIndex: 1,
      timeToMerge: false,
      companiesToMerge: companiesToMerge
    }, () => {
      if (companiesToMerge.length === 2) {
        this.merge2()
      } if (companiesToMerge.length === 3) {
        this.merge3()
      } if (companiesToMerge.length === 4) {
        this.merge4()
      }
    })
  }

  merge2() {
    console.log('merge2 hit')
    let gameBoard = this.state.board;
    let companyToTakeMerger = this.state.companiesToMerge[0][0];
    let companyToTakeMergerSize = 0
    let companyToBeTaken = this.state.companiesToMerge[1][0];
    let companyToBeTakenSize = 0;
    for (let i = 0; i < this.state.board.length; i++) {
      for (let j = 0; j < this.state.board[i].length; j++) {
        if (this.state.board[i][j][0].color === companyToBeTaken) {
          gameBoard[i][j][0].color = companyToTakeMerger;
          companyToTakeMergerSize ++;
          companyToBeTakenSize --;
        }
      }
    }
    gameBoard[this.state.col][this.state.row][0].color = companyToTakeMerger
    companyToTakeMergerSize ++
    this.setState({
      board: gameBoard,
      companiesToMerge: []
    })
    this.updateCompanySize(companyToTakeMerger, companyToTakeMergerSize)
    this.resetCompanySize(companyToBeTaken, companyToBeTakenSize)
    this.checkForLooseTiles(this.state.col, this.state.row, 1)
  }

  merge3() {

  }

  merge4() {

  }

  // merge(col, row) {
  //   let gameBoard = this.state.board
  //   const cells = []
    
  //   function isValidCell(col, row) {
  //     let color = gameBoard[col][row][0].color
  //     return color !== 'Taken' && color !== 'clear' && cells.indexOf([col,row])
  //   }

    
  //   const checkAdjacentCells = (col, row) => {

  //     let neighbors = [
  //     ]

  //     if (col < 8) {
        
  //       if (isValidCell(col+1, row)) {
  //         neighbors.push([col+1,row])
  //       }
  //     }
  //     if (col > 0) {
  //       let color = gameBoard[col-1][row][0].color
  //       if (isValidCell(color)) {
  //         neighbors.push([col-1,row])
  //       }
  //     }
  //     if (row < 8) {
  //       let color = gameBoard[col][row+1][0].color
  //       if (isValidCell(color)) {
  //         neighbors.push([col,row+1])
  //       }
  //     }
  //     if (col > 0) {
  //       let color = gameBoard[col][row-1][0].color
  //       if (isValidCell(color)) {
  //         neighbors.push([col,row-1])
  //       }
  //     }
  //   }
  // }

  render() {
    console.log(this.state)
    return (
      // <div className="home">

      <section className="mainView">
        <header className="mainViewHeader"> 
          <button onClick={this.getRandomTile}>Start Game!</button>
          <div className='visibleTiles'>{this.state.tileOneName}</div>
          <div className='visibleTiles'>{this.state.tileTwoName}</div>
          <div className='visibleTiles'>{this.state.tileThreeName}</div>
          <div className='visibleTiles'>{this.state.tileFourName}</div>
          <div className='visibleTiles'>{this.state.tileFiveName}</div>
          <div className='visibleTiles'>{this.state.tileSixName}</div>
        </header>

        <section className="gameGrid">
          <section className='companySelect' style={{zIndex: this.state.companySelectZIndex}}>
            <select id='companySelect' 
                    value={this.state.selectedCompany} 
                    style={{display: this.state.taken ? 'block' : 'none'}} 
                    onChange={(e) => this.updateSelectedCompany(e.target.value)}>
              <option value=''>Select a company</option>
              <option value="Blue">Facecrook</option>
              <option value="Red">Union Atlantic Railroad</option>
              <option value='Orange'>Crump Tower Inc.</option>
              <option value='Yellow'>Booze Cruise Inc.</option>
              <option value='Purple'>Chevwrong Oil</option>
              <option value='Green'>Hamilton Hotels</option>
              <option value='Teal'>Outel</option>
            </select>
            <button style={{display: this.state.colorInput !== '' ? 'block' : 'none'}} 
                    onClick={ () => this.createCompany(this.state.col, this.state.row, this.state.newCol, this.state.newRow)}>create
            </button>
          </section>

          <section className='mergeSelect' style={{zIndex: this.state.mergeZIndex}}>
            time to merge!
            <button onClick={ () => this.merge(this.state.col, this.state.row)}>create
            </button>
          </section>

            <section className="gameGridInner">
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(0, 0)} className={'gameColumn' + this.state.board[0][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 1)} className={'gameColumn' + this.state.board[0][1][0].color}>A2</div>
                  <div onClick={ () => this.placeTile(0, 2)} className={'gameColumn' + this.state.board[0][2][0].color}>A3</div>
                  <div onClick={ () => this.placeTile(0, 3)} className={'gameColumn' + this.state.board[0][3][0].color}>A4</div>
                  <div onClick={ () => this.placeTile(0, 4)} className={'gameColumn' + this.state.board[0][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 5)} className={'gameColumn' + this.state.board[0][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 6)} className={'gameColumn' + this.state.board[0][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 7)} className={'gameColumn' + this.state.board[0][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 8)} className={'gameColumn' + this.state.board[0][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 9)} className={'gameColumn' + this.state.board[0][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 10)} className={'gameColumn' + this.state.board[0][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 11)} className={'gameColumn' + this.state.board[0][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(1, 0)} className={'gameColumn' + this.state.board[1][0][0].color}>B1</div>
                  <div onClick={ () => this.placeTile(1, 1)} className={'gameColumn' + this.state.board[1][1][0].color}>B2</div>
                  <div onClick={ () => this.placeTile(1, 2)} className={'gameColumn' + this.state.board[1][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 3)} className={'gameColumn' + this.state.board[1][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 4)} className={'gameColumn' + this.state.board[1][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 5)} className={'gameColumn' + this.state.board[1][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 6)} className={'gameColumn' + this.state.board[1][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 7)} className={'gameColumn' + this.state.board[1][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 8)} className={'gameColumn' + this.state.board[1][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 9)} className={'gameColumn' + this.state.board[1][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 10)} className={'gameColumn' + this.state.board[1][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(1, 11)} className={'gameColumn' + this.state.board[1][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(2, 0)} className={'gameColumn' + this.state.board[2][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 1)} className={'gameColumn' + this.state.board[2][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 2)} className={'gameColumn' + this.state.board[2][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 3)} className={'gameColumn' + this.state.board[2][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 4)} className={'gameColumn' + this.state.board[2][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 5)} className={'gameColumn' + this.state.board[2][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 6)} className={'gameColumn' + this.state.board[2][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 7)} className={'gameColumn' + this.state.board[2][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 8)} className={'gameColumn' + this.state.board[2][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 9)} className={'gameColumn' + this.state.board[2][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 10)} className={'gameColumn' + this.state.board[2][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(2, 11)} className={'gameColumn' + this.state.board[2][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(3, 0)} className={'gameColumn' + this.state.board[3][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 1)} className={'gameColumn' + this.state.board[3][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 2)} className={'gameColumn' + this.state.board[3][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 3)} className={'gameColumn' + this.state.board[3][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 4)} className={'gameColumn' + this.state.board[3][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 5)} className={'gameColumn' + this.state.board[3][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 6)} className={'gameColumn' + this.state.board[3][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 7)} className={'gameColumn' + this.state.board[3][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 8)} className={'gameColumn' + this.state.board[3][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 9)} className={'gameColumn' + this.state.board[3][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 10)} className={'gameColumn' + this.state.board[3][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(3, 11)} className={'gameColumn' + this.state.board[3][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(4, 0)} className={'gameColumn' + this.state.board[4][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 1)} className={'gameColumn' + this.state.board[4][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 2)} className={'gameColumn' + this.state.board[4][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 3)} className={'gameColumn' + this.state.board[4][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 4)} className={'gameColumn' + this.state.board[4][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 5)} className={'gameColumn' + this.state.board[4][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 6)} className={'gameColumn' + this.state.board[4][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 7)} className={'gameColumn' + this.state.board[4][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 8)} className={'gameColumn' + this.state.board[4][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 9)} className={'gameColumn' + this.state.board[4][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 10)} className={'gameColumn' + this.state.board[4][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(4, 11)} className={'gameColumn' + this.state.board[4][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(5, 0)} className={'gameColumn' + this.state.board[5][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 1)} className={'gameColumn' + this.state.board[5][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 2)} className={'gameColumn' + this.state.board[5][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 3)} className={'gameColumn' + this.state.board[5][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 4)} className={'gameColumn' + this.state.board[5][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 5)} className={'gameColumn' + this.state.board[5][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 6)} className={'gameColumn' + this.state.board[5][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 7)} className={'gameColumn' + this.state.board[5][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 8)} className={'gameColumn' + this.state.board[5][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 9)} className={'gameColumn' + this.state.board[5][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 10)} className={'gameColumn' + this.state.board[5][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(5, 11)} className={'gameColumn' + this.state.board[5][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(6, 0)} className={'gameColumn' + this.state.board[6][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 1)} className={'gameColumn' + this.state.board[6][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 2)} className={'gameColumn' + this.state.board[6][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 3)} className={'gameColumn' + this.state.board[6][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 4)} className={'gameColumn' + this.state.board[6][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 5)} className={'gameColumn' + this.state.board[6][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 6)} className={'gameColumn' + this.state.board[6][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 7)} className={'gameColumn' + this.state.board[6][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 8)} className={'gameColumn' + this.state.board[6][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 9)} className={'gameColumn' + this.state.board[6][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 10)} className={'gameColumn' + this.state.board[6][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(6, 11)} className={'gameColumn' + this.state.board[6][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(7, 0)} className={'gameColumn' + this.state.board[7][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 1)} className={'gameColumn' + this.state.board[7][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 2)} className={'gameColumn' + this.state.board[7][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 3)} className={'gameColumn' + this.state.board[7][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 4)} className={'gameColumn' + this.state.board[7][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 5)} className={'gameColumn' + this.state.board[7][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 6)} className={'gameColumn' + this.state.board[7][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 7)} className={'gameColumn' + this.state.board[7][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 8)} className={'gameColumn' + this.state.board[7][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 9)} className={'gameColumn' + this.state.board[7][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 10)} className={'gameColumn' + this.state.board[7][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(7, 11)} className={'gameColumn' + this.state.board[7][11][0].color}>A1</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(8, 0)} className={'gameColumn' + this.state.board[8][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 1)} className={'gameColumn' + this.state.board[8][1][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 2)} className={'gameColumn' + this.state.board[8][2][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 3)} className={'gameColumn' + this.state.board[8][3][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 4)} className={'gameColumn' + this.state.board[8][4][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 5)} className={'gameColumn' + this.state.board[8][5][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 6)} className={'gameColumn' + this.state.board[8][6][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 7)} className={'gameColumn' + this.state.board[8][7][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 8)} className={'gameColumn' + this.state.board[8][8][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 9)} className={'gameColumn' + this.state.board[8][9][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 10)} className={'gameColumn' + this.state.board[8][10][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(8, 11)} className={'gameColumn' + this.state.board[8][11][0].color}>A1</div>
              </div>
            </section>
        </section>
      </section>

      // </div>
    );
  }
}


export default Home;