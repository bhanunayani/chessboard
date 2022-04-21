import Table from 'react-bootstrap/Table';
import './App.css';

function App() {
  
  function handleSelect(e) {
    
  function reset() {
      var blackElements = document.getElementsByClassName('black');
      for(let i = 0; i < blackElements.length; i++){
        blackElements[i].style.backgroundColor = "black";
      }

      var WhiteElements = document.getElementsByClassName('white');
      for(let i = 0; i < WhiteElements.length; i++){
        WhiteElements[i].style.backgroundColor = "white";
      }
    }
    reset();

    var x = e.target.getAttribute("row");
    var y = e.target.getAttribute("col");

    x = parseInt(x);
    y = parseInt(y);

    var Id0 = (x).toString() + (y).toString();
    document.getElementById(Id0).style.background = "red";

    if (x + 2 < 8 && y + 1 < 8) {
        var Id1 = (x + 2).toString() + (y + 1).toString();
        document.getElementById(Id1).style.background = "#90EE90";
    }

    if (x + 1 < 8 && y + 2 < 8) {
        var Id2 = (x + 1).toString() + (y + 2).toString();
        document.getElementById(Id2).style.background = "#90EE90";
    }

    if (x - 1 >= 0 && y + 2 >= 0 && x - 1 < 8 && y + 2 < 8) {
        console.log("yes");
        var Id3 = (x - 1).toString() + (y + 2).toString();
        document.getElementById(Id3).style.background = "#90EE90";
    }

    if (x - 2 >= 0 && y + 1 >= 0 && x - 2 < 8 && y + 1 < 8) {
        var Id4 = (x - 2).toString() + (y + 1).toString();
        document.getElementById(Id4).style.background = "#90EE90";
    }

    if (x - 2 >= 0 && y - 1 >= 0 ) {
        var Id5 = (x - 2).toString() + (y - 1).toString();
        document.getElementById(Id5).style.background = "#90EE90";
    }

    if (x - 1 >= 0 && y - 2 >= 0) {
        var Id6 = (x - 1).toString() + (y - 2).toString();
        document.getElementById(Id6).style.background = "#90EE90";
    }

    if (x + 1 >= 0 && y - 2 >= 0 && x + 1 < 8 && y - 2 < 8) {
        var Id7 = (x + 1).toString() + (y - 2).toString();
        document.getElementById(Id7).style.background = "#90EE90";
    }

    if (x + 2 >= 0 && y - 1 >= 0 && x + 2 < 8 && y - 1 < 8) {
        var Id8 = (x + 2).toString() + (y - 1).toString();
        document.getElementById(Id8).style.background = "#90EE90";
    }
}
  return (
    <div className="App">
      <div className='table-container'>
      <Table bordered>
        <tbody>
    <tr>
      <td onClick={handleSelect} row="0" col="0" className='white' id='00'/>
      <td onClick={handleSelect} row="0" col="1" className='black' id='01'/>
      <td onClick={handleSelect} row="0" col="2" className='white' id='02'/>
      <td onClick={handleSelect} row="0" col="3" className='black' id='03'/>
      <td onClick={handleSelect} row="0" col="4" className='white' id='04'/>
      <td onClick={handleSelect} row="0" col="5" className='black' id='05'/>
      <td onClick={handleSelect} row="0" col="6" className='white' id='06'/>
      <td onClick={handleSelect} row="0" col="7" className='black' id='07'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="1" col="0" className='black' id='10'/>
      <td onClick={handleSelect} row="1" col="1" className='white' id='11'/>
      <td onClick={handleSelect} row="1" col="2" className='black' id='12'/>
      <td onClick={handleSelect} row="1" col="3" className='white' id='13'/>
      <td onClick={handleSelect} row="1" col="4" className='black' id='14'/>
      <td onClick={handleSelect} row="1" col="5" className='white' id='15'/>
      <td onClick={handleSelect} row="1" col="6" className='black' id='16'/>
      <td onClick={handleSelect} row="1" col="7" className='white' id='17'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="2" col="0" className='white' id='20'/>
      <td onClick={handleSelect} row="2" col="1" className='black' id='21'/>
      <td onClick={handleSelect} row="2" col="2" className='white' id='22'/>
      <td onClick={handleSelect} row="2" col="3" className='black' id='23'/>
      <td onClick={handleSelect} row="2" col="4" className='white' id='24'/>
      <td onClick={handleSelect} row="2" col="5" className='black' id='25'/>
      <td onClick={handleSelect} row="2" col="6" className='white' id='26'/>
      <td onClick={handleSelect} row="2" col="7" className='black' id='27'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="3" col="0" className='black' id='30'/>
      <td onClick={handleSelect} row="3" col="1" className='white' id='31'/>
      <td onClick={handleSelect} row="3" col="2" className='black' id='32'/>
      <td onClick={handleSelect} row="3" col="3" className='white' id='33'/>
      <td onClick={handleSelect} row="3" col="4" className='black' id='34'/>
      <td onClick={handleSelect} row="3" col="5" className='white' id='35'/>
      <td onClick={handleSelect} row="3" col="6" className='black' id='36'/>
      <td onClick={handleSelect} row="3" col="7" className='white' id='37'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="4" col="0" className='white' id='40'/>
      <td onClick={handleSelect} row="4" col="1" className='black' id='41'/>
      <td onClick={handleSelect} row="4" col="2" className='white' id='42'/>
      <td onClick={handleSelect} row="4" col="3" className='black' id='43'/>
      <td onClick={handleSelect} row="4" col="4" className='white' id='44'/>
      <td onClick={handleSelect} row="4" col="5" className='black' id='45'/>
      <td onClick={handleSelect} row="4" col="6" className='white' id='46'/>
      <td onClick={handleSelect} row="4" col="7" className='black' id='47'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="5" col="0" className='black' id='50'/>
      <td onClick={handleSelect} row="5" col="1" className='white' id='51'/>
      <td onClick={handleSelect} row="5" col="2" className='black' id='52'/>
      <td onClick={handleSelect} row="5" col="3" className='white' id='53'/>
      <td onClick={handleSelect} row="5" col="4" className='black' id='54'/>
      <td onClick={handleSelect} row="5" col="5" className='white' id='55'/>
      <td onClick={handleSelect} row="5" col="6" className='black' id='56'/>
      <td onClick={handleSelect} row="5" col="7" className='white' id='57'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="6" col="0" className='white' id='60'/>
      <td onClick={handleSelect} row="6" col="1" className='black' id='61'/>
      <td onClick={handleSelect} row="6" col="2" className='white' id='62'/>
      <td onClick={handleSelect} row="6" col="3" className='black' id='63'/>
      <td onClick={handleSelect} row="6" col="4" className='white' id='64'/>
      <td onClick={handleSelect} row="6" col="5" className='black' id='65'/>
      <td onClick={handleSelect} row="6" col="6" className='white' id='66'/>
      <td onClick={handleSelect} row="6" col="7" className='black' id='67'/>
    </tr>
    <tr>
      <td onClick={handleSelect} row="7" col="0" className='black' id='70'/>
      <td onClick={handleSelect} row="7" col="1" className='white' id='71'/>
      <td onClick={handleSelect} row="7" col="2" className='black' id='72'/>
      <td onClick={handleSelect} row="7" col="3" className='white' id='73'/>
      <td onClick={handleSelect} row="7" col="4" className='black' id='74'/>
      <td onClick={handleSelect} row="7" col="5" className='white' id='75'/>
      <td onClick={handleSelect} row="7" col="6" className='black' id='76'/>
      <td onClick={handleSelect} row="7" col="7" className='white' id='77'/>
    </tr>
  </tbody>
</Table>
    </div>
    </div>
  );
}

export default App;
