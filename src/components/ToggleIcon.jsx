import React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';




function ToggleIcon({ active, handleChangeActive }) {
  return (
    <>
      <div>
        {active ?
          (<CloseIcon
            onClick={() => handleChangeActive()}
          />)
          :
          (<DensityMediumIcon
            onClick={() => handleChangeActive()}
          />)
        }
      </div>
    </>
  );
}

export default ToggleIcon;

















