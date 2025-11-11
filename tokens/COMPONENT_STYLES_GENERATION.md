# Component Styles Generation
Instruction for AI tools on generating component CSS styles.

## Steps
1. Verify that there are no duplicate Name tokens. If there are, STOP and report the duplicates to the user
2. Derive the token names from the token tables (see below for instructions on how to derive the name)
3. Assign the token name to its value. If the value is a number with no units, keep it as a number type. If it includes any units or spaces, consider it a string.
4. Place all tokens in a Typescript file under the ./src/components directory of the project
5. Each table in the component's tokens markdown file should be placed in its own variable with an appropriate name
6. The file should export all the token variables in one Object to be imported in ./src/components/components.ts
7. Update ./src/components/components.ts to include the tokens from the new file in the output unless the file is in the excludes array
8. Update ./tests/components.spec.ts by adding the new component to the paramterized tests.
9. If in plan mode, ask any clarifying questions to the user if needed

## Deriving a name
Given a table with columns "Name" and "Value", the token name for a row can be derived
from the value under the "Name" column for that row by the following rules:
- Spaces are replaced by a period
- Any parentheses are ignored