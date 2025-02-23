import statistic from '../../assets/icons/statistic.png'
import product from '../../assets/icons/product.png'
import warehouse from '../../assets/icons/warehouse.png'
import clients from '../../assets/icons/clients.png'
import sales from '../../assets/icons/sell.png'
import purchases from '../../assets/icons/buy.png'
import employee from '../../assets/icons/employee.png'


export const main_branch_list = [
    {
        icon: statistic,
        nameUZB: 'Statistika',
        nameRUS: "Статистика",
        link: '/home',
        list: [
            {
                nameUZB: "Sotuv monitoringi",
                nameRUS: "Мониторинг продаж",
                index: 1
            },
            {
                nameUZB: "Filiallar",
                nameRUS: "Филиалы",
                index: 2
            },
            {
                nameUZB: "Hodimlar",
                nameRUS: "Сотрудники",
                index: 3
            },
            {
                nameUZB: "Mijozlar",
                nameRUS: "Клиенты",
                index: 4
            },
            {
                nameUZB: "Mahsulotlar",
                nameRUS: "Товары",
                index: 5
            }
        ]
    },
    {
        icon: product,
        nameUZB: 'Mahsulot',
        nameRUS: "Продукт",
        link: '/product',
        list: [
            {
                nameUZB: "Mahsulot kategoriyalari",
                nameRUS: "Категории продуктов",
                index: 1
            },
            {
                nameUZB: "Yangi mahsulot qo'shish",
                nameRUS: "Добавить новый продукт",
                index: 2
            }
        ]
    },
    {
        icon: warehouse,
        nameUZB: 'Ombor',
        nameRUS: "Склад",
        link: '/warehouse',
        list: [
            {
                nameUZB: "Ombor zaxiralari",
                nameRUS: "Запасы склада",
                index: 1
            },
            {
                nameUZB: "Yangi zaxira qo'shish",
                nameRUS: "Добавить новый запас",
                index: 2
            }
        ]
    },
    {
        icon: clients,
        nameUZB: 'Mijozlar',
        nameRUS: "Клиенты",
        link: '/clients',
        list: [
            {
                nameUZB: "Mijozlar ro'yxati",
                nameRUS: "Список клиентов",
                index: 1
            },
            {
                nameUZB: "Yangi mijoz qo'shish",
                nameRUS: "Добавить нового клиента",
                index: 2
            }
        ]
    },
    {
        icon: sales,
        nameUZB: 'Sotuv',
        nameRUS: "Продажи",
        link: '/sales',
        list: [
            {
                nameUZB: "Sotuvlar tahlili",
                nameRUS: "Анализ продаж",
                index: 1
            },
            {
                nameUZB: "Yangi sotuv kiritish",
                nameRUS: "Добавить новую продажу",
                index: 2
            }
        ]
    },
    {
        icon: purchases,
        nameUZB: 'Harid',
        nameRUS: "Закупки",
        link: '/purchases',
        list: [
            {
                nameUZB: "Haridlar ro'yxati",
                nameRUS: "Список закупок",
                index: 1
            },
            {
                nameUZB: "Yangi harid qo'shish",
                nameRUS: "Добавить новую закупку",
                index: 2
            }
        ]
    },

    {
        icon: employee,
        nameUZB: 'Foydalanuvchilar',
        nameRUS: "Пользователи",
        link: '/employee',
        list: [
            {
                nameUZB: "Foydalanuvchilar ro'yxati",
                nameRUS: "Список пользователей",
                index: 1
            },
            {
                nameUZB: "Yangi foydalanuvchi qo'shish",
                nameRUS: "Добавить нового пользователя",
                index: 2
            }
        ]
    },
];
