/* ═══════════ 國別史：依國家篩選，線性 + 主題式敘事 ═══════════
   Each country is a matrix: PERIODS (the linear spine) × THEMES (the
   threads). The linear view reads it row by row, the thematic view
   reads one column top to bottom. To add a country, append an entry
   to COUNTRIES with the same shape; the chips and both views follow. */

const CX_THEMES = [
  { id:'state',   icon:'🏛️', color:'#c9a85c',
    name:{ zh:'國家與政體', en:'State & Regime', fr:'État et régime' },
    intro:{ zh:'從部族、封建到中央集權的共和：看權力如何一步步收向巴黎。',
      en:'From tribes and feudal lords to a centralised republic: how power was drawn steadily towards Paris.',
      fr:'Des tribus et seigneurs féodaux à la République centralisée : comment le pouvoir s’est peu à peu concentré à Paris.' } },
  { id:'faith',   icon:'⛪', color:'#9a8ab8',
    name:{ zh:'宗教與世俗', en:'Religion & Secularism', fr:'Religion et laïcité' },
    intro:{ zh:'從「教會長女」到世俗共和：宗教始終是法國政治的核心戰場。',
      en:'From “eldest daughter of the Church” to secular republic: religion has always been a front line of French politics.',
      fr:'De « fille aînée de l’Église » à République laïque : la religion a toujours été un front majeur de la politique française.' } },
  { id:'society', icon:'⚒️', color:'#7fa07a',
    name:{ zh:'社會與經濟', en:'Society & Economy', fr:'Société et économie' },
    intro:{ zh:'土地、城市與工作：從莊園與小農，到工業化與福利國家。',
      en:'Land, towns and work: from manors and smallholders to industry and the welfare state.',
      fr:'La terre, la ville et le travail : des domaines et petits paysans à l’industrie et à l’État-providence.' } },
  { id:'culture', icon:'✒️', color:'#c48a6a',
    name:{ zh:'思想與文化', en:'Ideas & Culture', fr:'Idées et culture' },
    intro:{ zh:'語言、思想與藝術：法國如何成為歐洲的文化中心，又如何把文化當成國家事業。',
      en:'Language, ideas and art: how France became a cultural centre of Europe, and why culture became an affair of state.',
      fr:'Langue, idées et arts : comment la France est devenue un centre culturel de l’Europe, et pourquoi la culture est devenue une affaire d’État.' } },
  { id:'world',   icon:'🌍', color:'#6a94b0',
    name:{ zh:'法國與世界', en:'France & the World', fr:'La France et le monde' },
    intro:{ zh:'戰爭、帝國與歐洲：從歐陸爭霸、海外殖民到推動歐洲整合。',
      en:'War, empire and Europe: from continental rivalry and overseas colonies to building the European Union.',
      fr:'Guerre, empire et Europe : des rivalités continentales et des colonies à la construction européenne.' } },
];

const COUNTRIES = [
{
  id:'france', flag:'flag-fr', color:'#6a7fb0',
  name:{ zh:'法國', en:'France', fr:'France' },
  intro:{ zh:'法國常被稱為「由國家塑造的民族」：先有王權把領土一塊塊收攏，才有共同的語言與認同。這裡用兩種方式閱讀同一段歷史：線性敘事沿著十一個時期往下走，主題敘事則挑一條線索，貫穿兩千六百年看它如何變化。',
    en:'France is often called a nation made by its state: the crown gathered the land piece by piece before a shared language and identity followed. Read the same history two ways: the linear narrative walks through eleven periods in order, while the thematic narrative follows one thread across 2,600 years.',
    fr:'On dit souvent de la France qu’elle est une nation façonnée par son État : la couronne a rassemblé le territoire pièce par pièce, avant qu’une langue et une identité communes ne suivent. Lisez la même histoire de deux façons : le récit linéaire parcourt onze périodes dans l’ordre, le récit thématique suit un fil à travers 2 600 ans.' },
  periods:[
  {
    id:'gaul', icon:'🛡️', start:-600, end:486, world:'roman',
    name:{ zh:'高盧與羅馬高盧', en:'Gaul and Roman Gaul', fr:'La Gaule et la Gaule romaine' },
    summary:{ zh:'凱爾特部族在今日法國的土地上建立部落與城鎮。凱撒征服之後，高盧在羅馬帝國之內度過五百年，拉丁語、城市與道路成為法國文明的底層。',
      en:'Celtic peoples built tribes and towns across what is now France. After Caesar’s conquest, Gaul spent five centuries inside the Roman Empire, and Latin, cities and roads became the bedrock of French civilisation.',
      fr:'Des peuples celtes fondent tribus et bourgades sur le territoire actuel de la France. Après la conquête de César, la Gaule passe cinq siècles dans l’Empire romain : latin, villes et routes deviennent le socle de la civilisation française.' },
    events:[
      { y:-600, zh:'希臘人建立馬薩利亞（今馬賽）', en:'Greeks found Massalia, today’s Marseille', fr:'Des Grecs fondent Massalia, l’actuelle Marseille' },
      { y:-52,  zh:'阿萊西亞之戰，維欽托利向凱撒投降', en:'Siege of Alesia: Vercingetorix surrenders to Caesar', fr:'Siège d’Alésia : Vercingétorix se rend à César' },
      { y:177,  zh:'里昂的基督徒殉道，高盧最早的教會紀錄', en:'Martyrs of Lyon, the earliest record of the Church in Gaul', fr:'Martyrs de Lyon, première trace de l’Église en Gaule' },
      { y:406,  zh:'汪達爾等日耳曼部族渡過萊茵河', en:'Vandals and other Germanic peoples cross the Rhine', fr:'Vandales et autres peuples germaniques franchissent le Rhin' },
    ],
    themes:{
      state:{ zh:'高盧由數十個彼此競爭的部族組成，沒有統一的國家。羅馬把它劃為行省，以城市為行政核心，里昂成為高盧首府。',
        en:'Gaul was a patchwork of rival tribes with no single state. Rome organised it into provinces run from cities, with Lyon as the capital of the Gauls.',
        fr:'La Gaule est une mosaïque de peuples rivaux, sans État unique. Rome l’organise en provinces administrées depuis les villes, Lyon devenant la capitale des Gaules.' },
      faith:{ zh:'德魯伊主持凱爾特宗教，羅馬時期高盧與羅馬的神祇相互融合。基督教在二世紀傳入，四世紀圖爾的聖馬丁把它帶進鄉村。',
        en:'Druids led Celtic religion, and Roman rule blended Gallic and Roman gods. Christianity arrived in the second century, and in the fourth Martin of Tours carried it into the countryside.',
        fr:'Les druides dirigent la religion celtique, et l’époque romaine mêle dieux gaulois et romains. Le christianisme arrive au IIᵉ siècle ; au IVᵉ, saint Martin de Tours l’implante dans les campagnes.' },
      society:{ zh:'羅馬道路、別墅莊園與葡萄種植改造了鄉村，尼姆、阿爾勒等城市興起，高盧成為帝國的糧倉與兵源。',
        en:'Roman roads, villa estates and vineyards transformed the countryside. Cities such as Nîmes and Arles flourished, and Gaul supplied the empire with grain and soldiers.',
        fr:'Routes romaines, villae et vignobles transforment les campagnes. Des villes comme Nîmes et Arles prospèrent, et la Gaule fournit à l’Empire blé et soldats.' },
      culture:{ zh:'拉丁語逐步取代高盧語，成為日後法語的根源。凱撒的《高盧戰記》至今仍是了解高盧人最主要的文字資料。',
        en:'Latin gradually replaced Gaulish and became the root of French. Caesar’s Gallic War remains the main written source on the Gauls.',
        fr:'Le latin remplace peu à peu le gaulois et devient la racine du français. La Guerre des Gaules de César reste la principale source écrite sur les Gaulois.' },
      world:{ zh:'高盧位在羅馬與日耳曼世界的交界。三世紀起邊境屢遭入侵，到了五世紀，法蘭克人、西哥德人與勃艮第人瓜分了這片土地。',
        en:'Gaul sat on the frontier between Rome and the Germanic world. From the third century raids multiplied, and by the fifth Franks, Visigoths and Burgundians had divided the land.',
        fr:'La Gaule se trouve à la frontière entre Rome et le monde germanique. Dès le IIIᵉ siècle les incursions se multiplient ; au Vᵉ, Francs, Wisigoths et Burgondes se partagent le territoire.' },
    }
  },
  {
    id:'franks', icon:'👑', start:486, end:987, world:'medieval',
    name:{ zh:'法蘭克王國', en:'The Frankish Kingdoms', fr:'Les royaumes francs' },
    summary:{ zh:'克洛維擊敗高盧最後的羅馬勢力，並皈依天主教。墨洛溫與加洛林兩代王朝把高盧變成法蘭克人的王國；查理曼加冕為帝後，帝國在孫輩手中一分為三，西法蘭克成為法國的前身。',
      en:'Clovis defeated the last Roman ruler in Gaul and converted to Catholicism. The Merovingian and Carolingian dynasties turned Gaul into a Frankish realm; after Charlemagne’s imperial crowning, his grandsons split the empire, and West Francia became the ancestor of France.',
      fr:'Clovis bat le dernier pouvoir romain en Gaule et se convertit au catholicisme. Mérovingiens puis Carolingiens font de la Gaule un royaume franc ; après le couronnement impérial de Charlemagne, ses petits-fils partagent l’empire, et la Francie occidentale devient l’ancêtre de la France.' },
    events:[
      { y:486, zh:'蘇瓦松之戰，克洛維擊敗羅馬將領西阿格里烏斯', en:'Battle of Soissons: Clovis defeats the Roman general Syagrius', fr:'Bataille de Soissons : Clovis bat le général romain Syagrius' },
      { y:500, c:true, zh:'克洛維在蘭斯受洗', en:'Clovis is baptised at Reims', fr:'Baptême de Clovis à Reims' },
      { y:732, zh:'普瓦捷之戰，查理·馬特擊退倭馬亞軍隊', en:'Battle of Poitiers: Charles Martel halts an Umayyad army', fr:'Bataille de Poitiers : Charles Martel arrête une armée omeyyade' },
      { y:800, zh:'查理曼在羅馬加冕為皇帝', en:'Charlemagne crowned emperor in Rome', fr:'Charlemagne couronné empereur à Rome' },
      { y:843, zh:'凡爾登條約把帝國一分為三', en:'Treaty of Verdun divides the empire in three', fr:'Le traité de Verdun partage l’empire en trois' },
    ],
    themes:{
      state:{ zh:'法蘭克人把王國視為王室私產，由諸子平分，因此反覆分裂。加洛林王朝以伯爵與巡察使治理地方，但王權在九世紀的維京入侵中衰落。',
        en:'The Franks treated the kingdom as family property shared among sons, so it split again and again. The Carolingians ruled through counts and royal envoys, but royal power waned under the Viking raids of the ninth century.',
        fr:'Les Francs traitent le royaume comme un bien familial partagé entre les fils, d’où des partages répétés. Les Carolingiens gouvernent par les comtes et les missi dominici, mais le pouvoir royal décline sous les raids vikings du IXᵉ siècle.' },
      faith:{ zh:'克洛維選擇天主教而非亞流派，與高盧羅馬的主教結盟，法國因此有「教會長女」之稱。丕平在教宗支持下受膏，王權從此帶有神聖色彩。',
        en:'Clovis chose Catholicism over Arianism and allied with the Gallo-Roman bishops, which earned France the title “eldest daughter of the Church”. Pepin was anointed with papal blessing, giving kingship a sacred aura.',
        fr:'Clovis choisit le catholicisme plutôt que l’arianisme et s’allie aux évêques gallo-romains, d’où le titre de « fille aînée de l’Église ». Pépin reçoit l’onction avec l’appui du pape, et la royauté prend un caractère sacré.' },
      society:{ zh:'城市萎縮，經濟轉向自給自足的莊園。大地主與修道院掌握土地，自由農民逐漸依附於領主。',
        en:'Towns shrank and the economy fell back on self-sufficient estates. Great landowners and monasteries held the land, and free peasants slid into dependence on lords.',
        fr:'Les villes se rétractent et l’économie se replie sur des domaines autarciques. Grands propriétaires et monastères tiennent la terre, et les paysans libres tombent peu à peu sous la dépendance des seigneurs.' },
      culture:{ zh:'加洛林文藝復興在宮廷學校與修道院抄寫古典文獻，並創造了加洛林小寫字體。842年的《斯特拉斯堡誓言》是最早的古法語文獻之一。',
        en:'The Carolingian Renaissance copied classical texts in palace schools and monasteries and created the Carolingian minuscule. The Oaths of Strasbourg of 842 are among the earliest texts in Old French.',
        fr:'La renaissance carolingienne recopie les textes antiques à l’école du palais et dans les monastères, et crée la minuscule caroline. Les Serments de Strasbourg (842) comptent parmi les plus anciens textes en langue romane.' },
      world:{ zh:'查理曼的帝國從庇里牛斯山延伸到易北河。凡爾登條約把它分為西、中、東三國，西法蘭克與東法蘭克日後分別演變為法國與德國。',
        en:'Charlemagne’s empire stretched from the Pyrenees to the Elbe. The Treaty of Verdun cut it into western, middle and eastern kingdoms, and West and East Francia later grew into France and Germany.',
        fr:'L’empire de Charlemagne s’étend des Pyrénées à l’Elbe. Le traité de Verdun le divise en trois royaumes ; la Francie occidentale et la Francie orientale deviendront la France et l’Allemagne.' },
    }
  },
  {
    id:'capetian', icon:'⚜️', start:987, end:1328, world:'medieval',
    name:{ zh:'卡佩王朝與中世紀盛期', en:'The Capetians and the High Middle Ages', fr:'Les Capétiens et le Moyen Âge central' },
    summary:{ zh:'雨果·卡佩登基時，王室只直接控制巴黎與奧爾良一帶。三百多年間，卡佩王朝靠婚姻、戰爭與法律，把四分五裂的封建領地收攏為以巴黎為中心的王國。',
      en:'When Hugh Capet took the throne, the crown directly held little more than the land around Paris and Orléans. Over three centuries the Capetians used marriage, war and law to gather scattered feudal lands into a kingdom centred on Paris.',
      fr:'À l’avènement d’Hugues Capet, la couronne ne contrôle guère que la région de Paris et d’Orléans. En trois siècles, les Capétiens rassemblent par mariages, guerres et droit des terres féodales éclatées en un royaume centré sur Paris.' },
    events:[
      { y:987,  zh:'雨果·卡佩被推舉為國王', en:'Hugh Capet elected king', fr:'Hugues Capet élu roi' },
      { y:1163, zh:'巴黎聖母院動工', en:'Construction of Notre-Dame de Paris begins', fr:'Début de la construction de Notre-Dame de Paris' },
      { y:1214, zh:'布汶戰役，腓力二世擊敗英格蘭與神聖羅馬帝國聯軍', en:'Battle of Bouvines: Philip II defeats an English and imperial coalition', fr:'Bataille de Bouvines : Philippe Auguste bat la coalition anglo-impériale' },
      { y:1270, zh:'路易九世在十字軍途中死於突尼斯', en:'Louis IX dies at Tunis on crusade', fr:'Louis IX meurt devant Tunis en croisade' },
      { y:1302, zh:'腓力四世召開首次三級會議', en:'Philip IV summons the first Estates General', fr:'Philippe le Bel réunit les premiers états généraux' },
    ],
    themes:{
      state:{ zh:'腓力二世從英格蘭金雀花王朝手中奪回諾曼第等地，並派王室官員管理領地。腓力四世與教宗對抗，開始倚重法學家治國。',
        en:'Philip II won Normandy and other lands from the Plantagenet kings of England and sent royal officials to govern them. Philip IV defied the pope and came to rely on trained lawyers to rule.',
        fr:'Philippe Auguste reprend la Normandie et d’autres terres aux Plantagenêts et y envoie des baillis royaux. Philippe le Bel défie le pape et gouverne en s’appuyant sur des légistes.' },
      faith:{ zh:'克呂尼與熙篤修會的改革遍及歐洲。王室支持十字軍，也參與阿爾比十字軍，鎮壓南方的清潔派；路易九世死後被封為聖人。',
        en:'Reform movements from Cluny and Cîteaux spread across Europe. The crown backed the crusades and joined the Albigensian Crusade against the Cathars of the south; Louis IX was made a saint after his death.',
        fr:'Les réformes de Cluny et de Cîteaux rayonnent sur l’Europe. La couronne soutient les croisades et prend part à la croisade des Albigeois contre les cathares du Midi ; Louis IX est canonisé après sa mort.' },
      society:{ zh:'人口與耕地大幅擴張，香檳市集連結義大利與法蘭德斯的商人，城市取得自治特許狀，巴黎成為西歐最大的城市之一。',
        en:'Population and farmland grew sharply. The Champagne fairs linked Italian and Flemish merchants, towns won charters of self-government, and Paris became one of the largest cities in Western Europe.',
        fr:'Population et terres cultivées augmentent fortement. Les foires de Champagne relient marchands italiens et flamands, les villes obtiennent des chartes de franchise, et Paris devient l’une des plus grandes villes d’Occident.' },
      culture:{ zh:'哥德式建築從聖德尼修道院發展出來，巴黎大學成為神學重鎮。北方的武功歌與南方奧克語的吟遊詩人，開創了法國文學。',
        en:'Gothic architecture grew out of the abbey of Saint-Denis, and the University of Paris became the centre of theology. Epic chansons de geste in the north and Occitan troubadours in the south founded French literature.',
        fr:'L’art gothique naît à l’abbaye de Saint-Denis et l’université de Paris devient le grand centre de théologie. Chansons de geste au nord et troubadours de langue d’oc au sud fondent la littérature française.' },
      world:{ zh:'卡佩王室捲入十字軍與英法領地之爭。1309年起教宗駐在亞維儂，顯示法國王權在基督教世界的影響力。',
        en:'The Capetians were drawn into the crusades and into territorial quarrels with England. From 1309 the popes resided at Avignon, a sign of French royal influence in Christendom.',
        fr:'Les Capétiens s’engagent dans les croisades et dans les querelles territoriales avec l’Angleterre. À partir de 1309, la papauté réside à Avignon, signe de l’influence de la monarchie française dans la chrétienté.' },
    }
  },
  {
    id:'valois', icon:'⚔️', start:1328, end:1515, world:'medieval',
    name:{ zh:'百年戰爭與王權重建', en:'The Hundred Years’ War and Royal Recovery', fr:'La guerre de Cent Ans et le redressement royal' },
    summary:{ zh:'卡佩直系絕嗣後，瓦盧瓦家族與英格蘭國王爭奪王位，引發百年戰爭。黑死病、內戰與外患幾乎拖垮王國，最後卻換來常備軍、固定稅收與更強的王權。',
      en:'When the direct Capetian line died out, the Valois and the kings of England fought over the throne in the Hundred Years’ War. Plague, civil war and invasion nearly broke the kingdom, yet it emerged with a standing army, regular taxes and a stronger crown.',
      fr:'À l’extinction des Capétiens directs, les Valois et les rois d’Angleterre se disputent le trône : c’est la guerre de Cent Ans. Peste, guerre civile et invasion manquent de briser le royaume, qui en sort pourtant avec une armée permanente, un impôt régulier et une monarchie renforcée.' },
    events:[
      { y:1337, zh:'百年戰爭爆發', en:'The Hundred Years’ War begins', fr:'Début de la guerre de Cent Ans' },
      { y:1348, zh:'黑死病傳入法國', en:'The Black Death reaches France', fr:'La peste noire atteint la France' },
      { y:1415, zh:'阿金庫爾戰役，法國騎士慘敗', en:'Battle of Agincourt: a crushing defeat for French knights', fr:'Bataille d’Azincourt : désastre pour la chevalerie française' },
      { y:1429, zh:'聖女貞德解奧爾良之圍', en:'Joan of Arc relieves the siege of Orléans', fr:'Jeanne d’Arc délivre Orléans' },
      { y:1453, zh:'卡斯蒂永戰役，英格蘭在法國只剩加萊', en:'Battle of Castillon: England keeps only Calais', fr:'Bataille de Castillon : l’Angleterre ne garde que Calais' },
    ],
    themes:{
      state:{ zh:'查理七世建立王家常備軍與固定的直接稅「人頭稅」，路易十一收回勃艮第公國等大貴族的領地，王權壓過了諸侯。',
        en:'Charles VII created a permanent royal army and a regular direct tax, the taille. Louis XI absorbed the duchy of Burgundy and other great fiefs, and the crown prevailed over the princes.',
        fr:'Charles VII crée une armée royale permanente et un impôt régulier, la taille. Louis XI récupère le duché de Bourgogne et d’autres grands fiefs : la couronne l’emporte sur les princes.' },
      faith:{ zh:'教會大分裂期間，法國支持亞維儂的教宗。1438年的《布爾日國事詔書》確立法國教會相對於羅馬的自主，也就是「高盧主義」。',
        en:'During the Great Schism France backed the Avignon popes. The Pragmatic Sanction of Bourges in 1438 asserted the French Church’s autonomy from Rome, known as Gallicanism.',
        fr:'Pendant le Grand Schisme, la France soutient les papes d’Avignon. La Pragmatique Sanction de Bourges (1438) affirme l’autonomie de l’Église de France face à Rome : c’est le gallicanisme.' },
      society:{ zh:'黑死病奪走約三分之一的人口，勞力短缺與戰亂引發1358年的扎克雷農民起義。戰後重建時，倖存農民的處境反而常有改善。',
        en:'The Black Death killed about a third of the population, and labour shortages and war fuelled the Jacquerie peasant revolt of 1358. In the recovery that followed, surviving peasants often found their lot improved.',
        fr:'La peste noire emporte environ un tiers de la population ; pénurie de main-d’œuvre et guerre nourrissent la Jacquerie de 1358. Lors de la reconstruction, les paysans survivants voient souvent leur sort s’améliorer.' },
      culture:{ zh:'貞德的故事成為民族認同的象徵。維永的詩歌，以及《貝里公爵的豪華時禱書》等手抄本插畫，代表這個時代的文化成就。',
        en:'Joan of Arc’s story became a symbol of national identity. François Villon’s poetry and illuminated manuscripts such as the Très Riches Heures du duc de Berry mark the culture of the age.',
        fr:'L’histoire de Jeanne d’Arc devient un symbole de l’identité nationale. La poésie de François Villon et les enluminures des Très Riches Heures du duc de Berry marquent la culture de l’époque.' },
      world:{ zh:'戰爭起於王位繼承與吉耶訥領地之爭，結束時英格蘭勢力退出歐陸。1494年查理八世入侵義大利，揭開義大利戰爭的序幕。',
        en:'The war began over the succession and the duchy of Guyenne and ended with England driven from the continent. In 1494 Charles VIII invaded Italy, opening the Italian Wars.',
        fr:'Née d’une querelle de succession et de la question de Guyenne, la guerre s’achève par le départ des Anglais du continent. En 1494, Charles VIII envahit l’Italie et ouvre les guerres d’Italie.' },
    }
  },
  {
    id:'renaissance', icon:'🏰', start:1515, end:1610, world:'reformation',
    name:{ zh:'文藝復興與宗教戰爭', en:'Renaissance and Wars of Religion', fr:'Renaissance et guerres de Religion' },
    summary:{ zh:'法蘭索瓦一世把義大利文藝復興帶進法國宮廷，並規定官方文書使用法語。隨後新教傳入，天主教徒與胡格諾派爆發三十多年的內戰，直到亨利四世頒布南特詔書。',
      en:'Francis I brought the Italian Renaissance to the French court and made French the language of official acts. Protestantism then spread, and Catholics and Huguenots fought for more than thirty years until Henry IV issued the Edict of Nantes.',
      fr:'François Iᵉʳ fait entrer la Renaissance italienne à la cour et impose le français dans les actes officiels. Puis le protestantisme se répand, et catholiques et huguenots s’affrontent plus de trente ans, jusqu’à l’édit de Nantes d’Henri IV.' },
    events:[
      { y:1515, zh:'馬里尼亞諾戰役，法蘭索瓦一世奪取米蘭', en:'Battle of Marignano: Francis I takes Milan', fr:'Bataille de Marignan : François Iᵉʳ prend Milan' },
      { y:1539, zh:'維萊科特雷敕令規定官方文書以法語書寫', en:'Ordinance of Villers-Cotterêts makes French the language of official acts', fr:'L’ordonnance de Villers-Cotterêts impose le français dans les actes officiels' },
      { y:1562, zh:'宗教戰爭爆發', en:'The Wars of Religion begin', fr:'Début des guerres de Religion' },
      { y:1572, zh:'聖巴托洛繆大屠殺', en:'St Bartholomew’s Day massacre', fr:'Massacre de la Saint-Barthélemy' },
      { y:1598, zh:'亨利四世頒布南特詔書', en:'Henry IV issues the Edict of Nantes', fr:'Henri IV signe l’édit de Nantes' },
    ],
    themes:{
      state:{ zh:'王權透過宮廷與官職買賣擴張。宗教戰爭期間王室權威一度崩潰，直到波旁家族的亨利四世改宗天主教，才重建統一。',
        en:'The crown grew through the court and the sale of offices. Royal authority collapsed during the Wars of Religion and was restored only when the Bourbon Henry IV converted to Catholicism.',
        fr:'La monarchie s’affermit par la cour et la vénalité des offices. Son autorité s’effondre pendant les guerres de Religion et n’est restaurée qu’avec la conversion au catholicisme du Bourbon Henri IV.' },
      faith:{ zh:'1516年的《博洛尼亞協定》讓國王掌握主教任命權。喀爾文的教義在貴族與城市菁英間迅速傳播，南特詔書則給予新教徒有限的信仰自由與安全據點。',
        en:'The Concordat of Bologna in 1516 gave the king the right to name bishops. Calvin’s teaching spread fast among nobles and urban elites, and the Edict of Nantes granted Protestants limited freedom of worship and safe towns.',
        fr:'Le concordat de Bologne (1516) donne au roi la nomination des évêques. La doctrine de Calvin gagne vite noblesse et élites urbaines, et l’édit de Nantes accorde aux protestants une liberté de culte limitée et des places de sûreté.' },
      society:{ zh:'美洲白銀帶來物價上漲，羅亞爾河谷的城堡展現貴族財富，戰亂則讓許多地區飽受劫掠與饑荒。',
        en:'American silver drove prices up, and the châteaux of the Loire displayed noble wealth. War brought plunder and famine to many provinces.',
        fr:'L’argent d’Amérique fait monter les prix, et les châteaux de la Loire affichent la richesse nobiliaire. La guerre apporte pillages et famines dans de nombreuses provinces.' },
      culture:{ zh:'達文西晚年受邀定居法國。拉伯雷、蒙田與七星詩社用法語寫作，1530年設立的王家講師團就是今日的法蘭西公學院。',
        en:'Leonardo da Vinci spent his last years in France. Rabelais, Montaigne and the Pléiade poets wrote in French, and the royal lecturers founded in 1530 became today’s Collège de France.',
        fr:'Léonard de Vinci finit ses jours en France. Rabelais, Montaigne et les poètes de la Pléiade écrivent en français, et les lecteurs royaux institués en 1530 deviennent le Collège de France.' },
      world:{ zh:'法國在義大利戰爭中與哈布斯堡家族爭霸，甚至與鄂圖曼帝國結盟。卡蒂埃自1534年起探索聖羅倫斯河，開啟法國在北美的足跡。',
        en:'France fought the Habsburgs in the Italian Wars and even allied with the Ottoman Empire. Jacques Cartier explored the St Lawrence from 1534, opening France’s path into North America.',
        fr:'La France affronte les Habsbourg dans les guerres d’Italie et s’allie même à l’Empire ottoman. Jacques Cartier explore le Saint-Laurent à partir de 1534 et ouvre la voie à la présence française en Amérique du Nord.' },
    }
  },
  {
    id:'absolutism', icon:'☀️', start:1610, end:1789, world:'enlightenment_revolution',
    name:{ zh:'絕對君主制與啟蒙', en:'Absolute Monarchy and the Enlightenment', fr:'Monarchie absolue et Lumières' },
    summary:{ zh:'黎塞留與路易十四把國家權力集中到國王一人身上，凡爾賽成為歐洲宮廷的典範。但連年戰爭與財政赤字，加上啟蒙思想對權威的質疑，讓舊制度走向危機。',
      en:'Richelieu and Louis XIV concentrated power in the king, and Versailles became the model for Europe’s courts. Constant war, chronic deficits and Enlightenment challenges to authority pushed the Old Regime into crisis.',
      fr:'Richelieu puis Louis XIV concentrent le pouvoir dans la personne du roi, et Versailles devient le modèle des cours européennes. Guerres incessantes, déficits chroniques et critique des Lumières mènent l’Ancien Régime à la crise.' },
    events:[
      { y:1635, zh:'黎塞留創立法蘭西學術院', en:'Richelieu founds the Académie française', fr:'Richelieu fonde l’Académie française' },
      { y:1661, zh:'路易十四親政', en:'Louis XIV begins his personal rule', fr:'Début du règne personnel de Louis XIV' },
      { y:1682, zh:'宮廷遷往凡爾賽', en:'The court moves to Versailles', fr:'La cour s’installe à Versailles' },
      { y:1685, zh:'撤銷南特詔書', en:'Revocation of the Edict of Nantes', fr:'Révocation de l’édit de Nantes' },
      { y:1751, zh:'《百科全書》第一卷出版', en:'First volume of the Encyclopédie', fr:'Premier volume de l’Encyclopédie' },
      { y:1763, zh:'巴黎條約，加拿大割讓給英國', en:'Treaty of Paris: Canada ceded to Britain', fr:'Traité de Paris : le Canada cédé à la Grande-Bretagne' },
    ],
    themes:{
      state:{ zh:'中央派往各省的監察官削弱了地方勢力。投石黨之亂後，路易十四把貴族吸納進凡爾賽宮廷，形成後人以「朕即國家」概括的絕對王權。',
        en:'Intendants sent from Paris to the provinces curbed local powers. After the Fronde, Louis XIV drew the nobility into the court at Versailles, the absolute monarchy later summed up as “I am the State”.',
        fr:'Les intendants envoyés dans les provinces affaiblissent les pouvoirs locaux. Après la Fronde, Louis XIV attire la noblesse à Versailles : c’est la monarchie absolue, résumée plus tard par le mot « L’État, c’est moi ».' },
      faith:{ zh:'撤銷南特詔書後，約二十萬胡格諾派信徒出走他國。冉森派之爭與耶穌會的爭議，動搖了教會的權威。',
        en:'After the revocation of the Edict of Nantes, some 200,000 Huguenots fled abroad. Quarrels over Jansenism and the Jesuits shook the Church’s authority.',
        fr:'Après la révocation de l’édit de Nantes, quelque 200 000 huguenots s’exilent. Les querelles du jansénisme et des jésuites ébranlent l’autorité de l’Église.' },
      society:{ zh:'柯爾貝推行重商主義，設立王家工場。社會仍分為教士、貴族與第三等級，稅負主要落在農民身上。',
        en:'Colbert pursued mercantilism and founded royal manufactures. Society remained divided into clergy, nobility and Third Estate, with the tax burden falling mainly on peasants.',
        fr:'Colbert mène une politique mercantiliste et crée des manufactures royales. La société reste divisée en clergé, noblesse et tiers état, et l’impôt pèse surtout sur les paysans.' },
      culture:{ zh:'高乃依、拉辛與莫里哀的古典戲劇，以及凡爾賽的品味，為全歐洲立下標準。十八世紀伏爾泰、孟德斯鳩、盧梭與狄德羅掀起啟蒙運動，法語成為歐洲上流社會的共通語言。',
        en:'The classical drama of Corneille, Racine and Molière and the taste of Versailles set Europe’s standards. In the eighteenth century Voltaire, Montesquieu, Rousseau and Diderot led the Enlightenment, and French became the common tongue of Europe’s elites.',
        fr:'Le théâtre classique de Corneille, Racine et Molière et le goût de Versailles donnent le ton à l’Europe. Au XVIIIᵉ siècle, Voltaire, Montesquieu, Rousseau et Diderot portent les Lumières, et le français devient la langue des élites européennes.' },
      world:{ zh:'法國是歐洲最強的陸權國家，卻在七年戰爭中把加拿大與在印度的大部分利益輸給英國。支持美國獨立戰爭雖然報了一箭之仇，卻加深了財政危機。',
        en:'France was Europe’s greatest land power, yet in the Seven Years’ War it lost Canada and most of its position in India to Britain. Backing American independence brought revenge but deepened the financial crisis.',
        fr:'Première puissance terrestre d’Europe, la France perd pourtant le Canada et l’essentiel de ses positions en Inde face à la Grande-Bretagne pendant la guerre de Sept Ans. Le soutien à l’indépendance américaine offre une revanche mais aggrave la crise financière.' },
    }
  },
  {
    id:'revolution', icon:'🔥', start:1789, end:1815, world:'enlightenment_revolution',
    name:{ zh:'大革命與拿破崙', en:'Revolution and Napoleon', fr:'Révolution et Empire' },
    summary:{ zh:'財政破產迫使國王召開三級會議，第三等級自組國民議會，巴士底獄陷落後，舊制度在數月內瓦解。歷經共和、恐怖統治與督政府，拿破崙稱帝，把革命的制度輸出到整個歐洲。',
      en:'Bankruptcy forced the king to summon the Estates General; the Third Estate declared itself a National Assembly, and after the fall of the Bastille the Old Regime collapsed within months. Republic, Terror and Directory followed, until Napoleon crowned himself emperor and carried revolutionary institutions across Europe.',
      fr:'La banqueroute oblige le roi à convoquer les états généraux ; le tiers état se proclame Assemblée nationale et, après la prise de la Bastille, l’Ancien Régime s’effondre en quelques mois. République, Terreur et Directoire se succèdent, jusqu’au sacre de Napoléon, qui exporte les institutions révolutionnaires dans toute l’Europe.' },
    events:[
      { y:1789, zh:'攻佔巴士底獄，發表《人權和公民權宣言》', en:'Storming of the Bastille; Declaration of the Rights of Man and of the Citizen', fr:'Prise de la Bastille ; Déclaration des droits de l’homme et du citoyen' },
      { y:1792, zh:'廢除君主制，第一共和成立', en:'Monarchy abolished; the First Republic proclaimed', fr:'Abolition de la monarchie ; proclamation de la Première République' },
      { y:1793, zh:'路易十六被處決，恐怖統治開始', en:'Louis XVI executed; the Terror begins', fr:'Exécution de Louis XVI ; début de la Terreur' },
      { y:1804, zh:'《民法典》頒布，拿破崙加冕稱帝', en:'Civil Code promulgated; Napoleon crowned emperor', fr:'Promulgation du Code civil ; sacre de Napoléon' },
      { y:1815, zh:'滑鐵盧戰役，拿破崙最終失敗', en:'Waterloo: Napoleon’s final defeat', fr:'Waterloo : défaite définitive de Napoléon' },
    ],
    themes:{
      state:{ zh:'革命廢除封建特權，把全國劃為八十三個省，建立中央集權的行政體系。拿破崙再設立省長、國務會議與法蘭西銀行，這些制度大多沿用至今。',
        en:'The Revolution abolished feudal privilege, divided the country into 83 departments and built a centralised administration. Napoleon added prefects, the Council of State and the Banque de France, most of which survive today.',
        fr:'La Révolution abolit les privilèges, découpe le pays en 83 départements et bâtit une administration centralisée. Napoléon y ajoute préfets, Conseil d’État et Banque de France, institutions pour la plupart encore en place.' },
      faith:{ zh:'1790年的《教士公民組織法》要求教士宣誓效忠國家，造成天主教會分裂。1801年拿破崙與教宗簽訂《教務專約》，恢復宗教和平。',
        en:'The Civil Constitution of the Clergy of 1790 required priests to swear loyalty to the state and split the Catholic Church. Napoleon’s Concordat with the pope in 1801 restored religious peace.',
        fr:'La Constitution civile du clergé (1790) impose aux prêtres un serment à l’État et divise l’Église catholique. Le Concordat signé par Napoléon avec le pape en 1801 rétablit la paix religieuse.' },
      society:{ zh:'教會與流亡貴族的土地被沒收拍賣，許多農民成為小地主。行會廢除，度量衡改用公制，法律之前人人平等成為原則。',
        en:'Church and émigré lands were seized and sold, and many peasants became smallholders. Guilds were abolished, the metric system introduced, and equality before the law became a principle.',
        fr:'Les biens du clergé et des émigrés sont confisqués et vendus, et de nombreux paysans deviennent petits propriétaires. Les corporations sont abolies, le système métrique adopté, et l’égalité devant la loi devient un principe.' },
      culture:{ zh:'「自由、平等、博愛」的口號與《馬賽曲》在這時誕生。羅浮宮在1793年開放為公共博物館，國家開始主導教育與文化。',
        en:'The motto “Liberty, Equality, Fraternity” and the Marseillaise were born. The Louvre opened as a public museum in 1793, and the state took charge of education and culture.',
        fr:'La devise « Liberté, Égalité, Fraternité » et la Marseillaise voient le jour. Le Louvre ouvre comme musée public en 1793, et l’État prend en main l’enseignement et la culture.' },
      world:{ zh:'革命戰爭與拿破崙戰爭把法國軍隊帶到馬德里與莫斯科，民族主義隨之在歐洲各地興起。1815年的維也納會議重劃了歐洲版圖。',
        en:'The revolutionary and Napoleonic wars took French armies to Madrid and Moscow and stirred nationalism across Europe. The Congress of Vienna redrew the map of Europe in 1815.',
        fr:'Les guerres révolutionnaires et napoléoniennes mènent les armées françaises à Madrid et à Moscou et éveillent les nationalismes en Europe. Le congrès de Vienne redessine la carte du continent en 1815.' },
    }
  },
  {
    id:'c19', icon:'🚂', start:1815, end:1870, world:'industrial',
    name:{ zh:'復辟、革命與第二帝國', en:'Restoration, Revolutions and the Second Empire', fr:'Restauration, révolutions et Second Empire' },
    summary:{ zh:'波旁王朝復辟後，法國在王權、共和與帝制之間反覆擺盪，1830年與1848年兩度爆發革命。第二帝國帶來鐵路與現代化的巴黎，最後敗於普法戰爭。',
      en:'After the Bourbon Restoration, France swung between monarchy, republic and empire, with revolutions in 1830 and 1848. The Second Empire brought railways and a modern Paris, then fell in the Franco-Prussian War.',
      fr:'Après la Restauration des Bourbons, la France oscille entre monarchie, république et empire, avec les révolutions de 1830 et 1848. Le Second Empire apporte chemins de fer et Paris moderne, puis s’effondre dans la guerre franco-prussienne.' },
    events:[
      { y:1830, zh:'七月革命，七月王朝成立', en:'July Revolution: the July Monarchy', fr:'Révolution de Juillet : la monarchie de Juillet' },
      { y:1848, zh:'二月革命，實施男性普選並廢除奴隸制', en:'February Revolution: universal male suffrage and the abolition of slavery', fr:'Révolution de février : suffrage universel masculin et abolition de l’esclavage' },
      { y:1852, zh:'拿破崙三世建立第二帝國', en:'Napoleon III proclaims the Second Empire', fr:'Napoléon III proclame le Second Empire' },
      { y:1853, zh:'奧斯曼開始改造巴黎', en:'Haussmann begins rebuilding Paris', fr:'Haussmann commence la transformation de Paris' },
      { y:1870, zh:'色當戰敗，第二帝國垮台', en:'Defeat at Sedan; the Second Empire falls', fr:'Défaite de Sedan ; chute du Second Empire' },
    ],
    themes:{
      state:{ zh:'七月王朝以有產者選舉為基礎。1848年第二共和首次實施成年男性普選，卻選出路易·拿破崙，他隨後發動政變稱帝。',
        en:'The July Monarchy rested on a franchise of property owners. The Second Republic introduced universal male suffrage in 1848 but elected Louis-Napoléon, who seized power in a coup and made himself emperor.',
        fr:'La monarchie de Juillet repose sur un suffrage censitaire. La IIᵉ République instaure en 1848 le suffrage universel masculin, mais élit Louis-Napoléon, qui s’empare du pouvoir par un coup d’État et se fait empereur.' },
      faith:{ zh:'復辟時期教會與王權重新結盟。此後天主教與共和派的對立，成為十九世紀法國政治的主軸。',
        en:'The Restoration renewed the alliance of throne and altar. From then on the clash between Catholics and republicans became the central thread of nineteenth-century French politics.',
        fr:'La Restauration renoue l’alliance du trône et de l’autel. Dès lors, l’affrontement entre catholiques et républicains structure la vie politique française du XIXᵉ siècle.' },
      society:{ zh:'工業化比英國緩慢，以紡織、冶金與鐵路為主。城市工人階級出現，里昂的絲織工人在1831年與1834年兩度起義。',
        en:'Industry grew more slowly than in Britain, led by textiles, metalworking and railways. An urban working class emerged, and the silk workers of Lyon rose in 1831 and 1834.',
        fr:'L’industrialisation, plus lente qu’en Grande-Bretagne, s’appuie sur le textile, la métallurgie et le rail. Une classe ouvrière urbaine apparaît, et les canuts de Lyon se soulèvent en 1831 et 1834.' },
      culture:{ zh:'浪漫主義的雨果與德拉克洛瓦之後，是巴爾札克、福樓拜與庫爾貝的寫實主義。1839年公布的達蓋爾銀版法開啟了攝影時代。',
        en:'Romantics such as Hugo and Delacroix were followed by the realism of Balzac, Flaubert and Courbet. The daguerreotype, made public in 1839, opened the age of photography.',
        fr:'Le romantisme de Hugo et Delacroix cède la place au réalisme de Balzac, Flaubert et Courbet. Le daguerréotype, rendu public en 1839, ouvre l’ère de la photographie.' },
      world:{ zh:'1830年起征服阿爾及利亞。第二帝國參與克里米亞戰爭、干預墨西哥，並開始在印度支那擴張。',
        en:'France began conquering Algeria in 1830. The Second Empire fought in the Crimean War, intervened in Mexico and began expanding into Indochina.',
        fr:'La conquête de l’Algérie commence en 1830. Le Second Empire participe à la guerre de Crimée, intervient au Mexique et entame l’expansion en Indochine.' },
    }
  },
  {
    id:'third', icon:'🗼', start:1870, end:1940, world:'worldwar',
    name:{ zh:'第三共和', en:'The Third Republic', fr:'La IIIᵉ République' },
    summary:{ zh:'普法戰敗與巴黎公社之後，第三共和逐步站穩腳步，建立免費義務教育與政教分離。法國擁有僅次於英國的殖民帝國，並以巨大代價打贏第一次世界大戰。',
      en:'After defeat by Prussia and the Paris Commune, the Third Republic took root, creating free compulsory schooling and separating church and state. France held the second-largest colonial empire and won the First World War at enormous cost.',
      fr:'Après la défaite face à la Prusse et la Commune de Paris, la IIIᵉ République s’enracine : école gratuite et obligatoire, séparation des Églises et de l’État. La France possède le deuxième empire colonial et gagne la Grande Guerre à un prix immense.' },
    events:[
      { y:1871, zh:'巴黎公社', en:'The Paris Commune', fr:'La Commune de Paris' },
      { y:1882, zh:'費里法案確立免費、義務、世俗的初等教育', en:'Ferry laws make primary school free, compulsory and secular', fr:'Les lois Ferry rendent l’école primaire gratuite, obligatoire et laïque' },
      { y:1894, zh:'德雷福斯事件爆發', en:'The Dreyfus affair begins', fr:'Début de l’affaire Dreyfus' },
      { y:1905, zh:'政教分離法通過', en:'Law separating the churches and the state', fr:'Loi de séparation des Églises et de l’État' },
      { y:1914, zh:'第一次世界大戰爆發', en:'The First World War begins', fr:'Début de la Première Guerre mondiale' },
      { y:1936, zh:'人民陣線執政', en:'The Popular Front takes power', fr:'Le Front populaire au pouvoir' },
    ],
    themes:{
      state:{ zh:'1875年的憲法性法律建立議會共和。內閣雖然頻繁更替，共和體制卻延續了七十年，是大革命以來最長壽的政體之一。',
        en:'The constitutional laws of 1875 set up a parliamentary republic. Cabinets changed often, yet the regime lasted seventy years, one of the longest-lived since the Revolution.',
        fr:'Les lois constitutionnelles de 1875 fondent une république parlementaire. Malgré l’instabilité ministérielle, le régime dure soixante-dix ans, l’un des plus longs depuis la Révolution.' },
      faith:{ zh:'德雷福斯事件撕裂了社會，也促成1905年的政教分離法：國家不承認、也不資助任何宗教，「世俗主義」成為共和的核心原則。',
        en:'The Dreyfus affair tore society apart and led to the 1905 law: the state recognises and funds no religion, and laïcité became a core principle of the Republic.',
        fr:'L’affaire Dreyfus déchire la société et débouche sur la loi de 1905 : la République ne reconnaît ni ne subventionne aucun culte, et la laïcité devient un principe fondamental.' },
      society:{ zh:'鐵路與學校把鄉村整合進全國市場，法語逐漸取代地方語言。1936年人民陣線引進帶薪假與每週四十小時工時。',
        en:'Railways and schools drew the countryside into a national market, and French displaced regional languages. In 1936 the Popular Front introduced paid holidays and the forty-hour week.',
        fr:'Chemins de fer et écoles intègrent les campagnes au marché national, et le français supplante les langues régionales. En 1936, le Front populaire instaure congés payés et semaine de quarante heures.' },
      culture:{ zh:'印象派、後印象派與立體派讓巴黎成為現代藝術之都。1889年艾菲爾鐵塔落成，左拉與普魯斯特代表這個時代的文學高峰。',
        en:'Impressionism, Post-Impressionism and Cubism made Paris the capital of modern art. The Eiffel Tower rose in 1889, and Zola and Proust marked the literary peaks of the age.',
        fr:'Impressionnisme, postimpressionnisme et cubisme font de Paris la capitale de l’art moderne. La tour Eiffel s’élève en 1889, et Zola et Proust dominent la littérature de l’époque.' },
      world:{ zh:'殖民帝國擴及北非、西非、馬達加斯加與印度支那。第一次世界大戰中約一百四十萬法國軍人陣亡，凡爾登成為犧牲的象徵。',
        en:'The colonial empire spread across North and West Africa, Madagascar and Indochina. Some 1.4 million French soldiers died in the First World War, and Verdun became the symbol of sacrifice.',
        fr:'L’empire colonial s’étend sur l’Afrique du Nord et de l’Ouest, Madagascar et l’Indochine. Environ 1,4 million de soldats français meurent pendant la Grande Guerre, et Verdun devient le symbole du sacrifice.' },
    }
  },
  {
    id:'war', icon:'🕯️', start:1940, end:1958, world:'worldwar',
    name:{ zh:'淪陷、抵抗與重建', en:'Defeat, Resistance and Reconstruction', fr:'Défaite, Résistance et reconstruction' },
    summary:{ zh:'1940年法國在六週內戰敗，北部被德軍佔領，貝當領導的維希政府與納粹合作，戴高樂則在倫敦號召抵抗。解放後的第四共和推動重建與歐洲整合，卻在殖民戰爭中崩潰。',
      en:'In 1940 France was defeated in six weeks; the north was occupied and Pétain’s Vichy regime collaborated with the Nazis while de Gaulle called for resistance from London. After Liberation the Fourth Republic rebuilt the country and launched European integration, but collapsed under colonial war.',
      fr:'En 1940, la France est battue en six semaines ; le Nord est occupé et le régime de Vichy de Pétain collabore avec les nazis, tandis que de Gaulle appelle à la résistance depuis Londres. Après la Libération, la IVᵉ République reconstruit le pays et lance la construction européenne, mais succombe aux guerres coloniales.' },
    events:[
      { y:1940, zh:'停戰協定簽訂，戴高樂發表六一八呼籲', en:'Armistice; de Gaulle’s Appeal of 18 June', fr:'Armistice ; appel du 18 Juin' },
      { y:1942, zh:'冬季自行車賽場大搜捕', en:'The Vel’ d’Hiv roundup', fr:'Rafle du Vél’ d’Hiv' },
      { y:1944, zh:'諾曼第登陸與巴黎解放，女性獲得投票權', en:'D-Day and the liberation of Paris; women win the vote', fr:'Débarquement de Normandie et libération de Paris ; droit de vote des femmes' },
      { y:1951, zh:'簽約成立歐洲煤鋼共同體', en:'Treaty founding the European Coal and Steel Community', fr:'Traité instituant la Communauté européenne du charbon et de l’acier' },
      { y:1954, zh:'奠邊府戰敗，阿爾及利亞戰爭爆發', en:'Defeat at Dien Bien Phu; the Algerian War begins', fr:'Défaite de Diên Biên Phu ; début de la guerre d’Algérie' },
    ],
    themes:{
      state:{ zh:'維希政權廢除共和，以「工作、家庭、祖國」取代「自由、平等、博愛」。1946年的第四共和恢復議會制，但政府更迭頻繁，難以處理殖民危機。',
        en:'Vichy abolished the Republic and replaced its motto with “Work, Family, Fatherland”. The Fourth Republic of 1946 restored parliamentary rule, but its short-lived governments could not resolve the colonial crisis.',
        fr:'Vichy abolit la République et remplace sa devise par « Travail, Famille, Patrie ». La IVᵉ République de 1946 rétablit le régime parlementaire, mais ses gouvernements éphémères ne parviennent pas à régler la crise coloniale.' },
      faith:{ zh:'部分教會高層支持維希政權，也有神職人員與修會冒險藏匿猶太兒童。戰後基督教民主政黨一度成為主要的政治力量。',
        en:'Some church leaders supported Vichy, while other clergy and religious orders risked their lives hiding Jewish children. After the war Christian democrats briefly became a major political force.',
        fr:'Une partie de la hiérarchie soutient Vichy, tandis que des prêtres et des congrégations cachent des enfants juifs au péril de leur vie. Après la guerre, la démocratie chrétienne devient un temps une force politique majeure.' },
      society:{ zh:'約七萬六千名猶太人從法國被遣送到死亡營。戰後的國有化與社會安全制度，開啟了經濟高速成長的「輝煌三十年」。',
        en:'Around 76,000 Jews were deported from France to the death camps. Post-war nationalisations and the new social security system opened the “Thirty Glorious Years” of rapid growth.',
        fr:'Environ 76 000 Juifs sont déportés de France vers les camps de la mort. Les nationalisations et la Sécurité sociale de l’après-guerre ouvrent les Trente Glorieuses.' },
      culture:{ zh:'沙特、卡繆與西蒙·波娃的存在主義，從聖日耳曼德佩的咖啡館影響全世界。波娃在1949年出版《第二性》。',
        en:'The existentialism of Sartre, Camus and Simone de Beauvoir spread from the cafés of Saint-Germain-des-Prés to the world. Beauvoir published The Second Sex in 1949.',
        fr:'L’existentialisme de Sartre, Camus et Simone de Beauvoir rayonne des cafés de Saint-Germain-des-Prés vers le monde. Beauvoir publie Le Deuxième Sexe en 1949.' },
      world:{ zh:'法國成為聯合國安理會常任理事國，與德國和解並推動歐洲整合。印度支那戰爭失敗後，阿爾及利亞戰爭最終拖垮了第四共和。',
        en:'France won a permanent seat on the UN Security Council, reconciled with Germany and drove European integration. After defeat in Indochina, the Algerian War brought down the Fourth Republic.',
        fr:'La France obtient un siège permanent au Conseil de sécurité, se réconcilie avec l’Allemagne et porte la construction européenne. Après la défaite en Indochine, la guerre d’Algérie emporte la IVᵉ République.' },
    }
  },
  {
    id:'fifth', icon:'🗳️', start:1958, end:2026, world:'coldwar',
    name:{ zh:'第五共和', en:'The Fifth Republic', fr:'La Vᵉ République' },
    summary:{ zh:'戴高樂以強勢總統制建立第五共和，並結束阿爾及利亞戰爭。此後法國歷經1968年五月風暴、去殖民化、歐洲統合與全球化，在社會模式與國家認同之間持續辯論。',
      en:'De Gaulle founded the Fifth Republic around a strong presidency and ended the Algerian War. Since then France has lived through May 1968, decolonisation, European integration and globalisation, in a running debate over its social model and national identity.',
      fr:'De Gaulle fonde la Vᵉ République autour d’une présidence forte et met fin à la guerre d’Algérie. Depuis, la France traverse Mai 68, la décolonisation, la construction européenne et la mondialisation, dans un débat continu sur son modèle social et son identité.' },
    events:[
      { y:1958, zh:'第五共和憲法通過', en:'Constitution of the Fifth Republic adopted', fr:'Adoption de la Constitution de la Vᵉ République' },
      { y:1962, zh:'阿爾及利亞獨立，總統改由人民直選', en:'Algeria becomes independent; direct presidential elections adopted', fr:'Indépendance de l’Algérie ; élection du président au suffrage universel direct' },
      { y:1968, zh:'五月風暴', en:'May 1968', fr:'Mai 68' },
      { y:1981, zh:'密特朗當選總統，廢除死刑', en:'Mitterrand elected president; death penalty abolished', fr:'Élection de François Mitterrand ; abolition de la peine de mort' },
      { y:1992, zh:'公投通過《馬斯垂克條約》', en:'Referendum approves the Maastricht Treaty', fr:'Le référendum approuve le traité de Maastricht' },
      { y:2002, zh:'歐元紙幣與硬幣開始流通', en:'Euro notes and coins enter circulation', fr:'Mise en circulation des billets et pièces en euros' },
      { y:1973, zh:'第一次石油危機，輝煌三十年結束', en:'The first oil shock ends the Thirty Glorious Years', fr:'Le premier choc pétrolier met fin aux Trente Glorieuses' },
      { y:1975, zh:'《韋伊法》通過，墮胎合法化', en:'The Veil law legalises abortion', fr:'La loi Veil légalise l’IVG' },
      { y:2005, zh:'公投否決歐盟憲法條約', en:'Voters reject the European constitutional treaty', fr:'Le « non » l’emporte au référendum sur la Constitution européenne' },
      { y:2008, zh:'修憲強化國會權力；全球金融危機', en:'A constitutional reform strengthens parliament; the global financial crisis', fr:'Révision constitutionnelle renforçant le Parlement ; crise financière mondiale' },
      { y:2015, zh:'巴黎恐怖攻擊', en:'Terrorist attacks in Paris', fr:'Attentats de Paris' },
      { y:2017, zh:'三十九歲的馬克宏當選，成為最年輕的總統', en:'Macron is elected at thirty-nine, the youngest president', fr:'Emmanuel Macron est élu à trente-neuf ans, plus jeune président de la Vᵉ' },
      { y:2024, zh:'解散國會後出現三派僵持的懸峙國會；巴黎奧運', en:'A snap election produces a deadlocked parliament; the Paris Olympics', fr:'La dissolution produit une Assemblée sans majorité ; Jeux olympiques de Paris' },
    ],
    themes:{
      state:{ zh:'1962年起總統由人民直選，主導外交與國防。左右兩派曾多次「共治」，2017年馬克宏以中間路線打破傳統的左右格局。',
        en:'Since 1962 the president has been directly elected and leads on foreign policy and defence. Left and right have several times shared power in “cohabitation”, and in 2017 Emmanuel Macron’s centrist bid broke the old left-right pattern.',
        fr:'Depuis 1962, le président est élu au suffrage universel direct et domine politique étrangère et défense. Gauche et droite ont plusieurs fois cohabité, et en 2017 la candidature centriste d’Emmanuel Macron fait éclater le clivage traditionnel.' },
      faith:{ zh:'世俗主義延伸到公立學校的宗教標誌爭議，2004年立法禁止學生在校內配戴明顯的宗教標誌。伊斯蘭教已是第二大宗教，如何兼顧信仰自由與共和原則，仍是辯論焦點。',
        en:'Laïcité extended to disputes over religious symbols in state schools, and a 2004 law banned conspicuous religious signs there. Islam is now the second religion, and reconciling freedom of belief with republican principles remains a live debate.',
        fr:'La laïcité s’étend aux signes religieux à l’école publique, interdits lorsqu’ils sont ostensibles par la loi de 2004. L’islam est désormais la deuxième religion, et concilier liberté de conscience et principes républicains reste un débat vif.' },
      society:{ zh:'1970年代石油危機後，輝煌三十年結束，失業、郊區問題與退休制度改革成為長期議題。1975年墮胎合法化，2013年同性婚姻合法化，2024年墮胎自由寫入憲法。',
        en:'The Thirty Glorious Years ended with the oil shocks of the 1970s, leaving unemployment, the banlieues and pension reform as lasting issues. Abortion was legalised in 1975, same-sex marriage in 2013, and the freedom to have an abortion entered the constitution in 2024.',
        fr:'Les Trente Glorieuses s’achèvent avec les chocs pétroliers ; chômage, banlieues et réforme des retraites deviennent des questions durables. L’IVG est légalisée en 1975, le mariage pour tous en 2013, et la liberté de recourir à l’IVG entre dans la Constitution en 2024.' },
      culture:{ zh:'新浪潮電影，以及李維史陀、傅柯、德希達的結構主義與後結構主義思想影響全球。國家以「文化例外」政策保護本國電影與出版。',
        en:'New Wave cinema and the structuralist and post-structuralist thought of Lévi-Strauss, Foucault and Derrida reached a global audience. The state defends French film and publishing through the policy of the “cultural exception”.',
        fr:'La Nouvelle Vague et la pensée structuraliste et poststructuraliste de Lévi-Strauss, Foucault et Derrida rayonnent dans le monde. L’État protège cinéma et édition au nom de l’exception culturelle.' },
      world:{ zh:'法國擁有核武，1966年至2009年間退出北約的整合軍事指揮，同時是歐盟的核心推動者。它在非洲的軍事與貨幣影響力，近年明顯收縮。',
        en:'France is a nuclear power, stood outside NATO’s integrated command from 1966 to 2009, and remains a driving force of the European Union. Its military and monetary influence in Africa has shrunk markedly in recent years.',
        fr:'Puissance nucléaire, la France quitte le commandement intégré de l’OTAN de 1966 à 2009 et reste un moteur de l’Union européenne. Son influence militaire et monétaire en Afrique recule nettement ces dernières années.' },
    }
  },
  ]
},
{
  id:'uk', flag:'flag-gb', color:'#b8433f',
  name:{ zh:'英國', en:'United Kingdom', fr:'Royaume-Uni' },
  intro:{ zh:'英國其實是由英格蘭、蘇格蘭、威爾斯與北愛爾蘭組成的聯合王國。它的歷史一面是島嶼一再被羅馬人、維京人與諾曼人征服，再轉身向全世界擴張；另一面是權力一步步從國王手中轉到議會。這裡同樣用十一個時期與五條主題線索，閱讀這五千年。',
    en:'The United Kingdom is a union of England, Scotland, Wales and Northern Ireland. Its history is on one side the story of an island conquered again and again, by Romans, Vikings and Normans, that then turned outward to the whole world; on the other, the story of power passing step by step from the crown to Parliament. Here too, eleven periods and five thematic threads take you through five thousand years.',
    fr:'Le Royaume-Uni réunit l’Angleterre, l’Écosse, le pays de Galles et l’Irlande du Nord. Son histoire est d’un côté celle d’une île conquise tour à tour par les Romains, les Vikings et les Normands, qui se tourne ensuite vers le monde entier ; de l’autre, celle d’un pouvoir passé pas à pas de la couronne au Parlement. Ici aussi, onze périodes et cinq fils thématiques parcourent cinq mille ans.' },
  threads:{
    state:{ intro:{ zh:'從七國並立、諾曼王權到議會主權：看權力如何從國王手中轉到西敏的議會。',
      en:'From rival kingdoms and Norman kingship to parliamentary sovereignty: how power passed from the crown to Parliament at Westminster.',
      fr:'Des royaumes rivaux et de la royauté normande à la souveraineté parlementaire : comment le pouvoir est passé de la couronne au Parlement de Westminster.' } },
    faith:{ name:{ zh:'宗教與國教', en:'Religion & the Established Church', fr:'Religion et Église établie' },
      intro:{ zh:'國王自立教會，新教與天主教之爭塑造了王位繼承、政黨與愛爾蘭問題。',
        en:'A king founded his own Church, and the struggle between Protestant and Catholic shaped the succession, party politics and the Irish question.',
        fr:'Un roi fonde sa propre Église, et la lutte entre protestants et catholiques façonne la succession, les partis et la question irlandaise.' } },
    society:{ intro:{ zh:'從莊園與羊毛，到世界第一個工業國家，再到福利國家與倫敦金融城。',
      en:'From manors and wool to the world’s first industrial nation, then to the welfare state and the City of London.',
      fr:'Des domaines et de la laine à la première nation industrielle, puis à l’État-providence et à la City de Londres.' } },
    culture:{ intro:{ zh:'英語、莎士比亞、科學與議會傳統：一個島國如何把語言與制度帶到全世界。',
      en:'English, Shakespeare, science and parliamentary tradition: how an island carried its language and institutions round the world.',
      fr:'L’anglais, Shakespeare, la science et la tradition parlementaire : comment une île a diffusé sa langue et ses institutions dans le monde.' } },
    world:{ name:{ zh:'英國與世界', en:'Britain & the World', fr:'Le Royaume-Uni et le monde' },
      intro:{ zh:'從被羅馬、維京與諾曼人征服的島嶼，到日不落帝國，再到脫歐後重新尋找定位。',
        en:'From an island conquered by Romans, Vikings and Normans to an empire on which the sun never set, and a new search for a role after Brexit.',
        fr:'D’une île conquise par les Romains, les Vikings et les Normands à un empire sur lequel le soleil ne se couchait jamais, puis à la recherche d’un nouveau rôle après le Brexit.' } },
  },
  periods:[
  {
    id:'britannia', icon:'🪨', start:-3000, end:410, world:'roman',
    name:{ zh:'史前與羅馬不列顛', en:'Prehistoric and Roman Britain', fr:'La Bretagne préhistorique et romaine' },
    summary:{ zh:'在巨石陣的建造者之後，凱爾特部族在島上建立山堡與王國。西元 43 年羅馬入侵，把英格蘭與威爾斯納入帝國將近四百年，蘇格蘭則始終在羅馬的掌控之外。410 年羅馬軍團撤離，不列顛只能自求多福。',
      en:'After the builders of Stonehenge, Celtic peoples raised hillforts and kingdoms across the island. Rome invaded in AD 43 and held England and Wales for nearly four centuries, while Scotland stayed beyond its grasp. By 410 the legions were gone and Britain was left to fend for itself.',
      fr:'Après les bâtisseurs de Stonehenge, des peuples celtes élèvent oppida et royaumes dans l’île. Rome envahit en 43 apr. J.-C. et tient l’Angleterre et le pays de Galles près de quatre siècles, tandis que l’Écosse échappe à son emprise. En 410, les légions sont parties et la Bretagne est livrée à elle-même.' },
    events:[
      { y:-3000, c:true, zh:'巨石陣開始興建', en:'Building of Stonehenge begins', fr:'Début de la construction de Stonehenge' },
      { y:-55, zh:'凱撒首次渡海遠征不列顛', en:'Julius Caesar’s first expedition to Britain', fr:'Première expédition de César en Bretagne' },
      { y:43,  zh:'克勞狄烏斯派兵入侵，羅馬征服開始', en:'Claudius sends an army: the Roman conquest begins', fr:'Claude envoie une armée : début de la conquête romaine' },
      { y:60,  c:true, zh:'布狄卡起義，倫敦被焚', en:'Boudica’s revolt: London is burned', fr:'Révolte de Boadicée : Londres est incendiée' },
      { y:122, zh:'哈德良長城開始興建', en:'Construction of Hadrian’s Wall begins', fr:'Début de la construction du mur d’Hadrien' },
      { y:410, zh:'羅馬統治結束，不列顛須自行防衛', en:'Roman rule ends: Britain must see to its own defence', fr:'Fin de la domination romaine : la Bretagne doit assurer sa propre défense' },
    ],
    themes:{
      state:{ zh:'鐵器時代的不列顛由許多部族王國組成。羅馬把南部劃為行省，以倫底紐姆（倫敦）為中心，北方以哈德良長城為界，一度推進到安東尼長城。',
        en:'Iron Age Britain was a patchwork of tribal kingdoms. Rome made the south a province centred on Londinium and drew its northern frontier at Hadrian’s Wall, for a time pushing on to the Antonine Wall.',
        fr:'La Bretagne de l’âge du fer est une mosaïque de royaumes tribaux. Rome fait du sud une province centrée sur Londinium et fixe sa frontière nord au mur d’Hadrien, poussant un temps jusqu’au mur d’Antonin.' },
      faith:{ zh:'德魯伊主持凱爾特宗教，羅馬在 60 年左右攻入安格爾西島，摧毀德魯伊的據點。基督教在羅馬晚期傳入，314 年已有不列顛主教出席高盧的宗教會議。',
        en:'Druids led Celtic religion, and around 60 Rome stormed their stronghold on Anglesey. Christianity arrived under late Rome, and by 314 British bishops were attending a church council in Gaul.',
        fr:'Les druides dirigent la religion celtique ; vers 60, Rome prend d’assaut leur sanctuaire d’Anglesey. Le christianisme arrive à la fin de l’époque romaine, et dès 314 des évêques bretons siègent à un concile en Gaule.' },
      society:{ zh:'羅馬帶來道路、城鎮、別墅莊園與浴場，倫敦、約克、巴斯因此興起。不列顛出口錫、鉛、羊毛與穀物，鄉村大多仍維持原本的部族生活。',
        en:'Rome brought roads, towns, villa estates and baths, and London, York and Bath grew up. Britain exported tin, lead, wool and grain, while much of the countryside kept its tribal ways.',
        fr:'Rome apporte routes, villes, villae et thermes ; Londres, York et Bath se développent. La Bretagne exporte étain, plomb, laine et céréales, tandis qu’une grande partie des campagnes garde ses usages tribaux.' },
      culture:{ zh:'凱爾特語在鄉間延續下來，是今日威爾斯語的祖先。拉丁語只在城市與軍營通行，沒有像在高盧那樣取代本地語言。',
        en:'Celtic speech survived in the countryside and is the ancestor of Welsh. Latin was used in towns and forts but never replaced the local language as it did in Gaul.',
        fr:'La langue celtique se maintient dans les campagnes et donne le gallois. Le latin, parlé dans les villes et les camps, ne remplace pas la langue locale comme en Gaule.' },
      world:{ zh:'不列顛是羅馬帝國最西北的邊陲，駐軍一度占帝國總兵力的十分之一左右。三世紀起，撒克遜海盜與北方的皮克特人不斷侵擾海岸與邊界。',
        en:'Britain was Rome’s north-western edge and at times held around a tenth of the empire’s army. From the third century Saxon raiders and the Picts of the north harried its coasts and frontier.',
        fr:'La Bretagne est la marche nord-ouest de l’Empire et abrite parfois près d’un dixième de son armée. Dès le IIIᵉ siècle, pirates saxons et Pictes du nord harcèlent côtes et frontière.' },
    }
  },
  {
    id:'anglosaxon', icon:'🗡️', start:410, end:1066, world:'medieval',
    name:{ zh:'盎格魯撒克遜與維京', en:'Anglo-Saxons and Vikings', fr:'Anglo-Saxons et Vikings' },
    summary:{ zh:'盎格魯人、撒克遜人與朱特人渡海定居，建立數個王國，原本的不列顛人被推往威爾斯與康瓦耳。維京人入侵時，威塞克斯的阿佛烈大帝領導抵抗，他的孫子艾塞斯坦成為第一位統治全英格蘭的國王。1066 年，諾曼第公爵威廉在哈斯丁擊敗哈洛德二世。',
      en:'Angles, Saxons and Jutes crossed the sea and founded a cluster of kingdoms, pushing the Britons west into Wales and Cornwall. When the Vikings came, Alfred the Great of Wessex led the resistance, and his grandson Æthelstan became the first king of all England. In 1066 Duke William of Normandy defeated Harold II at Hastings.',
      fr:'Angles, Saxons et Jutes traversent la mer et fondent plusieurs royaumes, repoussant les Bretons vers le pays de Galles et la Cornouailles. Face aux Vikings, Alfred le Grand de Wessex mène la résistance, et son petit-fils Æthelstan devient le premier roi de toute l’Angleterre. En 1066, le duc Guillaume de Normandie bat Harold II à Hastings.' },
    events:[
      { y:597,  zh:'奧古斯丁抵達坎特伯里，向肯特王國傳教', en:'Augustine reaches Canterbury to convert Kent', fr:'Augustin arrive à Cantorbéry pour évangéliser le Kent' },
      { y:793,  zh:'維京人劫掠林迪斯法恩修道院', en:'Vikings raid the monastery of Lindisfarne', fr:'Les Vikings pillent le monastère de Lindisfarne' },
      { y:878,  zh:'阿佛烈在埃丁頓擊敗維京大軍', en:'Alfred defeats the Viking army at Edington', fr:'Alfred bat l’armée viking à Edington' },
      { y:927,  zh:'艾塞斯坦統一英格蘭', en:'Æthelstan unites England', fr:'Æthelstan unifie l’Angleterre' },
      { y:1016, zh:'丹麥的克努特成為英格蘭國王', en:'Cnut of Denmark becomes king of England', fr:'Le Danois Cnut devient roi d’Angleterre' },
      { y:1066, zh:'哈斯丁之戰，諾曼人征服英格蘭', en:'Battle of Hastings: the Norman Conquest', fr:'Bataille d’Hastings : la conquête normande' },
    ],
    themes:{
      state:{ zh:'諾森布里亞、麥西亞、威塞克斯等王國彼此爭霸，最後由威塞克斯統一英格蘭。國王與「賢人會議」共同議事，全國劃分為郡，郡制沿用至今。北方則在 843 年前後由肯尼思·麥克亞爾平合併為蘇格蘭王國。',
        en:'Rival kingdoms such as Northumbria, Mercia and Wessex fought for supremacy until Wessex united England. Kings ruled with a council of wise men, the witan, and divided the land into shires that still exist. In the north, around 843, Kenneth MacAlpin joined its peoples into a single Scottish kingdom.',
        fr:'Des royaumes rivaux, Northumbrie, Mercie, Wessex, se disputent la suprématie jusqu’à ce que le Wessex unifie l’Angleterre. Les rois gouvernent avec un conseil des sages, le witan, et découpent le pays en comtés qui existent toujours. Au nord, vers 843, Kenneth MacAlpin réunit les peuples en un seul royaume d’Écosse.' },
      faith:{ zh:'盎格魯撒克遜人原本信奉日耳曼諸神，597 年起由羅馬與愛爾蘭兩路傳教士改宗。664 年的惠特比會議決定採用羅馬的復活節算法，英格蘭教會從此向羅馬看齊。',
        en:'The Anglo-Saxons worshipped Germanic gods until missionaries from Rome and Ireland converted them from 597. At the Synod of Whitby in 664 the English church chose the Roman date for Easter and turned towards Rome.',
        fr:'Les Anglo-Saxons vénèrent les dieux germaniques jusqu’à leur conversion, à partir de 597, par des missionnaires venus de Rome et d’Irlande. Au synode de Whitby, en 664, l’Église anglaise adopte la date romaine de Pâques et se tourne vers Rome.' },
      society:{ zh:'羅馬城鎮多半荒廢，人們住在木造村落，以農耕為生。阿佛烈興建稱為「堡」的設防城鎮；維京人控制的「丹麥法區」則帶來新的地名、法律與貿易網路。',
        en:'Most Roman towns fell into ruin and people lived by farming in timber villages. Alfred built fortified towns called burhs, and the Viking-ruled Danelaw brought new place names, laws and trading links.',
        fr:'La plupart des villes romaines tombent en ruine et l’on vit de l’agriculture dans des villages de bois. Alfred fonde des bourgs fortifiés, les burhs, et le Danelaw sous domination viking apporte noms de lieux, lois et réseaux commerciaux nouveaux.' },
      culture:{ zh:'古英語在這個時期成形，史詩《貝奧武夫》與比德的《英吉利教會史》都出自這幾個世紀。阿佛烈下令把拉丁文經典譯成英語，並開始編寫《盎格魯撒克遜編年史》。',
        en:'Old English took shape; the epic Beowulf and Bede’s Ecclesiastical History of the English People date from these centuries. Alfred had Latin classics translated into English and began the Anglo-Saxon Chronicle.',
        fr:'Le vieil anglais prend forme ; l’épopée de Beowulf et l’Histoire ecclésiastique du peuple anglais de Bède datent de ces siècles. Alfred fait traduire des classiques latins en anglais et lance la Chronique anglo-saxonne.' },
      world:{ zh:'不列顛被捲入北海世界：維京人從斯堪地那維亞而來，十一世紀初的克努特一度把英格蘭、丹麥與挪威合為一個北海帝國。',
        en:'Britain was drawn into the North Sea world: the Vikings came from Scandinavia, and in the early eleventh century Cnut briefly joined England, Denmark and Norway in a North Sea empire.',
        fr:'La Bretagne est entraînée dans le monde de la mer du Nord : les Vikings viennent de Scandinavie et, au début du XIᵉ siècle, Cnut réunit un temps l’Angleterre, le Danemark et la Norvège en un empire de la mer du Nord.' },
    }
  },
  {
    id:'norman', icon:'🏰', start:1066, end:1216, world:'medieval',
    name:{ zh:'諾曼與安茹王朝', en:'Normans and Angevins', fr:'Normands et Angevins' },
    summary:{ zh:'征服者威廉以城堡與封建制度控制英格蘭：貴族講法語，教會用拉丁語，百姓說英語。亨利二世開創金雀花王朝，領地從蘇格蘭邊境延伸到庇里牛斯山。約翰王失去諾曼第，又被貴族逼著在 1215 年接受《大憲章》。',
      en:'William the Conqueror held England down with castles and feudal lordship: the nobles spoke French, the Church Latin and the people English. Henry II founded the Plantagenet line, ruling from the Scottish border to the Pyrenees. King John lost Normandy and in 1215 was forced by his barons to seal Magna Carta.',
      fr:'Guillaume le Conquérant tient l’Angleterre par les châteaux et la féodalité : la noblesse parle français, l’Église latin et le peuple anglais. Henri II fonde la dynastie Plantagenêt, qui règne de la frontière écossaise aux Pyrénées. Jean sans Terre perd la Normandie et doit, en 1215, sceller la Grande Charte sous la pression de ses barons.' },
    events:[
      { y:1066, zh:'威廉在聖誕節於西敏寺加冕', en:'William is crowned at Westminster Abbey on Christmas Day', fr:'Guillaume est couronné à Westminster le jour de Noël' },
      { y:1086, zh:'編成《末日審判書》，普查全國土地', en:'The Domesday Book surveys the land of England', fr:'Le Domesday Book recense les terres d’Angleterre' },
      { y:1154, zh:'亨利二世即位，金雀花王朝開始', en:'Henry II becomes king: the Plantagenet era begins', fr:'Avènement d’Henri II : début des Plantagenêts' },
      { y:1170, zh:'坎特伯里大主教貝克特在大教堂內遇刺', en:'Archbishop Thomas Becket is murdered in Canterbury Cathedral', fr:'L’archevêque Thomas Becket est assassiné dans la cathédrale de Cantorbéry' },
      { y:1204, zh:'約翰王失去諾曼第', en:'King John loses Normandy', fr:'Jean sans Terre perd la Normandie' },
      { y:1215, zh:'約翰王在蘭尼米德接受《大憲章》', en:'King John seals Magna Carta at Runnymede', fr:'Jean sans Terre scelle la Grande Charte à Runnymede' },
    ],
    themes:{
      state:{ zh:'威廉把土地分給追隨他的諾曼貴族，換取軍事效忠，並以《末日審判書》掌握全國財產。亨利二世派法官巡迴各地、採用陪審制度，奠定了普通法的基礎。',
        en:'William granted land to his Norman followers in return for military service and recorded the kingdom’s wealth in the Domesday Book. Henry II sent judges on circuit and used juries, laying the foundations of the common law.',
        fr:'Guillaume distribue les terres à ses compagnons normands en échange du service militaire et recense la richesse du royaume dans le Domesday Book. Henri II envoie des juges itinérants et recourt aux jurys, posant les bases de la common law.' },
      faith:{ zh:'諾曼人重建大教堂與修道院，教會勢力大增。亨利二世想讓犯罪的教士接受王室法庭審判，與大主教貝克特決裂；貝克特遇刺後，成為歐洲最受朝拜的聖人之一。',
        en:'The Normans rebuilt cathedrals and monasteries and the Church grew powerful. Henry II’s attempt to try criminous clerks in royal courts led to his quarrel with Archbishop Becket, whose murder made him one of Europe’s most venerated saints.',
        fr:'Les Normands rebâtissent cathédrales et abbayes, et l’Église gagne en puissance. La volonté d’Henri II de juger les clercs criminels devant ses tribunaux le brouille avec l’archevêque Becket, dont l’assassinat fait l’un des saints les plus vénérés d’Europe.' },
      society:{ zh:'莊園制度把大多數農民綁在領主的土地上。羊毛出口到法蘭德斯的紡織城市，成為英格蘭最重要的財富來源。',
        en:'The manorial system tied most peasants to their lord’s land. Wool exported to the cloth towns of Flanders became England’s main source of wealth.',
        fr:'Le régime seigneurial attache la plupart des paysans à la terre de leur seigneur. La laine, exportée vers les villes drapières de Flandre, devient la principale richesse de l’Angleterre.' },
      culture:{ zh:'宮廷與法庭使用諾曼法語，英語因此吸收了大量法語詞彙，例如 beef、court、justice。十二世紀末，牛津已經以大學的形式授課。',
        en:'Court and law spoke Norman French, and English absorbed a flood of French words such as beef, court and justice. By the late twelfth century Oxford was teaching as a university.',
        fr:'La cour et la justice parlent le français normand, et l’anglais absorbe quantité de mots français comme beef, court ou justice. Dès la fin du XIIᵉ siècle, Oxford enseigne comme une université.' },
      world:{ zh:'英格蘭國王同時是法國的諾曼第公爵與安茹伯爵，安茹帝國的大半土地在法國境內，英法兩國王室數百年的糾葛由此開始。理查一世參加了第三次十字軍東征。',
        en:'England’s kings were also dukes of Normandy and counts of Anjou, and most of the Angevin empire lay in France, the root of centuries of Anglo-French entanglement. Richard I fought in the Third Crusade.',
        fr:'Les rois d’Angleterre sont aussi ducs de Normandie et comtes d’Anjou, et l’essentiel de l’empire angevin se trouve en France, origine de siècles d’imbrication franco-anglaise. Richard Cœur de Lion participe à la troisième croisade.' },
    }
  },
  {
    id:'plantagenet', icon:'⚔️', start:1216, end:1485, world:'medieval',
    name:{ zh:'金雀花晚期與玫瑰戰爭', en:'Later Plantagenets and the Wars of the Roses', fr:'Les derniers Plantagenêts et la guerre des Deux-Roses' },
    summary:{ zh:'國王需要錢打仗，只好召集貴族、騎士與市民開會，議會由此成形。愛德華一世征服威爾斯，卻在蘇格蘭受挫；接著是百年戰爭與黑死病。最後蘭開斯特與約克兩大家族爭奪王位，三十年的玫瑰戰爭以亨利·都鐸在博斯沃思獲勝告終。',
      en:'Kings needed money for war and summoned lords, knights and townsmen to grant it, and Parliament took shape. Edward I conquered Wales but failed in Scotland; the Hundred Years’ War and the Black Death followed. At the end the houses of Lancaster and York fought for the crown, and thirty years of the Wars of the Roses ended with Henry Tudor’s victory at Bosworth.',
      fr:'Les rois ont besoin d’argent pour la guerre et convoquent seigneurs, chevaliers et bourgeois pour l’accorder : le Parlement prend forme. Édouard Iᵉʳ conquiert le pays de Galles mais échoue en Écosse ; viennent la guerre de Cent Ans et la peste noire. Enfin les maisons de Lancastre et d’York se disputent la couronne, et trente ans de guerre des Deux-Roses s’achèvent par la victoire d’Henri Tudor à Bosworth.' },
    events:[
      { y:1265, zh:'西蒙·德·孟福爾召集包含市民代表的議會', en:'Simon de Montfort’s parliament includes townsmen', fr:'Le parlement de Simon de Montfort inclut des bourgeois' },
      { y:1284, zh:'《羅德蘭法令》把威爾斯納入英格蘭王室統治', en:'The Statute of Rhuddlan places Wales under the English crown', fr:'Le statut de Rhuddlan place le pays de Galles sous la couronne anglaise' },
      { y:1314, zh:'班諾克本之戰，蘇格蘭大敗英格蘭', en:'Battle of Bannockburn: Scotland routs England', fr:'Bataille de Bannockburn : l’Écosse écrase l’Angleterre' },
      { y:1337, zh:'百年戰爭爆發', en:'The Hundred Years’ War begins', fr:'Début de la guerre de Cent Ans' },
      { y:1348, zh:'黑死病傳入英格蘭', en:'The Black Death reaches England', fr:'La peste noire atteint l’Angleterre' },
      { y:1381, zh:'農民起義，起義者攻入倫敦', en:'The Peasants’ Revolt: rebels enter London', fr:'Révolte des paysans : les insurgés entrent dans Londres' },
      { y:1415, zh:'阿金庫爾戰役，英軍長弓手大勝', en:'Battle of Agincourt: triumph of the English longbowmen', fr:'Bataille d’Azincourt : triomphe des archers anglais' },
      { y:1455, zh:'玫瑰戰爭開始', en:'The Wars of the Roses begin', fr:'Début de la guerre des Deux-Roses' },
      { y:1485, zh:'博斯沃思之戰，理查三世戰死', en:'Battle of Bosworth: Richard III is killed', fr:'Bataille de Bosworth : Richard III est tué' },
    ],
    themes:{
      state:{ zh:'1295 年愛德華一世的「模範議會」確立了貴族、教士與各郡各城代表一同開會的模式，十四世紀再分成上議院與下議院。國王徵稅必須取得議會同意，成為英國政治的長期規則。',
        en:'Edward I’s “Model Parliament” of 1295 set the pattern of lords, clergy and representatives of shires and towns meeting together, and in the fourteenth century it split into Lords and Commons. Taxes needed Parliament’s consent, a rule that would shape English politics for good.',
        fr:'Le « Parlement modèle » d’Édouard Iᵉʳ, en 1295, fixe le principe d’une réunion des seigneurs, du clergé et des représentants des comtés et des villes ; au XIVᵉ siècle, il se divise en Lords et Communes. L’impôt exige le consentement du Parlement, règle durable de la vie politique anglaise.' },
      faith:{ zh:'牛津學者威克里夫批評教會的財富與權威，他的追隨者「羅拉德派」把聖經譯成英文。他們遭到教會打壓，常被視為宗教改革的先聲。',
        en:'The Oxford scholar John Wycliffe attacked the Church’s wealth and authority, and his followers, the Lollards, put the Bible into English. They were suppressed, but are often seen as forerunners of the Reformation.',
        fr:'Le théologien d’Oxford John Wycliffe dénonce la richesse et l’autorité de l’Église ; ses disciples, les lollards, traduisent la Bible en anglais. Réprimés, ils sont souvent vus comme des précurseurs de la Réforme.' },
      society:{ zh:'黑死病奪走三分之一到一半的人口，勞力短缺讓農民要求更高的工資，1381 年人頭稅引爆農民起義。此後農奴制逐漸瓦解，羊毛與毛織品貿易持續繁榮。',
        en:'The Black Death killed between a third and a half of the population. Labour grew scarce and peasants demanded higher wages, and a poll tax sparked the revolt of 1381. Serfdom slowly withered away while the wool and cloth trades thrived.',
        fr:'La peste noire tue entre un tiers et la moitié de la population. La main-d’œuvre se raréfie, les paysans réclament de meilleurs salaires, et une capitation déclenche la révolte de 1381. Le servage s’éteint peu à peu tandis que prospèrent laine et draperie.' },
      culture:{ zh:'英語重新成為法庭與議會的語言。喬叟用英語寫成《坎特伯里故事集》，1476 年卡克斯頓在西敏設立英格蘭第一台印刷機。',
        en:'English returned as the language of the law courts and Parliament. Chaucer wrote The Canterbury Tales in English, and in 1476 William Caxton set up England’s first printing press at Westminster.',
        fr:'L’anglais redevient la langue des tribunaux et du Parlement. Chaucer écrit les Contes de Canterbury en anglais, et en 1476 William Caxton installe la première presse d’Angleterre à Westminster.' },
      world:{ zh:'英王以法國王位繼承人自居，在百年戰爭中贏得克雷西與阿金庫爾等大勝，最後卻幾乎失去所有法國領土，只剩加萊。北方的蘇格蘭則與法國維持「古老同盟」。',
        en:'English kings claimed the French throne and won great victories at Crécy and Agincourt in the Hundred Years’ War, yet ended by losing almost all their French lands except Calais. Scotland, to the north, kept its “Auld Alliance” with France.',
        fr:'Les rois d’Angleterre revendiquent le trône de France et remportent Crécy et Azincourt pendant la guerre de Cent Ans, mais finissent par perdre presque toutes leurs terres françaises, sauf Calais. Au nord, l’Écosse maintient l’« Auld Alliance » avec la France.' },
    }
  },
  {
    id:'tudor', icon:'🌹', start:1485, end:1603, world:'reformation',
    name:{ zh:'都鐸王朝', en:'The Tudors', fr:'Les Tudors' },
    summary:{ zh:'亨利七世結束內戰，重建王室財政。亨利八世為了離婚與羅馬教廷決裂，自任英格蘭教會最高領袖，並解散修道院。經過愛德華六世與瑪麗一世在新舊教之間來回擺盪，伊莉莎白一世確立了英格蘭國教，擊退西班牙無敵艦隊，開啟英格蘭的海上時代。',
      en:'Henry VII ended the civil wars and rebuilt royal finances. Henry VIII broke with Rome to end his marriage, made himself supreme head of the Church of England and dissolved the monasteries. After Edward VI and Mary I swung the country between Protestant and Catholic, Elizabeth I settled the Church of England, beat off the Spanish Armada and opened England’s age of the sea.',
      fr:'Henri VII met fin aux guerres civiles et restaure les finances royales. Henri VIII rompt avec Rome pour mettre fin à son mariage, se proclame chef suprême de l’Église d’Angleterre et dissout les monastères. Après les revirements d’Édouard VI et de Marie Iʳᵉ entre protestantisme et catholicisme, Élisabeth Iʳᵉ fixe l’Église anglicane, repousse l’Invincible Armada et ouvre l’âge maritime de l’Angleterre.' },
    events:[
      { y:1534, zh:'《至尊法案》：國王成為英格蘭教會最高領袖', en:'Act of Supremacy: the king becomes head of the Church of England', fr:'Acte de suprématie : le roi devient chef de l’Église d’Angleterre' },
      { y:1536, zh:'開始解散修道院；威爾斯在法律上併入英格蘭', en:'The dissolution of the monasteries begins; Wales is joined to England in law', fr:'Début de la dissolution des monastères ; le pays de Galles est uni juridiquement à l’Angleterre' },
      { y:1549, zh:'第一部英文《公禱書》頒行', en:'The first English Book of Common Prayer', fr:'Premier Book of Common Prayer en anglais' },
      { y:1555, zh:'瑪麗一世開始燒死新教徒', en:'Mary I begins burning Protestants', fr:'Marie Iʳᵉ commence à faire brûler des protestants' },
      { y:1559, zh:'伊莉莎白宗教協議', en:'The Elizabethan religious settlement', fr:'Le compromis religieux élisabéthain' },
      { y:1587, zh:'蘇格蘭女王瑪麗被處決', en:'Mary, Queen of Scots, is executed', fr:'Exécution de Marie Stuart' },
      { y:1588, zh:'擊退西班牙無敵艦隊', en:'Defeat of the Spanish Armada', fr:'Défaite de l’Invincible Armada' },
      { y:1600, zh:'東印度公司成立', en:'The East India Company is chartered', fr:'Fondation de la Compagnie des Indes orientales' },
    ],
    themes:{
      state:{ zh:'都鐸君主透過樞密院與議會統治。亨利八世的宗教改革全靠議會立法完成，反而提高了議會的地位。1536 年與 1543 年的法案把威爾斯併入英格蘭的郡制與法律。',
        en:'The Tudors governed through the Privy Council and Parliament, and because Henry VIII’s Reformation was carried out by Acts of Parliament, it raised Parliament’s standing. Acts of 1536 and 1543 brought Wales into England’s shires and law.',
        fr:'Les Tudors gouvernent par le Conseil privé et le Parlement ; comme la Réforme d’Henri VIII passe par des lois votées au Parlement, elle renforce son autorité. Les lois de 1536 et 1543 intègrent le pays de Galles aux comtés et au droit anglais.' },
      faith:{ zh:'英格蘭在三十年內四度改變國教。伊莉莎白採取折衷路線：教義偏向新教，主教制與部分禮儀保留天主教的形式，這就是英格蘭國教會（聖公會）。蘇格蘭則在諾克斯帶領下走向長老會。',
        en:'England changed its official religion four times in thirty years. Elizabeth chose a middle way, Protestant in doctrine but Catholic in its bishops and much of its ritual: the Church of England. Scotland, led by John Knox, went Presbyterian.',
        fr:'L’Angleterre change quatre fois de religion officielle en trente ans. Élisabeth choisit une voie moyenne, protestante par la doctrine mais catholique par l’épiscopat et une partie du rite : l’Église d’Angleterre. L’Écosse, sous John Knox, devient presbytérienne.' },
      society:{ zh:'修道院的土地被賣給鄉紳，造就一批新的地主階級。圈地養羊讓許多農民失去土地，1601 年的《濟貧法》首次規定由各教區負責救濟窮人。',
        en:'Monastic lands were sold to the gentry, creating a new landed class. Enclosure for sheep pushed many peasants off the land, and the Poor Law of 1601 made each parish responsible for its poor.',
        fr:'Les terres monastiques sont vendues à la gentry, qui forme une nouvelle classe de propriétaires. Les enclosures pour l’élevage ovin chassent de nombreux paysans, et la loi sur les pauvres de 1601 charge chaque paroisse de secourir ses indigents.' },
      culture:{ zh:'伊莉莎白時代是英國文學的黃金時期：莎士比亞與馬洛的戲劇在環球劇場等公共劇院上演，史賓賽寫下《仙后》。',
        en:'The Elizabethan age was a golden age of English letters: plays by Shakespeare and Marlowe filled public theatres such as the Globe, and Spenser wrote The Faerie Queene.',
        fr:'L’époque élisabéthaine est un âge d’or des lettres anglaises : les pièces de Shakespeare et de Marlowe remplissent des théâtres publics comme le Globe, et Spenser écrit La Reine des fées.' },
      world:{ zh:'英格蘭從歐陸的小角色轉向海洋：德瑞克環球航行並劫掠西班牙船隻，1588 年擊退無敵艦隊。1600 年成立的東印度公司，日後成為統治印度的工具。',
        en:'England turned from minor continental player to seafaring power: Drake sailed round the world raiding Spanish ships, and the Armada was beaten in 1588. The East India Company, founded in 1600, would later become the instrument of rule in India.',
        fr:'D’acteur continental modeste, l’Angleterre devient une puissance maritime : Drake fait le tour du monde en pillant les navires espagnols, et l’Armada est repoussée en 1588. La Compagnie des Indes orientales, fondée en 1600, deviendra l’instrument de la domination sur l’Inde.' },
    }
  },
  {
    id:'stuart', icon:'⚖️', start:1603, end:1688, world:'reformation',
    name:{ zh:'斯圖亞特王朝與內戰', en:'The Stuarts and the Civil War', fr:'Les Stuarts et la guerre civile' },
    summary:{ zh:'蘇格蘭國王詹姆士六世繼承英格蘭王位，兩國從此共戴一君。查理一世與議會為了稅收與宗教衝突，1642 年爆發內戰；1649 年國王被處死，英格蘭短暫成為由克倫威爾主導的共和國。1660 年王政復辟，但國王與議會之間的權力之爭並未結束。',
      en:'James VI of Scotland inherited the English crown, and the two kingdoms came to share one king. Charles I clashed with Parliament over taxes and religion, and civil war broke out in 1642; in 1649 the king was executed and England briefly became a republic dominated by Oliver Cromwell. The monarchy was restored in 1660, but the struggle between king and Parliament went on.',
      fr:'Jacques VI d’Écosse hérite de la couronne d’Angleterre : les deux royaumes partagent désormais un même roi. Charles Iᵉʳ s’oppose au Parlement sur l’impôt et la religion, et la guerre civile éclate en 1642 ; en 1649, le roi est exécuté et l’Angleterre devient brièvement une république dominée par Oliver Cromwell. La monarchie est restaurée en 1660, mais la lutte entre roi et Parlement continue.' },
    events:[
      { y:1603, zh:'王冠聯合：英格蘭與蘇格蘭共戴一君', en:'Union of the Crowns: England and Scotland share a king', fr:'Union des couronnes : l’Angleterre et l’Écosse partagent un roi' },
      { y:1605, zh:'火藥陰謀，企圖炸毀議會', en:'The Gunpowder Plot to blow up Parliament', fr:'La Conspiration des poudres contre le Parlement' },
      { y:1611, zh:'欽定版聖經出版', en:'The King James Bible is published', fr:'Publication de la Bible du roi Jacques' },
      { y:1620, zh:'五月花號載著清教徒前往北美', en:'The Mayflower carries the Pilgrims to America', fr:'Le Mayflower emmène les Pères pèlerins en Amérique' },
      { y:1642, zh:'內戰爆發', en:'Civil war breaks out', fr:'Début de la guerre civile' },
      { y:1649, zh:'查理一世被處死，英格蘭成為共和國', en:'Charles I is executed; England becomes a republic', fr:'Exécution de Charles Iᵉʳ ; l’Angleterre devient une république' },
      { y:1653, zh:'克倫威爾就任護國公', en:'Cromwell becomes Lord Protector', fr:'Cromwell devient Lord Protecteur' },
      { y:1660, zh:'王政復辟', en:'The Restoration', fr:'La Restauration' },
      { y:1666, zh:'倫敦大火', en:'The Great Fire of London', fr:'Le Grand Incendie de Londres' },
    ],
    themes:{
      state:{ zh:'斯圖亞特國王相信君權神授，與議會在徵稅權上衝突。內戰後英格蘭經歷了唯一一次的共和，但軍事統治不得人心；復辟後議會分成托利與輝格兩派，成為政黨的起源。',
        en:'The Stuart kings believed in divine right and clashed with Parliament over the power to tax. After the Civil War England had its only experiment as a republic, but military rule proved unpopular; after the Restoration, Parliament divided into Tories and Whigs, the origin of party politics.',
        fr:'Les rois Stuarts croient au droit divin et s’opposent au Parlement sur le droit de lever l’impôt. Après la guerre civile, l’Angleterre connaît sa seule expérience républicaine, mais le régime militaire est impopulaire ; après la Restauration, le Parlement se divise en tories et whigs, origine des partis.' },
      faith:{ zh:'清教徒希望進一步「淨化」國教，查理一世與大主教勞德卻推行講究儀式的禮拜，這場衝突是內戰的導火線之一。共和時期清教徒禁止聖誕節慶祝並關閉劇場；復辟後國教恢復，不從國教者受到限制。',
        en:'Puritans wanted to “purify” the Church further, while Charles I and Archbishop Laud pushed elaborate ritual, a clash that helped spark the Civil War. Under the republic Puritans banned Christmas festivities and closed the theatres. The Restoration brought the established Church back and put limits on Dissenters.',
        fr:'Les puritains veulent « purifier » davantage l’Église, tandis que Charles Iᵉʳ et l’archevêque Laud imposent un rituel solennel : ce conflit contribue à la guerre civile. Sous la république, les puritains interdisent les réjouissances de Noël et ferment les théâtres. La Restauration rétablit l’Église officielle et restreint les dissidents.' },
      society:{ zh:'倫敦快速成長為歐洲最大的城市之一。1665 年大瘟疫與 1666 年大火重創倫敦，重建時改用磚石，聖保羅大教堂由雷恩重新設計。',
        en:'London grew into one of Europe’s largest cities. The Great Plague of 1665 and the Great Fire of 1666 devastated it, and it was rebuilt in brick and stone, with a new St Paul’s Cathedral by Christopher Wren.',
        fr:'Londres devient l’une des plus grandes villes d’Europe. La Grande Peste de 1665 et le Grand Incendie de 1666 la ravagent ; elle est rebâtie en brique et en pierre, avec une nouvelle cathédrale Saint-Paul de Christopher Wren.' },
      culture:{ zh:'欽定版聖經塑造了英語的節奏。霍布斯在內戰後寫下《利維坦》，彌爾頓寫出《失樂園》；1660 年成立的皇家學會，則是牛頓等人推動科學革命的舞台。',
        en:'The King James Bible shaped the rhythm of English. After the Civil War Hobbes wrote Leviathan and Milton Paradise Lost, and the Royal Society, founded in 1660, became the home of Newton and the Scientific Revolution.',
        fr:'La Bible du roi Jacques façonne le rythme de la langue anglaise. Après la guerre civile, Hobbes écrit le Léviathan et Milton Le Paradis perdu ; la Royal Society, fondée en 1660, devient le foyer de Newton et de la révolution scientifique.' },
      world:{ zh:'英國人在北美的維吉尼亞與新英格蘭建立殖民地，並在加勒比海種植甘蔗。英格蘭與荷蘭三度爆發海戰，1664 年奪下新阿姆斯特丹，改名紐約。',
        en:'English settlers founded colonies in Virginia and New England and planted sugar in the Caribbean. Three naval wars were fought with the Dutch, and in 1664 New Amsterdam was taken and renamed New York.',
        fr:'Des colons anglais fondent la Virginie et la Nouvelle-Angleterre et plantent la canne à sucre aux Antilles. Trois guerres navales sont livrées contre les Provinces-Unies, et en 1664 la Nouvelle-Amsterdam, prise, devient New York.' },
    }
  },
  {
    id:'georgian', icon:'🏛️', start:1688, end:1815, world:'enlightenment_revolution',
    name:{ zh:'光榮革命與大不列顛', en:'The Glorious Revolution and Great Britain', fr:'La Glorieuse Révolution et la Grande-Bretagne' },
    summary:{ zh:'1688 年議會迎立威廉與瑪麗，確立議會高於國王的原則。1707 年英格蘭與蘇格蘭合併為大不列顛王國，首相與內閣逐漸成為真正的權力中心。英國贏得海上霸權，卻失去北美十三州；十八世紀後半，工業革命在這裡展開。',
      en:'In 1688 Parliament invited William and Mary to take the throne, establishing that Parliament stood above the king. In 1707 England and Scotland merged into the Kingdom of Great Britain, and the prime minister and cabinet gradually became the real centre of power. Britain won mastery of the seas but lost the thirteen American colonies, and in the later eighteenth century it became the birthplace of the Industrial Revolution.',
      fr:'En 1688, le Parlement appelle Guillaume et Marie au trône et affirme sa primauté sur le roi. En 1707, l’Angleterre et l’Écosse s’unissent en royaume de Grande-Bretagne, et le Premier ministre et le cabinet deviennent peu à peu le vrai centre du pouvoir. La Grande-Bretagne conquiert la maîtrise des mers mais perd les treize colonies américaines, et devient dans la seconde moitié du XVIIIᵉ siècle le berceau de la révolution industrielle.' },
    events:[
      { y:1688, zh:'光榮革命，詹姆士二世出逃', en:'The Glorious Revolution: James II flees', fr:'Glorieuse Révolution : Jacques II s’enfuit' },
      { y:1689, zh:'《權利法案》', en:'The Bill of Rights', fr:'Le Bill of Rights' },
      { y:1694, zh:'英格蘭銀行成立', en:'The Bank of England is founded', fr:'Fondation de la Banque d’Angleterre' },
      { y:1707, zh:'《聯合法案》，大不列顛王國成立', en:'The Acts of Union create the Kingdom of Great Britain', fr:'Les Actes d’Union créent le royaume de Grande-Bretagne' },
      { y:1721, zh:'沃波爾成為實質上的第一任首相', en:'Walpole becomes in effect the first prime minister', fr:'Walpole devient de fait le premier Premier ministre' },
      { y:1746, zh:'卡洛登戰役，詹姆士黨最後一次起事失敗', en:'Culloden: the last Jacobite rising is crushed', fr:'Culloden : écrasement du dernier soulèvement jacobite' },
      { y:1763, zh:'七年戰爭結束，英國取得加拿大', en:'The Seven Years’ War ends; Britain gains Canada', fr:'Fin de la guerre de Sept Ans : la Grande-Bretagne obtient le Canada' },
      { y:1776, zh:'北美殖民地宣布獨立', en:'The American colonies declare independence', fr:'Les colonies américaines déclarent leur indépendance' },
      { y:1801, zh:'大不列顛與愛爾蘭聯合王國成立', en:'The United Kingdom of Great Britain and Ireland is formed', fr:'Création du Royaume-Uni de Grande-Bretagne et d’Irlande' },
      { y:1805, zh:'特拉法加海戰，納爾遜在勝利中戰死', en:'Trafalgar: Nelson dies in victory', fr:'Trafalgar : Nelson meurt dans la victoire' },
      { y:1815, zh:'滑鐵盧戰役', en:'The Battle of Waterloo', fr:'La bataille de Waterloo' },
    ],
    themes:{
      state:{ zh:'《權利法案》規定國王不得未經議會同意徵稅或維持常備軍；1701 年的《王位繼承法》排除天主教徒繼位，德國的漢諾威家族因此入主。國王漸漸退居幕後，由掌握下議院多數的首相領導政府。',
        en:'The Bill of Rights barred the king from raising taxes or keeping a standing army without Parliament’s consent, and the Act of Settlement of 1701 excluded Catholics from the throne, bringing the Hanoverians over from Germany. Kings slowly withdrew behind a prime minister who commanded the Commons.',
        fr:'Le Bill of Rights interdit au roi de lever l’impôt ou d’entretenir une armée permanente sans le Parlement, et l’Acte d’établissement de 1701 écarte les catholiques du trône, faisant venir d’Allemagne la maison de Hanovre. Le roi s’efface peu à peu derrière un Premier ministre appuyé sur les Communes.' },
      faith:{ zh:'1689 年的《寬容法》容許新教的不從國教者公開禮拜，天主教徒則仍被排除在公職之外。十八世紀衛斯理兄弟發起循道運動，把信仰帶進工人與礦工之間。',
        en:'The Toleration Act of 1689 let Protestant Dissenters worship openly, while Catholics stayed barred from public office. In the eighteenth century John and Charles Wesley’s Methodist movement carried religion to workers and miners.',
        fr:'L’Acte de tolérance de 1689 permet aux dissidents protestants de célébrer leur culte, tandis que les catholiques restent exclus des charges publiques. Au XVIIIᵉ siècle, le méthodisme des frères Wesley porte la foi parmi ouvriers et mineurs.' },
      society:{ zh:'英格蘭銀行與國債制度讓政府能借錢打仗。農業革命提高了糧食產量；十八世紀後半，瓦特改良蒸汽機，紡織工廠與運河遍布英格蘭北部，工業革命由此展開。',
        en:'The Bank of England and the national debt let the state borrow for war. An agricultural revolution raised food output, and in the later eighteenth century James Watt improved the steam engine while textile mills and canals spread across northern England: the Industrial Revolution had begun.',
        fr:'La Banque d’Angleterre et la dette publique permettent à l’État d’emprunter pour la guerre. Une révolution agricole accroît la production, et dans la seconde moitié du XVIIIᵉ siècle James Watt perfectionne la machine à vapeur, tandis que filatures et canaux se multiplient dans le nord de l’Angleterre : la révolution industrielle commence.' },
      culture:{ zh:'洛克的政治哲學，以及休謨與亞當·斯密代表的蘇格蘭啟蒙運動影響深遠，斯密的《國富論》在 1776 年出版。倫敦的咖啡館與報紙培養出公共輿論，約翰生編出第一部權威的英語詞典。',
        en:'Locke’s political philosophy and the Scottish Enlightenment of Hume and Adam Smith had lasting influence; Smith’s Wealth of Nations appeared in 1776. London’s coffee houses and newspapers created public opinion, and Samuel Johnson compiled the first great English dictionary.',
        fr:'La philosophie politique de Locke et les Lumières écossaises de Hume et d’Adam Smith exercent une influence durable ; La Richesse des nations paraît en 1776. Cafés et journaux londoniens font naître l’opinion publique, et Samuel Johnson compile le premier grand dictionnaire anglais.' },
      world:{ zh:'英國與法國在歐洲、北美與印度反覆交戰。七年戰爭後英國取得加拿大並在印度占上風，卻在 1783 年被迫承認美國獨立。拿破崙戰爭中，英國以海權與資金支撐反法同盟，最後在滑鐵盧獲勝。',
        en:'Britain fought France again and again in Europe, North America and India. The Seven Years’ War won it Canada and the upper hand in India, but in 1783 it had to recognise American independence. In the Napoleonic Wars British sea power and money sustained the coalitions until victory at Waterloo.',
        fr:'La Grande-Bretagne affronte la France à maintes reprises en Europe, en Amérique du Nord et en Inde. La guerre de Sept Ans lui donne le Canada et l’avantage en Inde, mais en 1783 elle doit reconnaître l’indépendance américaine. Pendant les guerres napoléoniennes, sa flotte et son argent soutiennent les coalitions jusqu’à Waterloo.' },
    }
  },
  {
    id:'victorian', icon:'🚂', start:1815, end:1901, world:'industrial',
    name:{ zh:'工業時代與維多利亞時代', en:'The Industrial and Victorian Age', fr:'L’ère industrielle et victorienne' },
    summary:{ zh:'英國成為「世界工廠」，鐵路、煤礦與工廠改變了城市與生活。議會一步步擴大選舉權，廢除奴隸制與穀物法，走向自由貿易。維多利亞女王在位六十三年，大英帝國擴張到全球約四分之一的陸地。',
      en:'Britain became the “workshop of the world”, and railways, coal mines and factories transformed towns and lives. Parliament widened the vote step by step, abolished slavery and the Corn Laws, and embraced free trade. Queen Victoria reigned for sixty-three years as the empire grew to cover about a quarter of the world’s land.',
      fr:'La Grande-Bretagne devient « l’atelier du monde » : chemins de fer, mines de charbon et usines transforment villes et modes de vie. Le Parlement élargit le droit de vote pas à pas, abolit l’esclavage et les Corn Laws et adopte le libre-échange. La reine Victoria règne soixante-trois ans, tandis que l’empire s’étend sur environ un quart des terres émergées.' },
    events:[
      { y:1819, zh:'彼得盧屠殺：騎兵衝散要求改革的集會', en:'Peterloo: cavalry charge a rally for reform', fr:'Peterloo : la cavalerie charge un rassemblement réformateur' },
      { y:1825, zh:'斯托克頓至達靈頓鐵路通車', en:'The Stockton and Darlington Railway opens', fr:'Ouverture du chemin de fer Stockton–Darlington' },
      { y:1832, zh:'《改革法案》擴大選舉權', en:'The Great Reform Act widens the vote', fr:'Le Reform Act élargit le droit de vote' },
      { y:1833, zh:'大英帝國廢除奴隸制', en:'Slavery is abolished across the British Empire', fr:'Abolition de l’esclavage dans l’Empire britannique' },
      { y:1846, zh:'廢除穀物法', en:'Repeal of the Corn Laws', fr:'Abrogation des Corn Laws' },
      { y:1851, zh:'倫敦萬國工業博覽會', en:'The Great Exhibition in London', fr:'La Grande Exposition de Londres' },
      { y:1858, zh:'英國王室直接統治印度', en:'The Crown takes direct rule of India', fr:'La Couronne prend le gouvernement direct de l’Inde' },
      { y:1867, zh:'第二次改革法案，城市工人取得投票權', en:'The Second Reform Act gives the vote to urban workers', fr:'Le second Reform Act donne le vote aux ouvriers des villes' },
      { y:1877, zh:'維多利亞宣布為印度女皇', en:'Victoria is proclaimed Empress of India', fr:'Victoria est proclamée impératrice des Indes' },
      { y:1901, zh:'維多利亞女王去世', en:'Death of Queen Victoria', fr:'Mort de la reine Victoria' },
    ],
    themes:{
      state:{ zh:'1832 年的改革法案把選舉權擴大到中產階級，1867 與 1884 年再擴及大部分男性工人，1872 年改採祕密投票。自由黨的格萊斯頓與保守黨的迪斯雷利輪流執政，兩黨制由此成形。',
        en:'The Reform Act of 1832 gave the vote to much of the middle class, those of 1867 and 1884 extended it to most working men, and the secret ballot arrived in 1872. Gladstone’s Liberals and Disraeli’s Conservatives alternated in power, and two-party politics took shape.',
        fr:'Le Reform Act de 1832 accorde le vote à une grande partie des classes moyennes, ceux de 1867 et 1884 l’étendent à la plupart des ouvriers, et le scrutin secret arrive en 1872. Les libéraux de Gladstone et les conservateurs de Disraeli alternent au pouvoir : le bipartisme prend forme.' },
      faith:{ zh:'1829 年天主教徒獲得解放，可以進入議會。福音派推動廢奴、主日學與社會改革；1859 年達爾文出版《物種起源》，引發科學與信仰的激烈辯論。',
        en:'Catholic Emancipation in 1829 let Catholics sit in Parliament. Evangelicals drove the campaigns against slavery and for Sunday schools and social reform, and Darwin’s On the Origin of Species, in 1859, set off a fierce debate between science and faith.',
        fr:'L’émancipation des catholiques, en 1829, leur ouvre le Parlement. Les évangéliques portent l’abolition de l’esclavage, les écoles du dimanche et les réformes sociales, et L’Origine des espèces de Darwin, en 1859, déclenche un vif débat entre science et foi.' },
      society:{ zh:'曼徹斯特等工業城市爆炸性成長，童工、貧民窟與霍亂成為迫切的社會問題，催生了工廠法、公共衛生法與工會。1846 年廢除保護地主的穀物法，英國全面走向自由貿易。',
        en:'Industrial cities such as Manchester grew explosively, and child labour, slums and cholera became pressing problems, prompting Factory Acts, public health laws and trade unions. In 1846 the Corn Laws protecting landowners were repealed, and Britain went over to free trade.',
        fr:'Les villes industrielles comme Manchester connaissent une croissance explosive ; travail des enfants, taudis et choléra suscitent lois sur les fabriques, lois d’hygiène publique et syndicats. En 1846, les Corn Laws qui protégeaient les propriétaires sont abrogées, et le pays passe au libre-échange.' },
      culture:{ zh:'狄更斯的小說揭露工業社會的貧困，勃朗特姊妹、喬治·艾略特與哈代寫出鄉村生活與女性的處境。法拉第與麥克斯威的電磁學研究、達爾文的演化論，讓英國站上科學的最前線。',
        en:'Dickens’s novels exposed the poverty of industrial society, while the Brontës, George Eliot and Hardy wrote of rural life and women’s lot. Faraday and Maxwell’s work on electromagnetism and Darwin’s theory of evolution put Britain at the forefront of science.',
        fr:'Les romans de Dickens dénoncent la misère de la société industrielle, tandis que les sœurs Brontë, George Eliot et Hardy décrivent les campagnes et la condition des femmes. Les travaux de Faraday et Maxwell sur l’électromagnétisme et la théorie de l’évolution de Darwin placent le pays à l’avant-garde de la science.' },
      world:{ zh:'皇家海軍維持著「不列顛治世」：英國在鴉片戰爭中取得香港，1858 年直接統治印度，並在瓜分非洲時取得大片殖民地。愛爾蘭大饑荒（1845–1852）造成約一百萬人死亡、上百萬人移民。',
        en:'The Royal Navy upheld a “Pax Britannica”: Britain took Hong Kong in the Opium War, assumed direct rule of India in 1858 and seized vast territories in the Scramble for Africa. The Great Famine in Ireland (1845–1852) killed about a million people and drove over a million to emigrate.',
        fr:'La Royal Navy assure une « Pax Britannica » : le pays obtient Hong Kong lors de la guerre de l’opium, gouverne directement l’Inde dès 1858 et s’empare de vastes territoires lors du partage de l’Afrique. La Grande Famine irlandaise (1845-1852) fait environ un million de morts et pousse plus d’un million de personnes à émigrer.' },
    }
  },
  {
    id:'worldwars', icon:'🎖️', start:1901, end:1945, world:'worldwar',
    name:{ zh:'兩次世界大戰', en:'The Era of the World Wars', fr:'L’époque des guerres mondiales' },
    summary:{ zh:'二十世紀初英國仍擁有世界最大的帝國，卻面臨德國與美國的挑戰。第一次世界大戰奪走近九十萬英國軍人的生命；戰後女性取得投票權，愛爾蘭南部獨立，經濟陷入長期蕭條。1940 年英國在邱吉爾領導下獨力對抗納粹德國，最後與美蘇一同獲勝，國力卻已大幅消耗。',
      en:'At the start of the century Britain still ruled the largest empire in the world, but faced challengers in Germany and the United States. The First World War killed nearly 900,000 British servicemen; afterwards women won the vote, southern Ireland became independent and the economy sank into long depression. In 1940, under Churchill, Britain stood alone against Nazi Germany, and it ended on the winning side with the United States and the Soviet Union, but drained of its strength.',
      fr:'Au début du siècle, la Grande-Bretagne possède encore le plus vaste empire du monde, mais l’Allemagne et les États-Unis la défient. La Première Guerre mondiale tue près de 900 000 soldats britanniques ; ensuite les femmes obtiennent le vote, le sud de l’Irlande devient indépendant et l’économie s’enlise dans la dépression. En 1940, sous Churchill, le pays tient seul face à l’Allemagne nazie et finit dans le camp des vainqueurs avec les États-Unis et l’URSS, mais épuisé.' },
    events:[
      { y:1903, zh:'潘克斯特創立婦女社會政治聯盟，爭取女性投票權', en:'Emmeline Pankhurst founds the WSPU to win votes for women', fr:'Emmeline Pankhurst fonde la WSPU pour le vote des femmes' },
      { y:1911, by:'H. H. Asquith', zh:'《議會法》限制上議院的權力', en:'The Parliament Act curbs the House of Lords', fr:'Le Parliament Act limite les pouvoirs des Lords' },
      { y:1914, by:'H. H. Asquith', zh:'英國對德宣戰', en:'Britain declares war on Germany', fr:'La Grande-Bretagne déclare la guerre à l’Allemagne' },
      { y:1916, by:'H. H. Asquith', zh:'索姆河戰役；都柏林復活節起義', en:'The Somme; the Easter Rising in Dublin', fr:'La Somme ; l’insurrection de Pâques à Dublin' },
      { y:1918, zh:'三十歲以上女性取得投票權', en:'Women over thirty win the vote', fr:'Les femmes de plus de trente ans obtiennent le vote' },
      { y:1922, zh:'愛爾蘭自由邦成立', en:'The Irish Free State is founded', fr:'Création de l’État libre d’Irlande' },
      { y:1926, zh:'全國大罷工', en:'The General Strike', fr:'La grève générale' },
      { y:1936, zh:'愛德華八世退位', en:'Edward VIII abdicates', fr:'Abdication d’Édouard VIII' },
      { y:1940, zh:'敦克爾克大撤退與不列顛空戰', en:'Dunkirk and the Battle of Britain', fr:'Dunkerque et la bataille d’Angleterre' },
      { y:1945, zh:'歐戰勝利', en:'Victory in Europe', fr:'Victoire en Europe' },
    ],
    themes:{
      state:{ zh:'1911 年的議會法剝奪了上議院否決預算的權力。工黨在 1924 年首次組閣，取代自由黨成為兩大黨之一；兩次大戰期間則由聯合政府領導。1928 年起女性與男性享有相同的投票權。',
        en:'The Parliament Act of 1911 stripped the Lords of their veto over the budget. Labour formed its first government in 1924 and replaced the Liberals as one of the two great parties, while both wars were run by coalitions. From 1928 women voted on the same terms as men.',
        fr:'Le Parliament Act de 1911 retire aux Lords leur veto sur le budget. Les travaillistes forment leur premier gouvernement en 1924 et supplantent les libéraux comme l’un des deux grands partis, tandis que les deux guerres sont conduites par des coalitions. Dès 1928, les femmes votent aux mêmes conditions que les hommes.' },
      faith:{ zh:'上教堂的人持續減少，社會逐漸世俗化。愛爾蘭的分裂大致沿著宗教界線：天主教為主的南部獨立，新教徒占多數的北部六郡留在聯合王國。',
        en:'Church attendance kept falling and society grew more secular. Ireland was partitioned largely along religious lines: the Catholic south became independent, while six mostly Protestant northern counties stayed in the United Kingdom.',
        fr:'La pratique religieuse continue de reculer et la société se sécularise. L’Irlande est partagée en grande partie selon des lignes religieuses : le sud catholique devient indépendant, tandis que six comtés du nord, majoritairement protestants, restent dans le Royaume-Uni.' },
      society:{ zh:'自由黨政府推出養老金與國民保險，是福利國家的雛形。兩次大戰之間，煤礦與造船等傳統產業衰退，1926 年大罷工與 1930 年代的大蕭條讓北方工業區失業嚴重。',
        en:'Liberal governments introduced old-age pensions and national insurance, early foundations of the welfare state. Between the wars the old industries of coal and shipbuilding declined, and the General Strike of 1926 and the Depression of the 1930s left the industrial north with mass unemployment.',
        fr:'Les gouvernements libéraux créent retraites et assurance nationale, premières pierres de l’État-providence. Entre les deux guerres, charbon et construction navale déclinent, et la grève générale de 1926 puis la crise des années 1930 laissent le nord industriel frappé par un chômage de masse.' },
      culture:{ zh:'吳爾芙與艾略特引領現代主義文學；BBC 在 1922 年開播，成為全國共同的聲音。歐文與沙遜等戰爭詩人，記錄了壕溝戰的殘酷。',
        en:'Virginia Woolf and T. S. Eliot led literary modernism, and the BBC, broadcasting from 1922, became a shared national voice. War poets such as Wilfred Owen and Siegfried Sassoon recorded the horror of the trenches.',
        fr:'Virginia Woolf et T. S. Eliot mènent le modernisme littéraire, et la BBC, qui émet dès 1922, devient une voix nationale partagée. Des poètes de guerre comme Wilfred Owen et Siegfried Sassoon témoignent de l’horreur des tranchées.' },
      world:{ zh:'大英帝國在一戰後達到最大範圍，但各自治領日益獨立，1931 年《西敏法令》讓加拿大、澳洲等成為大英國協的平等成員。二戰中英國仰賴美國援助，戰後債台高築，帝國已難以維持。',
        en:'The empire reached its greatest extent after the First World War, but the dominions grew more independent, and the Statute of Westminster in 1931 made Canada, Australia and others equal members of the Commonwealth. In the Second World War Britain relied on American aid, and it emerged deep in debt with an empire it could no longer sustain.',
        fr:'L’empire atteint son extension maximale après la Première Guerre mondiale, mais les dominions s’émancipent, et le statut de Westminster de 1931 fait du Canada, de l’Australie et d’autres des membres égaux du Commonwealth. Pendant la Seconde Guerre mondiale, le pays dépend de l’aide américaine et en sort lourdement endetté, avec un empire qu’il ne peut plus soutenir.' },
    }
  },
  {
    id:'welfare', icon:'🏥', start:1945, end:1979, world:'coldwar',
    name:{ zh:'福利國家與帝國終結', en:'The Welfare State and the End of Empire', fr:'L’État-providence et la fin de l’empire' },
    summary:{ zh:'1945 年工黨大勝，建立國民保健署（NHS），並把煤礦、鐵路等產業收歸國有。印度在 1947 年獨立，其後二十年非洲與亞洲殖民地相繼獨立；1956 年的蘇伊士危機證明英國已不再是超級強權。1973 年英國加入歐洲共同體，七十年代卻陷入通膨與罷工潮。',
      en:'Labour’s landslide in 1945 created the National Health Service and nationalised coal, the railways and other industries. India became independent in 1947 and most colonies in Africa and Asia followed within twenty years, while the Suez Crisis of 1956 showed that Britain was no longer a superpower. Britain joined the European Community in 1973, but the decade sank into inflation and waves of strikes.',
      fr:'La victoire écrasante des travaillistes en 1945 crée le National Health Service et nationalise charbon, chemins de fer et d’autres industries. L’Inde devient indépendante en 1947, et la plupart des colonies d’Afrique et d’Asie suivent en vingt ans, tandis que la crise de Suez, en 1956, montre que le pays n’est plus une superpuissance. Le Royaume-Uni entre dans la Communauté européenne en 1973, mais la décennie s’enlise dans l’inflation et les grèves.' },
    events:[
      { y:1947, zh:'印度與巴基斯坦獨立', en:'India and Pakistan become independent', fr:'Indépendance de l’Inde et du Pakistan' },
      { y:1948, zh:'國民保健署成立；帝國疾風號載來加勒比海移民', en:'The NHS is founded; the Empire Windrush brings Caribbean migrants', fr:'Création du NHS ; l’Empire Windrush amène des immigrés antillais' },
      { y:1953, zh:'伊莉莎白二世加冕', en:'Coronation of Elizabeth II', fr:'Couronnement d’Élisabeth II' },
      { y:1956, zh:'蘇伊士危機', en:'The Suez Crisis', fr:'La crise de Suez' },
      { y:1960, zh:'麥克米倫發表「變革之風」演說', en:'Macmillan’s “Wind of Change” speech', fr:'Discours du « vent du changement » de Macmillan' },
      { y:1969, zh:'英軍進駐北愛爾蘭，北愛動亂擴大', en:'Troops are sent to Northern Ireland as the Troubles escalate', fr:'Envoi de troupes en Irlande du Nord alors que les Troubles s’aggravent' },
      { y:1973, zh:'加入歐洲共同體', en:'Britain joins the European Community', fr:'Le Royaume-Uni entre dans la Communauté européenne' },
      { y:1978, zh:'「不滿之冬」罷工潮', en:'The “Winter of Discontent” strikes', fr:'Les grèves de « l’hiver du mécontentement »' },
    ],
    themes:{
      state:{ zh:'戰後兩大黨形成「共識政治」，都接受混合經濟與福利國家。1969 年投票年齡降為十八歲；蘇格蘭與威爾斯的民族主義開始抬頭。',
        en:'Both main parties accepted a mixed economy and the welfare state in a post-war “consensus”. The voting age fell to eighteen in 1969, and Scottish and Welsh nationalism began to rise.',
        fr:'Les deux grands partis acceptent l’économie mixte et l’État-providence dans un « consensus » d’après-guerre. La majorité électorale passe à dix-huit ans en 1969, et les nationalismes écossais et gallois montent.' },
      faith:{ zh:'社會快速世俗化，1967 年同性性行為在英格蘭與威爾斯除罪化。北愛爾蘭天主教徒爭取民權，與新教效忠派衝突，演變成長達三十年的暴力「動亂」。',
        en:'Society secularised rapidly, and in 1967 homosexual acts were decriminalised in England and Wales. Catholic civil-rights campaigns in Northern Ireland collided with Protestant loyalism and turned into thirty years of violence, the Troubles.',
        fr:'La société se sécularise rapidement, et en 1967 l’homosexualité est dépénalisée en Angleterre et au pays de Galles. Les revendications des catholiques d’Irlande du Nord pour les droits civiques se heurtent au loyalisme protestant et débouchent sur trente ans de violences, les « Troubles ».' },
      society:{ zh:'NHS 讓所有人免費就醫，國宅大量興建。來自加勒比海與南亞的移民改變了城市的面貌；七十年代石油危機後通膨高漲，1978 至 1979 年的「不滿之冬」罷工讓工黨政府垮台。',
        en:'The NHS gave everyone free medical care and council housing was built on a vast scale. Migrants from the Caribbean and South Asia reshaped the cities; after the oil shocks of the 1970s inflation soared, and the strikes of the 1978–79 “Winter of Discontent” brought down the Labour government.',
        fr:'Le NHS offre des soins gratuits à tous et les logements sociaux se multiplient. Les immigrés des Antilles et d’Asie du Sud transforment les villes ; après les chocs pétroliers des années 1970, l’inflation s’envole, et les grèves de « l’hiver du mécontentement » de 1978-1979 font tomber le gouvernement travailliste.' },
      culture:{ zh:'六十年代的「搖擺倫敦」讓英國成為流行文化的中心：披頭四、滾石樂團、迷你裙與 007 電影風靡全球。',
        en:'The “Swinging London” of the sixties made Britain a capital of pop culture: the Beatles, the Rolling Stones, the miniskirt and James Bond films swept the world.',
        fr:'Le « Swinging London » des années 1960 fait du pays une capitale de la culture pop : les Beatles, les Rolling Stones, la minijupe et les films de James Bond conquièrent le monde.' },
      world:{ zh:'英國是北約創始成員與核武國家，與美國維持「特殊關係」。帝國改組為大英國協；英國兩度申請加入歐洲共同體都被法國的戴高樂否決，1973 年才成功加入。',
        en:'Britain was a founding member of NATO and a nuclear power, bound to the United States by a “special relationship”. The empire became the Commonwealth, and two bids to join the European Community were vetoed by de Gaulle before entry finally came in 1973.',
        fr:'Membre fondateur de l’OTAN et puissance nucléaire, le pays entretient une « relation spéciale » avec les États-Unis. L’empire devient le Commonwealth, et deux candidatures à la Communauté européenne se heurtent au veto de De Gaulle avant l’adhésion de 1973.' },
    }
  },
  {
    id:'modern', icon:'🎡', start:1979, end:2026, world:'contemporary',
    name:{ zh:'柴契爾以後的英國', en:'Britain since Thatcher', fr:'Le Royaume-Uni depuis Thatcher' },
    summary:{ zh:'柴契爾推動私有化、削弱工會並解除金融管制，倫敦金融城重新成為全球金融中心。布萊爾的「新工黨」把權力下放給蘇格蘭、威爾斯與北愛爾蘭，並促成北愛和平。2016 年公投決定脫離歐盟，2020 年正式脫歐，英國至今仍在重新尋找自己的位置。',
      en:'Thatcher privatised industries, curbed the unions and deregulated finance, and the City of London became a global financial centre again. Blair’s New Labour devolved power to Scotland, Wales and Northern Ireland and helped bring peace to Northern Ireland. A 2016 referendum chose to leave the European Union, Britain left in 2020, and it is still searching for its place.',
      fr:'Thatcher privatise, affaiblit les syndicats et dérégule la finance, et la City redevient une place financière mondiale. Le New Labour de Blair transfère des pouvoirs à l’Écosse, au pays de Galles et à l’Irlande du Nord et contribue à la paix en Irlande du Nord. Le référendum de 2016 choisit de quitter l’Union européenne, la sortie a lieu en 2020, et le pays cherche encore sa place.' },
    events:[
      { y:1982, zh:'福克蘭戰爭', en:'The Falklands War', fr:'La guerre des Malouines' },
      { y:1984, zh:'礦工大罷工開始', en:'The miners’ strike begins', fr:'Début de la grande grève des mineurs' },
      { y:1997, zh:'香港主權移交；蘇格蘭與威爾斯公投通過地方分權', en:'Hong Kong is handed over; Scotland and Wales vote for devolution', fr:'Rétrocession de Hong Kong ; l’Écosse et le pays de Galles votent la dévolution' },
      { y:1998, zh:'北愛爾蘭《耶穌受難日協議》', en:'The Good Friday Agreement in Northern Ireland', fr:'L’accord du Vendredi saint en Irlande du Nord' },
      { y:2003, zh:'英國參與入侵伊拉克', en:'Britain joins the invasion of Iraq', fr:'Le Royaume-Uni participe à l’invasion de l’Irak' },
      { y:2014, zh:'蘇格蘭獨立公投，55% 選擇留在英國', en:'Scottish independence referendum: 55% vote to stay', fr:'Référendum sur l’indépendance écossaise : 55 % pour rester' },
      { y:2016, by:'David Cameron', zh:'脫歐公投，52% 選擇離開歐盟', en:'Brexit referendum: 52% vote to leave the EU', fr:'Référendum sur le Brexit : 52 % pour quitter l’UE' },
      { y:2020, zh:'英國正式離開歐盟', en:'Britain leaves the European Union', fr:'Le Royaume-Uni quitte l’Union européenne' },
      { y:2022, zh:'伊莉莎白二世去世，查理三世即位', en:'Elizabeth II dies; Charles III becomes king', fr:'Mort d’Élisabeth II ; Charles III devient roi' },
    ],
    themes:{
      state:{ zh:'1999 年蘇格蘭議會、威爾斯議會與北愛爾蘭議會相繼成立，聯合王國從高度中央集權轉向分權。2014 年蘇格蘭獨立公投以 55% 對 45% 留下，但脫歐後獨立議題再度升溫。',
        en:'In 1999 the Scottish Parliament and the Welsh and Northern Irish assemblies opened, and the United Kingdom moved from tight centralisation to devolution. Scotland voted 55 to 45 per cent to stay in 2014, but Brexit revived the independence question.',
        fr:'En 1999 s’ouvrent le Parlement écossais et les assemblées galloise et nord-irlandaise : le Royaume-Uni passe d’une forte centralisation à la dévolution. L’Écosse vote à 55 % contre 45 % pour rester en 2014, mais le Brexit relance la question de l’indépendance.' },
      faith:{ zh:'英國已是歐洲最世俗化的社會之一，自認無宗教信仰的人數逐漸超過基督徒。1998 年的和平協議結束北愛動亂，宗教與身分的分界仍深刻影響當地政治。',
        en:'Britain became one of Europe’s most secular societies, with people of no religion coming to outnumber Christians. The 1998 peace agreement ended the Troubles, though religious and communal lines still shape politics in Northern Ireland.',
        fr:'Le pays devient l’une des sociétés les plus sécularisées d’Europe, les sans-religion finissant par dépasser les chrétiens. L’accord de paix de 1998 met fin aux Troubles, mais les lignes religieuses et communautaires structurent encore la politique en Irlande du Nord.' },
      society:{ zh:'製造業與煤礦大幅萎縮，服務業與金融業成為經濟主力，南北差距擴大。2008 年金融危機後政府推行緊縮政策；2020 年的新冠疫情對 NHS 造成巨大壓力。',
        en:'Manufacturing and coal shrank dramatically, services and finance came to dominate the economy, and the gap between north and south widened. After the 2008 financial crisis governments imposed austerity, and the Covid pandemic of 2020 put the NHS under immense strain.',
        fr:'L’industrie manufacturière et le charbon s’effondrent, les services et la finance dominent l’économie, et l’écart nord-sud se creuse. Après la crise financière de 2008, l’austérité s’impose, et la pandémie de Covid de 2020 met le NHS à rude épreuve.' },
      culture:{ zh:'從龐克、英倫搖滾到《哈利波特》，英國持續輸出流行文化。2012 年倫敦奧運開幕式以 NHS、工業革命與流行音樂講述國家故事，展現新的多元認同。',
        en:'From punk and Britpop to Harry Potter, Britain kept exporting popular culture. The opening ceremony of the 2012 London Olympics told the national story through the NHS, the Industrial Revolution and pop music, showcasing a new, diverse identity.',
        fr:'Du punk à la britpop et à Harry Potter, le pays continue d’exporter sa culture populaire. La cérémonie d’ouverture des Jeux de Londres en 2012 raconte l’histoire nationale par le NHS, la révolution industrielle et la pop, affichant une identité nouvelle et diverse.' },
      world:{ zh:'英國在 1997 年把香港交還中國，大英帝國的時代畫下句點。它追隨美國參與阿富汗與伊拉克戰爭；2020 年離開歐盟後，與歐洲的關係與在世界上的角色，仍在重新協商之中。',
        en:'The handover of Hong Kong in 1997 closed the age of empire. Britain followed the United States into Afghanistan and Iraq, and since leaving the EU in 2020 its relations with Europe and its role in the world are still being renegotiated.',
        fr:'La rétrocession de Hong Kong en 1997 clôt l’ère impériale. Le pays suit les États-Unis en Afghanistan et en Irak, et depuis sa sortie de l’UE en 2020, ses relations avec l’Europe et son rôle dans le monde restent à redéfinir.' },
    }
  },
  ]
},
{
  id:'germany', flag:'flag-de', color:'#d1a640',
  name:{ zh:'德國', en:'Germany', fr:'Allemagne' },
  intro:{ zh:'德國是歐洲中央的「遲到的民族國家」：在一千多年裡，它是數百個諸侯國組成的神聖羅馬帝國，直到 1871 年才統一，又在二十世紀發動兩次世界大戰、經歷分裂與再統一。這裡用十二個時期與五條主題線索，閱讀兩千多年的德國史。',
    en:'Germany is Europe’s “belated nation” at the heart of the continent: for over a thousand years it was a Holy Roman Empire of hundreds of principalities, became a unified state only in 1871, then started two world wars and lived through division and reunification. Twelve periods and five thematic threads take you through more than two thousand years of German history.',
    fr:'L’Allemagne est la « nation tardive » au cœur de l’Europe : pendant plus de mille ans, elle forme un Saint-Empire de centaines de principautés, ne devient un État unifié qu’en 1871, puis déclenche deux guerres mondiales et connaît division et réunification. Douze périodes et cinq fils thématiques parcourent plus de deux mille ans d’histoire allemande.' },
  threads:{
    state:{ intro:{ zh:'從部族與諸侯林立的帝國，到遲來的統一與今天的聯邦制：權力在德國始終是分散的。',
      en:'From tribes and an empire of countless princes to belated unification and today’s federal state: power in Germany has always been spread out.',
      fr:'Des tribus et d’un empire aux princes innombrables à l’unification tardive et à l’État fédéral d’aujourd’hui : en Allemagne, le pouvoir a toujours été dispersé.' } },
    faith:{ name:{ zh:'宗教與教派', en:'Religion & Confession', fr:'Religion et confessions' },
      intro:{ zh:'宗教改革的發源地：新教與天主教的分裂，塑造了德國的地圖、政治與教育。',
        en:'The birthplace of the Reformation: the split between Protestant and Catholic shaped Germany’s map, its politics and its schools.',
        fr:'Berceau de la Réforme : la division entre protestants et catholiques a façonné la carte, la politique et l’enseignement de l’Allemagne.' } },
    society:{ intro:{ zh:'從漢薩商路與行會城市，到工業強國與社會市場經濟；世界第一套社會保險在這裡誕生。',
      en:'From Hanseatic trade routes and guild towns to an industrial powerhouse and the social market economy; the world’s first social insurance was born here.',
      fr:'Des routes de la Hanse et des villes de corporations à la puissance industrielle et à l’économie sociale de marché ; la première assurance sociale du monde est née ici.' } },
    culture:{ intro:{ zh:'「詩人與思想家之國」：從路德的德語聖經、巴哈與康德，到歌德、貝多芬與包浩斯。',
      en:'The “land of poets and thinkers”: from Luther’s German Bible, Bach and Kant to Goethe, Beethoven and the Bauhaus.',
      fr:'Le « pays des poètes et des penseurs » : de la Bible allemande de Luther, de Bach et de Kant à Goethe, Beethoven et le Bauhaus.' } },
    world:{ name:{ zh:'德國與世界', en:'Germany & the World', fr:'L’Allemagne et le monde' },
      intro:{ zh:'位在歐洲正中央：從神聖羅馬帝國、兩次世界大戰的發動者，到面對過去、推動歐洲整合的核心國家。',
        en:'At the very centre of Europe: from the Holy Roman Empire and the instigator of two world wars to a country that confronted its past and became the core of European integration.',
        fr:'Au centre même de l’Europe : du Saint-Empire et de l’instigateur de deux guerres mondiales à un pays qui affronte son passé et devient le cœur de la construction européenne.' } },
  },
  periods:[
  {
    id:'germania', icon:'🌲', start:-113, end:481, world:'roman',
    name:{ zh:'日耳曼部族與羅馬', en:'Germanic Tribes and Rome', fr:'Les peuples germaniques et Rome' },
    summary:{ zh:'萊茵河與多瑙河以北，住著許多彼此競爭的日耳曼部族。羅馬想把邊界推到易北河，卻在西元 9 年的條頓堡森林慘敗，此後以萊茵河、多瑙河與「界牆」為界。萊茵河以西的科隆、特里爾、美因茲成為羅馬城市；五世紀時，日耳曼部族大舉越過邊界，西羅馬帝國隨之瓦解。',
      en:'North of the Rhine and the Danube lived many rival Germanic tribes. Rome tried to push its border to the Elbe but suffered disaster in the Teutoburg Forest in AD 9, and thereafter held the line of the Rhine, the Danube and the limes. West of the Rhine, Cologne, Trier and Mainz became Roman cities; in the fifth century Germanic peoples poured across the frontier and the Western Empire fell apart.',
      fr:'Au nord du Rhin et du Danube vivent de nombreux peuples germaniques rivaux. Rome tente de repousser sa frontière jusqu’à l’Elbe mais subit un désastre dans la forêt de Teutobourg en 9 apr. J.-C. ; elle tient ensuite la ligne du Rhin, du Danube et du limes. À l’ouest du Rhin, Cologne, Trèves et Mayence deviennent des villes romaines ; au Vᵉ siècle, les peuples germaniques franchissent la frontière et l’Empire d’Occident s’effondre.' },
    events:[
      { y:-113, zh:'辛布里人與條頓人擊敗羅馬軍隊', en:'The Cimbri and Teutones defeat a Roman army', fr:'Les Cimbres et les Teutons battent une armée romaine' },
      { y:9,    zh:'條頓堡森林之戰，三個羅馬軍團全軍覆沒', en:'Battle of the Teutoburg Forest: three Roman legions are wiped out', fr:'Bataille de Teutobourg : trois légions romaines anéanties' },
      { y:98,   zh:'塔西佗寫成《日耳曼尼亞志》', en:'Tacitus writes the Germania', fr:'Tacite écrit la Germanie' },
      { y:167,  c:true, zh:'馬科曼尼戰爭爆發', en:'The Marcomannic Wars break out', fr:'Début des guerres marcomanes' },
      { y:260,  c:true, zh:'羅馬放棄萊茵河與多瑙河之間的界牆', en:'Rome abandons the limes between the Rhine and the Danube', fr:'Rome abandonne le limes entre Rhin et Danube' },
      { y:406,  zh:'汪達爾等部族渡過萊茵河', en:'Vandals and other peoples cross the Rhine', fr:'Vandales et autres peuples franchissent le Rhin' },
      { y:476,  zh:'奧多亞塞廢黜西羅馬末代皇帝', en:'Odoacer deposes the last Western Roman emperor', fr:'Odoacre dépose le dernier empereur d’Occident' },
    ],
    themes:{
      state:{ zh:'日耳曼部族沒有國家，由酋長與戰士的集會決定大事，打仗時才推選軍事領袖。羅馬在萊茵河西岸設立上、下日耳曼尼亞兩個行省，以軍團營地為中心治理。',
        en:'The Germanic tribes had no state: chiefs and assemblies of warriors decided great matters, and war leaders were chosen only for campaigns. Rome set up the provinces of Upper and Lower Germania west of the Rhine, governed from legionary bases.',
        fr:'Les peuples germaniques n’ont pas d’État : chefs et assemblées de guerriers décident des affaires importantes, et l’on n’élit un chef de guerre qu’en campagne. Rome crée à l’ouest du Rhin les provinces de Germanie supérieure et inférieure, administrées depuis les camps légionnaires.' },
      faith:{ zh:'日耳曼人崇拜沃坦（奧丁）、多納爾（索爾）等神祇，在聖林中獻祭。萊茵河畔的羅馬城市則有神廟，四世紀起特里爾與科隆已有主教。',
        en:'The Germanic peoples worshipped gods such as Wodan (Odin) and Donar (Thor) and made offerings in sacred groves. The Roman cities on the Rhine had temples, and by the fourth century Trier and Cologne had bishops.',
        fr:'Les Germains vénèrent des dieux comme Wodan (Odin) et Donar (Thor) et font des offrandes dans des bois sacrés. Les villes romaines du Rhin ont leurs temples, et dès le IVᵉ siècle Trèves et Cologne ont des évêques.' },
      society:{ zh:'部族以農耕與畜牧為生，住在散落的村落。羅馬的萊茵河城市則有道路、浴場與葡萄園，摩澤爾河谷的葡萄酒傳統就是從羅馬時代開始的。',
        en:'The tribes lived by farming and herding in scattered villages. The Roman Rhineland had roads, baths and vineyards, and the wine tradition of the Moselle valley goes back to Roman times.',
        fr:'Les tribus vivent de l’agriculture et de l’élevage dans des villages dispersés. La Rhénanie romaine a ses routes, ses thermes et ses vignobles, et la tradition viticole de la Moselle remonte à l’époque romaine.' },
      culture:{ zh:'日耳曼人沒有留下太多文字，最主要的描述來自羅馬人塔西佗。四世紀，主教烏菲拉把聖經譯成哥德語，是最早的日耳曼語文獻。',
        en:'The Germanic peoples left little writing, and our main account comes from the Roman Tacitus. In the fourth century Bishop Ulfilas translated the Bible into Gothic, the earliest substantial text in a Germanic language.',
        fr:'Les Germains laissent peu d’écrits, et notre principale source est le Romain Tacite. Au IVᵉ siècle, l’évêque Wulfila traduit la Bible en gotique, le plus ancien texte important dans une langue germanique.' },
      world:{ zh:'日耳曼人與羅馬之間有戰爭，也有貿易與僱傭：許多日耳曼人在羅馬軍中服役。民族大遷徙時，哥德人、汪達爾人、法蘭克人等越過邊界，在帝國的廢墟上建立新的王國。',
        en:'Germans and Romans fought, traded and hired each other: many Germans served in the Roman army. In the great migrations Goths, Vandals, Franks and others crossed the frontier and built new kingdoms on the ruins of the empire.',
        fr:'Germains et Romains se combattent, commercent et se louent mutuellement : beaucoup de Germains servent dans l’armée romaine. Lors des grandes migrations, Goths, Vandales, Francs et d’autres franchissent la frontière et fondent de nouveaux royaumes sur les ruines de l’Empire.' },
    }
  },
  {
    id:'franks', icon:'👑', start:481, end:962, world:'medieval',
    name:{ zh:'法蘭克王國與東法蘭克', en:'The Franks and East Francia', fr:'Les Francs et la Francie orientale' },
    summary:{ zh:'法蘭克人把今日德國西部與南部納入王國，查理曼又征服薩克森，第一次把大部分德語地區統一在同一位君主之下。843 年帝國三分，東法蘭克王國成為德國的前身；加洛林家族斷絕後，諸侯推選薩克森公爵亨利為王。',
      en:'The Franks drew what is now western and southern Germany into their kingdom, and Charlemagne conquered Saxony, uniting most German-speaking lands under one ruler for the first time. In 843 the empire was divided in three, and East Francia became the forerunner of Germany; when the Carolingian line died out, the dukes elected Henry of Saxony king.',
      fr:'Les Francs intègrent l’ouest et le sud de l’Allemagne actuelle à leur royaume, et Charlemagne conquiert la Saxe, réunissant pour la première fois la plupart des pays de langue allemande sous un même souverain. En 843, l’empire est partagé en trois, et la Francie orientale devient l’ancêtre de l’Allemagne ; à l’extinction des Carolingiens, les ducs élisent roi Henri de Saxe.' },
    events:[
      { y:496, c:true, zh:'克洛維擊敗阿勒曼尼人', en:'Clovis defeats the Alamanni', fr:'Clovis bat les Alamans' },
      { y:723, zh:'聖卜尼法斯砍倒多納爾神的聖橡樹', en:'Saint Boniface fells the sacred oak of Donar', fr:'Saint Boniface abat le chêne sacré de Donar' },
      { y:772, zh:'查理曼開始征服薩克森', en:'Charlemagne begins the conquest of Saxony', fr:'Charlemagne commence la conquête de la Saxe' },
      { y:800, zh:'查理曼在羅馬加冕為皇帝', en:'Charlemagne is crowned emperor in Rome', fr:'Charlemagne est couronné empereur à Rome' },
      { y:843, zh:'《凡爾登條約》，東法蘭克王國成立', en:'Treaty of Verdun: East Francia is created', fr:'Traité de Verdun : naissance de la Francie orientale' },
      { y:911, zh:'加洛林家族斷絕，諸侯推選康拉德一世', en:'The Carolingian line ends; the dukes elect Conrad I', fr:'Fin des Carolingiens ; les ducs élisent Conrad Iᵉʳ' },
      { y:919, zh:'薩克森公爵亨利一世當選國王', en:'Henry I, Duke of Saxony, is elected king', fr:'Henri Iᵉʳ, duc de Saxe, est élu roi' },
      { y:955, zh:'萊希菲爾德之戰，擊退馬札爾人', en:'Battle of Lechfeld: the Magyars are defeated', fr:'Bataille du Lechfeld : défaite des Magyars' },
    ],
    themes:{
      state:{ zh:'查理曼派伯爵管理各地，並派「欽差」巡察。帝國分裂後，東法蘭克的權力落在薩克森、法蘭克尼亞、巴伐利亞、施瓦本等大公國手中，國王由諸侯推選，這個傳統一直延續到帝國結束。',
        en:'Charlemagne governed through counts and sent royal envoys to inspect them. After the empire split, power in East Francia lay with the great duchies of Saxony, Franconia, Bavaria and Swabia, and the king was elected by the princes, a tradition that lasted until the end of the empire.',
        fr:'Charlemagne gouverne par des comtes et envoie des missi dominici les contrôler. Après le partage, le pouvoir en Francie orientale revient aux grands duchés de Saxe, de Franconie, de Bavière et de Souabe, et le roi est élu par les princes, tradition qui durera jusqu’à la fin de l’Empire.' },
      faith:{ zh:'英格蘭傳教士卜尼法斯被稱為「德國人的使徒」，他在黑森與圖林根傳教、建立主教區與富爾達修道院。查理曼則以戰爭強迫薩克森人受洗。',
        en:'The English missionary Boniface, called the “Apostle of the Germans”, preached in Hesse and Thuringia and founded bishoprics and the abbey of Fulda. Charlemagne forced baptism on the Saxons by war.',
        fr:'Le missionnaire anglais Boniface, « l’apôtre des Germains », prêche en Hesse et en Thuringe et fonde des évêchés et l’abbaye de Fulda. Charlemagne impose le baptême aux Saxons par la guerre.' },
      society:{ zh:'莊園經濟成為主流，大多數農民依附於修道院與貴族的土地。修道院同時是農業、手工業與學問的中心。',
        en:'The manorial economy prevailed, and most peasants depended on the lands of monasteries and nobles. Monasteries were also centres of farming, crafts and learning.',
        fr:'L’économie domaniale domine, et la plupart des paysans dépendent des terres des monastères et des nobles. Les monastères sont aussi des centres d’agriculture, d’artisanat et de savoir.' },
      culture:{ zh:'查理曼在亞琛的宮廷推動「加洛林文藝復興」，整理拉丁文獻並發展出清晰的小寫字體。842 年的《斯特拉斯堡誓言》同時用古高地德語與古法語寫成，是兩種語言分道揚鑣的見證。',
        en:'Charlemagne’s court at Aachen led the “Carolingian Renaissance”, copying Latin texts in a new clear minuscule script. The Oaths of Strasbourg of 842 were written in both Old High German and Old French, a witness to the two languages going their separate ways.',
        fr:'La cour de Charlemagne à Aix-la-Chapelle porte la « renaissance carolingienne », recopiant les textes latins dans une nouvelle minuscule lisible. Les serments de Strasbourg de 842, rédigés en vieux haut allemand et en ancien français, témoignent de la séparation des deux langues.' },
      world:{ zh:'東法蘭克夾在西邊的西法蘭克與東邊的斯拉夫人、馬札爾人之間。955 年奧托一世在萊希菲爾德擊敗馬札爾人，結束了他們數十年的劫掠。',
        en:'East Francia lay between West Francia and the Slavs and Magyars to the east. In 955 Otto I defeated the Magyars at the Lechfeld, ending decades of their raids.',
        fr:'La Francie orientale se trouve entre la Francie occidentale et, à l’est, les Slaves et les Magyars. En 955, Otton Iᵉʳ bat les Magyars au Lechfeld, mettant fin à des décennies de raids.' },
    }
  },
  {
    id:'hre', icon:'🦅', start:962, end:1250, world:'medieval',
    name:{ zh:'神聖羅馬帝國的盛期', en:'The High Medieval Empire', fr:'Le Saint-Empire à son apogée' },
    summary:{ zh:'奧托一世在 962 年加冕為皇帝，德意志國王從此也是羅馬皇帝。奧托、薩利安與霍亨斯陶芬三個王朝試圖統治德意志與義大利，卻與教宗爆發「敘任權之爭」。腓特烈一世「紅鬍子」與腓特烈二世是最有名的皇帝，但霍亨斯陶芬家族滅亡後，帝國的中央權力從此衰落。',
      en:'Otto I was crowned emperor in 962, and from then on the German king was also the Roman emperor. The Ottonian, Salian and Staufer dynasties tried to rule both Germany and Italy and clashed with the papacy in the Investiture Controversy. Frederick I “Barbarossa” and Frederick II were the most famous emperors, but after the Staufer fell the empire’s central power never recovered.',
      fr:'Otton Iᵉʳ est couronné empereur en 962, et désormais le roi allemand est aussi empereur romain. Les dynasties ottonienne, salienne et Hohenstaufen tentent de régner sur l’Allemagne et l’Italie et s’opposent à la papauté dans la querelle des Investitures. Frédéric Barberousse et Frédéric II sont les empereurs les plus célèbres, mais après la chute des Hohenstaufen le pouvoir central ne se relève pas.' },
    events:[
      { y:962,  zh:'奧托一世在羅馬加冕為皇帝', en:'Otto I is crowned emperor in Rome', fr:'Otton Iᵉʳ est couronné empereur à Rome' },
      { y:1077, zh:'卡諾莎之行：亨利四世向教宗悔罪', en:'The walk to Canossa: Henry IV does penance before the Pope', fr:'Canossa : Henri IV fait pénitence devant le pape' },
      { y:1122, zh:'《沃姆斯協定》結束敘任權之爭', en:'The Concordat of Worms ends the Investiture Controversy', fr:'Le concordat de Worms met fin à la querelle des Investitures' },
      { y:1152, zh:'腓特烈一世「紅鬍子」當選國王', en:'Frederick I “Barbarossa” is elected king', fr:'Frédéric Barberousse est élu roi' },
      { y:1190, zh:'紅鬍子在十字軍途中溺死', en:'Barbarossa drowns on crusade', fr:'Barberousse se noie pendant la croisade' },
      { y:1226, zh:'腓特烈二世授權條頓騎士團征服普魯士', en:'Frederick II authorises the Teutonic Order to conquer Prussia', fr:'Frédéric II autorise l’ordre Teutonique à conquérir la Prusse' },
      { y:1250, zh:'腓特烈二世去世，帝國進入「大空位時期」', en:'Frederick II dies and the empire drifts into the Interregnum', fr:'Mort de Frédéric II : l’Empire entre dans le Grand Interrègne' },
    ],
    themes:{
      state:{ zh:'皇帝依靠主教與修道院長治理，因此需要掌握他們的任命權，這正是與教宗衝突的根源。為了打義大利戰爭，皇帝不斷把權利讓給諸侯，德意志越來越像諸侯的聯合體。',
        en:'Emperors ruled through bishops and abbots and so needed to control their appointment, the root of the clash with the papacy. To fund wars in Italy they kept granting rights to the princes, and Germany grew ever more a federation of principalities.',
        fr:'Les empereurs gouvernent par les évêques et les abbés et doivent donc contrôler leur nomination, source du conflit avec la papauté. Pour financer les guerres d’Italie, ils cèdent sans cesse des droits aux princes, et l’Allemagne devient de plus en plus une fédération de principautés.' },
      faith:{ zh:'敘任權之爭的高潮是 1077 年，亨利四世冒雪赤足在卡諾莎城堡外等了三天，求教宗撤銷絕罰。賓根的希德嘉是修道院長、作曲家與自然學者，是這個時代最傑出的女性之一。',
        en:'The Investiture Controversy peaked in 1077, when Henry IV stood barefoot in the snow outside Canossa for three days begging the Pope to lift his excommunication. Hildegard of Bingen, abbess, composer and naturalist, was one of the outstanding women of the age.',
        fr:'La querelle des Investitures culmine en 1077, quand Henri IV attend pieds nus dans la neige devant Canossa pendant trois jours pour obtenir la levée de son excommunication. Hildegarde de Bingen, abbesse, compositrice et naturaliste, est l’une des femmes les plus remarquables de son temps.' },
      society:{ zh:'人口成長帶動「東向殖民」，德意志農民與市民遷往易北河以東的斯拉夫地區。城市興起並取得特許權，俗話說「城市的空氣使人自由」：農奴在城裡住滿一年零一天就能獲得自由。',
        en:'Population growth drove the “eastward settlement” of German peasants and townsfolk into Slavic lands beyond the Elbe. Towns rose and won charters, and the saying went that “town air makes you free”: a serf who lived in a town for a year and a day gained his freedom.',
        fr:'La croissance démographique pousse paysans et bourgeois allemands à s’installer en terres slaves au-delà de l’Elbe. Les villes se multiplient et obtiennent des chartes, et l’on dit que « l’air de la ville rend libre » : un serf qui y vit un an et un jour devient libre.' },
      culture:{ zh:'施派爾、沃姆斯、美因茲的羅馬式大教堂拔地而起。中古高地德語的史詩《尼伯龍根之歌》與吟遊詩人瓦爾特的抒情詩，是德語文學最早的高峰。',
        en:'The Romanesque cathedrals of Speyer, Worms and Mainz rose. The Middle High German epic, the Nibelungenlied, and the love songs of Walther von der Vogelweide were the first peaks of German literature.',
        fr:'Les cathédrales romanes de Spire, Worms et Mayence s’élèvent. L’épopée en moyen haut allemand du Nibelungenlied et les chansons de Walther von der Vogelweide sont les premiers sommets de la littérature allemande.' },
      world:{ zh:'皇帝的目光始終在義大利，與教宗和義大利城市反覆交戰。紅鬍子與腓特烈二世都參加十字軍，條頓騎士團則在波羅的海沿岸建立自己的國家。',
        en:'The emperors’ eyes were always on Italy, where they fought the popes and the Italian cities again and again. Barbarossa and Frederick II both went on crusade, and the Teutonic Order carved out its own state on the Baltic coast.',
        fr:'Le regard des empereurs reste tourné vers l’Italie, où ils combattent sans cesse papes et cités italiennes. Barberousse et Frédéric II partent en croisade, et l’ordre Teutonique se taille un État sur la côte balte.' },
    }
  },
  {
    id:'latemedieval', icon:'⚓', start:1250, end:1517, world:'renaissance_exploration',
    name:{ zh:'中世紀晚期：諸侯、漢薩與印刷術', en:'The Late Middle Ages: Princes, Hansa and Print', fr:'La fin du Moyen Âge : princes, Hanse et imprimerie' },
    summary:{ zh:'大空位時期之後，哈布斯堡、盧森堡與維特爾斯巴赫家族輪流擔任國王。1356 年的《金璽詔書》確立由七位選帝侯選出國王。北方的漢薩同盟控制波羅的海貿易，南方的奧格斯堡、紐倫堡富甲一方；十五世紀中葉，古騰堡在美因茲發明活字印刷，改變了整個歐洲。',
      en:'After the Interregnum, the Habsburg, Luxembourg and Wittelsbach families took turns on the throne. The Golden Bull of 1356 fixed that seven prince-electors would choose the king. In the north the Hanseatic League ruled Baltic trade, while Augsburg and Nuremberg in the south grew rich; in the mid-fifteenth century Gutenberg’s movable type, in Mainz, transformed all of Europe.',
      fr:'Après l’Interrègne, les Habsbourg, les Luxembourg et les Wittelsbach se succèdent sur le trône. La Bulle d’or de 1356 confie l’élection du roi à sept princes-électeurs. Au nord, la Hanse domine le commerce de la Baltique, tandis qu’Augsbourg et Nuremberg s’enrichissent au sud ; au milieu du XVᵉ siècle, l’imprimerie à caractères mobiles de Gutenberg, à Mayence, transforme toute l’Europe.' },
    events:[
      { y:1273, zh:'哈布斯堡的魯道夫當選國王，大空位時期結束', en:'Rudolf of Habsburg is elected king, ending the Interregnum', fr:'Rodolphe de Habsbourg est élu roi : fin de l’Interrègne' },
      { y:1348, zh:'黑死病來襲；查理四世在布拉格創辦帝國第一所大學', en:'The Black Death strikes; Charles IV founds the empire’s first university in Prague', fr:'La peste noire frappe ; Charles IV fonde à Prague la première université de l’Empire' },
      { y:1356, zh:'《金璽詔書》；漢薩城市召開第一次全體大會', en:'The Golden Bull; the first general diet of the Hanseatic towns', fr:'La Bulle d’or ; première diète générale des villes hanséatiques' },
      { y:1415, zh:'康士坦茲公會議燒死揚·胡斯', en:'The Council of Constance burns Jan Hus', fr:'Le concile de Constance fait brûler Jan Hus' },
      { y:1455, c:true, zh:'古騰堡聖經印成', en:'The Gutenberg Bible is printed', fr:'Impression de la Bible de Gutenberg' },
      { y:1495, zh:'沃姆斯帝國議會宣布「永久和平」，禁止私戰', en:'The Diet of Worms proclaims the “Perpetual Peace”, outlawing private feuds', fr:'La diète de Worms proclame la « paix perpétuelle » et interdit les guerres privées' },
    ],
    themes:{
      state:{ zh:'《金璽詔書》讓美因茲、科隆、特里爾三位大主教與四位世俗諸侯成為選帝侯，國王的權力依賴他們的支持。帝國議會逐漸成形，但帝國仍是數百個諸侯國、主教領地與自由城市的拼圖。',
        en:'The Golden Bull made the archbishops of Mainz, Cologne and Trier and four lay princes the electors, and the king depended on their support. The Imperial Diet took shape, but the empire remained a patchwork of hundreds of principalities, prince-bishoprics and free cities.',
        fr:'La Bulle d’or fait des archevêques de Mayence, Cologne et Trèves et de quatre princes laïcs les électeurs, dont dépend le roi. La diète d’Empire prend forme, mais l’Empire reste une mosaïque de centaines de principautés, de principautés ecclésiastiques et de villes libres.' },
      faith:{ zh:'教會內部要求改革的聲音越來越大。波希米亞的胡斯批評教會腐敗，被康士坦茲公會議以異端罪燒死，引發長年的胡斯戰爭。贖罪券的買賣則讓不少人不滿。',
        en:'Calls for reform within the Church grew louder. In Bohemia Jan Hus attacked clerical corruption and was burned as a heretic by the Council of Constance, sparking years of Hussite wars. The sale of indulgences angered many.',
        fr:'Les appels à la réforme de l’Église se font plus pressants. En Bohême, Jan Hus dénonce la corruption du clergé et est brûlé comme hérétique par le concile de Constance, ce qui déclenche des années de guerres hussites. Le commerce des indulgences en irrite beaucoup.' },
      society:{ zh:'漢薩同盟以呂北克為首，串連近兩百個城市，壟斷北海與波羅的海的鯡魚、木材、毛皮與穀物貿易。南德的富格爾家族成為全歐洲最富有的銀行家，借錢給皇帝與教宗。',
        en:'The Hanseatic League, led by Lübeck, linked up to some two hundred towns and dominated the North Sea and Baltic trade in herring, timber, furs and grain. In the south the Fugger family became Europe’s richest bankers, lending to emperors and popes.',
        fr:'La Hanse, menée par Lübeck, relie jusqu’à quelque deux cents villes et domine le commerce du hareng, du bois, des fourrures et du blé en mer du Nord et en Baltique. Au sud, les Fugger deviennent les banquiers les plus riches d’Europe et prêtent aux empereurs et aux papes.' },
      culture:{ zh:'古騰堡的活字印刷讓書籍變得便宜，幾十年內歐洲印出數百萬冊書。紐倫堡的杜勒把義大利文藝復興帶進德意志，他的木刻與銅版畫因印刷而傳遍歐洲。',
        en:'Gutenberg’s movable type made books cheap, and within decades millions of volumes had been printed across Europe. Albrecht Dürer of Nuremberg brought the Italian Renaissance north, and printing spread his woodcuts and engravings across Europe.',
        fr:'Les caractères mobiles de Gutenberg rendent les livres bon marché, et en quelques décennies des millions de volumes sont imprimés en Europe. Albrecht Dürer, de Nuremberg, apporte la Renaissance italienne au nord, et l’imprimerie diffuse ses gravures dans toute l’Europe.' },
      world:{ zh:'哈布斯堡家族透過聯姻迅速擴張，馬克西米連一世娶勃艮第的瑪麗，孫子查理五世更繼承了西班牙與其美洲殖民地。俗話說：「讓別人去打仗吧，幸運的奧地利，你去結婚。」',
        en:'The Habsburgs expanded through marriage: Maximilian I wed Mary of Burgundy, and his grandson Charles V inherited Spain and its American colonies too. As the saying went: “Let others wage war; you, happy Austria, marry.”',
        fr:'Les Habsbourg s’étendent par les mariages : Maximilien Iᵉʳ épouse Marie de Bourgogne, et son petit-fils Charles Quint hérite aussi de l’Espagne et de ses colonies d’Amérique. Comme le dit l’adage : « Que les autres fassent la guerre ; toi, heureuse Autriche, marie-toi. »' },
    }
  },
  {
    id:'reformation', icon:'📜', start:1517, end:1648, world:'reformation',
    name:{ zh:'宗教改革與三十年戰爭', en:'Reformation and the Thirty Years’ War', fr:'La Réforme et la guerre de Trente Ans' },
    summary:{ zh:'1517 年路德在威登堡發表《九十五條論綱》，宗教改革迅速擴散，德意志分裂成新教與天主教兩個陣營。1555 年的《奧格斯堡和約》讓各諸侯自行決定領地的宗教，暫時維持和平。1618 年衝突再起，三十年戰爭讓德意志部分地區失去三分之一以上的人口，1648 年的《西發里亞和約》重畫了歐洲秩序。',
      en:'In 1517 Luther published his Ninety-five Theses in Wittenberg; the Reformation spread fast and Germany split into Protestant and Catholic camps. The Peace of Augsburg in 1555 let each prince choose his territory’s faith and kept a fragile peace. Conflict broke out again in 1618, and the Thirty Years’ War cost parts of Germany more than a third of their people before the Peace of Westphalia in 1648 redrew the European order.',
      fr:'En 1517, Luther publie ses quatre-vingt-quinze thèses à Wittenberg ; la Réforme se répand vite et l’Allemagne se divise en camps protestant et catholique. La paix d’Augsbourg de 1555 laisse chaque prince choisir la religion de son territoire et maintient une paix fragile. Le conflit reprend en 1618, et la guerre de Trente Ans coûte à certaines régions plus d’un tiers de leur population avant que les traités de Westphalie de 1648 ne redessinent l’ordre européen.' },
    events:[
      { y:1517, zh:'路德發表《九十五條論綱》', en:'Luther publishes the Ninety-five Theses', fr:'Luther publie les quatre-vingt-quinze thèses' },
      { y:1521, zh:'沃姆斯帝國議會：路德拒絕撤回主張，遭帝國放逐', en:'Diet of Worms: Luther refuses to recant and is outlawed', fr:'Diète de Worms : Luther refuse de se rétracter et est mis au ban de l’Empire' },
      { y:1525, zh:'德意志農民戰爭', en:'The German Peasants’ War', fr:'La guerre des Paysans' },
      { y:1555, zh:'《奧格斯堡和約》：「誰的領地，信誰的宗教」', en:'Peace of Augsburg: “whose realm, his religion”', fr:'Paix d’Augsbourg : « tel prince, telle religion »' },
      { y:1618, zh:'布拉格擲窗事件，三十年戰爭爆發', en:'The Defenestration of Prague starts the Thirty Years’ War', fr:'La défenestration de Prague déclenche la guerre de Trente Ans' },
      { y:1631, zh:'馬德堡遭屠城', en:'The sack of Magdeburg', fr:'Le sac de Magdebourg' },
      { y:1632, by:'Gustavus Adolphus', zh:'呂岑會戰，瑞典國王古斯塔夫二世陣亡', en:'Battle of Lützen: King Gustavus Adolphus of Sweden is killed', fr:'Bataille de Lützen : le roi Gustave-Adolphe de Suède est tué' },
      { y:1648, zh:'《西發里亞和約》', en:'The Peace of Westphalia', fr:'Les traités de Westphalie' },
    ],
    themes:{
      state:{ zh:'宗教改革讓諸侯掌握了領地內的教會與財產，權力更大。《西發里亞和約》承認諸侯幾乎完全的主權，可以自行結盟，皇帝的權力只剩名義。',
        en:'The Reformation gave princes control over the churches and church property in their lands and made them stronger still. The Peace of Westphalia recognised their near-complete sovereignty, including the right to make alliances, leaving the emperor’s power largely nominal.',
        fr:'La Réforme donne aux princes le contrôle des églises et de leurs biens et renforce encore leur pouvoir. Les traités de Westphalie leur reconnaissent une souveraineté presque complète, y compris le droit de conclure des alliances, et le pouvoir de l’empereur devient largement nominal.' },
      faith:{ zh:'路德主張「因信稱義」與「唯獨聖經」，否定教宗的權威。改革很快分裂成路德宗、喀爾文宗等派別；天主教則以特利騰大公會議與耶穌會反擊。德意志從此成為新舊教並存的國家，北方多新教，南方與萊茵地區多天主教。',
        en:'Luther taught justification by faith alone and scripture alone, rejecting the Pope’s authority. The Reformation soon split into Lutheran, Calvinist and other branches, while Catholicism struck back with the Council of Trent and the Jesuits. Germany became a land of two confessions, mostly Protestant in the north and Catholic in the south and the Rhineland.',
        fr:'Luther enseigne le salut par la foi seule et l’Écriture seule, et rejette l’autorité du pape. La Réforme se divise vite en luthériens, calvinistes et autres, tandis que le catholicisme riposte avec le concile de Trente et les jésuites. L’Allemagne devient un pays bi-confessionnel, plutôt protestant au nord, catholique au sud et en Rhénanie.' },
      society:{ zh:'1525 年農民引用聖經要求廢除農奴制，起義被諸侯血腥鎮壓，約七萬人喪生，路德也站在諸侯那邊。三十年戰爭帶來屠殺、飢荒與瘟疫，德意志的人口和經濟花了將近一百年才恢復。',
        en:'In 1525 peasants cited the Bible to demand the end of serfdom; the princes crushed the revolt in blood, killing some 70,000, and Luther sided with them. The Thirty Years’ War brought massacre, famine and plague, and Germany’s population and economy took nearly a century to recover.',
        fr:'En 1525, des paysans invoquent la Bible pour exiger la fin du servage ; les princes écrasent la révolte dans le sang, faisant quelque 70 000 morts, et Luther se range de leur côté. La guerre de Trente Ans apporte massacres, famines et épidémies, et il faut près d’un siècle à l’Allemagne pour s’en remettre.' },
      culture:{ zh:'路德把聖經譯成德文，又藉印刷術廣為流傳，為現代標準德語打下基礎。他也寫了許多讚美詩，讓會眾用母語唱歌，影響了日後巴哈的音樂。',
        en:'Luther translated the Bible into German and printing spread it everywhere, laying the foundation of modern standard German. He also wrote hymns for congregations to sing in their own tongue, a tradition that would shape Bach’s music.',
        fr:'Luther traduit la Bible en allemand, et l’imprimerie la diffuse partout, jetant les bases de l’allemand standard moderne. Il écrit aussi des cantiques que les fidèles chantent dans leur langue, tradition qui marquera la musique de Bach.' },
      world:{ zh:'皇帝查理五世同時統治西班牙、尼德蘭與美洲，卻無法阻止宗教改革。三十年戰爭從宗教衝突演變成歐洲列強的戰場，瑞典與法國的軍隊在德意志土地上作戰，和約讓瑞士與荷蘭正式脫離帝國。',
        en:'Emperor Charles V ruled Spain, the Netherlands and the Americas but could not stop the Reformation. The Thirty Years’ War grew from a religious conflict into a battle of the European powers, with Swedish and French armies fighting on German soil, and the peace formally released Switzerland and the Dutch Republic from the empire.',
        fr:'L’empereur Charles Quint règne sur l’Espagne, les Pays-Bas et les Amériques mais ne peut arrêter la Réforme. La guerre de Trente Ans passe du conflit religieux à l’affrontement des puissances européennes, les armées suédoises et françaises combattant sur le sol allemand, et la paix détache formellement la Suisse et les Provinces-Unies de l’Empire.' },
    }
  },
  {
    id:'prussia', icon:'🎼', start:1648, end:1806, world:'enlightenment_revolution',
    name:{ zh:'普魯士崛起與啟蒙時代', en:'The Rise of Prussia and the Enlightenment', fr:'L’essor de la Prusse et les Lumières' },
    summary:{ zh:'戰後的帝國由數百個邦國組成，奧地利的哈布斯堡與新興的普魯士成為兩強。普魯士以軍隊與效率著稱，腓特烈大帝奪下西里西亞，讓普魯士躋身歐洲強權。這也是巴哈、康德、歌德的時代。1806 年，在拿破崙的壓力下，存在了近千年的神聖羅馬帝國宣告解散。',
      en:'After the war the empire was a patchwork of hundreds of states, with Habsburg Austria and the rising kingdom of Prussia as the two great powers. Prussia, known for its army and its efficiency, won Silesia under Frederick the Great and joined the ranks of the European powers. It was also the age of Bach, Kant and Goethe. In 1806, under pressure from Napoleon, the Holy Roman Empire was dissolved after almost a thousand years.',
      fr:'Après la guerre, l’Empire est une mosaïque de centaines d’États, dominée par l’Autriche des Habsbourg et la Prusse montante. La Prusse, réputée pour son armée et son efficacité, conquiert la Silésie sous Frédéric le Grand et rejoint les grandes puissances. C’est aussi l’époque de Bach, de Kant et de Goethe. En 1806, sous la pression de Napoléon, le Saint-Empire est dissous après près de mille ans.' },
    events:[
      { y:1685, zh:'《波茨坦敕令》：普魯士接納法國胡格諾難民', en:'Edict of Potsdam: Prussia welcomes Huguenot refugees from France', fr:'Édit de Potsdam : la Prusse accueille les huguenots français' },
      { y:1701, zh:'普魯士王國成立', en:'The Kingdom of Prussia is proclaimed', fr:'Proclamation du royaume de Prusse' },
      { y:1740, zh:'腓特烈二世即位，入侵西里西亞', en:'Frederick II takes the throne and invades Silesia', fr:'Frédéric II monte sur le trône et envahit la Silésie' },
      { y:1756, zh:'七年戰爭爆發', en:'The Seven Years’ War begins', fr:'Début de la guerre de Sept Ans' },
      { y:1781, zh:'康德出版《純粹理性批判》', en:'Kant publishes the Critique of Pure Reason', fr:'Kant publie la Critique de la raison pure' },
      { y:1803, by:'Francis II', zh:'帝國代表重組：多數教會領地與自由城市被併入大邦', en:'The Imperial Recess absorbs most church lands and free cities into larger states', fr:'Le recès d’Empire intègre la plupart des terres d’Église et des villes libres aux grands États' },
      { y:1806, by:'Francis II', zh:'神聖羅馬帝國解散', en:'The Holy Roman Empire is dissolved', fr:'Dissolution du Saint-Empire' },
    ],
    themes:{
      state:{ zh:'各邦君主仿效路易十四建立專制統治與常備軍。普魯士的「士兵國王」把國家預算大多投入軍隊，人說普魯士「不是一個擁有軍隊的國家，而是一支擁有國家的軍隊」。腓特烈大帝則自稱「國家的第一僕人」，推行開明專制。',
        en:'German rulers copied Louis XIV, building absolutist states and standing armies. Prussia’s “Soldier King” poured most of the budget into the army, and it was said that Prussia was “not a state with an army but an army with a state”. Frederick the Great called himself “the first servant of the state” and practised enlightened absolutism.',
        fr:'Les princes allemands imitent Louis XIV et bâtissent États absolutistes et armées permanentes. Le « Roi-Sergent » de Prusse consacre l’essentiel du budget à l’armée, et l’on dit que la Prusse n’est « pas un État doté d’une armée, mais une armée dotée d’un État ». Frédéric le Grand se dit « premier serviteur de l’État » et pratique le despotisme éclairé.' },
      faith:{ zh:'普魯士國王信奉喀爾文宗，人民多屬路德宗，國家因此奉行宗教寬容，接納法國的胡格諾派與其他難民。虔敬主義強調個人的內心信仰與社會慈善，在哈勒創辦了孤兒院與學校。',
        en:'Prussia’s kings were Calvinist and most of their subjects Lutheran, so the state practised religious toleration and welcomed French Huguenots and other refugees. Pietism stressed inner faith and charity, founding orphanages and schools in Halle.',
        fr:'Les rois de Prusse sont calvinistes et la plupart de leurs sujets luthériens : l’État pratique donc la tolérance et accueille huguenots français et autres réfugiés. Le piétisme met l’accent sur la foi intérieure et la charité, fondant orphelinats et écoles à Halle.' },
      society:{ zh:'易北河以東的容克貴族在大莊園上役使農奴，也是普魯士軍官團的來源。腓特烈大帝推廣種植馬鈴薯以對抗饑荒，普魯士在 1763 年推行義務教育的法令。',
        en:'East of the Elbe the Junker nobility worked great estates with serf labour and supplied Prussia’s officer corps. Frederick the Great promoted the potato against famine, and Prussia decreed compulsory schooling in 1763.',
        fr:'À l’est de l’Elbe, les junkers exploitent de grands domaines avec des serfs et fournissent le corps des officiers prussiens. Frédéric le Grand encourage la pomme de terre contre la famine, et la Prusse décrète l’instruction obligatoire en 1763.' },
      culture:{ zh:'巴哈在萊比錫寫下大量教會音樂，韓德爾、莫札特與年輕的貝多芬都出自德語世界。康德回答「什麼是啟蒙」：「要有勇氣運用你自己的理智。」歌德與席勒在威瑪開創德國古典文學。',
        en:'Bach wrote much of his church music in Leipzig, and Handel, Mozart and the young Beethoven all came from the German-speaking world. Kant answered the question “What is Enlightenment?” with “Have the courage to use your own understanding.” Goethe and Schiller founded Weimar Classicism.',
        fr:'Bach compose à Leipzig une grande partie de sa musique sacrée, et Haendel, Mozart et le jeune Beethoven viennent tous du monde germanophone. À la question « Qu’est-ce que les Lumières ? », Kant répond : « Aie le courage de te servir de ton propre entendement. » Goethe et Schiller fondent le classicisme de Weimar.' },
      world:{ zh:'1683 年鄂圖曼軍隊第二次圍攻維也納被擊退，哈布斯堡隨後向東南擴張。普魯士與奧地利為了西里西亞三度交戰，兩強的競爭從此主導德意志政治一百多年。法國大革命戰爭中，萊茵河左岸被法國併吞。',
        en:'The Ottoman second siege of Vienna was beaten off in 1683, and the Habsburgs then expanded south-east. Prussia and Austria fought three wars over Silesia, and their rivalry would dominate German politics for more than a century. In the French Revolutionary Wars the left bank of the Rhine was annexed by France.',
        fr:'Le second siège ottoman de Vienne est repoussé en 1683, et les Habsbourg s’étendent ensuite vers le sud-est. La Prusse et l’Autriche se livrent trois guerres pour la Silésie, et leur rivalité domine la politique allemande pendant plus d’un siècle. Pendant les guerres de la Révolution, la rive gauche du Rhin est annexée par la France.' },
    }
  },
  {
    id:'unification', icon:'⚙️', start:1806, end:1871, world:'industrial',
    name:{ zh:'從拿破崙到統一', en:'From Napoleon to Unification', fr:'De Napoléon à l’unification' },
    summary:{ zh:'拿破崙擊敗普魯士、重畫德意志地圖，反而激起德意志民族主義。拿破崙垮台後成立鬆散的德意志邦聯，1834 年的關稅同盟則先在經濟上統一了大部分邦國。1848 年革命想建立自由統一的德國卻失敗；最後由俾斯麥以「鐵與血」，經過三場戰爭完成統一。',
      en:'Napoleon crushed Prussia and redrew the map of Germany, stirring German nationalism in the process. After his fall a loose German Confederation was set up, and the Customs Union of 1834 united most states economically first. The revolution of 1848 tried and failed to create a free and united Germany; in the end Bismarck achieved unification by “iron and blood” through three wars.',
      fr:'Napoléon écrase la Prusse et redessine la carte de l’Allemagne, éveillant au passage le nationalisme allemand. Après sa chute naît une Confédération germanique lâche, et l’union douanière de 1834 unifie d’abord économiquement la plupart des États. La révolution de 1848 tente en vain de créer une Allemagne libre et unie ; c’est finalement Bismarck qui réalise l’unité « par le fer et par le sang », au prix de trois guerres.' },
    events:[
      { y:1806, zh:'耶拿會戰，普魯士被拿破崙擊潰', en:'Battle of Jena: Napoleon crushes Prussia', fr:'Bataille d’Iéna : Napoléon écrase la Prusse' },
      { y:1813, zh:'萊比錫「民族會戰」擊敗拿破崙', en:'The “Battle of the Nations” at Leipzig defeats Napoleon', fr:'La « bataille des Nations » à Leipzig bat Napoléon' },
      { y:1815, zh:'維也納會議成立德意志邦聯', en:'The Congress of Vienna creates the German Confederation', fr:'Le congrès de Vienne crée la Confédération germanique' },
      { y:1834, zh:'德意志關稅同盟成立', en:'The German Customs Union (Zollverein) is founded', fr:'Création de l’union douanière allemande (Zollverein)' },
      { y:1835, zh:'第一條德國鐵路：紐倫堡至菲爾特', en:'Germany’s first railway: Nuremberg to Fürth', fr:'Premier chemin de fer allemand : Nuremberg–Fürth' },
      { y:1848, zh:'三月革命，法蘭克福國民議會召開', en:'March Revolution: the Frankfurt National Assembly meets', fr:'Révolution de Mars : réunion du Parlement de Francfort' },
      { y:1862, zh:'俾斯麥出任普魯士首相，發表「鐵與血」演說', en:'Bismarck becomes Prussian minister-president and gives his “iron and blood” speech', fr:'Bismarck devient ministre-président de Prusse et prononce son discours « le fer et le sang »' },
      { y:1866, zh:'普奧戰爭，奧地利被排除在德意志之外', en:'Austro-Prussian War: Austria is shut out of Germany', fr:'Guerre austro-prussienne : l’Autriche est exclue de l’Allemagne' },
      { y:1870, zh:'普法戰爭爆發', en:'The Franco-Prussian War breaks out', fr:'Début de la guerre franco-prussienne' },
    ],
    themes:{
      state:{ zh:'拿破崙把三百多個邦國合併成約四十個，德意志邦聯則由奧地利主導。1848 年法蘭克福議會制定憲法，想請普魯士國王當德意志皇帝，卻被他拒絕。俾斯麥改用戰爭：先打丹麥，再打奧地利，最後打法國。',
        en:'Napoleon merged some three hundred states into about forty, and the German Confederation was led by Austria. In 1848 the Frankfurt Parliament drafted a constitution and offered the imperial crown to the King of Prussia, who refused it. Bismarck turned to war instead: first Denmark, then Austria, finally France.',
        fr:'Napoléon fusionne quelque trois cents États en une quarantaine, et la Confédération germanique est dominée par l’Autriche. En 1848, le Parlement de Francfort rédige une constitution et offre la couronne impériale au roi de Prusse, qui la refuse. Bismarck choisit la guerre : contre le Danemark, puis l’Autriche, enfin la France.' },
      faith:{ zh:'1817 年宗教改革三百週年時，普魯士把路德宗與喀爾文宗合併為聯合教會。天主教在南德與萊茵地區仍有強大影響，這也是普魯士主導統一時的一條暗線。',
        en:'For the Reformation’s three-hundredth anniversary in 1817, Prussia merged its Lutheran and Calvinist churches into a single Union church. Catholicism remained strong in the south and the Rhineland, a hidden fault line under Prussian-led unification.',
        fr:'Pour le tricentenaire de la Réforme, en 1817, la Prusse fusionne ses Églises luthérienne et réformée en une Église unie. Le catholicisme reste fort au sud et en Rhénanie, ligne de fracture cachée sous l’unification menée par la Prusse.' },
      society:{ zh:'普魯士在 1807 年後廢除農奴制，推行城市自治與軍事改革。關稅同盟與鐵路帶動工業化，魯爾區的煤與鋼迅速成長；1840 年代的饑荒則讓大批德國人移民美國。',
        en:'From 1807 Prussia abolished serfdom and reformed town government and the army. The Customs Union and the railways drove industrialisation, and coal and steel boomed in the Ruhr; the hungry 1840s sent huge numbers of Germans emigrating to America.',
        fr:'À partir de 1807, la Prusse abolit le servage et réforme les villes et l’armée. L’union douanière et le chemin de fer stimulent l’industrialisation, et le charbon et l’acier de la Ruhr explosent ; les famines des années 1840 poussent de très nombreux Allemands à émigrer en Amérique.' },
      culture:{ zh:'浪漫主義興起：格林兄弟蒐集民間童話，黑格爾的哲學、貝多芬晚期與舒伯特的音樂都在此時。洪堡德創辦柏林大學，結合教學與研究的模式影響了全世界的大學。',
        en:'Romanticism flourished: the Brothers Grimm collected folk tales, and this was the age of Hegel’s philosophy and the music of late Beethoven and Schubert. Wilhelm von Humboldt founded the University of Berlin, whose union of teaching and research became a model for universities worldwide.',
        fr:'Le romantisme s’épanouit : les frères Grimm recueillent les contes populaires, et c’est l’époque de la philosophie de Hegel et de la musique du dernier Beethoven et de Schubert. Wilhelm von Humboldt fonde l’université de Berlin, dont l’alliance de l’enseignement et de la recherche devient un modèle mondial.' },
      world:{ zh:'德意志的統一改變了歐洲的權力平衡。普法戰爭中法國戰敗，割讓亞爾薩斯與洛林，為日後的仇恨埋下種子。',
        en:'German unification upset the European balance of power. France, defeated in the Franco-Prussian War, had to give up Alsace and Lorraine, sowing the seeds of later enmity.',
        fr:'L’unification allemande bouleverse l’équilibre européen. La France, vaincue en 1870, doit céder l’Alsace et la Lorraine, semant les germes d’une hostilité durable.' },
    }
  },
  {
    id:'kaiserreich', icon:'🏭', start:1871, end:1918, world:'industrial',
    name:{ zh:'德意志帝國', en:'The German Empire', fr:'L’Empire allemand' },
    summary:{ zh:'1871 年德意志帝國在凡爾賽宮鏡廳宣告成立，普魯士國王成為德意志皇帝。帝國迅速成為歐洲工業與科學的強國，俾斯麥一面打壓天主教會與社會主義者，一面建立世界第一套社會保險。威廉二世罷黜俾斯麥後追求「陽光下的地盤」，最後把德國帶進第一次世界大戰，帝國在戰敗中崩潰。',
      en:'The German Empire was proclaimed in the Hall of Mirrors at Versailles in 1871, with the King of Prussia as German Emperor. It quickly became Europe’s industrial and scientific powerhouse; Bismarck fought the Catholic Church and the socialists while creating the world’s first social insurance. After dismissing Bismarck, Wilhelm II sought a “place in the sun” and led Germany into the First World War, in whose defeat the empire collapsed.',
      fr:'L’Empire allemand est proclamé en 1871 dans la galerie des Glaces de Versailles, le roi de Prusse devenant empereur allemand. Il devient vite la grande puissance industrielle et scientifique de l’Europe ; Bismarck combat l’Église catholique et les socialistes tout en créant la première assurance sociale du monde. Après avoir renvoyé Bismarck, Guillaume II réclame une « place au soleil » et entraîne l’Allemagne dans la Première Guerre mondiale, dans la défaite de laquelle l’Empire s’effondre.' },
    events:[
      { y:1871, zh:'德意志帝國在凡爾賽宮宣告成立', en:'The German Empire is proclaimed at Versailles', fr:'Proclamation de l’Empire allemand à Versailles' },
      { y:1878, zh:'《反社會黨人法》', en:'The Anti-Socialist Laws', fr:'Les lois antisocialistes' },
      { y:1883, zh:'世界第一套強制健康保險', en:'The world’s first compulsory health insurance', fr:'La première assurance maladie obligatoire du monde' },
      { y:1884, zh:'德國開始取得非洲與太平洋殖民地；柏林會議召開', en:'Germany acquires colonies in Africa and the Pacific; the Berlin Conference opens', fr:'L’Allemagne acquiert des colonies en Afrique et dans le Pacifique ; ouverture de la conférence de Berlin' },
      { y:1888, zh:'「三皇之年」，威廉二世即位', en:'The “Year of Three Emperors”: Wilhelm II takes the throne', fr:'L’« année des trois empereurs » : Guillaume II monte sur le trône' },
      { y:1890, zh:'威廉二世罷黜俾斯麥', en:'Wilhelm II dismisses Bismarck', fr:'Guillaume II renvoie Bismarck' },
      { y:1904, zh:'德屬西南非的赫雷羅與納馬族大屠殺', en:'Genocide of the Herero and Nama in German South West Africa', fr:'Génocide des Héréros et des Namas dans le Sud-Ouest africain allemand' },
      { y:1914, zh:'第一次世界大戰爆發', en:'The First World War breaks out', fr:'Début de la Première Guerre mondiale' },
      { y:1918, by:'Wilhelm II', zh:'十一月革命，威廉二世退位，德國投降', en:'November Revolution: Wilhelm II abdicates and Germany surrenders', fr:'Révolution de novembre : Guillaume II abdique et l’Allemagne capitule' },
    ],
    themes:{
      state:{ zh:'帝國是由二十五個邦組成的聯邦，帝國議會由男性普選產生，但宰相只對皇帝負責，軍隊不受議會控制。普魯士在帝國中占了大部分的土地與人口。',
        en:'The empire was a federation of twenty-five states with a Reichstag elected by universal male suffrage, but the chancellor answered only to the emperor and the army escaped parliamentary control. Prussia made up most of its land and people.',
        fr:'L’Empire est une fédération de vingt-cinq États dotée d’un Reichstag élu au suffrage universel masculin, mais le chancelier ne répond qu’à l’empereur et l’armée échappe au contrôle parlementaire. La Prusse représente l’essentiel du territoire et de la population.' },
      faith:{ zh:'俾斯麥發動「文化鬥爭」，限制天主教會的學校與神職人員，數百名神父被捕或流亡，結果反而讓天主教中央黨更強大。猶太人在 1871 年取得完全平等的公民權，反猶主義卻也在此時以新的形式出現。',
        en:'Bismarck’s Kulturkampf curbed Catholic schools and clergy, jailing or exiling hundreds of priests, but only strengthened the Catholic Centre Party. Jews won full civil equality in 1871, yet antisemitism took new forms at the same time.',
        fr:'Le Kulturkampf de Bismarck restreint écoles et clergé catholiques, emprisonnant ou exilant des centaines de prêtres, mais ne fait que renforcer le Zentrum catholique. Les Juifs obtiennent l’égalité civique complète en 1871, mais l’antisémitisme prend au même moment des formes nouvelles.' },
      society:{ zh:'德國在化學、電機與鋼鐵領域超越英國。俾斯麥為了削弱社會主義，在 1880 年代推出健康、意外與老年保險；社會民主黨仍在 1912 年成為帝國議會第一大黨。',
        en:'Germany overtook Britain in chemicals, electrical engineering and steel. To undercut socialism, Bismarck introduced health, accident and old-age insurance in the 1880s; even so, the Social Democrats became the largest party in the Reichstag in 1912.',
        fr:'L’Allemagne dépasse le Royaume-Uni dans la chimie, l’électrotechnique et l’acier. Pour affaiblir le socialisme, Bismarck crée dans les années 1880 les assurances maladie, accidents et vieillesse ; les sociaux-démocrates n’en deviennent pas moins le premier parti du Reichstag en 1912.' },
      culture:{ zh:'德國大學與實驗室領先世界：倫琴發現 X 光，普朗克提出量子理論，愛因斯坦在 1905 年發表相對論。尼采的哲學、華格納的歌劇與佛洛伊德的德語著作，都深刻影響了二十世紀。',
        en:'German universities and laboratories led the world: Röntgen discovered X-rays, Planck proposed quantum theory and Einstein published relativity in 1905. Nietzsche’s philosophy, Wagner’s operas and Freud’s German writings shaped the twentieth century.',
        fr:'Les universités et laboratoires allemands dominent le monde : Röntgen découvre les rayons X, Planck propose la théorie des quanta et Einstein publie la relativité en 1905. La philosophie de Nietzsche, les opéras de Wagner et les écrits de Freud en allemand marquent profondément le XXᵉ siècle.' },
      world:{ zh:'俾斯麥以複雜的同盟體系孤立法國、維持和平。威廉二世卻放棄與俄國的條約，並大建海軍挑戰英國，德國最終與奧匈帝國一起面對英、法、俄三國。1914 年德國入侵比利時，第一次世界大戰全面爆發。',
        en:'Bismarck kept the peace by isolating France within a web of alliances. Wilhelm II dropped the treaty with Russia and built a battle fleet to challenge Britain, leaving Germany and Austria-Hungary facing Britain, France and Russia together. In 1914 Germany invaded Belgium and the First World War engulfed Europe.',
        fr:'Bismarck maintient la paix en isolant la France dans un réseau d’alliances. Guillaume II abandonne le traité avec la Russie et construit une flotte pour défier le Royaume-Uni, si bien que l’Allemagne et l’Autriche-Hongrie se retrouvent face au Royaume-Uni, à la France et à la Russie réunis. En 1914, l’Allemagne envahit la Belgique et la Première Guerre mondiale embrase l’Europe.' },
    }
  },
  {
    id:'weimar', icon:'🎭', start:1918, end:1933, world:'worldwar',
    name:{ zh:'威瑪共和', en:'The Weimar Republic', fr:'La république de Weimar' },
    summary:{ zh:'帝國崩潰後，國民議會在威瑪制定了當時最民主的憲法之一。共和國卻背負戰敗與《凡爾賽條約》的屈辱，左右兩派的暴動與 1923 年的惡性通膨幾乎讓它解體。二十年代中期短暫穩定，柏林成為歐洲的文化之都；1929 年的經濟大恐慌之後，納粹黨迅速壯大。',
      en:'After the empire collapsed, a National Assembly in Weimar drafted one of the most democratic constitutions of its day. Yet the republic carried the stigma of defeat and the Treaty of Versailles, and uprisings from left and right and the hyperinflation of 1923 nearly destroyed it. A brief stability in the mid-twenties made Berlin Europe’s cultural capital; after the Great Depression of 1929, the Nazi Party grew rapidly.',
      fr:'Après l’effondrement de l’Empire, une Assemblée nationale réunie à Weimar rédige l’une des constitutions les plus démocratiques de son temps. Mais la république porte le poids de la défaite et du traité de Versailles, et les soulèvements de gauche et de droite comme l’hyperinflation de 1923 manquent de l’emporter. Une brève stabilité au milieu des années 1920 fait de Berlin la capitale culturelle de l’Europe ; après la crise de 1929, le parti nazi grandit à toute vitesse.' },
    events:[
      { y:1919, zh:'斯巴達克斯起義被鎮壓；威瑪憲法通過；簽署《凡爾賽條約》', en:'The Spartacist uprising is crushed; the Weimar Constitution is adopted; the Treaty of Versailles is signed', fr:'Écrasement de la révolte spartakiste ; adoption de la Constitution de Weimar ; signature du traité de Versailles' },
      { y:1920, zh:'卡普政變失敗', en:'The Kapp Putsch fails', fr:'Échec du putsch de Kapp' },
      { y:1923, zh:'法國占領魯爾區；惡性通膨；希特勒在慕尼黑發動啤酒館政變', en:'France occupies the Ruhr; hyperinflation; Hitler’s Beer Hall Putsch in Munich', fr:'La France occupe la Ruhr ; hyperinflation ; putsch de la Brasserie de Hitler à Munich' },
      { y:1926, by:'Gustav Stresemann', zh:'德國加入國際聯盟', en:'Germany joins the League of Nations', fr:'L’Allemagne entre à la Société des Nations' },
      { y:1929, zh:'經濟大恐慌波及德國', en:'The Great Depression hits Germany', fr:'La Grande Dépression frappe l’Allemagne' },
      { y:1932, by:'Paul von Hindenburg', zh:'納粹黨成為國會第一大黨', en:'The Nazis become the largest party in the Reichstag', fr:'Les nazis deviennent le premier parti du Reichstag' },
    ],
    themes:{
      state:{ zh:'威瑪憲法給了女性投票權，採用比例代表制，但小黨林立，內閣平均不到一年就更換。民選總統擁有緊急命令權，1930 年後政府越來越依賴總統命令統治，而非國會。',
        en:'The Weimar Constitution gave women the vote and used proportional representation, but splinter parties multiplied and cabinets lasted on average less than a year. The elected president held emergency powers, and after 1930 governments ruled more and more by presidential decree rather than through parliament.',
        fr:'La Constitution de Weimar donne le vote aux femmes et adopte la proportionnelle, mais les petits partis se multiplient et les gouvernements durent en moyenne moins d’un an. Le président élu dispose de pouvoirs d’exception, et après 1930 on gouverne de plus en plus par décret présidentiel plutôt que par le Parlement.' },
      faith:{ zh:'憲法宣布政教分離，但兩大教會仍享有徵收教會稅等特權，這個制度沿用至今。柏林的猶太社群在科學、文化與商業界都十分活躍。',
        en:'The constitution separated church and state, yet the two great churches kept privileges such as the church tax, a system still in place today. Berlin’s Jewish community thrived in science, culture and business.',
        fr:'La Constitution sépare l’Église et l’État, mais les deux grandes Églises conservent des privilèges comme l’impôt ecclésiastique, système toujours en vigueur. La communauté juive de Berlin est très active dans les sciences, la culture et les affaires.' },
      society:{ zh:'1923 年一條麵包要價上千億馬克，中產階級的積蓄化為烏有。美國貸款帶來短暫繁榮，但 1929 年後資金撤離，1932 年失業人口超過六百萬。',
        en:'In 1923 a loaf of bread cost hundreds of billions of marks and middle-class savings were wiped out. American loans brought a brief boom, but after 1929 the money was withdrawn and by 1932 more than six million were unemployed.',
        fr:'En 1923, une miche de pain coûte des centaines de milliards de marks et l’épargne des classes moyennes est anéantie. Les prêts américains apportent un bref essor, mais après 1929 les capitaux se retirent et en 1932 on compte plus de six millions de chômeurs.' },
      culture:{ zh:'威瑪文化光芒四射：包浩斯開創現代設計，表現主義電影《大都會》、布萊希特的劇場、湯瑪斯·曼的小說，柏林的卡巴萊與夜生活聞名歐洲。',
        en:'Weimar culture blazed: the Bauhaus invented modern design, alongside the expressionist film Metropolis, Brecht’s theatre, Thomas Mann’s novels, and Berlin cabarets and nightlife famous across Europe.',
        fr:'La culture de Weimar rayonne : le Bauhaus invente le design moderne, aux côtés du film expressionniste Metropolis, du théâtre de Brecht, des romans de Thomas Mann et des cabarets berlinois célèbres dans toute l’Europe.' },
      world:{ zh:'《凡爾賽條約》要求德國承認戰爭責任、割地並支付鉅額賠款，被許多德國人視為「強加的和平」。外交部長施特雷澤曼透過《羅加諾公約》與法國和解，德國重返國際社會。',
        en:'The Treaty of Versailles made Germany accept guilt for the war, cede territory and pay heavy reparations, and many Germans saw it as a “dictated peace”. Foreign Minister Stresemann reconciled with France through the Locarno treaties and brought Germany back into the international community.',
        fr:'Le traité de Versailles impose à l’Allemagne la responsabilité de la guerre, des pertes territoriales et de lourdes réparations, et beaucoup d’Allemands y voient une « paix dictée ». Le ministre des Affaires étrangères Stresemann se réconcilie avec la France par les accords de Locarno et ramène l’Allemagne dans la communauté internationale.' },
    }
  },
  {
    id:'nazi', icon:'🕯️', start:1933, end:1945, world:'worldwar',
    name:{ zh:'納粹德國', en:'Nazi Germany', fr:'L’Allemagne nazie' },
    summary:{ zh:'1933 年希特勒被任命為總理，幾個月內就廢除民主、取締其他政黨。納粹政權迫害猶太人與異議者，1939 年入侵波蘭，引爆第二次世界大戰。戰爭期間，納粹有系統地屠殺了約六百萬名歐洲猶太人，以及大量的羅姆人、身心障礙者與其他受害者。1945 年德國無條件投降，國家淪為廢墟。',
      en:'Hitler was appointed chancellor in 1933 and within months had abolished democracy and banned all other parties. The regime persecuted Jews and opponents, and in 1939 invaded Poland, setting off the Second World War. During the war the Nazis systematically murdered some six million European Jews, along with Roma, disabled people and many other victims. In 1945 Germany surrendered unconditionally, a country in ruins.',
      fr:'Hitler est nommé chancelier en 1933 et, en quelques mois, abolit la démocratie et interdit tous les autres partis. Le régime persécute Juifs et opposants et envahit la Pologne en 1939, déclenchant la Seconde Guerre mondiale. Pendant la guerre, les nazis assassinent systématiquement quelque six millions de Juifs d’Europe, ainsi que des Roms, des personnes handicapées et bien d’autres victimes. En 1945, l’Allemagne capitule sans conditions, un pays en ruines.' },
    events:[
      { y:1933, zh:'希特勒出任總理；國會縱火案；《授權法》通過', en:'Hitler becomes chancellor; the Reichstag fire; the Enabling Act is passed', fr:'Hitler devient chancelier ; incendie du Reichstag ; vote de la loi des pleins pouvoirs' },
      { y:1935, zh:'《紐倫堡法案》剝奪猶太人的公民權', en:'The Nuremberg Laws strip Jews of citizenship', fr:'Les lois de Nuremberg privent les Juifs de la citoyenneté' },
      { y:1936, zh:'柏林奧運；德軍進駐萊茵非軍事區', en:'The Berlin Olympics; troops march into the demilitarised Rhineland', fr:'Jeux olympiques de Berlin ; remilitarisation de la Rhénanie' },
      { y:1938, zh:'併吞奧地利；「水晶之夜」全國性迫害猶太人', en:'Annexation of Austria; the Kristallnacht pogrom', fr:'Annexion de l’Autriche ; pogrom de la Nuit de cristal' },
      { y:1939, zh:'入侵波蘭，第二次世界大戰爆發', en:'Invasion of Poland: the Second World War begins', fr:'Invasion de la Pologne : début de la Seconde Guerre mondiale' },
      { y:1942, zh:'萬湖會議協調「最終解決方案」', en:'The Wannsee Conference coordinates the “Final Solution”', fr:'La conférence de Wannsee coordonne la « solution finale »' },
      { y:1943, zh:'史達林格勒戰敗；白玫瑰成員被處決', en:'Defeat at Stalingrad; members of the White Rose are executed', fr:'Défaite de Stalingrad ; exécution des membres de la Rose blanche' },
      { y:1944, zh:'七二〇刺殺希特勒行動失敗', en:'The 20 July plot to kill Hitler fails', fr:'Échec de l’attentat du 20 juillet contre Hitler' },
      { y:1945, zh:'德國無條件投降', en:'Germany surrenders unconditionally', fr:'L’Allemagne capitule sans conditions' },
    ],
    themes:{
      state:{ zh:'納粹以「一體化」消滅各邦自治、工會與政黨，蓋世太保與親衛隊監控社會，集中營關押政敵。法治被元首的意志取代，國家機器全面服從於種族意識形態與戰爭。',
        en:'Through “coordination” the Nazis abolished the states’ autonomy, the unions and the parties; the Gestapo and the SS policed society and concentration camps held opponents. The rule of law gave way to the Führer’s will, and the whole state served racial ideology and war.',
        fr:'Par la « mise au pas », les nazis suppriment l’autonomie des Länder, les syndicats et les partis ; la Gestapo et la SS surveillent la société et les camps de concentration enferment les opposants. L’État de droit cède la place à la volonté du Führer, et tout l’appareil d’État sert l’idéologie raciale et la guerre.' },
      faith:{ zh:'納粹與梵蒂岡簽訂協定，又扶植親納粹的「德意志基督徒」。潘霍華等人組成「認信教會」抵抗，潘霍華最後在 1945 年被處死。對猶太人的迫害從歧視、剝奪財產，一路升級為種族滅絕。',
        en:'The Nazis signed a concordat with the Vatican and backed the pro-Nazi “German Christians”. Dietrich Bonhoeffer and others formed the Confessing Church in resistance; Bonhoeffer was executed in 1945. The persecution of the Jews escalated from discrimination and dispossession to genocide.',
        fr:'Les nazis signent un concordat avec le Vatican et soutiennent les « Chrétiens allemands » pronazis. Dietrich Bonhoeffer et d’autres forment l’Église confessante pour résister ; Bonhoeffer est exécuté en 1945. La persécution des Juifs passe de la discrimination et de la spoliation au génocide.' },
      society:{ zh:'軍備擴張與公共工程讓失業迅速下降，卻是以債務與掠奪支撐。戰爭期間，數百萬名強迫勞工被押到德國工廠與農場；戰爭末期，盟軍轟炸讓許多城市化為瓦礫。',
        en:'Rearmament and public works brought unemployment down fast, but on debt and plunder. During the war millions of forced labourers were deported to German factories and farms, and by its end Allied bombing had reduced many cities to rubble.',
        fr:'Le réarmement et les grands travaux font vite reculer le chômage, mais au prix de la dette et du pillage. Pendant la guerre, des millions de travailleurs forcés sont déportés dans les usines et les fermes allemandes, et à la fin les bombardements alliés ont réduit de nombreuses villes en ruines.' },
      culture:{ zh:'1933 年納粹在各大學城公開焚書，「頹廢藝術」被沒收或嘲弄展出。愛因斯坦、湯瑪斯·曼、布萊希特等數十萬人流亡海外，德國的科學與藝術元氣大傷。',
        en:'In 1933 the Nazis staged public book burnings in university towns, and “degenerate art” was seized or put on show to be mocked. Hundreds of thousands, including Einstein, Thomas Mann and Brecht, fled into exile, draining German science and art.',
        fr:'En 1933, les nazis organisent des autodafés dans les villes universitaires, et l’« art dégénéré » est saisi ou exposé pour être raillé. Des centaines de milliers de personnes, dont Einstein, Thomas Mann et Brecht, s’exilent, saignant la science et l’art allemands.' },
      world:{ zh:'希特勒撕毀《凡爾賽條約》，先後併吞奧地利與捷克的蘇台德區，再與蘇聯瓜分波蘭。德軍一度占領歐洲大部分地區，1941 年入侵蘇聯後戰局逆轉，1945 年德國被盟軍從東西兩面攻占。',
        en:'Hitler tore up the Treaty of Versailles, annexed Austria and the Czech Sudetenland, then carved up Poland with the Soviet Union. German armies occupied most of Europe, but the tide turned after the 1941 invasion of the Soviet Union, and in 1945 Germany was overrun from east and west.',
        fr:'Hitler déchire le traité de Versailles, annexe l’Autriche et les Sudètes, puis partage la Pologne avec l’URSS. Les armées allemandes occupent la majeure partie de l’Europe, mais le vent tourne après l’invasion de l’URSS en 1941, et en 1945 l’Allemagne est envahie à l’est comme à l’ouest.' },
    }
  },
  {
    id:'divided', icon:'🧱', start:1945, end:1990, world:'coldwar',
    name:{ zh:'分裂的德國', en:'Divided Germany', fr:'L’Allemagne divisée' },
    summary:{ zh:'戰後德國被四國占領，1949 年分裂為西邊的德意志聯邦共和國與東邊的德意志民主共和國。西德在美國援助與社會市場經濟下創造「經濟奇蹟」，融入西方；東德成為蘇聯陣營的一黨專政國家，1961 年築起柏林圍牆。1989 年東德人民和平革命，圍牆倒下，兩德在 1990 年 10 月 3 日統一。',
      en:'After the war Germany was occupied by four powers, and in 1949 it split into the Federal Republic in the west and the German Democratic Republic in the east. West Germany, helped by American aid and the social market economy, achieved an “economic miracle” and joined the West; East Germany became a one-party state in the Soviet bloc and built the Berlin Wall in 1961. In 1989 East Germans made a peaceful revolution, the Wall fell, and the two states were united on 3 October 1990.',
      fr:'Après la guerre, l’Allemagne est occupée par quatre puissances et se divise en 1949 entre la République fédérale à l’ouest et la République démocratique allemande à l’est. La RFA, aidée par les États-Unis et l’économie sociale de marché, connaît un « miracle économique » et s’ancre à l’Ouest ; la RDA devient un État à parti unique du bloc soviétique et construit le mur de Berlin en 1961. En 1989, les Allemands de l’Est font une révolution pacifique, le Mur tombe, et les deux États s’unissent le 3 octobre 1990.' },
    events:[
      { y:1945, zh:'波茨坦會議決定德國的占領與邊界', en:'The Potsdam Conference settles Germany’s occupation and borders', fr:'La conférence de Potsdam règle l’occupation et les frontières de l’Allemagne' },
      { y:1948, zh:'西區幣制改革；蘇聯封鎖柏林，盟軍空運補給', en:'Currency reform in the west; the Soviet blockade of Berlin and the Allied airlift', fr:'Réforme monétaire à l’Ouest ; blocus soviétique de Berlin et pont aérien allié' },
      { y:1949, zh:'西德與東德相繼成立', en:'The Federal Republic and the GDR are founded', fr:'Fondation de la RFA puis de la RDA' },
      { y:1953, zh:'東德六一七起義被蘇聯坦克鎮壓', en:'The 17 June uprising in East Germany is crushed by Soviet tanks', fr:'Le soulèvement du 17 juin en RDA est écrasé par les chars soviétiques' },
      { y:1961, zh:'東德築起柏林圍牆', en:'East Germany builds the Berlin Wall', fr:'La RDA construit le mur de Berlin' },
      { y:1970, zh:'布蘭特在華沙猶太區起義紀念碑前下跪', en:'Willy Brandt kneels at the Warsaw Ghetto memorial', fr:'Willy Brandt s’agenouille devant le mémorial du ghetto de Varsovie' },
      { y:1972, by:'Willy Brandt', zh:'兩德簽訂《基礎條約》，相互承認', en:'The two Germanies sign the Basic Treaty and recognise each other', fr:'Les deux Allemagnes signent le traité fondamental et se reconnaissent' },
      { y:1977, zh:'紅軍派恐怖攻擊的「德國之秋」', en:'The “German Autumn” of Red Army Faction terror', fr:'L’« automne allemand » du terrorisme de la Fraction armée rouge' },
      { y:1989, zh:'和平革命，柏林圍牆倒下', en:'Peaceful revolution: the Berlin Wall falls', fr:'Révolution pacifique : chute du mur de Berlin' },
      { y:1990, zh:'兩德統一', en:'German reunification', fr:'Réunification allemande' },
    ],
    themes:{
      state:{ zh:'西德的《基本法》吸取威瑪的教訓，以聯邦制、憲法法院與「建設性不信任投票」確保政局穩定，首都設在波昂。東德由統一社會黨一黨專政，國家安全部（史塔西）建立起龐大的監控網。',
        en:'West Germany’s Basic Law learned from Weimar, securing stability through federalism, a constitutional court and the “constructive vote of no confidence”, with its capital in Bonn. East Germany was ruled by the Socialist Unity Party alone, and the Stasi built a vast network of surveillance.',
        fr:'La Loi fondamentale de la RFA tire les leçons de Weimar et garantit la stabilité par le fédéralisme, une cour constitutionnelle et la « défiance constructive », avec Bonn pour capitale. La RDA est dirigée par le seul Parti socialiste unifié, et la Stasi tisse un immense réseau de surveillance.' },
      faith:{ zh:'西德的基督教民主聯盟以基督教價值為號召，長期執政。東德壓制教會，但 1980 年代萊比錫尼古拉教堂的「和平祈禱」，成為和平革命的起點。',
        en:'In the west the Christian Democrats, appealing to Christian values, governed for long stretches. The east repressed the churches, but the “prayers for peace” at Leipzig’s St Nicholas Church in the 1980s became the starting point of the peaceful revolution.',
        fr:'À l’Ouest, les chrétiens-démocrates, se réclamant des valeurs chrétiennes, gouvernent longtemps. À l’Est, les Églises sont réprimées, mais les « prières pour la paix » de l’église Saint-Nicolas de Leipzig, dans les années 1980, deviennent le point de départ de la révolution pacifique.' },
      society:{ zh:'西德的社會市場經濟結合自由市場與社會保障，五十年代起經濟高速成長，並從南歐與土耳其招募「客籍勞工」。東德實行計畫經濟，人民有工作與住房，卻長期缺乏消費品，等一輛衛星牌汽車要十幾年。',
        en:'West Germany’s social market economy combined free markets with social protection, grew fast from the fifties and recruited “guest workers” from southern Europe and Turkey. East Germany ran a planned economy with jobs and housing for all but chronic shortages of consumer goods; people waited more than ten years for a Trabant car.',
        fr:'L’économie sociale de marché de la RFA allie marché libre et protection sociale, croît très vite dès les années 1950 et recrute des « travailleurs invités » en Europe du Sud et en Turquie. La RDA pratique l’économie planifiée, avec emploi et logement pour tous mais des pénuries chroniques de biens de consommation ; on attend plus de dix ans une Trabant.' },
      culture:{ zh:'德國人開始「處理過去」：1960 年代的奧許維茲審判與學運，迫使社會正視納粹罪行。葛拉斯、伯爾等作家與法斯賓德等導演，讓戰後德國文化重回世界舞台。',
        en:'Germans began “working through the past”: the Auschwitz trials and the student movement of the sixties forced society to face Nazi crimes. Writers such as Günter Grass and Heinrich Böll and directors such as Fassbinder brought post-war German culture back onto the world stage.',
        fr:'Les Allemands entreprennent le « travail sur le passé » : les procès d’Auschwitz et le mouvement étudiant des années 1960 obligent la société à regarder en face les crimes nazis. Des écrivains comme Günter Grass et Heinrich Böll et des cinéastes comme Fassbinder ramènent la culture allemande sur la scène mondiale.' },
      world:{ zh:'西德加入北約與歐洲共同體，與法國和解成為歐洲整合的核心；東德加入華沙公約。布蘭特的「東方政策」緩和了與東歐的關係，戈巴契夫的改革則讓蘇聯不再出兵鎮壓東德的抗議。',
        en:'West Germany joined NATO and the European Community, and its reconciliation with France became the core of European integration; East Germany joined the Warsaw Pact. Brandt’s Ostpolitik eased relations with the East, and Gorbachev’s reforms meant the Soviet Union no longer sent tanks against East German protests.',
        fr:'La RFA entre dans l’OTAN et la Communauté européenne, et sa réconciliation avec la France devient le cœur de la construction européenne ; la RDA rejoint le pacte de Varsovie. L’Ostpolitik de Brandt détend les relations avec l’Est, et les réformes de Gorbatchev font que l’URSS n’envoie plus de chars contre les manifestants est-allemands.' },
    }
  },
  {
    id:'berlinrepublic', icon:'🏛️', start:1990, end:2026, world:'contemporary',
    name:{ zh:'統一後的德國', en:'Reunified Germany', fr:'L’Allemagne réunifiée' },
    summary:{ zh:'統一後首都遷回柏林，東部經歷劇烈的轉型與失業潮。德國帶頭推動歐元，梅克爾執政十六年，帶領德國度過金融危機、歐債危機與 2015 年的難民潮。2022 年俄羅斯全面入侵烏克蘭後，總理蕭茲宣布「時代轉折」，德國大幅調整國防與能源政策。',
      en:'After reunification the capital moved back to Berlin, and the east went through a wrenching transition and mass unemployment. Germany led the way into the euro, and Angela Merkel governed for sixteen years through the financial crisis, the euro crisis and the refugee influx of 2015. After Russia’s full-scale invasion of Ukraine in 2022, Chancellor Olaf Scholz proclaimed a “turning point of the times”, and Germany overhauled its defence and energy policies.',
      fr:'Après la réunification, la capitale revient à Berlin, et l’Est traverse une transition brutale et un chômage de masse. L’Allemagne entraîne l’Europe vers l’euro, et Angela Merkel gouverne seize ans, traversant la crise financière, la crise de l’euro et l’afflux de réfugiés de 2015. Après l’invasion à grande échelle de l’Ukraine par la Russie en 2022, le chancelier Olaf Scholz proclame un « changement d’époque », et l’Allemagne revoit en profondeur ses politiques de défense et d’énergie.' },
    events:[
      { y:1991, zh:'聯邦議院決定遷都柏林', en:'The Bundestag votes to move the capital to Berlin', fr:'Le Bundestag vote le retour de la capitale à Berlin' },
      { y:1999, zh:'歐元啟用；國會遷入柏林國會大廈', en:'The euro is launched; parliament moves into the Reichstag in Berlin', fr:'Lancement de l’euro ; le Parlement s’installe au Reichstag à Berlin' },
      { y:2003, zh:'施若德推出「2010 議程」改革勞動市場', en:'Schröder launches the Agenda 2010 labour-market reforms', fr:'Schröder lance les réformes du marché du travail de l’Agenda 2010' },
      { y:2011, zh:'福島事故後決定逐步廢除核電', en:'After Fukushima, Germany decides to phase out nuclear power', fr:'Après Fukushima, l’Allemagne décide de sortir du nucléaire' },
      { y:2015, zh:'接納逾百萬難民，梅克爾說「我們做得到」', en:'Over a million refugees arrive; Merkel says “We can do this”', fr:'Plus d’un million de réfugiés arrivent ; Merkel déclare « Nous y arriverons »' },
      { y:2022, zh:'俄羅斯入侵烏克蘭，蕭茲宣布「時代轉折」', en:'Russia invades Ukraine; Scholz proclaims a “Zeitenwende”', fr:'La Russie envahit l’Ukraine ; Scholz proclame la « Zeitenwende »' },
      { y:2023, zh:'最後三座核電廠關閉', en:'The last three nuclear power plants shut down', fr:'Fermeture des trois dernières centrales nucléaires' },
      { y:2025, zh:'提前大選，梅爾茨出任總理', en:'Snap election: Friedrich Merz becomes chancellor', fr:'Élections anticipées : Friedrich Merz devient chancelier' },
    ],
    themes:{
      state:{ zh:'東德五個邦加入聯邦，柏林恢復為首都。德國政治長期由基民盟與社民黨主導，近年綠黨崛起，極右派的德國另類選擇黨也在東部取得大量支持，政黨版圖日益分散。',
        en:'Five eastern states joined the federation and Berlin became the capital again. German politics was long dominated by the Christian Democrats and the Social Democrats; in recent years the Greens have risen, the far-right AfD has won strong support especially in the east, and the party landscape has fragmented.',
        fr:'Cinq Länder de l’Est rejoignent la fédération et Berlin redevient capitale. La politique allemande est longtemps dominée par les chrétiens-démocrates et les sociaux-démocrates ; ces dernières années, les Verts progressent, l’AfD d’extrême droite obtient un fort soutien surtout à l’Est, et le paysage politique se fragmente.' },
      faith:{ zh:'東部是全世界最世俗化的地區之一，大多數人不屬於任何教會；全國的教會成員也逐年減少。穆斯林已是德國第二大宗教群體，猶太社群因前蘇聯移民而重新成長。',
        en:'The east is one of the most secular regions in the world, where most people belong to no church, and church membership is falling nationwide. Muslims are now Germany’s second-largest religious group, and the Jewish community has grown again thanks to immigrants from the former Soviet Union.',
        fr:'L’Est est l’une des régions les plus sécularisées du monde, où la plupart des gens n’appartiennent à aucune Église, et le nombre de fidèles baisse dans tout le pays. Les musulmans forment désormais le deuxième groupe religieux, et la communauté juive a repris de l’ampleur grâce aux immigrés de l’ex-URSS.' },
      society:{ zh:'統一後東部許多工廠關閉，東西部的收入差距至今仍在。德國以汽車與機械出口成為歐洲最大經濟體，但過度依賴俄羅斯天然氣的能源政策，在 2022 年遭受重大考驗。',
        en:'After reunification many eastern factories closed, and an east-west income gap persists to this day. Exports of cars and machinery made Germany Europe’s largest economy, but its energy policy’s heavy reliance on Russian gas was severely tested in 2022.',
        fr:'Après la réunification, de nombreuses usines de l’Est ferment, et l’écart de revenus entre Est et Ouest persiste encore. Les exportations de voitures et de machines font de l’Allemagne la première économie européenne, mais sa forte dépendance au gaz russe est durement éprouvée en 2022.' },
      culture:{ zh:'柏林成為歐洲的藝術與電子音樂之都。歐洲被害猶太人紀念碑等設施，讓「記憶文化」成為德國國家認同的一部分。',
        en:'Berlin became Europe’s capital of art and electronic music. Monuments such as the Memorial to the Murdered Jews of Europe made the “culture of remembrance” part of German national identity.',
        fr:'Berlin devient la capitale européenne de l’art et de la musique électronique. Des lieux comme le Mémorial aux Juifs assassinés d’Europe font de la « culture du souvenir » une part de l’identité nationale allemande.' },
      world:{ zh:'德國是歐盟最重要的成員，在歐債危機中主導救援與撙節政策。長期謹慎的軍事政策在 2022 年轉向：設立千億歐元的國防特別基金，並大量援助烏克蘭。',
        en:'Germany is the EU’s most important member and steered the bail-outs and austerity of the euro crisis. Its long-cautious military policy shifted in 2022 with a hundred-billion-euro special defence fund and large-scale aid to Ukraine.',
        fr:'L’Allemagne est le membre le plus important de l’UE et pilote les plans de sauvetage et l’austérité de la crise de l’euro. Sa politique militaire longtemps prudente change en 2022, avec un fonds spécial de défense de cent milliards d’euros et une aide massive à l’Ukraine.' },
    }
  },
  ]
},
{
  id:'italy', flag:'flag-it', color:'#3f7a4e',
  name:{ zh:'義大利', en:'Italy', fr:'Italie' },
  intro:{ zh:'義大利曾是統治整個地中海的羅馬帝國核心，也是教宗與文藝復興的故鄉，卻在一千多年裡分裂成許多城邦與王國，直到 1861 年才統一。所以義大利人常說自己先是羅馬人、佛羅倫斯人或拿坡里人，然後才是義大利人。這裡用十二個時期與五條主題線索，閱讀這兩千八百年。',
    en:'Italy was the heart of the Roman Empire that ruled the whole Mediterranean, and the home of the papacy and the Renaissance, yet for over a thousand years it was split into city-states and kingdoms and was united only in 1861. That is why Italians often feel Roman, Florentine or Neapolitan first and Italian second. Twelve periods and five thematic threads take you through these 2,800 years.',
    fr:'L’Italie fut le cœur de l’Empire romain qui régnait sur toute la Méditerranée, la patrie de la papauté et de la Renaissance, mais elle resta plus de mille ans divisée en cités et en royaumes et ne fut unifiée qu’en 1861. Voilà pourquoi les Italiens se sentent souvent romains, florentins ou napolitains avant d’être italiens. Douze périodes et cinq fils thématiques parcourent ces 2 800 ans.' },
  threads:{
    state:{ intro:{ zh:'從羅馬帝國到城邦林立，直到 1861 年才統一：義大利的地方認同，至今往往比國家認同更強。',
      en:'From the Roman Empire to a land of city-states, united only in 1861: in Italy local loyalties are often still stronger than national ones.',
      fr:'De l’Empire romain à une mosaïque de cités, unifiée seulement en 1861 : en Italie, l’attachement local reste souvent plus fort que le sentiment national.' } },
    faith:{ name:{ zh:'宗教與教廷', en:'Religion & the Papacy', fr:'Religion et papauté' },
      intro:{ zh:'教宗就住在義大利：天主教會在這裡既是信仰，也是統治者與政治勢力。',
        en:'The Pope lives in Italy: here the Catholic Church has been not only a faith but a ruler and a political power.',
        fr:'Le pape vit en Italie : l’Église catholique y est à la fois une foi, un souverain et une puissance politique.' } },
    society:{ intro:{ zh:'從羅馬的奴隸莊園、中世紀的海上貿易與銀行，到南北差距、移民潮與戰後的「經濟奇蹟」。',
      en:'From Roman slave estates and medieval sea trade and banking to the north-south divide, mass emigration and the post-war “economic miracle”.',
      fr:'Des domaines esclavagistes romains, du commerce maritime et de la banque médiévale à la fracture Nord-Sud, à l’émigration de masse et au « miracle économique » d’après-guerre.' } },
    culture:{ intro:{ zh:'羅馬、文藝復興與巴洛克：義大利一再成為歐洲藝術、建築與思想的源頭。',
      en:'Rome, the Renaissance and the Baroque: again and again Italy has been the source of European art, architecture and thought.',
      fr:'Rome, la Renaissance et le baroque : l’Italie a sans cesse été la source de l’art, de l’architecture et de la pensée européennes.' } },
    world:{ name:{ zh:'義大利與世界', en:'Italy & the World', fr:'L’Italie et le monde' },
      intro:{ zh:'從統治地中海的帝國、被列強爭奪的戰場，到歐洲共同體的創始成員。',
        en:'From an empire ruling the Mediterranean and a battlefield fought over by the great powers to a founding member of the European Community.',
        fr:'D’un empire maître de la Méditerranée et d’un champ de bataille disputé par les puissances à un membre fondateur de la Communauté européenne.' } },
  },
  periods:[
  {
    id:'origins', icon:'🐺', start:-800, end:-27, world:'roman',
    name:{ zh:'伊特拉斯坎與羅馬共和', en:'The Etruscans and the Roman Republic', fr:'Les Étrusques et la République romaine' },
    summary:{ zh:'伊特拉斯坎人在義大利中部建立富裕的城邦，希臘人則在南部與西西里建立殖民城市。台伯河畔的羅馬趕走國王、建立共和，逐步統一義大利半島，又打敗迦太基，成為地中海的霸主。但征服帶來的財富與奴隸撕裂了社會，共和在凱撒與屋大維的內戰中走向終點。',
      en:'The Etruscans built rich city-states in central Italy, while Greeks founded colonies in the south and in Sicily. Rome, on the Tiber, drove out its kings, founded a republic, gradually united the peninsula and defeated Carthage to become master of the Mediterranean. But the wealth and slaves of conquest tore society apart, and the Republic ended in the civil wars of Caesar and Octavian.',
      fr:'Les Étrusques fondent de riches cités en Italie centrale, tandis que les Grecs colonisent le Sud et la Sicile. Rome, sur le Tibre, chasse ses rois, fonde la République, unifie peu à peu la péninsule et bat Carthage pour devenir maîtresse de la Méditerranée. Mais la richesse et les esclaves de la conquête déchirent la société, et la République sombre dans les guerres civiles de César et d’Octave.' },
    events:[
      { y:-753, c:true, zh:'傳說中羅慕路斯建立羅馬', en:'Romulus founds Rome, according to legend', fr:'Fondation légendaire de Rome par Romulus' },
      { y:-509, zh:'趕走末代國王，建立羅馬共和', en:'The last king is expelled and the Republic founded', fr:'Expulsion du dernier roi et fondation de la République' },
      { y:-390, c:true, zh:'高盧人攻陷並劫掠羅馬', en:'The Gauls sack Rome', fr:'Les Gaulois mettent Rome à sac' },
      { y:-264, zh:'第一次布匿戰爭爆發', en:'The First Punic War begins', fr:'Début de la première guerre punique' },
      { y:-218, zh:'漢尼拔率象隊翻越阿爾卑斯山', en:'Hannibal crosses the Alps with his elephants', fr:'Hannibal franchit les Alpes avec ses éléphants' },
      { y:-146, zh:'羅馬摧毀迦太基與科林斯', en:'Rome destroys Carthage and Corinth', fr:'Rome détruit Carthage et Corinthe' },
      { y:-133, zh:'格拉古兄弟的土地改革引發流血衝突', en:'The Gracchi’s land reform ends in bloodshed', fr:'La réforme agraire des Gracques finit dans le sang' },
      { y:-73, zh:'斯巴達克斯領導奴隸起義', en:'Spartacus leads a slave revolt', fr:'Spartacus mène une révolte d’esclaves' },
      { y:-44, zh:'凱撒在 3 月 15 日遇刺', en:'Caesar is assassinated on the Ides of March', fr:'César est assassiné aux ides de mars' },
      { y:-31, zh:'亞克興海戰，屋大維擊敗安東尼與克麗奧佩脫拉', en:'Actium: Octavian defeats Antony and Cleopatra', fr:'Actium : Octave bat Antoine et Cléopâtre' },
    ],
    themes:{
      state:{ zh:'共和由每年選出的兩位執政官、元老院與公民大會共治，並以法律限制任何人長期掌權。征服地中海之後，將軍擁有自己的軍隊，制度再也壓不住個人野心。',
        en:'The Republic was run by two consuls elected each year, the Senate and the citizen assemblies, with laws meant to stop anyone holding power for long. Once the Mediterranean was conquered, generals commanded armies loyal to themselves, and the system could no longer contain personal ambition.',
        fr:'La République est gouvernée par deux consuls élus chaque année, le Sénat et les assemblées de citoyens, avec des lois destinées à empêcher quiconque de garder longtemps le pouvoir. Après la conquête de la Méditerranée, les généraux disposent d’armées fidèles à eux seuls, et le système ne peut plus contenir les ambitions personnelles.' },
      faith:{ zh:'羅馬人吸收了伊特拉斯坎人的占卜與希臘人的神話，朱比特、朱諾等神祇與希臘諸神一一對應。宗教是公共事務，祭司由政治人物擔任。',
        en:'The Romans absorbed Etruscan divination and Greek myth, matching Jupiter, Juno and the other gods with the Greek pantheon. Religion was a public affair, and priesthoods were held by politicians.',
        fr:'Les Romains adoptent la divination étrusque et la mythologie grecque, faisant correspondre Jupiter, Junon et les autres dieux au panthéon grec. La religion est une affaire publique, et les sacerdoces sont tenus par des hommes politiques.' },
      society:{ zh:'貴族與平民之間長期爭奪權利。征服帶來大量奴隸，富人以奴隸經營大莊園，小農破產湧入羅馬城，這是共和晚期動盪的根源。',
        en:'Patricians and plebeians struggled over rights for centuries. Conquest brought vast numbers of slaves; the rich worked great estates with slave labour while ruined smallholders poured into Rome, the root of the late Republic’s turmoil.',
        fr:'Patriciens et plébéiens luttent pendant des siècles pour leurs droits. La conquête amène des esclaves en masse ; les riches exploitent de grands domaines avec cette main-d’œuvre, tandis que les petits paysans ruinés affluent à Rome : c’est la source des troubles de la fin de la République.' },
      culture:{ zh:'羅馬從伊特拉斯坎人學到拱門與城市規劃，從希臘人學到文學與哲學。西塞羅的演說與書信讓拉丁散文達到高峰。',
        en:'Rome learned the arch and town planning from the Etruscans and literature and philosophy from the Greeks. Cicero’s speeches and letters brought Latin prose to its height.',
        fr:'Rome apprend l’arc et l’urbanisme des Étrusques, la littérature et la philosophie des Grecs. Les discours et la correspondance de Cicéron portent la prose latine à son sommet.' },
      world:{ zh:'三次布匿戰爭讓羅馬擊敗北非的迦太基，之後再征服希臘、西班牙、高盧與東方。地中海成了羅馬人口中的「我們的海」。',
        en:'Three Punic Wars brought victory over Carthage in North Africa, followed by the conquest of Greece, Spain, Gaul and the East. The Mediterranean became what the Romans called “our sea”.',
        fr:'Les trois guerres puniques donnent la victoire sur Carthage, puis viennent la conquête de la Grèce, de l’Espagne, de la Gaule et de l’Orient. La Méditerranée devient ce que les Romains appellent « notre mer ».' },
    }
  },
  {
    id:'empire', icon:'🏛️', start:-27, end:476, world:'roman',
    name:{ zh:'羅馬帝國', en:'The Roman Empire', fr:'L’Empire romain' },
    summary:{ zh:'屋大維獲得「奧古斯都」稱號，表面上恢復共和，實際上成為第一位皇帝。接下來兩百年的「羅馬和平」讓帝國從不列顛延伸到美索不達米亞。三世紀起危機不斷，君士坦丁皈依基督教並把首都遷到君士坦丁堡；476 年西羅馬最後一位皇帝被廢，義大利失去了帝國的中心地位。',
      en:'Octavian took the title Augustus and, while claiming to restore the Republic, became the first emperor. The two centuries of the Pax Romana stretched the empire from Britain to Mesopotamia. Crisis set in from the third century; Constantine embraced Christianity and moved the capital to Constantinople, and in 476 the last Western emperor was deposed and Italy lost its place at the empire’s heart.',
      fr:'Octave prend le titre d’Auguste et, sous couvert de restaurer la République, devient le premier empereur. Les deux siècles de la Pax Romana étendent l’Empire de la Bretagne à la Mésopotamie. La crise s’installe au IIIᵉ siècle ; Constantin se tourne vers le christianisme et transfère la capitale à Constantinople, et en 476 le dernier empereur d’Occident est déposé : l’Italie perd sa place au cœur de l’Empire.' },
    events:[
      { y:-27, zh:'屋大維獲得「奧古斯都」稱號，帝國開始', en:'Octavian becomes Augustus: the Empire begins', fr:'Octave devient Auguste : début de l’Empire' },
      { y:64,  zh:'羅馬大火，尼祿迫害基督徒', en:'The Great Fire of Rome; Nero persecutes the Christians', fr:'Grand incendie de Rome ; Néron persécute les chrétiens' },
      { y:79,  zh:'維蘇威火山噴發，掩埋龐貝與赫庫蘭尼姆', en:'Vesuvius erupts and buries Pompeii and Herculaneum', fr:'Le Vésuve ensevelit Pompéi et Herculanum' },
      { y:80,  zh:'羅馬競技場落成', en:'The Colosseum is inaugurated', fr:'Inauguration du Colisée' },
      { y:117, by:'Trajan', zh:'帝國版圖達到最大', en:'The Empire reaches its greatest extent', fr:'L’Empire atteint son extension maximale' },
      { y:313, zh:'《米蘭敕令》寬容基督教', en:'The Edict of Milan tolerates Christianity', fr:'L’édit de Milan tolère le christianisme' },
      { y:330, zh:'首都遷往君士坦丁堡', en:'The capital moves to Constantinople', fr:'La capitale est transférée à Constantinople' },
      { y:410, zh:'西哥德人阿拉里克劫掠羅馬', en:'Alaric’s Visigoths sack Rome', fr:'Les Wisigoths d’Alaric mettent Rome à sac' },
      { y:476, zh:'西羅馬末代皇帝被廢', en:'The last Western emperor is deposed', fr:'Déposition du dernier empereur d’Occident' },
    ],
    themes:{
      state:{ zh:'奧古斯都保留元老院與執政官的名稱，實權卻集中在皇帝與軍隊手中。三世紀五十年間換了二十多位皇帝，戴克里先之後帝國分由多位皇帝共治，最終分成東西兩半。',
        en:'Augustus kept the names of Senate and consuls while concentrating real power in the emperor and the army. In the third century more than twenty emperors came and went in fifty years; after Diocletian the empire was shared among several rulers and finally split into East and West.',
        fr:'Auguste conserve le Sénat et les consuls tout en concentrant le pouvoir réel entre les mains de l’empereur et de l’armée. Au IIIᵉ siècle, plus de vingt empereurs se succèdent en cinquante ans ; après Dioclétien, l’Empire est partagé entre plusieurs souverains, puis scindé en Orient et Occident.' },
      faith:{ zh:'基督教從猶太地區傳到羅馬，彼得與保羅據說都在羅馬殉道。經過數次迫害，313 年獲得寬容，380 年成為國教；羅馬主教逐漸成為西方教會的領袖，也就是後來的教宗。',
        en:'Christianity spread from Judaea to Rome, where Peter and Paul are said to have been martyred. After several persecutions it was tolerated in 313 and made the state religion in 380, and the bishop of Rome gradually became leader of the Western Church: the Pope.',
        fr:'Le christianisme gagne Rome depuis la Judée ; Pierre et Paul y auraient été martyrisés. Après plusieurs persécutions, il est toléré en 313 et devient religion d’État en 380, et l’évêque de Rome devient peu à peu le chef de l’Église d’Occident : le pape.' },
      society:{ zh:'羅馬城在全盛期有約一百萬人口，靠埃及與北非的穀物餵養，皇帝以「麵包與競技」安撫民眾。212 年帝國境內所有自由人都取得羅馬公民權。',
        en:'At its height the city of Rome had around a million people, fed on grain from Egypt and North Africa, and emperors kept them quiet with “bread and circuses”. In 212 every free person in the empire became a Roman citizen.',
        fr:'À son apogée, Rome compte environ un million d’habitants, nourris du blé d’Égypte et d’Afrique du Nord, et les empereurs les apaisent avec « du pain et des jeux ». En 212, tous les hommes libres de l’Empire deviennent citoyens romains.' },
      culture:{ zh:'維吉爾的《埃涅阿斯紀》、奧維德與賀拉斯的詩歌是拉丁文學的黃金時代。混凝土讓羅馬人蓋出萬神殿的大圓頂、輸水道與浴場；羅馬法則成為歐洲法律的基礎。',
        en:'Virgil’s Aeneid and the poetry of Ovid and Horace mark the golden age of Latin literature. Concrete let the Romans raise the Pantheon’s great dome, aqueducts and baths, and Roman law became the foundation of European law.',
        fr:'L’Énéide de Virgile et la poésie d’Ovide et d’Horace marquent l’âge d’or de la littérature latine. Le béton permet aux Romains d’élever la coupole du Panthéon, des aqueducs et des thermes, et le droit romain devient le socle du droit européen.' },
      world:{ zh:'帝國的邊界從哈德良長城延伸到幼發拉底河，羅馬道路與海路把整個地中海連成一個市場。五世紀時，日耳曼部族、匈人與汪達爾人先後入侵義大利。',
        en:'The empire stretched from Hadrian’s Wall to the Euphrates, with roads and sea lanes joining the whole Mediterranean into a single market. In the fifth century Germanic peoples, the Huns and the Vandals invaded Italy in turn.',
        fr:'L’Empire s’étend du mur d’Hadrien à l’Euphrate, et routes et voies maritimes font de la Méditerranée un seul marché. Au Vᵉ siècle, peuples germaniques, Huns et Vandales envahissent tour à tour l’Italie.' },
    }
  },
  {
    id:'earlymedieval', icon:'✝️', start:476, end:1000, world:'medieval',
    name:{ zh:'哥德、倫巴底與教宗國', en:'Goths, Lombards and the Papal States', fr:'Goths, Lombards et États pontificaux' },
    summary:{ zh:'西羅馬滅亡後，東哥德國王狄奧多里克在拉溫納統治義大利。拜占庭的查士丁尼花了近二十年奪回義大利，戰爭卻讓半島殘破；不久倫巴底人入侵，義大利從此分裂。教宗在羅馬逐漸成為世俗統治者，並與法蘭克人結盟，800 年為查理曼加冕。',
      en:'After the fall of the West, the Ostrogothic king Theodoric ruled Italy from Ravenna. Byzantium’s Justinian spent nearly twenty years reconquering it, leaving the peninsula in ruins, and soon the Lombards invaded and Italy was split for good. In Rome the Pope gradually became a worldly ruler, allied with the Franks and crowned Charlemagne in 800.',
      fr:'Après la chute de l’Occident, le roi ostrogoth Théodoric gouverne l’Italie depuis Ravenne. Justinien, à Byzance, met près de vingt ans à la reconquérir, laissant la péninsule ruinée ; bientôt les Lombards envahissent et l’Italie est durablement divisée. À Rome, le pape devient peu à peu un souverain temporel, s’allie aux Francs et couronne Charlemagne en 800.' },
    events:[
      { y:493, zh:'狄奧多里克奪下拉溫納，建立東哥德王國', en:'Theodoric takes Ravenna and founds the Ostrogothic kingdom', fr:'Théodoric prend Ravenne et fonde le royaume ostrogoth' },
      { y:535, zh:'查士丁尼發動哥德戰爭', en:'Justinian launches the Gothic War', fr:'Justinien lance la guerre des Goths' },
      { y:568, zh:'倫巴底人入侵義大利', en:'The Lombards invade Italy', fr:'Les Lombards envahissent l’Italie' },
      { y:590, zh:'額我略一世成為教宗', en:'Gregory the Great becomes Pope', fr:'Grégoire le Grand devient pape' },
      { y:756, zh:'丕平獻土，教宗國誕生', en:'The Donation of Pepin creates the Papal States', fr:'La donation de Pépin crée les États pontificaux' },
      { y:774, zh:'查理曼征服倫巴底王國', en:'Charlemagne conquers the Lombard kingdom', fr:'Charlemagne conquiert le royaume lombard' },
      { y:800, zh:'教宗在聖彼得大教堂為查理曼加冕', en:'The Pope crowns Charlemagne in St Peter’s', fr:'Le pape couronne Charlemagne à Saint-Pierre' },
      { y:827, zh:'阿拉伯人開始征服西西里', en:'The Arabs begin the conquest of Sicily', fr:'Les Arabes commencent la conquête de la Sicile' },
      { y:962, zh:'奧托一世加冕為皇帝，義大利北部併入神聖羅馬帝國', en:'Otto I is crowned emperor and northern Italy joins the Holy Roman Empire', fr:'Otton Iᵉʳ est couronné empereur ; le nord de l’Italie entre dans le Saint-Empire' },
    ],
    themes:{
      state:{ zh:'義大利從此分成三塊：北部與中部的倫巴底王國（後來歸法蘭克與神聖羅馬帝國）、羅馬附近的教宗領地，以及南部與威尼斯等仍屬拜占庭的地區。',
        en:'Italy now fell into three parts: the Lombard kingdom in the north and centre (later Frankish and imperial), the papal lands around Rome, and the south, Venice and other areas still under Byzantium.',
        fr:'L’Italie se divise désormais en trois : le royaume lombard au nord et au centre (puis franc et impérial), les terres pontificales autour de Rome, et le Sud, Venise et d’autres régions restées byzantines.' },
      faith:{ zh:'教宗額我略一世組織救濟、與倫巴底人談判，實際上成為羅馬的統治者，並派人到英格蘭傳教。本篤在卡西諾山創立修道院，他的會規成為西方修道生活的範本。',
        en:'Pope Gregory the Great organised famine relief and negotiated with the Lombards, effectively ruling Rome, and sent missionaries to England. Benedict founded the monastery of Monte Cassino, and his Rule became the model of Western monastic life.',
        fr:'Le pape Grégoire le Grand organise les secours et négocie avec les Lombards, gouvernant de fait Rome, et envoie des missionnaires en Angleterre. Benoît fonde le monastère du Mont-Cassin, et sa règle devient le modèle du monachisme occidental.' },
      society:{ zh:'戰爭、瘟疫與入侵讓城市大幅萎縮，羅馬的人口一度跌到幾萬人。南方的阿拉伯西西里卻引進柑橘、甘蔗與灌溉技術，巴勒莫成為地中海最繁華的城市之一。',
        en:'War, plague and invasion shrank the cities dramatically, and Rome’s population fell for a time to a few tens of thousands. In the south, Arab Sicily brought in citrus, sugar cane and irrigation, and Palermo became one of the richest cities of the Mediterranean.',
        fr:'Guerres, épidémies et invasions vident les villes, et Rome tombe un temps à quelques dizaines de milliers d’habitants. Au sud, la Sicile arabe introduit agrumes, canne à sucre et irrigation, et Palerme devient l’une des villes les plus prospères de la Méditerranée.' },
      culture:{ zh:'拉溫納的拜占庭馬賽克是這個時代最燦爛的藝術。修道院保存並抄寫古典拉丁文獻，拉丁語在民間逐漸演變成各地的方言。',
        en:'The Byzantine mosaics of Ravenna are the most dazzling art of the age. Monasteries preserved and copied classical Latin texts, while everyday Latin slowly turned into local dialects.',
        fr:'Les mosaïques byzantines de Ravenne sont l’art le plus éclatant de l’époque. Les monastères conservent et recopient les textes latins classiques, tandis que le latin parlé se transforme peu à peu en dialectes locaux.' },
      world:{ zh:'義大利成了拜占庭、倫巴底、法蘭克與阿拉伯勢力角力的地方。威尼斯、阿瑪菲等港口在夾縫中與東方貿易，為日後的海上共和國打下基礎。',
        en:'Italy became the ground where Byzantines, Lombards, Franks and Arabs contended. Ports such as Venice and Amalfi traded with the East in the gaps between them, laying the foundations of the maritime republics.',
        fr:'L’Italie devient le terrain où s’affrontent Byzantins, Lombards, Francs et Arabes. Des ports comme Venise et Amalfi commercent avec l’Orient dans les interstices, jetant les bases des républiques maritimes.' },
    }
  },
  {
    id:'communes', icon:'⚓', start:1000, end:1300, world:'medieval',
    name:{ zh:'城市共和與海上強權', en:'City Republics and Sea Powers', fr:'Communes et puissances maritimes' },
    summary:{ zh:'十一世紀起，北義大利的城市擺脫主教與貴族，成立自治的「公社」，彼此競爭也聯合對抗皇帝。威尼斯、熱那亞、比薩等海上共和國控制地中海貿易，從十字軍中獲利。南方則由諾曼人建立西西里王國，後來由腓特烈二世與安茹家族統治。',
      en:'From the eleventh century the towns of northern Italy threw off bishops and nobles to form self-governing communes, rivals to one another yet ready to unite against the emperor. Maritime republics such as Venice, Genoa and Pisa controlled Mediterranean trade and profited from the crusades. In the south the Normans founded the Kingdom of Sicily, later ruled by Frederick II and then the Angevins.',
      fr:'Dès le XIᵉ siècle, les villes du nord de l’Italie s’émancipent des évêques et des nobles pour former des communes autonomes, rivales mais capables de s’unir contre l’empereur. Les républiques maritimes, Venise, Gênes, Pise, contrôlent le commerce méditerranéen et profitent des croisades. Au sud, les Normands fondent le royaume de Sicile, gouverné ensuite par Frédéric II puis par les Angevins.' },
    events:[
      { y:1077, zh:'亨利四世在卡諾莎城堡外向教宗悔罪', en:'Henry IV does penance before the Pope at Canossa', fr:'Henri IV fait pénitence devant le pape à Canossa' },
      { y:1088, zh:'波隆那大學出現，被視為歐洲最古老的大學', en:'The University of Bologna emerges, considered the oldest in Europe', fr:'Naissance de l’université de Bologne, considérée comme la plus ancienne d’Europe' },
      { y:1130, zh:'羅傑二世建立西西里王國', en:'Roger II founds the Kingdom of Sicily', fr:'Roger II fonde le royaume de Sicile' },
      { y:1176, zh:'倫巴底聯盟在萊尼亞諾擊敗紅鬍子', en:'The Lombard League defeats Barbarossa at Legnano', fr:'La Ligue lombarde bat Barberousse à Legnano' },
      { y:1204, by:'Enrico Dandolo', zh:'威尼斯主導第四次十字軍攻陷君士坦丁堡', en:'Venice steers the Fourth Crusade to sack Constantinople', fr:'Venise détourne la quatrième croisade sur Constantinople' },
      { y:1250, zh:'腓特烈二世去世', en:'Death of Frederick II', fr:'Mort de Frédéric II' },
      { y:1282, zh:'西西里晚禱起義推翻安茹統治', en:'The Sicilian Vespers overthrow Angevin rule', fr:'Les Vêpres siciliennes renversent les Angevins' },
    ],
    themes:{
      state:{ zh:'公社由市民選出的執政官治理，後來常請外地人擔任「波德斯塔」以避免派系鬥爭。各城分成支持教宗的「教皇派」與支持皇帝的「皇帝派」，內鬥不斷。',
        en:'Communes were run by consuls elected by the citizens and later often hired an outsider as podestà to stand above the factions. Cities split into Guelphs, who backed the Pope, and Ghibellines, who backed the emperor, and feuding never stopped.',
        fr:'Les communes sont dirigées par des consuls élus, puis souvent par un podestat venu d’ailleurs pour se placer au-dessus des factions. Les villes se divisent entre guelfes, partisans du pape, et gibelins, partisans de l’empereur, et les luttes ne cessent jamais.' },
      faith:{ zh:'教宗與皇帝爭奪至高權威。阿西西的方濟各放棄家產、擁抱貧窮，創立方濟會，深刻影響了一般人的信仰；異端與宗教裁判所也在這個時代出現。',
        en:'Popes and emperors fought over supreme authority. Francis of Assisi gave up his inheritance to embrace poverty and founded the Franciscans, transforming ordinary people’s faith; heresy and the Inquisition also appeared in this age.',
        fr:'Papes et empereurs se disputent l’autorité suprême. François d’Assise renonce à son héritage pour embrasser la pauvreté et fonde les Franciscains, transformant la foi des simples fidèles ; hérésies et Inquisition apparaissent aussi à cette époque.' },
      society:{ zh:'義大利商人發明了複式簿記、匯票與保險，佛羅倫斯的金幣「弗羅林」通行全歐洲。北義城市成為歐洲最富裕、人口最密集的地區之一。',
        en:'Italian merchants developed double-entry bookkeeping, bills of exchange and insurance, and Florence’s gold florin circulated throughout Europe. The towns of northern Italy became one of the richest and most densely populated regions of Europe.',
        fr:'Les marchands italiens mettent au point la comptabilité en partie double, la lettre de change et l’assurance, et le florin d’or de Florence circule dans toute l’Europe. Les villes du Nord deviennent l’une des régions les plus riches et les plus peuplées d’Europe.' },
      culture:{ zh:'波隆那大學以研究羅馬法聞名。腓特烈二世在巴勒莫的宮廷聚集了基督徒、穆斯林與猶太學者，「西西里詩派」率先用義大利方言寫詩。',
        en:'Bologna became famous for the study of Roman law. Frederick II’s court at Palermo gathered Christian, Muslim and Jewish scholars, and the Sicilian School of poets was the first to write in an Italian vernacular.',
        fr:'Bologne devient célèbre pour l’étude du droit romain. La cour de Frédéric II à Palerme réunit savants chrétiens, musulmans et juifs, et l’école sicilienne est la première à écrire des poèmes en langue vulgaire italienne.' },
      world:{ zh:'威尼斯與熱那亞在東地中海與黑海建立商站，馬可·波羅從威尼斯出發前往元朝。十字軍讓義大利港口獲得豐厚的運輸與貿易利潤。',
        en:'Venice and Genoa set up trading posts across the eastern Mediterranean and the Black Sea, and Marco Polo set out from Venice for the Mongol court in China. The crusades brought Italian ports rich profits from transport and trade.',
        fr:'Venise et Gênes fondent des comptoirs en Méditerranée orientale et en mer Noire, et Marco Polo part de Venise vers la cour mongole de Chine. Les croisades rapportent aux ports italiens de gros profits de transport et de commerce.' },
    }
  },
  {
    id:'renaissance', icon:'🎨', start:1300, end:1494, world:'renaissance_exploration',
    name:{ zh:'文藝復興', en:'The Renaissance', fr:'La Renaissance' },
    summary:{ zh:'但丁、佩脫拉克與薄伽丘用義大利文寫作，人文主義者重新研讀古典文獻。黑死病奪走大量人口後，佛羅倫斯在梅迪奇家族的主導下，成為文藝復興的中心。米蘭、威尼斯、佛羅倫斯、教宗國與那不勒斯五強在 1454 年簽訂《洛迪和約》，維持了四十年的均勢。',
      en:'Dante, Petrarch and Boccaccio wrote in Italian, and humanists studied classical texts afresh. After the Black Death took a heavy toll, Florence, led by the Medici, became the centre of the Renaissance. The five powers, Milan, Venice, Florence, the Papal States and Naples, signed the Peace of Lodi in 1454 and kept a balance for forty years.',
      fr:'Dante, Pétrarque et Boccace écrivent en italien, et les humanistes relisent les textes antiques. Après les ravages de la peste noire, Florence, menée par les Médicis, devient le centre de la Renaissance. Les cinq puissances, Milan, Venise, Florence, les États pontificaux et Naples, signent en 1454 la paix de Lodi, qui maintient l’équilibre pendant quarante ans.' },
    events:[
      { y:1309, zh:'教廷遷往亞維農', en:'The papacy moves to Avignon', fr:'La papauté s’installe en Avignon' },
      { y:1321, zh:'但丁完成《神曲》後去世', en:'Dante dies after completing the Divine Comedy', fr:'Dante meurt après avoir achevé la Divine Comédie' },
      { y:1348, zh:'黑死病來襲，佛羅倫斯人口減少過半', en:'The Black Death strikes; Florence loses over half its people', fr:'La peste noire frappe ; Florence perd plus de la moitié de sa population' },
      { y:1378, zh:'佛羅倫斯梳毛工人起義', en:'Revolt of the Ciompi wool workers in Florence', fr:'Révolte des Ciompi à Florence' },
      { y:1434, zh:'科西莫·德·梅迪奇主導佛羅倫斯', en:'Cosimo de’ Medici takes control of Florence', fr:'Cosme de Médicis prend le contrôle de Florence' },
      { y:1436, zh:'布魯內萊斯基的大圓頂完成，主教座堂祝聖', en:'Brunelleschi’s dome is completed and the cathedral consecrated', fr:'Achèvement de la coupole de Brunelleschi et consécration de la cathédrale' },
      { y:1454, zh:'《洛迪和約》建立義大利五強均勢', en:'The Peace of Lodi balances Italy’s five powers', fr:'La paix de Lodi équilibre les cinq puissances italiennes' },
      { y:1478, zh:'帕齊陰謀：梅迪奇兄弟在主教座堂遇刺', en:'The Pazzi conspiracy: the Medici brothers are attacked in the cathedral', fr:'Conjuration des Pazzi : les frères Médicis sont attaqués dans la cathédrale' },
      { y:1492, zh:'「偉大的羅倫佐」去世', en:'Death of Lorenzo the Magnificent', fr:'Mort de Laurent le Magnifique' },
    ],
    themes:{
      state:{ zh:'許多城市共和落入家族或傭兵隊長手中，形成世襲的「領主國」，例如米蘭的維斯康提與斯福爾扎。佛羅倫斯名義上仍是共和，實際由梅迪奇家族以金錢與人脈控制。',
        en:'Many city republics fell to families or mercenary captains and became hereditary lordships, such as the Visconti and Sforza of Milan. Florence remained a republic in name but was controlled by the Medici through money and patronage.',
        fr:'Beaucoup de républiques tombent aux mains de familles ou de condottieri et deviennent des seigneuries héréditaires, comme les Visconti et les Sforza à Milan. Florence reste une république de nom, mais les Médicis la contrôlent par l’argent et la clientèle.' },
      faith:{ zh:'教廷在亞維農住了將近七十年，回到羅馬後又出現兩三位教宗同時並立的大分裂。文藝復興的教宗們熱衷藝術與家族政治，教會的權威與道德受到質疑。',
        en:'The papacy spent nearly seventy years in Avignon, and its return to Rome was followed by the Great Schism, with two or three rival popes at once. Renaissance popes devoted themselves to art and family politics, and the Church’s authority and morals came under question.',
        fr:'La papauté passe près de soixante-dix ans en Avignon, et son retour à Rome est suivi du Grand Schisme, avec deux ou trois papes rivaux. Les papes de la Renaissance se consacrent à l’art et aux intérêts familiaux, et l’autorité morale de l’Église est mise en question.' },
      society:{ zh:'黑死病奪走約三分之一以上的人口。梅迪奇銀行在歐洲各地設立分行，富商以贊助教堂與藝術來展現地位與虔誠。',
        en:'The Black Death killed a third or more of the population. The Medici bank opened branches across Europe, and rich merchants displayed their status and piety by funding churches and art.',
        fr:'La peste noire tue un tiers ou davantage de la population. La banque Médicis ouvre des succursales dans toute l’Europe, et les riches marchands affichent leur rang et leur piété en finançant églises et œuvres d’art.' },
      culture:{ zh:'布魯內萊斯基發明線性透視並蓋出大圓頂，多納太羅、馬薩其奧、波提且利重新發現人體與自然。但丁的《神曲》以托斯卡納方言寫成，奠定了現代義大利語的基礎。',
        en:'Brunelleschi worked out linear perspective and built the great dome, while Donatello, Masaccio and Botticelli rediscovered the human body and nature. Dante’s Divine Comedy, written in Tuscan, laid the foundation of modern Italian.',
        fr:'Brunelleschi met au point la perspective linéaire et bâtit la grande coupole, tandis que Donatello, Masaccio et Botticelli redécouvrent le corps et la nature. La Divine Comédie de Dante, écrite en toscan, fonde l’italien moderne.' },
      world:{ zh:'1453 年君士坦丁堡陷落，拜占庭學者帶著希臘文獻逃到義大利。熱那亞出身的哥倫布在 1492 年為西班牙航向美洲，大西洋航路興起，地中海貿易的重要性開始下降。',
        en:'Constantinople fell in 1453, and Byzantine scholars fled to Italy with Greek manuscripts. The Genoese Columbus sailed to the Americas for Spain in 1492; as Atlantic routes rose, Mediterranean trade began to lose importance.',
        fr:'Constantinople tombe en 1453, et des savants byzantins fuient en Italie avec des manuscrits grecs. Le Génois Colomb atteint l’Amérique pour l’Espagne en 1492 ; avec l’essor des routes atlantiques, le commerce méditerranéen commence à décliner.' },
    }
  },
  {
    id:'italianwars', icon:'⚔️', start:1494, end:1559, world:'reformation',
    name:{ zh:'義大利戰爭與盛期文藝復興', en:'The Italian Wars and the High Renaissance', fr:'Les guerres d’Italie et la haute Renaissance' },
    summary:{ zh:'1494 年法王查理八世入侵，打破了義大利的均勢，法國與西班牙、神聖羅馬帝國在半島上爭戰六十多年。同一時間，達文西、米開朗基羅與拉斐爾創作出最偉大的作品。1527 年羅馬遭皇帝的軍隊洗劫，1559 年的和約讓西班牙成為義大利的主宰。',
      en:'Charles VIII of France invaded in 1494 and shattered the Italian balance, and for over sixty years France, Spain and the Holy Roman Empire fought over the peninsula. At the same time Leonardo, Michelangelo and Raphael produced their greatest work. Rome was sacked by the emperor’s troops in 1527, and the peace of 1559 left Spain master of Italy.',
      fr:'Charles VIII envahit l’Italie en 1494 et brise l’équilibre ; pendant plus de soixante ans, la France, l’Espagne et le Saint-Empire se disputent la péninsule. Au même moment, Léonard, Michel-Ange et Raphaël créent leurs chefs-d’œuvre. Rome est mise à sac par les troupes impériales en 1527, et la paix de 1559 fait de l’Espagne la maîtresse de l’Italie.' },
    events:[
      { y:1494, zh:'法王查理八世入侵義大利，梅迪奇家族被逐出佛羅倫斯', en:'Charles VIII invades Italy; the Medici are driven from Florence', fr:'Charles VIII envahit l’Italie ; les Médicis sont chassés de Florence' },
      { y:1498, zh:'薩佛納羅拉被處以火刑；達文西完成〈最後的晚餐〉', en:'Savonarola is burned; Leonardo completes the Last Supper', fr:'Savonarole est brûlé ; Léonard achève la Cène' },
      { y:1504, zh:'米開朗基羅的〈大衛〉立在佛羅倫斯市政廣場', en:'Michelangelo’s David is set up in Florence’s main square', fr:'Le David de Michel-Ange est installé sur la grand-place de Florence' },
      { y:1508, zh:'米開朗基羅開始畫西斯汀禮拜堂天頂', en:'Michelangelo begins the Sistine Chapel ceiling', fr:'Michel-Ange commence le plafond de la chapelle Sixtine' },
      { y:1513, zh:'馬基維利寫成《君王論》', en:'Machiavelli writes The Prince', fr:'Machiavel écrit Le Prince' },
      { y:1527, zh:'羅馬之劫：帝國軍隊洗劫羅馬', en:'The Sack of Rome by imperial troops', fr:'Le sac de Rome par les troupes impériales' },
      { y:1545, by:'Pope Paul III', zh:'特倫托大公會議開幕', en:'The Council of Trent opens', fr:'Ouverture du concile de Trente' },
      { y:1559, zh:'《卡托-康布雷西和約》，西班牙主宰義大利', en:'The Peace of Cateau-Cambrésis leaves Spain dominant in Italy', fr:'La paix du Cateau-Cambrésis consacre la domination espagnole en Italie' },
    ],
    themes:{
      state:{ zh:'義大利各國無力抵抗外國大軍，只能在法國與西班牙之間選邊。馬基維利從佛羅倫斯的失敗中寫出《君王論》，主張君主必須以現實而非道德來治國。',
        en:'The Italian states could not resist foreign armies and could only choose between France and Spain. From Florence’s failure Machiavelli drew The Prince, arguing that a ruler must govern by realism rather than morality.',
        fr:'Les États italiens, incapables de résister aux armées étrangères, ne peuvent que choisir entre la France et l’Espagne. De l’échec florentin, Machiavel tire Le Prince, qui veut que le prince gouverne selon la réalité plutôt que la morale.' },
      faith:{ zh:'道明會修士薩佛納羅拉在佛羅倫斯焚燒「虛榮之物」，最後被處死。宗教改革在北方爆發後，教宗召開特倫托大公會議，開始反宗教改革，羅馬也設立了宗教裁判所。',
        en:'The Dominican friar Savonarola held his “bonfire of the vanities” in Florence and was finally executed. After the Reformation broke out in the north, the papacy called the Council of Trent and launched the Counter-Reformation, setting up the Roman Inquisition.',
        fr:'Le dominicain Savonarole organise à Florence son « bûcher des vanités » avant d’être exécuté. Après l’éclatement de la Réforme au nord, la papauté convoque le concile de Trente et lance la Contre-Réforme, créant l’Inquisition romaine.' },
      society:{ zh:'戰爭帶來掠奪、梅毒與饑荒，羅馬之劫後城市人口大減。威尼斯在 1516 年把猶太人集中到「隔都」，這個詞從此傳遍世界。',
        en:'The wars brought plunder, syphilis and famine, and Rome’s population collapsed after the Sack. In 1516 Venice confined its Jews to the Ghetto, a word that then spread around the world.',
        fr:'Les guerres apportent pillages, syphilis et famines, et la population de Rome s’effondre après le sac. En 1516, Venise regroupe ses Juifs dans le Ghetto, un mot qui fera le tour du monde.' },
      culture:{ zh:'盛期文藝復興的重心移到羅馬：教宗儒略二世委託米開朗基羅畫西斯汀天頂、拉斐爾畫梵蒂岡的房間，並重建聖彼得大教堂。威尼斯的提香則以色彩聞名。',
        en:'The High Renaissance shifted to Rome: Pope Julius II commissioned Michelangelo’s Sistine ceiling and Raphael’s Vatican rooms and began rebuilding St Peter’s. In Venice Titian made his name with colour.',
        fr:'La haute Renaissance se déplace à Rome : Jules II commande le plafond de la Sixtine à Michel-Ange et les Chambres du Vatican à Raphaël, et lance la reconstruction de Saint-Pierre. À Venise, Titien s’impose par la couleur.' },
      world:{ zh:'義大利成為歐洲列強的戰場。新航路讓葡萄牙與西班牙控制香料與白銀貿易，威尼斯的海上霸權開始面對鄂圖曼帝國的強大壓力。',
        en:'Italy became the battlefield of Europe’s great powers. The new sea routes let Portugal and Spain control the spice and silver trades, and Venice’s sea power came under heavy pressure from the Ottomans.',
        fr:'L’Italie devient le champ de bataille des grandes puissances. Les nouvelles routes maritimes donnent au Portugal et à l’Espagne le commerce des épices et de l’argent, et la puissance navale de Venise subit une forte pression ottomane.' },
    }
  },
  {
    id:'spanish', icon:'⛪', start:1559, end:1796, world:'enlightenment_revolution',
    name:{ zh:'外國統治與巴洛克', en:'Foreign Rule and the Baroque', fr:'Dominations étrangères et baroque' },
    summary:{ zh:'西班牙直接統治米蘭、那不勒斯、西西里與薩丁尼亞，十八世紀又換成奧地利與波旁家族。義大利在經濟上逐漸落後北歐，但羅馬的巴洛克藝術、伽利略的科學與威尼斯、那不勒斯的歌劇仍領先歐洲。北方的薩伏依公國則慢慢壯大，成為日後統一的主角。',
      en:'Spain ruled Milan, Naples, Sicily and Sardinia directly, replaced in the eighteenth century by Austria and the Bourbons. Italy fell behind northern Europe economically, yet Rome’s Baroque art, Galileo’s science and the opera of Venice and Naples still led Europe. In the north the Duchy of Savoy slowly grew, the future protagonist of unification.',
      fr:'L’Espagne gouverne directement Milan, Naples, la Sicile et la Sardaigne, remplacée au XVIIIᵉ siècle par l’Autriche et les Bourbons. L’Italie décroche économiquement par rapport à l’Europe du Nord, mais le baroque romain, la science de Galilée et l’opéra de Venise et de Naples restent à l’avant-garde. Au nord, la Savoie grandit lentement : elle sera l’artisan de l’unité.' },
    events:[
      { y:1571, zh:'勒班陀海戰，基督教聯軍擊敗鄂圖曼艦隊', en:'Battle of Lepanto: a Christian fleet defeats the Ottomans', fr:'Bataille de Lépante : la flotte chrétienne bat les Ottomans' },
      { y:1600, zh:'哲學家布魯諾在羅馬被燒死', en:'The philosopher Giordano Bruno is burned in Rome', fr:'Le philosophe Giordano Bruno est brûlé à Rome' },
      { y:1633, zh:'伽利略被宗教裁判所判罪', en:'Galileo is condemned by the Inquisition', fr:'Galilée est condamné par l’Inquisition' },
      { y:1647, zh:'那不勒斯爆發馬薩尼埃洛起義', en:'Masaniello’s revolt in Naples', fr:'Révolte de Masaniello à Naples' },
      { y:1713, zh:'《烏得勒支和約》，薩伏依公爵成為國王', en:'Peace of Utrecht: the Duke of Savoy becomes a king', fr:'Paix d’Utrecht : le duc de Savoie devient roi' },
      { y:1748, zh:'龐貝考古挖掘開始', en:'Excavations begin at Pompeii', fr:'Début des fouilles de Pompéi' },
      { y:1764, zh:'貝加利亞出版《論犯罪與刑罰》，主張廢除死刑與酷刑', en:'Beccaria publishes On Crimes and Punishments against torture and the death penalty', fr:'Beccaria publie Des délits et des peines contre la torture et la peine de mort' },
    ],
    themes:{
      state:{ zh:'半島大部分由外國王室或其親屬統治，只有威尼斯、熱那亞、教宗國與薩伏依保持獨立。薩伏依在 1720 年取得薩丁尼亞，成為「撒丁尼亞王國」。',
        en:'Most of the peninsula was ruled by foreign dynasties or their relatives; only Venice, Genoa, the Papal States and Savoy remained independent. In 1720 Savoy gained Sardinia and became the Kingdom of Sardinia.',
        fr:'La majeure partie de la péninsule est gouvernée par des dynasties étrangères ou leurs parents ; seules Venise, Gênes, les États pontificaux et la Savoie restent indépendants. En 1720, la Savoie obtient la Sardaigne et devient le royaume de Sardaigne.' },
      faith:{ zh:'反宗教改革嚴格管理思想：宗教裁判所審判布魯諾與伽利略，禁書目錄限制出版。另一方面，教會以華麗的巴洛克教堂與遊行打動信徒。',
        en:'The Counter-Reformation policed ideas strictly: the Inquisition tried Bruno and Galileo, and the Index of Forbidden Books restricted publishing. At the same time the Church moved the faithful with lavish Baroque churches and processions.',
        fr:'La Contre-Réforme surveille étroitement les idées : l’Inquisition juge Bruno et Galilée, et l’Index limite l’édition. Dans le même temps, l’Église touche les fidèles par des églises baroques somptueuses et des processions.' },
      society:{ zh:'大西洋貿易興起後，義大利的紡織與銀行業被英國與荷蘭超越，資金轉向土地。1630 年與 1656 年的瘟疫重創米蘭與那不勒斯；南方的大莊園與貧困問題日益嚴重。',
        en:'With the rise of Atlantic trade, Italian textiles and banking were overtaken by England and the Dutch, and capital moved into land. The plagues of 1630 and 1656 devastated Milan and Naples, and the south’s great estates and poverty deepened.',
        fr:'Avec l’essor du commerce atlantique, le textile et la banque italiens sont dépassés par l’Angleterre et les Provinces-Unies, et les capitaux se replient sur la terre. Les pestes de 1630 et 1656 ravagent Milan et Naples, et les latifundia et la misère du Sud s’aggravent.' },
      culture:{ zh:'貝尼尼與波洛米尼把羅馬打造成巴洛克之都，卡拉瓦喬以明暗對比震撼畫壇。蒙台威爾第開創歌劇，韋瓦第在威尼斯寫下《四季》；十八世紀的壯遊讓歐洲貴族紛紛來義大利學習古典。',
        en:'Bernini and Borromini made Rome the capital of the Baroque, and Caravaggio stunned painting with his light and shadow. Monteverdi pioneered opera and Vivaldi wrote The Four Seasons in Venice; in the eighteenth century the Grand Tour brought Europe’s nobility to Italy to study antiquity.',
        fr:'Le Bernin et Borromini font de Rome la capitale du baroque, et le Caravage bouleverse la peinture par son clair-obscur. Monteverdi invente l’opéra et Vivaldi écrit Les Quatre Saisons à Venise ; au XVIIIᵉ siècle, le Grand Tour amène l’aristocratie européenne en Italie étudier l’Antiquité.' },
      world:{ zh:'威尼斯與西班牙在勒班陀擊敗鄂圖曼艦隊，但威尼斯仍陸續失去塞浦路斯與克里特。義大利的王位在歐洲各王室之間交換，成為王位繼承戰爭中的籌碼。',
        en:'Venice and Spain beat the Ottoman fleet at Lepanto, yet Venice still lost Cyprus and Crete. Italian thrones were traded among Europe’s dynasties as bargaining chips in the wars of succession.',
        fr:'Venise et l’Espagne battent la flotte ottomane à Lépante, mais Venise perd tout de même Chypre et la Crète. Les trônes italiens s’échangent entre dynasties européennes comme monnaie d’échange des guerres de succession.' },
    }
  },
  {
    id:'risorgimento', icon:'🇮🇹', start:1796, end:1861, world:'industrial',
    name:{ zh:'拿破崙與復興運動', en:'Napoleon and the Risorgimento', fr:'Napoléon et le Risorgimento' },
    summary:{ zh:'拿破崙在 1796 年進軍義大利，終結了威尼斯共和國，建立「義大利王國」，也帶來新的法律與民族意識。拿破崙倒台後舊君主復辟，奧地利主導半島。復興運動的三位主角：理想主義的馬志尼、外交家加富爾與遊擊英雄加里波底，最終在 1861 年建立義大利王國。',
      en:'Napoleon marched into Italy in 1796, ended the Venetian Republic and created a “Kingdom of Italy”, bringing new laws and a sense of nationhood. After his fall the old rulers returned and Austria dominated the peninsula. The three heroes of the Risorgimento, the idealist Mazzini, the diplomat Cavour and the guerrilla leader Garibaldi, finally created the Kingdom of Italy in 1861.',
      fr:'Napoléon entre en Italie en 1796, met fin à la République de Venise et crée un « royaume d’Italie », apportant de nouvelles lois et une conscience nationale. Après sa chute, les anciens souverains reviennent et l’Autriche domine la péninsule. Les trois héros du Risorgimento, l’idéaliste Mazzini, le diplomate Cavour et le chef de guérilla Garibaldi, fondent enfin le royaume d’Italie en 1861.' },
    events:[
      { y:1797, zh:'拿破崙終結威尼斯共和國', en:'Napoleon ends the Venetian Republic', fr:'Napoléon met fin à la République de Venise' },
      { y:1805, zh:'拿破崙在米蘭加冕為義大利國王', en:'Napoleon is crowned King of Italy in Milan', fr:'Napoléon est couronné roi d’Italie à Milan' },
      { y:1815, zh:'維也納會議恢復舊君主，奧地利取得倫巴底與威尼托', en:'The Congress of Vienna restores the old rulers; Austria takes Lombardy and Venetia', fr:'Le congrès de Vienne restaure les anciens souverains ; l’Autriche prend la Lombardie et la Vénétie' },
      { y:1831, by:'Giuseppe Mazzini', zh:'馬志尼創立「青年義大利」', en:'Mazzini founds Young Italy', fr:'Mazzini fonde la Jeune Italie' },
      { y:1848, zh:'革命席捲義大利，第一次獨立戰爭', en:'Revolutions sweep Italy; the First War of Independence', fr:'Les révolutions embrasent l’Italie ; première guerre d’indépendance' },
      { y:1849, by:'Giuseppe Mazzini', zh:'羅馬共和國成立，數月後被法軍推翻', en:'The Roman Republic is proclaimed and crushed by French troops months later', fr:'Proclamation de la République romaine, écrasée par les Français quelques mois plus tard' },
      { y:1859, zh:'第二次獨立戰爭，取得倫巴底', en:'The Second War of Independence wins Lombardy', fr:'La deuxième guerre d’indépendance gagne la Lombardie' },
      { y:1860, by:'Giuseppe Garibaldi', zh:'加里波底率「千人隊」征服兩西西里王國', en:'Garibaldi’s Thousand conquer the Kingdom of the Two Sicilies', fr:'Les Mille de Garibaldi conquièrent le royaume des Deux-Siciles' },
      { y:1861, zh:'義大利王國宣告成立', en:'The Kingdom of Italy is proclaimed', fr:'Proclamation du royaume d’Italie' },
    ],
    themes:{
      state:{ zh:'統一是以撒丁尼亞王國吞併其他邦國的方式完成：每一次都以公投追認，憲法沿用薩伏依的《阿爾貝爾蒂諾憲章》，首都先設在杜林。羅馬與威尼斯尚未加入。',
        en:'Unification came as the Kingdom of Sardinia annexed the other states one by one, each time confirmed by plebiscite; Savoy’s Statuto Albertino became the constitution and Turin the first capital. Rome and Venice were not yet included.',
        fr:'L’unité se fait par l’annexion successive des autres États au royaume de Sardaigne, chaque fois ratifiée par plébiscite ; le Statut albertin devient la constitution et Turin la première capitale. Rome et Venise n’en font pas encore partie.' },
      faith:{ zh:'教宗庇護九世起初被視為改革派，1848 年後轉為保守，拒絕任何統一方案。教宗國成為統一最大的障礙，由法軍駐守羅馬保護。',
        en:'Pope Pius IX was at first seen as a reformer but turned conservative after 1848 and rejected every plan for unity. The Papal States became the greatest obstacle to unification, with French troops guarding Rome.',
        fr:'Pie IX passe d’abord pour un réformateur, mais devient conservateur après 1848 et refuse tout projet d’unité. Les États pontificaux deviennent le principal obstacle à l’unification, Rome étant protégée par une garnison française.' },
      society:{ zh:'北義開始修鐵路、發展紡織，南方則以大莊園與農民為主。統一時只有極少數人說標準義大利語，大多數人說各地方言；據說阿澤利奧說過：「我們創造了義大利，現在得創造義大利人。」',
        en:'The north began building railways and textile mills, while the south remained a land of great estates and peasants. At unification only a small minority spoke standard Italian, most people using regional dialects; Massimo d’Azeglio is credited with saying, “We have made Italy, now we must make Italians.”',
        fr:'Le Nord construit chemins de fer et filatures, tandis que le Sud reste un pays de latifundia et de paysans. À l’unification, seule une petite minorité parle l’italien standard ; on prête à Massimo d’Azeglio le mot : « Nous avons fait l’Italie, il faut maintenant faire les Italiens. »' },
      culture:{ zh:'曼佐尼的小說《約婚夫婦》以佛羅倫斯的語言改寫，推動了共同的義大利語。威爾第的歌劇被當成愛國象徵，「VIVA VERDI」也被解讀為「義大利國王維托里奧·埃馬努埃萬歲」。',
        en:'Manzoni rewrote his novel The Betrothed in the language of Florence, promoting a shared Italian. Verdi’s operas became patriotic symbols, and “VIVA VERDI” was read as “Long live Victor Emmanuel, King of Italy”.',
        fr:'Manzoni réécrit Les Fiancés dans la langue de Florence, favorisant un italien commun. Les opéras de Verdi deviennent des symboles patriotiques, et « VIVA VERDI » se lit « Vive Victor-Emmanuel roi d’Italie ».' },
      world:{ zh:'加富爾讓撒丁尼亞參加克里米亞戰爭，換取在國際會議上發言，再與法國的拿破崙三世結盟，以割讓尼斯與薩伏依為代價擊敗奧地利。',
        en:'Cavour sent Sardinian troops to the Crimean War to win a voice at the peace conference, then allied with Napoleon III of France, ceding Nice and Savoy in return for help in defeating Austria.',
        fr:'Cavour envoie des troupes sardes en Crimée pour obtenir voix au chapitre lors de la paix, puis s’allie à Napoléon III, cédant Nice et la Savoie en échange de son aide contre l’Autriche.' },
    }
  },
  {
    id:'liberal', icon:'🚢', start:1861, end:1922, world:'industrial',
    name:{ zh:'自由主義王國', en:'The Liberal Kingdom', fr:'Le royaume libéral' },
    summary:{ zh:'義大利在 1866 年取得威尼斯，1870 年攻下羅馬，完成統一。新國家面對巨大的南北差距，南方的「土匪」叛亂、貧困與高稅率，促使上千萬人移民美洲。二十世紀初北方工業起飛，1915 年義大利加入第一次世界大戰，雖然獲勝，卻付出六十多萬人陣亡的代價，戰後社會陷入動盪。',
      en:'Italy gained Venice in 1866 and took Rome in 1870, completing unification. The new state faced a huge north-south gap; brigandage in the south, poverty and heavy taxes drove more than ten million people to emigrate to the Americas. Northern industry took off in the early twentieth century, and Italy joined the First World War in 1915; it ended on the winning side but with over 600,000 dead, and post-war society was thrown into turmoil.',
      fr:'L’Italie obtient Venise en 1866 et prend Rome en 1870, achevant l’unité. Le nouvel État affronte un énorme écart Nord-Sud ; le brigandage du Sud, la misère et la lourde fiscalité poussent plus de dix millions de personnes à émigrer vers les Amériques. L’industrie du Nord décolle au début du XXᵉ siècle, et l’Italie entre dans la Première Guerre mondiale en 1915 ; victorieuse, elle compte plus de 600 000 morts, et la société d’après-guerre plonge dans le chaos.' },
    events:[
      { y:1866, zh:'第三次獨立戰爭，取得威尼斯', en:'The Third War of Independence brings Venice', fr:'La troisième guerre d’indépendance apporte Venise' },
      { y:1870, zh:'攻破庇亞門，羅馬併入義大利', en:'Troops breach the Porta Pia and Rome joins Italy', fr:'Brèche de la Porta Pia : Rome rejoint l’Italie' },
      { y:1878, zh:'翁貝托一世即位', en:'Umberto I comes to the throne', fr:'Avènement d’Humbert Iᵉʳ' },
      { y:1896, zh:'阿杜瓦之戰，義大利敗給衣索比亞', en:'Battle of Adwa: Italy is defeated by Ethiopia', fr:'Bataille d’Adoua : l’Italie est battue par l’Éthiopie' },
      { y:1900, by:'Umberto I', zh:'翁貝托一世被無政府主義者刺殺', en:'Umberto I is assassinated by an anarchist', fr:'Humbert Iᵉʳ est assassiné par un anarchiste' },
      { y:1911, zh:'義大利入侵利比亞', en:'Italy invades Libya', fr:'L’Italie envahit la Libye' },
      { y:1912, zh:'男性普選', en:'Universal male suffrage', fr:'Suffrage universel masculin' },
      { y:1915, zh:'義大利加入第一次世界大戰', en:'Italy enters the First World War', fr:'L’Italie entre dans la Première Guerre mondiale' },
      { y:1917, zh:'卡波雷托戰役慘敗', en:'Disaster at Caporetto', fr:'Désastre de Caporetto' },
    ],
    themes:{
      state:{ zh:'統一後採高度中央集權，起初只有約百分之二的人有投票權。議會由自由派菁英把持，以「轉型主義」拉攏反對派議員；喬利蒂時代推動社會改革與普選。',
        en:'United Italy was highly centralised, and at first only about two per cent of people could vote. Parliament was run by liberal elites who co-opted opponents through trasformismo; the Giolitti era brought social reforms and universal male suffrage.',
        fr:'L’Italie unie est très centralisée, et au début à peine deux pour cent de la population vote. Le Parlement est tenu par des élites libérales qui récupèrent leurs adversaires par le transformisme ; l’ère Giolitti apporte réformes sociales et suffrage universel masculin.' },
      faith:{ zh:'羅馬被攻下後，教宗自稱「梵蒂岡的囚徒」，拒絕承認義大利，並一度禁止天主教徒參加國家選舉。教會與國家的對立持續了將近六十年。',
        en:'After Rome fell the Pope called himself the “prisoner of the Vatican”, refused to recognise Italy and for a time forbade Catholics to vote in national elections. The quarrel between Church and state lasted nearly sixty years.',
        fr:'Après la prise de Rome, le pape se dit « prisonnier du Vatican », refuse de reconnaître l’Italie et interdit un temps aux catholiques de voter aux élections nationales. Le conflit entre l’Église et l’État dure près de soixante ans.' },
      society:{ zh:'1876 至 1915 年間約有一千四百萬人移民出國，前往美國、阿根廷與巴西。北方米蘭、杜林、熱那亞形成「工業三角」，飛雅特、倍耐力等企業在這時創立。',
        en:'Between 1876 and 1915 some fourteen million people emigrated, to the United States, Argentina and Brazil. In the north Milan, Turin and Genoa formed the “industrial triangle”, and firms such as Fiat and Pirelli were founded.',
        fr:'Entre 1876 et 1915, quelque quatorze millions de personnes émigrent vers les États-Unis, l’Argentine et le Brésil. Au nord, Milan, Turin et Gênes forment le « triangle industriel », et des entreprises comme Fiat et Pirelli voient le jour.' },
      culture:{ zh:'威爾第與普契尼的歌劇風靡全球，蒙特梭利在羅馬開辦第一所「兒童之家」。1909 年馬里內蒂發表〈未來主義宣言〉，歌頌速度、機器與戰爭。',
        en:'The operas of Verdi and Puccini conquered the world, and Maria Montessori opened her first Children’s House in Rome. In 1909 Marinetti issued the Futurist Manifesto, glorifying speed, machines and war.',
        fr:'Les opéras de Verdi et de Puccini conquièrent le monde, et Maria Montessori ouvre à Rome sa première Maison des enfants. En 1909, Marinetti publie le Manifeste du futurisme, qui exalte la vitesse, les machines et la guerre.' },
      world:{ zh:'義大利想成為列強，在東非建立殖民地，卻在阿杜瓦敗給衣索比亞。一戰後雖然取得特倫托與的里雅斯特，民族主義者仍認為這是「殘缺的勝利」，為法西斯主義鋪路。',
        en:'Italy sought great-power status with colonies in East Africa but was defeated by Ethiopia at Adwa. After the First World War it gained Trento and Trieste, yet nationalists called it a “mutilated victory”, paving the way for fascism.',
        fr:'L’Italie veut devenir une grande puissance et se taille des colonies en Afrique de l’Est, mais elle est battue par l’Éthiopie à Adoua. Après 1918, elle obtient Trente et Trieste, mais les nationalistes parlent de « victoire mutilée », ouvrant la voie au fascisme.' },
    }
  },
  {
    id:'fascism', icon:'⬛', start:1922, end:1945, world:'worldwar',
    name:{ zh:'法西斯義大利', en:'Fascist Italy', fr:'L’Italie fasciste' },
    summary:{ zh:'墨索里尼在 1922 年「進軍羅馬」後被國王任命為首相，幾年內建立一黨專政，法西斯主義的名稱就來自義大利。他與教宗和解、侵略衣索比亞，再與希特勒結盟。1943 年盟軍登陸後墨索里尼被推翻，義大利陷入內戰與德軍占領，1945 年抵抗運動與盟軍解放全國。',
      en:'After the 1922 “March on Rome” Mussolini was appointed prime minister by the king and within a few years built a one-party state; the very word fascism comes from Italy. He made peace with the Pope, invaded Ethiopia and allied with Hitler. After the Allied landings of 1943 Mussolini was overthrown, Italy fell into civil war and German occupation, and in 1945 the Resistance and the Allies liberated the country.',
      fr:'Après la « marche sur Rome » de 1922, Mussolini est nommé président du Conseil par le roi et instaure en quelques années un régime de parti unique ; le mot même de fascisme vient d’Italie. Il se réconcilie avec le pape, envahit l’Éthiopie et s’allie à Hitler. Après les débarquements alliés de 1943, Mussolini est renversé, l’Italie sombre dans la guerre civile et l’occupation allemande, et en 1945 la Résistance et les Alliés libèrent le pays.' },
    events:[
      { y:1922, zh:'進軍羅馬，墨索里尼出任首相', en:'The March on Rome: Mussolini becomes prime minister', fr:'Marche sur Rome : Mussolini devient président du Conseil' },
      { y:1924, zh:'社會黨議員馬泰奧蒂遭法西斯分子殺害', en:'The socialist deputy Matteotti is murdered by fascists', fr:'Le député socialiste Matteotti est assassiné par des fascistes' },
      { y:1929, zh:'《拉特朗條約》，梵蒂岡城國成立', en:'The Lateran Treaty creates Vatican City', fr:'Les accords du Latran créent l’État de la Cité du Vatican' },
      { y:1935, zh:'入侵衣索比亞', en:'Italy invades Ethiopia', fr:'L’Italie envahit l’Éthiopie' },
      { y:1938, zh:'頒布種族法，迫害猶太人', en:'The racial laws persecute Jews', fr:'Les lois raciales persécutent les Juifs' },
      { y:1940, zh:'義大利參加第二次世界大戰', en:'Italy enters the Second World War', fr:'L’Italie entre dans la Seconde Guerre mondiale' },
      { y:1943, zh:'盟軍登陸西西里，墨索里尼被推翻，德軍占領北方', en:'The Allies land in Sicily, Mussolini is overthrown and Germany occupies the north', fr:'Débarquement allié en Sicile, chute de Mussolini, occupation allemande du Nord' },
      { y:1945, zh:'4 月 25 日解放，墨索里尼被游擊隊處決', en:'Liberation on 25 April; Mussolini is executed by partisans', fr:'Libération le 25 avril ; Mussolini est exécuté par les partisans' },
    ],
    themes:{
      state:{ zh:'墨索里尼取消其他政黨與自由選舉，以祕密警察與流放壓制反對者，但國王與軍隊仍保有一定權力，這也是他在 1943 年被國王撤職的原因。',
        en:'Mussolini abolished other parties and free elections and used secret police and internal exile against opponents, but the king and the army kept some power, which is why the king could dismiss him in 1943.',
        fr:'Mussolini supprime les autres partis et les élections libres et réprime les opposants par la police secrète et le confino, mais le roi et l’armée gardent une part de pouvoir, ce qui permet au roi de le destituer en 1943.' },
      faith:{ zh:'1929 年的《拉特朗條約》讓教宗承認義大利，梵蒂岡成為獨立國家，天主教成為國教。1938 年的種族法則剝奪猶太人的權利，1943 年後約八千名猶太人被押往集中營。',
        en:'The Lateran Treaty of 1929 saw the Pope recognise Italy, made the Vatican an independent state and Catholicism the state religion. The racial laws of 1938 stripped Jews of their rights, and after 1943 some eight thousand Jews were deported to the camps.',
        fr:'Les accords du Latran de 1929 voient le pape reconnaître l’Italie, font du Vatican un État indépendant et du catholicisme la religion d’État. Les lois raciales de 1938 privent les Juifs de leurs droits, et après 1943 quelque huit mille Juifs sont déportés.' },
      society:{ zh:'法西斯政權以「統合主義」把勞資雙方納入國家組織，推動排乾沼澤、興建公共工程與「穀物之戰」。宣傳把墨索里尼塑造成無所不能的「領袖」。',
        en:'The regime folded employers and workers into state-run corporations and pushed land reclamation, public works and the “Battle for Grain”. Propaganda made Mussolini the all-powerful Duce.',
        fr:'Le régime intègre patrons et ouvriers dans des corporations d’État et lance assèchement des marais, grands travaux et « bataille du blé ». La propagande fait de Mussolini le Duce tout-puissant.' },
      culture:{ zh:'政權建造羅馬的 EUR 新區與大道，以古羅馬為模範宣揚帝國夢。異議知識分子如葛蘭西在獄中寫下《獄中札記》，影響了二十世紀的政治思想。',
        en:'The regime built Rome’s EUR district and grand avenues, using ancient Rome to promote its imperial dream. Dissidents such as Gramsci wrote in prison; his Prison Notebooks shaped twentieth-century political thought.',
        fr:'Le régime construit le quartier de l’EUR et de grandes avenues à Rome, s’appuyant sur la Rome antique pour son rêve impérial. Des opposants comme Gramsci écrivent en prison ; ses Cahiers de prison marquent la pensée politique du XXᵉ siècle.' },
      world:{ zh:'義大利入侵衣索比亞並使用毒氣，又併吞阿爾巴尼亞，與德國結成「軸心」。戰爭中義軍在希臘、北非與蘇聯接連失利，1943 年後抵抗運動與盟軍並肩作戰。',
        en:'Italy invaded Ethiopia, using poison gas, annexed Albania and formed the Axis with Germany. In the war Italian forces suffered defeats in Greece, North Africa and the Soviet Union, and after 1943 the Resistance fought alongside the Allies.',
        fr:'L’Italie envahit l’Éthiopie en utilisant des gaz, annexe l’Albanie et forme l’Axe avec l’Allemagne. Pendant la guerre, ses armées sont battues en Grèce, en Afrique du Nord et en URSS, et après 1943 la Résistance combat aux côtés des Alliés.' },
    }
  },
  {
    id:'firstrepublic', icon:'🛵', start:1945, end:1992, world:'coldwar',
    name:{ zh:'第一共和', en:'The First Republic', fr:'La Première République' },
    summary:{ zh:'1946 年公投廢除君主制，義大利成為共和國。基督教民主黨長期執政，西歐最大的共產黨則是最大的反對黨。五、六十年代的「經濟奇蹟」讓義大利從農業國變成工業強國；七十年代左右翼恐怖主義的「鉛之年代」讓國家陷入不安。',
      en:'A 1946 referendum abolished the monarchy and Italy became a republic. The Christian Democrats governed for decades, with Western Europe’s largest Communist Party as the main opposition. The “economic miracle” of the fifties and sixties turned Italy from a farming country into an industrial power, while the left- and right-wing terrorism of the 1970s, the “Years of Lead”, shook the country.',
      fr:'Le référendum de 1946 abolit la monarchie et l’Italie devient une république. La Démocratie chrétienne gouverne pendant des décennies, face au plus grand parti communiste d’Europe occidentale. Le « miracle économique » des années 1950 et 1960 fait d’un pays agricole une puissance industrielle, tandis que le terrorisme rouge et noir des « années de plomb » ébranle le pays dans les années 1970.' },
    events:[
      { y:1946, zh:'公投廢除君主制，成立共和國', en:'A referendum abolishes the monarchy and creates the Republic', fr:'Un référendum abolit la monarchie et crée la République' },
      { y:1948, zh:'共和國憲法生效', en:'The republican constitution comes into force', fr:'Entrée en vigueur de la Constitution républicaine' },
      { y:1957, zh:'在羅馬簽署《羅馬條約》，成立歐洲經濟共同體', en:'The Treaties of Rome found the European Economic Community', fr:'Les traités de Rome fondent la Communauté économique européenne' },
      { y:1960, zh:'羅馬奧運；費里尼的《生活的甜蜜》上映', en:'The Rome Olympics; Fellini’s La Dolce Vita', fr:'Jeux olympiques de Rome ; La Dolce Vita de Fellini' },
      { y:1978, by:'Aldo Moro', zh:'前總理莫羅被赤軍旅綁架殺害', en:'Former prime minister Aldo Moro is kidnapped and murdered by the Red Brigades', fr:'L’ancien président du Conseil Aldo Moro est enlevé et tué par les Brigades rouges' },
      { y:1986, zh:'巴勒莫的黑手黨「大審判」開庭', en:'The Mafia “maxi-trial” opens in Palermo', fr:'Ouverture du « maxi-procès » de la Mafia à Palerme' },
    ],
    themes:{
      state:{ zh:'憲法採議會制，政府平均每年換一次，但基督教民主黨始終是執政核心。冷戰下共產黨雖然得票率高，卻被排除在中央政府之外。',
        en:'The constitution set up a parliamentary system; governments changed about once a year, but the Christian Democrats were always at the core. In the Cold War the Communists won large votes yet were kept out of national government.',
        fr:'La Constitution instaure un régime parlementaire ; les gouvernements changent environ chaque année, mais la Démocratie chrétienne en reste toujours le cœur. Pendant la guerre froide, les communistes obtiennent beaucoup de voix mais restent exclus du gouvernement.' },
      faith:{ zh:'教會與基督教民主黨關係密切。1962 至 1965 年的梵蒂岡第二次大公會議改革了天主教，彌撒開始使用各地語言；1970 年代義大利以公投通過離婚與墮胎的合法化。',
        en:'The Church was closely tied to the Christian Democrats. The Second Vatican Council of 1962 to 1965 reformed Catholicism and brought Mass in local languages, and in the 1970s Italians legalised divorce and abortion, confirmed by referendums.',
        fr:'L’Église est étroitement liée à la Démocratie chrétienne. Le concile Vatican II, de 1962 à 1965, réforme le catholicisme et introduit la messe en langue vernaculaire, et dans les années 1970 les Italiens légalisent divorce et avortement, confirmés par référendum.' },
      society:{ zh:'數百萬南方人北上到工廠工作，偉士牌機車與飛雅特 500 成為大眾生活的象徵。南方的發展仍然落後，黑手黨與政治、經濟的勾結根深柢固。',
        en:'Millions of southerners moved north to work in the factories, and the Vespa and the Fiat 500 became symbols of everyday life. The south still lagged behind, and the Mafia’s ties to politics and business ran deep.',
        fr:'Des millions de méridionaux montent travailler dans les usines du Nord, et la Vespa et la Fiat 500 deviennent les symboles de la vie quotidienne. Le Sud reste en retard, et les liens de la Mafia avec la politique et l’économie sont profonds.' },
      culture:{ zh:'新寫實主義電影、費里尼、安東尼奧尼與萊昂內的電影影響全世界；卡爾維諾、艾可等作家與義大利設計、時尚在國際上大放異彩。',
        en:'Neorealist cinema and the films of Fellini, Antonioni and Leone influenced the world, while writers such as Calvino and Eco, and Italian design and fashion, won international fame.',
        fr:'Le néoréalisme et les films de Fellini, Antonioni et Leone influencent le monde entier, tandis que des écrivains comme Calvino et Eco, ainsi que le design et la mode italiens, rayonnent internationalement.' },
      world:{ zh:'義大利是北約與歐洲共同體的創始成員，《羅馬條約》就在羅馬簽署。它從戰敗國重新融入西方，並成為歐洲整合的堅定支持者。',
        en:'Italy was a founding member of NATO and the European Community, whose founding treaties were signed in Rome. From defeat it was reintegrated into the West and became a steadfast supporter of European integration.',
        fr:'L’Italie est membre fondateur de l’OTAN et de la Communauté européenne, dont les traités fondateurs sont signés à Rome. De pays vaincu, elle se réintègre à l’Occident et devient un soutien constant de la construction européenne.' },
    }
  },
  {
    id:'secondrepublic', icon:'🍝', start:1992, end:2026, world:'contemporary',
    name:{ zh:'第二共和', en:'The Second Republic', fr:'La Seconde République' },
    summary:{ zh:'1992 年米蘭檢察官揭發「賄賂之都」醜聞，「淨手運動」讓戰後的主要政黨相繼瓦解；同年法官法爾科內與博爾塞利諾遭黑手黨炸死。媒體大亨貝魯斯柯尼主導政壇近二十年，義大利加入歐元，卻長期面臨經濟停滯與高額國債。2022 年梅洛尼成為第一位女總理。',
      en:'In 1992 Milan prosecutors exposed the “Bribesville” scandal, and the Clean Hands investigations brought down the main post-war parties; the same year the judges Falcone and Borsellino were killed by Mafia bombs. The media tycoon Berlusconi dominated politics for nearly twenty years, and Italy joined the euro but has long struggled with stagnation and heavy public debt. In 2022 Giorgia Meloni became the first woman prime minister.',
      fr:'En 1992, les juges de Milan révèlent le scandale « Tangentopoli », et l’opération Mains propres fait tomber les grands partis d’après-guerre ; la même année, les juges Falcone et Borsellino sont tués par des attentats mafieux. Le magnat des médias Berlusconi domine la politique pendant près de vingt ans, et l’Italie entre dans l’euro mais souffre longtemps de stagnation et d’une lourde dette. En 2022, Giorgia Meloni devient la première femme présidente du Conseil.' },
    events:[
      { y:1992, zh:'「淨手運動」揭發政治貪腐；法爾科內與博爾塞利諾遇害', en:'Clean Hands exposes political corruption; Falcone and Borsellino are murdered', fr:'Mains propres révèle la corruption ; Falcone et Borsellino sont assassinés' },
      { y:1994, zh:'貝魯斯柯尼首次出任總理', en:'Berlusconi becomes prime minister for the first time', fr:'Berlusconi devient président du Conseil pour la première fois' },
      { y:1999, zh:'義大利加入歐元區', en:'Italy joins the euro', fr:'L’Italie entre dans la zone euro' },
      { y:2011, zh:'歐債危機中貝魯斯柯尼下台，蒙蒂組成技術官僚政府', en:'In the euro crisis Berlusconi resigns and Monti forms a technocratic government', fr:'Pendant la crise de l’euro, Berlusconi démissionne et Monti forme un gouvernement technique' },
      { y:2020, zh:'義大利成為歐洲第一個全國封城的國家', en:'Italy becomes the first European country to impose a national lockdown', fr:'L’Italie est le premier pays européen à imposer un confinement national' },
      { y:2021, zh:'前歐洲央行行長德拉吉組成聯合政府', en:'Former ECB president Mario Draghi forms a unity government', fr:'L’ancien président de la BCE Mario Draghi forme un gouvernement d’union' },
      { y:2022, zh:'梅洛尼成為第一位女總理', en:'Giorgia Meloni becomes the first woman prime minister', fr:'Giorgia Meloni devient la première femme présidente du Conseil' },
    ],
    themes:{
      state:{ zh:'選舉制度屢次修改，政黨不斷重組，形成中右與中左兩大陣營，後來又出現五星運動等反建制力量。政府更迭依然頻繁，總統常在危機中扮演調停角色。',
        en:'The electoral system was changed again and again and parties kept regrouping into centre-right and centre-left camps, later joined by anti-establishment forces such as the Five Star Movement. Governments still changed often, and the president frequently stepped in to mediate in crises.',
        fr:'Le mode de scrutin change à plusieurs reprises et les partis se recomposent en blocs de centre droit et de centre gauche, rejoints plus tard par des forces antisystème comme le Mouvement 5 étoiles. Les gouvernements changent toujours souvent, et le président joue fréquemment les médiateurs en temps de crise.' },
      faith:{ zh:'天主教在日常生活中的影響逐漸減弱，2016 年承認同性伴侶的民事結合。2013 年本篤十六世辭職，這是近六百年來第一位主動退位的教宗。',
        en:'Catholicism’s hold on daily life weakened, and civil unions for same-sex couples were recognised in 2016. In 2013 Benedict XVI resigned, the first pope to step down in nearly six hundred years.',
        fr:'L’emprise du catholicisme sur la vie quotidienne s’affaiblit, et les unions civiles entre personnes de même sexe sont reconnues en 2016. En 2013, Benoît XVI renonce, premier pape à démissionner depuis près de six siècles.' },
      society:{ zh:'經濟成長長期停滯，國債占國內生產毛額的比例名列歐洲前茅，年輕人大量出國工作。義大利是全世界人口老化最嚴重的國家之一，同時成為地中海難民的主要上岸地。',
        en:'Growth stalled for years, public debt as a share of GDP was among the highest in Europe, and many young people left to work abroad. Italy has one of the oldest populations in the world and has become a main landing point for migrants crossing the Mediterranean.',
        fr:'La croissance stagne pendant des années, la dette publique rapportée au PIB est parmi les plus élevées d’Europe, et beaucoup de jeunes partent travailler à l’étranger. L’Italie a l’une des populations les plus âgées du monde et devient un point d’arrivée majeur des migrants traversant la Méditerranée.' },
      culture:{ zh:'義大利擁有全世界最多的世界遺產之一，觀光業至關重要；威尼斯、佛羅倫斯等城市面臨過度觀光的壓力，威尼斯在 2024 年開始對一日遊客收費。義大利飲食與時尚品牌在全球大受歡迎。',
        en:'Italy has one of the largest numbers of World Heritage sites, and tourism is vital; Venice and Florence struggle with overtourism, and in 2024 Venice began charging day-trippers an entry fee. Italian food and fashion brands are popular worldwide.',
        fr:'L’Italie compte l’un des plus grands nombres de sites du patrimoine mondial, et le tourisme est essentiel ; Venise et Florence souffrent du surtourisme, et Venise fait payer depuis 2024 un droit d’entrée aux visiteurs à la journée. La cuisine et les marques de mode italiennes sont prisées dans le monde entier.' },
      world:{ zh:'義大利是歐元區第三大經濟體，在歐債危機中一度被視為最大的風險。它是地中海移民問題的前線，也是歐盟與北約中立場較為親近大西洋兩岸合作的成員。',
        en:'Italy is the euro area’s third-largest economy and was at one point seen as its biggest risk in the debt crisis. It is on the front line of Mediterranean migration and a firmly Atlanticist member of the EU and NATO.',
        fr:'L’Italie est la troisième économie de la zone euro et fut un temps considérée comme son plus grand risque pendant la crise de la dette. Elle est en première ligne des migrations en Méditerranée et un membre résolument atlantiste de l’UE et de l’OTAN.' },
    }
  },
  ]
},
];

const CX_UI = {
  zh:{ tab:'國別史', head:'國別史', sub:'挑一個國家，沿著「時代」與「主題」兩條軸線閱讀它的歷史。',
       more:'更多國家陸續加入', linear:'線性敘事', linearDesc:'依時代順序閱讀，每個時期附上五個主題切面。',
       thematic:'主題敘事', thematicDesc:'挑一條主題線索，看它如何貫穿每個時代。',
       events:'關鍵事件', facets:'主題切面', trivia:'小知識．在哪裡看得到', where:'在地圖上查看', rulers:'統治者與領導人', chron:'統治者與大事', power:'誰掌權', turn:'轉折', stagesOpen:'展開全部', stagesClose:'收合全部', seeWorld:'在世界時間軸中查看', toPeriod:'回到這個時期', now:'至今',
       follow:'沿這條主題讀下去', periods:'個時期', c:'約 ',
       cities:'城市地圖', citiesDesc:'點選地圖上的城市，看它的歷史與旅遊時值得看的地方。', cityTl:'城市年表', citySee:'旅遊時看這些', cityMap:'城市地圖', cityNone:'這個國家的城市還在整理中。' },
  en:{ tab:'Countries', head:'Country Histories', sub:'Pick a country and read its history along two axes: time and theme.',
       more:'More countries coming', linear:'Linear', linearDesc:'Read period by period, each with five thematic facets.',
       thematic:'Thematic', thematicDesc:'Follow one theme as it runs through every period.',
       events:'Key events', facets:'Thematic facets', trivia:'Did you know? Where to see it', where:'Open on the map', rulers:'Rulers and leaders', chron:'Rulers and key events', power:'Who held power', turn:'Turning point', stagesOpen:'Expand all', stagesClose:'Collapse all', seeWorld:'See in the world timeline', toPeriod:'Back to this period', now:'present',
       follow:'Follow this theme', periods:'periods', c:'c. ',
       cities:'City map', citiesDesc:'Tap a city on the map to read its history and what to see when you visit.', cityTl:'City timeline', citySee:'What to see', cityMap:'City map', cityNone:'Cities for this country are on the way.' },
  fr:{ tab:'Par pays', head:'Histoires nationales', sub:'Choisissez un pays et lisez son histoire selon deux axes : le temps et les thèmes.',
       more:'D’autres pays à venir', linear:'Récit linéaire', linearDesc:'Lire période par période, chacune avec cinq angles thématiques.',
       thematic:'Récit thématique', thematicDesc:'Suivre un thème à travers toutes les périodes.',
       events:'Événements clés', facets:'Angles thématiques', trivia:'Le saviez-vous ? Où le voir', where:'Voir sur la carte', rulers:'Souverains et dirigeants', chron:'Souverains et événements clés', power:'Qui détient le pouvoir', turn:'Tournant', stagesOpen:'Tout déplier', stagesClose:'Tout replier', seeWorld:'Voir dans la frise mondiale', toPeriod:'Revenir à cette période', now:'aujourd’hui',
       follow:'Suivre ce thème', periods:'périodes', c:'v. ',
       cities:'Carte des villes', citiesDesc:'Touchez une ville sur la carte pour lire son histoire et ce qu’il faut y voir.', cityTl:'Chronologie de la ville', citySee:'À voir sur place', cityMap:'Carte des villes', cityNone:'Les villes de ce pays arrivent bientôt.' },
};

/* ─── state ─── */
const CX_KEY = 'wh_country_view';
let cx = { country:'france', mode:'linear', theme:'state', city:'' };
try {
  const s = JSON.parse(localStorage.getItem(CX_KEY) || 'null');
  if (s && typeof s === 'object') cx = Object.assign(cx, s);
} catch (e) { /* storage unavailable */ }
if (!COUNTRIES.some(c => c.id === cx.country)) cx.country = COUNTRIES[0].id;
if (!CX_THEMES.some(t => t.id === cx.theme)) cx.theme = CX_THEMES[0].id;
if (['linear', 'thematic', 'cities'].indexOf(cx.mode) < 0) cx.mode = 'linear';
function cxSave() { try { localStorage.setItem(CX_KEY, JSON.stringify(cx)); } catch (e) {} }

function cxU(k) { return (CX_UI[LANG] || CX_UI.zh)[k]; }
function cxYear(y, approx) {
  const pre = approx ? cxU('c') : '';
  if (y < 0) {
    if (LANG === 'en') return pre + Math.abs(y) + ' BC';
    if (LANG === 'fr') return pre + Math.abs(y) + ' av. J.-C.';
    return pre + '前 ' + Math.abs(y);
  }
  return pre + y;
}
function cxRange(p) { return fmtYear(p.start) + ' — ' + fmtYear(p.end); }
/* a theme as the current country tells it: a country may rename a thread or
   rewrite its intro through `threads` (e.g. “France & the World” → “Britain & the World”) */
function cxTheme(id) {
  const base = CX_THEMES.find(t => t.id === id);
  const c = COUNTRIES.find(k => k.id === cx.country);
  const o = c && c.threads && c.threads[id];
  return o ? Object.assign({}, base, o) : base;
}
function cxThemes() { return CX_THEMES.map(t => cxTheme(t.id)); }

/* a date written for the reader's language: 14 July 1789, 1789年7月14日, 14 juillet 1789 */
function cxDate(s) {
  const p = s.split('-').map(Number);
  const loc = { zh:'zh-TW', en:'en-GB', fr:'fr-FR' }[LANG] || 'zh-TW';
  const o = { year:'numeric', timeZone:'UTC' };
  if (p[1]) o.month = 'long';
  if (p[2]) o.day = 'numeric';
  return new Intl.DateTimeFormat(loc, o).format(new Date(Date.UTC(p[0], (p[1] || 1) - 1, p[2] || 1)));
}

/* one period read in finer stages, each folded open on demand */
function cxStages(pid) {
  const data = ((typeof CX_STAGES !== 'undefined' && CX_STAGES[cx.country]) || {})[pid];
  if (!data) return '';
  const L = Math.max(0, ['zh', 'en', 'fr'].indexOf(LANG));
  return '<div class="cx-stages"><div class="cx-label cx-stages-h"><span>' + T(data.title) + '</span>'
    + '<button class="cx-link cx-st-all" onclick="cxToggleStages(\'' + pid + '\')">' + cxU('stagesOpen') + '</button></div>'
    + data.list.map((s, i) =>
        '<details class="cx-stage"><summary><span class="cx-st-n">' + (i + 1) + '</span>'
        + '<span class="cx-st-t">' + T(s.name) + '</span>'
        + '<span class="cx-st-y">' + cxDate(s.a) + ' – ' + (s.b ? cxDate(s.b) : cxU('now')) + '</span></summary>'
        + '<div class="cx-st-body">'
        + '<div class="cx-st-power"><b>' + cxU('power') + '</b>' + T(s.power) + '</div>'
        + '<p>' + T(s.summary) + '</p>'
        + '<ul class="cx-ev cx-st-ev">' + s.ev.map(e =>
            '<li><span class="cx-ev-y">' + cxDate(e[0]) + '</span><span>' + e[1][L] + '</span></li>').join('') + '</ul>'
        + (s.turn ? '<div class="cx-st-turn"><b>' + cxU('turn') + '</b>' + T(s.turn) + '</div>' : '')
        + '</div></details>').join('')
    + '</div>';
}
function cxToggleStages(pid) {
  const root = document.getElementById('cx-p-' + pid);
  if (!root) return;
  const ds = [...root.querySelectorAll('details.cx-stage')];
  const open = ds.some(d => !d.open);
  ds.forEach(d => { d.open = open; });
  const b = root.querySelector('.cx-st-all');
  if (b) b.textContent = cxU(open ? 'stagesClose' : 'stagesOpen');
}

/* who ruled in this period, and what they did */
function cxRulers(pid) {
  const list = ((typeof CX_RULERS !== 'undefined' && CX_RULERS[cx.country]) || {})[pid] || [];
  if (!list.length) return '';
  const L = ['zh', 'en', 'fr'].indexOf(LANG) < 0 ? 0 : ['zh', 'en', 'fr'].indexOf(LANG);
  return '<div class="cx-label">' + cxU('rulers') + '</div><ul class="cx-rulers">'
    + list.map(r => {
        const yrs = r[0] === r[1] ? cxYear(r[0]) : cxYear(r[0]) + '–' + (r[1] >= 2026 ? fmtYear(r[1]) : cxYear(r[1]));
        return '<li><span class="cx-ru-y">' + yrs + '</span><div><b>' + r[2][L] + '</b><p>' + r[3][L] + '</p></div></li>';
      }).join('') + '</ul>';
}

/* rulers and key events woven into one chronology: each event sits under
   whoever ruled when it happened. On overlaps the most recent accession wins;
   a ruler marked { side:true } (a king of Scotland beside the English line)
   only hosts events no main ruler covers, and an event may name its host with
   `by` (the ruler's English name) where the year alone is ambiguous.
   Events outside every reign stand on their own, in date order. */
function cxChron(p) {
  const rulers = (((typeof CX_RULERS !== 'undefined' && CX_RULERS[cx.country]) || {})[p.id] || [])
    .map((r, i) => ({ r, i, ev: [] }));
  const L = ['zh', 'en', 'fr'].indexOf(LANG) < 0 ? 0 : ['zh', 'en', 'fr'].indexOf(LANG);
  const evLi = e => '<li><span class="cx-ev-y">' + cxYear(e.y, e.c) + '</span><span>' + (e[LANG] || e.zh) + '</span></li>';
  const loose = [];
  [...p.events].sort((x, y) => x.y - y.y).forEach(e => {
    let host = e.by ? rulers.find(x => x.r[2][1] === e.by) || null : null;
    if (!host) {
      const inReign = rulers.filter(x => e.y >= x.r[0] && e.y <= x.r[1]);
      const main = inReign.filter(x => !(x.r[4] && x.r[4].side));
      (main.length ? main : inReign).forEach(x => { if (!host || x.r[0] >= host.r[0]) host = x; });
    }
    (host ? host.ev : loose).push(e);
  });
  if (!rulers.length) return '<div class="cx-label">' + cxU('events') + '</div><ul class="cx-ev">' + loose.map(evLi).join('') + '</ul>';
  const items = rulers.map(x => ({ y: x.r[0], o: 0, i: x.i, x }))
    .concat(loose.map((e, i) => ({ y: e.y, o: 1, i, e })))
    .sort((a, b) => a.y - b.y || a.o - b.o || a.i - b.i);
  return '<div class="cx-label">' + cxU('chron') + '</div><ul class="cx-rulers cx-chron">'
    + items.map(it => {
        if (it.e) return '<li class="cx-ch-ev"><span class="cx-ru-y">' + cxYear(it.e.y, it.e.c) + '</span><div><span>' + (it.e[LANG] || it.e.zh) + '</span></div></li>';
        const r = it.x.r;
        const yrs = r[0] === r[1] ? cxYear(r[0]) : cxYear(r[0]) + '–' + (r[1] >= 2026 ? fmtYear(r[1]) : cxYear(r[1]));
        return '<li><span class="cx-ru-y">' + yrs + '</span><div><b>' + r[2][L] + '</b><p>' + r[3][L] + '</p>'
          + (it.x.ev.length ? '<ul class="cx-ev cx-ch-sub">' + it.x.ev.map(evLi).join('') + '</ul>' : '')
          + '</div></li>';
      }).join('') + '</ul>';
}

/* little-known facts, each tagged with the place where you can still see the thing */
function cxTrivia(pid, themeId) {
  const all = ((typeof CX_TRIVIA !== 'undefined' && CX_TRIVIA[cx.country]) || {})[pid] || [];
  const list = themeId ? all.filter(x => x.theme === themeId) : all;
  if (!list.length) return '';
  return '<div class="cx-label">' + cxU('trivia') + '</div><div class="cx-trivia">'
    + list.map(x => {
        const th = cxTheme(x.theme);
        const url = x.q ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(x.q) : '';
        const at = T(x.at);
        return '<div class="cx-tv" style="--tc:' + th.color + '">'
          + '<div class="cx-tv-h"><span class="cx-tv-ic">' + x.icon + '</span>' + T(x.title) + '</div>'
          + (themeId ? '' : '<div class="cx-tv-tag">' + T(th.name) + '</div>')
          + '<p>' + T(x.text) + '</p>'
          + (url
              ? '<a class="cx-where" href="' + url + '" target="_blank" rel="noopener noreferrer" title="' + cxU('where') + '">📍 ' + at + '<span class="cx-where-go">' + cxU('where') + ' ↗</span></a>'
              : '<div class="cx-where plain">📍 ' + at + '</div>')
          + '</div>';
      }).join('') + '</div>';
}

/* ─── render ─── */
function renderCountries() {
  const box = document.getElementById('view-countries');
  if (!box) return;
  const tab = document.querySelector('#vtab-countries .vt-txt');
  if (tab) tab.textContent = cxU('tab');

  const c = COUNTRIES.find(k => k.id === cx.country);
  const P = c.periods;

  let html =
    '<div id="mvx-head">'
    + '<div class="orn"><div class="l"></div><span class="g">✦</span><div class="r"></div></div>'
    + '<h2>' + cxU('head') + '</h2>'
    + '<p>' + cxU('sub') + '</p>'
    + '</div>';

  /* country filter */
  html += '<div class="cx-countries">'
    + COUNTRIES.map(k =>
        '<button class="chip' + (k.id === cx.country ? ' active' : '') + '" onclick="cxSet({country:\'' + k.id + '\'})"'
        + ' aria-pressed="' + (k.id === cx.country) + '">'
        + '<span class="cx-flag ' + k.flag + '"></span>' + T(k.name) + '</button>').join('')
    + '<span class="cx-more">' + cxU('more') + '</span></div>';

  /* intro */
  html += '<section class="cx-intro">'
    + '<div class="cx-intro-head"><span class="cx-flag big ' + c.flag + '"></span>'
    + '<div><h3>' + T(c.name) + '</h3><div class="cx-yrs">' + fmtYear(P[0].start) + ' — ' + fmtYear(P[P.length - 1].end)
    + ' · ' + P.length + ' ' + cxU('periods') + '</div></div></div>'
    + '<p>' + T(c.intro) + '</p></section>';

  /* the linear spine: one segment per period */
  html += '<div class="cx-strip" role="list">'
    + P.map((p, i) =>
        '<button class="cx-seg" role="listitem" onclick="cxGoPeriod(\'' + p.id + '\')" title="' + T(p.name) + '">'
        + '<span class="cx-seg-ic">' + p.icon + '</span>'
        + '<span class="cx-seg-y">' + cxYear(p.start) + '</span></button>').join('')
    + '</div>';

  /* narrative mode */
  html += '<div class="cx-modes" role="tablist">'
    + ['linear', 'thematic', 'cities'].map(m =>
        '<button class="cx-mode' + (cx.mode === m ? ' active' : '') + '" role="tab" aria-selected="' + (cx.mode === m) + '"'
        + ' onclick="cxSet({mode:\'' + m + '\'})">'
        + '<span class="cx-mode-t">' + ({ linear:'↓ ', thematic:'⇢ ', cities:'⌖ ' })[m] + cxU(m) + '</span>'
        + '<span class="cx-mode-d">' + cxU(m + 'Desc') + '</span></button>').join('')
    + '</div>';

  html += cx.mode === 'linear' ? cxLinear(P) : cx.mode === 'thematic' ? cxThematic(P) : cxCities(c, P);
  box.innerHTML = html;
}

function cxLinear(P) {
  return '<div class="cx-tl">' + P.map(p =>
    '<section class="cx-period" id="cx-p-' + p.id + '">'
    + '<div class="cx-node">' + p.icon + '</div>'
    + '<div class="cx-card">'
    + '<div class="cx-yrs">' + cxRange(p) + '</div>'
    + '<h3>' + T(p.name) + '</h3>'
    + '<p class="cx-sum">' + T(p.summary) + '</p>'
    + cxStages(p.id)
    + cxChron(p)
    + '<div class="cx-label">' + cxU('facets') + '</div>'
    + '<div class="cx-facets">' + cxThemes().map(t =>
        '<div class="cx-facet" style="--tc:' + t.color + '">'
        + '<button class="cx-facet-h" onclick="cxSet({mode:\'thematic\',theme:\'' + t.id + '\'},\'' + p.id + '\')" title="' + cxU('follow') + '">'
        + '<span>' + t.icon + '</span>' + T(t.name) + '<span class="cx-arr">⇢</span></button>'
        + '<p>' + T(p.themes[t.id]) + '</p></div>').join('') + '</div>'
    + cxTrivia(p.id, null)
    + (p.world ? '<button class="cx-link" onclick="goHist(\'' + p.world + '\')">◷ ' + cxU('seeWorld') + '</button>' : '')
    + '</div></section>').join('') + '</div>';
}

function cxThematic(P) {
  const th = cxTheme(cx.theme);
  return '<div class="cx-themes">' + cxThemes().map(t =>
      '<button class="chip' + (t.id === cx.theme ? ' active' : '') + '" onclick="cxSet({theme:\'' + t.id + '\'})"'
      + ' aria-pressed="' + (t.id === cx.theme) + '">'
      + '<span class="dot" style="background:' + t.color + '"></span>' + t.icon + ' ' + T(t.name) + '</button>').join('')
    + '</div>'
    + '<div class="cx-theme-intro" style="--tc:' + th.color + '"><span class="cx-theme-ic">' + th.icon + '</span>'
    + '<div><h3>' + T(th.name) + '</h3><p>' + T(th.intro) + '</p></div></div>'
    + '<div class="cx-tl thematic" style="--tc:' + th.color + '">' + P.map(p =>
        '<section class="cx-period" id="cx-p-' + p.id + '">'
        + '<div class="cx-node">' + p.icon + '</div>'
        + '<div class="cx-card slim">'
        + '<div class="cx-yrs">' + cxRange(p) + ' · ' + T(p.name) + '</div>'
        + '<p>' + T(p.themes[th.id]) + '</p>'
        + (th.id === 'state' ? cxRulers(p.id) : '')
        + cxTrivia(p.id, th.id)
        + '<button class="cx-link" onclick="cxSet({mode:\'linear\'},\'' + p.id + '\')">↑ ' + cxU('toPeriod') + '</button>'
        + '</div></section>').join('') + '</div>';
}

/* the city map: an outline of the country with a pin per city, and a panel
   with the chosen city's story, its timeline (each line linked back to the
   national period) and the places worth seeing on a visit */
function cxCities(c, P) {
  const list = (typeof CX_CITIES !== 'undefined' && CX_CITIES[c.id]) || [];
  const map = typeof CX_MAPS !== 'undefined' && CX_MAPS[c.id];
  if (!list.length || !map) return '<p class="cx-city-none">' + cxU('cityNone') + '</p>';
  const city = list.find(k => k.id === cx.city) || list[0];
  const [x0, y0, x1, y1] = map.box;
  const cos = Math.cos((y0 + y1) / 2 * Math.PI / 180), sc = map.w / ((x1 - x0) * cos);
  const pt = ([lon, lat]) => [(lon - x0) * cos * sc, (y1 - lat) * sc];
  const per = id => P.find(p => p.id === id);
  const go = id => 'cxSet({city:\'' + id + '\'})';
  const lab = { r:[12, 5, 'start'], l:[-12, 5, 'end'], t:[0, -13, 'middle'], b:[0, 23, 'middle'] };

  const pins = list.map(k => {
    const [x, y] = pt(k.ll).map(v => Math.round(v * 10) / 10);
    const [dx, dy, anchor] = lab[k.lab] || lab.r;
    return '<g class="cx-pin' + (k === city ? ' active' : '') + '" tabindex="0" role="button" aria-label="' + T(k.name) + '"'
      + ' onclick="' + go(k.id) + '" onkeydown="if(event.key===\'Enter\'||event.key===\' \'){event.preventDefault();' + go(k.id) + '}">'
      + '<circle class="cx-pin-halo" cx="' + x + '" cy="' + y + '" r="15"/>'
      + '<circle class="cx-pin-dot" cx="' + x + '" cy="' + y + '" r="6"/>'
      + '<text x="' + (x + dx) + '" y="' + (y + dy) + '" text-anchor="' + anchor + '">' + T(k.name) + '</text></g>';
  }).join('');

  const mapBox = '<div class="cx-map-box">'
    + '<svg class="cx-map" viewBox="0 0 ' + map.w + ' ' + map.h + '" role="group" aria-label="' + cxU('cityMap') + ' · ' + T(c.name) + '">'
    + '<defs><clipPath id="cx-clip-' + c.id + '"><rect width="' + map.w + '" height="' + map.h + '" rx="6"/></clipPath></defs>'
    + '<g clip-path="url(#cx-clip-' + c.id + ')"><path class="cx-map-o" d="' + map.others + '"/><path class="cx-map-l" d="' + map.land + '"/></g>' + pins + '</svg>'
    + '<div class="cx-city-chips">' + list.map(k =>
        '<button class="chip' + (k === city ? ' active' : '') + '" aria-pressed="' + (k === city) + '" onclick="' + go(k.id) + '">' + T(k.name) + '</button>').join('')
    + '</div></div>';

  const tl = '<div class="cx-label">' + cxU('cityTl') + '</div><ul class="cx-ctl">' + city.tl.map(e => {
      const p = per(e.p);
      return '<li><span class="cx-ev-y">' + cxYear(e.y, e.c) + '</span><span class="cx-ctl-t">' + (e[LANG] || e.zh) + '</span>'
        + (p ? '<button class="cx-ctl-p" onclick="cxSet({mode:\'linear\'},\'' + p.id + '\')" title="' + cxU('toPeriod') + '">' + p.icon + ' ' + T(p.name) + '</button>' : '')
        + '</li>';
    }).join('') + '</ul>';

  const see = '<div class="cx-label">' + cxU('citySee') + '</div><div class="cx-trivia cx-see">' + city.see.map(x => {
      const p = per(x.p);
      const url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(x.q);
      return '<div class="cx-tv" style="--tc:#c9a85c">'
        + '<div class="cx-tv-h"><span class="cx-tv-ic">' + x.icon + '</span>' + T(x.n) + '</div>'
        + (p ? '<div class="cx-tv-tag">' + p.icon + ' ' + T(p.name) + '</div>' : '')
        + '<p>' + (x[LANG] || x.zh) + '</p>'
        + '<a class="cx-where" href="' + url + '" target="_blank" rel="noopener noreferrer">📍 ' + T(x.n) + '<span class="cx-where-go">' + cxU('where') + ' ↗</span></a>'
        + '</div>';
    }).join('') + '</div>';

  return '<div class="cx-cities">' + mapBox
    + '<section class="cx-city" id="cx-city-panel">'
    + '<div class="cx-city-head"><h3>' + T(city.name) + '</h3><div class="cx-city-tag">' + T(city.tag) + '</div></div>'
    + '<p class="cx-city-intro">' + T(city.intro) + '</p>'
    + tl + see + '</section></div>';
}

/* change state, re-render, and optionally bring one period into view */
function cxSet(patch, focusPeriod) {
  const modeChanged = patch.mode && patch.mode !== cx.mode;
  Object.assign(cx, patch);
  cxSave();
  const box = document.getElementById('view-countries');
  const keep = box.getBoundingClientRect().top;
  renderCountries();
  if (focusPeriod) cxScrollTo(focusPeriod);
  else if (patch.city && window.innerWidth < 900) {
    const panel = document.getElementById('cx-city-panel');
    if (panel) panel.scrollIntoView({ behavior:'smooth', block:'start' });
  }
  else if (modeChanged || patch.theme) {
    const modes = box.querySelector('.cx-modes');
    if (modes && modes.getBoundingClientRect().top < 0) modes.scrollIntoView({ block:'start' });
  } else window.scrollBy(0, box.getBoundingClientRect().top - keep);
}
function cxGoPeriod(id) {
  if (cx.mode !== 'linear') cxSet({ mode:'linear' }, id);
  else cxScrollTo(id);
}
function cxScrollTo(id) {
  const el = document.getElementById('cx-p-' + id);
  if (!el) return;
  el.scrollIntoView({ behavior:'smooth', block:'start' });
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
}

renderCountries();
