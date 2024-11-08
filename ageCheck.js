function categorizeAge(age) {
    if (age < 5) {
        console.log("Toddler (under 5 years)");
    } else if (age >= 5 && age <= 12) {
        console.log("Child (5–12 years)");
    } else if (age >= 13 && age <= 19) {
        console.log("Teenager (13–19 years)");
    } else if (age >= 20 && age <= 35) {
        console.log("Young Adult (20–35 years)");
    } else if (age >= 36 && age <= 60) {
        console.log("Middle-Aged (36–60 years)");
    } else if (age > 60) {
        console.log("Senior (over 60 years)");
    } else {
        console.log("Invalid age");
    }
}

// Example usage:
let userAge = 25; // Replace with actual input
categorizeAge(userAge);