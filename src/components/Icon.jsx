import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = ({ icon, css }) => {
    // This component is going to be used to render the icons that we are going to use in the application using FontAwesome library.
    return <FontAwesomeIcon className={css} icon={icon} />;
};
