import React from 'react';
import {Menu,Button} from 'grommet';
import {Home} from "grommet-icons";
const ViewProfile=()=>{

return(
      <div className="container">
      <Button icon={<Home />} hoverIndicator />
       <Menu label="Profile" items={[{ label: 'logout'},{label:'profile'}]} />
      </div>
)
};
export default ViewProfile;
