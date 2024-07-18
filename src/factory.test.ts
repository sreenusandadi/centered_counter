import { expect, test } from 'vitest';
import { factory } from './factory';

test('creates a count function', function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('create a count with negative start value from -10 with a step of 5', function () {
  const count = factory(-10, 5);
  expect(count()).toBe(-5);
  expect(count()).toBe(0);
});

test('create a count with negative step value from 10 with a step of -5', function () {
  const count = factory(10, -5);
  expect(count()).toBe(5);
  expect(count()).toBe(0);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});

test('create a count with large step value', function () {
  const count = factory(0, 1000);
  expect(count()).toBe(1000);
  expect(count()).toBe(2000);
});

test('handle the count with negative values', function () {
  const count = factory(-15, -5);
  expect(count()).toBe(-20);
  expect(count()).toBe(-25);
});

test('create a count with float values', function () {
  const count = factory(0.25, 0.25);
  expect(count()).toBe(0.5);
  expect(count()).toBe(0.75);
});

test('create a count with step value is 0', function () {
  const count = factory(10, 0);
  expect(count()).toBe(10);
  expect(count()).toBe(10);
});
