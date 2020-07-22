import React, { lazy, Suspense } from "react";

// const HelloLink = lazy(() => import("widgets/HelloLink1"));
import HelloLink1 from "dlaWidgets/HelloLink1";

// import HelloButton from "dlaWidgets/HelloButton";
const HelloButton1 = lazy(() => import("dlaWidgets/HelloButton1"));

// const DlaHeader1 = lazy(() => import("dlaWidgets/Examples").then(module => ({ default: module.DlaHeader1 })));
import { DlaHeader1 } from "dlaWidgets/Examples";

import { Hello2 as Hello2Def } from "../../../dsp/widgets/lib/Examples";
const Hello2 = lazy<typeof Hello2Def>(() => import("dlaWidgets/Examples").then(module => ({ default: module.Hello2 })));

import { Hello3 as Hello3Def } from "../../../dsp/widgets/lib/Examples";
const Hello3 = lazy<typeof Hello3Def>(() => import("dlaWidgets/Examples").then(module => ({ default: module.Hello3 })));

const ReduxAppExample1 = lazy(() => import("dlaUtils/ReduxAppExample1"));

const App = () => (
  <>
    <DlaHeader1 />
    <Suspense fallback="Loading...">
      <Hello3 />
      <ReduxAppExample1 />
      <HelloButton1 /> 
      <Hello2 name="Eric" />
    </Suspense>
    <HelloLink1 />
  </>
);

export default App;
