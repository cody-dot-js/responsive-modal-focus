import React from "react";
import Base from "terra-base";
import { ActiveBreakpointProvider } from "terra-breakpoints";
import ModalManager from "terra-modal-manager";
import Content from "./Content";

/**
 * - Base: required by all terra apps
 * - ActiveBreakpointProvider: used to determine the active breakpoint
 *    needs to be above the ModalManager to get the context in the modals
 * - ModalManager: used to setup modal environment
 */
function App() {
  return (
    <Base locale="en">
      <ActiveBreakpointProvider>
        <ModalManager>
          <Content />
        </ModalManager>
      </ActiveBreakpointProvider>
    </Base>
  );
}

export default App;
