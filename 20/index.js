const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

// *** Easy solution 
const arrayFlat = dangerArray.flat(Infinity);
const cleanArray = arrayFlat.filter((el) => el === "🎅");

// *** Hard Solution
function saveSanta(arr) {
    // Your code here
    const santa = "🎅"
    
    return arr.map(el => {
        if (Array.isArray(el)) { // is the element an array?
            return saveSanta(el); // if so, make a recursive function call
        } else { // otherwise, check if element is santa
            return el === santa ? el : null;
        }
    }).filter(el => el !== null) // filter out null values
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))

