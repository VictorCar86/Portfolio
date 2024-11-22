export const separateItems = (items = [], limit) => {
    const itemsList = [];
    let index = 0;
    while (index < items.length) {
        itemsList.push(items.slice(index, index + limit));
        index += limit;
    }
    return itemsList;
};
