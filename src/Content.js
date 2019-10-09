import React from "react";
import Button from "terra-button";
import { DisclosureManagerContext } from "terra-disclosure-manager";
import Modal from "./Modal";

/**
 * Just render a button that delegates to the diclosureManager to open our modal
 */
export default function Content() {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  const openModal = React.useCallback(() => {
    disclosureManager.disclose({
      preferredType: "modal",
      size: "large",
      content: {
        key: "modal-component",
        component: <Modal />
      }
    });
  }, [disclosureManager]);

  return <Button text="Open modal" onClick={openModal} />;
}
