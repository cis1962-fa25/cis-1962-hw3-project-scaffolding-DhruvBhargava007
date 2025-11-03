#!/usr/bin/env node
import { parseArgs } from 'node:util';
import { promises as fs } from 'node:fs';
import { validatePizza } from './pizza.js';

async function main() {
  const {
    values: { file },
  } = parseArgs({ options: { file: { type: 'string', short: 'f' } } });

  if (!file) {
    console.error('Usage: pizza-validate --file <path-to-json>');
    process.exit(1);
  }

  let raw: string;
  try {
    raw = await fs.readFile(file, 'utf8');
  } catch (err) {
    console.error(`Error: cannot read file at '${file}'.`);
    process.exit(1);
    return;
  }

  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error('Error: file is not valid JSON.');
    process.exit(1);
    return;
  }

  const result = validatePizza(data);
  if (result.isPizza) {
    console.log('Valid pizza');
    console.log(JSON.stringify(result.pizza, null, 2));
    process.exit(0);
  } else {
    console.log('Invalid pizza');
    for (const msg of result.errors) {
      console.log(`- ${msg}`);
    }
    process.exit(1);
  }
}

main();
