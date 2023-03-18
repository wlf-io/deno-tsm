import {
  assert,
  assertAlmostEquals,
  assertEquals,
  assertFalse,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import vec3 from "../src/vec3.ts";

import { epsilon } from "../src/constants.ts";

Deno.test("vec3", async (t) => {
  await t.step("resets", () => {
    const vector = new vec3([1.0, 2.0, 3.0]);

    vector.reset();

    assertEquals(vector.x, 0);
    assertEquals(vector.y, 0);
    assertEquals(vector.z, 0);
  });

  await t.step("copies", () => {
    const vector1 = new vec3([1.0, 2.0, 3.0]);
    const vector2 = vector1.copy();

    assertEquals(vector2.x, vector1.x);
    assertEquals(vector2.y, vector1.y);
    assertEquals(vector2.z, vector1.z);
  });

  await t.step("negates", () => {
    const vector = new vec3([1.0, 2.0, 3.0]);

    vector.negate();

    assertEquals(vector.x, -1.0);
    assertEquals(vector.y, -2.0);
    assertEquals(vector.z, -3.0);
  });

  await t.step("compares", () => {
    const vector1 = new vec3([1.0, 2.0, 3.0]);
    const vector2 = new vec3([1.0, 2.0, 3.0]);
    const vector3 = new vec3([2.0, 3.0, 4.0]);

    assert(vector1.equals(vector2));
    assertFalse(vector1.equals(vector3));
  });

  await t.step("adds", () => {
    const vector1 = new vec3([1.0, 2.0, 3.0]);
    const vector2 = new vec3([2.0, 3.0, 4.0]);

    const result = vector1.add(vector2);

    assertAlmostEquals(result.x, 3.0, epsilon);
    assertAlmostEquals(result.y, 5.0, epsilon);
    assertAlmostEquals(result.z, 7.0, epsilon);
  });

  await t.step("subtracts", () => {
    const vector1 = new vec3([1.0, 2.0, 3.0]);
    const vector2 = new vec3([2.0, 4.0, 6.0]);

    const result = vector1.subtract(vector2);

    assertAlmostEquals(result.x, -1.0, epsilon);
    assertAlmostEquals(result.y, -2.0, epsilon);
    assertAlmostEquals(result.z, -3.0, epsilon);
  });

  await t.step("multiplies", () => {
    const vector1 = new vec3([2.0, 3.0, 4.0]);
    const vector2 = new vec3([5.0, 6.0, 7.0]);

    const result = vector1.multiply(vector2);

    assertAlmostEquals(result.x, 10.0, epsilon);
    assertAlmostEquals(result.y, 18.0, epsilon);
    assertAlmostEquals(result.z, 28.0, epsilon);
  });

  await t.step("divides", () => {
    const vector1 = new vec3([2.0, 3.0, 0.8]);
    const vector2 = new vec3([5.0, 6.0, 4.0]);

    const result = vector1.divide(vector2);

    assertAlmostEquals(result.x, 0.4, epsilon);
    assertAlmostEquals(result.y, 0.5, epsilon);
    assertAlmostEquals(result.z, 0.2, epsilon);
  });

  await t.step("scales", () => {
    const vector = new vec3([1.0, 2.0, 3.0]);

    vector.scale(2.0);

    assertAlmostEquals(vector.x, 2.0, epsilon);
    assertAlmostEquals(vector.y, 4.0, epsilon);
    assertAlmostEquals(vector.z, 6.0, epsilon);
  });

  await t.step("normalizes", () => {
    const vector = new vec3([1.0, 2.0, 3.0]);

    vector.normalize();

    assertAlmostEquals(vector.x, 0.26726, epsilon);
    assertAlmostEquals(vector.y, 0.53452, epsilon);
    assertAlmostEquals(vector.z, 0.80178, epsilon);
  });
});
