import { ThemeProvider, CSSReset, Text } from "@chakra-ui/core";

export default function Index() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Text fontSize="6xl">Xkcd Search</Text>
    </ThemeProvider>
  );
}
