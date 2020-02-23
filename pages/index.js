import {
  ThemeProvider,
  CSSReset,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Stack
} from "@chakra-ui/core";

export default function Index() {
  const fetchSearchResults = () => console.log("Searching...");
  return (
    <ThemeProvider>
      <CSSReset />
      <Stack spacing={3} align="center">
        <Text fontSize="6xl">Xkcd Search</Text>
        <InputGroup size="lg">
          <InputRightElement
            children={
              <IconButton
                onClick={fetchSearchResults}
                variantColor="teal"
                aria-label="Search button"
                icon="search"
              />
            }
          />
          <Input type="text" roundedLeft="0" placeholder="physics" />
        </InputGroup>
      </Stack>
    </ThemeProvider>
  );
}
