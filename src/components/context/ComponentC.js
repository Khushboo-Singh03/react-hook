

import React, { useContext } from 'react';
import { HobbiesContext, NameContext, SurnameContext } from '../../App';

const ComponentC = () => {

  return (
    <div>
      user Context Name: {useContext(NameContext)}<br/>
      User Context Surname: {useContext(SurnameContext)}<br/>
      User Context Hobbies: {useContext(HobbiesContext)}<br/>
      {/* <NameContext.Consumer>
        {
          name => {
            return (<SurnameContext.Consumer>
              {
              surname => {
                return (<HobbiesContext.Consumer>
                  {
                  hobby => {
                    return <div>
                      User Context Name:{name}<br />
                      User Context Name:{surname}<br />
                      User Context Name:{hobby}<br />
                    </div>
                  }}
                </HobbiesContext.Consumer>)
              }}
            </SurnameContext.Consumer>)
          }
        }
      </NameContext.Consumer> */}
    </div>
  )
}

export default ComponentC;
