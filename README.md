# Translator Liczb Cysterciańskich

Aplikacja webowa do tłumaczenia liczb arabskich (0–9999) na cyfry cysterciańskie.

## Funkcje

- **Tłumaczenie w czasie rzeczywistym** — glif aktualizuje się na bieżąco podczas wpisywania
- **Walidacja wejścia** — akceptuje tylko liczby całkowite z zakresu 0–9999
- **Eksport SVG** — pobieranie glifu jako pliku SVG
- **Dostępność** — zgodność z WCAG: poprawna hierarchia nagłówków, ARIA labels, `role="img"`, `aria-live` na dynamicznej treści
- **Responsywność** — układ dwukolumnowy na desktop, jednokolumnowy na mobile

## Stos technologiczny

- React 19 + TypeScript + Vite 8
- Tailwind CSS v4
- Vitest
- Gemini do tworzenia SVG (finalnie nie skorzystałem)
- W trakcie pracy z kodem wspomagałem się Claude Codem

## Uruchomienie

Wymaga Node.js >= 22.12. Jeśli używasz nvm:

```bash
nvm use
```

```bash
npm install
npm run dev
```

```bash
npm test        # testy jednostkowe
npm run build   # build produkcyjny
```

## Jak działa logika glifów

Każda cyfra cysterciańska jest zbudowana wokół pionowego masztu. Cyfra składa się z maksymalnie czterech grup segmentów, każda odpowiadająca innemu rzędowi wielkości:

| Pozycja    | Kwadrant    | Transformacja        |
| ---------- | ----------- | -------------------- |
| Jedności   | prawy górny | brak (base)          |
| Dziesiątki | lewy górny  | odbicie względem X   |
| Setki      | prawy dolny | odbicie względem Y   |
| Tysiące    | lewy dolny  | odbicie względem X+Y |

Bazowe kształty dla cyfr 1–9 zdefiniowane są raz (prawy górny kwadrant), a odpowiednie transformacje geometryczne generują pozostałe kwadranty automatycznie.

## Proces powstawania

Zadanie początkowo wydało mi się dość wymagające, niecodziennie dostaje się zadanie do tłumaczenia glifów. Pierwsze podejście polegało na szukaniu gotowych SVG glifów z myślą o ułożeniu ich obok siebie, potem gdy zrozumialem ich schemat myślałem o nakładaniu ich na siebie z użyciem `position: absolute` (prawy górny → jedności, lewy górny → dziesiątki itd.).

W trakcie pracy z Gemini przy generowaniu SVG zrozumiałem, że wystarczy zdefiniować kształty dla cyfr 1–9, a cała reszta to matematyczne transformacje — odbicia względem osi X i Y, więc nie musiałem wcale generować osobnych segmentów dla dziesiątek czy setek a wystarczy te same kształty odpowiednio obrócić i przesunąć kodem.

Rozbicie całego zadania na małe, niezależne kroki pozwoliło mi pełne zrozumienie założeń zadania.

## Podsumowanie

Miłe uczucie nauczyć się czegoś nowego — nawet jeśli jest to system liczbowy mnichów z XIII wieku. Przy okazji dobrze było sobie przypomnieć pracę z pobieraniem plików i operacjami na SVG, które na co dzień nie trafiają się zbyt często.

Dodałem dodatkowo testy jednostkowe — uznałem te transformacje za dobre miejsce na testy, które naprawdę coś weryfikują, a nie są tylko formalnością.

Po pierwszym przeczytaniu zadania nie byłem pewien, czy wyrobię się w wyznaczonym czasie, bo temat był niecodzienny. Ale rozbicie go na małe kroki sprawiło, że z pozornie trudnego stało się całkiem przyjemnym problemem do rozwiązania.
