import { DISCORD_REGEX } from "./parseMarkdown";

export const discordEmoji = [
  "<:wow:952755842095132752>",
  "<:shakespeare:982709311702716457>",
  "<:whar:1143938761919570000>",
  "<:upvote:1010035340851023892>",
  "<:trol:1010322254065848361>",
  "<:this:1068710522561773719>",
  "<:thehorror:1158484835090833508>",
  "<:teh_duck:1055226916409458808>",
  "<:soon:932400780072349726>",
  "<:shakespeare:982709311702716457>",
  "<:sadmeow:954781179704393769>",
  "<:robotop:1148967341409976411>",
  "<:rehehehehehehe:1123971249442406521>",
  "<:ratestar:957320841538982018>",
  "<:quacker:959421966148857906>",
  "<:plankton_pog:995896283833323520>",
  "<:pixelmeowy:1125502216090951840>",
  "<:mike_is_getting_sick_of_you:1143348848085962855>",
  "<:meowytroll:1111415513462079628>",
  "<:meowybutton:950192902708019200>",
  "<a:meowy_spin:1008194132067483678>",
  "<a:meowy_planets:1008194354197831800>",
  "<a:meowy_planet:1008194232282009640>",
  "<:meowspin:1017901487810170940>",
  "<:mainispain:939326396977795113>",
  "<:madmeow:954780476067946638>",
  "<:halfstar:957320841241169991>",
  "<:gun:1015228426778578966>",
  "<:flipper:1011498926819520572>",
  "<:finalboss:954783074586095636>",
  "<a:ducky_speen:995024774348668968>",
  "<:ducky:1001974772051234950>",
  "<a:duckspinningcube:1152410546893770783>",
  "<:drunkmeow:1026159952038985829>",
  "<:drinkmilk:1151681105615929435>",
  "<:downvote:1010035793819091068>",
  "<:darkstar:957320841044045905>",
  "<:chainbrokerestartingnow:1149502765542953021>",
  "<a:caught_in_4k:1102387987838402574>",
  "<:catlick:1180505322851414206>",
  "<:bred:959422100458844160>",
  "<:blank:1018231234553446411>",
  "<:aaaaaaaaaaa:1149352246572761120>",
  "<:a_cat_on_meower:1021912187163394138>",
].map((emoji) => {
  const match = emoji.match(DISCORD_REGEX);
  if (!match) {
    throw new Error(`${emoji} isn't discord emoji`);
  }
  return { emoji, name: match[1], id: match[2], isGif: emoji.startsWith("<a") };
});

export type Emoji = (typeof discordEmoji)[number];
