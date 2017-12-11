var poems = [
  'Se fosse fácil não era para nós.',
  'É preciso ver que as contratações não são produtos acabados. A contratação que fazemos nunca é óbvia.',
  'Saída de Ederson? Não há drama. Se sair vamos à procura ou temos cá dentro.',
  'O presidente? É o Mestre de obras e nós fomos excelentes operários. É o coração do clube.',
  'O Jonas que no ano passado tinha sido o melhor marcador esta época já não o seria, pois já não tinha tempo. Como o motivei? - Ser decisivo.',
  'Disse-lhes que a nossa época não podia terminar sem ter os 3 troféus. Há 36 anos que não se fazia isso.',
  'Tenho de perceber como um jogador vive ou pensa. Não posso tratar todos por igual.',
  'O Benfica temos algo muito bom, que é a onda positiva, mas também o balão rebenta com muita facilidade. Vai enchendo e há um desaire a casa vai abaixo, nem tudo é preto ou branco.',
  'Festejos de Jiménez? Achei curioso embora como treinador não tenha gostado tanto, mas achei engraçado.',
  'Conseguimos fazer ver que esta final era importante, como se vivessem uma Liga dos Campeões. São realidades diferentes.',
  'Júlio César? Fui eu que agradeci ao Júlio, pela sua postura no grupo, sempre valorizado pelo grupo e pelo o que podia acrescentar. Lembrei-me de um jogo em que ele puxou do estádio que estava adormecido. É o primeiro a ajudar o Ederson.',
  'Isto não é como os iogurtes.',
  'Ser bom não é ser bonzinho, ser bom não é ser bombom.',
  'Desistência não entra no nosso vocabulário.',
  'Vamos defrontar um Ferrari, que até tem feito algumas modificações para ficar ainda melhor, enquanto nós, em contrapartida, somos um carro em rodagem, ainda a montar as peças.',
  'Isso não interessa para nada. Boa noite.',
  'Essas questões da confiança não têm nada de particular. É trabalhar dia a dia. Se quisesse outra carreira ia para a natação. Estava sozinho debaixo de água, batia com a cabeça na parede e voltava para trás.',
  'Não quero ser comido de cebolada, pois o Benfica merece respeito.',
  'Creio que por detrás de um grande treinador, como por detrás de um grande general, tem de estar, acima de tudo, uma grande pessoa.',
  'Um treinador é um exemplo e uma referência. Tenho de ser o primeiro a dar o exemplo. Se exijo o máximo aos meus jogadores, tenho de ser o primeiro a dar o máximo.',
  'Um bom jogador não deve ser visto simplesmente pelas suas qualidades futebolísticas. Deverá ser uma mistura de ‘corpo, mente e coração’ com talento e trabalho.',
  'Quando escolho jogadores para trabalharem comigo, procuro conhecer exaustivamente a sua personalidade, o seu estilo de vida, qual a sua trajetória em termos de vitórias e derrotas, como encaixa uma subida, uma descida.'
];

var catPoems = [
  'Meow.',
  'Meow meow.',
  'Meow meow meow.',
  'Meow meow meow meow.',
  'Meow!',
  'Meow meow!',
  'Meow meow meow!',
  'Meow meow meow meow!',
  'Meow?',
  'Meow? meow.',
  'Meow? meow meow.',
  'Meow? meow meow meow.',
  'Meow...',
  'Meow? meow...',
  'Meow? meow meow...',
  'Meow? meow meow meow...'
];

var cats = [
  'cat-1.jpeg',
  'cat-2.jpg',
  'cat-3.jpeg',
  'cat-4.jpeg',
  'cat-5.jpeg',
  'cat-6.jpeg',
  'cat-7.jpeg',
  'cat-8.jpeg',
  'cat-9.jpeg',
  'cat-10.jpeg',
  'cat-11.jpeg',
  'cat-12.jpg',
  'cat-13.jpeg',
  'cat-14.jpeg'
];

var rvs = [
  'rv-1.jpg',
  'rv-2.jpg',
  'rv-3.jpg',
  'rv-4.jpg',
  'rv-5.jpg',
  'rv-6.jpg',
  'rv-7.jpg',
  'rv-8.jpeg',
  'rv-9.jpg'
];

function selectPoem() {
  var poem;
  if (twilightZone) {
    poem = catPoems[Math.floor(Math.random()*catPoems.length)];
  } else {
    poem = poems[Math.floor(Math.random()*poems.length)];
  }

  $('#poem').text(poem);
}

function selectCat() {
  var item;
  if (twilightZone) {
    item = 'images/rv/' + rvs[Math.floor(Math.random()*rvs.length)];
  } else {
    item = 'images/cats/' + cats[Math.floor(Math.random()*cats.length)];
  }

  $('body').attr('style', "background-image: url('" + item + "');");
}

var twilightZone = false;

$(document).ready(function() {
  selectPoem();
  selectCat();

  $('.poetry-button').click(function() {
    twilightZone = false;

    selectPoem();
    selectCat();
  });

  $('.twilight-button').click(function() {
    twilightZone = true;

    selectPoem();
    selectCat();
  });
});
