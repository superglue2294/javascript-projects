function processor(transmission) {
    transmission = transmission.trim();

    if (transmission.indexOf("::") < 0) {
        // Data is invalid
        return -1;
    }

    let parts = transmission.split("::");

    if (parts.length !== 2) {
        return -1; 
    }

    let rawData = parts[1];

    if (isNaN(Number(parts[0]))) {
        return -1;
    }

    if (rawData[0] !== "<" || rawData[rawData.length - 1] !== ">" || rawData.slice(1, -1).includes("<") || rawData.slice(1, -1).includes(">")) {
        rawData = -1;
    } 

    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;