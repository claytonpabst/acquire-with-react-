import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
      mergeZIndex: 1,
      playerCash: 15000,
      playerStock: [
        {
          name: 'Facecrook',
          color: 'Blue',
          amount: 0
        },
        {
          name: 'Union Atlantic Railroad',
          color: 'Red',
          amount: 0
        },
        {
          name: 'Crump Tower Inc.',
          color: 'Orange',
          amount: 0
        },
        {
          name: 'Booze Cruise Inc.',
          color: 'Yellow',
          amount: 0
        },
        {
          name: 'Chevwrong Oil',
          color: 'Purple',
          amount: 0
        },
        {
          name: 'Hamilton Hotels',
          color: 'Green',
          amount: 0
        },
        {
          name: 'Outel',
          color: 'Teal',
          amount: 0
        }
      ],
      companyStatus: [
        {
          name: 'Facecrook',
          color: 'Blue',
          size: 0,
          active: false
        },
        {
          name: 'Union Atlantic Railroad',
          color: 'Red',
          size: 0,
          active: false
        },
        {
          name: 'Crump Tower Inc.',
          color: 'Orange',
          size: 0,
          active: false
        },
        {
          name: 'Booze Cruise Inc.',
          color: 'Yellow',
          size: 0,
          active: false
        },
        {
          name: 'Chevwrong Oil',
          color: 'Purple',
          size: 0,
          active: false
        },
        {
          name: 'Hamilton Hotels',
          color: 'Green',
          size: 0,
          active: false
        },
        {
          name: 'Outel',
          color: 'Teal',
          size: 0,
          active: false
        }
      ],
      stepInTurn: 'Place Tile',
      buyStockZIndex: -1,
      buyStockSelectedCompany: '',
      amountOfStockToBuy: 1
    }

              //     <option value="Blue">Facecrook</option>
              // <option value="Red">Union Atlantic Railroad</option>
              // <option value='Orange'>Crump Tower Inc.</option>
              // <option value='Yellow'>Booze Cruise Inc.</option>
              // <option value='Purple'>Chevwrong Oil</option>
              // <option value='Green'>Hamilton Hotels</option>
              // <option value='Teal'>Outel</option>

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
    this.splicePlayerTile = this.splicePlayerTile.bind(this);
    this.checkIfMoveIsLegal = this.checkIfMoveIsLegal.bind(this);
    this.buyStock = this.buyStock.bind(this);
    this.endTurn = this.endTurn.bind(this);
    this.handleBuyStockCompanySelect = this.handleBuyStockCompanySelect.bind(this);
    this.handleAmountOfStockToBuy = this.handleAmountOfStockToBuy.bind(this);
    this.cancelBuyStockBox = this.cancelBuyStockBox.bind(this); 
    this.completeTransaction = this.completeTransaction.bind(this);

  }

  checkIfMoveIsLegal(col, row) {
    let uniqueOver10 = 0
    let unique = [];
    let mergerArr = []
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
      for (let i = 0; i < unique.length; i++) {
        if (unique[i] === 'Blue' && this.state.sizeBlue > 10) {
          uniqueOver10 ++
        } if (unique[i] === 'Green' && this.state.sizeGreen > 10) {
          uniqueOver10 ++
        } if (unique[i] === 'Yellow' && this.state.sizeYellow > 10) {
          uniqueOver10 ++
        } if (unique[i] === 'Orange' && this.state.sizeOrange > 10) {
          uniqueOver10 ++
        } if (unique[i] === 'Purple' && this.state.sizePurple > 10) {
          uniqueOver10 ++
        } if (unique[i] === 'Red' && this.state.sizeRed > 10) {
          uniqueOver10 ++
        } if (unique[i] === 'Teal' && this.state.sizeTeal > 10) {
          uniqueOver10 ++
        }
      }  
    }
    return uniqueOver10 > 1
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
    let playerTiles = this.state.playerTiles
    //-------------------------------------------to dev comment out below
    if (this.state.stepInTurn === 'Place Tile') {
      if (playerTiles.length > 1) {
        console.log(playerTiles)
        if ((col === playerTiles[0][0] && row === playerTiles[0][1]) ||
        (col === playerTiles[1][0] && row === playerTiles[1][1]) ||
        (col === playerTiles[2][0] && row === playerTiles[2][1]) ||
        (col === playerTiles[3][0] && row === playerTiles[3][1]) ||
        (col === playerTiles[4][0] && row === playerTiles[4][1]) ||
        (col === playerTiles[5][0] && row === playerTiles[5][1]) 
        ) {
    //-------------------------------------------break comment
          if (!this.checkIfMoveIsLegal(col, row)){
            if (this.state.board[col][row][0].color === 'clear') {
              location[col][row][0].color = 'Taken'
              this.setState({
                board: location,
                col: col,
                row: row,
                stepInTurn: 'Buy Stock'
              })
    //-------------------------------------------to dev comment out below
            this.splicePlayerTile(col, row)
    //-------------------------------------------break comment
            } else {
              alert('Click an available location where you have the corresponding tile to place your tile.')
            }
            if (this.checkForMerger(col, row)) {
              return
            } else { /* check for add to company */
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
          } else {
            alert('Two companies over 11 tiles each are not able to merge, try another tile.')
          } 
          //-----------------------------------to dev comment out below
        } else {
          alert('Click an available location where you have the corresponding tile to place your tile.')
        }
      } else {
        alert("Click 'start game' to begin.")
      }
    } else {
      alert("You must wait until next turn to place another tile.")
    }
    //-------------------------------------break comment
  }

  splicePlayerTile(col, row) {
    let tileToSplice = [...this.state.playerTiles]
    if (col === this.state.playerTiles[0][0] && row === this.state.playerTiles[0][1]) {
      tileToSplice.splice(0, 1)
    }
    if (col === this.state.playerTiles[1][0] && row === this.state.playerTiles[1][1]) {
      tileToSplice.splice(1, 1)
    }
    if (col === this.state.playerTiles[2][0] && row === this.state.playerTiles[2][1]) {
      tileToSplice.splice(2, 1)
    }
    if (col === this.state.playerTiles[3][0] && row === this.state.playerTiles[3][1]) {
      tileToSplice.splice(3, 1)
    }
    if (col === this.state.playerTiles[4][0] && row === this.state.playerTiles[4][1]) {
      tileToSplice.splice(4, 1)
    }
    if (col === this.state.playerTiles[5][0] && row === this.state.playerTiles[5][1]) {
      tileToSplice.splice(5, 1)
    }
      this.setState({
        playerTiles: tileToSplice
      }, () => {
        this.getRandomTile()
      })
  }

  handleColor(e) {
    this.setState({
      colorInput: e.target.value
    })
  }

  createCompany(col, row, newCol, newRow) {
    let gameBoard = this.state.board;
    let location = this.state.board;
    let playerStock = this.state.playerStock;
    let companyStatus = this.state.companyStatus
    let companyName = ''
    location[col][row][0].color = this.state.colorInput
    location[col][row][0].isCompany = true
    location[newCol][newRow][0].color = this.state.colorInput
    location[newCol][newRow][0].isCompany = true
    for (let i = 0; i < this.state.playerStock.length; i++) {
      if (playerStock[i].color === this.state.colorInput) {
        playerStock[i].amount ++;
        companyName = playerStock[i].name
        companyStatus[i].active = true
      }
    }
    alert(`Congratulations on creating ${companyName}. You have been awarded 1 share for your efforts.`)
    this.setState({
      board: location,
      taken: false,
      colorInput: '',
      selectedCompany: '',
      companySelectZIndex: 1,
      playerStock: playerStock,
      companyStatus: companyStatus
    })
    this.checkForLooseTiles(col, row, 2)
  }

  updateSelectedCompany(val) {
    this.setState({
      selectedCompany: val,
      colorInput: val
    }) 
  }

  handleBuyStockCompanySelect(val) {
    this.setState({
      buyStockSelectedCompany: val
    })
  }

  handleAmountOfStockToBuy(val) {
    let numberedVal = parseInt(val)
    this.setState({
      amountOfStockToBuy: numberedVal
    })
  }

  updateCompanySize(currentCompany, num) {
    let company = [...this.state.companyStatus]
    for(let i=0; i<this.state.companyStatus.length; i++) {
      if(company[i].color === currentCompany) {
        company[i].size = company[i].size + num
      }
    }
    this.setState({
      companyStatus: company
    }, () => {
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
    })  
  }

  resetCompanySize(currentCompany, num) {
    let company = [...this.state.companyStatus]
    for(let i=0; i<this.state.companyStatus.length; i++) {
      if(company[i].color === currentCompany) {
        company[i].size = company[i].size - num
      }
    }
    this.setState({
      companyStatus: company
    }, () => {
      if (currentCompany === 'Blue') {
        this.setState({
          sizeBlue: this.state.sizeBlue - num
        })
      }
      if (currentCompany === 'Red') {
        this.setState({
          sizeRed: this.state.sizeRed - num
        })
      }
      if (currentCompany === 'Yellow') {
        this.setState({
          sizeYellow: this.state.sizeYellow - num
        })
      }
      if (currentCompany === 'Green') {
        this.setState({
          sizeGreen: this.state.sizeGreen - num
        })
      }
      if (currentCompany === 'Orange') {
        this.setState({
          sizeOrange: this.state.sizeOrange - num
        })
      }
      if (currentCompany === 'Purple') {
        this.setState({
          sizePurple: this.state.sizePurple - num
        })
      }
      if (currentCompany === 'Teal') {
        this.setState({
          sizeTeal: this.state.sizeTeal - num
        })
      }
    })  
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
    this.setState({
      stepInTurn: 'Buy Stock'
    })
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
          companyToBeTakenSize ++;
        }
      }
    }
    // if (companyToBeTakenSize === companyToTakeMergerSize) {
    //   this.setState({
    //     sameSizeMergeBoxZIndex: 3
    //   })
    // }
    gameBoard[this.state.col][this.state.row][0].color = companyToTakeMerger
    companyToTakeMergerSize ++
    let companyStatus = this.state.companyStatus;
    let playerStock = this.state.playerStock;
    let playerCash = this.state.playerCash;
    for (let i=0; i < companyStatus.length; i++) {
      if (companyStatus[i].color === companyToBeTaken) {
        companyStatus[i].active = false;
        playerCash = playerCash + ((playerStock[i].amount * companyStatus[i].size) * 100)
        playerStock[i].amount = 0;
      }
    }

    this.setState({
      board: gameBoard,
      companiesToMerge: [],
      companyStatus: companyStatus,
      playerCash: playerCash,
      playerStock: playerStock
    })
    this.updateCompanySize(companyToTakeMerger, companyToTakeMergerSize)
    this.resetCompanySize(companyToBeTaken, companyToBeTakenSize)
    // this.checkForLooseTiles(this.state.col, this.state.row, 0)
    setTimeout(() => {this.checkForLooseTiles(this.state.col, this.state.row, 0)}, 20)
  }

  merge3() {

  }

  merge4() {

  }

  buyStock() {
    if (this.state.stepInTurn === 'Buy Stock') {
      this.setState({
        buyStockZIndex: 2
      })
    } else {
      alert('Think you can just buy up the market without contributing? Pshhhh. Place a tile then try again.')
    }
  }

  completeTransaction() {
    let stock = this.state.buyStockSelectedCompany
    let amountToBuy = this.state.amountOfStockToBuy
    let company = this.state.companyStatus
    let playerStock = this.state.playerStock
    let playerCash = this.state.playerCash
    for (let i=0; i < playerStock.length; i++) {
      if (playerStock[i].color === stock) {
        playerStock[i].amount = playerStock[i].amount + amountToBuy;
        playerCash = playerCash - ((amountToBuy * company[i].size) * 100)
      }
    }
    this.setState({
      playerStock: playerStock,
      playerCash: playerCash,
      buyStockZIndex: -1,
      amountOfStockToBuy: 1
    })
  }

  cancelBuyStockBox() {
    this.setState({
      buyStockZIndex: -1,
      amountOfStockToBuy: 1
    })
  }

  endTurn() {
    this.setState({
      stepInTurn: 'Place Tile'
    })
  }

  // componentDidMount() {
  //   console.log(this.props)
  // }

  render() {
    console.log(this.state)
    return (

      // <div className="home">

      <section className="mainView">
      {/*{
    this.state.companyStatus.map((item, i) => {
        let URL = `/detailedView/${item.name}`
        return <Link to={URL}>{item.name}</Link>
    })
    }*/}
        <header className="mainViewHeader"> 
          <button onClick={this.getRandomTile}>Start Game!</button>
          <div className='visibleTiles'>{this.state.tileOneName}</div>
          <div className='visibleTiles'>{this.state.tileTwoName}</div>
          <div className='visibleTiles'>{this.state.tileThreeName}</div>
          <div className='visibleTiles'>{this.state.tileFourName}</div>
          <div className='visibleTiles'>{this.state.tileFiveName}</div>
          <div className='visibleTiles'>{this.state.tileSixName}</div>
          <h2 style={{"color":"white"}}>{this.state.stepInTurn}</h2>
          <button onClick={this.buyStock}>Buy Stock</button>
          <button onClick={this.endTurn}>End Turn</button>
          <h2>Cash on hand:</h2>
          <h2>${this.state.playerCash.toLocaleString()}.00</h2>
          {this.state.playerStock.map((company, i) => {
            return <h1 key={i}>{company.name} ({company.color}): {company.amount}</h1>
          })}

          <section className='buyStock' style={{zIndex: this.state.buyStockZIndex}}>
            <h1>Select a company to purchase their stock!</h1>
            <select onChange={(e) => this.handleBuyStockCompanySelect(e.target.value)}
                    value={this.state.buyStockSelectedCompany}>
              <option value=''>Select a company</option>
              {this.state.companyStatus.map((company, i) =>{
                if(company.active === true) {
                  return  <option key={i} value={company.color}>{company.name} ({company.color}) ${(company.size * 100)}/share</option>
                }
              })}
            </select>
            <h1>Select the amount of shares to purchase</h1>
            <select onChange={(e) => this.handleAmountOfStockToBuy(e.target.value)}
                    value={this.state.amountOfStockToBuy}>
              <option value={1}>1 share</option>
              <option value={2}>2 shares</option>
              <option value={3}>3 shares</option>
            </select>
            <button onClick={this.completeTransaction}>Complete Transaction</button>
            <button onClick={this.cancelBuyStockBox}>Cancel</button>
          </section>
        </header>

        <section className="gameGrid">
          <section className='companySelect' style={{zIndex: this.state.companySelectZIndex}}>
            <select id='companySelect' 
                    value={this.state.selectedCompany} 
                    style={{display: this.state.taken ? 'block' : 'none'}} 
                    onChange={(e) => this.updateSelectedCompany(e.target.value)}>
              <option value=''>Select a company</option>
              {this.state.companyStatus.map((company, i) =>{
                if(company.active === false) {
                  return <option key={i} value={company.color}>{company.name} ({company.color})</option>
                }
              })}
              {/*<option value="Blue">Facecrook (Blue)</option>
              <option value="Red">Union Atlantic Railroad (Red)</option>
              <option value='Orange'>Crump Tower Inc. (Orange)</option>
              <option value='Yellow'>Booze Cruise Inc. (Yellow)</option>
              <option value='Purple'>Chevwrong Oil (Purple)</option>
              <option value='Green'>Hamilton Hotels (Green)</option>
              <option value='Teal'>Outel (Teal)</option>*/}
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
            <h5 className='gameTitle'>!HIGH TIDE!</h5>

            <section className="gameGridInner">
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(0, 0)} className={'gameColumn' + this.state.board[0][0][0].color}>A1</div>
                  <div onClick={ () => this.placeTile(0, 1)} className={'gameColumn' + this.state.board[0][1][0].color}>A2</div>
                  <div onClick={ () => this.placeTile(0, 2)} className={'gameColumn' + this.state.board[0][2][0].color}>A3</div>
                  <div onClick={ () => this.placeTile(0, 3)} className={'gameColumn' + this.state.board[0][3][0].color}>A4</div>
                  <div onClick={ () => this.placeTile(0, 4)} className={'gameColumn' + this.state.board[0][4][0].color}>A5</div>
                  <div onClick={ () => this.placeTile(0, 5)} className={'gameColumn' + this.state.board[0][5][0].color}>A6</div>
                  <div onClick={ () => this.placeTile(0, 6)} className={'gameColumn' + this.state.board[0][6][0].color}>A7</div>
                  <div onClick={ () => this.placeTile(0, 7)} className={'gameColumn' + this.state.board[0][7][0].color}>A8</div>
                  <div onClick={ () => this.placeTile(0, 8)} className={'gameColumn' + this.state.board[0][8][0].color}>A9</div>
                  <div onClick={ () => this.placeTile(0, 9)} className={'gameColumn' + this.state.board[0][9][0].color}>A10</div>
                  <div onClick={ () => this.placeTile(0, 10)} className={'gameColumn' + this.state.board[0][10][0].color}>A11</div>
                  <div onClick={ () => this.placeTile(0, 11)} className={'gameColumn' + this.state.board[0][11][0].color}>A12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(1, 0)} className={'gameColumn' + this.state.board[1][0][0].color}>B1</div>
                  <div onClick={ () => this.placeTile(1, 1)} className={'gameColumn' + this.state.board[1][1][0].color}>B2</div>
                  <div onClick={ () => this.placeTile(1, 2)} className={'gameColumn' + this.state.board[1][2][0].color}>B3</div>
                  <div onClick={ () => this.placeTile(1, 3)} className={'gameColumn' + this.state.board[1][3][0].color}>B4</div>
                  <div onClick={ () => this.placeTile(1, 4)} className={'gameColumn' + this.state.board[1][4][0].color}>B5</div>
                  <div onClick={ () => this.placeTile(1, 5)} className={'gameColumn' + this.state.board[1][5][0].color}>B6</div>
                  <div onClick={ () => this.placeTile(1, 6)} className={'gameColumn' + this.state.board[1][6][0].color}>B7</div>
                  <div onClick={ () => this.placeTile(1, 7)} className={'gameColumn' + this.state.board[1][7][0].color}>B8</div>
                  <div onClick={ () => this.placeTile(1, 8)} className={'gameColumn' + this.state.board[1][8][0].color}>B9</div>
                  <div onClick={ () => this.placeTile(1, 9)} className={'gameColumn' + this.state.board[1][9][0].color}>B10</div>
                  <div onClick={ () => this.placeTile(1, 10)} className={'gameColumn' + this.state.board[1][10][0].color}>B11</div>
                  <div onClick={ () => this.placeTile(1, 11)} className={'gameColumn' + this.state.board[1][11][0].color}>B12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(2, 0)} className={'gameColumn' + this.state.board[2][0][0].color}>C1</div>
                  <div onClick={ () => this.placeTile(2, 1)} className={'gameColumn' + this.state.board[2][1][0].color}>C2</div>
                  <div onClick={ () => this.placeTile(2, 2)} className={'gameColumn' + this.state.board[2][2][0].color}>C3</div>
                  <div onClick={ () => this.placeTile(2, 3)} className={'gameColumn' + this.state.board[2][3][0].color}>C4</div>
                  <div onClick={ () => this.placeTile(2, 4)} className={'gameColumn' + this.state.board[2][4][0].color}>C5</div>
                  <div onClick={ () => this.placeTile(2, 5)} className={'gameColumn' + this.state.board[2][5][0].color}>C6</div>
                  <div onClick={ () => this.placeTile(2, 6)} className={'gameColumn' + this.state.board[2][6][0].color}>C7</div>
                  <div onClick={ () => this.placeTile(2, 7)} className={'gameColumn' + this.state.board[2][7][0].color}>C8</div>
                  <div onClick={ () => this.placeTile(2, 8)} className={'gameColumn' + this.state.board[2][8][0].color}>C9</div>
                  <div onClick={ () => this.placeTile(2, 9)} className={'gameColumn' + this.state.board[2][9][0].color}>C10</div>
                  <div onClick={ () => this.placeTile(2, 10)} className={'gameColumn' + this.state.board[2][10][0].color}>C11</div>
                  <div onClick={ () => this.placeTile(2, 11)} className={'gameColumn' + this.state.board[2][11][0].color}>C12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(3, 0)} className={'gameColumn' + this.state.board[3][0][0].color}>D1</div>
                  <div onClick={ () => this.placeTile(3, 1)} className={'gameColumn' + this.state.board[3][1][0].color}>D2</div>
                  <div onClick={ () => this.placeTile(3, 2)} className={'gameColumn' + this.state.board[3][2][0].color}>D3</div>
                  <div onClick={ () => this.placeTile(3, 3)} className={'gameColumn' + this.state.board[3][3][0].color}>D4</div>
                  <div onClick={ () => this.placeTile(3, 4)} className={'gameColumn' + this.state.board[3][4][0].color}>D5</div>
                  <div onClick={ () => this.placeTile(3, 5)} className={'gameColumn' + this.state.board[3][5][0].color}>D6</div>
                  <div onClick={ () => this.placeTile(3, 6)} className={'gameColumn' + this.state.board[3][6][0].color}>D7</div>
                  <div onClick={ () => this.placeTile(3, 7)} className={'gameColumn' + this.state.board[3][7][0].color}>D8</div>
                  <div onClick={ () => this.placeTile(3, 8)} className={'gameColumn' + this.state.board[3][8][0].color}>D9</div>
                  <div onClick={ () => this.placeTile(3, 9)} className={'gameColumn' + this.state.board[3][9][0].color}>D10</div>
                  <div onClick={ () => this.placeTile(3, 10)} className={'gameColumn' + this.state.board[3][10][0].color}>D11</div>
                  <div onClick={ () => this.placeTile(3, 11)} className={'gameColumn' + this.state.board[3][11][0].color}>D12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(4, 0)} className={'gameColumn' + this.state.board[4][0][0].color}>E1</div>
                  <div onClick={ () => this.placeTile(4, 1)} className={'gameColumn' + this.state.board[4][1][0].color}>E2</div>
                  <div onClick={ () => this.placeTile(4, 2)} className={'gameColumn' + this.state.board[4][2][0].color}>E3</div>
                  <div onClick={ () => this.placeTile(4, 3)} className={'gameColumn' + this.state.board[4][3][0].color}>E4</div>
                  <div onClick={ () => this.placeTile(4, 4)} className={'gameColumn' + this.state.board[4][4][0].color}>E5</div>
                  <div onClick={ () => this.placeTile(4, 5)} className={'gameColumn' + this.state.board[4][5][0].color}>E6</div>
                  <div onClick={ () => this.placeTile(4, 6)} className={'gameColumn' + this.state.board[4][6][0].color}>E7</div>
                  <div onClick={ () => this.placeTile(4, 7)} className={'gameColumn' + this.state.board[4][7][0].color}>E8</div>
                  <div onClick={ () => this.placeTile(4, 8)} className={'gameColumn' + this.state.board[4][8][0].color}>E9</div>
                  <div onClick={ () => this.placeTile(4, 9)} className={'gameColumn' + this.state.board[4][9][0].color}>E10</div>
                  <div onClick={ () => this.placeTile(4, 10)} className={'gameColumn' + this.state.board[4][10][0].color}>E11</div>
                  <div onClick={ () => this.placeTile(4, 11)} className={'gameColumn' + this.state.board[4][11][0].color}>E12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(5, 0)} className={'gameColumn' + this.state.board[5][0][0].color}>F1</div>
                  <div onClick={ () => this.placeTile(5, 1)} className={'gameColumn' + this.state.board[5][1][0].color}>F2</div>
                  <div onClick={ () => this.placeTile(5, 2)} className={'gameColumn' + this.state.board[5][2][0].color}>F3</div>
                  <div onClick={ () => this.placeTile(5, 3)} className={'gameColumn' + this.state.board[5][3][0].color}>F4</div>
                  <div onClick={ () => this.placeTile(5, 4)} className={'gameColumn' + this.state.board[5][4][0].color}>F5</div>
                  <div onClick={ () => this.placeTile(5, 5)} className={'gameColumn' + this.state.board[5][5][0].color}>F6</div>
                  <div onClick={ () => this.placeTile(5, 6)} className={'gameColumn' + this.state.board[5][6][0].color}>F7</div>
                  <div onClick={ () => this.placeTile(5, 7)} className={'gameColumn' + this.state.board[5][7][0].color}>F8</div>
                  <div onClick={ () => this.placeTile(5, 8)} className={'gameColumn' + this.state.board[5][8][0].color}>F9</div>
                  <div onClick={ () => this.placeTile(5, 9)} className={'gameColumn' + this.state.board[5][9][0].color}>F10</div>
                  <div onClick={ () => this.placeTile(5, 10)} className={'gameColumn' + this.state.board[5][10][0].color}>F11</div>
                  <div onClick={ () => this.placeTile(5, 11)} className={'gameColumn' + this.state.board[5][11][0].color}>F12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(6, 0)} className={'gameColumn' + this.state.board[6][0][0].color}>G1</div>
                  <div onClick={ () => this.placeTile(6, 1)} className={'gameColumn' + this.state.board[6][1][0].color}>G2</div>
                  <div onClick={ () => this.placeTile(6, 2)} className={'gameColumn' + this.state.board[6][2][0].color}>G3</div>
                  <div onClick={ () => this.placeTile(6, 3)} className={'gameColumn' + this.state.board[6][3][0].color}>G4</div>
                  <div onClick={ () => this.placeTile(6, 4)} className={'gameColumn' + this.state.board[6][4][0].color}>G5</div>
                  <div onClick={ () => this.placeTile(6, 5)} className={'gameColumn' + this.state.board[6][5][0].color}>G6</div>
                  <div onClick={ () => this.placeTile(6, 6)} className={'gameColumn' + this.state.board[6][6][0].color}>G7</div>
                  <div onClick={ () => this.placeTile(6, 7)} className={'gameColumn' + this.state.board[6][7][0].color}>G8</div>
                  <div onClick={ () => this.placeTile(6, 8)} className={'gameColumn' + this.state.board[6][8][0].color}>G9</div>
                  <div onClick={ () => this.placeTile(6, 9)} className={'gameColumn' + this.state.board[6][9][0].color}>G10</div>
                  <div onClick={ () => this.placeTile(6, 10)} className={'gameColumn' + this.state.board[6][10][0].color}>G11</div>
                  <div onClick={ () => this.placeTile(6, 11)} className={'gameColumn' + this.state.board[6][11][0].color}>G12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(7, 0)} className={'gameColumn' + this.state.board[7][0][0].color}>H1</div>
                  <div onClick={ () => this.placeTile(7, 1)} className={'gameColumn' + this.state.board[7][1][0].color}>H2</div>
                  <div onClick={ () => this.placeTile(7, 2)} className={'gameColumn' + this.state.board[7][2][0].color}>H3</div>
                  <div onClick={ () => this.placeTile(7, 3)} className={'gameColumn' + this.state.board[7][3][0].color}>H4</div>
                  <div onClick={ () => this.placeTile(7, 4)} className={'gameColumn' + this.state.board[7][4][0].color}>H5</div>
                  <div onClick={ () => this.placeTile(7, 5)} className={'gameColumn' + this.state.board[7][5][0].color}>H6</div>
                  <div onClick={ () => this.placeTile(7, 6)} className={'gameColumn' + this.state.board[7][6][0].color}>H7</div>
                  <div onClick={ () => this.placeTile(7, 7)} className={'gameColumn' + this.state.board[7][7][0].color}>H8</div>
                  <div onClick={ () => this.placeTile(7, 8)} className={'gameColumn' + this.state.board[7][8][0].color}>H9</div>
                  <div onClick={ () => this.placeTile(7, 9)} className={'gameColumn' + this.state.board[7][9][0].color}>H10</div>
                  <div onClick={ () => this.placeTile(7, 10)} className={'gameColumn' + this.state.board[7][10][0].color}>H11</div>
                  <div onClick={ () => this.placeTile(7, 11)} className={'gameColumn' + this.state.board[7][11][0].color}>H12</div>
              </div>
              <div className="gameRow">
                  <div onClick={ () => this.placeTile(8, 0)} className={'gameColumn' + this.state.board[8][0][0].color}>I1</div>
                  <div onClick={ () => this.placeTile(8, 1)} className={'gameColumn' + this.state.board[8][1][0].color}>I2</div>
                  <div onClick={ () => this.placeTile(8, 2)} className={'gameColumn' + this.state.board[8][2][0].color}>I3</div>
                  <div onClick={ () => this.placeTile(8, 3)} className={'gameColumn' + this.state.board[8][3][0].color}>I4</div>
                  <div onClick={ () => this.placeTile(8, 4)} className={'gameColumn' + this.state.board[8][4][0].color}>I5</div>
                  <div onClick={ () => this.placeTile(8, 5)} className={'gameColumn' + this.state.board[8][5][0].color}>I6</div>
                  <div onClick={ () => this.placeTile(8, 6)} className={'gameColumn' + this.state.board[8][6][0].color}>I7</div>
                  <div onClick={ () => this.placeTile(8, 7)} className={'gameColumn' + this.state.board[8][7][0].color}>I8</div>
                  <div onClick={ () => this.placeTile(8, 8)} className={'gameColumn' + this.state.board[8][8][0].color}>I9</div>
                  <div onClick={ () => this.placeTile(8, 9)} className={'gameColumn' + this.state.board[8][9][0].color}>I10</div>
                  <div onClick={ () => this.placeTile(8, 10)} className={'gameColumn' + this.state.board[8][10][0].color}>I11</div>
                  <div onClick={ () => this.placeTile(8, 11)} className={'gameColumn' + this.state.board[8][11][0].color}>I12</div>
              </div>
            </section>
        </section>
      </section>

      // </div>
    );
  }
}


export default Home;