<script setup>
import BackgroundLines from "../../UI/BackgroundLines.vue";
import Navbar from "../../UI/Navbar.vue";
import Footer from "../../UI/Footer.vue";

import Heading from "../../templates/articleParts/ArticleHeading.vue";
import WideTextBlock from "../../templates/articleParts/WideTextBlock.vue";
import SubHeading from "../../templates/articleParts/SubHeading.vue";
import TextBlock from "../../templates/articleParts/TextBlock.vue";
import ArticleFooter from "../../templates/articleParts/ArticleFooter.vue";

import styleImg from "../../../assets/styl-img.jpg";
import styleImg1 from "../../../assets/styl1-img.jpg";
import styleImg2 from "../../../assets/styl2-img.jpg";
import styleImg3 from "../../../assets/styl3-img.jpg";

import { useRouter } from "vue-router";
</script>

<template>
  <Navbar />
  <BackgroundLines />
  <Heading
    title="Styl w Pen spinnigu - O stylu w Pen spinningu słów kilka"
    topic="Styl"
    context="Nerd Talk"
  />
  <SubHeading text="Czym tak naprawdę jest styl?" tag="h3" />
  <WideTextBlock>
    Nie raz przeglądając filmy pen spinnerów natykamy się na wszelkie komentarze
    wychwalające lub potępiające styl kręcenia danego pen spinnera. Czym jest
    styl w pen spinningu? Czy w ogóle istnieje coś takiego w tej dziedzinie
    żonglerki? Spróbuję się zmierzyć z wyzwaniem jakim jest określenie tego
    zjawiska, mimo, że każdy ma na ten temat inne zdanie.
  </WideTextBlock>
  <TextBlock align="right" :src="styleImg1" alt="zdjęcie dłoni pen spinnera">
    <p>
      W codziennym życiu mówiąc styl, pierwszym skojarzeniem jest sposób bycia,
      ubierania się. Często mówi się „On to ma styl” chwaląc czyjś sposób
      podejścia do życia. Czy styl jest nam potrzebny w codzienności, a także i
      w pen spinningu? Odpowiedź jest twierdząca. Każdy z nas chce się wyróżniać
      z tłumu, dzięki czemu mamy różnorodność na świecie. Każdy wygląda inaczej,
      inaczej się zachowuje, inaczej został wychowany. Czy chcemy czy nie, każdy
      z nas posiada swój styl życia. Jedni w ogóle o nim nie myślą, inni go
      pielęgnują, chcą sprawić aby był jak najbardziej unikatowy. Czy każdy może
      mieć swój styl kręcąc długopisem? Ja uważam, że tak, a tworzy się on już
      na samym początku naszej 'kariery'.
    </p>
    <SubHeading text="Jak powstaje styl?" tag="h3" margin="" />
    <p>
      Oglądając filmy jako laicy, nie rozróżnialiśmy pen spinnerów. Być może
      poznalibyśmy ich po otoczeniu w jakim nagrywali, ale gdyby każdego z nich
      nagrać na jednolitym czarnym tle i pod tym samym kątem, niewielu byśmy
      mogli wskazać. Dopiero zaczynając naukę kręcenia i oglądając różnorakie
      filmy zaczynamy pojmować czym naprawdę jest pen spinning. Zaczynamy
      dostrzegać że każdy może być unikatowy, z powodu różnorodności trików i
      ich sposobu wykonania. I już wtedy, ucząc się fundamentali, czy tego
      chcemy czy nie, nabywamy styl
    </p>
    <br />
    <p>
      Wszystko zaczyna się od tego, że widzimy jakąś osobę kręcącą
      <strong>na żywo</strong>, bądź na filmie. Od razu rodzi się pragnienie
      żeby tego się nauczyć, więc szukamy filmów instruktażowych.
    </p>
  </TextBlock>
  <TextBlock :src="styleImg2" alt="zdjęcie dłoni pen spinnera">
    <p>
      Oglądając tutorial pierwszego uczonego się przez nas triku nie
      zastanawiamy się nad tym że trik ten możemy wykonać na
      <strong>100 różnych</strong>
      sposobów. Interesuje nas przede wszystkim to, aby wreszcie wyszedł, po
      tylu godzinach treningu. Nie zdajemy sobie więc sprawy z tego, że ucząc
      się z tutoriali pewnego pen spinnera zaczynamy wykonywać triki w ten sam
      sposób jak on. Przynajmniej na początku, gdy nie potrafimy jeszcze składać
      comb, kopiujemy jak przez kalkę wszystkie ruchy. Takich nawyków nie da się
      potem zapomnieć. A motywacją do nauki trików praktycznie zawsze jest to,
      aby kręcić tak płynnie i długo jak ci z filmów, bądź znajomi ze szkoły.
      Dlatego bardzo ważnym procesem tworzącym styl jest oglądanie filmów. Im
      więcej czystego spinningu zobaczymy w wykonaniu pen spinnerów z całego
      świata, tym większe dostrzegamy różnice. Zaczynają nam się podobać
      konkretni pen spinnerzy, być może triki, nie wiadomo skąd, ale preferujemy
      pewien typ i rodzaj spinningu. Być może wolny, może i szybki, każdy lubi
      coś innego.
    </p>
    <br />
    <p>
      Oglądanie filmów pen spinnerskich i tutoriali wpływa również na
      <strong>postrzeganie właściwego dla nas pen spinnigu</strong>. Chodzi
      głównie o gusta. Patrząc na film, zmierzamy w tym kierunku który nam się
      podoba z poziomu widza. I tak oglądając filmy wizualizujemy sobie to, jak
      byśmy chcieli aby nasz pen spinning wyglądał. Dlatego styl można wyrobić
      sobie już na samym początku kariery i nawet nie musimy o tym myśleć.
    </p>
    <br />
    <p>
      Na podświadome wybory jakich dokonujemy oglądając filmy ma wpływ nasz styl
      i sposób bycia na co dzień. To czy będzie nam się podobał pen spinning
      taki a nie inny zależy przede wszystkim od etapu życia na jakim jesteśmy
      oraz naszego charakteru. Tak jak w codzienności, tak i w pen spinningu
      chcemy się odnaleźć. I w zależności od cech osobowości, w tą stronę
      pójdziemy. Inny styl wybierze osoba która zaczyna kręcić w wieku 13 lat, a
      inny osoba w wieku lat 20. Co innego będzie się podobało osobie spokojniej
      i cichej, co innego osobie ekscentrycznej i żywiołowej. Starsza osoba może
      pokazywać pen spinning dojrzały i przemyślany, a osoba młodsza, bardzo
      chaotyczny. Chociaż oczywiście i tutaj nie ma reguły, wszystko zależy od
      podejścia i możliwości psychicznych, mentalnych, czy cech charakteru.
    </p>
  </TextBlock>
  <SubHeading text="Z czego składa się styl?" tag="h2" />
  <WideTextBlock
    >Na to pytanie ciężko jednoznacznie i prosto odpowiedzieć. Ale wg mnie na
    styl ma wpływ ogół czynników w jakich prezentuje się każdy z pen spinnerów.
    Znaczy to mniej więcej tyle, że nawet błahostki sprawią, że komuś spodoba
    się nasze kręcenie, albo i nie. Często na spotkaniach ludzie mówią do
    siebie, że wolą gdy jakiś pen spinner kręci na żywo, a inni, że wolą go
    oglądać w Internecie. W czym rzecz? Prosta sprawa. Na styl ma wpływ nie
    tylko sposób wykonywania trików ale i rodzaj połączeń, ewolucje standardowe,
    wykonywane przez pen spinnerów w każdym combie, po których można ich łatwo
    rozpoznać, (nazywane często spamem) oraz kąt nagrywania. Ta ostatnia cecha
    często ma wpływ największy, mimo, że rodzaj i sposób wykonywanych trików
    będzie ten sam. Kąt nagrywania nie jest bezpośrednio związany z wykonywaniem
    trików, a ma taki sam wpływ na emocje widza jak kolor długopisu, tło,
    otoczenie, oświetlenie, jakość nagrania. Te wszystkie cechy, które nie
    istnieją, gdy oglądamy kogoś kręcącego na żywo, oraz te związane
    bezpośrednio z kręceniem, łączą się, tworząc spójny obraz pen spinnera,
    który można nazwać <strong>stylem.</strong> I czasem wystarczy zmienić tylko
    jedną cechę nagrywając combo, nawet nie tą stricte związaną z pen
    spinningiem, aby widz mógł powiedzieć, że dany pen spinner zmienił swój
    styl. Oczywiście oko bardzo wprawnego widza potrafi odróżnić nowy styl, od
    wszystkich dodatków, ale są to osoby nieliczne, ponieważ jest to bardzo
    trudne.
  </WideTextBlock>
  <WideTextBlock>
    Bardzo ważnym aspektem na jaki składa się styl, jest długopis którym każdy
    pen spinner kręci. Inaczej odbieramy jednolite i długie długopisy, a inaczej
    krótkie jednostronne modyfikacje. Równie ważny wpływ ma to od strony osoby
    kręcącej. Ktoś kręcący ciężką modyfikacją inaczej będzie się prezentował niż
    osoba, kręcąca lekkim długopisem. Wiele osób twierdzi, że styl można sobie
    wyrobić kręcąc ciągle tym samym np. lekkim, lub krótkim długopisem. Jest to
    tylko częściowa prawda. Z jednej strony, nauczymy się wykonywać trik lekkim
    długopisem i będziemy próbowali to zastosować na każdym. Z drugiej strony
    jednak, często jest to kwestia czasu i przyzwyczajenia. Nie da się kręcić
    ciężkim długopisem tak samo jak lekkim, z powodu innych parametrów
    fizycznych, dlatego prędzej lub później będziemy zmuszeni do zmiany sposobu
    wykonywania trików, tak aby był dla nas jak najbardziej wygodny.
  </WideTextBlock>
  <TextBlock
    align="right"
    :src="styleImg"
    alt="Zdjęcie pen spinnera na czarnym tle"
  >
    <SubHeading text="Dlaczego ciężko mówić o stylu?" tag="h3" margin="" />
    <p>
      Jeszcze nie tak dawno, bo parę lat temu nikt nie używał takiego pojęcia
      jak styl. Raczej mówiło się, że ktoś jest po prostu
      <strong>dobry</strong>, albo <strong>słaby.</strong> I wynikały z tego
      nieporozumienia, ponieważ o stylu tak jak o gustach się nie dyskutuje.
      Ciężko jest jasno określić czym styl tak naprawdę jest, niektórzy mylą go
      błędnie z płynnością, która jest tylko jego składową. Trudno jest go też
      zdefiniować od strony wielkich umiejętności pen spinnera. Jeżeli mamy
      powiedzmy na to światowej klasy kręcącą osobę, która wprowadza do
      społeczności nowe formy, których nikt wcześniej nie wykonywał, to
      oglądając często nie możemy wyjść z podziwu dla tego co zrobił. I teraz,
      gdy komuś zaimponował, to czym: umiejętnościami, nowymi trikami, czy
      stylem? Czy można więc styl przyrównać do umiejętności? Tutaj rodzi się
      sprzeczność. Czy osoba kopiująca właśnie tylko triki tego pen spinnera
      przejmuje automatycznie jego styl, mimo, że wykonuje te triki w zupełnie
      inny sposób? Czy grupa osób kręcąca tym samym długopisem co idol,
      przejmuje zawsze jego styl?
    </p>
    <SubHeading text="Dwa podejścia" tag="h3" margin="" />
    <p>
      Z moich obserwacji wynika, że wiele osób wpada w
      <strong>wir maszynki stylowej.</strong>
      Jak już wcześniej pisałem, oglądane filmy wpływają na nasz styl, ponieważ
      staramy się jak najbardziej upodobnić do lepszych od nas, po prostu do
      idoli. Takie podejście nazwałem sobie podejściem odtwórczym. Próbujemy
      kopiować w największym stopniu wszystko co widzimy na ekranie. I mimo, że
      jesteśmy już bardziej zaawansowanymi pen spinnerami, którzy nie wpadają w
      kalkę tutoriali, (jak pisałem wcześniej) próbujemy upodobnić się,
      odwzorować w 100 procentach np. japońskich pen spinnerów. Niektórzy
      uważają to podejście za jedyne słuszne, przez co niestety duszą w sobie
      swoją kreatywność. Oczywiście, na początku kręcenia każdy chciał „kręcić
      jak on” ale była to tylko motywacja, która powinna się przerodzić w
      satysfakcję z wymyślania i kreowania własnego stylu. Nie przeczę, że wielu
      osobom sprawia to radość, gdy upodobnią się do danego pen spinnera, tak,
      że nie da się odróżnić dwóch comb. Podejście odtwórcze nie jest przeze
      mnie potępianie, jeżeli tylko sprawia komuś satysfakcję. Jednakże dla mnie
      od tego sposobu kręcenia bije sztuczność, często wymuszana w postaci
      długich rękawów, długich paznokci, słabego oświetlenia. Aż dziw bierze,
      gdy słucha się pen spinnerów twierdzących, że ich comba bardziej stylowo
      wyglądają gdy prawie nic na nich nie widać, gdy długopis prawie że zahacza
      o rękaw, a długie paznokcie uniemożliwiają wykonywanie prostych trików.
      Cechy normalne, np. u Japońskich penspinnerów, jak na przykład weźmy te
      paznokcie, które są częścią ich kultury (długie oznaczają zamożność w
      Japonii) w Polsce wyglądają co najmniej śmiesznie. Gdy pen spinner z
      przyczyn obiektywnych nie może sobie pozwolić na lepszą jakość nagrania z
      powodu starej kamerki, to ten próbujący go odwzorować będzie tylko
      żałośnie wyglądał próbując obniżać jakość nagrania.
    </p>
    <br />
    <p>
      Bardziej ambitne jest <strong>podejście kreatywne</strong>, które pozwala
      zrzucić z siebie ciężar starań o to aby wszystko było odwzorowane w stu
      procentach. Często jest tak, że nie dorównamy komuś, ze względu na brak
      predyspozycji. Podejście pierwsze w tym wypadku zrodzi tylko frustrację, a
      drugie pomoże obejść problem, który od razu staje się atutem. Czy nie
      lepiej być unikalnym a przez to lepiej rozpoznawalnym? Czy nie lepiej jest
      wtedy, gdy ludzie identyfikują twój sposób kręcenia tylko i wyłącznie z
      tobą? Filmy innych osób powinny być dla ciebie inspiracją. Gdy kopiujesz,
      pokazujesz, że nie stać cię na to, aby wymyślić coś lepszego. Podejście
      kreatywne wymaga dużo więcej czasu i energii ale i satysfakcja jest
      <strong>większa.</strong> Większa, bo masz pewność, że to co stworzyłeś
      jest tylko i wyłącznie twoje. A sukces odniesiesz jeszcze większy wtedy,
      gdy to komuś innemu spodoba się twój sposób patrzenia na pen spinning i
      zaczerpnie inspiracji, lub zacznie go totalnie kopiować. Penspinnerzy
      pionierzy, którzy rozwijali tą dziedzinę sportu, wcale nie myśleli, że
      koniecznie muszą kręcić stylowo, nie próbowali wyglądać tak jak ktoś inny.
      Po prostu kręcili tak, jak im się podobało w danej chwili. I taka jest
      recepta na podejście do stylu.
      <strong
        >Kręć tak, jak ci wygodnie, kręć tak, aby to tobie podobało się
        combo.</strong
      >
      Ustaw kamerę w takim miejscu jakie jest dla ciebie najlepsze.
    </p>
  </TextBlock>
  <TextBlock :src="styleImg3" alt="zdjęcie dłoni pen spinnera">
    <SubHeading text="Warto się skupiać na stylu?" tag="h3" margin="" />
    <p>
      Warto jest swój styl <strong>tworzyć</strong>, nie da się ćwiczyć stylu.
      Trzeba pamiętać, że styl istnieje zawsze, nie da się powiedzieć, że ktoś
      musi poćwiczyć styl. I nie warto się nad nim rozwodzić, jako, że
      udowodniłem, że styl tworzy się sam i nie warto nawet o tym myśleć.
      Szczególnie w pierwszych miesiącach swojej przygody jako pen spinnera. Do
      pewnego momentu, gdy nie ma się opanowanego szerszego spektrum trików,
      ciężko cokolwiek powiedzieć o tym, czy ktoś ma styl unikalny czy nie.
      Warto jest ćwiczyć nowe nieznane dla siebie przejścia, ale tylko te, które
      sprawiają satysfakcję. Działa to na bardzo prostej zasadzie, jeżeli coś
      pasuje w danym miejscu, to tam wstawiasz i to tylko od ciebie zależy.
      Takie podejście sprawa dużo radochy, gdy combo działa po twojej myśli. I
      nie ważne, że ktoś ci powie, że widział już takie połączenie, skoro ty go
      nie widziałeś, ale sam do niego doszedłeś. Takie coś jest o wiele lepsze,
      ponieważ sprawia, że się rozwijasz. Oczywiście warto jest przyjmować
      krytykę niż zamykać się w swoim własnym światku, nie popadajmy w
      skrajności.
    </p>
    <SubHeading
      text="Czy polscy pen spinnerzy posiadają swój unikalny styl?"
      tag="h3"
      margin=""
    />
    <p>
      Wielu penspinnerów go posiada, choć wcale o tym nie wie. Zapatrzeni w inne
      boardy zatracili się, czują się gorsi a wcale tacy nie są. Próbując gonić
      ten wyścig szczurów, tracą to co jest najważniejsze – zabawę. Pen spinning
      powinien być uprawiany dopóki sprawia satysfakcję. I tą satysfakcja
      powinna wypływać z poczucia swojej wartości, z poczucia wyjątkowości.
      Niech wreszcie zaczną mówić, że Polacy mają swój własny unikalny styl!
    </p>
    <br />
    <p>
      <strong
        >A dla Ciebie, czym tak naprawdę jest styl w pen spinningu?</strong
      >
    </p>
  </TextBlock>
  <ArticleFooter author="Piotr Paruch – Pari" align="right" />
  <Footer />
</template>

<style lang="scss" scoped>
@use "../../../styles/base.scss" as *;
</style>
