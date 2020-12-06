const brest = { n: "Брестская область", p: null };

const brestDept = {
  n: 'Филиал  УП "Белтехосмотр" в Брестской области',
  p: brest,
  e: [
    { t: 1, e: "brest-data@gto.by" },
    { t: 1, e: "brest@gto.by" }
  ]
};

const ds200 = {
  n: "Диагностическая станция № 200 г. Брест",
  e: [{ t: 1, e: "200@gto.by" }],
  p: brest
};

const ds222 = {
  n: "Диагностическая станция № 222 г. Жабинка",
  e: [{ t: 1, e: "222@gto.by" }],
  p: brest
};

const ds75 = {
  n: "Диагностическая станция № 75 дер. Замшаны",
  e: [{ t: 1, e: "75@gto.by" }],
  p: brest
};

const ds79 = {
  n: "Диагностическая станция № 79 г. Ганцевичи",
  e: [{ t: 1, e: "79@gto.by" }],
  p: brest
};

const ds241 = {
  n: "Диагностическая станция № 241 г. Ляховичи",
  p: brest
};

const vitebsk = { n: "Витебская область", p: null };

const ds167 = {
  n: "Диагностическая станция № 167 г. Витебск",
  e: [{ t: 1, e: "167@gto.by" }],
  p: vitebsk
};

const ds82 = {
  n: "Диагностическая станция № 82 г.п. Шарковщина",
  e: [{ t: 1, e: "82@gto.by" }],
  p: vitebsk
};

const vitebskDept = {
  n: 'Филиал УП "Белтехосмотр" в Витебской области',
  p: vitebsk,
  e: [{ t: 1, e: "vitebsk@gto.by" },{ t: 1, e: "vitebsk-data@gto.by" }],
};

const gomel = { n: "Гомельская область", sn: null, p: null };

const ds71 = {
  n: "Мобильная диагностическая станция № 71",
  p: gomel,
  e: [{ t: 1, e: "71@gto.by" }],
};

const ds72 = {
  e: [{ t: 1, e: "72@gto.by" }],
  n: "Мобильная диагностическая станция № 72",
  p: gomel
};

const ds74 = {
  e: [{ t: 1, e: "74@gto.by" }],
  n: "Мобильная диагностическая станция № 74",
  p: gomel
};

const gomelDept = {
  e: [{ t: 1, e: "gomel-data@gto.by" }],
  n: 'Филиал УП "Белтехосмотр" в Гомельской области',
  p: gomel
};

const grodno = { n: "Гродненская область", sn: null, p: null };

const ds124 = {
  e: [{ t: 1, e: "124@gto.by" }],
  n: "Диагностическая станция № 124 г. Слоним",
  p: grodno
};

const ds201 = {
  e: [{ t: 1, e: "201@gto.by" }],
  n: "Диагностическая станция № 201 г. Гродно",
  p: grodno
};

const ds73 = {
  e: [{ t: 1, e: "73@gto.by" }],
  n: "Мобильная диагностическая станция № 73",
  p: grodno
};

const ds83 = {
  e: [{ t: 1, e: "83@gto.by" }],
  n: "Диагностическая станция № 83 г. Дятлово",
  p: grodno
};

const ds78 = {
  e: [{ t: 1, e: "78@gto.by" }],
  n: "Диагностическая станция № 78 г. Островец",
  p: grodno
};

const ds235 = {
  n: "Диагностическая станция № 235 г. Гродно",
  p: grodno
};

const grodnoDept = {
  e: [{ t: 1, e: "grodno-data@gto.by" }, { t: 1, e: "grodno-iac@gto.by" }, { t: 1, e: "grodno-office@gto.by" }],
  n: 'Филиал  УП "Белтехосмотр" в Гродненской области',
  p: grodno
};

const minsk = { n: "Минская область", sn: null, p: null };

const ds70 = {
  e: [{ t: 1, e: "70@gto.by" }],
  n: "Мобильная диагностическая станция № 70",
  p: minsk
};

const ds80 = {
  e: [{ t: 1, e: "80@gto.by" }],
  n: "Диагностическая станция № 80 г. Слуцк",
  p: minsk
};

const r5Dept = {
  e: [{ t: 1, e: "minsk@gto.by" }],
  n: 'Филиал УП "Белтехосмотр" в Минской области',
  p: minsk
};

const r6 = { n: "Могилёвская область", sn: null, p: null };

const ds152 = {
  e: [{ t: 1, e: "152@gto.by" }],
  n: "Диагностическая станция № 152 г. Бобруйск",
  p: r6
};

const ds203 = {
  e: [{ t: 1, e: "203@gto.by" }],
  n: "Диагностическая станция № 203 г. Мстиславль",
  p: r6
};

const r6Dept = {
  e: [{ t: 1, e: "mogilev-data@gto.by" }],
  n: 'Филиал УП "Белтехосмотр" в Могилевской области',
  p: r6
};

const r7 = { n: "г. Минск", sn: null, p: null };

const ds210 = {
  e: [{ t: 1, e: "210@gto.by" }],
  n: "Диагностическая станция № 210 г. Минск",
  p: r7
};

const r7Dept = {
  e: [{ t: 1, e: "minsk-city@gto.by" }],
  n: 'Филиал УП "Белтехосмотр" в г. Минске',
  p: r7
};

const mainOffice = { n: "Головной офис", sn: null, p: null };

const buh = {
  n: "Отдел бухгалтерского учета и отчетности",
  p: mainOffice
};

const supply = {
  n: "Отдел материально-технического обеспечения",
  p: mainOffice
};

const hr = {
  n: "Отдел правовой, кадровой работы и контроля",
  p: mainOffice
};

const dept40 = {
  e: [{ t: 1, e: "autoschools@gto.by" }],
  n: "Отдел сертификации услуг по подготовке водителей",
  p: mainOffice
};

const dept41 = { n: "Служба главного инженера", sn: null, p: mainOffice };

const stoBrest = {
  n: "Станция технического обслуживания г. Брест",
  p: brest
};

const uogto = {
  n: "Управление организации государственного технического осмотра",
  p: mainOffice
};

const uefho = {
  e: [{ t: 1, e: "buh@gto.by" }],
  n: "Управление экономики и финансово-хозяйственного обеспечения",
  p: mainOffice
};

const dept45 = {
  n: "Ведущий инженер по охране труда",
  p: mainOffice
};

const bosses = { n: "Руководство", sn: null, p: mainOffice };

const uist = {
  e: [{ t: 1, e: "dist@gto.by" }],
  n: "Управление информационных систем и технологий",
  p: mainOffice
};

export const contactsRaw = [
  {
    e: [{ t: 1, e: "harakh.e@gto.by" }],
    n: "Гарах Евгений Владимирович",
    p: ds200
  },
  {
    e: [{ t: 1, e: "holiunchik.v@gto.by" }],
    n: "Голюнчик Василий Петрович",
    p: ds200
  },
  {
    e: [{ t: 1, e: "dedechko.d@gto.by" }],
    n: "Дедечко Денис Александрович",
    p: ds200
  },
  {
    e: [{ t: 1, e: "lahodich.v@gto.by" }],
    n: "Лагодич Вадим Сергеевич",
    p: ds200
  },
  {
    e: [{ t: 1, e: "petruchik.d@gto.by" }],
    n: "Петручик Дмитрий Михайлович",
    p: ds200
  },
  {
    ph: [{ t: 1, p: "+37529 7004432" }],
    e: [{ t: 1, e: "tishuk.a@gto.by" }],
    n: "Тишук Александр Анатольевич",
    p: ds200
  },
  {
    ph: [{ t: 1, p: "+37544 791-60-70" }],
    e: [{ t: 1, e: "kharkovich.o@gto.by" }],
    n: "Харкович Ольга Степановна",
    p: ds200
  },
  {
    e: [{ t: 1, e: "iakimovich.m@gto.by" }],
    n: "Якимович Максим Александрович",
    p: ds200
  },
  {
    e: [{ t: 1, e: "demidiuk.v@gto.by" }],
    n: "Демидюк Валерий Николаевич",
    p: ds222
  },
  {
    e: [{ t: 1, e: "kovch.l@gto.by" }],
    n: "Ковч Лариса Васильевна",
    p: ds222
  },
  {
    e: [{ t: 1, e: "sorochuk.a@gto.by" }],
    n: "Сорочук Александр Владимирович",
    p: ds222
  },
  {
    ph: [{ t: 1, p: "+37529 7006204" }],
    e: [{ t: 1, e: "kharkovich.d@gto.by" }],
    n: "Харкович Дмитрий Михайлович",
    p: ds222
  },
  {
    e: [{ t: 1, e: "bezhenar.v@gto.by" }],
    n: "Беженарь Валентина Ивановна",
    p: ds75
  },
  {
    ph: [{ t: 1, p: "+37529 7004472" }],
    e: [{ t: 1, e: "burshtyn.v@gto.by" }],
    n: "Бурштын Виктор Витальевич",
    p: ds75
  },
  {
    e: [{ t: 1, e: "hrishin.s@gto.by" }],
    n: "Гришин Сергей Геннадьевич",
    p: ds75
  },
  {
    e: [{ t: 1, e: "lukianchuk.a@gto.by" }],
    n: "Лукьянчук Андрей Иванович",
    p: ds75
  },
  {
    e: [{ t: 1, e: "savchuk.s@gto.by" }],
    n: "Савчук Сергей Иванович",
    p: ds75
  },
  {
    e: [{ t: 1, e: "volodko.d@gto.by" }],
    n: "Володько Дмитрий Николаевич",
    p: ds79
  },
  {
    ph: [{ t: 1, p: "+37529 340-03-05" }],
    e: [{ t: 1, e: "volosiuk.m@gto.by" }],
    n: "Волосюк Марина Ивановна",
    p: ds79
  },
  {
    ph: [
      { t: 1, p: "+37529 7003483" },
      { t: 1, p: "+37529 344-41-83" }
    ],
    e: [{ t: 1, e: "holubovich.p@gto.by" }],
    n: "Голубович Павел Иванович",
    p: ds79
  },
  {
    e: [{ t: 1, e: "zelenko.h@gto.by" }],
    n: "Зеленко Галина Ивановна",
    p: ds79
  },
  {
    e: [{ t: 1, e: "lenkovets.n@gto.by" }],
    n: "Ленковец Николай Николаевич",
    p: ds79
  },
  {
    e: [{ t: 1, e: "burbitskii.d@gto.by" }],
    n: "Бурбицкий Дмитрий Иванович",
    p: ds241
  },
  {
    e: [{ t: 1, e: "litskevich.v@gto.by" }],
    n: "Лицкевич Владимир Станиславович",
    p: ds241
  },
  {
    e: [{ t: 1, e: "rudaia.z@gto.by" }],
    n: "Рудая Жанна Юльяновна",
    p: ds241
  },
  {
    ph: [
      { t: 1, p: "+37529 7006503" },
      { t: 1, p: "+37529 392-28-33" }
    ],
    e: [{ t: 1, e: "titko.i@gto.by" }],
    n: "Титко Юрий Степанович",
    p: ds241
  },
  {
    ph: [{ t: 1, p: "+37529 308-39-31" }],
    e: [{ t: 1, e: "beliavskii.n@gto.by" }],
    n: "Белявский Николай Захарович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "botvinko.v@gto.by" }],
    n: "Ботвинко Виктор Семёнович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-01" }],
    e: [{ t: 1, e: "verenich.i@gto.by" }],
    n: "Веренич Иван Григорьевич",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "volynets.m@gto.by" }],
    n: "Волынец Михаил Юрьевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 151-19-96" }],
    e: [{ t: 1, e: "harkovich.v@gto.by" }],
    n: "Гаркович Владимир Алексеевич",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "holovchik.m@gto.by" }],
    n: "Головчик Максим Викторович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-02" }],
    e: [{ t: 1, e: "hrinkevich.a@gto.by" }],
    n: "Гринкевич Александр Владимирович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 131-81-00" }],
    e: [{ t: 1, e: "demkovich.s@gto.by" }],
    n: "Демкович Сергей Иванович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37544 791-60-80" }],
    e: [{ t: 1, e: "drahun.s@gto.by" }],
    n: "Драгун Сергей Павлович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "dubeiko.a@gto.by" }],
    n: "Дубейко Александр Петрович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-03" }],
    e: [{ t: 1, e: "kapitan.v@gto.by" }],
    n: "Капитан Валерий Иванович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "kuran.o@gto.by" }],
    n: "Куран Олег Адамович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 143-10-60" }],
    e: [{ t: 1, e: "leshkevich.s@gto.by" }],
    n: "Лешкевич Сергей Степанович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "loziuk.a@gto.by" }],
    n: "Лозюк Александр Владимирович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-05" }],
    e: [{ t: 1, e: "liubaev.a@gto.by" }],
    n: "Любаев Александр Иванович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "mazan.i@gto.by" }],
    n: "Мазан Ирина Степановна",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 115-17-92" }],
    e: [{ t: 1, e: "melekh.v@gto.by" }],
    n: "Мелех Валерий Николаевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-06" }],
    e: [{ t: 1, e: "minov.m@gto.by" }],
    n: "Минов Михаил Николаевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 143-10-40" }],
    e: [{ t: 1, e: "mikhniuk.a@gto.by" }],
    n: "Михнюк Александр Викторович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37544 793-32-88" }],
    e: [{ t: 1, e: "nesteruk.d@gto.by" }],
    n: "Нестерук Денис Анатольевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-08" }],
    e: [{ t: 1, e: "oniskevich.v@gto.by" }],
    n: "Онискевич Владимир Николаевич",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "papkovich.p@gto.by" }],
    n: "Папкович Павел Викторович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 115-17-66" }],
    e: [{ t: 1, e: "pashinskii.n@gto.by" }],
    n: "Пашинский Николай Васильевич",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "pashkevich.d@gto.by" }],
    n: "Пашкевич Дмитрий Семёнович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-10" }],
    e: [{ t: 1, e: "potapchuk.i@gto.by" }],
    n: "Потапчук Игорь Витальевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37544 737-62-73" }],
    e: [{ t: 1, e: "rovneiko.a@gto.by" }],
    n: "Ровнейко Александр Евгеньевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 355-05-01" }],
    e: [{ t: 1, e: "sakovich.k@gto.by" }],
    n: "Сакович Константин Анатольевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-18" }],
    e: [{ t: 1, e: "simonovich.v@gto.by" }],
    n: "Симонович Виктор Владимирович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-11" }],
    e: [{ t: 1, e: "slonevskii.a@gto.by" }],
    n: "Слоневский Андрей Васильевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 634-20-01" }],
    e: [{ t: 1, e: "sorochuk.v@gto.by" }],
    n: "Сорочук Виктор Иванович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 164-16-15" }],
    e: [{ t: 1, e: "trus.v@gto.by" }],
    n: "Трус Виктор Николаевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 143-10-50" }],
    e: [{ t: 1, e: "kharik.a@gto.by" }],
    n: "Харик Александр Иванович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37544 486-83-64" }],
    e: [{ t: 1, e: "khartonovich.n@gto.by" }],
    n: "Хартонович Николай Александрович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "khvochshevskii.i@gto.by" }],
    n: "Хвощевский Игорь Алексеевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 355-05-70" }],
    e: [{ t: 1, e: "khilkovich.v@gto.by" }],
    n: "Хилькович Виталий Федорович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37544 712-41-43" }],
    e: [{ t: 1, e: "tsybulko.h@gto.by" }],
    n: "Цыбулько Георгий Николаевич",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "tsypkevich.v@gto.by" }],
    n: "Цыпкевич Виталий Сергеевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37544 712-41-42" }],
    e: [{ t: 1, e: "sheliahovich.i@gto.by" }],
    n: "Шелягович Юрий Георгиевич",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "shishko.m@gto.by" }],
    n: "Шишко Маргарита Сергеевна",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "shpak.d@gto.by" }],
    n: "Шпак Дарья Ярославовна",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "chsherba.f@gto.by" }],
    n: "Щерба Федор Николаевич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 377-05-47" }],
    e: [{ t: 1, e: "iankovskii.p@gto.by" }],
    n: "Янковский Пётр Антонович",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37529 355-05-26" }],
    e: [{ t: 1, e: "iakhnovets.n@gto.by" }],
    n: "Яхновец Николай Лукич",
    p: brestDept
  },
  {
    ph: [{ t: 1, p: "+37533 9119746" }],
    e: [{ t: 1, e: "pronevich.a@gto.by" }],
    n: "Проневич Андрей Юрьевич",
    p: brestDept
  },
  {
    ph: [
      { t: 1, p: "+37529 7001282" },
      { t: 1, p: "+37544 543-36-88" }
    ],
    e: [{ t: 1, e: "koposhilko.a@gto.by" }],
    n: "Копошилко Александр Владимирович",
    p: brestDept
  },
  {
    e: [{ t: 1, e: "bohdanov.a@gto.by" }],
    n: "Богданов Алексей Сергеевич",
    p: ds167
  },
  {
    e: [{ t: 1, e: "vasilev.a@gto.by" }],
    n: "Васильев Андрей Михайлович",
    p: ds167
  },
  {
    e: [{ t: 1, e: "drindrozhik.v@gto.by" }],
    n: "Дриндрожик Вячеслав Григорьевич",
    p: ds167
  },
  {
    e: [{ t: 1, e: "kletskova.v@gto.by" }],
    n: "Клецкова Валентина Геннадьевна",
    p: ds167
  },
  {
    e: [{ t: 1, e: "lopatin.i@gto.by" }],
    n: "Лопатин Игорь Викторович",
    p: ds167
  },
  {
    e: [{ t: 1, e: "molchanov.s@gto.by" }],
    n: "Молчанов Сергей Михайлович",
    p: ds167
  },
  {
    ph: [{ t: 1, p: "+37529 7004147" }],
    e: [{ t: 1, e: "kuleshov.a@gto.by" }],
    n: "Кулешов Александр Николаевич",
    p: ds167
  },
  {
    e: [{ t: 1, e: "sukhval.a@gto.by" }],
    n: "Сухвал Александр Петрович",
    p: ds167
  },
  {
    e: [{ t: 1, e: "aniskovich.s@gto.by" }],
    n: "Аниськович Сергей Фёдорович",
    p: ds82
  },
  {
    ph: [{ t: 1, p: "+37529 7005659" }],
    e: [{ t: 1, e: "kaplunovskii.a@gto.by" }],
    n: "Каплуновский Андрей Николаевич",
    p: ds82
  },
  {
    e: [{ t: 1, e: "andron.d@gto.by" }],
    n: "Андрон Дмитрий Николаевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "arestov.n@gto.by" }],
    n: "Арестов Николай Фёдорович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "bakunov.a@gto.by" }],
    n: "Бакунов Алексей Петрович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "belous.v@gto.by" }],
    n: "Белоус Виктор Иванович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "beliakovich.v@gto.by" }],
    n: "Белякович Владимир Николаевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "bohatyriov.a@gto.by" }],
    n: "Богатырёв Андрей Фёдорович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "verechshako.v@gto.by" }],
    n: "Верещако Валерий Валерьевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "volodko.s@gto.by" }],
    n: "Володько Сергей Леонидович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "harbus.p@gto.by" }],
    n: "Гарбус Пётр Владимирович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "hil.s@gto.by" }],
    n: "Гиль Сергей Аркадьевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "hrihorovich.e@gto.by" }],
    n: "Григорович Эдуард Эдуардович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "huzei.a@gto.by" }],
    n: "Гузей Андрей Евгеньевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "danilchenko.s@gto.by" }],
    n: "Данильченко Сергей Иванович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "emelianov.a@gto.by" }],
    n: "Емельянов Алексей Петрович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "efimov.o@gto.by" }],
    n: "Ефимов Олег Михайлович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "zavadskii.a@gto.by" }],
    n: "Завадский Анатолий Иосифович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "zavadskii.v@gto.by" }],
    n: "Завадский Вячеслав Иосифович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "kovalchuk.d@gto.by" }],
    n: "Ковальчук Дмитрий Олегович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "kozlov.o@gto.by" }],
    n: "Козлов Олег Анатольевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "konyshev.o@gto.by" }],
    n: "Конышев Олег Алексеевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "korban.a@gto.by" }],
    n: "Корбан Анастасия Геннадьевна",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "levitskii.s@gto.by" }],
    n: "Левицкий Сергей Вячеславович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "lomakin.e@gto.by" }],
    n: "Ломакин Евгений Игоревич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "markovich.p@gto.by" }],
    n: "Маркович Павел Сергеевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "mihal.l@gto.by" }],
    n: "Мигаль Леонид Данилович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "moshkariov.a@gto.by" }],
    n: "Мошкарёв Алексей Георгиевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "nemchikov.a@gto.by" }],
    n: "Немчиков Анатолий Михайлович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "novitskii.v@gto.by" }],
    n: "Новицкий Виктор Васильевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "pantelei.d@gto.by" }],
    n: "Пантелей Дмитрий Михайлович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "prokopenko.i@gto.by" }],
    n: "Прокопенко Игорь Григорьевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "rishtovskii.a@gto.by" }],
    n: "Риштовский Александр Михайлович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "rubis.i@gto.by" }],
    n: "Рубис Игорь Васильевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "rybakov.i@gto.by" }],
    n: "Рыбаков Игорь Николаевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "senchilo.a@gto.by" }],
    n: "Сенчило Андрей Владимирович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "serebro.p@gto.by" }],
    n: "Серебро Пётр Сергеевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "soloviov.d@gto.by" }],
    n: "Соловьёв Дмитрий Михайлович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "sukhoverskii.v@gto.by" }],
    n: "Суховерский Виктор Донатович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "shinkariov.v@gto.by" }],
    n: "Шинкарёв Владимир Борисович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "shuravin.s@gto.by" }],
    n: "Шуравин Сергей Васильевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "iukhnovich.k@gto.by" }],
    n: "Юхнович Казимир Болеславович",
    p: vitebskDept
  },
  {
    ph: [{ t: 1, p: "+37529 7001503" }],
    e: [{ t: 1, e: "savitsky.v@gto.by" }],
    n: "Савицкий Владимир Анатольевич",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "kazuro.s@gto.by" }],
    n: "Казуро Сергей Дмитриевич",
    p: vitebskDept
  },
  {
    ph: [{ t: 1, p: "+37529 7001192" }],
    e: [{ t: 1, e: "kishkovsky.v@gto.by" }],
    n: "Кишковский Вильгельм Вильгельмович",
    p: vitebskDept
  },
  {
    e: [{ t: 1, e: "borisenko.i@gto.by" }],
    n: "Борисенко Иван Александрович",
    p: ds71
  },
  {
    e: [{ t: 1, e: "muzhchinin.i@gto.by" }],
    n: "Мужчинин Иван Николаевич",
    p: ds71
  },
  {
    ph: [{ t: 1, p: "+37529 7003504" }],
    e: [{ t: 1, e: "pimanionok.e@gto.by" }],
    n: "Пиманенок Евгений Александрович",
    p: ds71
  },
  {
    ph: [{ t: 1, p: "+37529 7003729" }],
    e: [{ t: 1, e: "havrik.v@gto.by" }],
    n: "Гаврик Виталий Петрович",
    p: ds72
  },
  {
    e: [{ t: 1, e: "babarika.v@gto.by" }],
    n: "Бабарика Владимир Адамович",
    p: ds74
  },
  {
    ph: [{ t: 1, p: "+37529 7004254" }],
    e: [{ t: 1, e: "baranov.s@gto.by" }],
    n: "Баранов Сергей Адамович",
    p: ds74
  },
  {
    e: [{ t: 1, e: "romashevskii.r@gto.by" }],
    n: "Ромашевский Роман Николаевич",
    p: ds74
  },
  {
    e: [{ t: 1, e: "torchik.i@gto.by" }],
    n: "Торчик Игорь Владимирович",
    p: ds74
  },
  {
    e: [{ t: 1, e: "baranovskii.a@gto.by" }],
    n: "Барановский Антон Викторович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "vasiliuk.m@gto.by" }],
    n: "Василюк Максим Сергеевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "vorobei.a@gto.by" }],
    n: "Воробей Александр Григорьевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "holod.n@gto.by" }],
    n: "Голод Николай Владимирович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "horoshko.a@gto.by" }],
    n: "Горошко Александр Леонидович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "hrichshenko.p@gto.by" }],
    n: "Грищенко Павел Владимирович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "emelianov.o@gto.by" }],
    n: "Емельянов Олег Викентьевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "zhukovskii.h@gto.by" }],
    n: "Жуковский Геннадий Николаевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "zverev.a@gto.by" }],
    n: "Зверев Артем Сергеевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "keturov.p@gto.by" }],
    n: "Кетуров Павел Александрович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "kirichek.a@gto.by" }],
    n: "Киричек Александр Михайлович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "klimkov.v@gto.by" }],
    n: "Климков Виктор Михайлович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "kliuchnikov.v@gto.by" }],
    n: "Ключников Василий Степанович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "kolodeznyi.i@gto.by" }],
    n: "Колодезный Юрий Анатольевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "kostroma.f@gto.by" }],
    n: "Кострома Федор Федорович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "koshman.a@gto.by" }],
    n: "Кошман Александр Сергеевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "kuprienko.v@gto.by" }],
    n: "Куприенко Виктор Васильевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "lapitskii.o@gto.by" }],
    n: "Лапицкий Олег Петрович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "latyshev.m@gto.by" }],
    n: "Латышев Михаил Анатольевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "marchenko.a@gto.by" }],
    n: "Марченко Алексей Николаевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "mariankov.a@gto.by" }],
    n: "Марьянков Алексей Сергеевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "mihai.h@gto.by" }],
    n: "Мигай Григорий Григорьевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "nikitenko.a@gto.by" }],
    n: "Никитенко Александр Евгеньевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "novikov.s@gto.by" }],
    n: "Новиков Сергей Николаевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "pimanionok.d@gto.by" }],
    n: "Пиманёнок Денис Александрович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "prikhodko.i@gto.by" }],
    n: "Приходько Игорь Игоревич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "rolinskii.s@gto.by" }],
    n: "Ролинский Сергей Викторович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "romaniuk.a@gto.by" }],
    n: "Романюк Андрей Николаевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "rusinovich.n@gto.by" }],
    n: "Русинович Николай Яковлевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "sidorenko.a@gto.by" }],
    n: "Сидоренко Артём Васильевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "skorokhod.o@gto.by" }],
    n: "Скороход Олег Валерьевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "sobol.a@gto.by" }],
    n: "Соболь Алексей Александрович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "tarasenko.v@gto.by" }],
    n: "Тарасенко Валентин Антонович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "tkachenko.v.s@gto.by" }],
    n: "Ткаченко Виталий Сергеевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "tiukhai.i@gto.by" }],
    n: "Тюхай Юрий Евгеньевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "sharlov.a@gto.by" }],
    n: "Шарлов Андрей Николаевич",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "shesterikov.m@gto.by" }],
    n: "Шестериков Максим Владимирович",
    p: gomelDept
  },
  {
    ph: [{ t: 1, p: "+37529 7001269" }],
    e: [{ t: 1, e: "popkov.e@gto.by" }],
    n: "Попков Эдуард Александрович",
    p: gomelDept
  },
  {
    ph: [{ t: 1, p: "+37529 7001193" }],
    e: [{ t: 1, e: "drobov.a@gto.by" }],
    n: "Дробов Анатолий Иванович",
    p: gomelDept
  },
  {
    e: [{ t: 1, e: "vitkovskaia.o@gto.by" }],
    n: "Витковская Оксана Валерьевна",
    p: ds124
  },
  {
    e: [{ t: 1, e: "ostapchik.s@gto.by" }],
    n: "Остапчик Сергей Михайлович",
    p: ds124
  },
  {
    ph: [{ t: 1, p: "+37529 7005864" }],
    e: [{ t: 1, e: "tanchik.v@gto.by" }],
    n: "Танчик Владимир Тимофеевич",
    p: ds124
  },
  {
    e: [{ t: 1, e: "trus.t@gto.by" }],
    n: "Трус Таиса Дмитриевна",
    p: ds124
  },
  {
    e: [{ t: 1, e: "iarmolovich.a@gto.by" }],
    n: "Ярмолович Александр Леонтьевич",
    p: ds124
  },
  {
    e: [{ t: 1, e: "kapustin.a@gto.by" }],
    n: "Капустин Александр Викторович",
    p: ds201
  },
  {
    ph: [
      { t: 1, p: "+37529 7005613" },
      { t: 1, p: "+37529 655-62-40" }
    ],
    e: [{ t: 1, e: "kolesnik.a@gto.by" }],
    n: "Колесник Александр Иванович",
    p: ds201
  },
  {
    e: [{ t: 1, e: "krupitsa.a@gto.by" }],
    n: "Крупица Андрей Александрович",
    p: ds201
  },
  {
    e: [{ t: 1, e: "shpak.d.s@gto.by" }],
    n: "Шпак Данута Станиславовна",
    p: ds201
  },
  {
    ph: [{ t: 1, p: "+37529 7005873" }],
    e: [{ t: 1, e: "dukel.t@gto.by" }],
    n: "Дукель Тадеуш Станиславович",
    p: ds73
  },
  {
    e: [{ t: 1, e: "kocherevskii.k@gto.by" }],
    n: "Кочеревский Казимир-Иван Леонардович",
    p: ds73
  },
  {
    e: [{ t: 1, e: "stankevich.v@gto.by" }],
    n: "Станкевич Виктор Марьянович",
    p: ds73
  },
  {
    e: [{ t: 1, e: "herbik.a@gto.by" }],
    n: "Гербик Александр Николаевич",
    p: ds83
  },
  {
    e: [{ t: 1, e: "zdanovich.i@gto.by" }],
    n: "Зданович Иван Станиславович",
    p: ds83
  },
  {
    e: [{ t: 1, e: "mukha.a@gto.by" }],
    n: "Муха Александр Эдуардович",
    p: ds83
  },
  {
    ph: [{ t: 1, p: "+37529 7005989" }],
    e: [{ t: 1, e: "urbanovich.o@gto.by" }],
    n: "Урбанович Олег Иосифович",
    p: ds83
  },
  {
    e: [{ t: 1, e: "azevich.a@gto.by" }],
    n: "Азевич Анатолий Петрович",
    p: ds78
  },
  {
    e: [{ t: 1, e: "medeksho.d@gto.by" }],
    n: "Медекшо  Данута Станиславовна",
    p: ds78
  },
  {
    ph: [
      { t: 1, p: "+37529 7005805" },
      { t: 1, p: "+37529 319-35-49" }
    ],
    e: [{ t: 1, e: "medeksho.m@gto.by" }],
    n: "Медекшо Михаил Зыгмунтович",
    p: ds78
  },
  {
    e: [{ t: 1, e: "tumachshik.a@gto.by" }],
    n: "Тумащик Александр Анатольевич",
    p: ds78
  },
  {
    e: [{ t: 1, e: "banenko.p@gto.by" }],
    n: "Баненко Павел Андреевич",
    p: ds235
  },
  {
    ph: [{ t: 1, p: "+37529 7005643" }],
    e: [{ t: 1, e: "budrevich.v@gto.by" }],
    n: "Будревич Виктор Викторович",
    p: ds235
  },
  {
    e: [{ t: 1, e: "misiukevich.h@gto.by" }],
    n: "Мисюкевич Галина Герасимовна",
    p: ds235
  },
  {
    e: [{ t: 1, e: "petrevich.a@gto.by" }],
    n: "Петревич Артур Станиславович",
    p: ds235
  },
  {
    e: [{ t: 1, e: "shimak.a@gto.by" }],
    n: "Шимак Александр Сергеевич",
    p: ds235
  },
  {
    e: [{ t: 1, e: "baraban.v@gto.by" }],
    n: "Барабан Виктор Андреевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "barilo.a@gto.by" }],
    n: "Барило Андрея Николаевича",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37529 346-87-43" }],
    e: [{ t: 1, e: "bebko.k@gto.by" }],
    n: "Бебко Казимир Бонифатьевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "borodin.t@gto.by" }],
    n: "Бородин Тадеуш Чеславович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "voronovich.l@gto.by" }],
    n: "Воронович Леонид Брониславович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "hlavitskaia.e@gto.by" }],
    n: "Главицкая Елена Геннадьевна",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37529 627-81-96" }],
    e: [{ t: 1, e: "hozdik.a@gto.by" }],
    n: "Гоздик Анатолий Николаевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "hoilo.e@gto.by" }],
    n: "Гойло Евгений Чеславович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "horbach.m@gto.by" }],
    n: "Горбач Франц Владимирович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "hriniuk.i@gto.by" }],
    n: "Гринюк Игорь Сергеевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "derneiko.s@gto.by" }],
    n: "Дернейко Сергей Петрович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "dubitskii.s@gto.by" }],
    n: "Дубицкий Святослав Деонисович",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37544 703-54-08" }],
    e: [{ t: 1, e: "dubrovka.h@gto.by" }],
    n: "Дубровка Геннадий Станиславович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "evseichik.l@gto.by" }],
    n: "Евсейчик Леонид Владимирович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "zhivushko.n@gto.by" }],
    n: "Живушко Николай Александрович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "ivanov.i@gto.by" }],
    n: "Иванов Юрий Александрович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "kolesnik.v@gto.by" }],
    n: "Колесник Ванда Казимировна",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "kudelko.i@gto.by" }],
    n: "Куделько Иван Иванович",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37544 703-51-55" }],
    e: [{ t: 1, e: "kulesha.v@gto.by" }],
    n: "Кулеша Виктор Николаевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "liasotskii.i@gto.by" }],
    n: "Лясоцкий Юрий Витославович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "liakh.a@gto.by" }],
    n: "Лях Андрей Иванович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "markevich.s@gto.by" }],
    n: "Маркевич Славомир Генрихович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "martynovich.a@gto.by" }],
    n: "Мартынович Александр Григорьевич",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37529 146-60-09" }],
    e: [{ t: 1, e: "matskevich.c@gto.by" }],
    n: "Мацкевич Чеслав Янович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "medkovskii.s@gto.by" }],
    n: "Медковский Станислав Вацлавович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "misiukevich.d@gto.by" }],
    n: "Мисюкевич Дмитрий Николаевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "moroz.i@gto.by" }],
    n: "Мороз Юрий Павлович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "mukha.p@gto.by" }],
    n: "Муха Павел Михайлович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "patsuk.v@gto.by" }],
    n: "Пацук Владимир Феликсович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "pisar.i@gto.by" }],
    n: "Писарь Иван Васильевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "pozhidaev.v@gto.by" }],
    n: "Пожидаев Валерий Николаевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "prokopik.m@gto.by" }],
    n: "Прокопик Мария Олеговна",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "pukhov.m@gto.by" }],
    n: "Пухов Михаил Александрович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "radiuk.i@gto.by" }],
    n: "Радюк Юрий Станиславович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "raiman.h@gto.by" }],
    n: "Райман Георгий Эдуардович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "reishel.v@gto.by" }],
    n: "Рейшель Владислав Вацлавович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "samusik.v@gto.by" }],
    n: "Самусик Владимир Владимирович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "sattarova.e@gto.by" }],
    n: "Саттарова Евгения Алексеевна",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37529 695-10-83" }],
    e: [{ t: 1, e: "slizh.v@gto.by" }],
    n: "Слиж Владимир Васильевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "sokol.b@gto.by" }],
    n: "Сокол Борис Викторович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "schastnyi.a@gto.by" }],
    n: "Счастный Александр Александрович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "tarasevich.v@gto.by" }],
    n: "Тарасевич Виктор Витальевич",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37544 577-00-61" }],
    e: [{ t: 1, e: "trotskii.p@gto.by" }],
    n: "Троцкий Павел Юзефович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "tsvirko.a@gto.by" }],
    n: "Цвирко Александр Тадеушевич",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37529 393-38-85" }],
    e: [{ t: 1, e: "chmel.d@gto.by" }],
    n: "Чмель Данил Владимирович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "shpetnyi.i@gto.by" }],
    n: "Шпетный Игорь Иванович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "chshiotka.i@gto.by" }],
    n: "Щётка Ян Мечиславович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "iurhilevich.v@gto.by" }],
    n: "Юргилевич Виталий Анатольевич",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "iahovdik.i@gto.by" }],
    n: "Яговдик Илона Владимировна",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "iakhno.n@gto.by" }],
    n: "Яхно Николай Збышкович",
    p: grodnoDept
  },
  {
    ph: [
      { t: 1, p: "+37529 7001194" },
      { t: 1, p: "+37529 128-18-17" }
    ],
    e: [{ t: 1, e: "lyasotsky.v@gto.by" }],
    n: "Лясоцкий Витослав Янушевич",
    p: grodnoDept
  },
  {
    ph: [{ t: 1, p: "+37529 7001079" }],
    e: [{ t: 1, e: "ignatovich.a@gto.by" }],
    n: "Игнатович Андрей Валентинович",
    p: grodnoDept
  },
  {
    e: [{ t: 1, e: "lebedev.s@gto.by" }],
    n: "Лебедев Сергей Анатольевич",
    p: ds70
  },
  {
    ph: [{ t: 1, p: "+37529 7003768" }],
    e: [{ t: 1, e: "polonnik.v@gto.by" }],
    n: "Полонник Валерий Александрович",
    p: ds70
  },
  {
    e: [{ t: 1, e: "snytko.m@gto.by" }],
    n: "Снытко Максим Николаевич",
    p: ds70
  },
  {
    ph: [{ t: 1, p: "+37529 7004251" }],
    e: [{ t: 1, e: "bessonov.o@gto.by" }],
    n: "Бессонов Олег Валерьевич",
    p: ds80
  },
  {
    e: [{ t: 1, e: "bessonova.m@gto.by" }],
    n: "Бессонова Марина Ивановна",
    p: ds80
  },
  {
    e: [{ t: 1, e: "zalevskii.i@gto.by" }],
    n: "Залевский Игорь Вацлавович",
    p: ds80
  },
  {
    e: [{ t: 1, e: "levkovich.s@gto.by" }],
    n: "Левкович Сергей Николаевич",
    p: ds80
  },
  {
    e: [{ t: 1, e: "moroz.d@gto.by" }],
    n: "Мороз Дмитрий Викторович",
    p: ds80
  },
  {
    e: [{ t: 1, e: "pavliukevich.o@gto.by" }],
    n: "Павлюкевич Ольга Александровна",
    p: ds80
  },
  {
    e: [{ t: 1, e: "azhhirei.v@gto.by" }],
    n: "Ажгирей Виктор Иванович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "aleksandrovich.a@gto.by" }],
    n: "Александрович Александр Степанович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "borisevich.r@gto.by" }],
    n: "Борисевич Руслан Михайлович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "bud-husaim.m@gto.by" }],
    n: "Буд-Гусаим Михаил Антонович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "budnikov.s@gto.by" }],
    n: "Будников Сергей Валентинович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "buliak.o@gto.by" }],
    n: "Буляк Ольга Николаевна",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "vanahel.v@gto.by" }],
    n: "Ванагель Виктор Зенонович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "horkavyi.v@gto.by" }],
    n: "Горкавый Виталий Михайлович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "hrintsevich.s@gto.by" }],
    n: "Гринцевич Сергей Петрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "hubarevich.a@gto.by" }],
    n: "Губаревич Александр Антонович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "hulevich.d@gto.by" }],
    n: "Гулевич Денис Владимирович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "dovhuchits.a@gto.by" }],
    n: "Довгучиц Андрей Леонидович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "drobysh.m@gto.by" }],
    n: "Дробыш Михаил Иванович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "drozdova.i@gto.by" }],
    n: "Дроздова Юлия Андреевна",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "emelianov.s@gto.by" }],
    n: "Емельянов Сергей Фёдорович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "ermak.a@gto.by" }],
    n: "Ермак Александр Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "zubarik.r@gto.by" }],
    n: "Зубарик Роман Сергеевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "kastianevich.m@gto.by" }],
    n: "Кастяневич Михаил Михайлович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "kashenia.a@gto.by" }],
    n: "Кашеня Александр Николаевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "kvitchenko.i@gto.by" }],
    n: "Квитченко Юрий Михайлович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "klishevich.n@gto.by" }],
    n: "Клишевич Николай Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "kuznetsov.v@gto.by" }],
    n: "Кузнецов Василий Яковлевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "lamako.v@gto.by" }],
    n: "Ламако Василий Фёдорович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "loskutov.d@gto.by" }],
    n: "Лоскутов Денис Викторович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "milkovskii.a@gto.by" }],
    n: "Мильковский Александр Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "nadolskii.i@gto.by" }],
    n: "Надольский Игорь Анатольевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "osadchii.r@gto.by" }],
    n: "Осадчий Роман Викторович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "papok.d@gto.by" }],
    n: "Папок Дмитрий Михайлович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "pilipovets.v@gto.by" }],
    n: "Пилиповец Вадим Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "prudnikevich.s@gto.by" }],
    n: "Прудникевич Сергей Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "pustovoi.d@gto.by" }],
    n: "Пустовой Дмитрий Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "raschiotin.d@gto.by" }],
    n: "Расчётин Дмитрий Александрович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "rohova.e@gto.by" }],
    n: "Рогова Елена Александровна",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "savitskii.i@gto.by" }],
    n: "Савицкий Иван Дмитриевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "saevich.v@gto.by" }],
    n: "Саевич Викентий Эдуардович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "salnikov.s@gto.by" }],
    n: "Сальников Сергей Викторович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "suvorov.s@gto.by" }],
    n: "Суворов Сергей Николаевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "fiodorov.d@gto.by" }],
    n: "Фёдоров Дмитрий Сергеевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "fliahin.v@gto.by" }],
    n: "Флягин Виталий Анатольевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "khomiakov.e@gto.by" }],
    n: "Хомяков Евгений Вячеславович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "shapchits.p@gto.by" }],
    n: "Шапчиц Петр Иванович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "shumskii.s@gto.by" }],
    n: "Шумский Сергей Анатольевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "iashkevich.a@gto.by" }],
    n: "Яшкевич Андрей Николаевич",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "matusevich.t@gto.by" }],
    n: "Матусевич Татьяна Юрьевна",
    p: r5Dept
  },
  {
    ph: [
      { t: 1, p: "+37529 7001179" },
      { t: 1, p: "+37529 8391975" }
    ],
    e: [{ t: 1, e: "karpitsky.v@gto.by" }],
    n: "Карпицкий Владимир Иванович",
    p: r5Dept
  },
  {
    e: [{ t: 1, e: "derliuk.l@gto.by" }],
    n: "Дерлюк Лидия Михайловна",
    p: ds152
  },
  {
    ph: [{ t: 1, p: "+37529 7004467" }],
    e: [{ t: 1, e: "isakov.a@gto.by" }],
    n: "Исаков Андрей Михайлович",
    p: ds152
  },
  {
    e: [{ t: 1, e: "kalenik.v@gto.by" }],
    n: "Каленик Владимир Ильич",
    p: ds152
  },
  {
    e: [{ t: 1, e: "mohiliovkin.d@gto.by" }],
    n: "Могилёвкин Денис Геннадьевич",
    p: ds152
  },
  {
    e: [{ t: 1, e: "polivkin.d@gto.by" }],
    n: "Поливкин Денис Николаевич",
    p: ds152
  },
  {
    e: [{ t: 1, e: "khododkov.d@gto.by" }],
    n: "Холодков Дмитрий Леонидович",
    p: ds152
  },
  {
    e: [{ t: 1, e: "parfenkov.s@gto.by" }],
    n: "Парфенков Сергей Александрович",
    p: ds203
  },
  {
    e: [{ t: 1, e: "serheenko.a@gto.by" }],
    n: "Сергеенко Андрей Дмитриевич",
    p: ds203
  },
  {
    ph: [{ t: 1, p: "+37529 7006203" }],
    e: [{ t: 1, e: "chshipilo.n@gto.by" }],
    n: "Щипило Николай Александрович",
    p: ds203
  },
  {
    e: [{ t: 1, e: "artiomov.v@gto.by" }],
    n: "Артёмов Владимир Борисович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "barabanov.v@gto.by" }],
    n: "Барабанов Виталий Эдуардович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "beimanov.a@gto.by" }],
    n: "Бейманов Александр Петрович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "beliakovich.a@gto.by" }],
    n: "Белякович Александр Геннадьевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "valuev.h@gto.by" }],
    n: "Валуев Георгий Владимирович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "voitov.v@gto.by" }],
    n: "Войтов Виктор Алексеевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "hromyko.a@gto.by" }],
    n: "Громыко Андрей Владимирович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "demidovets.s@gto.by" }],
    n: "Демидовец Сергей Алексеевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "diominov.k@gto.by" }],
    n: "Дёминов Константин Леонидович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "divak.p@gto.by" }],
    n: "Дивак Павел Валентинович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "doroshkov.v@gto.by" }],
    n: "Дорошков Владимир Павлович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "dubiaho.s@gto.by" }],
    n: "Дубяго Сергей Николаевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "evstratenko.a@gto.by" }],
    n: "Евстратенко Александр Сергеевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "zuskov.i@gto.by" }],
    n: "Зуськов Игорь Иванович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "ivanov.s@gto.by" }],
    n: "Иванов Сергей Аркадьевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "ivanchikov.a@gto.by" }],
    n: "Иванчиков Анатолий Аркадьевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "komarovskii.a@gto.by" }],
    n: "Комаровский Александр Дмитриевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "kravtsov.v@gto.by" }],
    n: "Кравцов Василий Дмитриевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "kulvanovskii.d@gto.by" }],
    n: "Кульвановский Дмитрий Юрьевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "los.s@gto.by" }],
    n: "Лось Сергей Александрович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "mikalutskaia.t@gto.by" }],
    n: "Микалуцкая Татьяна Николаевна",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "ovchinnikov.o@gto.by" }],
    n: "Овчинников Олег Владимирович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "pichshuliov.i@gto.by" }],
    n: "Пищулёв Юрий Александрович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "senakosov.s@gto.by" }],
    n: "Сенакосов Святослав Алексеевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "stavskii.d@gto.by" }],
    n: "Ставский Денис Андреевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "surovtsev.a@gto.by" }],
    n: "Суровцев Алексей Николаевич",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "fesin.d@gto.by" }],
    n: "Фесин Денис Семенович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "shibalkina.t@gto.by" }],
    n: "Шибалкина Татьяна Дмитриевна",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "shinkariov.d@gto.by" }],
    n: "Шинкарёв Дмитрий Владимирович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "shuniborov.i@gto.by" }],
    n: "Шуниборов Игорь Владимирович",
    p: r6Dept
  },
  {
    ph: [{ t: 1, p: "+37529 7001196" }],
    e: [{ t: 1, e: "volkov.v@gto.by" }],
    n: "Волков Виктор Васильевич",
    p: r6Dept
  },
  {
    ph: [{ t: 1, p: "+37529 7004428" }],
    e: [{ t: 1, e: "poroshkov.y@gto.by" }],
    n: "Порошков Юрий Иванович",
    p: r6Dept
  },
  {
    e: [{ t: 1, e: "adamovich.d@gto.by" }],
    n: "Адамович Дмитрий Олегович",
    p: ds210
  },
  {
    e: [{ t: 1, e: "britko.h@gto.by" }],
    n: "Бритько Геннадий Васильевич",
    p: ds210
  },
  {
    e: [{ t: 1, e: "zherko.m@gto.by" }],
    n: "Жерко Максим Васильевич",
    p: ds210
  },
  {
    e: [{ t: 1, e: "zahortseva.a@gto.by" }],
    n: "Загорцева Алина Игоревна",
    p: ds210
  },
  {
    e: [{ t: 1, e: "kozak.a@gto.by" }],
    n: "Козак Алия Мунировна",
    p: ds210
  },
  {
    e: [{ t: 1, e: "kunitskii.e@gto.by" }],
    n: "Куницкий Евгений Людвигович",
    p: ds210
  },
  {
    e: [{ t: 1, e: "lukomskaia.l@gto.by" }],
    n: "Лукомская Людмила Реональдовна",
    p: ds210
  },
  {
    e: [{ t: 1, e: "minaeva.s@gto.by" }],
    n: "Минаева Светлана Николаевна",
    p: ds210
  },
  {
    e: [{ t: 1, e: "molodianov.a@gto.by" }],
    n: "Молодьянов Александр Леонидович",
    p: ds210
  },
  {
    ph: [
      { t: 1, p: "+37529 7002993" },
      { t: 1, p: "+37529 8392599" },
      { t: 1, p: "+37529 7006468" }
    ],
    e: [{ t: 1, e: "kudryavtsev.a@gto.by" }],
    n: "Кудрявцев Александр Петрович",
    p: ds210
  },
  {
    e: [{ t: 1, e: "saikovskii.a@gto.by" }],
    n: "Сайковский Александр Викторович",
    p: ds210
  },
  {
    e: [{ t: 1, e: "balysh.v@gto.by" }],
    n: "Балыш Виталий Авинирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "belonitskii.p@gto.by" }],
    n: "Белоницкий Павел Викторович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "borziak.v@gto.by" }],
    n: "Борзяк Вячеслав Юрьевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "vasilevich.a@gto.by" }],
    n: "Василевич Александр Леонидович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "vasilev.i@gto.by" }],
    n: "Васильев Игорь Михайлович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "vasko.d@gto.by" }],
    n: "Васько Дмитрий Ричардович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "verbitskii.v@gto.by" }],
    n: "Вербицкий Виктор Зенонович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "harmaza.v@gto.by" }],
    n: "Гармаза Виктор Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "hlazko.i@gto.by" }],
    n: "Глазко Игорь Васильевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "horodetskii.a@gto.by" }],
    n: "Городецкий Алексей Сергеевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "danilevich.s@gto.by" }],
    n: "Данилевич Степан Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "deichman.m@gto.by" }],
    n: "Дейчман Михаил Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "dovidovich.v@gto.by" }],
    n: "Довидович Виктор Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "evenko.i@gto.by" }],
    n: "Евенко Иван Михайлович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "zhuk.e@gto.by" }],
    n: "Жук Евгений Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "zenkovich.s@gto.by" }],
    n: "Зенкович Сергей Леонидович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "ihnatkovich.v@gto.by" }],
    n: "Игнаткович Василий Юрьевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "keinikh.e@gto.by" }],
    n: "Кейних Евгений Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "kiseliov.o@gto.by" }],
    n: "Киселёв Олег Иванович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "klimko.v@gto.by" }],
    n: "Климко Вадим Викторович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "kozak.d@gto.by" }],
    n: "Козак Дарья Владимировна",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "kozel.a@gto.by" }],
    n: "Козел Андрей Михайлович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "koipish.a@gto.by" }],
    n: "Койпиш Антон Андреевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "korniushko.v@gto.by" }],
    n: "Корнюшко Виталий Леонидович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "kostiukovich.a@gto.by" }],
    n: "Костюкович Анатолий Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "kruk.s@gto.by" }],
    n: "Крук Сергей Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "latysh.s@gto.by" }],
    n: "Латыш Светлана Александровна",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "luhom.a@gto.by" }],
    n: "Лугом Александр Евгеньевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "lukashov.a@gto.by" }],
    n: "Лукашов Александр Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "malevich.v@gto.by" }],
    n: "Малевич Владимир Болеславович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "milevckii.a@gto.by" }],
    n: "Милевский Алексей Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "mirochitskii.i@gto.by" }],
    n: "Мирочицкий Иван Константинович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "neudachin.i@gto.by" }],
    n: "Неудачин Игорь Анатольевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "pasiukevich.v@gto.by" }],
    n: "Пасюкевич Виктор Антонович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "pekarchik.s@gto.by" }],
    n: "Пекарчик Сергей Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "potershuk.d@gto.by" }],
    n: "Потершук Дмитрий Леонидович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "pristavka.a@gto.by" }],
    n: "Приставка Александр Викторович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "sazanovich.v@gto.by" }],
    n: "Сазанович Виктор Иванович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "salenik.a@gto.by" }],
    n: "Саленик Анатолий Константинович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "svirepa.s@gto.by" }],
    n: "Свирепа Станислав Сергеевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "sviridovich.i@gto.by" }],
    n: "Свиридович Юрий Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "sopot.m@gto.by" }],
    n: "Сопот Михаил Александрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "strekha.h@gto.by" }],
    n: "Стреха Григорий Николаевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "stuk.v@gto.by" }],
    n: "Стук Владислав Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "teterionok.a@gto.by" }],
    n: "Тетерёнок Антон Олегович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "fomenok.i@gto.by" }],
    n: "Фоменок Иван Иванович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "chapliuk.v@gto.by" }],
    n: "Чаплюк Виктор Петрович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "shamich.o@gto.by" }],
    n: "Шамич Олег Иванович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "shirvel.a@gto.by" }],
    n: "Ширвель Алексей Викентьевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "chshekochikhin.o@gto.by" }],
    n: "Щекочихин Олег Витальевич",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "iaroshevich.v@gto.by" }],
    n: "Ярошевич Виктор Владимирович",
    p: r7Dept
  },
  {
    e: [{ t: 1, e: "moroz.a@gto.by" }],
    n: "Мороз Анжелика Сергеевна",
    p: r7Dept
  },
  {
    ph: [
      { t: 1, p: "+37529 7002893" },
      { t: 1, p: "+37529 8342174" }
    ],
    e: [{ t: 1, e: "korovatsky.s@gto.by" }],
    n: "Коровацкий Сергей Михайлович",
    p: r7Dept
  },
  {
    ph: [{ t: 1, p: "+37529 7001366" }],
    e: [{ t: 1, e: "kazachenok.p@gto.by" }],
    n: "Казачёнок Павел Петрович",
    p: buh
  },
  {
    ph: [{ t: 1, p: "+37529 2339331" }],
    e: [{ t: 1, e: "burakovskaia.m@gto.by" }],
    n: "Бураковская Марина Михайловна",
    p: buh
  },
  {
    e: [{ t: 1, e: "zavalo.n@gto.by" }],
    n: "Завало Наталья Иосифовна",
    p: buh
  },
  {
    e: [{ t: 1, e: "kebich.a@gto.by" }],
    n: "Кебич Анастасия Александровна",
    p: buh
  },
  {
    e: [{ t: 1, e: "knysh.t@gto.by" }],
    n: "Кныш Тамара Владимировна",
    p: buh
  },
  {
    e: [{ t: 1, e: "kovaliova.i@gto.by" }],
    n: "Ковалёва Ирина Николаевна",
    p: buh
  },
  {
    e: [{ t: 1, e: "lychkovskaia.n@gto.by" }],
    n: "Лычковская Наталья Викторовна",
    p: buh
  },
  {
    e: [{ t: 1, e: "svirid.e@gto.by" }],
    n: "Свирид Елена Владимимровна",
    p: buh
  },
  {
    e: [{ t: 1, e: "mihaylova.o@gto.by" }],
    n: "Михайлова Ольга",
    p: buh
  },
  {
    e: [{ t: 1, e: "mikhailova.t@gto.by" }],
    n: "Михайлова Татьяна Иосифовна",
    p: supply
  },
  {
    ph: [{ t: 1, p: "+37529 7005841" }],
    e: [{ t: 1, e: "karpitsky.p@gto.by" }],
    n: "Карпицкий Петр Владимирович",
    p: supply
  },
  {
    e: [{ t: 1, e: "romanova.s@gto.by" }],
    n: "Романова Светлана Алексеевна",
    p: hr
  },
  {
    e: [{ t: 1, e: "skakun.o@gto.by" }],
    n: "Скакун Ольга Александровна",
    p: hr
  },
  {
    ph: [{ t: 1, p: "+37529 7006244" }],
    e: [{ t: 1, e: "trushkevich.n@gto.by" }],
    n: "Трушкевич Наталья Сергеевна",
    p: hr
  },
  {
    e: [{ t: 1, e: "shemiako.v@gto.by" }],
    n: "Шемяко Виктория Анатольевна",
    p: hr
  },
  {
    ph: [{ t: 1, p: "+37529 7004450" }],
    e: [{ t: 1, e: "martynchik.a@gto.by" }],
    n: "Мартынчик Алексей Сергеевич",
    p: hr
  },
  {
    e: [{ t: 1, e: "levkovich.e@gto.by" }],
    n: "Левкович Елена Владимировна",
    p: hr
  },
  {
    e: [{ t: 1, e: "zheleznyi.v@gto.by" }],
    n: "Железный Валерий Евгеньевич",
    p: dept40
  },
  {
    ph: [{ t: 1, p: "+37529 7005407" }],
    e: [{ t: 1, e: "shut.a@gto.by" }],
    n: "Шут Александр Евгеньевич",
    p: dept40
  },
  {
    e: [{ t: 1, e: "kurilchik.a@gto.by" }],
    n: "Курильчик Александр Александрович",
    p: dept40
  },
  {
    e: [{ t: 1, e: "ksi@gto.by" }],
    n: "Коледа Сергей Иванович",
    p: dept40
  },
  {
    ph: [{ t: 1, p: "+37529 7005843" }],
    e: [{ t: 1, e: "krylov.s@gto.by" }],
    n: "Крылов Сергей Владимирович",
    p: dept41
  },
  {
    e: [{ t: 1, e: "popkovich.v@gto.by" }],
    n: "Попкович Василий Николаевич",
    p: dept41
  },
  {
    e: [{ t: 1, e: "sapeho.v@gto.by" }],
    n: "Сапего Виталий Александрович",
    p: dept41
  },
  {
    e: [{ t: 1, e: "antonchik.n@gto.by" }],
    n: "Антончик Николай Григорьевич",
    p: stoBrest
  },
  {
    e: [{ t: 1, e: "bakanovich.d@gto.by" }],
    n: "Баканович Денис Владимирович",
    p: stoBrest
  },
  {
    e: [{ t: 1, e: "klimashevich.v@gto.by" }],
    n: "Климашевич Василий Михайлович",
    p: stoBrest
  },
  {
    e: [{ t: 1, e: "stepanchuk.a@gto.by" }],
    n: "Степанчук Алексей Николаевич",
    p: stoBrest
  },
  {
    e: [{ t: 1, e: "dubrovskii.a@gto.by" }],
    n: "Дубровский Александр Леонидович",
    p: uogto
  },
  {
    ph: [{ t: 1, p: "+37529 7004431" }],
    e: [{ t: 1, e: "mihalovsky.m@gto.by" }],
    n: "Михаловский Михаил Викентьевич",
    p: uogto
  },
  {
    e: [{ t: 1, e: "kasyanovich.a@gto.by" }],
    n: "Касьянович Александр Михайлович",
    p: uogto
  },
  {
    e: [{ t: 1, e: "damoratskaia.a@gto.by" }],
    n: "Даморацкая Алла Сергеевна",
    p: uefho
  },
  {
    e: [{ t: 1, e: "mozolevskii.a@gto.by" }],
    n: "Мозолевский Андрей Анатольевич",
    p: uefho
  },
  {
    ph: [{ t: 1, p: "+37533 6307367" }],
    e: [{ t: 1, e: "chuchkov.s@gto.by" }],
    n: "Чучков Станислав Георгиевич",
    p: uefho
  },
  {
    e: [{ t: 1, e: "bohan.a@gto.by" }],
    n: "Бохан Александр Николаевич",
    p: dept45
  },
  {
    ph: [{ t: 1, p: "+37529 7001330" }],
    e: [{ t: 1, e: "buraya.n@gto.by" }],
    n: "Бурая Наталья Владимировна",
    p: bosses
  },
  {
    ph: [{ t: 1, p: "+37529 7004638" }],
    e: [{ t: 1, e: "tkachenko.v@gto.by" }],
    n: "Ткаченко Виталий Вячеславович",
    p: uefho
  },
  {
    ph: [{ t: 1, p: "+37533 6301324" }],
    e: [{ t: 1, e: "zhuk.d@gto.by" }],
    n: "Жук Дмитрий Иванович",
    p: uist
  },
  {
    ph: [{ t: 1, p: "+37529 7001198" }],
    e: [{ t: 1, e: "vaschilo.m@gto.by" }],
    n: "Ващило Михаил Евгеньевич",
    p: uogto
  },
  {
    e: [{ t: 1, e: "timoshkov.m@gto.by" }],
    n: "Тимошков Михаил",
    p: uist
  },
  {
    ph: [{ t: 1, p: "+37529 7001126" }],
    e: [{ t: 1, e: "svistun.m@gto.by" }],
    n: "Свистун Михаил Сергеевич",
    p: dept40
  },
  {
    e: [{ t: 1, e: "support@gto.by" }],
    n: "Техподдержка УИСТ",
    p: uist
  },
  {
    e: [{ t: 1, e: "skarulis.s@gto.by" }],
    n: "Скарулис Сергей Иосифович",
    p: uist
  },
  {
    ph: [{ t: 1, p: "+37529 7001127" }],
    e: [{ t: 1, e: "piulski.v@gto.by" }],
    n: "Пиульский Владимир Геннадьевич",
    p: bosses
  },
  {
    ph: [{ t: 1, p: "+37529 7001247" }],
    e: [{ t: 1, e: "seleznev.d@gto.by" }],
    n: "Селезнев Денис Александрович",
    p: dept40
  },
  {
    e: [{ t: 1, e: "sapronenko.a@gto.by" }],
    n: "Сапроненко Александр Петрович",
    p: uist
  },
  {
    ph: [{ t: 1, p: "+37529 7001168" }],
    e: [{ t: 1, e: "prokopik.a@gto.by" }],
    n: "Прокопик Александр Андреевич",
    p: bosses
  },
  {
    e: [{ t: 1, e: "potapov.s@gto.by" }],
    n: "Потапов Сергей Борисович",
    p: uogto
  },
  {
    ph: [{ t: 1, p: "+37529 120-68-78" }],
    e: [{ t: 1, e: "lukashevich.t@gto.by" }],
    n: "Лукашевич Тимофей Викентьевич",
    p: uist
  },
  {
    ph: [
      { t: 1, p: "+37529 7001115" },
      { t: 1, p: "+37533 3579106" },
      { t: 1, p: "+37529 103-33-33" }
    ],
    e: [{ t: 1, e: "lenchevsky.y@gto.by" }],
    n: "Ленчевский Юрий Станиславович",
    p: bosses
  },
  {
    ph: [
      { t: 1, p: "+37529 120-68-28" },
      { t: 1, p: "+37529 7001178" }
    ],
    e: [{ t: 1, e: "kosko.a@gto.by" }],
    n: "Коско Александр Николаевич",
    p: uist
  },
  {
    ph: [{ t: 1, p: "+37544 564-35-28" }],
    n: "Ковалев Владимир",
    p: mainOffice
  },
  {
    ph: [{ t: 1, p: "+37529 352-80-28" }],
    n: "Зданович Владимир Васильевич",
    p: brestDept
  }
];
