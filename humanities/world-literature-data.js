/* ═══════════════════════════════════════════════════════════
   world-literature-data.js
   世界文學卷的流派資料與入門書單。作家資料在
   world-literature-authors-*.js，各自 push 進 LIT_AUTHORS。
   每筆文字都是 { zh, en, fr }。
   ═══════════════════════════════════════════════════════════ */
var LIT_AUTHORS = [];

var LIT_REGIONS = {
  europe:   { zh:'歐洲', en:'Europe', fr:'Europe' },
  eastasia: { zh:'東亞', en:'East Asia', fr:'Asie de l’Est' },
  americas: { zh:'美洲', en:'Americas', fr:'Amériques' },
  world:    { zh:'全球', en:'Global', fr:'Monde' },
};

var LIT_MOVEMENTS = [
  { id:'antiquity', region:'europe', start:-800, end:400, color:'#c9932e',
    name:{ zh:'古典時代', en:'Classical Antiquity', fr:'Antiquité classique' },
    yrs:{ zh:'前 8 世紀至 4 世紀', en:'8th c. BC to 4th c. AD', fr:'VIIIe s. av. J.-C. au IVe s.' },
    desc:{ zh:'西方文學的源頭。荷馬史詩原本是口傳的吟唱，記錄英雄、神祇與命運；雅典的悲劇在酒神節上演，讓整座城邦一起思考正義、傲慢與家族的詛咒。史詩、悲劇、喜劇與抒情詩的基本形式，都在這時定型。',
          en:'The fountainhead of Western literature. Homer’s epics began as oral song about heroes, gods and fate; Athenian tragedy, staged at the festival of Dionysus, made a whole city reflect on justice, hubris and family curses. Epic, tragedy, comedy and lyric all took their basic shape here.',
          fr:'La source de la littérature occidentale. Les épopées d’Homère furent d’abord chantées oralement, récits de héros, de dieux et de destin ; la tragédie athénienne, jouée aux fêtes de Dionysos, faisait réfléchir toute la cité sur la justice, la démesure et les malédictions familiales. Épopée, tragédie, comédie et poésie lyrique y prennent leur forme fondamentale.' },
    keys:{ zh:['史詩','悲劇','命運'], en:['Epic','Tragedy','Fate'], fr:['Épopée','Tragédie','Destin'] } },

  { id:'chineseclassical', region:'eastasia', start:-300, end:1200, color:'#b0485a',
    name:{ zh:'中國古典詩文', en:'Classical Chinese Poetry', fr:'Poésie chinoise classique' },
    yrs:{ zh:'戰國至宋', en:'Warring States to Song', fr:'Royaumes combattants aux Song' },
    desc:{ zh:'從屈原的《楚辭》到唐詩、宋詞，中國文學以短小的抒情詩為正宗。詩人多是讀書做官的士人，在仕途浮沉、離別與山水之間寄託人生；格律講究平仄與對仗，用最少的字留下最多的餘韻。',
          en:'From Qu Yuan’s Songs of Chu to Tang poetry and Song lyrics, short lyric verse was the heart of Chinese literature. Poets were mostly scholar-officials who poured their lives into verse amid political rise and fall, partings and landscapes; strict tonal patterns and parallelism let the fewest words leave the longest echo.',
          fr:'Des Chants de Chu de Qu Yuan à la poésie Tang et aux ci des Song, la poésie lyrique brève fut le cœur de la littérature chinoise. Les poètes, surtout des lettrés-fonctionnaires, y versaient leur vie au gré des disgrâces, des séparations et des paysages ; tons réglés et parallélismes laissent aux mots les plus rares la plus longue résonance.' },
    keys:{ zh:['唐詩','宋詞','士人'], en:['Tang verse','Song ci','Literati'], fr:['Poésie Tang','Ci des Song','Lettrés'] } },

  { id:'japanese', region:'eastasia', start:1000, end:2020, color:'#c0607a',
    name:{ zh:'日本文學', en:'Japanese Literature', fr:'Littérature japonaise' },
    yrs:{ zh:'平安時代至今', en:'Heian period to today', fr:'De l’ère Heian à nos jours' },
    desc:{ zh:'平安朝宮廷女性以假名寫下世界最早的長篇小說；江戶時代的俳句把一瞬的季節感凝成十七個音；明治以後作家在西方小說與日本美學之間尋找自我。「物哀」與「幽玄」的纖細感受，一路延續到當代。',
          en:'Heian court women writing in kana produced the world’s first great novel; Edo haiku condensed a seasonal instant into seventeen syllables; after Meiji, writers sought a self between the Western novel and Japanese aesthetics. The delicate sensibilities of mono no aware and yūgen run all the way to today.',
          fr:'Les dames de la cour Heian, écrivant en kana, donnèrent le premier grand roman du monde ; le haïku d’Edo condensa un instant de saison en dix-sept syllabes ; après Meiji, les écrivains cherchèrent un moi entre roman occidental et esthétique japonaise. La sensibilité du mono no aware et du yūgen se prolonge jusqu’à aujourd’hui.' },
    keys:{ zh:['物哀','俳句','私小說'], en:['Mono no aware','Haiku','I-novel'], fr:['Mono no aware','Haïku','Roman du moi'] } },

  { id:'medieval', region:'europe', start:1100, end:1450, color:'#8a94a6',
    name:{ zh:'中世紀文學', en:'Medieval Literature', fr:'Littérature médiévale' },
    yrs:{ zh:'12 至 15 世紀', en:'12th to 15th c.', fr:'XIIe au XVe s.' },
    desc:{ zh:'騎士傳奇、宮廷愛情與基督教世界觀交織的時代。最關鍵的變化是作家開始用各地的「俗語」寫作，而不再只用拉丁文：但丁用托斯卡尼方言寫《神曲》，喬叟用英語寫朝聖者的故事，為義大利文與英文文學奠基。',
          en:'An age weaving chivalric romance, courtly love and a Christian worldview. The decisive change was writing in vernacular tongues instead of Latin alone: Dante wrote the Divine Comedy in Tuscan and Chaucer told his pilgrims’ tales in English, founding Italian and English literature.',
          fr:'Un âge mêlant roman de chevalerie, amour courtois et vision chrétienne du monde. Le tournant décisif fut d’écrire en langue vulgaire et non plus seulement en latin : Dante composa la Divine Comédie en toscan, Chaucer conta ses pèlerins en anglais, fondant les littératures italienne et anglaise.' },
    keys:{ zh:['俗語','騎士','信仰'], en:['Vernacular','Chivalry','Faith'], fr:['Langue vulgaire','Chevalerie','Foi'] } },

  { id:'chinesenovel', region:'eastasia', start:1350, end:1800, color:'#a0522d',
    name:{ zh:'明清小說', en:'Ming–Qing Novel', fr:'Roman Ming–Qing' },
    yrs:{ zh:'14 至 18 世紀', en:'14th to 18th c.', fr:'XIVe au XVIIIe s.' },
    desc:{ zh:'城市繁榮與說書傳統催生了白話長篇章回小說。《三國演義》《水滸傳》《西遊記》《紅樓夢》四大名著從歷史、俠義、神魔一路寫到家族興衰與人情世故，以「欲知後事如何，且聽下回分解」的節奏吸引讀者。',
          en:'Booming cities and the storyteller’s tradition gave rise to long vernacular novels in chapters. The Four Classic Novels range from history, outlaw heroism and gods and demons to the rise and fall of a great family, each chapter ending with “to learn what happened next, read the following chapter.”',
          fr:'L’essor des villes et la tradition des conteurs firent naître de longs romans en langue vulgaire, découpés en chapitres. Les Quatre Romans classiques vont de l’histoire, de la chevalerie errante et des dieux et démons au déclin d’une grande famille, chaque chapitre finissant par « pour savoir la suite, lisez le chapitre suivant ».' },
    keys:{ zh:['章回','白話','四大名著'], en:['Chapters','Vernacular','Four Classics'], fr:['Chapitres','Langue vulgaire','Quatre classiques'] } },

  { id:'renaissance', region:'europe', start:1500, end:1650, color:'#b5873a',
    name:{ zh:'文藝復興', en:'Renaissance', fr:'Renaissance' },
    yrs:{ zh:'1500 至 1650 年', en:'1500 to 1650', fr:'1500 à 1650' },
    desc:{ zh:'印刷術讓書本普及，人文主義把目光從天國轉向人本身。莎士比亞在舞台上探索人心的每個角落，塞萬提斯以一位讀騎士小說讀到發瘋的老紳士開創了現代小說，蒙田則發明了「隨筆」，誠實地書寫自己。',
          en:'Printing spread books, and humanism turned the gaze from heaven to humanity. Shakespeare explored every corner of the human heart on stage, Cervantes invented the modern novel with an old gentleman driven mad by chivalric romances, and Montaigne invented the essay to write honestly about himself.',
          fr:'L’imprimerie diffuse le livre et l’humanisme détourne le regard du ciel vers l’homme. Shakespeare explore chaque recoin du cœur humain sur scène, Cervantès invente le roman moderne avec un vieil hidalgo rendu fou par les romans de chevalerie, et Montaigne invente l’essai pour se peindre lui-même avec franchise.' },
    keys:{ zh:['人文主義','戲劇','隨筆'], en:['Humanism','Drama','Essay'], fr:['Humanisme','Théâtre','Essai'] } },

  { id:'classicism', region:'europe', start:1630, end:1700, color:'#7d8fb3',
    name:{ zh:'法國古典主義', en:'French Classicism', fr:'Classicisme français' },
    yrs:{ zh:'17 世紀', en:'17th century', fr:'XVIIe siècle' },
    desc:{ zh:'路易十四的宮廷追求秩序、理性與「得體」。悲劇遵守時間、地點、情節的「三一律」，以十二音節的亞歷山大詩行寫成；喜劇則嘲諷偽君子與附庸風雅的人。清晰與節制，從此成為法語文學的理想。',
          en:'Louis XIV’s court prized order, reason and propriety. Tragedy obeyed the three unities of time, place and action in twelve-syllable alexandrines, while comedy mocked hypocrites and social climbers. Clarity and restraint became the ideal of French letters.',
          fr:'La cour de Louis XIV exalte l’ordre, la raison et la bienséance. La tragédie obéit aux trois unités de temps, de lieu et d’action, en alexandrins, tandis que la comédie raille hypocrites et précieuses. Clarté et mesure deviennent l’idéal des lettres françaises.' },
    keys:{ zh:['三一律','理性','得體'], en:['Three unities','Reason','Propriety'], fr:['Trois unités','Raison','Bienséance'] } },

  { id:'enlightenment', region:'europe', start:1700, end:1790, color:'#d2a64a',
    name:{ zh:'啟蒙運動', en:'Enlightenment', fr:'Lumières' },
    yrs:{ zh:'18 世紀', en:'18th century', fr:'XVIIIe siècle' },
    desc:{ zh:'哲學家相信理性能照亮迷信與專制，文學成了思想的武器。諷刺小說、書信體小說與百科全書四處流傳，伏爾泰以機智嘲諷教會與戰爭，盧梭則高舉情感與自然，為法國大革命與浪漫主義鋪路。',
          en:'Philosophers believed reason could dispel superstition and despotism, and literature became a weapon of ideas. Satirical tales, epistolary novels and the Encyclopédie circulated widely; Voltaire mocked church and war with wit, while Rousseau exalted feeling and nature, paving the way for the Revolution and Romanticism.',
          fr:'Les philosophes croient que la raison dissipera superstition et despotisme, et la littérature devient une arme d’idées. Contes satiriques, romans épistolaires et Encyclopédie circulent partout ; Voltaire raille l’Église et la guerre avec esprit, Rousseau exalte le sentiment et la nature, préparant la Révolution et le romantisme.' },
    keys:{ zh:['理性','諷刺','啟蒙'], en:['Reason','Satire','Progress'], fr:['Raison','Satire','Progrès'] } },

  { id:'romanticism', region:'europe', start:1790, end:1850, color:'#4f7fa8',
    name:{ zh:'浪漫主義', en:'Romanticism', fr:'Romantisme' },
    yrs:{ zh:'1790 至 1850 年', en:'1790 to 1850', fr:'1790 à 1850' },
    desc:{ zh:'對啟蒙理性的反動：作家歌頌情感、想像、自然、民族與孤獨的天才。哥德式的廢墟、暴風雨與禁忌之愛成為常見意象；同一時代，奧斯汀卻以冷靜的反諷描寫英國鄉紳的婚姻，提醒我們一個時代從不只有一種聲音。',
          en:'A reaction against Enlightenment reason: writers celebrated feeling, imagination, nature, nation and the solitary genius. Gothic ruins, storms and forbidden love became common images; in the same years Austen dissected gentry marriages with cool irony, a reminder that no age speaks with a single voice.',
          fr:'Réaction contre la raison des Lumières : les écrivains célèbrent le sentiment, l’imagination, la nature, la nation et le génie solitaire. Ruines gothiques, tempêtes et amours interdites deviennent des images familières ; à la même époque, Austen dissèque avec une ironie froide les mariages de la gentry, preuve qu’une époque n’a jamais une seule voix.' },
    keys:{ zh:['情感','自然','天才'], en:['Feeling','Nature','Genius'], fr:['Sentiment','Nature','Génie'] } },

  { id:'realism', region:'europe', start:1830, end:1890, color:'#7a6a4f',
    name:{ zh:'寫實主義', en:'Realism', fr:'Réalisme' },
    yrs:{ zh:'1830 至 1890 年', en:'1830 to 1890', fr:'1830 à 1890' },
    desc:{ zh:'工業化與城市化的時代，小說成為社會的鏡子。作家以細密的觀察描寫金錢、階級、婚姻與野心，人物有完整的社會背景與心理；俄國的長篇小說更把道德與信仰的追問推到極致，被視為小說藝術的高峰。',
          en:'In an age of industry and cities, the novel became society’s mirror. Writers observed money, class, marriage and ambition in fine detail, giving characters full social and psychological depth; the great Russian novels pushed moral and religious questioning to its limit and are often seen as the summit of the form.',
          fr:'À l’ère de l’industrie et des villes, le roman devient le miroir de la société. Les écrivains observent minutieusement argent, classes, mariage et ambition, donnant aux personnages une pleine profondeur sociale et psychologique ; les grands romans russes poussent à l’extrême l’interrogation morale et religieuse, souvent tenus pour le sommet du genre.' },
    keys:{ zh:['社會','金錢','心理'], en:['Society','Money','Psychology'], fr:['Société','Argent','Psychologie'] } },

  { id:'symbolism', region:'europe', start:1857, end:1905, color:'#6c5a8e',
    name:{ zh:'象徵主義與自然主義', en:'Symbolism & Naturalism', fr:'Symbolisme et naturalisme' },
    yrs:{ zh:'1857 至 1905 年', en:'1857 to 1905', fr:'1857 à 1905' },
    desc:{ zh:'十九世紀下半的兩條路：自然主義以近乎科學實驗的方式，描寫遺傳與環境如何決定底層人的命運；象徵主義則轉向內心，用音樂般的語言與暗示捕捉無法直說的感受。契訶夫則在平淡的日常中寫出深沉的憂傷。',
          en:'Two paths in the late nineteenth century: Naturalism portrayed, almost like a scientific experiment, how heredity and environment decide the fate of the poor, while Symbolism turned inward, using musical language and suggestion to catch what cannot be said outright. Chekhov found deep melancholy in plain everyday life.',
          fr:'Deux voies à la fin du XIXe siècle : le naturalisme montre, presque comme une expérience scientifique, comment hérédité et milieu décident du sort des humbles, tandis que le symbolisme se tourne vers l’intérieur, saisissant par la musique et la suggestion ce qui ne peut se dire. Tchekhov trouve une mélancolie profonde dans la banalité du quotidien.' },
    keys:{ zh:['暗示','遺傳與環境','現代城市'], en:['Suggestion','Heredity','Modern city'], fr:['Suggestion','Hérédité','Ville moderne'] } },

  { id:'modernism', region:'europe', start:1900, end:1945, color:'#3d8a7a',
    name:{ zh:'現代主義', en:'Modernism', fr:'Modernisme' },
    yrs:{ zh:'1900 至 1945 年', en:'1900 to 1945', fr:'1900 à 1945' },
    desc:{ zh:'一戰、佛洛伊德與現代都市打碎了舊的確定性。作家放棄全知的敘事，改用「意識流」追蹤人物腦中跳躍的念頭，用記憶與時間重組小說結構，或以荒謬的寓言呈現個人在龐大體制前的無力。',
          en:'The First World War, Freud and the modern metropolis shattered old certainties. Writers abandoned omniscient narration for the stream of consciousness that follows a mind’s leaps, rebuilt the novel around memory and time, or used absurd fables to show the individual powerless before vast systems.',
          fr:'La Grande Guerre, Freud et la métropole moderne brisent les anciennes certitudes. Les écrivains abandonnent le narrateur omniscient pour le courant de conscience qui suit les sauts d’un esprit, reconstruisent le roman autour de la mémoire et du temps, ou recourent à la fable absurde pour montrer l’individu impuissant face aux systèmes.' },
    keys:{ zh:['意識流','時間與記憶','荒謬'], en:['Stream of consciousness','Memory','Absurd'], fr:['Courant de conscience','Mémoire','Absurde'] } },

  { id:'chinesemodern', region:'eastasia', start:1918, end:1970, color:'#9c3b3b',
    name:{ zh:'中國現代文學', en:'Modern Chinese Literature', fr:'Littérature chinoise moderne' },
    yrs:{ zh:'1918 至 1970 年', en:'1918 to 1970', fr:'1918 à 1970' },
    desc:{ zh:'五四新文化運動提倡白話文，作家用文學「救國」與批判舊傳統。魯迅以冷峻的短篇解剖國民性，沈從文以溫柔的筆調寫湘西邊城，張愛玲則在上海與香港的洋場裡寫盡男女的蒼涼與算計。',
          en:'The May Fourth movement championed the vernacular, and writers used literature to save the nation and attack old traditions. Lu Xun dissected the national character in icy short stories, Shen Congwen wrote tenderly of the West Hunan frontier, and Eileen Chang captured the desolation and calculation of love in cosmopolitan Shanghai and Hong Kong.',
          fr:'Le mouvement du 4 Mai promeut la langue vernaculaire, et les écrivains veulent sauver la nation et critiquer la tradition. Lu Xun dissèque le caractère national dans des nouvelles glaciales, Shen Congwen peint avec tendresse les confins du Hunan occidental, et Eileen Chang saisit la désolation et les calculs amoureux dans le Shanghai et le Hong Kong cosmopolites.' },
    keys:{ zh:['五四','白話文','國民性'], en:['May Fourth','Vernacular','National character'], fr:['4 Mai','Vernaculaire','Caractère national'] } },

  { id:'postwar', region:'europe', start:1940, end:1975, color:'#5a6470',
    name:{ zh:'存在主義與戰後文學', en:'Existentialism & Postwar', fr:'Existentialisme et après-guerre' },
    yrs:{ zh:'1940 至 1975 年', en:'1940 to 1975', fr:'1940 à 1975' },
    desc:{ zh:'二戰與集中營之後，文學追問：在沒有上帝與意義的世界裡，人如何自由地選擇並承擔責任？存在主義小說、荒誕劇與反烏托邦寓言各自回答，也對極權、殖民與性別不平等提出尖銳批判。',
          en:'After the war and the camps, literature asked how people could freely choose and bear responsibility in a world without God or given meaning. Existentialist novels, the Theatre of the Absurd and dystopian fables each answered, launching sharp critiques of totalitarianism, colonialism and gender inequality.',
          fr:'Après la guerre et les camps, la littérature demande comment choisir librement et assumer sa responsabilité dans un monde sans Dieu ni sens donné. Romans existentialistes, théâtre de l’absurde et dystopies y répondent chacun, en critiquant vivement le totalitarisme, le colonialisme et l’inégalité des sexes.' },
    keys:{ zh:['自由','荒誕','極權'], en:['Freedom','Absurd','Totalitarianism'], fr:['Liberté','Absurde','Totalitarisme'] } },

  { id:'latin', region:'americas', start:1940, end:1990, color:'#c2703d',
    name:{ zh:'拉丁美洲文學爆炸', en:'Latin American Boom', fr:'Boom latino-américain' },
    yrs:{ zh:'1940 至 1990 年', en:'1940 to 1990', fr:'1940 à 1990' },
    desc:{ zh:'拉丁美洲作家把神話、政治暴力與家族史熔於一爐。「魔幻寫實」讓奇蹟以平靜的語氣出現在日常裡，波赫士則以迷宮、鏡子與無限的圖書館寫哲學短篇；1960 年代起，這些作品席捲全球，被稱為「文學爆炸」。',
          en:'Latin American writers fused myth, political violence and family saga. Magical realism lets miracles appear in daily life in a calm voice, while Borges wrote philosophical stories of labyrinths, mirrors and infinite libraries; from the 1960s these books swept the world in what was called the Boom.',
          fr:'Les écrivains latino-américains fondent mythe, violence politique et saga familiale. Le réalisme magique fait surgir le miracle dans le quotidien d’un ton paisible, tandis que Borges écrit des contes philosophiques de labyrinthes, de miroirs et de bibliothèques infinies ; dès les années 1960, ces livres déferlent sur le monde : c’est le Boom.' },
    keys:{ zh:['魔幻寫實','迷宮','家族史'], en:['Magical realism','Labyrinth','Saga'], fr:['Réalisme magique','Labyrinthe','Saga'] } },

  { id:'contemporary', region:'world', start:1970, end:2025, color:'#4a8c8c',
    name:{ zh:'當代世界文學', en:'Contemporary World Literature', fr:'Littérature mondiale contemporaine' },
    yrs:{ zh:'1970 年至今', en:'1970 to today', fr:'De 1970 à nos jours' },
    desc:{ zh:'後殖民、移民與全球化讓文學不再以西方為中心。作家在多種語言與文化之間寫作，處理記憶、創傷、種族與身分認同；敘事手法則在寫實、魔幻與後設之間自由切換，經典與類型小說的界線也愈來愈模糊。',
          en:'Postcolonialism, migration and globalisation have decentred literature from the West. Writers work between languages and cultures, addressing memory, trauma, race and identity, moving freely between realism, the fantastic and metafiction while the line between literary and genre fiction blurs.',
          fr:'Postcolonialisme, migrations et mondialisation décentrent la littérature de l’Occident. Les écrivains travaillent entre langues et cultures, abordant mémoire, trauma, race et identité, passant librement du réalisme au fantastique et à la métafiction, tandis que s’estompe la frontière entre littérature et genres.' },
    keys:{ zh:['記憶','身分','跨文化'], en:['Memory','Identity','Cross-cultural'], fr:['Mémoire','Identité','Interculturel'] } },
];

/* 入門書單：a = 作家 id，w = 該作家 works 的索引 */
var LIT_READING = [
  { a:'camus', w:0, why:{ zh:'篇幅短、句子清楚，一個下午讀完，卻會讓你想很久：「荒謬」從這裡入門最好。', en:'Short and lucid, read in an afternoon yet haunting for weeks: the best doorway into the absurd.', fr:'Court et limpide, lu en un après-midi mais obsédant longtemps : la meilleure porte d’entrée vers l’absurde.' } },
  { a:'austen', w:0, why:{ zh:'機智的對話與誤會，像一部好看的愛情喜劇，也是學會欣賞「反諷」的最佳教材。', en:'Witty dialogue and misunderstandings like a great romantic comedy, and the best lesson in reading irony.', fr:'Dialogues spirituels et malentendus comme une grande comédie romantique, et la meilleure école de l’ironie.' } },
  { a:'garciamarquez', w:0, why:{ zh:'一個家族七代人的興衰，魔幻與歷史交織；建議邊讀邊畫族譜，因為名字一再重複。', en:'Seven generations of one family, magic woven with history; sketch a family tree as you go, since the names repeat.', fr:'Sept générations d’une famille, magie et histoire mêlées ; dessinez l’arbre généalogique en lisant, les prénoms se répètent.' } },
  { a:'luxun', w:0, why:{ zh:'中文現代小說的起點之一，短篇就能讀到深刻的社會批判。', en:'One of the starting points of modern Chinese fiction, with deep social critique in a short story.', fr:'L’un des points de départ de la fiction chinoise moderne, une critique sociale profonde en une nouvelle.' } },
  { a:'orwell', w:0, why:{ zh:'「老大哥在看著你」：讀完會發現，日常語言裡到處都是這本書留下的詞彙。', en:'“Big Brother is watching you”: afterwards you notice its vocabulary everywhere in daily language.', fr:'« Big Brother vous regarde » : après lecture, on retrouve son vocabulaire partout dans la langue courante.' } },
  { a:'kafka', w:0, why:{ zh:'第一句話就讓人變成蟲，卻是一個關於家庭、工作與孤獨的寫實故事。', en:'The first sentence turns a man into an insect, yet it is a realistic story about family, work and loneliness.', fr:'Dès la première phrase, un homme devient insecte, et pourtant c’est une histoire réaliste de famille, de travail et de solitude.' } },
  { a:'ishiguro', w:1, why:{ zh:'溫柔安靜的語氣，慢慢揭開殘酷的真相，適合喜歡細膩情感的讀者。', en:'A gentle, quiet voice slowly reveals a cruel truth, ideal for readers who love subtle emotion.', fr:'Une voix douce et tranquille dévoile peu à peu une vérité cruelle, idéale pour les amateurs d’émotions subtiles.' } },
  { a:'shakespeare', w:0, why:{ zh:'建議先看一部好的舞台或電影版本，再讀劇本，會發現許多成語都出自這裡。', en:'Watch a good stage or film version first, then read the play: you will find many everyday phrases came from here.', fr:'Voyez d’abord une bonne mise en scène ou un film, puis lisez la pièce : bien des expressions courantes en viennent.' } },
  { a:'dostoevsky', w:0, why:{ zh:'像一部心理驚悚小說：殺人之後，真正的審判在主角的良心裡展開。', en:'Reads like a psychological thriller: after the murder, the real trial unfolds in the hero’s conscience.', fr:'Se lit comme un thriller psychologique : après le meurtre, le vrai procès se joue dans la conscience du héros.' } },
  { a:'caoxueqin', w:0, why:{ zh:'中文小說的巔峰；可先讀前五回掌握人物與「太虛幻境」的預言，再慢慢讀下去。', en:'The summit of Chinese fiction; read the first five chapters to meet the cast and the prophecy of the Land of Illusion, then take your time.', fr:'Sommet du roman chinois ; lisez les cinq premiers chapitres pour connaître les personnages et la prophétie du Pays de l’Illusion, puis prenez votre temps.' } },
];
