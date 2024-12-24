const VALID_CHAR_REGEX = /[0-9a-zA-Z\+\-\*\/\^\(\)\.]/;
const OPERATOR_REGEX = /[\+\-\*\/\^]/;

/**
 * Validates if a string is a valid algebraic expression using basic arithmetic operators
 * Allowed operators: +, -, *, /, ^
 * @param expression - The string to validate
 * @returns boolean indicating if expression is valid
 */
export const isValidAlgebraicExpression = (expression: string): boolean => {
  if (expression === "") return true;

  let prevChar: string | null = null;
  let parenCount = 0;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === " ") continue;

    if (!VALID_CHAR_REGEX.test(char)) {
      return false;
    }

    if (char === "(") {
      parenCount++;
      continue;
    } else if (char === ")") {
      parenCount--;
      if (parenCount < 0) return false;
    }

    if (OPERATOR_REGEX.test(char)) {
      if (char === "-" && (prevChar === null || prevChar === "(")) {
        prevChar = char;
        continue;
      }

      if (prevChar === null || OPERATOR_REGEX.test(prevChar)) {
        return false;
      }
    }

    prevChar = char;
  }

  return true;
};
