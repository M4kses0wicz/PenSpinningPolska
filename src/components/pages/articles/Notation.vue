<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Footer from "../../UI/Footer.vue";

import Heading from "../../templates/articleParts/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../templates/articleParts/TextBlock.vue";
import ArticleFooter from "../../templates/articleParts/ArticleFooter.vue";

import handImg from "../../../assets/Penspinning_slots.jpg";
import penMods from "../../../assets/penmods.jpg";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Standardy zapisów  tricków - Podstawy notacji Angielskiej."
    topic="Notacja"
    context="Nerd Talk"
  />
  <WideTextBlock>
    Ten artykuł ma na celu przybliżyć Wam standardy w zapisie tricków/combosów.
    Są tutaj tłumaczenia artykułów <strong>The Naming Committee.</strong> Proszę
    się do tego stosować, aby uniknąć nieporozumień i poprawniej nazywać tricki.
  </WideTextBlock>
  <TextBlock
    align="right"
    :src="handImg"
    alt="ilustracja przedstawiająca sloty"
    fit="c"
  >
    <SubHeading text="Słowniczek, pojęcia" tag="h3" margin="" />
    <p>Ogólno przyjęte nazewnictwo i numeracja palców:</p>
    <ul>
      <li><strong>T</strong> = Thumb (kciuk)</li>
      <li><strong>1</strong> = index (wskazujący)</li>
      <li><strong>2</strong> = middle (środkowy)</li>
      <li><strong>3</strong> = ring (serdeczny)</li>
      <li><strong>4</strong> = pinky (mały)</li>
    </ul>
    <p>
      Dwie cyfry obok siebie oznaczają, między którymi palcami znajduje się
      długopis (np. 23 oznacza, że długopis powinien się znaleźć między palcem
      środkowym i serdecznym). Sonic 23-12 oznacza, że długopis startuje z
      pozycji między palcem środkowym i serdecznym, a kończy między palcami
      wskazującym i środkowym.
    </p>
    <br />
    <p>
      <strong>Fundamentale</strong>: podstawowe tricki: Thumbaround, Fingerpass,
      Charge, Sonic.
    </p>
    <SubHeading text="Nazwy combosów:" tag="h3" margin="" />
    <ul>
      <li>
        <strong>Rise</strong> – kilka tych samych tricków, które idą od
        pinky’ego do kciuka
      </li>
      <li>
        <strong>Fall</strong> – kilka tych samych tricków, które idą od kciuka
        do pinky’ego
      </li>
      <li>
        <strong>Harmonic</strong> – trick robiony normal–>reverse
        reverse–>normal
      </li>
      <li>
        <strong>Continuous</strong> – ten sam trick wykonywany ciągle w tej
        samej pozycji
      </li>
    </ul>
    <SubHeading text="Modyfikatory:" tag="h3" margin="" />
    <ul>
      <li>
        <strong>Normal, Reverse</strong> – kierunek obrotu pena, przyjmowane
        umownie
      </li>
      <li>
        <strong>Inverse</strong> – odmiana tricku, trick jest robiony „po
        drugiej stronie dłoni”
      </li>
      <li>
        <strong>Moonwalk</strong> – obroty w kierunku normal, a pen idzie w
        stronę reverse; lub na odwrót; – usunięty
      </li>
      <li>
        <strong>Fingerless</strong> – trick wykonywany bez pchnięcia palcami,
        robiony ruchem dłoni
      </li>
      <li>
        <strong>Counter</strong> – trick wykonuje połowę rotacji normal
        (reverse), po czym połowę reverse (normal)
      </li>
    </ul>
  </TextBlock>
  <SubHeading text="Nazywanie tricków" tag="h2" />
  <WideTextBlock>
    Trick nazywamy zgodnie z tym zapisem : <br />
    (Modifier) (Trick Name) (Direction) (number of spins) (starting
    position)-(ending position) <br />
    (Modyfikator) (Nazwa tricku) (kierunek) (liczba obrotów) (pozycja
    początkowa)-(pozycja końcowa) <br />
    <br />
    Przykład: <br />
    <strong>Inverse Shadow Normal 2.0 23-12</strong>
  </WideTextBlock>
  <TextBlock :src="penMods" alt="ilustracja przedstawiająca sloty">
    <SubHeading text="Skróty" tag="h3" margin="" />
    <p>Oficjalne skróty różnych nazw w pen spinningu:</p>
    <ul>
      <li><strong>TA</strong> = Thumbaround</li>
      <li><strong>IA</strong> = Indexaround</li>
      <li><strong>MA</strong> = Middlearound</li>
      <li><strong>RA</strong> = Ringaround</li>
      <li><strong>PA</strong> = Pinkyaround</li>
      <li><strong>Bak</strong> = Backaround</li>
      <li><strong>Neobak</strong> = NeoBackaround</li>
      <li><strong>TS</strong> = Thumbspin</li>
      <li><strong>IS</strong> = Indexspin</li>
      <li><strong>MS</strong> = Middlespin</li>
      <li><strong>RS</strong> = Ringspin</li>
      <li><strong>PS</strong> = Pinkyspin</li>
      <li><strong>SS</strong> = Scissor Spin</li>
      <li><strong>Lev</strong> = Levitator</li>
      <li><strong>Inf</strong> = Infinity</li>
      <li><strong>FP</strong> = Fingerpass</li>
      <br />
      <li><strong>Rev</strong> = Reverse</li>
      <li><strong>Inv</strong> = Inverse</li>
      <li><strong>Ext</strong> = Extended</li>
      <li><strong>FL</strong> = Fingerless</li>
      <li><strong>Cont</strong> = Continuous</li>
      <li><strong>Tw</strong> = Twisted</li>
      <li><strong>PSing</strong> = Pen Spinning</li>
      <br />
      <li><strong>K4LC</strong> = Kam’s 4 Loop Combo</li>
      <li><strong>K3LC</strong> = Kam’s 3 Loop Combo</li>
      <br />
      <li><strong>HG</strong> = Pentel Hybrid Gel</li>
      <li><strong>HGG</strong> = HG Grip</li>
      <li><strong>DG</strong> = Pilot Dr. Grip</li>
      <li><strong>DGG</strong> = DG Grip</li>
      <li><strong>DGT</strong> = DG Tip</li>
    </ul>
  </TextBlock>
  <SubHeading text="Notacja Hybryd" tag="h2" />
  <WideTextBlock>
    Celem tego artykułu jest sklasyfikowanie jednego z wielu trików w nowym
    zapisie jako „przerywane” triki. Kilka przykładów trików, które można
    zapisać w nowej notacji: <br />
    <br />
    <strong>1.</strong> Pełny trik(i) przerywają inny trik przed skończeniem go.
    Wykonajusz pół triku, następnie cały. W tym przykładzie, Sonic Clip 23-12
    przerywany jest przez Pass 13-34. Inny przykład, to przerywanie Sonica Clip
    34 Twisted Soniciem. <br />
    <br />
    <strong>2.</strong> Kręcisz jedynie kawałek triku, natomiast kończysz go
    kawałkiem innego triku. Nie wykonujesz całych trików. W tym przykładzie,
    wykonujemy jedynie pierwszą część Shadowa Still 12, a druga część to Korean
    Bak. <br />
    <br />
    <strong>3.</strong> Wykonujesz połowę, bądź kawałek triku, przerywasz go
    połówką, bądź kawałkiem drugiego triku. Po wykonaniu obu połówek ponownie
    wykręcamy drugą połowę pierwszego wykonywanego triku. W tym przykładzie,
    wykonujemy pierwszą część Sonica Clip 23-12, przerywam go Korean Bak 13
    Harmonic i kończę zaczęty już wcześnie Sonic Clip 23-12. <br />
    <br />
    <strong>4.</strong> Wykonujesz cały trik i dodajesz kawałek innego na
    koniec. Nie ma specjalnych zapisów takiego comba, aczkolwiek zapis może być
    używany w późniejszym czasie, jeżeli jakiś trki zostanie wymyślony.
  </WideTextBlock>
  <SubHeading text="Możliwości zapisu" tag="h2" />
  <WideTextBlock>
    Są dwie możliwości zapisu tricków. Pierwsza możliwość to
    <strong>oficjalny zapis</strong>, do bardzo specyficznych kombinacji, oraz
    mniej oficjalna, którą można zapisywać breakdowny itd.
  </WideTextBlock>
  <SubHeading text="Oficjalny zapis" tag="h3" />
  <WideTextBlock>
    <ul>
      <li>
        <strong>~</strong> – te znaki są używane w miejsce znaku „>” kiedy
        zapisujemy trick(i), które są przerywane (nie przerywające).
      </li>
      <li>
        <strong>[p x]</strong> – „P” oznacza w tym wypadku „push”, czyli
        pchnięcie i jest postawione bezpośrednio po nazwie tricku. To oznacza
        część, w której pchamy nasz długopis. „X” może być postawione, jeżeli
        pchamy pena innym palcem niż w typowym tricku. <br />
        Przykład: <strong>Thumbaround [p 1]</strong>
      </li>
      <li>
        <strong>[s x]</strong> – „S” oznacza spiny. „X” w tym wypadku oznacza
        liczbę wykonanych spinów. <br />
        Przykład: <strong>Thumbspin s 4.0</strong>
      </li>
      <li>
        <strong>[c x]</strong> – „C” oznacza „catch”, czyli złapanie długopisu.
        Jest stawiany po triku przerywającym inny. Oznacza, w które palce
        łapiemy pena. „X” oznacza natomiast palce w które łapiemy pena. <br />
        Przykład: <strong>Sonic Clip 23-12 ~Korean Bak [c T2]</strong>
      </li>
    </ul>
  </WideTextBlock>
  <SubHeading text="Przykłady notacji" tag="h3" />
  <WideTextBlock>
    <strong>{trick(s)}</strong> – oznacza trik, który wykonujemy w środku
    naszego comba. <br />
    <br />
    <em>Trick[p] [s x] ~ {trick} – [s x][c]</em> – ten przykład oznacza, że
    pierwszy trick jest częściowo zrobiony, przerwany mniej więcej w środku,
    natomiast drugi został zrobiony w całości (oznaczamy to znakiem „-„,
    natomiast nie „~”, który oznacza przerwanie jakiegoś triku), następnie
    pierwszy trik jest dokończony. <br />
    <br />
    Przykład:
    <strong
      >Thumbspin [p 3] [s 2.0] ~ {Sonic 23-12 [s 1.0]} – Thumbspin [s 2.0][c
      T4]</strong
    >
    <br />
    <br />
    Mamy również drugą formę zapisu, zwaną <strong>„zagnieżdżaniem”</strong>.
    Pod spodem przykład: <br />
    <br />
    <strong>A~{B~{C-D}}}</strong>
    <br />
    <br />
    Oznacza to: A – zaczynamy, B – zaczynamy, C-D (oba triki wykonujemy w
    całości), B – kończymy, A – kończymy. <br />
    <br />
    Jeżeli chcemy napisać, że A – zaczynamy, B – zaczynamy, C-D wykonujemy w
    całości, A – kończymy, B – kończymy, zapisujemy to w ten sposób: <br />
    <br />
    <strong>A~B~C-D~B~A</strong>, ponieważ nie możemy w tym wypadku zapisywać
    znaków „{„ lub „}”. Tego zapisu nie można, niestety, już bardziej uprościć.
  </WideTextBlock>
  <SubHeading text="Przykłady" tag="h3" />
  <WideTextBlock>
    <ul>
      <li>
        <strong
          >Sonic Clip 23-12[p][s 1.0] ~ Reverse Pass 13-34 [s .5][c]</strong
        >
        – ten zapis oznacza, że Sonic Clip 23-12 przerwany jest przez cały
        Reverse Pass 13-34.
      </li>
      <li>
        <strong
          >Shadow Still 12 [p] [s 1.0] ~ Korean Bak 12-12 [s .5][c]</strong
        >
        – wykonujemy jeden spin Shadow Stilla, po czym wykonujemy pełny Korean
        Bak.
      </li>
      <li>
        <strong
          >Sonic Clip 23-12 [p][s 1.0] ~ {Korean Bak Harmonic} ~ [s
          1.0][c]</strong
        >
        – ten zapis oznacza, że Sonic Clip został przerwany przez Korean Bak
        Harmonic. Po wykonaniu tego triku kończymy nasz Sonic Clip.
      </li>
      <li>
        <strong>Sonic Clip 34-23[p][s 1.0] ~ Twisted Sonic 24-12</strong> – to
        jest Sonic Clip przerwany przez Twisted Sonica.
      </li>
    </ul>
  </WideTextBlock>
  <SubHeading text="Nieformalny sposób zapisu" tag="h3" />
  <WideTextBlock>
    <ul>
      <li>
        Przykład 1: <strong>Sonic Clip 23-12 ~> Reverse Pass 13-34</strong>
      </li>
      <li>
        Przykład 2: <strong>Shadow Still 12 1.0 ~ Korean Bak 12-12 .5</strong>
      </li>
      <li>
        Przykład 3: <strong>Sonic Clip 23-12 > {Korean Bak Harmonic}</strong>
        lub
        <strong
          >Sonic Clip 23-12 ~> Korean Bak Harmonic >~ Sonic Clip 23-12</strong
        >
      </li>
      <li>
        Przykład 4: <strong>Sonic Clip 34-23 ~> Twisted Sonic 24-12</strong>
      </li>
    </ul>
    <br />
    <strong>Ważne:</strong> powinieneś używać „~>” w zamian za „~” w krótszej
    wersji zapisu jeżeli trik jest przerwany przez inny trik.
  </WideTextBlock>
  <TextBlock align="right" src="" alt="">
    <SubHeading
      text="Symbole używane do nieformalnego zapisu"
      tag="h3"
      margin=""
    />
    <ul>
      <li>
        <strong>~</strong> – pierwszy trik nie jest do końca zrobiony, natomiast
        dalej są wykonywane już inne triki.
      </li>
      <li>
        <strong>~></strong> – pierwszy trik nie jest do końca zrobiony, ale
        połączony z innym trikiem, którym został przerwany pierwszy trik.
      </li>
      <li>
        <strong>>~</strong> – pierwszy trik jest skończony, natomiast drugi
        jedynie częściowo.
      </li>
    </ul>
  </TextBlock>
  <SubHeading text="Przykład" tag="h3" />
  <WideTextBlock>
    <strong
      >Sonic ~> Twisted Sonic ~ Shadow > Backaround >~ Thumbaround ~ Reverse
      Backaround</strong
    >
    <ul>
      <li>
        <strong>Sonic</strong>: nie ma symbolu przed trikiem – pchamy pena – „~”
        symbol po triku – nie łapiemy
      </li>
      <li>
        <strong>Twisted Sonic</strong>: symbol przed trikiem „>” – pchamy pena –
        „~” symbol po triku – nie łapiemy
      </li>
      <li>
        <strong>Shadow</strong>: symbol przed trikiem „~” – nie pchamy pena –
        „>” symbol po triku – łapiemy
      </li>
      <li>
        <strong>Backaround</strong>: symbol przed trikiem „>” – pchamy pena –
        „>” symbol po triku – łapiemy (jest to cały trick)
      </li>
      <li>
        <strong>Thumbaround</strong>: symbol przed trikiem „~” – nie pchamy pena
        – „~” symbol po triku – nie łapiemy
      </li>
      <li>
        <strong>Reverse Backaround</strong>: symbol przed trikiem „~” – nie
        pchamy pena – nie ma symbolu po triku – łapiemy
      </li>
    </ul>
  </WideTextBlock>
  <SubHeading text="Zagnieżdżanie" tag="h2" />
  <WideTextBlock>
    Przykład:
    <strong
      >Sonic > {Twisted Sonic ~ {Shadow > {Backaround >~ Thumbaround} >~} >} >
      Reverse Backaround.</strong
    >
    W uproszczonej metodzie oznacza to:
    <strong
      >Sonic ~> Twisted Sonic ~ Shadow ~> Backaround >~ Thumbaround >~ Shadow ~
      Twisted Sonic >~ Sonic > Reverse Backaround.</strong
    >
    <br />
    <br />
    <ul>
      <li>
        <strong>Sonic</strong>: bez symbolu z przodu – zawiera pchnięcie. Po
        triku następują nawiasy {}, więc Sonic jest przerywany i dokańczany
        później (ze złapaniem). Jeśli popatrzymy na symbol przed nawiasem, to
        jest „>”. To znaczy, że Sonic jest gdzieś przerywany przez jakiś trick,
        po czym jest wykonywany do końca (ze złapaniem).
      </li>
      <li>
        <strong>Twisted Sonic</strong>: „>” symbol z przodu – zawiera pchnięcie,
        po tym tricku też następuje sekwencja zagnieżdżona. Jeśli popatrzymy na
        symbol za nawiasami tego poziomu, to jest „>”. Znaczy to, że Twisted
        Sonic jest przerywany gdzieś, po czym jest dokańczany (ze złapaniem).
      </li>
      <li>
        <strong>Shadow</strong>: „~” symbol z przodu – bez pchnięcia, po tym
        tricku też następuje sekwencja zagnieżdżona. Za nawiasami tego poziomu
        jest symbol „>~”. W tym przypadku, „~” odnosi się do Shadowa (specjalny
        przypadek dwóch symboli). To znaczy, że Shadow jest przerywany gdzieś,
        po czym robiony nie do końca (nie ma złapania).
      </li>
      <li>
        <strong>Backaround</strong>: „>” symbol z przodu – zawiera pchnięcie,
        „>” symbol na końcu – zawiera złapanie.
      </li>
      <li>
        <strong>Thumbaround</strong>: „~” symbol z przodu – bez pchnięcia, „>”
        symbol na końcu – zawiera złapanie.
      </li>
      <li>
        <strong>Reverse Backaround</strong>: „>” symbol z przodu – zawiera
        pchnięcie, bez symbolu za – zawiera złapanie.
      </li>
    </ul>
  </WideTextBlock>
  <SubHeading text="Rozszerzona notacja tricków" tag="h2" />
  <WideTextBlock>
    Jako że pen spinning ciągle się rozwija, to musi też powstać notacja tricków
    opisująca je. Ostatnią dużą zmianą w naszym spojrzeniu i myśleniu o trickach
    było wymyślenie <strong>Notacji hybryd</strong>, zaprojektowanej, aby lepiej
    opisać niepełne tricki oraz to, jak one się łączą z innymi niepełnymi i
    całymi trickami. Kolejny pomysł został zaproponowany przez
    <strong>Fratleyma</strong> z FPSB i UPSB. <br />
    <br />
    Pomysł odnosi się do opisu tricków, w których pchnięcie jest wykonywane
    innymi niż zazwyczaj palcami. Fratleym zaczął z Halftapami i Fulltapami.
    Zamiast używać palca bezpośrednio nad dwoma palcami wspomagającymi, Fratleym
    używał innych palców do wykonywania pchnięcia. To wspaniale zwiększa
    możliwości wykonywania tricków. Ten koncept może być z łatwością stosowany
    do wszystkich tricków topsin (Shadow, Backtap, etc.), kiedy
    <strong>Zombo</strong> dał pomysł Backaroundów używając dodatkowych palców w
    czasie tricku, które dodatkowo wspomagają wykonywanie go. Pytanie jest jak
    opisać takie rzeczy. Na szczęście, Research Department już ma notację
    pozwalającą opisać takie wykonywanie tricków. Używając część notacji hybryd,
    możemy opisać te dodatkowe pchnięcia w kompletnym tricku.
  </WideTextBlock>
  <TextBlock src="" alt="">
    <SubHeading text="Notacja" tag="h3" margin="" />
    <p>
      <strong>[p x]</strong> = „[p]” oznacza „pchnięcie”, jest umieszczane za
      nazwą tricku. Opisuje pchnięcie tricku. W miejsce X wstawiamy nazwy
      palca/palców używanych do pchnięcia, gdy jest to pchnięcie inne niż
      zazwyczaj.
    </p>
    <br />
    <SubHeading text="Przykład" tag="h3" margin="" />
    <p>Halftap T2-T2 z pchnięciem palcem 3.</p>
    <p><strong>Zapis formalny:</strong></p>
    <ul>
      <li>Halftap T2-T2[p 3][s 0.5][c]</li>
    </ul>
    <p><strong>Zapis nieformalny:</strong></p>
    <ul>
      <li>Halftap 0.5 T2-T2[p 3]</li>
    </ul>
  </TextBlock>
  <SubHeading text="Breakdowny" tag="h3" />
  <WideTextBlock>
    <ol>
      <li>Halftap T1-T1[p 2]</li>
      <li>Halftap T1-T1[p 2] (slow motion)</li>
      <li>Halftap T2-T2[p 3]</li>
      <li>Halftap T2-T2[p 3] (slow motion)</li>
      <li>Halftap T3-T3[p 4]</li>
      <li>Thumbaround > Halftap T3-T3[p 4] (slow motion)</li>
      <li>Halftap T3-T3[p 4] (slow motion)</li>
      <li>Halftap Reverse T2-T2[p 3]</li>
      <li>Halftap Reverse T2-T2[p 3] (slow motion)</li>
      <li>
        Thumbaround > Halftap Reverse T2-T2[p 3] > Fingerless Indexaround
        Reverse > Pass 12-23 > Fingerless Middlearound Reverse > Pass 23-34 >
        Fingerless Ringaround Reverse > Fingerless Pinkyaround Reverse
      </li>
      <li>Thumbaround > Halftap Reverse T2-T2[p 3] (slow motion)</li>
      <li>
        Thumbaround > Halftap T2-T2[p 3] > Fingerless Thumbaround > Fingerless
        Thumbaround Reverse > Thumbaround T3-T3 > Fulltap T3-T2[p 4] > Charge T2
        > Middlearound Reverse 0.5 T2-23 ~> Sonic Clip Reverse 23-34 > Sonic
        Clip 34-23 ~ Middlearound Reverse 24-23 > Charge 0.5 23 ~> Pass 23-12 >
        NeoSonic 12-T1 > Charge Reverse T1 > Fingerless Thumbaround Reverse >
        Pass T1-12 > Neobackaround 1.0 12-12 ~ Fingerless Middlearound Reverse
        1.5 12-12 > Fingerless Middlearound Reverse 1.5 12-12 > Fingerless
        Middlearound Reverse 12-12 > Charge Reverse 12 > Pass 12-23 > Charge 23
        > Pass Reverse 23-12 > Pass 12-T1 > Thumbspin 1.5 > Charge T1 >
        Indexaround 0.5 T1-12 > Charge Reverse 0.5 ~> Pass 12-23 > Middlearound
        23-23 > Middlearound Reverse 23-T1 > Charge Reverse T1 > Fingerless
        Thumbaround Reverse > Pass T1-12 > Neobackaround 1.0 12-23 > Fingerless
        Middlearound Reverse 12-12 ~ Fingerless Middlearound Reverse 0.5 12-23 >
        Fingerless Ringaround Reverse 23-23 ~ Fingerless Ringaround Reverse
        23-34 > Fingerless Pinkyaround Reverse 34-34.
      </li>
    </ol>
  </WideTextBlock>
  <SubHeading text="Rozszerzona notacja ręki" tag="h2" />
  <WideTextBlock>
    Kontynuując pracę Research Department, aby dokładniej opisać słownictwo w
    pen spinningu, <strong>Naming Committee</strong> zdecydowało, aby oficjalnie
    polecić użycie <strong>„P”</strong> i <strong>„B”</strong> w breakdownach
    comb, aby określić palm i back (wnętrze i wierzch) dłoni. Użycie tych dwóch
    terminów może pomóc w dokładniejszym opisaniu toru ruchu pena i
    zainspirowaniu do bardziej precyzyjnego opisu tricków/comb.
  </WideTextBlock>
  <TextBlock align="right" src="" alt="">
    <SubHeading text="Przykłady" tag="h3" margin="" />
    <ul>
      <li>
        <strong>Backaround P-12-T1</strong>: Backaround zaczyna się od
        swobodnego leżenia na dłoni, kręci się w slocie 12 i jest złapany w
        pozycji T1.
      </li>
      <li>
        <strong>Fingerless Middlearound P2-P2</strong>: pen położony jest
        pomiędzy palmem a palcem środkowym, pen wykonuje obrót dookoła palca,
        łapiemy w tej samej pozycji w której wystartowaliśmy.
      </li>
      <li>
        <strong>Backaround 0.5 12-B ~ Backspin 1.5 B</strong>: pchnięcie i
        obroty Backarounda na wierzchu dłoni, pen kręci się, aby końcowo złapać
        go backiem do góry.
      </li>
      <li>
        <strong>Backaround 12-B-T1</strong>: dodanie „B” do Backarounda
        dokładniej opisuje tor ruchu pena dookoła dłoni.
      </li>
      <li>
        <strong>Bakriser 12-B ~> Backhand Bounce B-P > Palm Bounce P-12</strong
        >: długopis kręci się na obu stronach dłoni.
      </li>
    </ul>
  </TextBlock>
  <ArticleFooter author="Krasnal, Rarka, Dercen." />
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
