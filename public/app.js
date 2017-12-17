var poems = [
  'Se fosse fácil não era para mim.',
  'Estas coisas são para campeões, se fosse fácil não era para nós.',
  'É preciso ver que as contratações não são produtos acabados. A contratação que fazemos nunca é óbvia.',
  'Saída de Ederson? Não há drama. Se sair vamos à procura ou temos cá dentro.',
  'O presidente? É o Mestre de obras e nós fomos excelentes operários. É o coração do clube.',
  'O Jonas que no ano passado tinha sido o melhor marcador esta época já não o seria, pois já não tinha tempo. Como o motivei? - Ser decisivo.',
  'Disse-lhes que a nossa época não podia terminar sem ter os 3 troféus. Há 36 anos que não se fazia isso."',
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
  'Quando escolho jogadores para trabalharem comigo, procuro conhecer exaustivamente a sua personalidade, o seu estilo de vida, qual a sua trajetória em termos de vitórias e derrotas, como encaixa uma subida, uma descida.',
  'Prometo dar a vida por este clube.',
  'Não vou dizer que é fácil, nem que é impossível. Vamos à luta.',
  'Se calhar o momento agora é para ganhar e, depois disso, haverá tempo para melhorar em termos de qualidade.',
  'Esta prova não correu como queríamos mas já não há nada a fazer.',
  'Neste grupo existe essa grande dose de confiança e amizade entre todos.',
  'Foi uma sensação de alegria de regresso ao trabalho muito positiva.',
  'Vamos buscar estes pontos a qualquer lado.',
  'Não vejo árbitros zangados com os treinadores ou com os jogadores.',
  'São fases que as equipas atravessam.',
  'A crença é muita.',
  'O segundo golo é atípico, a bola aparece na nossa baliza do nada.',
  'Se calhar, há uma semana pensava-se que aqui seria o enterro do Benfica. Não é de certeza, não vai ser e estamos na luta até ao final.',
  'O Cavalo passa à porta de toda a gente durante a época.',
  'Ter momentos tristes faz parte da vida das equipas.',
  'Uma mensagem de muita esperança.',
  'Esta é a nossa forma de estar e é assim que vamos continuar a trabalhar.',
  'Temos uma vontade muito grande de jogar e de vencer.',
  'Queremos treinar menos e jogar mais.',
  'Respondo e falo com quem quero, quando quero e quando a minha cabeça decide.',
  'Foi uma vitória justa sobre uma belíssima equipa.',
  'O regresso ao trabalho é para se trabalhar. Entra-se num comboio que já não pára até Maio do próximo ano.',
  'Além do jogador, tenho de conhecer o homem. Às vezes precisam de um abraço, outras de uma marretada nas costas.',
  'Amanhã teremos um adversário que nos vai querer ganhar, mas vamos entrar convictos do que teremos de fazer para trazer os 3 pontos.',
  'Foi uma partida bem disputada entre duas equipas que sabiam que obrigatoriamente uma ia ficar pelo caminho.',
  'Não se ganha 5-0 em todos os jogos.',
  'A nossa grande ambição é somar mais três pontos.',
  'Não quisemos correr riscos, a temperatura estava realmente muito baixa.',
  'Há jogos que têm de ser ganhos e outros que têm de ser jogados.',
  'Senti alguma mágoa pelo que estava a acontecer, mas depois senti uma grande esperança.',
  'Temos um estádio lindíssimo, com uma envolvência sem igual.',
  'Todos os ciclos são feitos por períodos de tempo.',
  'Esta boa disposição é meio caminho andado para se ser melhor profissional.',
  'Só não tem decepções quem não vive os momentos.',
  'Há vida para além da Liga dos Campeões.',
  'Qualquer dia tenho de escrever um livro de tauromaquia.',
  'Nós estamos de bem com a vida. Enfrentamos todos os momentos com a mesma alegria. Só assim estaremos mais próximos da vitória.',
  'Quem joga e quem não joga tem a minha inteira confiança.',
  'Amanhã, jogarão aqueles que eu achar que poderão dar uma melhor resposta em campo.',
  'Temos capacidade para fazer mais.',
  'O jogo pede que nós façamos determinados comportamentos em determinados momentos.',
  'A hora e meia de treino talvez seja o menos importante.',
  'Pode haver um jogo ou outro que corre pior, pode demorar um pouco mais a afinar processos, mas tudo vai ficar no ponto.',
  'Trouxe-nos um grande sentimento de revolta e de injustiça.',
  'O sistema de jogo não é o mais importante.',
  'O futebol é a paixão do povo.',
  'A bola vai entrar naquela baliza e vamos fazer tudo para ganhar o jogo.',
  'É muito fácil quando se está sempre a ganhar.',
  'Não acreditamos em bruxas, mas parece que existem.'
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
  'Meow? meow meow meow...',
  'Meoooooooow',
  'Grrrrrrrrr Meow?',
  'Grrrrrrrrr Grrrrrrrrr Grrrrrrrrr',
  'Grrrrrrrrr',
  'Grrrrrrrrr Grrrrrrrrr',
  'Grrrrrrrrr!'
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
  'cat-14.jpeg',
  'cat-15.jpeg',
  'cat-16.jpeg',
  'cat-17.jpg',
  'cat-18.jpeg',
  'cat-19.jpeg',
  'cat-20.jpeg',
  'cat-21.jpeg',
  'cat-22.jpeg'
];

var rvs = [
  'rv-1.jpeg',
  'rv-2.jpg',
  'rv-3.jpg',
  'rv-4.jpg',
  'rv-5.jpeg',
  'rv-6.jpeg',
  'rv-7.jpg',
  'rv-8.jpeg',
  'rv-9.jpg',
  'rv-10.jpeg',
  'rv-11.jpeg',
  'rv-12.jpeg',
  'rv-13.jpeg',
  'rv-14.jpeg',
  'rv-15.jpeg',
  'rv-16.jpg',
  'rv-17.jpg',
  'rv-18.jpeg',
  'rv-19.jpg',
  'rv-20.jpg',
  'rv-21.jpg',
  'rv-22.jpg',
  'rv-23.jpg',
  'rv-24.jpg',
  'rv-25.jpg',
  'rv-26.jpg',
  'rv-27.jpg',
  'rv-28.jpg',
  'rv-29.jpg',
  'rv-30.jpg',
  'rv-31.jpg',
  'rv-32.jpg',
  'rv-33.jpg',
  'rv-34.jpg',
  'rv-35.jpg',
  'rv-36.jpg',
  'rv-37.jpg'
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
