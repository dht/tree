const url =
    "https://spreadsheets.google.com/feeds/cells/1IAHyyAkH2UhRaCaZR394NtXVMOaSorGRKPoROoPpA2A/1/public/basic?hl=en_US&alt=json";

export const parseCell = input => {
    if (!input) return [];

    const col = input.substring(0, 1).charCodeAt(0) - 65;
    const row = parseInt(input.substr(1), 10);

    return [row, col];
};

export const parseFeed = input => {
    const { feed } = input,
        { entry } = feed;

    const colFields = {
        2: "toDo",
        3: "treeType",
        4: "when",
        5: "location",
        6: "forestName",
        7: "id"
    };

    return entry
        .map(e => {
            const { title, content } = e,
                cell = parseCell(title.$t),
                value = content.$t;

            return {
                cell,
                value
            };
        })
        .filter(e => e.cell[0] !== 2)
        .reduce((output, e) => {
            const { cell, value } = e;
            const row = cell[0];
            const col = cell[1];
            const field = colFields[col];

            output[row] = output[row] || {};
            output[row][field] = value;

            return output;
        }, {});
};

const objectToArray = object => Object.keys(object).map(key => object[key]);

export const getList = () => {
    return fetch(url)
        .then(res => res.json())
        .then(res => objectToArray(parseFeed(res)));
};
