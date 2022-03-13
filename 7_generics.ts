function simpleStringState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;

  return [
    () => val,
    (v: T) => {
      val = v;
    }
  ];
}

const [val1getter, val1setter] = simpleStringState(2);

console.log(val1getter());
val1setter(3);
console.log(val1getter());

// Overriding inferred generics
const [val2getter, val2setter] = simpleStringState<string | null>(null);
console.log(val2getter());
val2setter("str");
console.log(val2getter());

// Example -------------------
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks = items.map(item => ({
    item,
    rank: rank(item)
  }));

  ranks.sort((a, b) => b.rank - a.rank);

  return ranks.map(r => r.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: "Pikachu", hp: 100 },
  { name: "Bulbasaur", hp: 200 },
  { name: "Charmander", hp: 300 }
];

const ranks = ranker(pokemon, p => p.hp);
console.log(ranks);
