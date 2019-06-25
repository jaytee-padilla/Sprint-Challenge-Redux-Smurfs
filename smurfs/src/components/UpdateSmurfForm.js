import React from 'react';

const UpdateSmurfForm = props => {
  return (
    <div className="updateForm">
    <form>
      <input placeholder={props.smurf.name} />
      <input placeholder={props.smurf.height} />
      <input placeholder={props.smurf.age} />
    </form>
    </div>
  );
};

export default UpdateSmurfForm;