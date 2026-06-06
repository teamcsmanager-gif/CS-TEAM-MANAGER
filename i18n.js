// i18n.js — Système de traduction FR / EN / RU
// Usage : t('clé') retourne la traduction dans la langue courante

const I18N_LANGS = ['fr', 'en', 'ru'];
const I18N_FLAGS = { fr: 'FR', en: 'EN', ru: 'RU' };

const I18N_TRANSLATIONS = {
  // ── Navigation ──────────────────────────────────────────────
  'nav.match':       { fr: 'Match',      en: 'Match',      ru: 'Матч' },
  'nav.inventory':   { fr: 'Inventaire', en: 'Inventory',  ru: 'Инвентарь' },
  'nav.soloq':       { fr: 'leveling',      en: 'Progress',      ru: 'прогресс' },
  'nav.sponsors':    { fr: 'Sponsors',   en: 'Sponsors',   ru: 'Спонсоры' },
  'nav.cases':       { fr: 'Drop',      en: 'Cases',      ru: 'Кейсы' },
  'nav.custom':      { fr: 'Paramètre',     en: 'Custom',     ru: 'Кастом' },

  // ── Header ──────────────────────────────────────────────────
  'header.balance':  { fr: 'Balance',    en: 'Balance',    ru: 'Баланс' },
  'header.account':  { fr: 'Compte',     en: 'Account',    ru: 'Аккаунт' },
  'header.logout':   { fr: 'Déconnecter',     en: 'Logout',     ru: 'Выйти' },

  // ── Dashboard stats ─────────────────────────────────────────
  'stat.influence':  { fr: 'Influence',  en: 'Influence',  ru: 'Влияние' },
  'stat.vrs':        { fr: 'VRS',        en: 'VRS',        ru: 'VRS' },
  'stat.elo':        { fr: 'ELO equipe', en: 'Team ELO',   ru: 'ЭЛО команды' },
  'stat.record':     { fr: 'Bilan',      en: 'Record',     ru: 'Счёт' },

  // ── Team page ───────────────────────────────────────────────
  'team.club':           { fr: 'Club',                  en: 'Club',                   ru: 'Клуб' },
  'team.roster_status_ok': { fr: 'Pret pour match officiel', en: 'Ready for official match', ru: 'Готов к официальному матчу' },
  'team.roster_status_ko': { fr: 'Roster incomplet',    en: 'Incomplete roster',      ru: 'Неполный состав' },
  'team.edit':           { fr: 'Modifier',              en: 'Edit',                   ru: 'Изменить' },
  'team.active_roster':  { fr: 'Roster actif',          en: 'Active roster',          ru: 'Активный состав' },
  'team.my_team':        { fr: 'Mon equipe',            en: 'My team',                ru: 'Моя команда' },
  'team.tier':           { fr: 'Palier',                en: 'Tier',                   ru: 'Уровень' },
  'team.manage':         { fr: 'Gerer',                 en: 'Manage',                 ru: 'Управлять' },
  'team.recruit_5':      { fr: 'Recrute 5 joueurs pour lancer un match officiel.', en: 'Recruit 5 players to start an official match.', ru: 'Наберите 5 игроков для официального матча.' },

  // ── Match tabs ──────────────────────────────────────────────
  'match.title':         { fr: 'Choisir un match',     en: 'Choose a match',         ru: 'Выбрать матч' },
  'match.history_title':  { fr: 'Derniers matchs',      en: 'Recent matches',         ru: 'Последние матчи' },
  'match.history_subtitle':{ fr: 'Standard BO1',        en: 'Standard BO1',           ru: 'Стандарт BO1' },
  'match.history_empty':  { fr: 'Aucun match joué.',    en: 'No matches played.',     ru: 'Матчи не сыграны.' },
  'match.standard':      { fr: 'Standard BO1',         en: 'Standard BO1',           ru: 'Стандарт BO1' },
  'match.season':        { fr: 'Saison ESEA',          en: 'ESEA Season',            ru: 'Сезон ESEA' },
  'match.major':         { fr: '⚡ Major',              en: '⚡ Major',               ru: '⚡ Мейджор' },
  'match.loading':       { fr: 'Chargement…',          en: 'Loading…',               ru: 'Загрузка…' },
  'match.type':          { fr: 'Type de match',        en: 'Match type',             ru: 'Тип матча' },
  'match.choose_log':    { fr: 'Choisis un match BO1 dans la liste.', en: 'Choose a BO1 match from the list.', ru: 'Выбери матч BO1 из списка.' },
  'match.season_log':    { fr: 'Élimination simple — une défaite t\'élimine.', en: 'Single elimination — one loss and you\'re out.', ru: 'Одиночное выбывание — одно поражение и ты выбываешь.' },
  'match.none_selected': { fr: 'Aucun match sélectionné.', en: 'No match selected.', ru: 'Матч не выбран.' },
  'major.rule1':         { fr: '🎯 Minimum 250 VRS · 8 équipes · Élimination directe', en: '🎯 Minimum 250 VRS · 8 teams · Single elimination', ru: '🎯 Минимум 250 VRS · 8 команд · Прямое выбывание' },
  'major.rule2':         { fr: '🚢 Bataille navale 12×12 · 5 cibles · 60s placement · 10s par tir', en: '🚢 Battleship 12×12 · 5 targets · 60s placement · 10s per shot', ru: '🚢 Морской бой 12×12 · 5 целей · 60с расстановка · 10с на выстрел' },
  'major.rule3':         { fr: '💰 Champion : 1 500 000 ¢ · 2ème : 500 000 ¢ · 3ème : 100 000 ¢', en: '💰 Champion: 1,500,000 ¢ · 2nd: 500,000 ¢ · 3rd: 100,000 ¢', ru: '💰 Чемпион: 1 500 000 ¢ · 2-е: 500 000 ¢ · 3-е: 100 000 ¢' },
  'major.battle_naval':  { fr: 'Bataille navale', en: 'Battleship', ru: 'Морской бой' },
  'esea.start_first':    { fr: 'Lance une saison ESEA avant de jouer.', en: 'Start an ESEA season before playing.', ru: 'Запустите сезон ESEA перед игрой.' },
  'esea.need_fee':       { fr: 'Il faut {fee} pour entrer en {name}.', en: 'You need {fee} to enter {name}.', ru: 'Нужно {fee} для входа в {name}.' },
  'esea.season_started': { fr: 'Saison {name} lancée. Droit d\'entrée: {fee}.', en: 'Season {name} started. Entry fee: {fee}.', ru: 'Сезон {name} запущен. Взнос: {fee}.' },
  'esea.abandoned':      { fr: 'Saison abandonnée. Tu restes au palier actuel.', en: 'Season abandoned. You stay at current tier.', ru: 'Сезон брошен. Вы остаётесь на текущем уровне.' },
  'esea.abandoned_demoted': { fr: 'Saison abandonnée. Rélégation en {name}.', en: 'Season abandoned. Demoted to {name}.', ru: 'Сезон брошен. Понижение до {name}.' },
  'match.in_progress':   { fr: 'Match en cours...', en: 'Match in progress...', ru: 'Матч идёт...' },
  'match.loss_simple':   { fr: 'Défaite contre {name}.', en: 'Loss against {name}.', ru: 'Поражение от {name}.' },
  'esea.auto_unregistered': { fr: 'Désinscrit automatiquement — un joueur est parti en SoloQ.', en: 'Auto-unregistered — a player went to SoloQ.', ru: 'Авто-отписка — игрок ушёл в SoloQ.' },

  // ── Match modal ─────────────────────────────────────────────
  'match.official':      { fr: 'Match officiel',       en: 'Official match',         ru: 'Официальный матч' },
  'match.live':          { fr: 'Live server',          en: 'Live server',            ru: 'Прямой сервер' },
  'match.round':         { fr: 'Round',                en: 'Round',                  ru: 'Раунд' },
  'match.waiting_veto':  { fr: 'En attente du veto...', en: 'Waiting for veto...', ru: 'Ожидание вето...' },

  // ── Result modal ────────────────────────────────────────────
  'result.match_over':   { fr: 'Match termine',        en: 'Match over',             ru: 'Матч завершён' },
  'result.result':       { fr: 'Resultat',             en: 'Result',                 ru: 'Результат' },
  'result.continue':     { fr: 'Continuer',            en: 'Continue',               ru: 'Продолжить' },
  'result.history':      { fr: 'Historique',           en: 'History',                ru: 'История' },
  'result.matches':      { fr: 'Matchs joues',         en: 'Played matches',         ru: 'Сыгранные матчи' },
  'result.close':        { fr: 'Fermer',               en: 'Close',                  ru: 'Закрыть' },

  // ── Season confirm modal ─────────────────────────────────────
  'season.confirm_title':  { fr: "Confirmer l'inscription",  en: 'Confirm registration',    ru: 'Подтвердить запись' },
  'season.no_salary':      { fr: 'Aucun salaire ne sera paye pendant les maps. Le cash prize tombe uniquement si tu gagnes la saison.', en: 'No salary will be paid during maps. Cash prize only if you win the season.', ru: 'Зарплата не выплачивается во время карт. Призовые только при победе в сезоне.' },
  'season.cancel':         { fr: 'Annuler',             en: 'Cancel',                 ru: 'Отмена' },
  'season.pay':            { fr: 'Payer et lancer',     en: 'Pay and start',          ru: 'Оплатить и начать' },

  // ── Equipe page ─────────────────────────────────────────────
  'equipe.roster':         { fr: 'Roster',              en: 'Roster',                 ru: 'Состав' },
  'equipe.team':           { fr: 'Equipe',              en: 'Team',                   ru: 'Команда' },
  'equipe.recruit':        { fr: 'Recruter',            en: 'Recruit',                ru: 'Нанять' },
  'equipe.recruited':      { fr: 'Recruté',             en: 'Recruited',              ru: 'Нанят' },
  'equipe.roster_needed':  { fr: 'Composition requise', en: 'Required lineup',        ru: 'Требуемый состав' },
  'equipe.role_taken':     { fr: 'Rôle déjà pris',      en: 'Role already taken',     ru: 'Роль уже занята' },
  'equipe.tier_market':     { fr: 'Marché',        en: 'Market',       ru: 'Рынок' },
  'equipe.tier_1500':       { fr: '1500 ELO',    en: '1500 ELO',   ru: '1500 ЭЛО' },
  'equipe.tier_2000':       { fr: '2000 ELO',    en: '2000 ELO',   ru: '2000 ЭЛО' },
  'equipe.tier_2500':       { fr: '2500 ELO',    en: '2500 ELO',   ru: '2500 ЭЛО' },
  'equipe.tier_3000':       { fr: '3000 ELO',    en: '3000 ELO',   ru: '3000 ЭЛО' },
  'equipe.tier_champions':  { fr: 'Champions',   en: 'Champions',  ru: 'Чемпионы' },
  'equipe.tier_locked_hint':{ fr: 'ELO moyen {n} requis', en: 'Average ELO {n} required', ru: 'Нужен средний ЭЛО {n}' },
  'equipe.sign':            { fr: 'Signer',          en: 'Sign',          ru: 'Подписать' },
  'equipe.transfer_cost':   { fr: 'Prix transfert',    en: 'Transfer fee',  ru: 'Трансфер' },
  'equipe.replace_title':   { fr: 'Remplacer un joueur', en: 'Replace a player', ru: 'Заменить игрока' },
  'equipe.replace_confirm': { fr: 'Remplacer',        en: 'Replace',       ru: 'Заменить' },
  'equipe.insufficient_funds': { fr: 'Fonds insuffisants',          en: 'Insufficient funds',           ru: 'Недостаточно средств' },
  'equipe.kick_cost':          { fr: 'Coût du kick :',              en: 'Kick cost:',                   ru: 'Стоимость отчисления:' },
  'equipe.kick_cost_desc':     { fr: 'Gagne plus d\'argent avant de kicker ce joueur.', en: 'Earn more money before kicking this player.', ru: 'Заработай больше перед отчислением игрока.' },
  'equipe.role_taken_desc':{ fr: 'Tu as déjà un joueur avec ce rôle dans ton roster.', en: 'You already have a player with this role in your roster.', ru: 'У тебя уже есть игрок с этой ролью в составе.' },
  'equipe.inventory':      { fr: 'Inventaire',          en: 'Inventory',              ru: 'Инвентарь' },
  'equipe.skins':          { fr: 'Skins possedes',      en: 'Owned skins',            ru: 'Имеющиеся скины' },
  'equipe.market':         { fr: 'Marche',              en: 'Market',                 ru: 'Рынок' },
  'equipe.available':      { fr: 'Joueurs disponibles', en: 'Available players',      ru: 'Доступные игроки' },
  'equipe.refresh':        { fr: 'Actualiser joueurs',  en: 'Refresh players',        ru: 'Обновить игроков' },
  'equipe.sort_default':   { fr: 'Tri par défaut',      en: 'Default sort',           ru: 'Сортировка по умолч.' },
  'equipe.sort_price_desc':{ fr: 'Prix ↓',              en: 'Price ↓',                ru: 'Цена ↓' },
  'equipe.sort_price_asc': { fr: 'Prix ↑',              en: 'Price ↑',                ru: 'Цена ↑' },
  'equipe.sort_inf_desc':  { fr: 'Influence ↓',         en: 'Influence ↓',            ru: 'Влияние ↓' },
  'equipe.sort_inf_asc':   { fr: 'Influence ↑',         en: 'Influence ↑',            ru: 'Влияние ↑' },
  'equipe.filter_all':     { fr: 'Tous',                en: 'All',                    ru: 'Все' },
  'equipe.filter_equipped':{ fr: 'Équipés',             en: 'Equipped',               ru: 'Оснащены' },
  'equipe.filter_avail':   { fr: 'Disponibles',         en: 'Available',              ru: 'Доступны' },
  'equipe.sell':           { fr: 'Vendre',              en: 'Sell',                   ru: 'Продать' },
  'equipe.equip':          { fr: 'Équiper',             en: 'Equip',                  ru: 'Оснастить' },
  'equipe.unequip':        { fr: 'Retirer',             en: 'Remove',                 ru: 'Снять' },
  'equipe.fire':           { fr: 'Renvoyer',            en: 'Fire',                   ru: 'Уволить' },
  'equipe.recruit_btn':    { fr: 'Recruter',            en: 'Recruit',                ru: 'Нанять' },
  'equipe.skins_equipped': { fr: '{n} skins équipés',   en: '{n} skins equipped',     ru: '{n} скинов оснащено' },
  'equipe.no_skin':        { fr: 'Aucun skin équipé.',  en: 'No skin equipped.',      ru: 'Нет оснащённых скинов.' },
  'equipe.no_inventory':   { fr: 'Aucun skin dans l\'inventaire.', en: 'No skins in inventory.', ru: 'Нет скинов в инвентаре.' },
  'equipe.choose':         { fr: 'Choisir...',          en: 'Choose...',              ru: 'Выбрать...' },
  'equipe.in_faceit':      { fr: 'EN FACEIT',           en: 'IN FACEIT',              ru: 'В FACEIT' },
  'equipe.equip_skin':     { fr: 'Équiper un skin',     en: 'Equip a skin',           ru: 'Оснастить скин' },

  // ── Sponsors page ───────────────────────────────────────────
  'sponsors.business':     { fr: 'Business',            en: 'Business',               ru: 'Бизнес' },
  'sponsors.title':        { fr: 'Sponsors',            en: 'Sponsors',               ru: 'Спонсоры' },
  'sponsors.active':       { fr: 'Actif',               en: 'Active',                 ru: 'Активен' },
  'sponsors.active_count': { fr: '{n} actif',           en: '{n} active',             ru: '{n} активных' },
  'sponsors.sign':         { fr: 'Signer',              en: 'Sign',                   ru: 'Подписать' },
  'sponsors.locked':       { fr: 'Bloqué',              en: 'Locked',                 ru: 'Заблокирован' },
  'sponsors.unlocked':     { fr: 'Débloqué',            en: 'Unlocked',               ru: 'Разблокирован' },
  'sponsors.influence_req':{ fr: 'Influence {n}',       en: 'Influence {n}',          ru: 'Влияние {n}' },
  'msg.banned_by_admin':   { fr: 'Ton compte a été suspendu par un administrateur.',          en: 'Your account has been suspended by an administrator.',       ru: 'Ваш аккаунт был заблокирован администратором.' },
  'msg.banned_reason':     { fr: 'Motif',                                                       en: 'Reason',                                                     ru: 'Причина' },
  'msg.banned_contact':    { fr: "Contacte un administrateur si tu penses qu'il s'agit d'une erreur.", en: 'Contact an administrator if you think this is a mistake.', ru: 'Свяжитесь с администратором, если считаете это ошибкой.' },
  'msg.maintenance_title': { fr: 'Serveur en maintenance',                                      en: 'Server under maintenance',                                   ru: 'Сервер на обслуживании' },
  'msg.maintenance_back':  { fr: 'Revenez plus tard.',                                          en: 'Come back later.',                                           ru: 'Вернитесь позже.' },
  'sponsors.income':       { fr: '+¢{n} / 10 min',     en: '+¢{n} / 10 min',         ru: '+¢{n} / 10 мин' },
  'sponsors.next_in':      { fr: 'dans {t}',            en: 'in {t}',                 ru: 'через {t}' },
  'sponsors.soon':         { fr: 'bientôt...',          en: 'soon...',                ru: 'скоро...' },

  // ── SoloQ page ──────────────────────────────────────────────
  'soloq.faceit':          { fr: 'Faceit',              en: 'Faceit',                 ru: 'Faceit' },
  'soloq.title':           { fr: 'Faites évoluer vos joueurs',       en: 'Develop your players',            ru: 'Развивать своих игроков' },
  'soloq.max':             { fr: '2 joueurs max',       en: '2 players max',          ru: 'Макс. 2 игрока' },
  'soloq.done':            { fr: 'Faceit terminée',      en: 'Faceit done',             ru: 'Faceit завершена' },
  'soloq.result':          { fr: 'Retour Faceit',        en: 'Faceit result',           ru: 'Результат Faceit' },
  'soloq.results_multi':   { fr: 'Retours SoloQ',        en: 'SoloQ Results',           ru: 'Результаты SoloQ' },
  'soloq.result_single':   { fr: '{name} revient de SoloQ', en: '{name} is back from SoloQ', ru: '{name} вернулся из SoloQ' },
  'soloq.stack_results':   { fr: 'Retour Stack Faceit',  en: 'Stack Faceit Results',    ru: 'Результаты стака Faceit' },
  'soloq.status':          { fr: 'Status',              en: 'Status',                 ru: 'Статус' },
  'soloq.available':       { fr: 'Disponible',          en: 'Available',              ru: 'Доступен' },
  'soloq.in_game':         { fr: 'En partie',           en: 'In game',                ru: 'В игре' },
  'soloq.send':            { fr: 'Envoyer en SoloQ',       en: 'Send to SoloQ',          ru: 'Отправить в SoloQ' },
  'soloq.stack_eyebrow':   { fr: 'Stack Faceit',           en: 'Stack Faceit',           ru: 'Стак Faceit' },
  'soloq.stack_title':     { fr: 'Jouer en équipe',        en: 'Play as a team',         ru: 'Играть командой' },
  'soloq.stack_desc':      { fr: 'Envoie tes 5 joueurs jouer ensemble — ils reviennent avec +20 à +50 ELO chacun dans 30 minutes.', en: 'Send all 5 players to play together — they return with +20 to +50 ELO each in 30 minutes.', ru: 'Отправь всех 5 игроков играть вместе — они вернутся с +20 до +50 ELO каждый через 30 минут.' },
  'soloq.stack_btn':       { fr: '⚡ Stack — Envoyer les 5', en: '⚡ Stack — Send all 5', ru: '⚡ Стак — Отправить всех 5' },
  'soloq.stack_playing':   { fr: 'En match',               en: 'In match',               ru: 'В матче' },
  'soloq.stack_win':       { fr: 'Victoire',               en: 'Victory',                ru: 'Победа' },
  'soloq.stack_confirm_title': { fr: '⚡ Stack Faceit',   en: '⚡ Stack Faceit',         ru: '⚡ Стак Faceit' },
  'soloq.stack_confirm_desc':  { fr: 'Tes 5 joueurs seront indisponibles pendant 30 minutes.', en: 'Your 5 players will be unavailable for 30 minutes.', ru: 'Твои 5 игроков будут недоступны 30 минут.' },
  'soloq.solo_confirm_title':  { fr: '⚡ SoloQ Faceit',  en: '⚡ SoloQ Faceit',        ru: '⚡ SoloQ Faceit' },
  'soloq.solo_confirm_desc':   { fr: '{name} sera indisponible pendant 10 minutes.', en: '{name} will be unavailable for 10 minutes.', ru: '{name} будет недоступен 10 минут.' },

  // ── Custom / Identity page ───────────────────────────────────
  'custom.club':           { fr: 'Personalisation club',         en: 'Club custom',            ru: 'Кастом клуба' },
  'custom.title':          { fr: 'Definis ton logo et ton maillot.', en: 'Define your logo and jersey.', ru: 'Настройте свой логотип и форму.' },
  'custom.subtitle':       { fr: 'Les paramètre du maillot seront appliquer à tous le roster', en: 'This custom will be applied to players recruited in matches.', ru: 'Этот дизайн будет применён к игрокам в матчах.' },
  'custom.edition':        { fr: 'Edition',             en: 'Edition',                ru: 'Редактор' },
  'custom.logo_jersey':    { fr: 'Logo et maillot',     en: 'Logo and jersey',        ru: 'Логотип и форма' },
  'custom.save':           { fr: 'Sauvegarder',         en: 'Save',                   ru: 'Сохранить' },
  'custom.name':           { fr: 'Nom',                 en: 'Name',                   ru: 'Название' },
  'custom.initials':       { fr: 'Initiales',           en: 'Initials',               ru: 'Инициалы' },
  'custom.shape':          { fr: 'Forme',               en: 'Shape',                  ru: 'Форма' },
  'custom.logo_bg':        { fr: 'Fond logo',           en: 'Logo background',        ru: 'Фон логотипа' },
  'custom.logo_border':    { fr: 'Contour logo',        en: 'Logo border',            ru: 'Контур логотипа' },
  'custom.logo_text':      { fr: 'Texte logo',          en: 'Logo text',              ru: 'Текст логотипа' },
  'custom.logo_size':      { fr: 'Taille initiales',    en: 'Initials size',          ru: 'Размер инициалов' },
  'custom.sponsor_text':   { fr: 'Texte sponsor',       en: 'Sponsor text',           ru: 'Текст спонсора' },
  'custom.jersey_main':    { fr: 'Maillot principal',   en: 'Main jersey',            ru: 'Основная форма' },
  'custom.jersey_pattern': { fr: 'Pattern maillot',     en: 'Jersey pattern',         ru: 'Паттерн формы' },
  'custom.jersey_accent':  { fr: 'Maillot accent',      en: 'Jersey accent',          ru: 'Акцент формы' },
  'custom.skin':           { fr: 'Peau',                en: 'Skin',                   ru: 'Цвет кожи' },
  'custom.hair':           { fr: 'Cheveux',             en: 'Hair',                   ru: 'Причёска' },
  'custom.beard':          { fr: 'Barbe',               en: 'Beard',                  ru: 'Борода' },
  'custom.ready':          { fr: 'Pret.',               en: 'Ready.',                 ru: 'Готово.' },
  // Shapes
  'shape.shield':          { fr: 'Bouclier',            en: 'Shield',                 ru: 'Щит' },
  'shape.circle':          { fr: 'Cercle',              en: 'Circle',                 ru: 'Круг' },
  'shape.square':          { fr: 'Carre',               en: 'Square',                 ru: 'Квадрат' },
  'shape.diamond':         { fr: 'Diamant',             en: 'Diamond',                ru: 'Ромб' },
  'shape.hexagon':         { fr: 'Hexagone',            en: 'Hexagon',                ru: 'Шестиугольник' },
  'shape.pentagon':        { fr: 'Pentagone',           en: 'Pentagon',               ru: 'Пятиугольник' },
  'shape.cross':           { fr: 'Croix',               en: 'Cross',                  ru: 'Крест' },
  'shape.arrow':           { fr: 'Fleche',              en: 'Arrow',                  ru: 'Стрелка' },
  'shape.octagon':         { fr: 'Octogone',            en: 'Octagon',                ru: 'Восьмиугольник' },
  'shape.drop':            { fr: 'Goutte',              en: 'Drop',                   ru: 'Капля' },
  'shape.parallelogram':   { fr: 'Parallelogramme',     en: 'Parallelogram',          ru: 'Параллелограмм' },
  // Colors
  'color.white':           { fr: 'Blanc',               en: 'White',                  ru: 'Белый' },
  'color.blue':            { fr: 'Bleu',                en: 'Blue',                   ru: 'Синий' },
  'color.cyan':            { fr: 'Cyan',                en: 'Cyan',                   ru: 'Голубой' },
  'color.grey':            { fr: 'Gris',                en: 'Grey',                   ru: 'Серый' },
  'color.yellow':          { fr: 'Jaune',               en: 'Yellow',                 ru: 'Жёлтый' },
  'color.orange':          { fr: 'Orange',              en: 'Orange',                 ru: 'Оранжевый' },
  'color.pink':            { fr: 'Rose',                en: 'Pink',                   ru: 'Розовый' },
  'color.red':             { fr: 'Rouge',               en: 'Red',                    ru: 'Красный' },
  'color.green':           { fr: 'Vert',                en: 'Green',                  ru: 'Зелёный' },
  'color.black':           { fr: 'Noir',                en: 'Black',                  ru: 'Чёрный' },
  'color.none':            { fr: 'Aucun',               en: 'None',                   ru: 'Нет' },
  'color.none_f':          { fr: 'Aucune',              en: 'None',                   ru: 'Нет' },
  // Skin/Hair
  'skin.1':                { fr: 'Peau 1',              en: 'Skin 1',                 ru: 'Кожа 1' },
  'skin.2':                { fr: 'Peau 2',              en: 'Skin 2',                 ru: 'Кожа 2' },
  'skin.3':                { fr: 'Peau 3',              en: 'Skin 3',                 ru: 'Кожа 3' },
  'skin.4':                { fr: 'Peau 4',              en: 'Skin 4',                 ru: 'Кожа 4' },
  'skin.5':                { fr: 'Peau 5',              en: 'Skin 5',                 ru: 'Кожа 5' },
  'skin.6':                { fr: 'Peau 6',              en: 'Skin 6',                 ru: 'Кожа 6' },

  // ── Toast / error messages ───────────────────────────────────
  'toast.need_5':          { fr: 'Il faut 5 joueurs dans ton roster.', en: 'You need 5 players in your roster.', ru: 'Нужно 5 игроков в составе.' },
  'toast.not_enough_balance': { fr: 'Fonds insuffisants — salaires : ¢{need} (solde : ¢{have})', en: 'Insufficient funds — salaries: ¢{need} (balance: ¢{have})', ru: 'Недостаточно средств — зарплаты: ¢{need} (баланс: ¢{have})' },
  'toast.player_unavail':  { fr: "Ce joueur n'est plus disponible.", en: 'This player is no longer available.', ru: 'Этот игрок больше недоступен.' },
  'toast.challenge_sent':  { fr: 'Défi envoyé à {name} - en attente...', en: 'Challenge sent to {name} - waiting...', ru: 'Вызов отправлен {name} — ожидание...' },
  'toast.challenge_expired': { fr: 'Défi expiré ou annulé.', en: 'Challenge expired or cancelled.', ru: 'Вызов истёк или отменён.' },
  'toast.refused':         { fr: '{name} a refusé le défi.', en: '{name} refused the challenge.', ru: '{name} отклонил вызов.' },
  'mm.standard_online':    { fr: 'Match Standard <span style="color:var(--acid)">Online</span>', en: 'Standard Match <span style="color:var(--acid)">Online</span>', ru: 'Стандартный Матч <span style="color:var(--acid)">Онлайн</span>' },
  'toast.soloq_block':     { fr: 'Des joueurs sont en SoloQ — attends la fin de leurs parties.', en: 'Some players are in SoloQ — wait for their games to finish.', ru: 'Некоторые игроки в SoloQ — дождитесь окончания их игр.' },
  'toast.stack_block':     { fr: '⚡ L\'équipe est en Stack Faceit — attends leur retour.', en: '⚡ Team is in Stack Faceit — wait for them to return.', ru: '⚡ Команда в стаке Faceit — дождитесь возвращения.' },
  'toast.stack_done':      { fr: '⚡ Tes joueurs sont de retour !', en: '⚡ Your players are back!', ru: '⚡ Твои игроки вернулись!' },
  'toast.stack_see':       { fr: 'Voir les résultats', en: 'See results', ru: 'Смотреть результаты' },
  'toast.roster_full':     { fr: 'Roster complet (5/5).', en: 'Roster full (5/5).', ru: 'Состав полный (5/5).' },
  'toast.tier_not_found':  { fr: 'Palier introuvable.', en: 'Tier not found.', ru: 'Уровень не найден.' },
  'toast.saved':           { fr: '✓ Custom sauvegardé !', en: '✓ Custom saved!', ru: '✓ Сохранено!' },
  'toast.vrs_insufficient':{ fr: 'VRS insuffisants', en: 'Insufficient VRS', ru: 'Недостаточно VRS' },
  'toast.major_full':      { fr: 'Le Major est complet (8 équipes max).', en: 'The Major is full (8 teams max).', ru: 'Мейджор заполнен (макс. 8 команд).' },

  // ── Matchmaking ─────────────────────────────────────────────
  'mm.join_queue':         { fr: 'Rejoindre la file',   en: 'Join queue',      ru: 'Войти в очередь' },
  'mm.leave_queue':        { fr: 'Quitter la file',     en: 'Leave queue',     ru: 'Покинуть очередь' },
  'mm.in_queue':           { fr: 'En file...',           en: 'In queue...',     ru: 'В очереди...' },
  'mm.in_queue_msg':       { fr: 'Tu es dans la file — en attente d\'un défi...', en: 'You are in queue — waiting for a challenge...', ru: 'Вы в очереди — ожидание вызова...' },
  'mm.searching':          { fr: 'Recherche d\'un adversaire...', en: 'Searching for an opponent...', ru: 'Поиск соперника...' },
  'mm.accept':             { fr: 'Accepter',             en: 'Accept',          ru: 'Принять' },
  'mm.decline':            { fr: 'Refuser',              en: 'Decline',         ru: 'Отклонить' },
  'mm.challenge':          { fr: 'Défier',               en: 'Challenge',       ru: 'Вызвать' },
  'mm.challenge_btn':      { fr: 'Défi !',               en: 'Challenge!',      ru: 'Вызов!' },
  'mm.challenge_received': { fr: 'Défi reçu !',          en: 'Challenge received!', ru: 'Вызов получен!' },
  'mm.wants_to_fight':     { fr: 'veut t\'affronter',    en: 'wants to fight you', ru: 'хочет сразиться с вами' },
  'mm.sending':            { fr: 'Envoyé...',             en: 'Sent...',         ru: 'Отправлено...' },
  'mm.online':             { fr: 'En ligne',              en: 'Online',          ru: 'Онлайн' },
  'mm.standard_title':     { fr: 'Match Standard <span style="color:var(--acid)">Online</span>', en: 'Standard Match <span style="color:var(--acid)">Online</span>', ru: 'Стандартный Матч <span style="color:var(--acid)">Онлайн</span>' },
  'mm.subtitle':           { fr: 'Rejoins la file — un adversaire verra ta fiche et pourra te défier.', en: 'Join the queue — an opponent will see your profile and can challenge you.', ru: 'Войдите в очередь — соперник увидит вашу карточку и сможет вызвать вас.' },
  'mm.no_players':         { fr: 'Aucun joueur en file pour l\'instant.', en: 'No players in queue right now.', ru: 'Нет игроков в очереди.' },
  'mm.online_teams':       { fr: 'Équipes en ligne',     en: 'Online teams',    ru: 'Команды онлайн' },
  'mm.no_teams':           { fr: 'Aucune équipe en ligne.', en: 'No teams online.', ru: 'Нет команд онлайн.' },
  'mm.no_sync':            { fr: 'Aucun joueur synchronisé.', en: 'No synced players.', ru: 'Нет синхронизированных игроков.' },
  'mm.no_roster':          { fr: 'Fiche adverse indisponible.', en: 'Opponent roster unavailable.', ru: 'Состав соперника недоступен.' },
  'mm.roster':             { fr: 'ROSTER',               en: 'ROSTER',          ru: 'СОСТАВ' },
  'mm.elo_avg':            { fr: 'ELO MOY.',              en: 'AVG ELO',         ru: 'СР. ЭЛО' },
  'mm.avg':                { fr: 'AVG',                   en: 'AVG',             ru: 'СР.' },
  'mm.aim':                { fr: 'AIM',                   en: 'AIM',             ru: 'ПРИЦЕЛ' },
  'mm.win_chance':         { fr: 'CHANCE WIN',            en: 'WIN CHANCE',      ru: 'ШАНС ПОБЕДЫ' },
  'mm.skin_influence':     { fr: 'INFLUENCE SKINS',       en: 'SKIN INFLUENCE',  ru: 'ВЛИЯНИЕ СКИНОВ' },
  'mm.esea_tier':          { fr: 'PALIER ESEA',           en: 'ESEA TIER',       ru: 'УРОВЕНЬ ESEA' },
  'mm.cost':               { fr: 'Prix coutant',          en: 'Cost',            ru: 'Стоимость' },
  'mm.max_balance':        { fr: 'Balance max',           en: 'Max balance',     ru: 'Макс. баланс' },
  'mm.team_sheet':         { fr: 'Fiche équipe',          en: 'Team sheet',      ru: 'Карточка команды' },
  'mm.team_detail':        { fr: 'Détail équipe',         en: 'Team detail',     ru: 'Детали команды' },
  'mm.palmares':           { fr: '🏆 Palmarès',           en: '🏆 Trophy case',   ru: '🏆 Достижения' },
  'mm.waiting_opponent':   { fr: 'En attente de l\'adversaire...', en: 'Waiting for opponent...', ru: 'Ожидание соперника...' },
  'mm.waiting_subtitle':   { fr: 'Le match démarre quand les 2 joueurs sont prêts', en: 'Match starts when both players are ready', ru: 'Матч начнётся когда оба игрока готовы' },
  'mm.opp_deciding':       { fr: '⏳ Adversaire en train de décider...', en: '⏳ Opponent is deciding...', ru: '⏳ Соперник принимает решение...' },

  // ── Round feed lines ────────────────────────────────────────
  'round.pistol':  { fr: 'Pistol round prêt...', en: 'Pistol round ready...', ru: 'Пистольный раунд...' },
  'round.won.1': { fr: 'Entry propre, site ouvert.',           en: 'Clean entry, site open.',             ru: 'Чистый вход, сайт открыт.' },
  'round.won.2': { fr: 'Retake maîtrisé, defuse sang-froid.',  en: 'Retake mastered, cold-blood defuse.',  ru: 'Ретейк под контролем, разминирование.' },
  'round.won.3': { fr: 'AWPer impact, opening kill décisif.',  en: 'AWPer impact, decisive opening kill.', ru: 'AWP-импакт, решающий первый фраг.' },
  'round.won.4': { fr: 'Eco adverse punie sans trembler.',     en: 'Enemy eco punished without flinching.',ru: 'Эко соперника наказано.' },
  'round.won.5': { fr: 'Clutch 1v2 transformé.',               en: 'Clutch 1v2 converted.',                ru: 'Клатч 1v2 реализован.' },
  'round.lost.1': { fr: 'Timing raté, round donné.',           en: 'Timing missed, round given away.',     ru: 'Тайминг упущен, раунд проигран.' },
  'round.lost.2': { fr: 'Aim duel perdu sur le point d\'entrée.', en: 'Aim duel lost at entry point.',     ru: 'Дуэль проиграна на входе.' },
  'round.lost.3': { fr: 'Utility trop tardive, site perdu.',   en: 'Utility too late, site lost.',         ru: 'Утилити слишком поздно, сайт потерян.' },
  'round.lost.4': { fr: 'Clutch adverse, économie cassée.',    en: 'Enemy clutch, economy broken.',        ru: 'Клатч соперника, экономика сломана.' },
  'round.lost.5': { fr: 'Post-plant mal joué.',                en: 'Post-plant misplayed.',                ru: 'Пост-плант сыгран неверно.' },

  // ── ESEA ────────────────────────────────────────────────────
  'esea.season_over':        { fr: 'Saison terminée',     en: 'Season over',        ru: 'Сезон завершён' },
  'esea.register':           { fr: 'S\'inscrire',         en: 'Register',           ru: 'Записаться' },
  'esea.send_challenge':     { fr: 'Envoyer le défi',     en: 'Send challenge',     ru: 'Отправить вызов' },
  'esea.inscription':        { fr: 'Inscription',         en: 'Registration',       ru: 'Запись' },
  'esea.online_label':       { fr: 'Saison ESEA ONLINE',  en: 'SEASON ESEA ONLINE', ru: 'SEASON ESEA ONLINE' },
  'esea.waiting_teams':      { fr: 'En attente de {needed} équipe(s) ({count}/{max})', en: 'Waiting for {needed} more team(s) ({count}/{max})', ru: 'Ожидание {needed} команд(ы) ({count}/{max})' },
  'esea.no_teams':           { fr: 'Aucune équipe inscrite.', en: 'No teams registered.', ru: 'Нет зарегистрированных команд.' },
  'esea.tiers':              { fr: 'Paliers',              en: 'Tiers',              ru: 'Уровни' },
  'esea.tiers_rewards':      { fr: 'Paliers et Récompenses', en: 'Tiers & Rewards',  ru: 'Уровни и Награды' },
  'esea.already_registered': { fr: 'Tu es déjà inscrit dans cette saison.', en: 'You are already registered in this season.', ru: 'Вы уже зарегистрированы в этом сезоне.' },
  'esea.unregistered':       { fr: 'Désinscrit.',          en: 'Unregistered.',      ru: 'Отписан.' },
  'esea.register_title':     { fr: 'Inscription {name}',   en: 'Register {name}',    ru: 'Запись {name}' },
  'esea.register_info':      { fr: 'Ce droit d\'entrée est payé une seule fois. Les maps de saison ne coûtent pas de salaire, et le cash prize tombe seulement si tu gagnes la saison.', en: 'This entry fee is paid once. Season maps don\'t cost salary, and the cash prize only drops if you win the season.', ru: 'Взнос оплачивается один раз. Карты сезона не требуют зарплаты, и призовые выплачиваются только при победе в сезоне.' },
  'esea.current_balance':    { fr: 'Balance actuelle',     en: 'Current balance',    ru: 'Текущий баланс' },
  'esea.after_payment':      { fr: 'Après paiement',       en: 'After payment',      ru: 'После оплаты' },
  'esea.cash_prize':         { fr: 'Cash prize',           en: 'Cash prize',         ru: 'Призовые' },
  'esea.team_elo':           { fr: 'ELO équipe',           en: 'Team ELO',           ru: 'ЭЛО команды' },
  'esea.required':           { fr: 'requis',               en: 'required',           ru: 'требуется' },
  'esea.insufficient_funds': { fr: 'Fonds insuffisants.',  en: 'Insufficient funds.', ru: 'Недостаточно средств.' },
  'esea.pay_register':       { fr: 'Payer et s\'inscrire', en: 'Pay and register',   ru: 'Оплатить и записаться' },
  'esea.promoted':           { fr: 'Tu es promu en <strong>{tier}</strong> !', en: 'You are promoted to <strong>{tier}</strong>!', ru: 'Вы повышены до <strong>{tier}</strong>!' },
  'esea.max_tier':           { fr: 'Tu restes au palier actuel — palier maximum atteint.', en: 'You stay at the current tier — maximum tier reached.', ru: 'Вы остаётесь на текущем уровне — достигнут максимальный уровень.' },
  'esea.demoted':            { fr: 'Tu termines dernier — rétrogradé en <strong>{tier}</strong>.', en: 'You finish last — demoted to <strong>{tier}</strong>.', ru: 'Вы финишируете последним — понижены до <strong>{tier}</strong>.' },
  'esea.rank_result':        { fr: 'Tu termines {rank}e sur {total} équipes.', en: 'You finish {rank}th out of {total} teams.', ru: 'Вы финишируете {rank}-м из {total} команд.' },
  'esea.eliminated':         { fr: 'Tu as été éliminé.',   en: 'You have been eliminated.', ru: 'Вы выбыли.' },
  'esea.elo_required':       { fr: 'ELO requis',           en: 'ELO required',       ru: 'Требуемый ЭЛО' },
  'esea.entry_fee':          { fr: 'Entrée',               en: 'Entry',              ru: 'Взнос' },
  'esea.prize_pool':         { fr: 'Prize pool',           en: 'Prize pool',         ru: 'Призовой фонд' },
  'esea.rules_summary':      { fr: '6 équipes nécessaires. Élimination simple — 1 défaite élimine. Le champion est promu, le dernier rétrogradé.', en: '6 teams required. Single elimination — 1 loss eliminates. Champion is promoted, last is demoted.', ru: '6 команд. Одиночное выбывание — 1 поражение выбивает. Чемпион повышается, последний понижается.' },
  'esea.ranking':            { fr: 'Classement',           en: 'Rankings',           ru: 'Рейтинг' },
  'esea.register_error':     { fr: 'Erreur lors de l\'inscription.', en: 'Registration error.', ru: 'Ошибка при записи.' },
  'esea.unregister_btn':     { fr: 'Se désinscrire',  en: 'Unregister',   ru: 'Отписаться' },

  // ── Major ────────────────────────────────────────────────────
  'major.join':               { fr: 'Rejoindre le Major',         en: 'Join the Major',              ru: 'Войти в Мейджор' },
  'major.join_btn':           { fr: 'S\'inscrire au Major',       en: 'Join the Major',              ru: 'Записаться в Мейджор' },
  'major.leave':              { fr: 'Quitter le Major',           en: 'Leave the Major',             ru: 'Покинуть Мейджор' },
  'major.unregister':         { fr: 'Se désinscrire',             en: 'Unregister',                  ru: 'Отписаться' },
  'major.ready':              { fr: 'Prêt',                       en: 'Ready',                       ru: 'Готов' },
  'major.declare_ready':      { fr: 'Se déclarer prêt',           en: 'Declare ready',               ru: 'Объявить готовность' },
  'major.ready_waiting':      { fr: '✓ Prêt — en attente adversaire', en: '✓ Ready — waiting for opponent', ru: '✓ Готов — ожидание соперника' },
  'major.im_ready':           { fr: 'Je suis prêt à jouer !',    en: 'I\'m ready to play!',         ru: 'Я готов играть!' },
  'major.waiting':            { fr: 'En attente...',              en: 'Waiting...',                  ru: 'Ожидание...' },
  'major.championship':       { fr: 'CS2 Major Championship',     en: 'CS2 Major Championship',      ru: 'CS2 Major Championship' },
  'major.cash_prize':         { fr: 'Cash prize : <strong class="major-prize">1 000 000 ¢</strong>', en: 'Cash prize: <strong class="major-prize">1,000,000 ¢</strong>', ru: 'Призовые: <strong class="major-prize">1 000 000 ¢</strong>' },
  'major.wins':               { fr: 'remporte le Major !',        en: 'wins the Major!',             ru: 'побеждает в Мейджоре!' },
  'major.new_in':             { fr: 'Nouveau Major dans',         en: 'New Major in',                ru: 'Новый Мейджор через' },
  'major.resetting':          { fr: 'Réinitialisation en cours…', en: 'Resetting…',                  ru: 'Сброс…' },
  'major.champion':           { fr: 'Champion !',                 en: 'Champion!',                   ru: 'Чемпион!' },
  'major.prize_paid':         { fr: '+1 000 000 ¢ versés !',      en: '+1,000,000 ¢ awarded!',       ru: '+1 000 000 ¢ выплачено!' },
  'major.in_progress':        { fr: '⚡ Major en cours — {count} équipes', en: '⚡ Major in progress — {count} teams', ru: '⚡ Мейджор идёт — {count} команд' },
  'major.waiting_status':     { fr: 'En attente — {count}/8 min équipes ({readyCount} prêts)', en: 'Waiting — {count}/8 min teams ({readyCount} ready)', ru: 'Ожидание — {count}/8 мин. команд ({readyCount} готовы)' },
  'major.need_teams':         { fr: 'Il manque {n} équipe(s) pour lancer', en: '{n} team(s) needed to start', ru: 'Нужно ещё {n} команд(у) для старта' },
  'major.participants':       { fr: 'Participants ({count})',      en: 'Participants ({count})',       ru: 'Участники ({count})' },
  'major.eliminated':         { fr: 'Éliminé',                    en: 'Eliminated',                  ru: 'Выбыл' },
  'major.next_match':         { fr: 'Prochain match : <strong>vs {opp}</strong>', en: 'Next match: <strong>vs {opp}</strong>', ru: 'Следующий матч: <strong>vs {opp}</strong>' },
  'major.my_grid':            { fr: 'Ta grille',                  en: 'Your grid',                   ru: 'Твоя сетка' },
  'major.opp_grid':           { fr: 'Grille adverse',             en: 'Opponent grid',               ru: 'Сетка соперника' },
  'major.opp_grid_shoot':     { fr: 'Grille adverse — tire ici',  en: 'Opponent grid — shoot here',  ru: 'Сетка соперника — стреляй сюда' },
  'major.place_targets':      { fr: 'Place tes <strong>{n} cibles</strong>', en: 'Place your <strong>{n} targets</strong>', ru: 'Расставь <strong>{n} цели</strong>' },
  'major.placed_waiting':     { fr: '✓ Placé, en attente adversaire', en: '✓ Placed, waiting for opponent', ru: '✓ Расставлено, ожидание соперника' },
  'major.waiting_opp_place':  { fr: 'En attente que l\'adversaire place ses bateaux...', en: 'Waiting for opponent to place ships...', ru: 'Ожидание расстановки соперника...' },
  'major.confirm_placement':  { fr: 'Confirmer placement',        en: 'Confirm placement',           ru: 'Подтвердить расстановку' },
  'major.click_to_place':     { fr: 'Clique sur ta grille pour placer tes {n} cible(s) restante(s)', en: 'Click on your grid to place your {n} remaining target(s)', ru: 'Кликни на сетку чтобы поставить {n} оставшуюся(-ихся) цель(и)' },
  'major.your_turn':          { fr: '🎯 À toi de tirer !',        en: '🎯 Your turn to shoot!',      ru: '🎯 Твой ход!' },
  'major.opp_turn':           { fr: '⏳ Tour de {opp}',           en: '⏳ {opp}\'s turn',             ru: '⏳ Ход {opp}' },
  'major.my_hits':            { fr: 'Tes touches : <strong>{hits}/{total}</strong>', en: 'Your hits: <strong>{hits}/{total}</strong>', ru: 'Твои попадания: <strong>{hits}/{total}</strong>' },
  'major.opp_hits':           { fr: 'Touches adverses : <strong>{hits}/{total}</strong>', en: 'Opponent hits: <strong>{hits}/{total}</strong>', ru: 'Попадания соперника: <strong>{hits}/{total}</strong>' },
  'major.next_round':         { fr: 'Tu passes au prochain tour !', en: 'You advance to the next round!', ru: 'Вы проходите в следующий раунд!' },
  'major.wins_match':         { fr: 'remporte ce match.',           en: 'wins this match.',               ru: 'выигрывает этот матч.' },
  'major.see_bracket':        { fr: 'Voir le bracket →',            en: 'See bracket →',                  ru: 'Смотреть сетку →' },
  'major.round_quali':        { fr: 'Qualifications',               en: 'Qualifications',                 ru: 'Квалификация' },
  'major.round_quarter':      { fr: 'Quarts de finale',             en: 'Quarter-finals',                 ru: 'Четвертьфинал' },
  'major.round_semi':         { fr: 'Demi-finales',                 en: 'Semi-finals',                    ru: 'Полуфинал' },
  'major.round_final':        { fr: 'Finale',                       en: 'Final',                          ru: 'Финал' },

  // ── Cases page ───────────────────────────────────────────
  'case.simulator':       { fr: 'Caisse simulator',          en: 'Case simulator',         ru: 'Симулятор кейсов' },
  'case.selection':       { fr: 'Sélection des caisses',   en: 'Case selection',         ru: 'Выбор кейсов' },
  'case.active_label':    { fr: '{name} active',           en: '{name} active',          ru: '{name} активен' },
  'case.active_label_short': { fr: 'CAISSE ACTIVE',        en: 'ACTIVE CASE',            ru: 'АКТИВНЫЙ КЕЙС' },
  'case.label':           { fr: 'CAISSE',                  en: 'CASE',                   ru: 'КЕЙС' },
  'case.selected':        { fr: '{name} sélectionnée.',    en: '{name} selected.',       ru: '{name} выбран.' },
  'case.selected_btn':    { fr: 'Sélectionnée',            en: 'Selected',               ru: 'Выбран' },
  'case.select_btn':      { fr: 'Sélectionner',            en: 'Select',                 ru: 'Выбрать' },
  'case.details':         { fr: 'Détails',                 en: 'Details',                ru: 'Детали' },
  'case.drops':           { fr: 'skins disponibles',       en: 'available skins',        ru: 'возможных дропов' },
  'case.open_btn':        { fr: 'Ouvrir la caisse',        en: 'Open case',              ru: 'Открыть кейс' },
  'case.open_price':      { fr: 'Ouvrir - {price}',        en: 'Open - {price}',         ru: 'Открыть - {price}' },
  'case.ready':           { fr: 'Prêt à ouvrir.',          en: 'Ready to open.',         ru: 'Готово к открытию.' },
  'case.opening':         { fr: 'Ouverture en cours...',   en: 'Opening...',             ru: 'Открытие...' },
  'case.insufficient':    { fr: 'Balance insuffisante.',   en: 'Insufficient balance.',  ru: 'Недостаточно средств.' },
  'case.drop_obtained':   { fr: 'Drop obtenu',             en: 'Drop obtained',          ru: 'Получен дроп' },
  'case.contents':        { fr: 'Contenu de la caisse',    en: 'Case contents',          ru: 'Содержимое кейса' },
  'case.sold':            { fr: '{name} vendu pour {price}.', en: '{name} sold for {price}.', ru: '{name} продан за {price}.' },
  'case.item_kept':       { fr: 'Item ajouté à l\'inventaire.', en: 'Item added to inventory.', ru: 'Предмет добавлен в инвентарь.' },
  'case.item_sold':       { fr: 'Item vendu.',             en: 'Item sold.',             ru: 'Предмет продан.' },
  'case.empty_inventory': { fr: 'Ton inventaire est vide.', en: 'Your inventory is empty.', ru: 'Ваш инвентарь пуст.' },
  'case.inventory_reset': { fr: 'Inventaire réinitialisé.', en: 'Inventory reset.',      ru: 'Инвентарь сброшен.' },
  'case.inventory_count': { fr: '{n} item(s) - {value}',  en: '{n} item(s) - {value}',  ru: '{n} предм. - {value}' },
  'case.influence':       { fr: '+{n} influence',          en: '+{n} influence',         ru: '+{n} влияние' },
  'case.rare_drop':       { fr: 'Rare drop ! Tu as obtenu un couteau.', en: 'Rare drop! You got a knife.', ru: 'Редкий дроп! Вы получили нож.' },
  'case.tab_cases':       { fr: '🎁 Cases',                en: '🎁 Cases',               ru: '🎁 Кейсы' },
  'case.tab_contract':    { fr: '📜 Contrat d\'échange',   en: '📜 Trade-up Contract',   ru: '📜 Контракт обмена' },
  'contract.result_title': { fr: 'Nouveau skin obtenu',    en: 'New skin obtained',      ru: 'Новый скин получен' },
  'contract.title':       { fr: 'Échange de skins',        en: 'Skin Trade-Up',          ru: 'Обмен скинов' },
  'contract.desc':        { fr: 'Sélectionne 10 skins de même rareté pour obtenir 1 skin de rareté supérieure.', en: 'Select 10 skins of the same rarity to get 1 skin of the next rarity.', ru: 'Выбери 10 скинов одной редкости, чтобы получить 1 скин более высокой редкости.' },
  'contract.your_inventory': { fr: 'Ton inventaire',       en: 'Your inventory',         ru: 'Твой инвентарь' },
  'contract.selected':    { fr: 'Skins sélectionnés',      en: 'Selected skins',         ru: 'Выбранные скины' },
  'contract.result':      { fr: 'Résultat possible',       en: 'Possible result',        ru: 'Возможный результат' },
  'contract.submit':      { fr: 'Lancer le contrat',       en: 'Submit contract',        ru: 'Запустить контракт' },
  'contract.need_10':     { fr: 'Sélectionne exactement 10 skins.',  en: 'Select exactly 10 skins.',   ru: 'Выбери ровно 10 скинов.' },
  'contract.same_rarity': { fr: 'Tous les skins doivent être de même rareté.', en: 'All skins must be the same rarity.', ru: 'Все скины должны быть одной редкости.' },
  'contract.no_covert':   { fr: 'Les skins Covert et Rare ne peuvent pas être échangés.', en: 'Covert and Rare skins cannot be traded up.', ru: 'Скины Covert и Rare нельзя обменивать.' },
  'contract.success':     { fr: 'Contrat réussi ! Tu as obtenu : {name}', en: 'Contract successful! You got: {name}', ru: 'Контракт выполнен! Ты получил: {name}' },
  'contract.empty':       { fr: 'Aucun skin échangeable dans ton inventaire.', en: 'No tradeable skins in your inventory.', ru: 'Нет подходящих скинов в инвентаре.' },
  'contract.rarity_consumer':  { fr: 'Consumer',   en: 'Consumer',   ru: 'Consumer' },
  'contract.rarity_milspec':   { fr: 'Mil-Spec',   en: 'Mil-Spec',   ru: 'Mil-Spec' },
  'contract.rarity_restricted':{ fr: 'Restricted', en: 'Restricted', ru: 'Restricted' },
  'contract.rarity_classified':{ fr: 'Classified', en: 'Classified', ru: 'Classified' },
  'case.ok':                  { fr: 'OK',          en: 'OK',        ru: 'ОК' },

  // ── Generic ──────────────────────────────────────────────────
  'generic.close':         { fr: 'Fermer',    en: 'Close',    ru: 'Закрыть' },
  'generic.cancel':        { fr: 'Annuler',   en: 'Cancel',   ru: 'Отмена' },
  'generic.continue':      { fr: 'Continuer', en: 'Continue', ru: 'Продолжить' },
  'generic.save':          { fr: 'Sauvegarder', en: 'Save',   ru: 'Сохранить' },
  'generic.loading':       { fr: 'Chargement…', en: 'Loading…', ru: 'Загрузка…' },
  'generic.salary':        { fr: 'Salaire',   en: 'Salary',   ru: 'Зарплата' },
  'generic.salary_pl':     { fr: 'Salaires',  en: 'Salaries', ru: 'Зарплаты' },
  'match.win_log':         { fr: 'Victoire contre {name}. Gain: {prize}. Salaires: {salary}.', en: 'Win against {name}. Gain: {prize}. Salaries: {salary}.', ru: 'Победа над {name}. Выигрыш: {prize}. Зарплаты: {salary}.' },
  'match.loss_log':        { fr: 'Défaite contre {name}. Salaires payés: {salary}.', en: 'Loss against {name}. Salaries paid: {salary}.', ru: 'Поражение от {name}. Зарплаты выплачены: {salary}.' },
  'generic.player':        { fr: 'Joueur',    en: 'Player',   ru: 'Игрок' },
  'generic.players':       { fr: 'joueurs',   en: 'players',  ru: 'игроков' },
  'generic.win':           { fr: 'Victoire',  en: 'Victory',  ru: 'Победа' },
  'generic.loss':          { fr: 'Défaite',   en: 'Defeat',   ru: 'Поражение' },
  'generic.vs':            { fr: 'VS',        en: 'VS',       ru: 'VS' },
  'generic.mvp':           { fr: 'MVP',       en: 'MVP',      ru: 'MVP' },
  // ── Match live / tactics ────────────────────────────────────
  'tactic.pick_agressif':   { fr: 'Pick agressif',         en: 'Aggressive pick',    ru: 'Агрессивный пик' },
  'tactic.pick_agressif.h': { fr: 'Gros impact, risque élevé', en: 'Big impact, high risk', ru: 'Большой урон, высокий риск' },
  'tactic.angle_safe':      { fr: 'Angle safe',            en: 'Safe angle',         ru: 'Безопасный угол' },
  'tactic.angle_safe.h':    { fr: 'Moins fort, plus stable', en: 'Less powerful, more stable', ru: 'Слабее, но стабильнее' },
  'tactic.reposition':      { fr: 'Reposition',            en: 'Reposition',         ru: 'Перепозиционирование' },
  'tactic.reposition.h':    { fr: 'Punition si lu trop vite', en: 'Punished if read fast', ru: 'Наказание при быстром чтении' },
  'tactic.isoler':          { fr: 'Isoler les duels',      en: 'Isolate duels',      ru: 'Изолировать дуэли' },
  'tactic.isoler.h':        { fr: "Bon si ton équipe est au-dessus", en: 'Good if your team is ahead', ru: 'Хорошо если команда впереди' },
  'tactic.jouer_temps':     { fr: 'Jouer le temps',        en: 'Play for time',      ru: 'Игра на время' },
  'tactic.jouer_temps.h':   { fr: 'Choix prudent',         en: 'Safe choice',        ru: 'Осторожный выбор' },
  'tactic.trade':           { fr: 'Trade instant',         en: 'Instant trade',      ru: 'Мгновенный трейд' },
  'tactic.trade.h':         { fr: 'Fort mais chaotique',   en: 'Strong but chaotic', ru: 'Сильно, но хаотично' },
  'tactic.stack':           { fr: 'Stack bombsite',        en: 'Stack bombsite',     ru: 'Стек на бомбсайт' },
  'tactic.stack.h':         { fr: 'Lecture forte, mauvais si fake', en: 'Strong read, bad if fake', ru: 'Хорошее чтение, плохо если фейк' },
  'tactic.setup_retake':    { fr: 'Setup retake',          en: 'Setup retake',       ru: 'Настройка ретейка' },
  'tactic.setup_retake.h':  { fr: 'Stable en CT',          en: 'Stable as CT',       ru: 'Стабильно за CT' },
  'tactic.push_info':       { fr: 'Push info',             en: 'Push for info',      ru: 'Разведка' },
  'tactic.push_info.h':     { fr: 'Info rapide, duel risqué', en: 'Fast info, risky duel', ru: 'Быстрая инфо, рискованная дуэль' },
  'tactic.smoke_defuse':    { fr: 'Smoke defuse',          en: 'Smoke defuse',       ru: 'Разминирование в дыму' },
  'tactic.smoke_defuse.h':  { fr: 'Chance moyenne, gros swing', en: 'Average chance, big swing', ru: 'Средний шанс, большой риск' },
  'tactic.clear_site':      { fr: 'Clear site',            en: 'Clear site',         ru: 'Зачистка сайта' },
  'tactic.clear_site.h':    { fr: 'Plus lent, plus fiable', en: 'Slower, more reliable', ru: 'Медленнее, но надёжнее' },
  'tactic.ninja':           { fr: 'Ninja kit',             en: 'Ninja kit',          ru: 'Нинджа кит' },
  'tactic.ninja.h':         { fr: 'Très risqué, très rentable', en: 'Very risky, very rewarding', ru: 'Очень рискованно, очень выгодно' },
  'tactic.plant_safe':      { fr: 'Plant safe',            en: 'Safe plant',         ru: 'Безопасная установка' },
  'tactic.plant_safe.h':    { fr: 'Stable, peu de reward', en: 'Stable, low reward', ru: 'Стабильно, мало наград' },
  'tactic.plant_ouvert':    { fr: 'Plant ouvert',          en: 'Open plant',         ru: 'Открытая установка' },
  'tactic.plant_ouvert.h':  { fr: 'Meilleur post-plant',   en: 'Better post-plant',  ru: 'Лучший пост-плант' },
  'tactic.bait_retake':     { fr: 'Bait retake',           en: 'Bait retake',        ru: 'Приманка для ретейка' },
  'tactic.bait_retake.h':   { fr: 'Piège fort si aim OK',  en: 'Strong trap if aim OK', ru: 'Хорошая ловушка при хорошем эйме' },
  'tactic.rush_contact':    { fr: 'Rush contact',          en: 'Rush contact',       ru: 'Контактный раш' },
  'tactic.rush_contact.h':  { fr: 'Rapide, violent',       en: 'Fast, violent',      ru: 'Быстро, жёстко' },
  'tactic.split':           { fr: 'Split execute',         en: 'Split execute',      ru: 'Сплит-атака' },
  'tactic.split.h':         { fr: 'Équilibré',             en: 'Balanced',           ru: 'Сбалансировано' },
  'tactic.fake_rotate':     { fr: 'Fake rotate',           en: 'Fake rotate',        ru: 'Фейк ротация' },
  'tactic.fake_rotate.h':   { fr: 'Lecture tactique',      en: 'Tactical read',      ru: 'Тактическое чтение' },

  'match.ct_side':        { fr: 'CT side',               en: 'CT side',            ru: 'Сторона CT' },
  'match.t_side':         { fr: 'T side',                en: 'T side',             ru: 'Сторона T' },
  'match.decision':       { fr: 'Décision dans {n}s — base {p}%', en: 'Decision in {n}s — base {p}%', ru: 'Решение через {n}с — база {p}%' },

  // ── Match result ────────────────────────────────────────────
  'result.overtime':      { fr: 'Overtime terminé',   en: 'Overtime finished',  ru: 'Овертайм завершён' },
  'result.match_end':     { fr: 'Match terminé',       en: 'Match finished',     ru: 'Матч завершён' },
  'result.win':           { fr: 'Victoire',             en: 'Victory',            ru: 'Победа' },
  'result.loss':          { fr: 'Défaite',              en: 'Defeat',             ru: 'Поражение' },
  'result.mvp':           { fr: 'MVP de la partie',     en: 'MVP of the match',   ru: 'MVP матча' },
  'result.cash_prize':    { fr: 'Cash prize',           en: 'Cash prize',         ru: 'Призовые' },
  'result.balance':       { fr: 'Balance',              en: 'Balance',            ru: 'Баланс' },
  'result.rounds':        { fr: 'Rounds',               en: 'Rounds',             ru: 'Раунды' },
  'result.record':        { fr: 'Bilan',                en: 'Record',             ru: 'Счёт' },
  'result.tier':          { fr: 'Palier',               en: 'Tier',               ru: 'Уровень' },
  'result.season_record': { fr: 'Bilan saison',         en: 'Season record',      ru: 'Сезонный счёт' },
  'result.maps_played':   { fr: 'Maps jouées',          en: 'Maps played',        ru: 'Сыграно карт' },
  'result.cash_final':    { fr: 'Cash final',           en: 'Final cash',         ru: 'Итоговые призовые' },
  'result.season_win':    { fr: 'Victoire',             en: 'Victory',            ru: 'Победа' },
  'result.season_loss':   { fr: 'Défaite',              en: 'Defeat',             ru: 'Поражение' },

  // ── Settings ────────────────────────────────────────────────
  'settings.title':           { fr: 'Mon compte',                     en: 'My account',                   ru: 'Мой аккаунт' },
  'settings.heading':         { fr: 'Paramètres',                     en: 'Settings',                     ru: 'Настройки' },
  'settings.heading.span':    { fr: 'du profil',                      en: 'of the profile',               ru: 'профиля' },
  'settings.profile':         { fr: 'Profil',                         en: 'Profile',                      ru: 'Профиль' },
  'settings.change_username': { fr: 'Changer le pseudo',              en: 'Change username',              ru: 'Изменить псевдоним' },
  'settings.new_username':    { fr: 'Nouveau pseudo',                 en: 'New username',                 ru: 'Новый псевдоним' },
  'settings.username_ph':     { fr: '3–24 caractères',                en: '3–24 characters',              ru: '3–24 символа' },
  'settings.current_password':{ fr: 'Mot de passe actuel',            en: 'Current password',             ru: 'Текущий пароль' },
  'settings.confirm_required':{ fr: 'Confirmation requise',           en: 'Confirmation required',        ru: 'Требуется подтверждение' },
  'settings.save':            { fr: 'Sauvegarder',                    en: 'Save',                         ru: 'Сохранить' },
  'settings.change_password': { fr: 'Changer le mot de passe',        en: 'Change password',              ru: 'Изменить пароль' },
  'settings.new_password':    { fr: 'Nouveau mot de passe',           en: 'New password',                 ru: 'Новый пароль' },
  'settings.new_password_ph': { fr: '6 caractères minimum',           en: '6 characters minimum',         ru: 'Минимум 6 символов' },
  'settings.confirm_password':{ fr: 'Confirmer le nouveau mot de passe', en: 'Confirm new password',      ru: 'Подтвердите новый пароль' },
  'settings.repeat_password': { fr: 'Répète le nouveau mot de passe', en: 'Repeat new password',          ru: 'Повторите новый пароль' },
  'settings.change_email':    { fr: "Changer l'adresse email",        en: 'Change email address',         ru: 'Изменить email' },
  'settings.new_email':       { fr: 'Nouvel email',                   en: 'New email',                    ru: 'Новый email' },
  'settings.danger':          { fr: 'Zone dangereuse',                en: 'Danger zone',                  ru: 'Опасная зона' },
  'settings.delete':          { fr: 'Supprimer mon compte',           en: 'Delete my account',            ru: 'Удалить аккаунт' },
  'settings.delete_confirm':  { fr: 'Supprimer définitivement',       en: 'Delete permanently',           ru: 'Удалить навсегда' },
  'settings.delete_warning':  { fr: 'Cette action est irréversible. Toutes tes données seront supprimées.', en: 'This action is irreversible. All your data will be deleted.', ru: 'Это действие необратимо. Все данные будут удалены.' },
  'settings.confirm_pwd':     { fr: 'Confirme ton mot de passe',      en: 'Confirm your password',        ru: 'Подтвердите пароль' },
  'settings.cancel':          { fr: 'Annuler',                        en: 'Cancel',                       ru: 'Отмена' },
  'settings.current_pwd_ph':  { fr: 'Ton mot de passe actuel',        en: 'Your current password',        ru: 'Ваш текущий пароль' },
  // ── Tutorial ────────────────────────────────────────────────
  'tut.step':             { fr: 'Étape',            en: 'Step',              ru: 'Шаг' },
  'tut.of':               { fr: 'sur',              en: 'of',                ru: 'из' },
  'tut.skip':             { fr: 'Passer le tutoriel', en: 'Skip tutorial',   ru: 'Пропустить' },
  'tut.next':             { fr: 'Suivant →',        en: 'Next →',            ru: 'Далее →' },
  'tut.finish':           { fr: 'C\'est parti !',  en: 'Let\'s go!',       ru: 'Поехали!' },

  'tut.0.title':          { fr: '👋 Bienvenue sur CS TEAM MANAGER', en: '👋 Welcome to CS TEAM MANAGER', ru: '👋 Добро пожаловать в CS TEAM MANAGER' },
  'tut.0.text':           { fr: 'Ce rapide tutoriel te guide à travers les fonctionnalités essentielles. Tu peux le passer à tout moment.', en: 'This quick tutorial guides you through the essential features. You can skip it at any time.', ru: 'Этот быстрый туториал проведёт тебя по основным функциям. Ты можешь пропустить его в любой момент.' },

  'tut.1.title':          { fr: '🎁 Cases — Ouvre des caisses', en: '🎁 Cases — Open crates', ru: '🎁 Кейсы — Открывай ящики' },
  'tut.1.text':           { fr: 'Sur la page <strong>Drop</strong>, ouvre des caisses pour obtenir des skins CS2. Chaque skin a une valeur et donne des points d\'influence à ton équipe.', en: 'On the <strong>Drop</strong> page, open crates to get CS2 skins. Each skin has a value and gives influence points to your team.', ru: 'На странице <strong>Drop</strong> открывай ящики для получения скинов CS2. Каждый скин имеет ценность и даёт очки влияния команде.' },

  'tut.2.title':          { fr: '📜 Contrat d\'échange', en: '📜 Trade contract', ru: '📜 Контракт обмена' },
  'tut.2.text':           { fr: 'Dans l\'onglet <strong>Contrat d\'échange</strong>, combine 10 skins de même rareté pour obtenir 1 skin de rareté supérieure. Idéal pour upgrader ton inventaire.', en: 'In the <strong>Trade contract</strong> tab, combine 10 skins of the same rarity to get 1 skin of higher rarity. Perfect for upgrading your inventory.', ru: 'На вкладке <strong>Контракт обмена</strong> объединяй 10 скинов одной редкости, чтобы получить 1 скин более высокой редкости.' },

  'tut.3.title':          { fr: '⚡ Inventaire — Recrute ton équipe', en: '⚡ Inventory — Recruit your team', ru: '⚡ Инвентарь — Набери команду' },
  'tut.3.text':           { fr: 'Sur la page <strong>Inventaire</strong>, recrute 5 joueurs pour compléter ta checklist. Équipe-leur des skins pour booster leur influence et leur ELO.', en: 'On the <strong>Inventory</strong> page, recruit 5 players to complete your checklist. Equip them with skins to boost their influence and ELO.', ru: 'На странице <strong>Инвентарь</strong> набери 5 игроков для чеклиста. Снаряди их скинами для повышения влияния и ЭЛО.' },

  'tut.4.title':          { fr: '🏆 Match — Lance ton premier match', en: '🏆 Match — Play your first match', ru: '🏆 Матч — Сыграй первый матч' },
  'tut.4.text':           { fr: 'Une fois ton équipe complète, va sur <strong>Match</strong> et lance un <strong>Standard BO1</strong>. Gagne des matchs pour progresser dans la saison ESEA et atteindre la Pro League !', en: 'Once your team is complete, go to <strong>Match</strong> and start a <strong>Standard BO1</strong>. Win matches to progress in the ESEA season and reach Pro League!', ru: 'Когда команда укомплектована, перейди в <strong>Матч</strong> и запусти <strong>Standard BO1</strong>. Побеждай, чтобы продвигаться в сезоне ESEA к Pro League!' },

  'tut.5.title':          { fr: '✅ C\'est parti !', en: '✅ Let\'s go!', ru: '✅ Поехали!' },
  'tut.5.text':           { fr: 'Tu connais maintenant les bases. Bonne chance sur le serveur ! 💪', en: 'You now know the basics. Good luck on the server! 💪', ru: 'Теперь ты знаешь основы. Удачи на сервере! 💪' },

  // Discord help banner
  'discord.help':  { fr: 'Besoin d\'aide ?', en: 'Need help?', ru: 'Нужна помощь?' },

};

// ── Core functions ───────────────────────────────────────────────────────────

function getLang() {
  return localStorage.getItem('lang') || 'fr';
}

function setLang(lang) {
  if (!I18N_LANGS.includes(lang)) return;
  localStorage.setItem('lang', lang);
  applyI18n();
  window.dispatchEvent(new CustomEvent('lang-change', { detail: lang }));
}

function t(key, vars = {}) {
  const lang = getLang();
  const entry = I18N_TRANSLATIONS[key];
  if (!entry) return key; // fallback: retourne la clé
  let str = entry[lang] || entry['fr'] || key;
  // Interpolation simple : t('clé', { name: 'val' }) → remplace {name}
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  }
  return str;
}
window.t = t;

// ── DOM auto-translation ─────────────────────────────────────────────────────
// Éléments avec data-i18n="clé" sont traduits automatiquement

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr'); // ex: "placeholder"
    const val = t(key);
    if (attr) {
      el.setAttribute(attr, val);
    } else if (el.children.length === 0) {
      // Seulement si pas d'enfants HTML (évite d'écraser les inputs, selects, etc.)
      el.textContent = val;
    }
  });
  // Met à jour le sélecteur de langue
  _updateLangPicker();
}

// ── Language picker UI ───────────────────────────────────────────────────────

function _updateLangPicker() {
  const picker = document.getElementById('langPicker');
  if (!picker) return;
  const lang = getLang();
  picker.title = lang.toUpperCase();
  const btn = picker.querySelector('.lang-current');
  if (btn) btn.textContent = I18N_FLAGS[lang] || lang.toUpperCase();
}

function _buildLangPicker() {
  const el = document.getElementById('langPicker');
  if (!el) return;

  // Bouton dans le header
  el.innerHTML = `<button class="lang-current" type="button" title="${getLang().toUpperCase()}">${I18N_FLAGS[getLang()]}</button>`;

  // Dropdown attaché au body pour éviter les problèmes de stacking context
  let dd = document.getElementById('langDropdown');
  if (!dd) {
    dd = document.createElement('div');
    dd.id = 'langDropdown';
    dd.className = 'lang-dropdown';
    dd.innerHTML = I18N_LANGS.map(l => `<button type="button" data-lang="${l}">${I18N_FLAGS[l]}</button>`).join('');
    document.body.appendChild(dd);
    dd.addEventListener('click', e => {
      const lang = e.target.closest('[data-lang]')?.dataset.lang;
      if (lang) { setLang(lang); dd.classList.remove('is-open'); }
    });
  }

  el.querySelector('.lang-current').addEventListener('click', e => {
    e.stopPropagation();
    const rect = el.getBoundingClientRect();
    dd.style.top = (rect.bottom + 6) + 'px';
    dd.style.right = (window.innerWidth - rect.right) + 'px';
    dd.classList.toggle('is-open');
  });
}

// Ferme le dropdown si on clique ailleurs
document.addEventListener('click', e => {
  const dd = document.getElementById('langDropdown');
  if (dd && !e.target.closest('#langPicker') && !e.target.closest('#langDropdown')) {
    dd.classList.remove('is-open');
  }
});

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  _buildLangPicker();
  applyI18n();
  // Re-render les textes dynamiques après chargement de i18n
  if (typeof render === 'function') render();
  if (typeof renderMmPanel === 'function') renderMmPanel();
});

// Re-render quand la langue change
window.addEventListener('lang-change', () => {
  if (typeof render === 'function') render();
  if (typeof renderMmPanel === 'function') renderMmPanel();
});
