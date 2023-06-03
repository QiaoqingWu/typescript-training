let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// let's use the simplified for loop
for (let tempSport of sportsOne) {
    
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favourite!");
    } else {
        console.log(tempSport); 
    }

}