import { Switch } from "@headlessui/react";
import React from "react";

function Toggle({ label, onChange, enabled }) {
  return (
    <div>
      <Switch.Group>
        <div className="flex items-center gap-x-2">
          <Switch.Label>{label}</Switch.Label>
          <Switch
            checked={enabled}
            onChange={onChange}
            className={`${
              enabled ? "bg-primary-900" : "bg-secondary-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
          >
            <span
              className={`${
                enabled ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}

export default Toggle;
