import { z } from 'zod';

const bannedToppings = new Set<string>(['soap', 'glass', 'battery', 'nail']);

export const PizzaSchema = z
  .object({
    size: z.number().int().positive(),
    crust: z.enum(['stuffed', 'normal']),
    isDeepDish: z.boolean().optional().default(false),
    toppings: z.array(z.string()).optional().default([]),
  })
  .refine(
    (pizza) => !pizza.toppings?.some((topping) => bannedToppings.has(topping.toLowerCase())),
    {
      message: `Contains banned topping. Banned: ${Array.from(bannedToppings).join(', ')}`,
      path: ['toppings'],
    },
  );

export type Pizza = z.infer<typeof PizzaSchema>;

export type ValidatePizzaResult =
  | { isPizza: true; pizza: Pizza }
  | { isPizza: false; errors: string[] };

export function validatePizza(input: unknown): ValidatePizzaResult {
  const parse = PizzaSchema.safeParse(input);
  if (parse.success) {
    return { isPizza: true, pizza: parse.data };
  }
  const errors: string[] = parse.error.issues.map((issue) => {
    const path = issue.path.join('.') || '(root)';
    return `${path}: ${issue.message}`;
  });
  return { isPizza: false, errors };
}
