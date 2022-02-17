export class bmi {

        public static calculate_bmi(height: number, weight: number): number {
                height = height / 100

                return weight / (height * height)
        }
}



