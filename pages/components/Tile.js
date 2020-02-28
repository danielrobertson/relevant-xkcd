import { PseudoBox, Image, Link } from "@chakra-ui/core";

export default function Tile({ comic }) {
  const url = `https://xkcd.com/${comic?.num}`;
  return (
    <PseudoBox m="15px" maxW="md" _hover={{ shadow: "2xl" }}>
      <Link href={url} isExternal="true">
        <Image src={comic?.img} alt={comic?.title} />
      </Link>
    </PseudoBox>
  );
}
