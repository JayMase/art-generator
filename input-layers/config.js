const fs = require("fs");
const dir = __dirname;
const width = 1024;
const height = 1024;
//const rarity = [
//    {key: "", val: "common"},
//    {key: "_r", val: "rare"},
//    {key: "_sr", val: "super rare"},
//    {key: "_ur", val: "ultra rare"},
//];

//const addRarity = (str1) => {
//   let itemRarity;
//    rarity.forEach((r) => {
//        if (str1.endsWith(r.key)) {
//            itemRarity = r.val;
//        }
//    });
//    return itemRarity;
//};

const clearName = (_str) => {
    let name = _str.slice(0, -4);
    //rarity.forEach((r) => {
    //    name = name.replace(r.key, "");
    //});
    return name;
};


const getElements = (path) => {
    return fs
        .readdirSync(path)
        .map((i, index) => {
            return {
                id: index + 1,
                name: clearName(i),
                fileName: i,
                //rarity: addRarity(1),
            };
        });
};

const layers = [
    {
        id: 1,
        name: "background",
        location: `${dir}/background/`,
        elements: getElements(`${dir}/background/`),
        position: {x: 0, y: 0 },
        size: { width: width, height: height}
    },
    {
        id: 2,
        name: "antlers",
        location: `${dir}/antlers/`,
        elements: getElements(`${dir}/antlers/`),
        position: {x: 0, y: 0 },
        size: { width: width, height: height}
    },
    {
        id: 3,
        name: "fur",
        location: `${dir}/fur/`,
        elements: getElements(`${dir}/fur/`),
        position: {x: 0, y: 0 },
        size: { width: width, height: height}
    },
    {
        id: 4,
        name: "eyes",
        location: `${dir}/eyes/`,
        elements: getElements(`${dir}/eyes/`),
        position: {x: 0, y: 0 },
        size: { width: width, height: height }
    },
    {
        id: 5,
        name: "ears",
        location: `${dir}/ears/`,
        elements: getElements(`${dir}/ears/`),
        position: {x: 0, y: 0 },
        size: { width: width, height: height}
    },
    {
        id: 6,
        name: "mouth",
        location: `${dir}/mouth/`,
        elements: getElements(`${dir}/mouth/`),
        position: {x: 0, y: 0 },
        size: { width: 1000, height: 1000}
    },
    {
        id: 7,
        name: "bonus",
        location: `${dir}/bonus/`,
        elements: getElements(`${dir}/bonus/`),
        position: {x: 0, y: 0 },
        size: { width: 1000, height: 1000}
    },
];

module.exports = { layers, width, height };