import { Request, Response } from 'express';
import { loremIpsum } from 'lorem-ipsum';

const index = (req: Request, res: Response) => {
  res.send('Welcome to Web academy');
};

const sobre = (req: Request, res: Response) => {
  res.end('Bem-vindo à página sobre!');
};

const bemvindo = (req: Request, res: Response) => {
  res.end(`Seja bem vindo ${req.params.nome}`);
};

const lorem = (req: Request, res: Response) => {
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
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    uf: 'Universidade Federal do Amazonas',
  });
};

const hb2 = (req: Request, res: Response) => {
  res.render('main/hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
  });
};

const hb3 = (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];

  res.render('main/hb3', { profes });
};

const hb4 = (req: Request, res: Response) => {
  const technologies = [
    { name: 'Express', type: 'Framework', poweredByNodejs: true },
    { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
    { name: 'React', type: 'Library', poweredByNodejs: true },
    { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
    { name: 'Django', type: 'Framework', poweredByNodejs: false },
    { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
    { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
  ];

  res.render('main/hb4', { technologies });
};

const hb5 = (req: Request, res: Response) => {
  const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 },
  ];

  res.render('main/hb5', { profes });
};

const pageWithImage = (req: Request, res: Response) => {
  res.render('main/pageWithImage');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};

export default {
  index,
  sobre,
  bemvindo,
  lorem,
  hb1,
  hb2,
  hb3,
  hb4,
  hb5,
  pageWithImage,
};
