/**
 * This component demonstrates how we can disable sidebar for some subroutes.
 *
 * For example this component disables sidebar for routes "/micro-frontends-react-route/no-sidebar/*".
 */
import React, { useLayoutEffect } from "react";
import {
  disableSidebarForRoute,
  enableSidebarForRoute,
} from "@topcoder/mfe-header";

const COMPONENT_ROUTE = "/micro-frontends-react-route/no-sidebar/*";

const NoSidebarDemo = () => {
  // use "useLayoutEffect" to remove the sidebar as early as possible
  // without waiting the component to be rendered
  useLayoutEffect(() => {
    disableSidebarForRoute(COMPONENT_ROUTE);
  }, []);

  return (
    <>
      <h2>Sidebar</h2>
      <div>Enable/disable sidebar for routes that match:</div>
      <pre>{COMPONENT_ROUTE}</pre>
      <div>
        <button onClick={() => enableSidebarForRoute(COMPONENT_ROUTE)}>
          Enable
        </button>
        <button onClick={() => disableSidebarForRoute(COMPONENT_ROUTE)}>
          Disable
        </button>
      </div>
    </>
  );
};

export default NoSidebarDemo;
