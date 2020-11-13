import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

interface Props {
  name: string;
}

export default function DetailsPokemons({ name }: Props): JSX.Element {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>carregando...</p>;
  }
  return <h1>Hello {name}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: DataPokemons = await (
    await fetch('https://pokeapi.co/api/v2/pokemon-species')
  ).json();
  const paths = data.results.map(result => {
    return {
      params: { name: result.name },
    };
  });
  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const data: DataPokemons = await (
    await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${context.params.name}`,
    )
  ).json();
  return {
    props: data,
  };
};
