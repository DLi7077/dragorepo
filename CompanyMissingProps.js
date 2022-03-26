solution(['shoe','shirt','belt','pant'], 
['AstroCorp_shoe','BetaCorp_hat','CaliCorp_pant','AstroCorp_shirt','DeltaCorp_pant','BetaCorp_shirt','AstroCorp_belt','DeltaCorp_shoe','BetaCorp_belt','BetaCorp_shoe','CaliCorp_shirt','CaliCorp_shoe','AstroCorp_hat','CaliCorp_belt','CaliCorp_jacket','DeltaCorp_belt','DeltaCorp_pant','AstroCorp_pant','DeltaCorp_lanyard','DeltaCorp_shirt']);

function solution(req, items) {
    const returnArr = [];
    const clothingSet = new Set();
    req.forEach(e => clothingSet.add(e)) //Add each clothing to set
    const companyMap = new Map(); //CompanyName => companyClothing Set()
    //Add every clothing to corresponding clothing, only if exists in the original set
    items.forEach(e => {
        const itemSplit = e.split("_"); //First company name, 2nd item
        //Add only if original set
        if (clothingSet.has(itemSplit[1])) {
            if (!companyMap.has(itemSplit[0])) { //If no company name, make a set
                companyMap.set(itemSplit[0], new Set())
            }
            companyMap.get(itemSplit[0]).add(itemSplit[1]);
        }
    })
    console.log(companyMap);
    //Now, loop through every company key and add missing company if needed
    for (let key of companyMap.keys()) {
        if (companyMap.get(key).size != clothingSet.size) return `${key}`;
    }
    return 'N/A'; //If no company missing items
}