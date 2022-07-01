import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import margarita from './mock/margarita.json' assert { type: 'json' };
import parseDrink from '../utils/parseDrink.ts';

Deno.test('should parse ID', () => {
  const parsed = parseDrink(margarita);
  assertEquals(parsed.id.toString(), margarita.idDrink);
});

Deno.test('should parse name', () => {
  const parsed = parseDrink(margarita);
  assertEquals(parsed.name, margarita.strDrink);
});

Deno.test('should parse thumbnail', () => {
  const parsed = parseDrink(margarita);
  assertEquals(parsed.thumbnail, margarita.strDrinkThumb);
});
