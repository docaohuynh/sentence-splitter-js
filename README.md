# sentence-splitter

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Usage:

```
import { LanguageCode, splitSentenceByLanguge } from '@docaohuynh/sentence-splitter';
const splited = splitSentenceByLanguge('text', LanguageCode.EN)
```

link local:

```
bun link
bun link @docaohuynh/sentence-splitter

npm publish --access public

```

