import React from "react";
import { connect } from "react-redux";

function Counter(state: any) {
  return (
    <>
      <p>{state.counter}</p>
    </>
  );
}

const mapStateToProps = (state: any) => state;

export default connect(mapStateToProps)(Counter);
