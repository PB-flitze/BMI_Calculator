import { bmi } from "./bmi.ts"

import { assertEquals } from "https://deno.land/std@0.125.0/testing/asserts.ts";

Deno.test("should give you the bmi", async () => {
    assertEquals(calculate_bmi(179, 90),28)

})

function calculate_bmi(arg0: number, arg1: number): unknown {
    throw new Error("Function not implemented.");
}
// problem: https://github.com/denoland/vscode_deno/issues/66   