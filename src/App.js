import './App.css';
import PurpleContainer from './components/PurpleContainer';
import DetailsContainer from './components/DetailsContainer';
import ButtonContainer from './components/ButtonContainer';
import Svg1 from './assets/images/icon-reaction.svg'
import Svg2 from './assets/images/icon-memory.svg'
import Svg3 from './assets/images/icon-verbal.svg'
import Svg4 from './assets/images/icon-visual.svg'


function App() {

  const resultData = {
    resultText: "Your Result",
    resultPercent: 76,
    totalPercent: "of 100",
    degree: "Great",
    text: "You scored higher than 65% of the people who have taken these tests."
  }

  const summaryData = {
    summary: [
      {
        "category": "Reaction",
        "score": 80,
        "icon": Svg1
      },
      {
        "category": "Memory",
        "score": 92,
        "icon": Svg2
      },
      {
        "category": "Verbal",
        "score": 61,
        "icon": Svg3
      },
      {
        "category": "Visual",
        "score": 72,
        "icon": Svg4
      }
    ]
  }

  const details = summaryData.summary

  return (
    <div className="App">
      <div className="container">

        <div className="colored-container">
          <PurpleContainer
            resultData={resultData}
          />
        </div>

        <div className="white-container">
          <h3>Summary</h3>
          <div className="details-container">
            {details.map((detail) => {
              return <DetailsContainer
                category={detail.category}
                score={detail.score}
                icon={detail.icon}
                key={detail.category} />
            })}
          </div>
          <ButtonContainer />
        </div>


      </div>
    </div>
  );
}

export default App;
