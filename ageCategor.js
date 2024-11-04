//User Age Categorization
let age = 10
if (age >= 0) {
    if (age < 5) {
        category = "Toddler (under 5 years)";      
    } else if (age <= 12) {      
        category = "Child (5-12 years)";
    } else if (age <= 19) {
        category = "Teenager (13-19 years)";
    } else if (age <= 35) {
        category = "Young Adult (20-35 years)";       
    } else if (age <= 60) {
        category = "Middle-Aged (36-60 years)";
    } else {
        category = "Senior (over 60 years)";
    }
}

console.log("The user is categorized as: " + category);