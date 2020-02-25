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

export default Index => {
  const [searchValue, setSearchValue] = React.useState("");
  const handleChange = event => setSearchValue(event.target.value);

  const fetchSearchResults = async e => {
    if (searchValue.length > 0) {
      const res = await fetch(`/api/search?q=${searchValue}`);
      const json = await res.json();
      console.log(json);
    }
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <Stack spacing={3} align="center">
        <Text fontSize="6xl">Xkcd Search</Text>
        <InputGroup size="lg">
          <Input
            value={searchValue}
            onChange={handleChange}
            type="text"
            roundedLeft="0"
            placeholder="physics"
          />
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
        </InputGroup>
      </Stack>
    </ThemeProvider>
  );
};
