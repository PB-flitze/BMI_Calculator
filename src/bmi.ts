export class bmi {

        public static calculate_bmi(height: number, weight: number): number {
                height = height / 100

                return weight / (height * height)
        }
}
console.log("your BMI is " + calculate_bmi(180, 80));
function calculate_bmi(arg0: number, arg1: number) {
        throw new Error("Function not implemented.");
}

