import React from "react";
import PropTypes from "prop-types";
import Badge from "../badge";

const ImpactsList = (props) => {
  const { impacts } = props;
  return (
    <>
      <p className="flex flex-wrap">
        Реализовал в проекте:{" "}
        {impacts.map(({ id, name }) => (
          <Badge key={id} className="ml-1 mr-1 mb-2">
            {name}
          </Badge>
        ))}
      </p>
    </>
  );
};
ImpactsList.propTypes = {
  impacts: PropTypes.array
};
export default ImpactsList;
