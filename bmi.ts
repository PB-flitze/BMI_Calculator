function calculate_bmi(height:number, weight:number): number {
        height = height/100
    
        return weight/(height*height)
}
console.log("your BMI is " + calculate_bmi(180,80) );


