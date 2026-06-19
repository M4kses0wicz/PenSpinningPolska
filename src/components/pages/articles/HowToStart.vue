<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Heading from "../../templates/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../templates/articleParts/TextBlock.vue";
import logoPPP from "../../../assets/ppp-raczka-white.png";
import penSpinners from "../../../assets/spinners.png";
import penMods from "../../../assets/penmody.png";

import { useCursor } from "../../../composables/useCursor.js";
const { grow, growS, reset, video } = useCursor();

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Rozpocznij swoją przygodę z pen spinningiem!"
    topic="Dla początkujących"
    context="Od zera do penspinnera"
  />
  <SubHeading text="Witaj na Pen Spinning Polska!" tag="h3" />
  <WideTextBlock>
    Bardzo cieszymy się z tego że tu jesteś, i mamy nadzieję że zostaniesz z
    nami na jakiś czas. Na początku wypadałoby powiedzieć kim jesteśmy. Nasze
    community nosi nazwę <strong>ppp</strong> (portal polskich penspinnerów) i
    zrzesza pen spinnerow z calej Polski – mozna powiedziec ze jestesmy
    reprezentacją Polski w pen spinningu.
  </WideTextBlock>

  <TextBlock :src="penSpinners" alt="zdjęcie pen spinnerów" align="right">
    <SubHeading text="Jak zacząć kręcić?" tag="h2" margin="" />
    <p>
      Pen spinningu należy uczyć sie po kolei – czyli zaczynamy od tricków
      prostszych i kończymy na trudniejszych. Dlaczego? Ponieważ trudniejsze
      tricki opierają się na tych łatwiejszych, lub są ich
      <strong>częścią</strong>. Przykładowo tricku Twisted sonic nie wykonasz
      bez znajomości tricku charge. Zaczynamy więc od tricków Fundamentalnych.
      Są to najistotniejsze i najważniejsze tricki w pen spinningu. Do
      fundamentali zaliczamy:
    </p>
    <ul>
      <li>
        <a
          href="https://youtu.be/9dlyQDfbjd8?si=geuFyG52h52zyQmf"
          target="_blank"
          @mouseover="grow"
          @mouseleave="reset"
          >ThumbAround</a
        >
      </li>
      <li>
        <a
          href="https://youtu.be/85p1fn-PTZo?si=r6N4TmukZ8HtD_a-"
          target="_blank"
          @mouseover="grow"
          @mouseleave="reset"
          >Sonic</a
        >
      </li>
      <li>
        <a
          href="https://youtu.be/0nMOH97fjGw?si=S3RVl6SswJSO11Sa"
          target="_blank"
          @mouseover="grow"
          @mouseleave="reset"
          >FingerPass</a
        >
      </li>
      <li>
        <a
          href="https://youtu.be/6jA8CDRcCuc?si=UL-v02V3G6R13p3q"
          target="_blank"
          @mouseover="grow"
          @mouseleave="reset"
          >Charge</a
        >
      </li>
    </ul>
    <p>
      Podane tricki są na tyle proste, że można się ich nauczyć zwykłym
      długopisem lub ołówkiem, więc rozpoczęcie swojej przygody z pen
      spinningiem jest prostsze niż może się to wydawać. Tutoriale do minionych
      tricków można znaleźć na youtubie, a jeśli będziesz mieć z nimi większe
      problemy – nie bój się poprosić nas o pomoc na discordzie, na grupie na
      facebooku czy na messengerze.
    </p>
  </TextBlock>
  <TextBlock :src="penMods" alt="zdjęcie wielu pen modów">
    <p>
      Gdy fundamentale mamy już za sobą, możemy ropocząć naukę bardziej
      wymagających tricków, co może wiązać się z kupnem pierwszego spinning
      pena. Na początku muszę podkreślić że nie ma czegoś takiego jak 'mod dla
      początkujących’ – <strong>są mody dobre, i są mody złe.</strong> Bardzo
      częstym błędem popełnianym przez początkujących, jest kupowanie firmowego
      spinning pena ze sklepów takich jak allegro czy aliexpress. Tak owe peny
      nie są dobrym wyborem. Najczęściej są one tworzone i sprzedawane przez
      ludzi którzy nic o pen spinningu nie wiedzą, a same długopisy są fatalnej
      jakości. Wiadomo – jak we wszystkim – mogą zdarzać się pojedyncze
      <strong>wyjątki</strong> ( jak na przykład shigao v15, spinpro lub
      chociażby Zhuanbizhe mod z temu za 13zl ), ale nie ma co kusić losu
      zamawiając niesprawdzone długopisy. Co zatem wybrać? Isnieje wiele
      spinning penów opracowanych przez profesjonalnych pen spinnerów z całego
      świata, które są złożone z części takich jak pisaki, długopisy, markery,
      automatyczne ołówki a nawet śrubki czy nakrętki. Takie długopisy sprawdzą
      się <strong>najlepiej.</strong> Długopisów do kręcenia jest masa –
      wyróżniają się wagą, długością, grubością, rozkładem wagi i innymi
      czynnikami które wpływają na jakość kręcenia.
    </p>
    <br />
    <p>
      Wszystko zależy od tego, jakim stylem zamierzasz kręcić. Jeśli podoba ci
      się power (szybkie krecenie – czeste podrzuty) i chcesz uczyć się tego
      stylu, przy zakupie pen moda musisz zwrócić uwage na to by twój długopis
      był długi i ciężki, a w przypadku spokojniejszego kręcenia – aesthetica –
      waga i długość nie będzie grała tak ważnej roli.
    </p>
  </TextBlock>
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
