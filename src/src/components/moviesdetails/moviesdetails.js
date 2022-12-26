import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetMovieDetails } from "../../core/redux/actions/moviesAction";
import { useNavigate, useParams } from "react-router-dom";
import Carddetails from "../../layout/movicarddetails/carddetails"

const MoviesDetails = (props) => {
  let id = useParams();

  useEffect(() => {
    props.GetMovieDetails(id.id);
  }, []);

  const { details } = props.details;
  console.log(details);
  let navigate = useNavigate();

  return (
    <div>
      <Carddetails movie={details}/>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    details: state.details,
  };
}

export default connect(mapStateToProps, { GetMovieDetails })(MoviesDetails);
