import {
  assert,
  assertEquals,
  assertFalse,
  assertArrayIncludes
} from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import parseDrink from '../utils/parser/parseDrink.ts';
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

Deno.test('should parse tags', () => {
  const parsed = parseDrink(margarita as RawDrink);
  const { tags } = parsed;
  assert(tags.length > 0);
  assertArrayIncludes(tags, ['IBA']);
});

Deno.test('should parse ingredients', () => {
  const parsed = parseDrink(margarita as RawDrink);
  const { ingredients } = parsed;
  assert(ingredients.length > 0);
  assertArrayIncludes(ingredients, [{ name: 'Tequila', measure: '1 1/2 oz' }]);
});

Deno.test('should parse ingredients and not include null', () => {
  const parsed = parseDrink(margarita as RawDrink);
  const { ingredients } = parsed;
  const nullIngredients = ingredients.filter(({ name }) => name === null);
  assertEquals(nullIngredients.length, 0);
});

Deno.test('should parse lastUpdate', () => {
  const parsed = parseDrink(margarita as RawDrink);
  assertEquals(parsed.lastUpdate, new Date(margarita.dateModified));
});

Deno.test('should parse instructions', () => {
  const parsed = parseDrink(margarita as RawDrink);
  const {
    instructions: { en, it, es }
  } = parsed;
  assertEquals(en, margarita.strInstructions);
  assertEquals(it, margarita.strInstructionsIT);
  assertEquals(es, undefined);
});
