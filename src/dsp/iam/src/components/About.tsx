import React, { Suspense } from "react";

const DlaFeatures = React.lazy(() => import("dlaWidgets/Widgets").then(module => ({ default: module.DlaFeatures })));

const About = () => (
  <Suspense fallback="Loading...">
    <DlaFeatures />
  </Suspense>
);

export default About;
