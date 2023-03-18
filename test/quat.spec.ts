import {
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.180.0/testing/asserts.ts";

import quat from "../src/quat.ts";

import { epsilon } from "../src/constants.ts";

Deno.test("quat", async (t) => {
  await t.step("resets", () => {
    const q = new quat([1.0, 2.0, 3.0, 4.0]);

    q.reset();

    assertEquals(q.x, 0);
    assertEquals(q.y, 0);
    assertEquals(q.z, 0);
  });

  await t.step("copies", () => {
    const q1 = new quat([1.0, 2.0, 3.0, 4.0]);
    const q2 = q1.copy();

    assertEquals(q2.x, q1.x);
    assertEquals(q2.y, q1.y);
    assertEquals(q2.z, q1.z);
    assertEquals(q2.w, q1.w);
  });

  await t.step("compares", () => {
    const q1 = new quat([1.0, 2.0, 3.0, 4.0]);
    const q2 = new quat([1.0, 2.0, 3.0, 4.0]);
    const q3 = new quat([2.0, 3.0, 4.0, 5.0]);

    assertEquals(q1.equals(q2), true);
    assertEquals(q1.equals(q3), false);
  });

  await t.step("adds", () => {
    const q1 = new quat([1.0, 2.0, 3.0, 4.0]);
    const q2 = new quat([2.0, 3.0, 4.0, 5.0]);

    const result = q1.add(q2);

    assertAlmostEquals(result.x, 3.0, epsilon);
    assertAlmostEquals(result.y, 5.0, epsilon);
    assertAlmostEquals(result.z, 7.0, epsilon);
    assertAlmostEquals(result.w, 9.0, epsilon);
  });

  await t.step("multiplies", () => {
    const q1 = new quat([1.0, 3.0, 4.0, 5.0]);
    const q2 = new quat([5.0, 6.0, 7.0, 8.0]);

    const result = q1.multiply(q2);

    assertAlmostEquals(result.x, 30.0, epsilon);
    assertAlmostEquals(result.y, 67.0, epsilon);
    assertAlmostEquals(result.z, 58.0, epsilon);
    assertAlmostEquals(result.w, -11.0, epsilon);
  });

  await t.step("normalizes", () => {
    const quaternion = new quat([1.0, 2.0, 3.0, 4.0]);

    quaternion.normalize();

    assertAlmostEquals(quaternion.x, 0.18257, epsilon);
    assertAlmostEquals(quaternion.y, 0.36515, epsilon);
    assertAlmostEquals(quaternion.z, 0.54772, epsilon);
    assertAlmostEquals(quaternion.w, 0.73029, epsilon);
  });
});
