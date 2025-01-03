Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const TYPE_DIV = document.getElementById("type");
const WORD_DIV = document.getElementById("word");
const DIFFICULTY_DIV = document.getElementById("difficulty");
const TYPE_EMOJI_MAP = { act: "🎭", draw: "🎨", say: "🗣️" };
let words;

function newWord() {
  const word = words.sample();
  // TYPE_DIV.textContent = TYPE_EMOJI_MAP[word.type] || "?";
  WORD_DIV.textContent = word.word;
  // DIFFICULTY_DIV.textContent = `${word.difficulty}p` || '';
}

async function setup() {
  const response = await fetch("words.yaml");
  if (!response.ok) throw new Error("Failed to load YAML file");
  const yamlText = await response.text();
  words = jsyaml.load(yamlText);

  document.querySelector('button').onclick = async () => {
    newWord();
  };
  newWord();
}

setup();
