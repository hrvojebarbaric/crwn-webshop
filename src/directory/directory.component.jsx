import React from "react";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectDirectorySection} from "../redux/directory/direcotry.seletors"

import MenuItem from "../components/menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({sections}) =>  (
  <div className="directory-menu">
      {
          sections.map(({id, ...otherSectopnProps}) => (
              <MenuItem key={id} {...otherSectopnProps} ></MenuItem>
          ))
      }
  </div>
)
  
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
