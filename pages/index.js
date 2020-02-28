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
import Grid from "./components/Grid";

export default Index => {
  const [searchValue, setSearchValue] = React.useState("");
  const [comics, setComics] = React.useState([]);

  const handleChange = event => setSearchValue(event.target.value);

  const fetchSearchResults = async () => {
    const res = await fetch(`/api/search?q=${searchValue}`);
    const json = await res.json();
    setComics(json.hits);
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
        <Grid comics={comics} />
        {/* {comics.length > 0 ? <ResultsGrid comics={comics} /> : null} */}
      </Stack>
    </ThemeProvider>
  );
};
