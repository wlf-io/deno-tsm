import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";

import mat3 from "../src/mat3.ts";

Deno.test("mat3", async (t) => {
  await t.step("transposes", () => {
    const matrix = new mat3([
      1.0,
      2.0,
      3.0,
      4.0,
      5.0,
      6.0,
      7.0,
      8.0,
      9.0,
      10.0,
      11.0,
      12.0,
    ]);

    matrix.transpose();

    assertEquals(matrix.at(0), 1.0);
    assertEquals(matrix.at(1), 4.0);
    assertEquals(matrix.at(2), 7.0);

    assertEquals(matrix.at(3), 2.0);
    assertEquals(matrix.at(4), 5.0);
    assertEquals(matrix.at(5), 8.0);

    assertEquals(matrix.at(6), 3.0);
    assertEquals(matrix.at(7), 6.0);
    assertEquals(matrix.at(8), 9.0);
  });
});
