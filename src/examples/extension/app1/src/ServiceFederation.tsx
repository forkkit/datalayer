import React from "react";
import { BrowserRouter, Route, Link, Switch, useParams } from "react-router-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const NotFound: React.FC = () => <>Not Found</>
const Loading: React.FC = () => <>Loading Service</>
const Error: React.FC = () => <>Error</>

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

const getServices = () => {
  const { loading, error, data } = useQuery(gql`
    {
      services {
        id
        name
        info
        slug
        manifest {
          id
          name
          url
          scope
          module
        }
      }
    }
  `);
  return { loading, error, data };
};

const getService = (id: number) => {
  const { loading, error, data } = useQuery(gql`
  { 
    service(id: {id}) {
      id
        name
        info
        slug
        manifest {
          id
          name
          url
          scope
          module
        }
    }
  }
  `);
  return { loading, error, data };
};

function loadComponent(scope, module) {
  return async () => {
    const factory = await (window[scope] as any).get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args: any) => {

  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {

    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };

};

const ServiceLoader: React.FC<any> = (props: any) => {

  const { ready, failed } = useDynamicScript({ 
    url: props.service.manifest.url
  });

  if (failed) {
    return <h2>Failed to load dynamic script: {props.service.manifest.url}</h2>;
  }

  if (!ready) {
    return <Loading />
  }

  (window[props.service.manifest.scope] as any).override(
    Object.assign(
      {
        react: () => {
          return Promise.resolve().then(() => {
            return () => require('react');
          });
        },
        'react-dom': () => {
          return Promise.resolve().then(() => {
            return () => require('react-dom');
          });
        },
      },
      // @ts-ignore
      __webpack_require__.O
    )
  );

  const Component = React.lazy(
    loadComponent(props.service.manifest.scope, props.service.manifest.module)
  );

  return <React.Suspense fallback={<Loading/>}>
      <Component />
    </React.Suspense>

}

const Service: React.FC<any> = () => {

  const { serviceSlug } = useParams();

  const { loading, error, data } = getServices();
  if (error) {
    return <Error />
  }
  if (loading) {
    return <Loading />
  }
  const services = data.services;
  const s1 = services[0];
  if (!s1) {
    return <NotFound />
  }

  return <ServiceLoader service={s1} />

}

const ServiceFederation: React.FC<any> = () => {

  return (
    <ApolloProvider client={client as any}>
      <BrowserRouter>
        <header>
          <Link to={"/iam/show"}>Load IAM Component</Link>
        </header>
        <Switch>
          <Route path="/" element={<>Hello</>} exact={true} />
          <Route path="/:serviceSlug/*" component={Service} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default ServiceFederation;
