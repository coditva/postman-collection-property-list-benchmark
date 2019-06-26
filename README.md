Benchmark before and after changing [postman-collection](https://github.com/postmanlabs/postman-collection)'s `Property-List` such that we always use `Property-List.reference` as an array of objects.

## Before
We use different way to store `reference`:
- As an object with *a value for each key* for properties with *single* values for same key.
- As an object with *an array for each key* for properties with *multiple* values for same key.

## After
We use same way to store `reference`:
- As an object with *an array for each key* for properties with *multiple* values for same key.

## Impact of change

### Pros:
- Faster access for multi valued lists.
- Less code path complexity.

### Cons:
- Slower access for single valued lists.
- May/will impact users who use private data structures for lists.
