import React from "react";
import { ActiveBreakpointContext } from "terra-breakpoints";
import { DisclosureManagerContext } from "terra-disclosure-manager";
import Button from "terra-button";
import ActionHeader from "terra-action-header";

/**
 * Use the activeBreakpoint to determine which content (mobile vs desktop) to
 * render.
 */
export default function Modal() {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const disclosureManager = React.useContext(DisclosureManagerContext);
  const titleRef = React.useRef(null);

  /**
   * On mount, focus on the title
   */
  React.useEffect(() => {
    const { current: title } = titleRef;
    title.focus();
  }, []);

  /**
   * Dismiss the modal when clicking on the ActionHeader close button
   */
  const onClose = React.useCallback(() => {
    disclosureManager.dismiss();
  }, [disclosureManager]);

  const desktopContent = (
    <div>
      <span tabIndex="0" ref={titleRef}>
        Desktop Title Here
      </span>
      <p>Desktop Content Here</p>
      <Button text="Focusable Button" />
    </div>
  );

  const mobileContent = (
    <div>
      <span tabIndex="0" ref={titleRef}>
        Mobile Title Here
      </span>
      <p>Mobile Content Here</p>
      <Button text="Focusable Button" />
    </div>
  );

  /**
   * Computed, memoized value using the activeBreakpoint to determine which
   * breakpoint content to render
   */
  const content = React.useMemo(() => {
    switch (activeBreakpoint) {
      case "large":
      case "huge":
      case "enormous":
        return desktopContent;
      default:
        return mobileContent;
    }
  }, [activeBreakpoint, desktopContent, mobileContent]);

  return (
    <div>
      <ActionHeader title="Action Header Title" onClose={onClose} />
      {content}
    </div>
  );
}
