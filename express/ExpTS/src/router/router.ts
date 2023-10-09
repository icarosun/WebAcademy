import { Request, Response, Router } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

router.get('/sobre', (req: Request, res: Response) => {
  res.end('Bem-vindo à página sobre!');
});

router.get('/bemvindo/:nome', (req: Request, res: Response) => {
  res.end(`Seja bem vindo ${req.params.nome}`);
});

router.get('/lorem/:numParagraph', (req: Request, res: Response) => {
  const numParagraph = req.params.numParagraph as string;

  res.end(
    loremIpsum({
      count: parseInt(numParagraph), // Number of "words", "sentences", or "paragraphs"
      format: 'html', // "plain" or "html"
      paragraphLowerBound: 3, // Min. number of sentences per paragraph.
      paragraphUpperBound: 7, // Max. number of sentences per paragarph.
      random: Math.random, // A PRNG function
      sentenceLowerBound: 5, // Min. number of words per sentence.
      sentenceUpperBound: 15, // Max. number of words per sentence.
      suffix: '\n', // Line ending, defaults to "\n" or "\r\n" (win32)
      units: 'paragraphs', // paragraph(s), "sentence(s)", or "word(s)"
    }),
  );
});

export default router;
