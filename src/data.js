import {
  faFacebookF, 
  faInstagram, 
  faYoutube,
  faTwitter,
  faSnapchatGhost,
  faSpotify,
  faLinkedinIn,
} from '@fortawesome/fontawesome-free-brands';

import  faRss from '@fortawesome/fontawesome-free-solid/faRss';

import scudetto from "./assets/images/trophy_scudetto.png";
import ucl from "./assets/images/trophy_champions_league.png";
import coppaItalia from "./assets/images/trophy_coppa_italia.png";
import international from "./assets/images/trophy_coppa_intercontinentale.png";
import uefaCup from "./assets/images/trophy_coppa_uefa.png";
import uefaSuperCup from "./assets/images/trophy_supercoppa_europea.png";
import uefaWinnersCup from "./assets/images/trophy_coppa_delle_coppe.png";
import italianSuperCup from "./assets/images/trophy_supercoppa_italiana.png";


import stadium1 from "./assets/images/001.jpg";
import stadium2 from "./assets/images/002.jpg";
import stadium3 from "./assets/images/003.jpg";
import stadium4 from "./assets/images/004.jpg";

import hashtag from "./assets/images/hashtagImg.png";

import nedved from "./assets/images/Nedved11a_batchedit.jpg";
import matuidi from "./assets/images/matuidi01.jpg";
import marcizio from "./assets/images/IMG_3120.JPG";
import coppe from "./assets/images/coppe01.jpg";

import fans from './assets/images/fan_1.jpg'

import clubFan from './assets/images/fan_title.jpg';
import clubStadium from './assets/images/club_stadium.jpg';
import clubHistory from './assets/images/club_history.jpg';

export const trophiesData = [
    {
        name: "scudetto",
      logo: scudetto,
        count: 36,
    },
    {
        name: "uefa champions league ",
      logo: ucl,
        count: 2,
    },
    {
        name: "coppa italia",
      logo: coppaItalia,
        count: 13,
    },
    {
        name: "international cup",
      logo: international,
        count: 2,
    },
    {
        name: "uefa cup",
      logo: uefaCup,
        count: 3,
    },
    {
        name: "uefa super cup",
      logo: uefaSuperCup,
        count: 2,
    },
    {
        name: "uefa cup winners cup",
      logo: uefaWinnersCup,
        count: 1,
    },
    {
        name: "italian super cup",
      logo: italianSuperCup,
        count: 7,
    }
]

export const socialIconsData = [
    {
    icon: faFacebookF,
    link: "https://www.facebook.com/Juventus/",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/juventus/",
  },
  {
    icon: faYoutube,
    link: "https://www.youtube.com/juventus",
  },
  {
    icon: faTwitter,
    link: "https://twitter.com/juventusfc",
  },
  {
    icon: faSnapchatGhost,
    link: "https://www.snapchat.com/add/juventus",
  },
  {
    icon: faSpotify,
    link: "http://www.juventusound-spotify.it/",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/company/juventus-football-club/",
  },
  {
    icon: faRss,
    link: "http://www.juventus.com/rss/news/it.xml",
  },
];

export const newsData = [
    {
        id: 1,
        title: "In celebration of the club's 100-year anniversary, Juventus VP Pavel Nedved and his son played for FK Skalná on Saturday",
        content: "It was a party atmosphere in the west of Czech Republic on Saturday as Juventus VP Pavel Nedved and his son Pavel Jr. returned home to suit up for Czech side FK Skalna in celebration of the club's 100-year anniversary. In the black and white that is so familiar, the 2003 Balon d'Or winner played at the spot where he took some of his first steps as a player along side his son. The final result was 1-4 in favor of Banik on a day that will never be forgotten.",
        image: nedved
    },
    {
        id: 2,
        title: "International Recap: France tops Italy",
        content: "Four Bianconeri were in action on Friday as the international friendlies continued across the globe both for teams getting prepared for the FIFA World Cup and others taking a closer look at players as we head into the summer. A blockbuster friendly was on tap Friday night in Nice as France hosted Italy in a meeting of the two neighbors. For Gli Azzurri, Mattia De Sciglio started and played all 90 minutes while Blaise Matuidi, who started Italy's last match, played the final 13 minutes of Les Blues 3-1 win.",
        image: matuidi
    },
    {
        id: 3,
        title: "Il Principino visits Tokyo Academy!",
        content: "It was a special day for Claudio Marchisio and the JAcademy in Tokyo as the legendary Bianconero midfielder, who is on holiday in Japan with his family, dedicated a morning to the Academy giving smiles and unforgettable memories to 40 young players. It wasn't just that, however, as Marchiso gave some tips and tricks to the young Bianconeri, creating an amazing experience not only for the children but for Il Principino.",
        image: marcizio
    },
    {
        id: 4,
        title: "Three more trophies at Juventus Museum",
        content: "There are now three more reasons to visit Juventus Museum this summer! As of today, visitors can admire the trio of trophies won by the club’s men’s and women’s teams during the past season. We are, of course, talking about the seventh straight Scudetto won by Massimiliano Allegri’s men, which saw his team enter the realm of #MY7H, and the fourth consecutive Coppa Italia – another unprecedented achievement in Italian football. Meanwhile, there is also the historic first Scudetto conquered by Juventus Women in their inaugural campaign under Rita Guarino.",
        image: coppe
    },
]


export const hashtagImageData = {
    image: hashtag,
    hashtag: '#FINOALLAFINE'
}

export const fansData = {
    image: fans,
    text: 'Juventus are the best-supported football club in Italy, with over 12 million fans or tifosi, which represent approximately 34% of the total Italian football fans according to a research published in September 2016 by Italian research agency Demos & Pi, as well as one of the most supported football clubs in the world, with over 300 million supporters (41 million in Europe alone), particularly in the Mediterranean countries to which a large number of Italian diaspora have emigrated. The Torinese side has fan clubs branches across the globe. Demand for Juventus tickets in occasional home games held away from Turin is high, suggesting that Juventus have stronger support in other parts of the country. Juventus is widely and especially popular throughout mainland Southern Italy, Sicily and Malta, leading the team to have one of the largest followings in its away matches, more than in Turin itself.'
}

export const historyData = [
    {
        date: '1897 - 1971',
        articleName: 'THE STORY OF A LEGEND',
        text: 'It all began with a bench on Corso Re Umberto, one of the most famous streets in city centre Turin.\n\nA group of friends congregated on this bench. They all possessed a shared passion for football, a special game that had recently been ‘imported’ from England. They had an intriguing idea, to create a sports club. The boys attended the ‘Massimo D’Azeglio’ high school which specialised in classical studies. They were well educated but the eldest was just 17 years of age. This paved the way for the club’s name. In Latin, the name ‘Juventus’ means youth. They weren’t aware of it yet, but on 1 November 1897, they had given birth to a legend.\n\nAnd so Italy’s greatest football team was born, almost by chance. The club’s first President was Enrico Canfari, the first ground was Piazza d’Armi (Parade Ground) and the side started out wearing pink. Sporting that same jersey, the club made its debut in the national championship in 1900. Three years later, the Bianconeri colours, which had come from Nottingham, were in use. Five years later, the first Italian title arrived when Juve successfully beat off stiff competition from Genoa and Milanese. President AlfredoDick from Switzerland, left the club shortly afterwards following various complaints and rifts in the dressing room. He then went on to found Torino FC, bringing the best foreign players from Juventus with him. Juventus then endured some difficult years as they failed to keep pace with the new footballing superpowers of the time, Pro Vercelli and Casale.\n\nThe Bianconeri made a triumphant return following the First World War: goalkeeper Giacone and defenders Novo and Bruna were the first Juventus players to wear the National Team’s jersey. The President was poet and scholar Corradino Corradini, who also wrote the club anthem which was used until the 1960s. 1923 was a special year as one of the greatest goalkeepers of all time, Giampiero Combi, made his first team debut. He would go on to contribute heavily to a change in the club’s standing. On 24 July, a shareholders’ meeting saw Mr Edoardo Agnelli, son of the founder of FIAT, elected as the new president. The club also now had its very own playing surface in Corso Marsiglia. The terraces were just bricks but the number of supporters increased day by day. Juventus had all the foundations to rise through the ranks of Italian football and to strengthen a side already boasting the likes of Combi, Rosetta, Munerati, Bigatto and Grabbi. Then came the the first official manager, Hungarian Jeno Karoly, and the first foreign world-beater, Hungarian left-winger Hirzer.\n\nIn 1925/26 Juventus won their second Scudetto title following a gripping regional final against Bologna and then a resounding 12-1 aggregate win in the national final against Alba Roma. But this was just the beginning. From 1930 to 1935, Juve were streets ahead of the rest as five consecutive Scudetto trophies made their way to Turin. The main ingredients of the ‘Golden five-year period’ were the manager Carlo Carcano and champions such as Orsi, Caligaris, Monti, Cesarini, Varglien I and II, Bertolini, Ferrari and Borel II. Juve also made a significant contribution to the national side, who won the World Cup in Rome in 1934. The 1930s saw the Bianconeri have their first experience in a continental competition when they took part in the European Cup, currently known as the Champions League. Although luck was not on Juve’s side, they did manage to make four semi-final appearances.\n\nJuventus resumed their success after the Second World War. Following the tragic death of Edoardo Agnelli in a plane crash in 1935, his son, Giovanni, took on the role of president in 1947. The club’s most revered champions at the time were Carlo Parola, Danish duo John Hansen and Praest and, most notable of all, Giampiero Boniperti. Cheered on by thousands of fans, they recorded Scudetto triumphs in 1950and 1952.\n\nIn 1953, Giovanni Agnelli stepped down from the presidency and it was then passed onto his brother Umberto two years later. Juve were on the brink of another triumphant cycle. The arrivals of Omar Sivoriand John Charles helped the Bianconeri to the Scudetto title in 1958 which allowed them to wear a star on their shirts to mark ten national championship victories. The club recorded three further successes during the 1960s, with the last coming in 1967 under the presidency of Vittore Catella. However, the start of the new decade yielded even greater additions to the Juventus history books. Giampiero Boniperti may have hung up his boots, but he continued to lead the team by taking on the role of President on 13 July 1971. After this, there was no stopping the Bianconeri.'
    },
    {
        date: '1971 - 1989',
        articleName: 'THE BONIPERTI ERA',
        text: 'The Boniperti era started with a bang by winning back-to-back championship titles (1971-72, 1972-73). It was the beginning of a successful period in Juve’s history which saw them lift nine Scudetto trophies, celebrate their first European success with the 1977 UEFA Cup, the 1984 Cup Winners’ Cup and the Champions League.\n\nHowever, the long awaited success in Europe’s most elite competition was marred by the Heysel tragedy which took place in Brussels on 29 May 1985. Something inexplicable happened before the start of the match and 39 innocent victims lost their lives. From that moment on, football would never be the same again. The two teams decided to go ahead with the game in order to try and restore law and order, and in the end, Juventus won the cup. It was a joyless success, but the victory enabled the Bianconeri to fly to Tokyo in the winter to play in the Intercontinental Cup final. Argentinos Junior were beaten on penalties and Juve were crowned World Champions.\n\nVycpalek and Carlo Parola helped form an unstoppable machine under Boniperti’s presidency but then, in 1976, Giovanni Trapattoni took over the managerial reigns. The coach from Cusano Milanino helped guide Juventus to an era of dominance by investing in young Italian players such as Zoff, Scirea, Tardelli, Cabrini, Causio, Rossi, Gentile, Furino, Anastasi and Bettega. From the 1980s onwards, Boniperti was able to sign foreigners who would go on to make world-beating contributions. The first example of this was Liam Brady, an intelligent Irish midfielder who dictated the pace of play, had passing expertise in abundance and scored valuable goals. His final strike, scored from the penalty spot in Catanzaro gave Juve their 20th Scudetto title on 16 May 1982 and enabled the club to add a second star to the shirt. The Juventus supporters were ecstatic.\n\nLess than two months later, on 11 July, the whole of Italy would share their joy as the national side won the World Cup for the third time. Looking through the team it was impossible not to see the resemblance to Trapattoni’s side. Zoff, Gentile, Cabrini, Scirea, Tardelli and Rossi were the mainstays of the Italian National Team who lifted the cup in Madrid in the presence of Sandro Pertini, president of the Italian Republic. With six goals in seven games, Rossi was the tournament’s top scorer and was fully deserving of the Golden Ball award, just the second Italian player (after Rivera) in history to receive this honour.\n\nIn the immediate aftermath of the World Cup, the number of foreigners eligible to play in Italian teams increased to two, so Polish Zibì Boniek and, more significantly, Michel Platini arrived at Juventus. The Frenchman proved to be a true world-beater. He displayed elegant movement, regularly featured on the scoresheet, played with his head up and consistently placed passes onto his teammates’ feet from 50 yards away. Le Roi went on to win the Golden Boot and Golden Ball three years in a row as he thrilled fans the world over. During the triumph in Tokyo, he scored the winning penalty and saw one of the best goals in football history disallowed. In that season, Juve achieved their final Scudetto of the Boniperti era. Platini went on to play one more season before then becoming a coach, manager and President of UEFA in 2007.\n\nPlatini’s retirement coincided with a restructuring of the team which saw Juventus enjoy a less successful period, despite a UEFA Cup-Coppa Italia double in 1990. Dino Zoff was at the helm and ably supported by one of his great friends and former team mates, Gaetano Scirea. But fate cut that solid partnership short during a trip to Poland where Gaetano tragically died in a car accident while on a scouting mission for Juve’s next UEFA Cup opponents. The 3rd September 1989 is a date that no supporter will ever forget.'
    },
    {
        date: '1990 - 2004',
        articleName: 'JUVE ON THE TOP OF THE WORLD',
        text: 'In 1990, Giampiero Boniperti handed the presidential reins over to Mr Vittorio Caissotti di Chiusano. Three years later, Juventus clinched their third UEFA Cup, but had also experienced a barren run on the domestic front. In 1994, the club began a process of renovation. Chiusano remained as president, but operating positions were given to Roberto Bettega, Antonio Giraudo and Luciano Moggi.\n\nMarcelo Lippi was managing the side and several new faces had entered the squad such as: Ferrara in defence, Paulo Sousa and Deschamps in midfield and up front, alongside Gianluca Vialli and Roberto Baggio, was an interesting young player. He had joined Juventus in the previous year from Padova, showing a notable technique and a strong personality. His name was Alessandro Del Piero, the man who would go on to rewrite all Juventus records. The following season was defined by an endless duel with Parma, who managed to overcome Juve in the UEFA cup final. However, the Bianconeri beat their rivals in the Scudetto title race and also ran out winners against them in the Coppa Italia final.\n\nThe year was a great success but also one that was marked by tragedy because of the death of Andrea Fortunato on 25th April 1995 after he suffered from an incurable disease. The Scudetto victory allowed Juve to claim their place in the Champions League the following year where they knocked out Real Madrid in the quarter-finals and then beat Nantes in the semis. The final was to be played in Rome against reigning champions Ajax. On 22 May 1996, it ended 1-1. The Bianconeri had scored all their penalties and keeper Peruzzi had saved two. Jugovic approached the penalty spot smiling for the last spot kick. His smile turned to a cry of joy after a few seconds as Juve were crowned Champions of Europe.\n\nThe squad underwent drastic changes in the following season as Vialli and Ravanelli both left, while Boksic, Vieri and Amoruso came in. Montero and Zidane also joined to bolster the defence and midfield respectively. The Bianconeri were then back on the top of the world after Del Piero’s goal clinched victory against River Plate in the Intercontinental Cup held in Tokyo. The team also achieved another Scudetto title, but a second consecutive Champions League final was to end on a low, as former Bianconeri players Moeller and Paulo Sousa took the trophy to Germany. European heartbreak was to repeat itself the following year as the Bianconeri again stumbled at the final hurdle, this time in Amsterdam against Real Madrid. However the club recorded its 25th Scudetto title largely thanks to the fine form displayed by Inzaghi and Del Piero. The following season, Del Piero suffered an injury on 8 November 1998 in Udine. Without their guiding light, Juventus struggled to maintain their rhythm and Lippi gave way to Carlo Ancelotti on the bench.\n\nFollowing two unsuccessful seasons, Lippi returned home in 2001. The manager from Viareggio took charge of a team that had lost the key figures of Inzaghi and Zidane but he was able to count on the vital signings of Buffon, Thuram and Nedved. The championship went right down to the wire. On the final matchday of the season, Inter were out in front and playing against Lazio in Rome. Meanwhile Juventus were in action against away against Udinese. Lippi’s side were quick out of the blocks and had established a two-goal lead in the space of just 15 mintues. Inter, on the other hand, went into the interval on level terms but then conceded twice after the restart to bring their title challenge to an end. Scudetto number 26 will be remembered for Del Piero and Trezeguet’s immense joy, coupled with Ronaldo’s tears. The Scudetto shield remained on Juve’s shirt for the following season, but it was a tragic year nonetheless. ‘Avvocato’ Giovanni Agnelli died on 24 January 2003 and the club was in mourning. In May, Juventus suffered another setback as they lost the Champions League final on penalties at Wembley against Milan.\n\n15 July 2003 proved to be a historic date for the club as Juventus entered into an agreement with the City of Turin for the acquisition of the Stadio Delle Alpi land rights, where the new stadium would eventually be built. In the meantime, the Bianconeri exacted revenge on Milan by claiming victory in the Super Cup which was contested in the USA. However, the party did not last too long as the death of President Vittorio Caissotti di Chiusano was announced. Franzo Grande Stevens, Vice-President of FIAT stepped into the role. Aside from the Super Cup victory, the remainder of the season was unfulfilling for Juve. The club was again in deep mourning the following spring as Umberto Agnelli passed away on 27 May 2004.'
    },
    {
        date: '2004 - 2010',
        articleName: 'RECENT SEASONS',
        text: 'The following season saw Fabio Capello assume control of first team affairs. Among the new arrivals were Emerson, Fabio Cannavaro and Swedish striker Zlatan Ibrahimović. Performances in Europe weren’t as anticipated but Juve were unstoppable in Italy and achieved back-to-back championship titles, smashing records and leaving opponents lagging behind.\n\nBut towards the end of the 2005/2006 season, the club was involved in a judicial enquiry, which came about through some recorded telephone conversations. The matter, known as ‘Calciopoli’ brought big changes within the club as a new president, Giovanni Cobolli Gigli, and a new CEO, Jean-Claude Blanc, were elected. The sporting body condemned Juventus to play a season in Serie B and with a nine-point disadvantage. The club’s two previous Scudetto titles were also removed. Didier Deschamps was the new manager and he began his mission with a core of champions: Del Piero, Buffon and Camoranesi, who were all fresh from the World Cup victory in Berlin, as well as Trezeguet and Nedved.\n\n15 December 2006 was a sad date in Juve’s history as two boys from Beretti’s team, Alessio Ferramosca and Riccardo Neri, died during a tragic accident at Vinovo’s Juventus Center. With a deep sadness engulfing the club, the side returned to the field the following week and beat Bologna. It was a crucial result for the return to Serie A and also one that was dedicated to the memory of the two young boys. Alex Del Piero finished the season as Serie B’s top scorer and also became Juventus’ all-time leading goalscorer.\n\nThe following season, under Claudio Ranieri’s guidance, Juventus finished in third place and thus qualified for the Champions League. Captain Del Piero was a key figure in that great season as he finished as top scorer on 21, closely followed by Trezeguet on 20. In the 2008/2009 campaign, Juve struggled in the second half of the season and suffered a run of negative results which could have hindered their qualification for the Champions League. Ciro Ferrara replaced Ranieri for the last two Championship fixtures and Juventus finished in second place. Ferrara was confirmed as coach for the following season, which saw the return of Fabio Cannavaro and the arrivals of Fabio Grosso, Felipe Melo and Diego. In October, Giovanni Cobolli Gigli relinquished the role of Club President and handed full control over to Jean-Claude Blanc. However, after a solid start, the team encountered a series of injuries which compromised their overall performance. The management then changed again as Zaccheroni replaced Ferrara. The Bianconeri ended the season in seventh place and qualified for the preliminary round of the Europa League. The real turning point came on 19 May 2010 as Andrea Agnelli became president of the club and began to write a new chapter in the Juventus history books.\n\n'
    },
    {
        date: '2010 - 2015',
        articleName: 'RETURN TO SUCCESS',
        text: 'The arrival of Andrea Agnelli brought widespread changes across all levels of the club. Work began by restructuring the Board of Directors. Giuseppe Marotta was recruited to oversee the sporting department and assume the role of CEO.\n\nAfter an initial season of transition, Juventus were fully prepared to re-establish themselves as a significant force in Serie A. In came Antonio Conte, returning to lead his beloved Bianconeri after enjoying a hugely successful thirteen-year stint as a player. He began his tenure by bolstering the squad with several important summer signings including: Lichtsteiner, Vucinic, Vidal and, above all, Andrea Pirlo.\n\nDespite the impressive recruitment policy, defending champions Milan were still regarded as favourites to reclaim the Scudetto. But something had changed and Juventus, boosted by their brand new 41,000 all-seater stadium, appeared to represent genuine challengers to the Rossoneri’s crown. \n\nAnd then there was the action itself. Conte managed to instantly mould an aggressive but stylish team unit which guaranteed both attractive football and results. Juventus were an unstoppable force as they ended the league campaign unbeaten and lifted the Scudetto for the 30th time in the club’s history. This provided departing skipper Del Piero with the perfect send-off to his illustrious career in the black and white stripes. \n\nOff-field success came with the opening of J-Museum, a fitting interactive tribute to the club’s glorious 115-year history which allowed supporters to relive previous victories while looking ahead to an exciting future. \n\nAnd this future promises to be even brighter after the club launched plans for an internal Youth Sector educational programme which will see Bianconeri prospects combine their sporting and academic pursuits in Vinovo. \n\nConte’s men also reached the Coppa Italia final in Rome, only to fall at the final hurdle against a determined Napoli outfit. However, revenge was exacted less than two months later as the Partenopei were swept aside in the Super Cup.\n\nThe first victory of the season will see Juventus approach the 2012/13 campaign hopeful of defending their title and launching a successful tilt against Europe’s finest in the Champions League.\n\nIt was the first success of a season that would see the Bianconeri go on to: rub shoulders with the best in Europe as they reached the quarter-finals of the Champions League and also achieve a second consecutive Scudetto title, which was wrapped up with three fixtures left to play following a successful campaign in which they were top of the pack right from the first day.\n\nThe start of the following season began with another trophy, as Juventus romped to their sixth Italian Super Cup crown courtesy of a 4-0 victory over Lazio.\n\nThey backed that up with a tremendous string of results across the Serie A season, which saw the club overhaul early pace-setters Roma to post a record-breaking 102 points on the board by the end of a third successive Scudetto-winning campaign – a feat they had not accomplished since the club’s first Quinquennio.\n\nThe summer of 2014 saw a change at the helm with Massimiliano Allegri replacing Antonio Conte, but no alterations whatsoever to the side’s winning habits.\n\nFine league form was matched by exhilarating runs in the Coppa Italia and the Champions League and they would ultimately reach the finals of both competitions, producing several unforgettable moments along the way.\n\nIn the domestic cup, they produced the strongest of second leg displays to knock out Fiorentina at the semi-final stage before sealing their 10th Coppa crown in extra-time against Lazio. Meanwhile in Europe, Allegri’s charges also worked their magic by beating Borussia Dortmund, AS Monaco and Real Madrid in the knockout rounds en route to the showpiece event in Berlin, eventually won by an immensely strong Barcelona outfit.\n\nBack in Italy, the Bianconeri were continuing to dominate the scene with a fourth straight Scudetto title thanks to their 17-point lead over second-placed Roma and were looking forward to the new season hungry to make history.'
    },
    // {
    //     date: '2015 - 2017',
    //     articleName: '#HI5TORY',
    //     text: 'The summer of 2015, in many ways, marked a new dawn in the evolution of the side with several changes made to personnel. As Andrea Pirlo, Arturo Vidal, Carlos Tevez and Fernando Llorente all bid farewell to Turin, the likes of Paulo Dybala, Sami Khedira, Mario Mandzukic, Simone Zaza, Juan Cuadrado and Alex Sandro entered the picture as 10 new players in total joined the Bianconeri ranks.\n\nThe season began with the club’s seventh Italian Super Cup thanks to a 2-0 triumph over Lazio in Shanghai, but they were suffering an especially slow start to their Serie A campaign. After 10 games, the Old Lady found herself in 12th place and far away from reaching her objective of claiming an historic fifth successive Scudetto title.\n\nThen, following a humbling defeat away to Sassuolo, senior squad members Gianluigi Buffon and Patrice Evra called for change and for the group’s true, winning character to re-emerge.\n\nThe team needed little time in heeding these words and, from their derby triumph over Torino later that week, would go on to win 25 from their next 26 games in the league.\n\nMeanwhile, they would put on a strong showing in the Champions League, in which they ultimately fell just short of overcoming a brilliant Bayern Munich side in the last 16 stage.\n\nBack on the domestic front, Allegri’s charges would not let their phenomenal run of form dip once and by 13 February they had overtaken Napoli at the top of the table after beating the Partenopei in a pulsating encounter at Juventus Stadium.\n\nFollowing victory away to Fiorentina on 25 April, Juve were on the cusp of completing arguably the most extraordinary of comebacks in Italian football history to claim a fifth consecutive league crown for the first time since their first Quinquennio celebration in 1935.\n\nThe feat would be confirmed the following day when Roma defeated second-placed Napoli at the Stadio Olimpico – the scene of the Old Lady’s very next trophy-winning night, namely the Coppa Italia. By beating Milan 1-0 in extra-time in the capital, the Bianconeri created yet more history by becoming the first ever Italian team to win the league and cup double in consecutive campaigns.\n\nThe summer of 2016 saw the Bianconeri bolster their ranks considerably. The arrivals of Miralem Pjanic, Dani Alves, Medhi Benatia, Marko Pjaca and club-record signing Gonzalo Higuain made for an exceptionally competitive squad.\n\nJuve would sit top of the league table all the way from mid-September until the end of the season as they cruised to a legendary sixth straight Serie A title – an unprecedented feat in Italian football. Furthermore, Allegri’s men conquered their third consecutive Coppa Italia – another feat never achieved before in this country – by beating Lazio 2-0 in Rome.\n\nThey would also reach the Champions League final for a second time in three seasons, beating formidable opponents in Porto, Barcelona and Monaco en route to the showpiece event in Cardiff, where Real Madrid ultimately prevailed. Nevertheless, this had been another extraordinary campaign for the boys in black and white.'
    // },
]

export const thoughtsData = {

    image: './images/thoughts.png',
    texts: [
        {
            author: 'Johan Cruyff',
            text: 'Football is a game of mistakes. Whoever makes the fewest mistakes wins.'
        },
        {
            author: 'Dwight D. Eisenhower',
            text: 'The supreme quality for leadership is unquestionably integrity. Without it, no real success is possible, no matter whether it is on a section gang, a football field, in an army, or in an office.'
        },
        {
            author: 'Lewis Grizzard',
            text: 'The game of life is a lot like football. You have to tackle your problems, block your fears, and score your points when you get the opportunity.'
        },
    ]
}

export const stadiumData = {
    images: [
        stadium1,
        stadium2,
        stadium3,
        stadium4,
    ],
    text: "Allianz Stadium is the new name of Juventus' home ground after the club signed a naming rights agreement with Allianz and Lagardère Sports, holders of the facility’s naming rights. Starting on 1 July 2017, the stadium will be known as the Allianz Stadium of Turin for six seasons until 30 June 2023, joining the Allianz Family of Stadiums first created in 2005 which features Munich’s Allianz Arena, Sydney’s Allianz Stadium, Allianz Park in London, Nice’s Allianz Riviera, Allianz Parque in Sao Paulo and Allianz Stadion in Vienna. “It’s with great pleasure that we welcome Allianz into our family of partners for a deal as special as this one – the naming of our home,” declared Giorgio Ricci, Co-Chief Revenue Officer and Head of Global Partnerships and Corporate Revenues at Juventus. “The arrival of a global giant in the insurance sector such as Allianz is further testament to how Juventus has established itself as a first-class international institution, whilst enriching a stadium that has played a significant role, since its inauguration in 2011, to creating history with six legendary Scudetto titles celebrated within its walls. “Our ambition and objective is to collaborate with Allianz for the benefit of our supporters, just as with the other partners who have helped transform the stadium into a theatre, ensuring that each match is a show of entertainment and a welcoming place for families.”Thanks to the naming rights agreement, once clearance has been given, Allianz will be able to personalise the facility with signage reading “Allianz Stadium” on the north-east and south-east corners of the facility, as well as the main entrance and signage inside the ground. The Allianz Stadium logo will be visible inside the stadium, on the north, south and east sides of the ground for television broadcasts, as well as on a number of other entry and access points to the stands. Sergio Balbinot, member of the Board of Management of Allianz SE, with responsibility over Italy, West & Southern Europe, the Middle East and Africa, declared: “As Allianz we are particularly satisfied with the partnership around this wonderful stadium, which is one of the established hubs of world soccer. In this structure, unique in Italy, Juventus, a team that can boast an extraordinary series of successes and primary international visibility, plays against all the most important Italian and foreign teams, which are followed, live in the stadium and live on tv, by millions of fans from all over the world. Allianz, on its part, is a major global player in the insurance and asset management business, with over 86 million clients in more than 70 countries and a well-recognized and highly regarded brand. The Allianz Stadium in Turin, therefore, is the natural meeting point between such a structure of excellence and a brand like Allianz”.Opened on 8 September 2011, Juventus Stadium was built according to cutting-edge building standards with an emphasis on energy saving. It was created to guarantee spectators a unique experience thanks to the proximity of the pitch, which is just 7.5m from the front row, and an excellent view from all sides of the stadium. It also features 110,000m2 of support service, commercial and entertainment areas. The facility is fully covered and has a capacity in excess of 41,500 seats, which include 4,000 premium seats, 62 sky boxes and eight business areas. Juventus Museum, 31 bars and restaurants, two children’s play areas, 10 Juventus Stores and 4,000 car parking spaces complete the range of services on offer to the general public. “We are very proud to have reached this agreement between two such prestigious international brands in Juventus and Allianz,” added Lagardère Sports and Entertainment CEO Andrew Georgiou. “As a result, Allianz will be able to move closer to millions of Juve fans around the world.”  Since it opened, more than six million people have enjoyed the Juventus Stadium experience: the club has recorded 99 sell-outs from 114 Serie A matches across six years, with 96.7% of total capacity filled. In all competitions, the stadium has been sold out 130 times in 156 matches, a rate of 83%. This season, every single home match has been a sell-out. The stadium is open seven days a week, which has allowed more than 883,000 visitors to experience the museum and stadium tours – 166,750 last season alone.",
}

export const clubData = {
  clubFan: clubFan,
  clubStadium: clubStadium,
  clubHistory: clubHistory
}

export const matchesData = {

  "_links": {
    "self": {
      "href": "http://api.football-data.org/v1/teams/109/fixtures"
    },
    "team": {
      "href": "http://api.football-data.org/v1/teams/109"
    }
  },
  "season": "2017",
  "count": 48,
  "fixtures": [
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163909"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/104"
        }
      },
      "date": "2017-08-19T16:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Cagliari Calcio",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163899"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/107"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-08-26T16:00:00Z",
      "status": "FINISHED",
      "matchday": 2,
      "homeTeamName": "Genoa CFC",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 4,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163886"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/106"
        }
      },
      "date": "2017-09-09T16:00:00Z",
      "status": "FINISHED",
      "matchday": 3,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "AC Chievo Verona",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/164780"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/81"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-09-12T18:45:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "homeTeamName": "FC Barcelona",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163877"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/471"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-09-17T10:30:00Z",
      "status": "FINISHED",
      "matchday": 4,
      "homeTeamName": "US Sassuolo Calcio",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163866"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/99"
        }
      },
      "date": "2017-09-20T18:45:00Z",
      "status": "FINISHED",
      "matchday": 5,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "ACF Fiorentina",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163855"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/586"
        }
      },
      "date": "2017-09-23T18:45:00Z",
      "status": "FINISHED",
      "matchday": 6,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Torino FC",
      "result": {
        "goalsHomeTeam": 4,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/164778"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/654"
        }
      },
      "date": "2017-09-27T18:45:00Z",
      "status": "FINISHED",
      "matchday": 2,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Olympiacos F.C.",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163840"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/102"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-10-01T18:45:00Z",
      "status": "FINISHED",
      "matchday": 7,
      "homeTeamName": "Atalanta BC",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163836"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/110"
        }
      },
      "date": "2017-10-14T16:00:00Z",
      "status": "FINISHED",
      "matchday": 8,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "SS Lazio",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/164777"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/498"
        }
      },
      "date": "2017-10-18T18:45:00Z",
      "status": "FINISHED",
      "matchday": 3,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Sporting CP",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163829"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/115"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-10-22T16:00:00Z",
      "status": "FINISHED",
      "matchday": 9,
      "homeTeamName": "Udinese Calcio",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 6,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163817"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/1107"
        }
      },
      "date": "2017-10-25T18:45:00Z",
      "status": "FINISHED",
      "matchday": 10,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "SPAL Ferrara",
      "result": {
        "goalsHomeTeam": 4,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163803"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/98"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-10-28T16:00:00Z",
      "status": "FINISHED",
      "matchday": 11,
      "homeTeamName": "AC Milan",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/164775"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/498"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-10-31T20:45:00Z",
      "status": "FINISHED",
      "matchday": 4,
      "homeTeamName": "Sporting CP",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163797"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/1106"
        }
      },
      "date": "2017-11-05T15:00:00Z",
      "status": "FINISHED",
      "matchday": 12,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Benevento Calcio",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163786"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/584"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-11-19T15:00:00Z",
      "status": "FINISHED",
      "matchday": 13,
      "homeTeamName": "UC Sampdoria",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/164772"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/81"
        }
      },
      "date": "2017-11-22T20:45:00Z",
      "status": "FINISHED",
      "matchday": 5,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "FC Barcelona",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163775"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/472"
        }
      },
      "date": "2017-11-26T20:45:00Z",
      "status": "FINISHED",
      "matchday": 14,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "FC Crotone",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163766"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/113"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-12-01T20:45:00Z",
      "status": "FINISHED",
      "matchday": 15,
      "homeTeamName": "SSC Napoli",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/164771"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/654"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-12-05T20:45:00Z",
      "status": "FINISHED",
      "matchday": 6,
      "homeTeamName": "Olympiacos F.C.",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163753"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/108"
        }
      },
      "date": "2017-12-09T20:45:00Z",
      "status": "FINISHED",
      "matchday": 16,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "FC Internazionale Milano",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163742"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/103"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-12-17T15:00:00Z",
      "status": "FINISHED",
      "matchday": 17,
      "homeTeamName": "Bologna FC",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163733"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/100"
        }
      },
      "date": "2017-12-23T20:45:00Z",
      "status": "FINISHED",
      "matchday": 18,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "AS Roma",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163725"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/450"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2017-12-30T19:45:00Z",
      "status": "FINISHED",
      "matchday": 19,
      "homeTeamName": "Hellas Verona FC",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": {
        "homeWin": 8.5,
        "draw": 4.75,
        "awayWin": 1.33
      }
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163711"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/104"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-01-06T19:45:00Z",
      "status": "FINISHED",
      "matchday": 20,
      "homeTeamName": "Cagliari Calcio",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163705"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/107"
        }
      },
      "date": "2018-01-22T19:45:00Z",
      "status": "FINISHED",
      "matchday": 21,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Genoa CFC",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163690"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/106"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-01-27T19:45:00Z",
      "status": "FINISHED",
      "matchday": 22,
      "homeTeamName": "AC Chievo Verona",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163686"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/471"
        }
      },
      "date": "2018-02-04T14:00:00Z",
      "status": "FINISHED",
      "matchday": 23,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "US Sassuolo Calcio",
      "result": {
        "goalsHomeTeam": 7,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 4,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163672"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/99"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-02-09T19:45:00Z",
      "status": "FINISHED",
      "matchday": 24,
      "homeTeamName": "ACF Fiorentina",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/165148"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/73"
        }
      },
      "date": "2018-02-13T19:45:00Z",
      "status": "FINISHED",
      "matchday": 7,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Tottenham Hotspur FC",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 2,
        "halfTime": {
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163668"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/586"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-02-18T11:30:00Z",
      "status": "FINISHED",
      "matchday": 25,
      "homeTeamName": "Torino FC",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163644"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/110"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-03-03T17:00:00Z",
      "status": "FINISHED",
      "matchday": 27,
      "homeTeamName": "SS Lazio",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/165138"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/73"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-03-07T19:45:00Z",
      "status": "FINISHED",
      "matchday": 7,
      "homeTeamName": "Tottenham Hotspur FC",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 2
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163637"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/115"
        }
      },
      "date": "2018-03-11T14:00:00Z",
      "status": "FINISHED",
      "matchday": 28,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Udinese Calcio",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163656"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/102"
        }
      },
      "date": "2018-03-14T17:00:00Z",
      "status": "FINISHED",
      "matchday": 26,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Atalanta BC",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163627"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/1107"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-03-17T19:45:00Z",
      "status": "FINISHED",
      "matchday": 29,
      "homeTeamName": "SPAL Ferrara",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163617"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/98"
        }
      },
      "date": "2018-03-31T18:45:00Z",
      "status": "FINISHED",
      "matchday": 30,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "AC Milan",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/166797"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/86"
        }
      },
      "date": "2018-04-03T18:45:00Z",
      "status": "FINISHED",
      "matchday": 8,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Real Madrid CF",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163600"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/1106"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-04-07T13:00:00Z",
      "status": "FINISHED",
      "matchday": 31,
      "homeTeamName": "Benevento Calcio",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 4,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/166796"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/464"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/86"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-04-11T18:45:00Z",
      "status": "FINISHED",
      "matchday": 8,
      "homeTeamName": "Real Madrid CF",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 3
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163596"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/584"
        }
      },
      "date": "2018-04-15T16:00:00Z",
      "status": "FINISHED",
      "matchday": 32,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "UC Sampdoria",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163581"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/472"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-04-18T18:45:00Z",
      "status": "FINISHED",
      "matchday": 33,
      "homeTeamName": "FC Crotone",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 1,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163574"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/113"
        }
      },
      "date": "2018-04-22T13:00:00Z",
      "status": "FINISHED",
      "matchday": 34,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "SSC Napoli",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163566"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/108"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-04-29T13:00:00Z",
      "status": "FINISHED",
      "matchday": 35,
      "homeTeamName": "FC Internazionale Milano",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 3,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163553"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/103"
        }
      },
      "date": "2018-05-05T18:45:00Z",
      "status": "FINISHED",
      "matchday": 36,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Bologna FC",
      "result": {
        "goalsHomeTeam": 3,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163547"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/100"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        }
      },
      "date": "2018-05-13T13:00:00Z",
      "status": "FINISHED",
      "matchday": 37,
      "homeTeamName": "AS Roma",
      "awayTeamName": "Juventus Turin",
      "result": {
        "goalsHomeTeam": 0,
        "goalsAwayTeam": 0,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    },
    {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/fixtures/163533"
        },
        "competition": {
          "href": "http://api.football-data.org/v1/competitions/456"
        },
        "homeTeam": {
          "href": "http://api.football-data.org/v1/teams/109"
        },
        "awayTeam": {
          "href": "http://api.football-data.org/v1/teams/450"
        }
      },
      "date": "2018-05-20T16:00:00Z",
      "status": "FINISHED",
      "matchday": 38,
      "homeTeamName": "Juventus Turin",
      "awayTeamName": "Hellas Verona FC",
      "result": {
        "goalsHomeTeam": 2,
        "goalsAwayTeam": 1,
        "halfTime": {
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0
        }
      },
      "odds": null
    }
  ]
}