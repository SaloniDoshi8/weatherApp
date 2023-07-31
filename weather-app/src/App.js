import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous" />
       <title>Weather</title>
      </header>
      <body>
        <div className="outerbox">
          <div className="container">
            <div className="searchbar">
            <div className="input-group">
                <input className="form-control border-end-0 border rounded-pill" type="search" value="search" id="example-search-input" />
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button">
                        <i className="fa fa-search"></i>
                        <FontAwesomeIcon icon={["far", "search"]} />
                        <FontAwesomeIcon icon={['fab', 'google']} />

                    </button>
                </span>
            </div>
            </div>
            <div className="inner-container">
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default App;
