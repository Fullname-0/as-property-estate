import { Typography, Box, Grid } from "@mui/material";
import type { NextPage } from "next";
import Banner from "../../components/banner/Banner";
import MainLayout from "../../layout/MainLayout";
import classes from "./privacy.module.css";

const PrivacyPolitics: NextPage = () => {
  return (
    <MainLayout>
      <Banner title="Polityka prywatności" />
      <Box component="main" sx={{ mx: "10%", my: "5%" }}>
        <Typography className={classes.privacy} variant="h5" align="center">
          1. Postanowienia ogólne
        </Typography>
        <Typography className={classes.privacy}>
          1. Niniejsza Polityka Prywatności zawiera informacje dotyczące zasad
          przetwarzania i ochrony danych osobowych podmiotów korzystających z
          serwisu (zwanymi dalej: „Użytkownikami”) będącego własnością firmy
          AS-Property, znajdującego się pod adresem www.as-property.com.pl
          (zwanym dalej „Serwisem”) oraz politykę plików cookies.
        </Typography>
        <Typography className={classes.privacy}>
          2. Administratorem danych osobowych zbieranych za pośrednictwem strony
          internetowej www.as-property.com.pl jest firma AS-Property, z siedzibą
          w Poznaniu przy ulicy Brzozowa 3, kod pocztowy 61-429, adres do
          korespondencji (e-mail): biuro@as-property.com.pl, zwanym dalej
          “Administratorem”.
        </Typography>
        <Typography className={classes.privacy} variant="h5" align="center">
          2. Cel i zakres zbierania danych
        </Typography>
        <Typography className={classes.privacy}>
          1. Przetwarzanie danych osobowych odbywa się na zasadach określonych w
          ustawie z dnia 10 maja 2018 r. o ochronie danych osobowych oraz w
          Rozporządzeniu Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
          kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
          przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
          takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie
          o ochronie danych).
        </Typography>
        <Typography className={classes.privacy}>
          2. Pozyskiwanie informacji o Użytkownikach Serwisu i ich zachowaniu
          odbywa się w następujący sposób: (a) poprzez dane wprowadzone
          dobrowolnie przez Użytkowników w formularzach elektronicznych
          zamieszczonych w Serwisie (w tzw. formularzu kontaktowym), (b) poprzez
          zapisywanie w urządzeniach końcowych plików cookies (tzw.
          „ciasteczka”).
        </Typography>
        <Typography className={classes.privacy}>
          3. Serwis zbiera wyłącznie informacje dobrowolnie podane przez
          Użytkowników, przy czym Serwis może zbierać ponadto informacje o
          parametrach połączenia (czas, adres IP).
        </Typography>
        <Typography className={classes.privacy}>
          4. Administrator dokłada szczególnej staranności w celu ochrony
          interesów osób, których dane dotyczą, a w szczególności zapewnia, że
          zbierane przez niego dane są: przetwarzane zgodnie z prawem, zbierane
          dla oznaczonych, zgodnych z prawem celów i niepoddawane dalszemu
          przetwarzaniu niezgodnemu z tymi celami, merytorycznie poprawne i
          adekwatne w stosunku do celów, w jakich są przetwarzane oraz
          przechowywane w postaci umożliwiającej identyfikację osób, których
          dotyczą, nie dłużej niż jest to niezbędne do osiągnięcia celu
          przetwarzania.
        </Typography>
        <Typography className={classes.privacy} variant="h5" align="center">
          3. Prawo kontroli, dostępu do treści swoich danych oraz ich
          poprawiania
        </Typography>
        <Typography className={classes.privacy}>
          1. Osoba, której dane dotyczą, ma prawo dostępu do treści swoich
          danych osobowych oraz prawo ich sprostowania, usunięcia, ograniczenia
          przetwarzania, prawo do przenoszenia danych, prawo wniesienia
          sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na
          zgodność z prawem przetwarzania, którego dokonano na podstawie zgody
          przed jej cofnięciem.
        </Typography>
        <Typography className={classes.privacy}>
          2. W celu realizacji uprawnień, o których mowa w pkt 1 można wysłać
          stosowną wiadomość e-mail na adres: biuro@as-property.com.pl
        </Typography>
        <Typography className={classes.privacy} variant="h5" align="center">
          4. Pliki &quot;Cookies&quot;
        </Typography>
        <Typography className={classes.privacy}>
          1. Pliki cookies zwane także „ciasteczkami” są to pliki tekstowe
          zapisywane i przechowywane w pamięci urządzenia wykorzystywanego do
          przeglądania stron internetowych (np. komputer PC, notebook, tablet,
          palmtop, telefon komórkowy). Z plikami tymi, po ich zapisaniu, łączy
          się serwer albo serwery uzyskując do nich odpowiedni dostęp.
        </Typography>
        <Typography className={classes.privacy}>
          2. Niniejsza strona internetowa www.as-property.com.pl oraz wszystkie
          jej podstrony korzystają z plików cookies wyłącznie w celach: (a)
          tworzenia zbiorczych statystyk i analiz, które ułatwiają zrozumieć, w
          jaki sposób używany jest Serwis oraz pomagają w jego rozwoju, (b)
          optymalizacji stron internetowych pod kątem różnych urządzeń i
          przeglądarek, (c) optymalizacji strony internetowej pod kątem animacji
          wykorzystywanych w serwisie, (d) mierzenia skuteczności prowadzonych
          akcji i działań reklamowych, a także dopasowania treści i form reklam,
          wyświetlanych zarówno na stronie Serwisu, jak i np. w sieci reklamowej
          Google. W związku z powyższym część danych może być przekazywana za
          pośrednictwem narzędzi, z których korzystamy, do zewnętrznych
          partnerów. Partnerzy mogą natomiast połączyć te dane z innymi
          informacjami otrzymanymi od Użytkownika lub przesłanymi za pomocą
          narzędzi, z których sam korzysta.
        </Typography>
        <Typography>
          3. Poprzez zmianę ustawień oprogramowania wykorzystywanego do
          przeglądania niniejszej strony internetowej www.as-property.com.pl i
          jej podstron, istnieje możliwość określenia warunków przechowywania
          oraz warunków uzyskiwania dostępu do plików cookies wykorzystywanych
          przez tę stronę i jej podstrony, w szczególności możliwość całkowitego
          wyłączenia ich obsługi.
        </Typography>
        <Typography className={classes.privacy}>
          4. W celu zmiany ustawień związanych z obsługą plików cookies należy
          odpowiednio skonfigurować oprogramowanie wykorzystywane do
          przeglądania niniejszej strony internetowej www.as-property.com.pl i
          jej podstron. Stosowne informacje w tym zakresie można uzyskać
          korzystając z pomocy technicznej dla takiego oprogramowania lub
          kontaktując się z jego dostawcą.
        </Typography>
        <Typography className={classes.privacy}>
          5. Brak zmiany ustawień oprogramowania wykorzystywanego do
          przeglądania niniejszej strony internetowej www.as-property.com.pl i
          jej podstron, stanowi w myśl art. 173 ust. 2 Ustawy prawo
          telekomunikacyjne wyrażenie zgody na korzystanie przez tę stronę i jej
          podstrony z plików cookies w celach wyżej określonych.
        </Typography>
        <Typography className={classes.privacy}>
          6. Osoba, której dane dotyczą, ma prawo dostępu do treści swoich
          danych osobowych oraz prawo ich sprostowania, usunięcia, ograniczenia
          przetwarzania, prawo do przenoszenia danych, prawo wniesienia
          sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na
          zgodność z prawem przetwarzania, którego dokonano na podstawie zgody
          przed jej cofnięciem.
        </Typography>
        <Typography className={classes.privacy}>
          7. W celu realizacji uprawnień, o których mowa w pkt 6 można wysłać
          stosowną wiadomość e-mail na adres: biuro@as-property.com.pl
        </Typography>
        <Typography className={classes.privacy} variant="h5" align="center">
          5. Postanowienia końcowe
        </Typography>
        <Typography className={classes.privacy}>
          1. Administrator stosuje środki techniczne i organizacyjne
          zapewniające ochronę przetwarzanych danych osobowych odpowiednią do
          zagrożeń oraz kategorii danych objętych ochroną, a w szczególności
          zabezpiecza dane przed ich udostępnieniem osobom nieupoważnionym,
          zabraniem przez osobę nieuprawnioną, przetwarzaniem z naruszeniem
          obowiązujących przepisów oraz zmianą, utratą, uszkodzeniem lub
          zniszczeniem.
        </Typography>
        <Typography className={classes.privacy}>
          2. Użytkownikom Serwisu przysługuje prawo dostępu do treści swoich
          danych osobowych oraz prawo ich sprostowana, ograniczenia
          przetwarzania danych, prawo do przenoszenia danych, usunięcia danych,
          prawo do wniesienia sprzeciwu oraz cofnięcia zgody w dowolnym momencie
          bez wpływu na zgodność z prawem przetwarzania, którego dokonano na
          podstawie zgody przed jej cofnięciem.
        </Typography>
        <Typography className={classes.privacy}>
          3. W celu realizacji uprawnień, o których mowa w pkt 2 można wysłać
          stosowną wiadomość e-mail na adres: biuro@as-property.com.pl
        </Typography>
        <Typography className={classes.privacy}>
          4. Postanowienia niniejszej Polityki Prywatności wchodzą w życie z
          dniem 1 stycznia 2020 roku.
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default PrivacyPolitics;
