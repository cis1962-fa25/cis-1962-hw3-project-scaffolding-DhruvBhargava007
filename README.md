## Pizza Validator (TypeScript + Zod)

Validate pizza objects using Zod, with a CLI for validating JSON files.

### Install

Local path install (for testing in another project):

```bash
npm install ../pizza-validator-zod
```

Global install to use CLI:

```bash
npm install --global .
```

### Usage as a dependency

```ts
import { validatePizza } from 'pizza-validator-zod';

const result = validatePizza({ size: 12, crust: 'normal' });
if (result.isPizza) console.log(result.pizza.crust);
else console.log(result.errors);
```

### CLI usage

```bash
# After global install
pizza-validate --file ./test-pizza.json
```

If valid, prints the normalized pizza; otherwise, lists specific reasons.

### Development

```bash
npm run build
npm test
npm run lint
npm run format
```

### License

ISC
