import "./App.scss";

// import { connect } from "react-redux";

// import { increaseCounter, decreaseCounter } from "./action/actions";

// import { useSelector, useDispatch } from "react-redux";


import Home from "./components/Home";

function App(props) {
  // const dispatch = useDispatch();

  // const newCount = useSelector((state) => {
  //   return state.counter.count;
  // });

  // const handleInscrease = () => {
  //   dispatch(increaseCounter());
  // };

  // const handleDescrease = () => {
  //   dispatch(decreaseCounter());
  // };

  

  return (
    // <div className="App">
    //   <div>Count: {newCount}</div>

    //   <button onClick={() => handleInscrease()}>Increase Count</button>

    //   <button onClick={() => handleDescrease()}>Decrease Count</button>
    // </div>

    <Home />
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
