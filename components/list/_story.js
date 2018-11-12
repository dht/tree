import React from "react";

import { List } from "./List";

let data = {};

export default (storiesOf, mod, action) => {
    storiesOf("List", mod)
        .add("Basic", () => <List />);
};
