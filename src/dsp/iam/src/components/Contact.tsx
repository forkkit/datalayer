import React, { Suspense } from "react";

// import { DlaContact } from "dlaWidgets/Widgets";
const DlaContact = React.lazy(() => import("dlaWidgets/Widgets").then(module => ({ default: (module as any).DlaContact })));

const About = () => (
  <>
    <Suspense fallback="Loading...">
      <DlaContact />
    </Suspense>
  </>
);

export default About;
