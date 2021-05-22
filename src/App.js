import SplitPane from 'react-split-pane';
import './App.css';

const styles = {
  background: '#48bf92',
  width: '4px',
  cursor: 'col-resize',
  height: '100%',
};

function App() {
  return (
    <div className="App">
      <SplitPane
        className="container"
        split="vertical"
        minSize={200}
        maxSize={1000}
        defaultSize={300}
        resizerStyle={styles}
      >
        <div className="container__left">
          <div className="frame-wrapper__video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/vp_h649sZ9A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="container__right">
          Right
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
