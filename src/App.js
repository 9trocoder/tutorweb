import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          enable-background="new 0 0 50 50;"
          xmlSpace="preserve"
        >
          <rect x="0" y="0" width="4" height="20" fill="#333">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="1; .2; 1"
              begin="0s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="7" y="0" width="4" height="20" fill="#333">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="1; .2; 1"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="14" y="0" width="4" height="20" fill="#333">
            <animate
              attributeName="opacity"
              attributeType="XML"
              values="1; .2; 1"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
        <h1 style={{display: "none"}}>{}</h1>
        <p>Coming soon...</p>
      </header>
    </div>
  );
}

export default App;
