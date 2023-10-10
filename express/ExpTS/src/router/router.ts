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

router.get('/hb1', (req: Request, res: Response) => {
  res.render('hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
    layout: false,
  });
});

router.get('/hb2', (req: Request, res: Response) => {
  res.render('hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
  });
});

router.get('/hb3', (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];

  res.render('hb3', { profes, layout: false });
});

router.get('/hb4', (req: Request, res: Response) => {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];

  res.render('hb4', { technologies, layout: false });
});

router.get('/hb5', (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];

  res.render('hb5', { profes, layout: false });
});

export default router;
