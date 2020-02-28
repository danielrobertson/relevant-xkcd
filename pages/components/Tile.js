import { PseudoBox, Image, Link } from "@chakra-ui/core";

export default function ComicTile({ comic }) {
  const url = `https://xkcd.com/${comic._source.num}`;
  return (
    <PseudoBox m="15px" maxW="md" _hover={{ shadow: "2xl" }}>
      <Link href={url} isExternal="true">
        <Image src={comic._source.img} alt={comic._source.title} />
      </Link>
    </PseudoBox>
  );
}
