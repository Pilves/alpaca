import './App.css';
import React, { useState } from 'react';

// Function to import all images within a given context
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import images from the alpaca directory
const alpacaImages = importAll(require.context('./alpaca', true, /\.png$/));

// App component
function App() {
  // State to keep track of current feature indexes
  const [featureIndexes, setFeatureIndexes] = useState({
    ears: 0,
    accessories: 0,
    backgrounds: 0,
    eyes: 0,
    hair: 0,
    leg: 0,
    mouth: 0,
    neck: 0,
    nose: 0
  });

  const [showNeckSelection, setShowNeckSelection] = useState(false);
  const [showAccSelection, setShowAccSelection] = useState(false);
  const [showBgSelection, setShowBgSelection] = useState(false);
  const [showEarSelection, setShowEarSelection] = useState(false);
  const [showEyesSelection, setShowEyesSelection] = useState(false);
  const [showHairSelection, setShowHairSelection] = useState(false);
  const [showLegSelection, setShowLegSelection] = useState(false);
  const [showMouthSelection, setShowMouthSelection] = useState(false);
  const showFeature = (featureName) => {
    const featureStates = {
      neck: showNeckSelection,
      acc: showAccSelection,
      bg: showBgSelection,
      ears: showEarSelection,
      eyes: showEyesSelection,
      hair: showHairSelection,
      leg: showLegSelection,
      mouth: showMouthSelection,
    };
  
    // Hide all features
    for (const feature in featureStates) {
      featureStates[feature] = false;
    }
  
    // Show the selected feature
    featureStates[featureName] = true;
  
    // Update the state variables
    setShowNeckSelection(featureStates.neck);
    setShowAccSelection(featureStates.acc);
    setShowBgSelection(featureStates.bg);
    setShowEarSelection(featureStates.ears);
    setShowEyesSelection(featureStates.eyes);
    setShowHairSelection(featureStates.hair);
    setShowLegSelection(featureStates.leg);
    setShowMouthSelection(featureStates.mouth);
  };

  // Function to render buttons for selecting ears
  const renderAccSelectionButtons = () => {
    const accOptions = Object.keys(alpacaImages).filter(key => key.startsWith('accessories/'));
    return accOptions.map((option, index) => (
      <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, accessories: index})}>
        {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
      </button>
    ));
  };



  // Function to render buttons for selecting ears
  const renderBgSelectionButtons = () => {
    const bgOptions = Object.keys(alpacaImages).filter(key => key.startsWith('backgrounds/'));
    return bgOptions.map((option, index) => (
      <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, backgrounds: index})}>
        {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
      </button>
    ));
  };


  // Function to render buttons for selecting ears
  const renderEarSelectionButtons = () => {
    const earOptions = Object.keys(alpacaImages).filter(key => key.startsWith('ears/'));
    return earOptions.map((option, index) => (
      <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, ears: index})}>
        {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
      </button>
    ));
  };
    // Function to render buttons for selecting ears
    const renderEyesSelectionButtons = () => {
      const eyesOptions = Object.keys(alpacaImages).filter(key => key.startsWith('eyes/'));
      return eyesOptions.map((option, index) => (
        <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, eyes: index})}>
          {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
        </button>
      ));
    };

  // Function to render buttons for selecting ears
  const renderHairSelectionButtons = () => {
    const hairOptions = Object.keys(alpacaImages).filter(key => key.startsWith('hair/'));
    return hairOptions.map((option, index) => (
      <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, hair: index})}>
        {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
      </button>
    ));
  };

    // Function to render buttons for selecting ears
    const renderLegSelectionButtons = () => {
      const legOptions = Object.keys(alpacaImages).filter(key => key.startsWith('leg/'));
      return legOptions.map((option, index) => (
        <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, leg: index})}>
          {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
        </button>
      ));
    };

  // Function to render buttons for selecting ears
  const renderMouthSelectionButtons = () => {
    const mouthOptions = Object.keys(alpacaImages).filter(key => key.startsWith('mouth/'));
    return mouthOptions.map((option, index) => (
      <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, mouth: index})}>
        {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
      </button>
    ));
  };

    // Function to render buttons for selecting ears
    const renderNeckSelectionButtons = () => {
      const neckOptions = Object.keys(alpacaImages).filter(key => key.startsWith('neck/'));
      return neckOptions.map((option, index) => (
        <button key={option} onClick={() => setFeatureIndexes({...featureIndexes, neck: index})}>
          {option.split('/')[1].split('.')[0]} {/* This will display the file name without the path and extension */}
        </button>
      ));
    };

  // Function to get the image path for a feature based on the current index
  const getFeatureImage = (feature, directory) => {
    const options = Object.keys(alpacaImages).filter(key => key.startsWith(`${directory}/`));
    return alpacaImages[options[featureIndexes[feature]]];
  };

  // Function to generate a random index
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  // Function to create a random alpaca
  const createRandomAlpaca = () => {
    const randomIndexes = {
      ears: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('ears/')).length),
      accessories: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('accessories/')).length),
      backgrounds: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('backgrounds/')).length),
      eyes: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('eyes/')).length),
      hair: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('hair/')).length),
      leg: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('leg/')).length),
      mouth: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('mouth/')).length),
      neck: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('neck/')).length),
      nose: getRandomIndex(Object.keys(alpacaImages).filter(key => key.startsWith('nose.png')).length)
    };
    setFeatureIndexes(randomIndexes);
  };
  const drawAlpacaOnCanvas = () => {
    const canvas = document.getElementById('alpacaCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const drawImage = (imagePath) => {
      return new Promise(resolve => {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve();
        };
      });
    };

    const features = ['backgrounds', 'neck', 'ears', 'hair', 'leg', 'eyes','accessories', 'nose','mouth'];
    const featurePromises = features.map(feature => {
      const imagePath = feature === 'nose' ? alpacaImages['nose.png'] : getFeatureImage(feature, feature);
      return drawImage(imagePath);
    });

    return Promise.all(featurePromises); // Ensures all images are drawn before proceeding
  };

  const downloadAlpacaImage = async () => {
    await drawAlpacaOnCanvas(); // Ensure the alpaca is drawn on the canvas

    const canvas = document.getElementById('alpacaCanvas');
    const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement('a');
    link.download = 'my-alpaca.png';
    link.href = image;
    link.click();
  };


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className='Heading'>Alpaca Generator</h1>
          <div className='image-container'>
            <img className="bg" src={getFeatureImage('backgrounds', 'backgrounds')} alt="Background" />
            <img className="acce" src={getFeatureImage('accessories', 'accessories')} alt="Accessory" />
            <img className="ears" src={getFeatureImage('ears', 'ears')} alt="Ears" />
            <img className="eyes" src={getFeatureImage('eyes', 'eyes')} alt="Eyes" />
            <img className="hair" src={getFeatureImage('hair', 'hair')} alt="Hair" />
            <img className="leg" src={getFeatureImage('leg', 'leg')} alt="Leg" />
            <img className="mouth" src={getFeatureImage('mouth', 'mouth')} alt="Mouth" />
            <img className="neck" src={getFeatureImage('neck', 'neck')} alt="Neck" />
            <img className="nose" src={alpacaImages['nose.png']} alt="Nose" />
            <canvas id="alpacaCanvas" width="400" height="400" style={{ display: 'none' }}></canvas>
          </div>

            <div className='main-buttons'>
              <button className="main-button" onClick={downloadAlpacaImage}>Download Alpaca</button>
              <button className="main-button" onClick={createRandomAlpaca}>Create Random Alpaca</button>
            </div> 
                    
            <div className="sidebar">
            <div className="section-header">ACCESSORIZE THE ALPACA</div>
            <div className='button-container'>
              <button onClick={() => showFeature('acc')}>Accessories</button>
              <button onClick={() => showFeature('bg')}>Backgrounds</button>
              <button onClick={() => showFeature('ears')}>Ears</button>
              <button onClick={() => showFeature('eyes')}>Eyes</button>
              <button onClick={() => showFeature('hair')}>Hair</button>
              <button onClick={() => showFeature('leg')}>Leg</button>
              <button onClick={() => showFeature('mouth')}>Mouth</button>
              <button onClick={() => showFeature('neck')}>Neck</button>
            </div>
            <div className="section-header">STYLE</div>
            {showAccSelection && <div className="selection">{renderAccSelectionButtons()}</div>}
            {showBgSelection && <div className="selection">{renderBgSelectionButtons()}</div>}
            {showEarSelection && <div className="selection">{renderEarSelectionButtons()}</div>}
            {showEyesSelection && <div className="selection">{renderEyesSelectionButtons()}</div>}
            {showHairSelection && <div className="selection">{renderHairSelectionButtons()}</div>}
            {showLegSelection && <div className="selection">{renderLegSelectionButtons()}</div>}
            {showMouthSelection && <div className="selection">{renderMouthSelectionButtons()}</div>}
            {showNeckSelection && <div className="selection">{renderNeckSelectionButtons()}</div>}
          </div>
        </div> 
      </header>
    </div>
  );
}

export default App;