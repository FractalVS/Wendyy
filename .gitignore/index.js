const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = (">");
var randnum = 1;

bot.on('ready' , () => {
    console.log('Bot Ready !');
});

bot.login('MzkxNDIyNTIyMDk4NDUwNDMz.DRYcLQ.QL_g-t24JmMVcmDKzRmIW_LQjQ0');

bot.on('message' , message =>{
    if(message.content === `${prefix}luv`){
        var var1 =["https://imgur.com/bVg1YcR.gif", "https://imgur.com/aNQSun5.gif", "https://imgur.com/LC8HX9y.gif"]
        var luv_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setDescription("❤ Awwwwwh so cute")
            .setImage(var1[Math.floor(Math.random() *var1.length)])
            message.channel.send(luv_embed);
    }
    
        if(message.content.startsWith(prefix+'café')){
        if(!message.mentions.members.first())return;
        message.delete()
        var personne1 = message.author.username
        var personne2 =message.mentions.members.first()
    
        var café_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setTitle(`${personne1} a fait un café pour ${personne2.user.username}`)
            .setImage('https://imgur.com/vkgo57w.gif')
        message.channel.send(café_embed)
    }
    
    if(message.content.startsWith(prefix+'choco')){
        if(!message.mentions.members.first())return;
        message.delete()
        var personne1 = message.author.username
        var personne2 =message.mentions.members.first()
    
        var choco_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setTitle(`${personne1} a fait un chocolat bien chaud pour ${personne2.user.username}`)
            .setImage('https://imgur.com/WRfiCRj.gif')
        message.channel.send(choco_embed)
    }

    if(message.content === `${prefix}sing`){
        var var1 =["https://i.imgur.com/lTIl4o3.gif", "https://imgur.com/kmYJLbV.gif", "https://imgur.com/hxdY4k9.gif", "https://imgur.com/5OmoqcU.gif"]
        var sing_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setDescription(message.author.toString() + "  Chante joyeusement ! ")
            .setImage(var1[Math.floor(Math.random() *var1.length)])
            message.channel.send(sing_embed);
    }

    if(message.content === `${prefix}happy`){
        var var1 =["https://imgur.com/AtYhDOY.gif", "https://imgur.com/tkRxtAZ.gif", "https://imgur.com/vYhUDOq.gif"]
        var happy_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setDescription(message.author.toString() + "  est heureux! 😃")
            .setImage(var1[Math.floor(Math.random() *var1.length)])
            message.channel.send(happy_embed);
    }    

    if(message.content === `${prefix}dab`){
        var dab_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setDescription(message.author.toString() + "  is dabbing!")
            .setImage('https://imgur.com/wfqDBqW.gif');
            message.channel.send({embed: dab_embed});
    }

    if(message.content === `${prefix}sad`){
        var var1 =["https://imgur.com/u9aoMeO.gif", "http://i.imgur.com/MMP74jx.gif", "https://imgur.com/04MkVmo.gif"]
        var sad_embed = new Discord.RichEmbed()
            .setColor("f442d7")
            .setDescription(message.author.toString() + "  est tristounet ! 😢")
            .setImage(var1[Math.floor(Math.random() *var1.length)])
            message.channel.send({embed: sad_embed});
        console.log('>sad');
    }

    if(message.content === `${prefix}weeb`){
        var var1 =["https://imgur.com/1kVlop7.gif", "https://imgur.com/y9fcyQV.gif", "https://imgur.com/HdcdeRg.gif"]
            var weeb_embed = new Discord.RichEmbed()
                .setColor("f442d7")
                .setDescription(message.author.toString() + "  is a WEEB ! 😃")
                .setImage(var1[Math.floor(Math.random() *var1.length)])
                message.channel.send({embed: weeb_embed});
            console.log('>weeb');
    }
    
    if(message.content.startsWith(prefix+'cou')){
    if(!message.mentions.members.first())return;
    message.delete()
    var cou_gif = ["https://i.imgur.com/YUzXTia.gif", "https://imgur.com/34F3Ph3.gif", "https://imgur.com/Tov1OSQ.gif"]
    var personne1 = message.author.username
    var personne2 =message.mentions.members.first()

    if(personne2.id===(message.author.id)){
        var cou_embed1 = new Discord.RichEmbed()
            .setColor("f442d7")
            .setTitle(`**${personne1} fais coucou dans le vide 🤦**`)
            .setImage('https://imgur.com/D0WpRE1.gif')
        message.channel.send(cou_embed1)
        return;
    }
    var cou_embed2 = new Discord.RichEmbed()
        .setColor("f442d7")
        .setTitle(`${personne1} fait un signe de la main à ${personne2.user.username}`)
        .setImage(cou_gif[Math.floor(Math.random() * cou_gif.length)])
    message.channel.send(cou_embed2)
}

    if(message.content.startsWith(prefix+'poke')){
        if(!message.mentions.members.first())return;
        message.delete()
        var poke_gif = ["https://imgur.com/BmfD5PV.gif", "https://imgur.com/G80BETJ.gif", "https://imgur.com/v9h9EKm.gif"]
        var personne1 = message.author.username
        var personne2 =message.mentions.members.first()
    
        if(personne2.id===(message.author.id)){
            var poke_embed1 = new Discord.RichEmbed()
                .setColor("f442d7")
                .setTitle(`**${personne1} t'auto tapotter? Con que tu es, maso.**`)
                .setImage('https://imgur.com/SKjLTdN.gif')
            message.channel.send(poke_embed1)
            return;
        }
        var poke_embed2 = new Discord.RichEmbed()
            .setColor("f442d7")
            .setTitle(`${personne2.user.username} se fait tapotter par ${personne1}`)
            .setImage(poke_gif[Math.floor(Math.random() * poke_gif.length)])
        message.channel.send(poke_embed2)
    }

    if(message.content.startsWith(prefix+'pat')){
        if(!message.mentions.members.first())return;
        message.delete()
        var pat_gif = ["https://imgur.com/KIgo8Y2.gif", "https://imgur.com/ymqAFJR.gif", "https://i.imgur.com/aUyZ7k8.gif", "https://imgur.com/83ZKbUs.gif", "https://imgur.com/YjmpfJT.gif"]
        var personne1 = message.author.username
        var personne2 =message.mentions.members.first()
    
        if(personne2.id===(message.author.id)){
            var pat_embed1 = new Discord.RichEmbed()
                .setColor("f442d7")
                .setTitle(`**${personne1} t'auto caresser? Tu es si bête..**`)
                .setImage('https://i.imgur.com/vjmSp1N.gif')
            message.channel.send(pat_embed1)
            return;
        }
        var pat_embed2 = new Discord.RichEmbed()
            .setColor("f442d7")
            .setTitle(`${personne2.user.username} as reçu une caresse de ${personne1}`)
            .setImage(pat_gif[Math.floor(Math.random() * pat_gif.length)])
        message.channel.send(pat_embed2)
    }

    if(message.content.startsWith(prefix+'hug')){
        if(!message.mentions.members.first())return;
        message.delete()
        var img_gif = ["https://i.imgur.com/fRTMbvm.gif", "https://i.imgur.com/HHMaAQc.gif", "https://i.imgur.com/MnmmfeN.gif", "https://i.imgur.com/wGfBsGK.gif", "https://i.imgur.com/HcgI34N.gif", "https://imgur.com/P3PkvpL.gif"]
        var personne1 = message.author.username
        var personne2 =message.mentions.members.first()
    
        if(personne2.id===(message.author.id)){
            var hug_embed1 = new Discord.RichEmbed()
                .setColor("f442d7")
                .setTitle(`**${personne1} tu t'auto câline ? 😂.**`)
                .setImage('https://i.imgur.com/3b11S8T.gif')
            message.channel.send(hug_embed1)
            return;
        }
        var hug_embed2 = new Discord.RichEmbed()
            .setColor("f442d7")
            .setTitle(`${personne1} te serre fort dans ses bras ! (づ￣ ³￣)づ ${personne2.user.username}`)
            .setImage(img_gif[Math.floor(Math.random() * img_gif.length)])
        message.channel.send(hug_embed2)
    }

    if(message.content.startsWith(prefix+'IloveU')){
        if(message.mentions.members.first().id===(message.author.id)){
            message.channel.send(`**s'auto kiff ^-^ ${message.author.username}!**`)
            return;
        }
        var1=message.author.username
        var2=message.mentions.members.first().user.username
        message.channel.send(`**${var1} te déclare sa flamme ${var2}. C'est trop cuuuuuuutiiiiiiiiie :3**`)
    }

    if(message.content.startsWith(prefix+'snowball')){
        if(message.mentions.members.first().id===(message.author.id)){
            message.channel.send(`**Tu peux pas t'envoyer de la neige sur toi même ${message.author.username}!!!**`)
            return;
        }
        message.delete()
        var1=message.author.username
        var2=message.mentions.members.first().user.username
        message.channel.send(`**${var1} lance une boule de neige sur ${var2} boom HEADSHOT!**`)
        //End > 20 Mars 2018
    }

    if(message.content.includes("♥") || message.content.includes("😍") || message.content.includes("😳") || message.content.includes("❤") ) {
        var min = 1,
        max = 3,
        number = Math.floor(Math.random() * (max - min + 1)) + min;
        if(number == 1)return;
        var réponses = ["Vole le coeur et s'enfuit! (>°o°)>♡", "C'est beau l'amoouuuuuuuur!! (♡◡♡)", "Je peux avoir autant d'amour ? (⺣◡⺣)♡"]
        message.channel.send(réponses[Math.floor(Math.random() * réponses.length)])
    }




    if (message.content === prefix + "help"){
        message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée !");
    }
});

function random(min, max) {
    min = Math.ceil(1)
    max = Math.floor(3)
    randnum = Math.floor(Math.random() * (max - min +1) + min)
}
