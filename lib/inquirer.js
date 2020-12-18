const inquirer = require('inquirer');
const generator = require('./generator');

module.exports = {
    start: () => {
        const start = [{
            type: 'list',
            name: 'type',
            message: 'Выберите действие',
            choices: [{
                    name: 'Сгенерировать компонент',
                    value: "component"
                },
                {
                    name: 'Утилиты',
                    value: "utils"
                },
            ]
        }, ]

        const generate = [{
            type: 'list',
            name: 'type',
            message: 'Как генерируем?',
            choices: [{
                    name: 'Автоматом',
                    value: "auto"
                },
                {
                    name: 'Ручками',
                    value: "manual"
                },
                {
                    name: 'Отмена',
                    value: "back"
                }
            ]
        }]
        
        const auto = [  {
            type: 'input',
            name: 'componentName',
            message: "Название компонента",
          },
          {
            type: 'input',
            name: 'componentParams',
            message: "Параметры компоненты(через запятую)",
          },
          {
            type: 'input',
            name: 'componentDescription',
            message: "Описание компоненты",
          },
        ]

        const manual = [ {
            type: 'input',
            name: 'componentPath',
            message: "Пункт назначения относительно папки App/",
          }, {
            type: 'input',
            name: 'componentName',
            message: "Название компонента",
          },
          {
            type: 'input',
            name: 'componentParams',
            message: "Параметры компоненты(через запятую)",
          },
          {
            type: 'input',
            name: 'componentDescription',
            message: "Описание компоненты",
          },
        ]
        

        const utils = [{
            type: 'list',
            name: 'type',
            message: 'Выбери утилиту',
            choices: [{
                    name: 'Бамп версии',
                    value: "1"
                },
                {
                    name: 'Обновить фикстуры',
                    value: "2"
                },
                {
                    name: 'Запустить тесты',
                    value: "3"
                },
                {
                    name: 'Выход',
                    value: "back"
                }
            ]
        }, ]

        inquirer.prompt(start).then((answers) => {
            if (answers.type === "component") {
                inquirer.prompt(generate).then((answers) => {
                    if (answers.type === "auto") {
                        inquirer.prompt(auto).then((answers) => {
                            generator.init(answers)
                        });
                    } else if (answers.type === "manual") {
                        inquirer.prompt(manual).then((answers) => {
                            generator.init(answers)
                        }); 
                    } else if (answers.type === "back") {
                        return true
                    }
                });
            } else if (answers.type === "utils") {
                inquirer.prompt(utils).then((answers) => {
                    if (answers.type === "auto") {
                        console.log(JSON.stringify(answers, null, '  '));
                    } else if (answers.type === "hands") {
                        console.log(JSON.stringify(answers, null, '  '));
                    }
                });
            }
        });
    },
};