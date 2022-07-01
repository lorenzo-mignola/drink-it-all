import {
  assert,
  assertEquals,
  assertFalse
} from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import parseDrink from '../utils/parseDrink.ts';
import { RawDrink } from './../types/RawDrink.ts';
import margarita from './mock/margarita.json' assert { type: 'json' };

Deno.test('should parse ID', () => {
  const parsed = parseDrink(margarita as RawDrink);
  assertEquals(parsed.id.toString(), margarita.idDrink);
});

Deno.test('should parse name', () => {
  const parsed = parseDrink(margarita as RawDrink);
  assertEquals(parsed.name, margarita.strDrink);
});

Deno.test('should parse thumbnail', () => {
  const parsed = parseDrink(margarita as RawDrink);
  assertEquals(parsed.thumbnail, margarita.strDrinkThumb);
});

Deno.test('should parse alcoholic', () => {
  const parsed = parseDrink(margarita as RawDrink);
  assertFalse(parsed.alcoholic === null);
  assert(parsed.alcoholic);
});

Deno.test('should parse glass', () => {
  const parsed = parseDrink(margarita as RawDrink);
  assertEquals(parsed.glass, margarita.strGlass);
});
