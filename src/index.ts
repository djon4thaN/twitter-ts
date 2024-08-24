import { Tweet } from "./models/tweet";
import { User } from "./models/user";
import { Like } from "./models/like";  
import { Dislike } from "./models/dislike";  

//<--------------------- Criar usuários -------------------------------------->

const isabela = User.createUser("Isabella Drake", "IsaD", "niwap@hopuboc.ru", "Isa123ISA");
const bernice = User.createUser("Bernice Moreno", "Bern", "jih@fiwef.kz", "Bern123bern");
const sue = User.createUser("Sue Olson", "suO", "giwli@dabkuw.ps", "Sue123Oln");

//<--------------------- Criar tweets -------------------------------------->

const tweet1 = new Tweet("Primeiro tweet de IsaD", "Normal", isabela);
const tweet2 = new Tweet("Segundo tweet de IsaD", "Normal", isabela);
const tweet3 = new Tweet("Primeiro tweet de Bern", "Normal", bernice);
const tweet4 = new Tweet("Primeiro tweet de suO", "Normal", sue);
const like1 = new Like(isabela, tweet1);
const like2 = new Like(sue, tweet1);
const like3 = new Like(sue, tweet2);
const like4 = new Like(bernice, tweet1);
const like5 = new Like(bernice, tweet4);
const dislike1 = new Dislike(bernice, tweet2);
const dislike2 = new Dislike(sue, tweet1);

//<--------------------- Enviar tweets -------------------------------------->

isabela.sendTweet(tweet1);
isabela.sendTweet(tweet2);
bernice.sendTweet(tweet3);
sue.sendTweet(tweet4);

//<--------------------- Seguir usuários -------------------------------------->

bernice.follow(isabela);
bernice.follow(sue);

//<--------------------- Curtir tweets -------------------------------------->

like2.showReaction();
like3.showReaction();
like4.showReaction();
like5.showReaction();
like1.showReaction();

//<--------------------- Dislike em tweets ---------------------------------->

dislike1.showReaction();
dislike2.showReaction();

//<--------------------- Responder tweets -------------------------------------->

tweet1.reply("Primeira resposta para o tweet", isabela);
tweet1.reply("Segunda resposta para o tweet", sue);
tweet1.reply("Segunda resposta para o tweet", bernice);

//<--------------------- Mostrar feeds -------------------------------------->
bernice.showFollowers();

bernice.showFeed();
isabela.showFeed();
sue.showFeed();
