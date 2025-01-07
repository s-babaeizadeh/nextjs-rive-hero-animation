const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  extends: [...compat.extends("next/core-web-vitals", "next/typescript")],
  rules: {
    "@typescript-eslint/no-unused-expressions": "off", // Disable unused expressions rule
    "@typescript-eslint/no-explicit-any": "off", // Disable explicit any rule
  },
};

export default eslintConfig;
