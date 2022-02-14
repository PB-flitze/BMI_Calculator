class BMI_Calculator{
    height: number;
    weight: number;
    bmi: number;

    calculate_bmi(height, weight, bmi){
    
        height = height/100
    
        bmi = weight/(height*height)

        console.log("your BMI is" + bmi);
    }
console
}