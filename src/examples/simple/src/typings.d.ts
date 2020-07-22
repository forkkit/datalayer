/// <reference types="react" />

declare module "dlaUtils/ReduxAppExample1" ;

declare module "dlaWidgets/W1";

declare module "dlaWidgets/Examples" ;

declare module "dlaWidgets/HelloLink1" {
  const HelloLink1: React.ComponentType;
  export default HelloLink1;
}

declare module "dlaWidgets/HelloButton1" {
  const HelloButton1: React.ComponentType;
  export default HelloButton1;
}

/*
import Hello2 from "./../../widgets/lib/example/Hello2";
import Hello3 from "./../../widgets/lib/example/Hello3";
declare module "dlaWidgets/Examples" {
  export { Hello2 };
  export { Hello3 };
}
declare module "dlaWidgets/Examples" {
  const H: typeof Hello3;
  export default H;
}
*/

declare module '@datalayer/utils/lib/example/ReduxAppExample1';

declare module "dlaUtils/ReduxAppExample1" {
  const ReduxAppExample1: React.ComponentType;
  export default ReduxAppExample1;
}
