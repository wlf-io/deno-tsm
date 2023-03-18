import {
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import mat4 from "../src/mat4.ts";

import { epsilon } from "../src/constants.ts";

Deno.test("mat4", async (t) => {
  await t.step("transposes", () => {
    const matrix = new mat4([
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
      13.0,
      14.0,
      15.0,
      16.0,
    ]);

    matrix.transpose();

    assertEquals(matrix.at(0), 1.0);
    assertEquals(matrix.at(1), 5.0);
    assertEquals(matrix.at(2), 9.0);
    assertEquals(matrix.at(3), 13.0);

    assertEquals(matrix.at(4), 2.0);
    assertEquals(matrix.at(5), 6.0);
    assertEquals(matrix.at(6), 10.0);
    assertEquals(matrix.at(7), 14.0);

    assertEquals(matrix.at(8), 3.0);
    assertEquals(matrix.at(9), 7.0);
    assertEquals(matrix.at(10), 11.0);
    assertEquals(matrix.at(11), 15.0);

    assertEquals(matrix.at(12), 4.0);
    assertEquals(matrix.at(13), 8.0);
    assertEquals(matrix.at(14), 12.0);
    assertEquals(matrix.at(15), 16.0);
  });

  await t.step("computes perspective projection", () => {
    const matrix = mat4.perspective(45, 1, 1, 100);

    assertAlmostEquals(matrix.at(0), 2.414213, epsilon);
    assertEquals(matrix.at(1), 0.0);
    assertEquals(matrix.at(2), 0.0);
    assertEquals(matrix.at(3), 0.0);

    assertEquals(matrix.at(4), 0.0);
    assertAlmostEquals(matrix.at(5), 2.414213, epsilon);
    assertEquals(matrix.at(6), 0.0);
    assertEquals(matrix.at(7), 0.0);

    assertEquals(matrix.at(8), 0.0);
    assertEquals(matrix.at(9), 0.0);
    assertAlmostEquals(matrix.at(10), -1.02020, epsilon);
    assertEquals(matrix.at(11), -1.0);

    assertEquals(matrix.at(12), 0.0);
    assertEquals(matrix.at(13), 0.0);
    assertAlmostEquals(matrix.at(14), -2.02020, epsilon);
    assertEquals(matrix.at(15), 0.0);
  });

  await t.step("computes orthographic projection", () => {
    const matrix = mat4.orthographic(0, 800, 0, 600, 1, 100);

    assertAlmostEquals(matrix.at(0), 0.002499, epsilon);
    assertEquals(matrix.at(1), 0.0);
    assertEquals(matrix.at(2), 0.0);
    assertEquals(matrix.at(3), 0.0);

    assertEquals(matrix.at(4), 0.0);
    assertAlmostEquals(matrix.at(5), 0.003333, epsilon);
    assertEquals(matrix.at(6), 0.0);
    assertEquals(matrix.at(7), 0.0);

    assertEquals(matrix.at(8), 0.0);
    assertEquals(matrix.at(9), 0.0);
    assertAlmostEquals(matrix.at(10), -0.020202, epsilon);
    assertEquals(matrix.at(11), 0.0);

    assertEquals(matrix.at(12), -1.0);
    assertEquals(matrix.at(13), -1.0);
    assertAlmostEquals(matrix.at(14), -1.020202, epsilon);
    assertEquals(matrix.at(15), 1.0);
  });
});
