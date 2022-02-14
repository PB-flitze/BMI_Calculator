import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts"

import { bmi } from "./bmi.ts"


Deno.test("should yield correct values for mean/variance/stdev", async () => {

    assertEquals(calculate_bmi(180,99))



