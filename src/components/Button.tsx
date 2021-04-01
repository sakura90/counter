import React from "react";
import { connect } from "react-redux";
import { add } from "../actions";
import { bindActionCreators } from "redux";

function Button({ actions }: any) {
  return (
    <>
      <button onClick={(e) => actions.add()}>+</button>
    </>
  );
}

const mapStateToProps = (state: any) => {};

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators({ add }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
