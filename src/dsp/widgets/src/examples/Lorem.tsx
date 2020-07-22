import React from "react";

interface Props {
  count: number
}

Lorem.defaultProps = {
  count: 3
}

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \
deserunt mollit anim id est laborum."

export default function Lorem(props) {
  const a = new Array(props.count)
  for(var i = 0; i < a.length; i++){
    a[i] = i
  }
  const lorems =  a.map(function (n) {
    return <p key="{n}">{lorem}</p>
  })
  return <React.Fragment>{lorems}</React.Fragment>
}
