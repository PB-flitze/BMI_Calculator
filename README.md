# BMI_Calculator Description 
This Repo aims for the goal to get in touch with deno.land by creating a simple Calculator for the Body Mass Index. It was additionally creating beside a project in the class "web-programming". 

Feel free to update and comment some change ideas.

## Functionality
### Usage with Command Line 
For the Usage of the deno Modul use the following input for the Command Line

```
deno run --allow-net https://deno.land/x/bmi_calculator@0.1.1/usage_example.ts
```
#### Usage Example
```
import { bmi } from "https://deno.land/x/bmi_calculator@0.1.1/mod.ts";

// Console log every function with sample array
console.log(bmi_calculator())
```


## Testing
// run the following code to test the function
```
deno run --allow-net https://deno.land/x/bmi_calculator@0.1.1/bmi_test.ts
```

### Problems
One Problem was that the testing wasn`t working and i got the Description "cannot find name 'deno'

to following link from Github helped me solve this Problem
- https://github.com/denoland/vscode_deno/issues/66
