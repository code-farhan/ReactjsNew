export const randomText = () => {
  const things = ['Привет, я бот', 'Как твои дела?', 'Я тебя узнал', 'Ты меня узнал? Я бот', 'Да нееее, быть такого не может =)))', 'Лол, кек, чебурек!!!', '😂😂😂😂'];
  const thing = things[Math.floor(Math.random()*things.length)];
  return thing;
}
