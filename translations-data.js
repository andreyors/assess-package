window.translationsData = {
  "en": {
    "title": "Go Library Adoption Assessment",
    "toggleShow": "Show All Explanations",
    "toggleHide": "Hide All Explanations",
    "scoreLabel": "Score",
    "languageNames": {
      "en": "🌐 English",
      "ru": "🌐 Russian",
      "de": "🌐 German",
      "th": "🌐 Thai"
    },
    "themeNames": {
      "light": "☀️ Light",
      "dark": "🌙 Dark"
    },
    "categories": [
      {
        "title": "Initial Assessment",
        "items": [
          {
            "text": "Does it solve a real problem?",
            "explanation": "The package should address a specific task you regularly face, not just be a convenient tool.",
            "check": "Ask yourself: will it really save time or solve an important problem?"
          },
          {
            "text": "Simpler than writing it yourself?",
            "explanation": "If the task is simple and can be implemented in a couple of hours, you might not need an extra dependency.",
            "check": "Think: wouldn't it be faster to write your own solution?"
          },
          {
            "text": "Compared with alternatives?",
            "explanation": "Don't take the first package you find. Look at at least 2-3 options: compare features, popularity, and update frequency. This will help you make the right choice.",
            "check": "Search on pkg.go.dev, GitHub Explore, awesome-go lists"
          },
          {
            "text": "Official package?",
            "explanation": "Official packages (from service creators or well-known companies) are usually more reliable. For example, AWS SDK for Go is better maintained than third-party AWS libraries.",
            "check": "For example, AWS SDK for Go is better maintained than third-party AWS libraries"
          },
          {
            "text": "Not in standard library?",
            "explanation": "Go's standard library is quite rich. Check if this functionality already exists in stdlib or your framework. Fewer dependencies = fewer problems.",
            "check": "https://pkg.go.dev/std to browse stdlib"
          },
          {
            "text": "Used in production projects?",
            "explanation": "See who uses the package in production. Check dependencies on GitHub, read reviews. Battle-tested code is usually more reliable.",
            "check": "'Used by' section on GitHub, 'Imported by' counter on pkg.go.dev"
          },
          {
            "text": "Handles your load?",
            "explanation": "Make sure the package can handle your load and works well with goroutines. Look for benchmarks, performance tests, and speed reviews.",
            "check": "Run 'go test -bench=.' for benchmarks, 'go test -race' to check for races"
          }
        ]
      },
      {
        "title": "Security & Sources",
        "items": [
          {
            "text": "Reliable source?",
            "explanation": "The package should be on a trusted platform: GitHub, GitLab, or official Go repository. Avoid suspicious sources — your security is more important.",
            "check": "Check repository URL on pkg.go.dev, evaluate domain reputation"
          },
          {
            "text": "Known author?",
            "explanation": "Check who created the package. Review their other projects and open source activity. Well-known developers and companies usually don't abandon their projects.",
            "check": "GitHub profile, contribution history, other popular projects"
          },
          {
            "text": "Active repository?",
            "explanation": "A good repository is regularly updated: fresh commits, responses to issues, PR acceptance. Check when the last commit was and what happened in the last 6 months to a year.",
            "check": "GitHub Insights → Pulse, Contributors graphs"
          },
          {
            "text": "Acceptable license?",
            "explanation": "Check the license. MIT, Apache 2.0, BSD are fine for commercial projects. GPL/AGPL require opening sources — not suitable for business.",
            "check": "LICENSE file on GitHub, 'go-licenses' tool or https://choosealicense.com"
          },
          {
            "text": "Popular package?",
            "explanation": "Look at GitHub stars, number of imports on pkg.go.dev, forks. Many users = many eyes on the code = less chance of missing a bug.",
            "check": "'Imported by' counter on pkg.go.dev, stars/forks on GitHub"
          },
          {
            "text": "Passes security checks?",
            "explanation": "Run the package through security scanners: gosec, govulncheck, Snyk. They'll find known vulnerabilities and dangerous patterns before you add the package to your project.",
            "check": "Run 'gosec ./...' and 'govulncheck ./...'"
          },
          {
            "text": "Clean dependencies?",
            "explanation": "Check not only the package itself but everything it pulls in. Run 'go list -m all' and check for vulnerabilities. One vulnerable package in the chain — and everything is at risk.",
            "check": "Run 'go list -m all', then 'govulncheck' on the entire tree"
          }
        ]
      },
      {
        "title": "Code Quality",
        "items": [
          {
            "text": "Actively developed?",
            "explanation": "Look for fresh commits in the last 3-6 months. Active development means bugs get fixed, security patches are released, and the package keeps up with new Go versions.",
            "check": "Commit history on GitHub, 'git log --since='6 months ago''"
          },
          {
            "text": "Bugs fixed quickly?",
            "explanation": "Check Issues on GitHub. How quickly are bugs and security issues closed? Days to weeks is normal, but if they hang for months — that's a bad sign.",
            "check": "GitHub Issues → sort by 'Recently updated', check issue age"
          },
          {
            "text": "Has tests?",
            "explanation": "Good packages have *_test.go files and CI/CD (like GitHub Actions). Tests catch bugs before they reach you. Look for the test coverage badge.",
            "check": "Look for *_test.go files, .github/workflows/, run 'go test -cover ./...'"
          },
          {
            "text": "Readable code?",
            "explanation": "Open the sources and look. Is the code clear, are there comments, is it well organized? Readable code is easier to fix if something breaks or needs forking.",
            "check": "Read main package files on GitHub, check godoc comments"
          },
          {
            "text": "Passes linters?",
            "explanation": "Run it through go vet, staticcheck, golangci-lint. If it passes cleanly — that's a good sign. Clean static analysis = fewer hidden problems.",
            "check": "Run 'go vet ./...', 'staticcheck ./...' or 'golangci-lint run'"
          },
          {
            "text": "Written idiomatically?",
            "explanation": "Code should follow Go style: proper names, correct error handling, structure like in Effective Go. Idiomatic code is predictable and easily integrates into your project.",
            "check": "Read https://go.dev/doc/effective_go, run 'gofmt -l .'"
          },
          {
            "text": "Few dependencies?",
            "explanation": "Look at go.mod. Fewer dependencies is better: fewer vulnerabilities, faster builds, easier to maintain. Each dependency = additional risk.",
            "check": "Run 'go mod graph' or 'go list -m all', count dependencies"
          }
        ]
      },
      {
        "title": "Security & Compliance",
        "items": [
          {
            "text": "Scanned for vulnerabilities?",
            "explanation": "Run govulncheck (official Go tool) or go mod audit. This should be done BEFORE adding the package to immediately identify security issues.",
            "check": "Run 'go install golang.org/x/vuln/cmd/govulncheck@latest' then 'govulncheck ./...'"
          },
          {
            "text": "Checked vulnerability databases?",
            "explanation": "Check pkg.go.dev/vuln and GitHub Advisory Database. They collect info on all known security issues.",
            "check": "Visit https://pkg.go.dev/vuln/list, search package on https://github.com/advisories"
          },
          {
            "text": "Suitable for your business?",
            "explanation": "Verify the license allows commercial use. MIT, Apache 2.0, BSD are fine. GPL/AGPL require opening sources — be careful with them. If in doubt — show it to lawyers.",
            "check": "Use 'go-licenses' or https://tldrlegal.com for license explanations"
          },
          {
            "text": "No patents or restrictions?",
            "explanation": "Sometimes packages may have patent restrictions or export bans (especially crypto libraries). Check that there are no legal issues for your business.",
            "check": "Study LICENSE and PATENTS files, check crypto export restrictions"
          },
          {
            "text": "Meets regulatory requirements?",
            "explanation": "If you work with personal data (GDPR) or financial regulations (PCI-DSS, SOC2) — ensure the package can properly encrypt, log, and store sensitive information.",
            "check": "Look for compliance badges, audit reports, certificates in README"
          },
          {
            "text": "Auto-scanning configured?",
            "explanation": "Enable automatic scanning in CI/CD: Dependabot, Snyk, GitHub Security Advisories. This will track new vulnerabilities even after you add the package.",
            "check": "Enable GitHub Dependabot, add Snyk or use 'nancy' in CI pipeline"
          },
          {
            "text": "Has compliance documentation?",
            "explanation": "For enterprise, documentation is important: which standards are followed, audit reports, security practices. Especially critical for fintech.",
            "check": "Look for SECURITY.md, compliance badges, audit reports in docs/ folder"
          }
        ]
      },
      {
        "title": "Testing",
        "items": [
          {
            "text": "Tested in sandbox?",
            "explanation": "First run the package on dev/staging or behind a feature flag. This way you can ensure everything works without affecting real users if something goes wrong.",
            "check": "Use feature flag libraries like 'flipt' or 'unleash', test in separate environment"
          },
          {
            "text": "Ran fuzzing?",
            "explanation": "Run fuzzing tests (built into Go 1.18+). It will find edge cases and strange behavior. For critical stuff, consider a pentest too.",
            "check": "Run 'go test -fuzz=.' for fuzzing, use OWASP ZAP or Burp Suite for pentest"
          },
          {
            "text": "Has integration tests?",
            "explanation": "Write tests for YOUR use cases, for YOUR application. Test real production scenarios, not just examples from package documentation.",
            "check": "Write integration tests in *_integration_test.go, use testcontainers-go"
          },
          {
            "text": "Handles load?",
            "explanation": "Test the package under load: high traffic, slow network, timeouts, failures. Does it handle errors properly? Are there timeouts? No memory or goroutine leaks?",
            "check": "Use 'vegeta' or 'hey' for load tests, 'toxiproxy' for network chaos emulation, run with '-memprofile'"
          },
          {
            "text": "Has update process?",
            "explanation": "Document how to update the package. Who's responsible, how to test updates, what to do if an update breaks code. Especially important for security patches.",
            "check": "Document in RUNBOOK.md or team wiki, set calendar reminders"
          },
          {
            "text": "Following releases?",
            "explanation": "Set up notifications: GitHub Watch, RSS, Dependabot. You'll be aware of updates, new features, bug fixes, and most importantly — security patches.",
            "check": "Enable GitHub Watch → Releases only, use Dependabot alerts, subscribe to release RSS"
          },
          {
            "text": "Can be replaced?",
            "explanation": "Pin the version in go.mod. Ensure the package can be removed/replaced if needed (good abstraction helps). Avoid packages that deeply embed into code.",
            "check": "Use exact versions in go.mod, wrap package in your interface"
          }
        ]
      },
      {
        "title": "Monitoring",
        "items": [
          {
            "text": "Alerts configured?",
            "explanation": "Set up auto-alerts for vulnerabilities, new releases, breaking changes. Dependabot, Snyk, GitHub Security Advisories — choose what you like, but set it up for sure.",
            "check": "Enable GitHub Dependabot alerts, configure Snyk integration or use 'renovate' bot"
          },
          {
            "text": "Regularly check dependencies?",
            "explanation": "Once a month or quarter check all dependencies: are there updates, security issues, maybe better alternatives already exist. Otherwise technical debt will accumulate.",
            "check": "Run 'go list -u -m all' to check updates, set recurring calendar reminders"
          },
          {
            "text": "Have rollback plan?",
            "explanation": "Document how to quickly remove/rollback the package if a critical vulnerability is found or it crashes in production. Test the plan beforehand, before you urgently need it.",
            "check": "Document rollback procedure, practice on staging, use version pinning in go.mod"
          },
          {
            "text": "Who owns the package?",
            "explanation": "Assign a specific person or team to monitor this dependency. They monitor status, update, decide to change versions or look for replacement. Without an owner, the package will be abandoned.",
            "check": "Add to CODEOWNERS file, document in team wiki, configure responsibility matrix"
          },
          {
            "text": "Maintainers responsive?",
            "explanation": "Check if maintainers respond to issues and PRs. If they react quickly — bugs will be fixed, questions answered. Look at recent responses in issues.",
            "check": "Review response time on recent issues/PRs, check maintainer activity on GitHub"
          },
          {
            "text": "What if abandoned?",
            "explanation": "What will you do if the package stops being maintained? Plan: fork it, find an alternative, write your own. Don't put everything on packages with one developer without a backup plan.",
            "check": "Document alternative packages, prepare fork strategy, assess bus factor"
          },
          {
            "text": "Maintaining documentation?",
            "explanation": "Record why you chose the package, which version, known issues. Track metrics: commit frequency, how quickly issues are closed, community activity. This way you'll notice earlier if the package is abandoned.",
            "check": "Use tools like 'libyear' or 'deps.dev' to track package health metrics"
          }
        ]
      }
    ]
  },
  "ru": {
    "title": "Оценка Go-пакета",
    "toggleShow": "Показать подсказки",
    "toggleHide": "Скрыть подсказки",
    "scoreLabel": "Твоя оценка",
    "languageNames": {
      "en": "🌐 Английский",
      "ru": "🌐 Русский",
      "de": "🌐 Немецкий",
      "th": "🌐 Тайский"
    },
    "themeNames": {
      "light": "☀️ Светлая",
      "dark": "🌙 Темная"
    },
    "categories": [        
        {
            "title": "Первичная оценка",
            "items": [
              {
                "text": "Решает твою реальную проблему?",
                "explanation": "Пакет должен закрывать конкретную задачу, с которой ты регулярно сталкиваешься, а не просто быть удобной штукой.",
                "check": "Спроси себя: реально сэкономит твоё время или решит важную проблему?"
              },
              {
                "text": "Проще чем писать самому?",
                "explanation": "Если задача простая и реализуется за пару часов — может, лишняя зависимость тебе не нужна.",
                "check": "Подумай: не быстрее ли написать своё решение?"
              },
              {
                "text": "Сравнил с альтернативами?",
                "explanation": "Не бери первый попавшийся пакет. Посмотри хотя бы 2-3 варианта: сравни возможности, популярность, как часто обновляются. Это поможет тебе сделать правильный выбор.",
                "check": "поиск на pkg.go.dev, GitHub Explore, списки awesome-go"
              },
              {
                "text": "Официальный пакет?",
                "explanation": "Официальные пакеты (от создателей сервиса или известной компании) обычно надёжнее.",
                "check": "Например, AWS SDK for Go лучше поддерживается, чем сторонние библиотеки для AWS."
              },
              {
                "text": "Нет в стандартной библиотеке?",
                "explanation": "Стандартная библиотека Go довольно богатая. Проверь, может эта функциональность уже есть в stdlib или твоём фреймворке. Меньше зависимостей = меньше проблем.",
                "check": "https://pkg.go.dev/std для просмотра stdlib"
              },
              {
                "text": "Используют в боевых проектах?",
                "explanation": "Посмотри, кто использует пакет в продакшене. Проверь зависимости на GitHub, почитай отзывы. Код, проверенный в бою, обычно надёжнее.",
                "check": "раздел 'Used by' на GitHub, счётчик 'Imported by' на pkg.go.dev"
              },
              {
                "text": "Справится с твоей нагрузкой?",
                "explanation": "Убедись, что пакет потянет твою нагрузку и нормально работает с горутинами. Поищи бенчмарки, тесты производительности, отзывы о скорости работы.",
                "check": "запусти 'go test -bench=.' для бенчмарков, 'go test -race' для проверки гонок"
              }
            ]
          },
          {
            "title": "Безопасность и источники",
            "items": [
              {
                "text": "Надёжный источник?",
                "explanation": "Пакет должен быть на проверенной площадке: GitHub, GitLab или официальный репозиторий Go. Сомнительные источники обходи стороной — твоя безопасность важнее.",
                "check": "проверь URL репозитория на pkg.go.dev, оцени репутацию домена"
              },
              {
                "text": "Известный автор?",
                "explanation": "Посмотри, кто создал пакет. Проверь его другие проекты, активность в опенсорсе. Известные разработчики и компании обычно не бросают свои проекты.",
                "check": "профиль GitHub, история контрибуций, другие популярные проекты"
              },
              {
                "text": "Репозиторий живой?",
                "explanation": "Хороший репозиторий регулярно обновляется: свежие коммиты, отвечают на issues, принимают PR. Посмотри, когда был последний коммит и что происходило за последние полгода-год.",
                "check": "GitHub Insights → Pulse, графики Contributors"
              },
              {
                "text": "Нормальная лицензия?",
                "explanation": "Проверь лицензию. MIT, Apache 2.0, BSD — это норм, можно использовать в коммерческих проектах. GPL/AGPL обязывают открывать исходники — для бизнеса не вариант.",
                "check": "файл LICENSE на GitHub, инструмент 'go-licenses' или https://choosealicense.com"
              },
              {
                "text": "Популярный пакет?",
                "explanation": "Посмотри на звёзды в GitHub, количество импортов на pkg.go.dev, форки. Много пользователей = много глаз на коде = меньше шанс пропустить баг.",
                "check": "счётчик 'Imported by' на pkg.go.dev, звёзды/форки на GitHub"
              },
              {
                "text": "Проходит проверку безопасности?",
                "explanation": "Прогони пакет через сканеры безопасности: gosec, govulncheck, Snyk. Они найдут известные уязвимости и опасные паттерны до того, как ты добавишь пакет в проект.",
                "check": "запусти 'gosec ./...' и 'govulncheck ./...'"
              },
              {
                "text": "Зависимости чистые?",
                "explanation": "Проверь не только сам пакет, но и всё, что он тянет за собой. Запусти 'go list -m all' и проверь на уязвимости. Один уязвимый пакет в цепочке — и всё под угрозой.",
                "check": "запусти 'go list -m all', затем 'govulncheck' на всё дерево"
              }
            ]
          },
          {
            "title": "Качество кода",
            "items": [
              {
                "text": "Активно развивается?",
                "explanation": "Ищи свежие коммиты за последние 3-6 месяцев. Активная разработка значит, что баги фиксят, выпускают патчи безопасности, пакет не отстаёт от новых версий Go.",
                "check": "история коммитов на GitHub, 'git log --since='6 months ago''"
              },
              {
                "text": "Быстро фиксят баги?",
                "explanation": "Зайди в Issues на GitHub. Как быстро закрывают баги и проблемы с безопасностью? Дни-недели это норм, а если месяцами висят — плохой знак.",
                "check": "GitHub Issues → сортировка по 'Recently updated', посмотри на возраст issues"
              },
              {
                "text": "Есть тесты?",
                "explanation": "У хороших пакетов есть *_test.go файлы и CI/CD (типа GitHub Actions). Тесты ловят баги до того, как они доедут до тебя. Посмотри на бейджик покрытия тестами.",
                "check": "ищи *_test.go файлы, .github/workflows/, запусти 'go test -cover ./...'"
              },
              {
                "text": "Код читабельный?",
                "explanation": "Открой исходники и посмотри. Код понятный, есть комменты, хорошо организован? Читаемый код проще починить, если что-то сломается или нужно будет форкнуть.",
                "check": "почитай основные файлы пакета на GitHub, проверь godoc комментарии"
              },
              {
                "text": "Проходит линтеры?",
                "explanation": "Прогони через go vet, staticcheck, golangci-lint. Если чисто проходит — это хороший знак. Чистый статический анализ = меньше скрытых проблем.",
                "check": "запусти 'go vet ./...', 'staticcheck ./...' или 'golangci-lint run'"
              },
              {
                "text": "Написан по-гошному?",
                "explanation": "Код должен следовать стилю Go: нормальные имена, правильная обработка ошибок, структура как в Effective Go. Идиоматичный код предсказуем и легко встраивается в твой проект.",
                "check": "почитай https://go.dev/doc/effective_go, запусти 'gofmt -l .'"
              },
              {
                "text": "Мало зависимостей?",
                "explanation": "Загляни в go.mod. Чем меньше зависимостей — тем лучше: меньше уязвимостей, быстрее собирается, проще поддерживать. Каждая зависимость = дополнительный риск.",
                "check": "запусти 'go mod graph' или 'go list -m all', посчитай зависимости"
              }
            ]
          },
          {
            "title": "Безопасность и комплаенс",
            "items": [
              {
                "text": "Сканировал на уязвимости?",
                "explanation": "Запусти govulncheck (официальный инструмент от Go) или go mod audit. Это нужно делать ДО добавления пакета, чтобы сразу выявить проблемы с безопасностью.",
                "check": "запусти 'go install golang.org/x/vuln/cmd/govulncheck@latest' затем 'govulncheck ./...'"
              },
              {
                "text": "Проверил базы уязвимостей?",
                "explanation": "Посмотри на pkg.go.dev/vuln и GitHub Advisory Database. Там собрана инфа по всем известным проблемам безопасности.",
                "check": "зайди на https://pkg.go.dev/vuln/list, поищи пакет на https://github.com/advisories"
              },
              {
                "text": "Подходит для твоего бизнеса?",
                "explanation": "Проверь, что лицензия позволяет коммерческое использование. MIT, Apache 2.0, BSD — норм. GPL/AGPL заставят открывать исходники — с ними осторожнее. Если сомневаешься — покажи юристам.",
                "check": "используй 'go-licenses' или https://tldrlegal.com для разъяснения лицензий"
              },
              {
                "text": "Нет патентов и ограничений?",
                "explanation": "Иногда пакеты могут иметь патентные ограничения или экспортные запреты (особенно крипто-библиотеки). Проверь, что нет юридических проблем для твоего бизнеса.",
                "check": "изучи файлы LICENSE и PATENTS, проверь крипто экспортные ограничения"
              },
              {
                "text": "Соответствует регуляторным требованиям?",
                "explanation": "Если работаешь с персональными данными (GDPR) или финансовым регуляциям (PCI-DSS, SOC2) — убедись, что пакет умеет правильно шифровать, логировать, хранить чувствительную информацию.",
                "check": "ищи бейджи compliance, отчёты аудита, сертификаты в README"
              },
              {
                "text": "Настроено автосканирование?",
                "explanation": "Включи автоматическое сканирование в CI/CD: Dependabot, Snyk, GitHub Security Advisories. Это будет отслеживать новые уязвимости даже после того, как ты добавишь пакет.",
                "check": "включи GitHub Dependabot, добавь Snyk или используй 'nancy' в CI пайплайне"
              },
              {
                "text": "Есть документация по compliance?",
                "explanation": "Для энтерпрайза важна документация: какие стандарты соблюдаются, отчёты аудитов, практики безопасности. Особенно критично для финтеха.",
                "check": "ищи SECURITY.md, бейджи compliance, отчёты аудита в папке docs/"
              }
            ]
          },
          {
            "title": "Тестирование",
            "items": [
              {
                "text": "Протестил в песочнице?",
                "explanation": "Сначала погоняй пакет на dev/staging или за включенным feature flag. Так можно убедиться, что всё работает, не затрагивая реальных юзеров, если что-то пойдёт не так.",
                "check": "используй библиотеки feature flag типа 'flipt' или 'unleash', тестируй в отдельной среде"
              },
              {
                "text": "Прогнал фаззинг?",
                "explanation": "Запусти фаззинг-тесты (в Go 1.18+ он встроенный). Он найдёт граничные случаи и странное поведение. Для критичных штук стоит ещё пентест провести.",
                "check": "запусти \"go test -fuzz=.\" для фаззинга, используй OWASP ZAP или Burp Suite для пентеста"
              },
              {
                "text": "Есть интеграционные тесты?",
                "explanation": "Напиши тесты под ТВОИ кейсы использования, под ТВОЁ приложение. Тестируй реальные сценарии из продакшена, а не только примеры из документации пакета.",
                "check": "напиши интеграционные тесты в *_integration_test.go, используй testcontainers-go"
              },
              {
                "text": "Держит нагрузку?",
                "explanation": "Протестируй пакет под нагрузкой: высокий трафик, медленная сеть, таймауты, сбои. Нормально ли обрабатывает ошибки? Есть таймауты? Не течёт память или горутины?",
                "check": "используй 'vegeta' или 'hey' для нагрузочных тестов, 'toxiproxy' для эмуляции сетевого хаоса, запускай с '-memprofile'"
              },
              {
                "text": "Есть процесс обновления?",
                "explanation": "Задокументируй, как обновлять пакет. Кто за это отвечает, как тестировать обновления, что делать, если обновление сломало код. Особенно важно для security патчей.",
                "check": "задокументируй в RUNBOOK.md или в командной wiki, поставь напоминания в календаре"
              },
              {
                "text": "Следишь за релизами?",
                "explanation": "Настрой уведомления: GitHub Watch, RSS, Dependabot. Будешь в курсе обновлений, новых фич, фиксов багов и главное — патчей безопасности.",
                "check": "включи GitHub Watch → Releases only, используй алерты Dependabot, подпишись на RSS релизов"
              },
              {
                "text": "Можно заменить?",
                "explanation": "Зафиксируй версию в go.mod. Убедись, что пакет можно удалить/заменить, если понадобится (хорошая абстракция помогает). Избегай пакетов, которые вшиваются глубоко в код.",
                "check": "используй точные версии в go.mod, оберни пакет в свой интерфейс"
              }
            ]
          },
          {
            "title": "Мониторинг",
            "items": [
              {
                "text": "Настроены алерты?",
                "explanation": "Настрой автоалерты на уязвимости, новые релизы, breaking changes. Dependabot, Snyk, GitHub Security Advisories — выбирай, что нравится, но настрой обязательно.",
                "check": "включи алерты GitHub Dependabot, настрой интеграцию Snyk или используй бота 'renovate'"
              },
              {
                "text": "Регулярно проверяешь зависимости?",
                "explanation": "Раз в месяц или квартал проверяй все зависимости: есть ли обновления, проблемы с безопасностью, может, уже есть альтернативы получше. Иначе накопится технический долг.",
                "check": "запускай 'go list -u -m all' для проверки обновлений, ставь повторяющиеся напоминания в календаре"
              },
              {
                "text": "Есть план отката?",
                "explanation": "Задокументируй, как быстро удалить/откатить пакет, если найдут критичную уязвимость или он упадёт в продакшене. Протестируй план заранее, пока не понадобилось срочно.",
                "check": "задокументируй процедуру отката, потренируйся на staging, используй version pinning в go.mod"
              },
              {
                "text": "Кто отвечает за пакет?",
                "explanation": "Назначь конкретного человека или команду, которая следит за этой зависимостью. Они мониторят состояние, обновляют, решают менять версию или искать замену. Без владельца пакет забросят.",
                "check": "добавь в файл CODEOWNERS, задокументируй в командной wiki, настрой матрицу ответственности"
              },
              {
                "text": "Майнтейнеры отвечают?",
                "explanation": "Проверь, отвечают ли майнтейнеры на issues и PR. Если быстро реагируют — баги будут фиксить, на вопросы отвечать. Посмотри на последние ответы в issues.",
                "check": "просмотри время ответа на недавние issues/PR, проверь активность мейнтейнера на GitHub"
              },
              {
                "text": "Что делать, если забросят?",
                "explanation": "Что будешь делать, если пакет перестанут поддерживать? Запланируй: форкнуть, найти альтернативу, написать своё. Не ставь всё на пакеты с одним разработчиком без запасного плана.",
                "check": "задокументируй альтернативные пакеты, подготовь стратегию форка, оцени bus factor"
              },
              {
                "text": "Ведёшь документацию?",
                "explanation": "Записывай, почему выбрал пакет, какая версия, известные проблемы. Следи за метриками: частота коммитов, как быстро закрывают issues, активность сообщества. Так раньше заметишь, если пакет забросили.",
                "check": "используй инструменты типа 'libyear' или 'deps.dev' для отслеживания метрик здоровья пакета"
              }
            ]
          }
    ]
  },
  "de": {
    "title": "Go-Bibliothek Bewertung",
    "toggleShow": "Alle Erklärungen anzeigen",
    "toggleHide": "Alle Erklärungen ausblenden",
    "scoreLabel": "Ihre Bewertung",
    "languageNames": {
      "en": "🌐 Englisch",
      "ru": "🌐 Russisch",
      "de": "🌐 Deutsch",
      "th": "🌐 Thailändisch"
    },
    "themeNames": {
      "light": "☀️ Hell",
      "dark": "🌙 Dunkel"
    },
    "categories": [
      {
        "title": "Erstbewertung",
        "items": [
          {
            "text": "Löst es ein reales Problem?",
            "explanation": "Das Paket sollte eine konkrete Aufgabe lösen, die Sie regelmäßig haben, nicht nur ein praktisches Tool sein.",
            "check": "Fragen Sie sich: Wird es wirklich Zeit sparen oder ein wichtiges Problem lösen?"
          },
          {
            "text": "Einfacher als selbst schreiben?",
            "explanation": "Wenn die Aufgabe einfach ist und in ein paar Stunden implementiert werden kann, benötigen Sie möglicherweise keine zusätzliche Abhängigkeit.",
            "check": "Überlegen Sie: Wäre es nicht schneller, eine eigene Lösung zu schreiben?"
          },
          {
            "text": "Mit Alternativen verglichen?",
            "explanation": "Nehmen Sie nicht das erste Paket, das Sie finden. Schauen Sie sich mindestens 2-3 Optionen an: vergleichen Sie Funktionen, Popularität und Update-Häufigkeit. Dies hilft Ihnen, die richtige Wahl zu treffen.",
            "check": "Suche auf pkg.go.dev, GitHub Explore, awesome-go Listen"
          },
          {
            "text": "Offizielles Paket?",
            "explanation": "Offizielle Pakete (von Service-Erstellern oder bekannten Unternehmen) sind in der Regel zuverlässiger. Zum Beispiel wird AWS SDK for Go besser gepflegt als Drittanbieter-AWS-Bibliotheken.",
            "check": "Zum Beispiel wird AWS SDK for Go besser gepflegt als Drittanbieter-Bibliotheken"
          },
          {
            "text": "Nicht in der Standardbibliothek?",
            "explanation": "Die Go-Standardbibliothek ist ziemlich umfangreich. Prüfen Sie, ob diese Funktionalität bereits in stdlib oder Ihrem Framework vorhanden ist. Weniger Abhängigkeiten = weniger Probleme.",
            "check": "https://pkg.go.dev/std zum Durchsuchen der stdlib"
          },
          {
            "text": "In Produktionsprojekten verwendet?",
            "explanation": "Sehen Sie, wer das Paket in der Produktion verwendet. Überprüfen Sie Abhängigkeiten auf GitHub, lesen Sie Bewertungen. In der Praxis erprobter Code ist normalerweise zuverlässiger.",
            "check": "'Used by'-Bereich auf GitHub, 'Imported by'-Zähler auf pkg.go.dev"
          },
          {
            "text": "Bewältigt Ihre Last?",
            "explanation": "Stellen Sie sicher, dass das Paket Ihre Last bewältigen kann und gut mit Goroutinen funktioniert. Suchen Sie nach Benchmarks, Performance-Tests und Geschwindigkeitsbewertungen.",
            "check": "Führen Sie 'go test -bench=.' für Benchmarks aus, 'go test -race' zur Race-Prüfung"
          }
        ]
      },
      {
        "title": "Sicherheit & Quellen",
        "items": [
          {
            "text": "Vertrauenswürdige Quelle?",
            "explanation": "Das Paket sollte auf einer vertrauenswürdigen Plattform sein: GitHub, GitLab oder offizielles Go-Repository. Meiden Sie verdächtige Quellen — Ihre Sicherheit ist wichtiger.",
            "check": "Überprüfen Sie Repository-URL auf pkg.go.dev, bewerten Sie Domain-Reputation"
          },
          {
            "text": "Bekannter Autor?",
            "explanation": "Überprüfen Sie, wer das Paket erstellt hat. Sehen Sie sich ihre anderen Projekte und Open-Source-Aktivitäten an. Bekannte Entwickler und Unternehmen verlassen ihre Projekte normalerweise nicht.",
            "check": "GitHub-Profil, Beitragshistorie, andere beliebte Projekte"
          },
          {
            "text": "Aktives Repository?",
            "explanation": "Ein gutes Repository wird regelmäßig aktualisiert: frische Commits, Antworten auf Issues, PR-Annahme. Überprüfen Sie, wann der letzte Commit war und was in den letzten 6 Monaten bis zu einem Jahr passiert ist.",
            "check": "GitHub Insights → Pulse, Contributors-Grafiken"
          },
          {
            "text": "Akzeptable Lizenz?",
            "explanation": "Überprüfen Sie die Lizenz. MIT, Apache 2.0, BSD sind für kommerzielle Projekte in Ordnung. GPL/AGPL erfordern das Öffnen von Quellen — nicht geeignet für Unternehmen.",
            "check": "LICENSE-Datei auf GitHub, 'go-licenses'-Tool oder https://choosealicense.com"
          },
          {
            "text": "Beliebtes Paket?",
            "explanation": "Schauen Sie sich GitHub-Sterne, Anzahl der Importe auf pkg.go.dev, Forks an. Viele Benutzer = viele Augen auf dem Code = weniger Chance, einen Fehler zu übersehen.",
            "check": "'Imported by'-Zähler auf pkg.go.dev, Sterne/Forks auf GitHub"
          },
          {
            "text": "Besteht Sicherheitsprüfungen?",
            "explanation": "Führen Sie das Paket durch Sicherheitsscanner: gosec, govulncheck, Snyk. Sie finden bekannte Schwachstellen und gefährliche Muster, bevor Sie das Paket zu Ihrem Projekt hinzufügen.",
            "check": "Führen Sie 'gosec ./...' und 'govulncheck ./...' aus"
          },
          {
            "text": "Saubere Abhängigkeiten?",
            "explanation": "Überprüfen Sie nicht nur das Paket selbst, sondern alles, was es mit sich bringt. Führen Sie 'go list -m all' aus und prüfen Sie auf Schwachstellen. Ein verwundbares Paket in der Kette — und alles ist gefährdet.",
            "check": "Führen Sie 'go list -m all' aus, dann 'govulncheck' auf dem gesamten Baum"
          }
        ]
      },
      {
        "title": "Codequalität",
        "items": [
          {
            "text": "Aktiv entwickelt?",
            "explanation": "Suchen Sie nach frischen Commits in den letzten 3-6 Monaten. Aktive Entwicklung bedeutet, dass Fehler behoben werden, Sicherheitspatches veröffentlicht werden und das Paket mit neuen Go-Versionen Schritt hält.",
            "check": "Commit-Historie auf GitHub, 'git log --since='6 months ago''"
          },
          {
            "text": "Fehler schnell behoben?",
            "explanation": "Überprüfen Sie Issues auf GitHub. Wie schnell werden Fehler und Sicherheitsprobleme geschlossen? Tage bis Wochen sind normal, aber wenn sie monatelang offen bleiben — das ist ein schlechtes Zeichen.",
            "check": "GitHub Issues → sortieren nach 'Recently updated', prüfen Sie Issue-Alter"
          },
          {
            "text": "Hat Tests?",
            "explanation": "Gute Pakete haben *_test.go-Dateien und CI/CD (wie GitHub Actions). Tests fangen Fehler ab, bevor sie Sie erreichen. Achten Sie auf das Test-Coverage-Badge.",
            "check": "Suchen Sie nach *_test.go-Dateien, .github/workflows/, führen Sie 'go test -cover ./...' aus"
          },
          {
            "text": "Lesbarer Code?",
            "explanation": "Öffnen Sie die Quellen und schauen Sie nach. Ist der Code klar, gibt es Kommentare, ist er gut organisiert? Lesbarer Code ist einfacher zu reparieren, wenn etwas kaputt geht oder geforkt werden muss.",
            "check": "Lesen Sie Hauptpaket-Dateien auf GitHub, überprüfen Sie godoc-Kommentare"
          },
          {
            "text": "Besteht Linter?",
            "explanation": "Führen Sie es durch go vet, staticcheck, golangci-lint. Wenn es sauber durchläuft — das ist ein gutes Zeichen. Saubere statische Analyse = weniger versteckte Probleme.",
            "check": "Führen Sie 'go vet ./...', 'staticcheck ./...' oder 'golangci-lint run' aus"
          },
          {
            "text": "Idiomatisch geschrieben?",
            "explanation": "Code sollte dem Go-Stil folgen: richtige Namen, korrekte Fehlerbehandlung, Struktur wie in Effective Go. Idiomatischer Code ist vorhersehbar und lässt sich leicht in Ihr Projekt integrieren.",
            "check": "Lesen Sie https://go.dev/doc/effective_go, führen Sie 'gofmt -l .' aus"
          },
          {
            "text": "Wenige Abhängigkeiten?",
            "explanation": "Schauen Sie sich go.mod an. Weniger Abhängigkeiten ist besser: weniger Schwachstellen, schnellere Builds, einfacher zu warten. Jede Abhängigkeit = zusätzliches Risiko.",
            "check": "Führen Sie 'go mod graph' oder 'go list -m all' aus, zählen Sie Abhängigkeiten"
          }
        ]
      },
      {
        "title": "Sicherheit & Compliance",
        "items": [
          {
            "text": "Auf Schwachstellen gescannt?",
            "explanation": "Führen Sie govulncheck (offizielles Go-Tool) oder go mod audit aus. Dies sollte VOR dem Hinzufügen des Pakets erfolgen, um Sicherheitsprobleme sofort zu identifizieren.",
            "check": "Führen Sie 'go install golang.org/x/vuln/cmd/govulncheck@latest' dann 'govulncheck ./...' aus"
          },
          {
            "text": "Schwachstellendatenbanken geprüft?",
            "explanation": "Überprüfen Sie pkg.go.dev/vuln und GitHub Advisory Database. Sie sammeln Informationen über alle bekannten Sicherheitsprobleme.",
            "check": "Besuchen Sie https://pkg.go.dev/vuln/list, suchen Sie Paket auf https://github.com/advisories"
          },
          {
            "text": "Für Ihr Unternehmen geeignet?",
            "explanation": "Überprüfen Sie, dass die Lizenz kommerzielle Nutzung erlaubt. MIT, Apache 2.0, BSD sind in Ordnung. GPL/AGPL erfordern das Öffnen von Quellen — seien Sie vorsichtig damit. Bei Zweifeln — zeigen Sie es Anwälten.",
            "check": "Verwenden Sie 'go-licenses' oder https://tldrlegal.com für Lizenzerklärungen"
          },
          {
            "text": "Keine Patente oder Einschränkungen?",
            "explanation": "Manchmal können Pakete Patentbeschränkungen oder Exportverbote haben (besonders Krypto-Bibliotheken). Überprüfen Sie, dass es keine rechtlichen Probleme für Ihr Unternehmen gibt.",
            "check": "Studieren Sie LICENSE- und PATENTS-Dateien, überprüfen Sie Krypto-Exportbeschränkungen"
          },
          {
            "text": "Erfüllt regulatorische Anforderungen?",
            "explanation": "Wenn Sie mit personenbezogenen Daten (GDPR) oder Finanzvorschriften (PCI-DSS, SOC2) arbeiten — stellen Sie sicher, dass das Paket sensible Informationen richtig verschlüsseln, protokollieren und speichern kann.",
            "check": "Suchen Sie nach Compliance-Badges, Audit-Berichten, Zertifikaten in README"
          },
          {
            "text": "Auto-Scanning konfiguriert?",
            "explanation": "Aktivieren Sie automatisches Scannen in CI/CD: Dependabot, Snyk, GitHub Security Advisories. Dies verfolgt neue Schwachstellen auch nachdem Sie das Paket hinzugefügt haben.",
            "check": "Aktivieren Sie GitHub Dependabot, fügen Sie Snyk hinzu oder verwenden Sie 'nancy' in CI-Pipeline"
          },
          {
            "text": "Hat Compliance-Dokumentation?",
            "explanation": "Für Unternehmen ist Dokumentation wichtig: welche Standards erfüllt werden, Audit-Berichte, Sicherheitspraktiken. Besonders kritisch für Fintech.",
            "check": "Suchen Sie nach SECURITY.md, Compliance-Badges, Audit-Berichten im docs/-Ordner"
          }
        ]
      },
      {
        "title": "Testing",
        "items": [
          {
            "text": "In Sandbox getestet?",
            "explanation": "Führen Sie das Paket zuerst auf dev/staging oder hinter einem Feature-Flag aus. So können Sie sicherstellen, dass alles funktioniert, ohne echte Benutzer zu beeinträchtigen, wenn etwas schief geht.",
            "check": "Verwenden Sie Feature-Flag-Bibliotheken wie 'flipt' oder 'unleash', testen Sie in separater Umgebung"
          },
          {
            "text": "Fuzzing durchgeführt?",
            "explanation": "Führen Sie Fuzzing-Tests aus (in Go 1.18+ eingebaut). Es findet Grenzfälle und seltsames Verhalten. Für kritische Dinge erwägen Sie auch einen Pentest.",
            "check": "Führen Sie 'go test -fuzz=.' für Fuzzing aus, verwenden Sie OWASP ZAP oder Burp Suite für Pentest"
          },
          {
            "text": "Hat Integrationstests?",
            "explanation": "Schreiben Sie Tests für IHRE Anwendungsfälle, für IHRE Anwendung. Testen Sie echte Produktionsszenarien, nicht nur Beispiele aus der Paketdokumentation.",
            "check": "Schreiben Sie Integrationstests in *_integration_test.go, verwenden Sie testcontainers-go"
          },
          {
            "text": "Bewältigt Last?",
            "explanation": "Testen Sie das Paket unter Last: hoher Traffic, langsames Netzwerk, Timeouts, Ausfälle. Behandelt es Fehler ordnungsgemäß? Gibt es Timeouts? Keine Speicher- oder Goroutine-Lecks?",
            "check": "Verwenden Sie 'vegeta' oder 'hey' für Lasttests, 'toxiproxy' für Netzwerk-Chaos-Emulation, führen Sie mit '-memprofile' aus"
          },
          {
            "text": "Hat Update-Prozess?",
            "explanation": "Dokumentieren Sie, wie das Paket aktualisiert wird. Wer ist verantwortlich, wie testet man Updates, was tun, wenn ein Update Code bricht. Besonders wichtig für Sicherheitspatches.",
            "check": "Dokumentieren Sie in RUNBOOK.md oder Team-Wiki, setzen Sie Kalender-Erinnerungen"
          },
          {
            "text": "Releases verfolgen?",
            "explanation": "Richten Sie Benachrichtigungen ein: GitHub Watch, RSS, Dependabot. Sie werden über Updates, neue Features, Bugfixes und vor allem — Sicherheitspatches — informiert.",
            "check": "Aktivieren Sie GitHub Watch → Nur Releases, verwenden Sie Dependabot-Warnungen, abonnieren Sie Release-RSS"
          },
          {
            "text": "Kann ersetzt werden?",
            "explanation": "Pinnen Sie die Version in go.mod. Stellen Sie sicher, dass das Paket entfernt/ersetzt werden kann, wenn nötig (gute Abstraktion hilft). Vermeiden Sie Pakete, die sich tief in den Code einbetten.",
            "check": "Verwenden Sie exakte Versionen in go.mod, kapseln Sie Paket in Ihr Interface"
          }
        ]
      },
      {
        "title": "Monitoring",
        "items": [
          {
            "text": "Warnungen konfiguriert?",
            "explanation": "Richten Sie Auto-Warnungen für Schwachstellen, neue Releases, Breaking Changes ein. Dependabot, Snyk, GitHub Security Advisories — wählen Sie, was Sie mögen, aber richten Sie es sicher ein.",
            "check": "Aktivieren Sie GitHub Dependabot-Warnungen, konfigurieren Sie Snyk-Integration oder verwenden Sie 'renovate'-Bot"
          },
          {
            "text": "Abhängigkeiten regelmäßig prüfen?",
            "explanation": "Einmal im Monat oder Quartal überprüfen Sie alle Abhängigkeiten: gibt es Updates, Sicherheitsprobleme, vielleicht existieren schon bessere Alternativen. Sonst sammelt sich technische Schuld an.",
            "check": "Führen Sie 'go list -u -m all' aus, um Updates zu prüfen, setzen Sie wiederkehrende Kalender-Erinnerungen"
          },
          {
            "text": "Haben Rollback-Plan?",
            "explanation": "Dokumentieren Sie, wie man das Paket schnell entfernen/zurückrollen kann, wenn eine kritische Schwachstelle gefunden wird oder es in der Produktion abstürzt. Testen Sie den Plan im Voraus, bevor Sie ihn dringend benötigen.",
            "check": "Dokumentieren Sie Rollback-Verfahren, üben Sie auf Staging, verwenden Sie Version-Pinning in go.mod"
          },
          {
            "text": "Wer ist für das Paket verantwortlich?",
            "explanation": "Weisen Sie eine bestimmte Person oder ein Team zu, um diese Abhängigkeit zu überwachen. Sie überwachen den Status, aktualisieren, entscheiden über Versionsänderungen oder suchen nach Ersatz. Ohne Eigentümer wird das Paket aufgegeben.",
            "check": "Fügen Sie zur CODEOWNERS-Datei hinzu, dokumentieren Sie im Team-Wiki, konfigurieren Sie Verantwortungsmatrix"
          },
          {
            "text": "Maintainer reagieren?",
            "explanation": "Überprüfen Sie, ob Maintainer auf Issues und PRs reagieren. Wenn sie schnell reagieren — werden Fehler behoben, Fragen beantwortet. Schauen Sie sich die letzten Antworten in Issues an.",
            "check": "Überprüfen Sie Antwortzeit bei aktuellen Issues/PRs, prüfen Sie Maintainer-Aktivität auf GitHub"
          },
          {
            "text": "Was wenn aufgegeben?",
            "explanation": "Was werden Sie tun, wenn das Paket nicht mehr gewartet wird? Planen Sie: forken, Alternative finden, selbst schreiben. Setzen Sie nicht alles auf Pakete mit einem Entwickler ohne Backup-Plan.",
            "check": "Dokumentieren Sie alternative Pakete, bereiten Sie Fork-Strategie vor, bewerten Sie Bus-Faktor"
          },
          {
            "text": "Dokumentation pflegen?",
            "explanation": "Notieren Sie, warum Sie das Paket gewählt haben, welche Version, bekannte Probleme. Verfolgen Sie Metriken: Commit-Häufigkeit, wie schnell Issues geschlossen werden, Community-Aktivität. So bemerken Sie früher, wenn das Paket aufgegeben wurde.",
            "check": "Verwenden Sie Tools wie 'libyear' oder 'deps.dev', um Paket-Gesundheitsmetriken zu verfolgen"
          }
        ]
      }
    ]
  },
  "th": {
    "title": "การประเมินไลบรารี Go",
    "toggleShow": "แสดงคำอธิบายทั้งหมด",
    "toggleHide": "ซ่อนคำอธิบาย",
    "scoreLabel": "คะแนน",
    "languageNames": {
      "en": "🌐 อังกฤษ",
      "ru": "🌐 รัสเซีย",
      "de": "🌐 เยอรมัน",
      "th": "🌐 ไทย"
    },
    "themeNames": {
      "light": "☀️ สว่าง",
      "dark": "🌙 มืด"
    },
    "categories": [
      {
        "title": "การประเมินเบื้องต้น",
        "items": [
          {
            "text": "แก้ปัญหาจริงหรือไม่?",
            "explanation": "แพ็คเกจควรแก้ไขงานเฉพาะที่คุณพบเป็นประจำ ไม่ใช่แค่เครื่องมือที่สะดวก",
            "check": "ถามตัวเอง: มันจะช่วยประหยัดเวลาจริงๆ หรือแก้ปัญหาสำคัญหรือไม่?"
          },
          {
            "text": "ง่ายกว่าเขียนเองหรือไม่?",
            "explanation": "หากงานเรียบง่ายและสามารถทำได้ภายในสองสามชั่วโมง คุณอาจไม่จำเป็นต้องเพิ่ม dependency",
            "check": "คิดว่า: การเขียนโซลูชันเองจะเร็วกว่าหรือไม่?"
          },
          {
            "text": "เปรียบเทียบกับทางเลือกอื่นแล้วหรือไม่?",
            "explanation": "อย่าใช้แพ็คเกจแรกที่พบ ดูอย่างน้อย 2-3 ตัวเลือก: เปรียบเทียบฟีเจอร์ ความนิยม และความถี่ในการอัปเดต นี่จะช่วยให้คุณเลือกได้ถูกต้อง",
            "check": "ค้นหาใน pkg.go.dev, GitHub Explore, awesome-go lists"
          },
          {
            "text": "เป็นแพ็คเกจอย่างเป็นทางการหรือไม่?",
            "explanation": "แพ็คเกจอย่างเป็นทางการ (จากผู้สร้างบริการหรือบริษัทที่มีชื่อเสียง) มักจะน่าเชื่อถือกว่า ตัวอย่างเช่น AWS SDK for Go ได้รับการดูแลดีกว่าไลบรารี AWS จากบุคคลที่สาม",
            "check": "ตัวอย่างเช่น AWS SDK for Go ได้รับการดูแลดีกว่าไลบรารี AWS จากบุคคลที่สาม"
          },
          {
            "text": "ไม่มีใน standard library หรือ?",
            "explanation": "Standard library ของ Go ค่อนข้างสมบูรณ์ ตรวจสอบว่าฟังก์ชันนี้มีอยู่ใน stdlib หรือเฟรมเวิร์กของคุณแล้วหรือไม่ dependency น้อย = ปัญหาน้อย",
            "check": "ไปที่ https://pkg.go.dev/std เพื่อดู stdlib"
          },
          {
            "text": "ใช้ในโปรเจกต์จริงแล้วหรือไม่?",
            "explanation": "ดูว่าใครใช้แพ็คเกจนี้ในการผลิต ตรวจสอบ dependencies บน GitHub อ่านรีวิว โค้ดที่ผ่านการใช้งานจริงมักจะเชื่อถือได้มากกว่า",
            "check": "ส่วน 'Used by' บน GitHub, ตัวนับ 'Imported by' บน pkg.go.dev"
          },
          {
            "text": "รับมือกับโหลดของคุณได้หรือไม่?",
            "explanation": "ตรวจสอบให้แน่ใจว่าแพ็คเกจสามารถจัดการกับโหลดของคุณและทำงานได้ดีกับ goroutines มองหาเบนช์มาร์ก การทดสอบประสิทธิภาพ และรีวิวเกี่ยวกับความเร็ว",
            "check": "รัน 'go test -bench=.' สำหรับเบนช์มาร์ก, 'go test -race' เพื่อตรวจสอบ race conditions"
          }
        ]
      },
      {
        "title": "ความปลอดภัยและแหล่งที่มา",
        "items": [
          {
            "text": "แหล่งที่มาน่าเชื่อถือหรือไม่?",
            "explanation": "แพ็คเกจควรอยู่บนแพลตฟอร์มที่เชื่อถือได้: GitHub, GitLab หรือที่เก็บ Go อย่างเป็นทางการ หลีกเลี่ยงแหล่งที่น่าสงสัย เพราะความปลอดภัยของคุณสำคัญกว่า",
            "check": "ตรวจสอบ URL ของที่เก็บบน pkg.go.dev, ประเมินชื่อเสียงของโดเมน"
          },
          {
            "text": "ผู้เขียนเป็นที่รู้จักหรือไม่?",
            "explanation": "ตรวจสอบว่าใครสร้างแพ็คเกจ ดูโปรเจกต์อื่นๆ ของพวกเขาและกิจกรรม open source นักพัฒนาและบริษัทที่รู้จักมักจะไม่ทิ้งโปรเจกต์",
            "check": "โปรไฟล์ GitHub, ประวัติการมีส่วนร่วม, โปรเจกต์ยอดนิยมอื่นๆ"
          },
          {
            "text": "ที่เก็บมีการใช้งานอยู่หรือไม่?",
            "explanation": "ที่เก็บที่ดีจะได้รับการอัปเดตเป็นประจำ: commits ใหม่, การตอบ issues, การรับ PR ตรวจสอบว่า commit ล่าสุดเมื่อไหร่และเกิดอะไรขึ้นใน 6 เดือนถึง 1 ปีที่ผ่านมา",
            "check": "GitHub Insights → Pulse, กราฟ Contributors"
          },
          {
            "text": "ใบอนุญาตที่ยอมรับได้หรือไม่?",
            "explanation": "ตรวจสอบใบอนุญาต MIT, Apache 2.0, BSD เหมาะสำหรับโปรเจกต์เชิงพาณิชย์ GPL/AGPL ต้องเปิดซอร์ส ไม่เหมาะสำหรับธุรกิจ",
            "check": "ไฟล์ LICENSE บน GitHub, เครื่องมือ 'go-licenses' หรือ https://choosealicense.com"
          },
          {
            "text": "เป็นแพ็คเกจที่ได้รับความนิยมหรือไม่?",
            "explanation": "ดูดาวบน GitHub, จำนวนการนำเข้าบน pkg.go.dev, forks ผู้ใช้มาก = มีคนดูโค้ดมาก = โอกาสพลาดบั๊กน้อย",
            "check": "ตัวนับ 'Imported by' บน pkg.go.dev, stars/forks บน GitHub"
          },
          {
            "text": "ผ่านการตรวจสอบความปลอดภัยหรือไม่?",
            "explanation": "รันแพ็คเกจผ่านสแกนเนอร์ความปลอดภัย: gosec, govulncheck, Snyk พวกเขาจะค้นหาช่องโหว่และรูปแบบที่อันตรายก่อนที่คุณจะเพิ่มแพ็คเกจเข้าโปรเจกต์",
            "check": "รัน 'gosec ./...' และ 'govulncheck ./...'"
          },
          {
            "text": "dependencies สะอาดหรือไม่?",
            "explanation": "ตรวจสอบไม่เพียงแค่ตัวแพ็คเกจเอง แต่ทุกอย่างที่มันดึงเข้ามา รัน 'go list -m all' และตรวจสอบช่องโหว่ แพ็คเกจหนึ่งมีช่องโหว่ในสายโซ่ — และทุกอย่างเสี่ยง",
            "check": "รัน 'go list -m all', จากนั้น 'govulncheck' บนทรีทั้งหมด"
          }
        ]
      },
      {
        "title": "คุณภาพโค้ด",
        "items": [
          {
            "text": "พัฒนาอย่างต่อเนื่องหรือไม่?",
            "explanation": "มองหา commits ใหม่ในช่วง 3-6 เดือนที่ผ่านมา การพัฒนาที่ต่อเนื่องหมายความว่าบั๊กได้รับการแก้ไข มีการปล่อย security patches และแพ็คเกจทันกับเวอร์ชัน Go ใหม่",
            "check": "ประวัติ commit บน GitHub, 'git log --since='6 months ago''"
          },
          {
            "text": "แก้บั๊กเร็วหรือไม่?",
            "explanation": "ตรวจสอบ Issues บน GitHub บั๊กและปัญหาความปลอดภัยถูกปิดเร็วแค่ไหน? วันถึงสัปดาห์เป็นเรื่องปกติ แต่ถ้าค้างหลายเดือน นั่นเป็นสัญญาณไม่ดี",
            "check": "GitHub Issues → เรียงตาม 'Recently updated', ตรวจสอบอายุของ issue"
          },
          {
            "text": "มีการทดสอบหรือไม่?",
            "explanation": "แพ็คเกจที่ดีมีไฟล์ *_test.go และ CI/CD (เช่น GitHub Actions) การทดสอบจับบั๊กก่อนที่จะถึงคุณ มองหาป้าย test coverage",
            "check": "มองหาไฟล์ *_test.go, .github/workflows/, รัน 'go test -cover ./...'"
          },
          {
            "text": "โค้ดอ่านง่ายหรือไม่?",
            "explanation": "เปิดซอร์สและดู โค้ดชัดเจนไหม มีคอมเมนต์ไหม จัดระเบียบดีไหม? โค้ดที่อ่านง่ายจะง่ายต่อการแก้ไขหากมีปัญหาหรือต้องการ fork",
            "check": "อ่านไฟล์แพ็คเกจหลักบน GitHub, ตรวจสอบคอมเมนต์ godoc"
          },
          {
            "text": "ผ่าน linters หรือไม่?",
            "explanation": "รันผ่าน go vet, staticcheck, golangci-lint ถ้าผ่านสะอาด นั่นเป็นสัญญาณที่ดี การวิเคราะห์แบบสแตติกที่สะอาด = ปัญหาที่ซ่อนอยู่น้อยลง",
            "check": "รัน 'go vet ./...', 'staticcheck ./...' หรือ 'golangci-lint run'"
          },
          {
            "text": "เขียนตามแบบแผน Go หรือไม่?",
            "explanation": "โค้ดควรปฏิบัติตามสไตล์ Go: ชื่อที่เหมาะสม, การจัดการ error ที่ถูกต้อง, โครงสร้างเหมือนใน Effective Go โค้ดที่เป็นแบบแผนคาดเดาได้และบูรณาการเข้ากับโปรเจกต์ของคุณได้ง่าย",
            "check": "อ่าน https://go.dev/doc/effective_go, รัน 'gofmt -l .'"
          },
          {
            "text": "dependencies น้อยหรือไม่?",
            "explanation": "ดู go.mod dependencies น้อยดีกว่า: ช่องโหว่น้อย, build เร็ว, ดูแลง่าย แต่ละ dependency = ความเสี่ยงเพิ่มเติม",
            "check": "รัน 'go mod graph' หรือ 'go list -m all', นับ dependencies"
          }
        ]
      },
      {
        "title": "ความปลอดภัยและการปฏิบัติตาม",
        "items": [
          {
            "text": "สแกนหาช่องโหว่แล้วหรือไม่?",
            "explanation": "รัน govulncheck (เครื่องมืออย่างเป็นทางการของ Go) หรือ go mod audit ควรทำสิ่งนี้ก่อนเพิ่มแพ็คเกจเพื่อระบุปัญหาความปลอดภัยทันที",
            "check": "รัน 'go install golang.org/x/vuln/cmd/govulncheck@latest' จากนั้น 'govulncheck ./...'"
          },
          {
            "text": "ตรวจสอบฐานข้อมูลช่องโหว่แล้วหรือไม่?",
            "explanation": "ตรวจสอบ pkg.go.dev/vuln และ GitHub Advisory Database พวกเขารวบรวมข้อมูลเกี่ยวกับปัญหาความปลอดภัยที่ทราบทั้งหมด",
            "check": "เยี่ยมชม https://pkg.go.dev/vuln/list, ค้นหาแพ็คเกจบน https://github.com/advisories"
          },
          {
            "text": "เหมาะสำหรับธุรกิจของคุณหรือไม่?",
            "explanation": "ตรวจสอบว่าใบอนุญาตอนุญาตให้ใช้เชิงพาณิชย์ MIT, Apache 2.0, BSD ใช้ได้ GPL/AGPL ต้องเปิดซอร์ส ระวังกับพวกเขา หากสงสัย แสดงให้ทนายความดู",
            "check": "ใช้ 'go-licenses' หรือ https://tldrlegal.com สำหรับคำอธิบายใบอนุญาต"
          },
          {
            "text": "ไม่มีสิทธิบัตรหรือข้อจำกัดหรือไม่?",
            "explanation": "บางครั้งแพ็คเกจอาจมีข้อจำกัดเรื่องสิทธิบัตรหรือการส่งออก (โดยเฉพาะไลบรารีเข้ารหัส) ตรวจสอบว่าไม่มีปัญหาทางกฎหมายสำหรับธุรกิจของคุณ",
            "check": "ศึกษาไฟล์ LICENSE และ PATENTS, ตรวจสอบข้อจำกัดการส่งออกเข้ารหัส"
          },
          {
            "text": "ตรงตามข้อกำหนดด้านกฎระเบียบหรือไม่?",
            "explanation": "หากคุณทำงานกับข้อมูลส่วนบุคคล (GDPR) หรือกฎระเบียบทางการเงิน (PCI-DSS, SOC2) ตรวจสอบให้แน่ใจว่าแพ็คเกจสามารถเข้ารหัส บันทึก และจัดเก็บข้อมูลที่ละเอียดอ่อนได้อย่างเหมาะสม",
            "check": "มองหาป้ายการปฏิบัติตาม, รายงานการตรวจสอบ, ใบรับรองใน README"
          },
          {
            "text": "ตั้งค่าการสแกนอัตโนมัติแล้วหรือไม่?",
            "explanation": "เปิดใช้งานการสแกนอัตโนมัติใน CI/CD: Dependabot, Snyk, GitHub Security Advisories สิ่งนี้จะติดตามช่องโหว่ใหม่แม้หลังจากที่คุณเพิ่มแพ็คเกจแล้ว",
            "check": "เปิดใช้งาน GitHub Dependabot, เพิ่ม Snyk หรือใช้ 'nancy' ใน CI pipeline"
          },
          {
            "text": "มีเอกสารการปฏิบัติตามหรือไม่?",
            "explanation": "สำหรับองค์กร เอกสารมีความสำคัญ: ปฏิบัติตามมาตรฐานใด, รายงานการตรวจสอบ, แนวปฏิบัติด้านความปลอดภัย สำคัญเป็นพิเศษสำหรับ fintech",
            "check": "มองหา SECURITY.md, ป้ายการปฏิบัติตาม, รายงานการตรวจสอบในโฟลเดอร์ docs/"
          }
        ]
      },
      {
        "title": "การทดสอบ",
        "items": [
          {
            "text": "ทดสอบใน sandbox แล้วหรือไม่?",
            "explanation": "รันแพ็คเกจบน dev/staging หรือหลังฟีเจอร์แฟล็กก่อน วิธีนี้คุณสามารถตรวจสอบให้แน่ใจว่าทุกอย่างทำงานโดยไม่กระทบต่อผู้ใช้จริงหากมีปัญหา",
            "check": "ใช้ไลบรารีฟีเจอร์แฟล็กเช่น 'flipt' หรือ 'unleash', ทดสอบในสภาพแวดล้อมแยก"
          },
          {
            "text": "รัน fuzzing แล้วหรือไม่?",
            "explanation": "รันการทดสอบ fuzzing (มาพร้อมกับ Go 1.18+) มันจะพบกรณีขอบและพฤติกรรมแปลกๆ สำหรับสิ่งสำคัญ พิจารณา pentest ด้วย",
            "check": "รัน 'go test -fuzz=.' สำหรับ fuzzing, ใช้ OWASP ZAP หรือ Burp Suite สำหรับ pentest"
          },
          {
            "text": "มีการทดสอบการบูรณาการหรือไม่?",
            "explanation": "เขียนการทดสอบสำหรับกรณีการใช้งานของคุณ สำหรับแอปพลิเคชันของคุณ ทดสอบสถานการณ์การผลิตจริง ไม่ใช่แค่ตัวอย่างจากเอกสารแพ็คเกจ",
            "check": "เขียนการทดสอบการบูรณาการใน *_integration_test.go, ใช้ testcontainers-go"
          },
          {
            "text": "รับมือกับโหลดได้หรือไม่?",
            "explanation": "ทดสอบแพ็คเกจภายใต้โหลด: ทราฟฟิกสูง, เครือข่ายช้า, timeouts, ความล้มเหลว มันจัดการข้อผิดพลาดได้อย่างเหมาะสมหรือไม่? มี timeouts หรือไม่? ไม่รั่วไหลหน่วยความจำหรือ goroutines หรือไม่?",
            "check": "ใช้ 'vegeta' หรือ 'hey' สำหรับการทดสอบโหลด, 'toxiproxy' สำหรับการจำลองความโกลาหลของเครือข่าย, รันกับ '-memprofile'"
          },
          {
            "text": "มีกระบวนการอัปเดตหรือไม่?",
            "explanation": "จดเอกสารวิธีอัปเดตแพ็คเกจ ใครรับผิดชอบ, วิธีทดสอบการอัปเดต, ทำอะไรหากการอัปเดตทำให้โค้ดเสีย สำคัญเป็นพิเศษสำหรับ security patches",
            "check": "จดเอกสารใน RUNBOOK.md หรือวิกิของทีม, ตั้งการเตือนในปฏิทิน"
          },
          {
            "text": "ติดตามการปล่อยหรือไม่?",
            "explanation": "ตั้งค่าการแจ้งเตือน: GitHub Watch, RSS, Dependabot คุณจะทราบเกี่ยวกับการอัปเดต ฟีเจอร์ใหม่ การแก้ไขบั๊ก และที่สำคัญที่สุด security patches",
            "check": "เปิดใช้งาน GitHub Watch → Releases only, ใช้การแจ้งเตือน Dependabot, subscribe to release RSS"
          },
          {
            "text": "สามารถเปลี่ยนได้หรือไม่?",
            "explanation": "ปักหมุดเวอร์ชันใน go.mod ตรวจสอบให้แน่ใจว่าแพ็คเกจสามารถลบ/แทนที่ได้หากจำเป็น (การออกแบบที่ดีช่วยได้) หลีกเลี่ยงแพ็คเกจที่ฝังลึกเข้าไปในโค้ด",
            "check": "ใช้เวอร์ชันที่แน่นอนใน go.mod, ห่อแพ็คเกจในอินเทอร์เฟซของคุณ"
          }
        ]
      },
      {
        "title": "การติดตาม",
        "items": [
          {
            "text": "ตั้งค่าการแจ้งเตือนแล้วหรือไม่?",
            "explanation": "ตั้งค่าการแจ้งเตือนอัตโนมัติสำหรับช่องโหว่, การปล่อยใหม่, การเปลี่ยนแปลงที่ทำลาย Dependabot, Snyk, GitHub Security Advisories เลือกสิ่งที่คุณชอบ แต่ต้องตั้งค่าให้แน่ใจ",
            "check": "เปิดใช้งานการแจ้งเตือน GitHub Dependabot, ตั้งค่าการบูรณาการ Snyk หรือใช้บอท 'renovate'"
          },
          {
            "text": "ตรวจสอบ dependencies เป็นประจำหรือไม่?",
            "explanation": "เดือนละครั้งหรือไตรมาสละครั้ง ตรวจสอบ dependencies ทั้งหมด: มีการอัปเดตไหม, ปัญหาความปลอดภัยไหม, อาจมีทางเลือกที่ดีกว่าแล้ว มิฉะนั้นหนี้ทางเทคนิคจะสะสม",
            "check": "รัน 'go list -u -m all' เพื่อตรวจสอบการอัปเดต, ตั้งการเตือนซ้ำในปฏิทิน"
          },
          {
            "text": "มีแผนย้อนกลับหรือไม่?",
            "explanation": "จดเอกสารวิธีลบ/ย้อนกลับแพ็คเกจอย่างรวดเร็วหากพบช่องโหว่สำคัญหรือมันล้มเหลวในการผลิต ทดสอบแผนล่วงหน้า ก่อนที่คุณจะต้องการมันอย่างเร่งด่วน",
            "check": "จดเอกสารขั้นตอนย้อนกลับ, ฝึกฝนบน staging, ใช้การปักหมุดเวอร์ชันใน go.mod"
          },
          {
            "text": "ใครเป็นเจ้าของแพ็คเกจ?",
            "explanation": "มอบหมายบุคคลหรือทีมเฉพาะเพื่อติดตาม dependency นี้ พวกเขาติดตามสถานะ อัปเดต ตัดสินใจเปลี่ยนเวอร์ชันหรือมองหาทางเลือก ไม่มีเจ้าของ แพ็คเกจจะถูกทอดทิ้ง",
            "check": "เพิ่มในไฟล์ CODEOWNERS, จดเอกสารในวิกิของทีม, ตั้งค่าเมทริกซ์ความรับผิดชอบ"
          },
          {
            "text": "ผู้ดูแลตอบสนองหรือไม่?",
            "explanation": "ตรวจสอบว่าผู้ดูแลตอบสนองต่อ issues และ PRs หรือไม่ หากพวกเขาตอบสนองอย่างรวดเร็ว บั๊กจะได้รับการแก้ไข คำถามจะได้รับคำตอบ ดูการตอบสนองล่าสุดใน issues",
            "check": "ตรวจสอบเวลาตอบสนองบน issues/PRs ล่าสุด, ตรวจสอบกิจกรรมของผู้ดูแลบน GitHub"
          },
          {
            "text": "จะทำอย่างไรถ้าถูกทิ้ง?",
            "explanation": "คุณจะทำอย่างไรหากแพ็คเกจหยุดได้รับการดูแล? วางแผน: fork มัน, หาทางเลือก, เขียนเอง อย่าเอาทุกอย่างไปไว้กับแพ็คเกจที่มีนักพัฒนาคนเดียวโดยไม่มีแผนสำรอง",
            "check": "จดเอกสารแพ็คเกจทางเลือก, เตรียมกลยุทธ์การ fork, ประเมิน bus factor"
          },
          {
            "text": "ดูแลเอกสารหรือไม่?",
            "explanation": "บันทึกว่าทำไมคุณถึงเลือกแพ็คเกจ เวอร์ชันใด ปัญหาที่ทราบ ติดตามเมตริก: ความถี่ของ commit, issues ปิดเร็วแค่ไหน, กิจกรรมของชุมชน วิธีนี้คุณจะสังเกตเห็นเร็วกว่าหากแพ็คเกจถูกทิ้ง",
            "check": "ใช้เครื่องมือเช่น 'libyear' หรือ 'deps.dev' เพื่อติดตามเมตริกสุขภาพแพ็คเกจ"
          }
        ]
      }
    ]
  }
}
