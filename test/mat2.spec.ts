import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";

import mat2 from "../src/mat2.ts";

Deno.test("mat2", async (t) => {
  await t.step("transposes", () => {
    const matrix = new mat2([
      1.0,
      2.0,
      3.0,
      4.0,
    ]);

    matrix.transpose();

    assertEquals(matrix.at(0), 1.0);
    assertEquals(matrix.at(1), 3.0);
    assertEquals(matrix.at(2), 2.0);
    assertEquals(matrix.at(3), 4.0);
  });

  await t.step("inverses", () => {
    const matrix = new mat2([
      1.0,
      2.0,
      3.0,
      4.0,
    ]);

    matrix.inverse();

    assertEquals(matrix.at(0), -2.0);
    assertEquals(matrix.at(1), 1.0);
    assertEquals(matrix.at(2), 1.5);
    assertEquals(matrix.at(3), -0.5);
  });
});
