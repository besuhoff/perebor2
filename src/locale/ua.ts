import { whoshoe } from './project/whoshoe/ua';
import { justprivat } from './project/justprivat/ua';
import { fmg } from './project/fmg/ua';
import { peopleinbusiness } from './project/peopleinbusiness/ua';

export const ua: Locale = {
  base: {
    header: ['Веб-студія «Перебор»', '*'],
    footer: ['<span class="show-on-wide">Задачі, що їх можна розв’язати в принципі, завжди можна розв’язати шляхом, щонайменше, повного перебору.</span> <span class="show-on-medium">Ми виробимо для&nbsp;вас гідний інструмент, нехай навіть задля цього прийдеться перебрати та&nbsp;відкинути безліч варіантів.</span> Напишіть нам:'],
    archived: 'Об’єкт здано до архіву',
    projects: 'Проекти студії',
  },
  about: {
    serg: 'Сергій Переверзєв',
    ania: 'Аня Переверзєва',
    sergsRoles: 'Бізнес-аналітик, програміст, копірайтер, девопс, сео-оптимізатор',
    aniasRoles: 'Графічний дизайнер, моушен-дизайнер, ілюстратор',
  },
  portfolio: {
    whatWeDo: 'Разом ми створюємо сайти, інтернет-магазини, промо-сторіночки, інтранет-додатки, мобільні додатки, логотипи, фірмові стилі й&nbsp;усе&nbsp;таке інше:',
    perebor: 'Сайт студії «Перебор»',
    whoshoe: 'Інтернет-крамниця «Чий туфля?»',
    girid: 'Столярна майстерня «Ґірід»',
    smpTender: 'Сайт фірми «СМП-Тендер»',
    fmg: 'Вітрина «Фуд маркет груп»',
    feedthedevs: '«Нагодуй розробників»',
    justprivat: 'Сайт фірми «Юстпріват»',
    lampRepair: 'Лендинг ремонтної майстерні',
    xmasBeard: 'Логотип «Різдвяна борода»',
    careerStudio: 'Сайт «Студії кар’єрного розвитку»',
    peopleInBusiness: 'Сайт компанії «Піпл ін бізнес»',
    spender: 'Менеджер бюджету «Транжира»',
    dachaInternet: 'Лендинг «Інтернет на дачі»',
    unwritten: 'Книга «Із ненаписаного»',
  },

  project: {
    releaseYear: 'Рік випуску',
    task: 'Задача',
    backToList: 'Повернутися до списку проектів',

    whoshoe,
    justprivat,
    fmg,
    peopleinbusiness,
  }
};
