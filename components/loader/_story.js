import React from "react";

import { Loader } from "./Loader";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("Loader", mod)
        .add("Basic", () => <Loader />);
};
