import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { IAllState } from "../../types/storeTypes";
import { fetchGetData } from "../../models/actions/randomItem/actions";

import "./style.css";
import RandomItemContent from "./randomItemContent";
import Spinner from "../spinner";

interface IRootDispatch {
  fetchGetData: () => void
}

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & IAllState & IRootDispatch;

const RandomItem = ({ randomItem, fetchGetData }: Props) => {
  useEffect(() => {
    fetchGetData()
  }, [fetchGetData]);

  return (
    <div className="starwars__random_item">
      {!randomItem.isLoad ? <Spinner /> : <RandomItemContent />}
    </div>
  );
};

const mapStateToProps = (state: IAllState) => ({
  randomItem: state.randomItem
});

const mapDispatchToProps: IRootDispatch = {
  fetchGetData
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(RandomItem);
