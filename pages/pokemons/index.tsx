import { GetStaticProps } from 'next';

export default function Pokemons({ results }: DataPokemons): JSX.Element {
  return <h1>Hello {results[0].name}</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  const data: DataPokemons = await (
    await fetch('https://pokeapi.co/api/v2/pokemon-species')
  ).json();

  return {
    props: data,
  };
};
